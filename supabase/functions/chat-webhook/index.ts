import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const webhookUrl = Deno.env.get('CHATBOT_WEBHOOK_URL');
    if (!webhookUrl) {
      throw new Error('CHATBOT_WEBHOOK_URL is not configured');
    }

    const { message, history } = await req.json();

    if (!message || typeof message !== 'string') {
      return new Response(
        JSON.stringify({ error: 'Missing or invalid "message" field' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, history: history || [] }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`Webhook returned ${response.status}: ${errorBody}`);
    }

    // Try to parse as JSON first, fall back to plain text
    const contentType = response.headers.get('content-type') || '';
    let reply: string;
    const rawText = await response.text();

    if (contentType.includes('application/json') && rawText.trim()) {
      try {
        const data = JSON.parse(rawText);
        // Support common response shapes: { reply }, { text }, { message }, { output }, or raw string
        reply = data.reply || data.text || data.message || data.output || JSON.stringify(data);
      } catch {
        reply = rawText || 'Received an empty response.';
      }
    } else {
      reply = rawText || 'Received an empty response.';
    }

    return new Response(
      JSON.stringify({ reply }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error: unknown) {
    console.error('Chat webhook error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});

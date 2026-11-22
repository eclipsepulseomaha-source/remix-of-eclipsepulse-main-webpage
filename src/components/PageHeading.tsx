export default function PageHeading({ title }: { title: string }) {
  return (
    <main className="bg-background py-32 text-center">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">{title}</h1>
    </main>
  );
}

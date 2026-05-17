import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Page Not Found (404) | Eclipse Pulse</title>
        <meta name="description" content="The page you're looking for doesn't exist. Head back to the Eclipse Pulse home page to learn about our AI chatbots for Omaha businesses." />
        <meta name="robots" content="noindex" />
        <link rel="canonical" href="https://eclipsepulseomaha.com/404" />
        <meta property="og:title" content="Page Not Found (404) | Eclipse Pulse" />
        <meta property="og:description" content="This Eclipse Pulse page could not be found. Return home to explore our AI chatbot services for Omaha businesses." />
        <meta property="og:url" content="https://eclipsepulseomaha.com/404" />
      </Helmet>
      <div className="flex min-h-screen items-center justify-center bg-muted">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">404</h1>
          <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
          <a href="/" className="text-primary underline hover:text-primary/90">
            Return to Home
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;

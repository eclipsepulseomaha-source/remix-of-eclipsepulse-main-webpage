const HEADING_GRADIENT = "linear-gradient(90deg, #F97015 0%, #F99E1F 50%, #3C83F6 100%)";

export default function PageHeading({
  title,
  bottomPaddingClass = "pb-32",
  transparentBackground = false,
}: {
  title: string;
  bottomPaddingClass?: string;
  transparentBackground?: boolean;
}) {
  return (
    <main
      className={`${transparentBackground ? "" : "bg-background"} pt-32 ${bottomPaddingClass} text-center`}
    >
      <h1
        className="inline-block max-w-full text-3xl md:text-4xl lg:text-5xl font-bold"
        style={{
          position: "relative",
          isolation: "isolate",
          backgroundImage: HEADING_GRADIENT,
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          WebkitTextFillColor: "transparent",
          paddingBottom: "0.25em",
        }}
      >
        {title}
        <span
          aria-hidden="true"
          className="absolute left-0 right-0 rounded-full"
          style={{
            height: 3,
            bottom: "calc(0.31em - 1.5px)",
            zIndex: -1,
            backgroundImage: HEADING_GRADIENT,
          }}
        />
      </h1>
    </main>
  );
}

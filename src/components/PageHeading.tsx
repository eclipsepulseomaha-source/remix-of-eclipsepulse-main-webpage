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
      <div className="inline-flex flex-col items-stretch max-w-full">
        <h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold"
          style={{
            backgroundImage: HEADING_GRADIENT,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            WebkitTextFillColor: "transparent",
            paddingBottom: "0.1em",
            marginBottom: "-0.1em",
          }}
        >
          {title}
        </h1>
        <span
          aria-hidden="true"
          className="block rounded-full"
          style={{ height: 3, marginTop: 10, backgroundImage: HEADING_GRADIENT }}
        />
      </div>
    </main>
  );
}

const HEADING_TEXT_CLASSES = "text-3xl md:text-4xl lg:text-5xl font-bold";
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
      <div
        className="inline-block max-w-full align-top"
        style={{ position: "relative", isolation: "isolate", paddingBottom: 13 }}
      >
        {/* Layer 1: underline bar, 10px below the text line */}
        <span
          aria-hidden="true"
          className="absolute left-0 right-0 bottom-0 rounded-full"
          style={{ height: 3, zIndex: 0, backgroundImage: HEADING_GRADIENT }}
        />
        {/* Layer 2: background-colored copy that cuts a gap in the bar around letter tails */}
        <span
          aria-hidden="true"
          className={`${HEADING_TEXT_CLASSES} absolute left-0 right-0 top-0 block select-none pointer-events-none`}
          style={{
            zIndex: 1,
            color: "#080A0C",
            WebkitTextFillColor: "#080A0C",
            WebkitTextStroke: "6px #080A0C",
            paddingBottom: "0.25em",
          }}
        >
          {title}
        </span>
        {/* Layer 3: the real gradient heading */}
        <h1
          className={HEADING_TEXT_CLASSES}
          style={{
            position: "relative",
            zIndex: 2,
            backgroundImage: HEADING_GRADIENT,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            WebkitTextFillColor: "transparent",
            paddingBottom: "0.25em",
            marginBottom: "-0.25em",
          }}
        >
          {title}
        </h1>
      </div>
    </main>
  );
}

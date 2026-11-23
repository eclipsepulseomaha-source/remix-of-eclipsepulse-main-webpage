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
      <h1
        className={`${HEADING_TEXT_CLASSES} inline-block max-w-full`}
        style={{
          backgroundImage: HEADING_GRADIENT,
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          WebkitTextFillColor: "transparent",
          // Keeps letter tails ("g", "p") inside the area the gradient paints,
          // so they are never clipped. The negative margin cancels the extra
          // space, leaving the layout exactly where it was.
          paddingBottom: "0.25em",
          marginBottom: "-0.25em",
        }}
      >
        {title}
      </h1>
    </main>
  );
}

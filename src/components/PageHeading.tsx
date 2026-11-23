const HEADING_TEXT_CLASSES = "text-3xl md:text-4xl lg:text-5xl font-bold";
const HEADING_GRADIENT = "linear-gradient(90deg, #F97015 0%, #F99E1F 50%, #3C83F6 100%)";
const DIVIDER_GRADIENT =
  "linear-gradient(to right, transparent 0%, #3C83F6 20%, #F99E1F 50%, #F97015 80%, transparent 100%)";

export default function PageHeading({
  title,
  bottomPaddingClass = "pb-[95.5px] md:pb-[91px]",
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
          // Soft black glow. text-shadow would bleed through the transparent
          // letter fill and muddy the gradient, so drop-shadow is used instead:
          // it shadows the painted shape of the letters only.
          filter:
            "drop-shadow(0 0 8px rgba(0, 0, 0, 0.9)) drop-shadow(0 0 18px rgba(0, 0, 0, 0.7))",
        }}
      >
        {title}
      </h1>
      {/* Decorative divider. The padding-bottom above is 0.25em, i.e. 12px at
          text-5xl, 9px at text-4xl and 7.5px at text-3xl, and the negative
          margin pulls the following content back up by that much. So adding
          that same amount back to the divider's top margin puts its top edge
          exactly 24px below the bottom of the painted letters at every size. */}
      <div
        aria-hidden="true"
        className="mx-auto mt-[31.5px] md:mt-[33px] lg:mt-[36px]"
        style={{
          height: 1,
          width: "min(60%, 480px)",
          opacity: 0.8,
          backgroundImage: DIVIDER_GRADIENT,
        }}
      />
    </main>
  );
}

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
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">{title}</h1>
    </main>
  );
}

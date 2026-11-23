export default function PageHeading({
  title,
  bottomPaddingClass = "pb-32",
}: {
  title: string;
  bottomPaddingClass?: string;
}) {
  return (
    <main className={`bg-background pt-32 ${bottomPaddingClass} text-center`}>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">{title}</h1>
    </main>
  );
}

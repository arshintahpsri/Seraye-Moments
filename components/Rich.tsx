type Segment = string | readonly [string];

/** Merender teks dengan bagian tebal: string biasa = teks, `[teks]` = tebal. */
export default function Rich({
  parts,
  strongClass = "text-ink",
}: {
  parts: readonly Segment[];
  strongClass?: string;
}) {
  return (
    <>
      {parts.map((p, i) =>
        typeof p === "string" ? (
          <span key={i}>{p}</span>
        ) : (
          <strong key={i} className={`font-bold ${strongClass}`}>
            {p[0]}
          </strong>
        ),
      )}
    </>
  );
}

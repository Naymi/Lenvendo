export default function row({
  cells,
  ctx: { elementClass }
}: {
  cells: (Node | string)[];
  ctx: {
    elementClass: string;
  };
}) {
  const el = document.createElement("tr");
  el.append(...cells);
  el.classList.add(elementClass);
  return el;
}

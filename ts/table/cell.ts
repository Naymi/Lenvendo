export default function cell(content: (string | Node)[]) {
  const el = document.createElement("td");
  el.append(...content);
}

import { getData } from "./api/getData";

function cell(content: Node | string | number) {
  const cell = document.createElement("td");
  cell.append(content as string | Node);
  return cell;
}
function img(src: string, alt?: string) {
  const img = document.createElement("img");
  img.src = src;
  alt != undefined && (img.alt = alt);
  return img;
}
function row(...cells: HTMLTableCellElement[]) {
  const row = document.createElement("tr");
  row.append(...cells);
  return row;
}
getData().then(data => {
  const rows = data.map(({ price, image, name }) =>
    row(cell(price), cell(img(image)), cell(name))
  );
  const table = document.createElement("table");
  table.append(...rows);
  document.querySelector("#data")?.append(table);
});

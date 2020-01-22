type TArguments = {
  elementClass: string;
};
export default (rows: (Node | string)[], { elementClass }: TArguments) => {
  const el = document.createElement("table");
  el.append(...rows);
  el.classList.add(elementClass);
  return el;
};

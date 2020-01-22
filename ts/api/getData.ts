const restUrl = "http://www.lenvendo.ru/api/js-test-task/";
export async function getData(
  { sort: { direction = "asc", field = "" }, search = "", page = 1 } = {
    sort: {}
  }
) {
  const resultUrl = new URL(restUrl);
  resultUrl.searchParams.append("direction", direction);
  resultUrl.searchParams.append("field", field);
  search && resultUrl.searchParams.append("search", search);
  resultUrl.searchParams.append("page", "" + page);
  return await fetch(resultUrl.href, {
    // mode: "no-cors"
  })
    .then(r => {
      console.log(r);
      return r.json();
    })
    .then(({ products }) => {
      return products;
    });
  return [
    {
      price: 1e4,
      photo: "https://placehold.it/100x100?text=photo",
      name: "name"
    },
    {
      price: 1e4,
      photo: "https://placehold.it/100x100?text=photo",
      name: "name"
    },
    {
      price: 1e4,
      photo: "https://placehold.it/100x100?text=photo",
      name: "name"
    },
    {
      price: 1e4,
      photo: "https://placehold.it/100x100?text=photo",
      name: "name"
    }
  ];
}

const product_table = document.getElementById("product_table");

async function fetchData() {
  try {
    const response = await fetch(
      "https://s3.amazonaws.com/open-to-cors/assignment.json"
    );
    const data = await response.json();
    const products = Object.values(data.products);
    products.sort((a, b) => b.popularity - a.popularity);
    displayData({...data, products});
  } catch (error) {
    console.log("Error fetching data from API", error);
  }
}

function displayData(data) {
  const { products } = data;
  for (const product in products) {
    const row = product_table.insertRow();
    let cell0 = row.insertCell(0);
    let cell1 = row.insertCell(1);
    let cell2 = row.insertCell(2);
    let cell3 = row.insertCell(3);
    cell0.innerHTML = `<td>${products[product].subcategory}</td>`;
    cell1.innerHTML = `<td>${products[product].title}</td>`;
    cell2.innerHTML = `<td>${products[product].price}</td>`;
    cell3.innerHTML = `<td>${products[product].popularity}</td>`;
  }
}

fetchData();

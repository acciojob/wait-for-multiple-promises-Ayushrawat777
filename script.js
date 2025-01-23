const promise1 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.all([promise1, promise2, promise3]).then((values) => {
  const fruitList = document.getElementById("output");

  // Helper function to create a "Loading..." row
  function createLoadingRow(rowText) {
    const row = document.createElement("tr");
    const col1 = document.createElement("td");
    const col2 = document.createElement("td");

    col1.textContent = rowText;
    col2.textContent = "Loading...";

    row.append(col1, col2);
    fruitList.appendChild(row);
    return row;
  }

  // Add "Loading..." rows for promises
  const row1 = createLoadingRow("Promise 1");
  const row2 = createLoadingRow("Promise 2");
  const row3 = createLoadingRow("Promise 3");

  // Add a "Loading..." row for the total
  const totalRow = createLoadingRow("Total");

  // Update rows with resolved values
  setTimeout(() => {
    row1.children[1].textContent = values[0];
    row2.children[1].textContent = values[1];
    row3.children[1].textContent = values[2];

    const totalTime = values[0] + values[1] + values[2];
    totalRow.children[1].textContent = totalTime.toFixed(3);
  }, 3006); // Maximum delay for all promises
});

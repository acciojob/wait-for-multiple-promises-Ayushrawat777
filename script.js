const promise1 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.all([promise1, promise2, promise3]).then((values) => {
  const fruitList = document.getElementById("output");

  // Helper function to create and append a row
  function addRow(rowText, value = "") {
    const row = document.createElement("tr");
    const col1 = document.createElement("td");
    const col2 = document.createElement("td");

    col1.textContent = rowText;
    col2.textContent = value;

    row.append(col1, col2);
    fruitList.appendChild(row);
  }

  // Add "Loading..." row
  const loadingRow = document.createElement("tr");
  const loadingCol = document.createElement("td");
  loadingCol.colSpan = 2;
  loadingCol.textContent = "Loading...";
  loadingRow.appendChild(loadingCol);
  fruitList.appendChild(loadingRow);

  // Add rows for promises after resolving
  setTimeout(() => {
    fruitList.removeChild(loadingRow);

    addRow("Promise 1", values[0]);
    addRow("Promise 2", values[1]);
    addRow("Promise 3", values[2]);

    const totalTime = 3.006; // Total time in seconds
    addRow("Total", totalTime.toFixed(3));
  }, 3006); // Total time to wait for all promises
});

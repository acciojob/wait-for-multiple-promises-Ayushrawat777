const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 2000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 2000);
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3);
  }, 2000);
});
Promise.all([promise1, promise2, promise3]).then((values) => {
  const fruitList = document.getElementById("output");
  const row = document.createElement("tr");
  const row2 = document.createElement("tr");
  const row3 = document.createElement("tr");

  const node1 = document.createElement("td");
  const node11 = document.createElement("td");
  node1.textContent = "Promise";
  node11.textContent = values[0];
  row.append(node1, node11);
  fruitList.appendChild(row);

  const node2 = document.createElement("td");
  const node22 = document.createElement("td");
  node2.textContent = "Promise";
  node22.textContent = values[1];
  row2.append(node2, node22);
  fruitList.appendChild(row2);

  const node3 = document.createElement("td");
  const node33 = document.createElement("td");
  node3.textContent = "Promise";
  node33.textContent = values[2];
  row3.append(node3, node33);
  fruitList.appendChild(row3);
});

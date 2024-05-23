const promise1 = new Promise((resolve, reject) => {
  resolve(2);
});
const promise2 = new Promise((resolve, reject) => {
  resolve(1);
});
const promise3 = new Promise((resolve, reject) => {
  resolve(3);
});
Promise.all([promise1, promise2, promise3]).then((values) => {
  const fruitList = document.getElementById("output");
  setTimeout(() => {
    const row = document.createElement("tr");
    const node1 = document.createElement("td");
    const node11 = document.createElement("td");
    node1.textContent = "Promise";
    node11.textContent = values[0];
    row.append(node1, node11);
    fruitList.appendChild(row);
  }, 2000);

  setTimeout(() => {
    const row2 = document.createElement("tr");
    const node2 = document.createElement("td");
    const node22 = document.createElement("td");
    node2.textContent = "Promise";
    node22.textContent = values[1];
    row2.append(node2, node22);
    fruitList.appendChild(row2);
  }, 1000);

  setTimeout(() => {
    const row3 = document.createElement("tr");
    const node3 = document.createElement("td");
    const node33 = document.createElement("td");
    node3.textContent = "Promise";
    node33.textContent = values[2];
    row3.append(node3, node33);
    fruitList.appendChild(row3);
  }, 3000);

  setTimeout(() => {
    const row4 = document.createElement("tr");
    const node4 = document.createElement("td");
    const node44 = document.createElement("td");
    node4.textContent = "Total";
    node44.textContent = values[0]+values[1]+values[2];
    row4.append(node4, node44);
    fruitList.appendChild(row4);
  }, 4000);
});

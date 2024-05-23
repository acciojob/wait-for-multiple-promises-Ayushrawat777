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

  //Row 1
  const row = document.createElement("tr");
  row.textContent = "Loading...";
  fruitList.appendChild(row);

  setTimeout(() => {
    row.textContent = "";

    const node1 = document.createElement("td");
    const node11 = document.createElement("td");
    row.append(node1, node11);
    const a = "       Promise 1      ";
    node1.textContent = a.trim("");
    node11.textContent = values[0];
  }, 2000);

  //Row 2
  const row2 = document.createElement("tr");
  row2.textContent = "Loading...";
  fruitList.appendChild(row2);

  setTimeout(() => {
    row2.textContent = "";
    const node2 = document.createElement("td");
    const node22 = document.createElement("td");
    row2.append(node2, node22);
    const b = "       Promise 2      ";
    node2.textContent = b.trim("");
    node22.textContent = values[1];
  }, 1000);

  //Row3
  const row3 = document.createElement("tr");
  row3.textContent = "Loading...";
  fruitList.appendChild(row3);
  setTimeout(() => {
    row3.textContent = "";
    const node3 = document.createElement("td");
    const node33 = document.createElement("td");
    row3.append(node3, node33);
    const c = "       Promise 3      ";
    node3.textContent = c.trim("");
    node33.textContent = values[2];
  }, 3000);
  //Row 4

  const row4 = document.createElement("tr");
  const node4 = document.createElement("td");
  const node44 = document.createElement("td");
  node4.textContent = "Total";
  row4.append(node4, node44);
  fruitList.appendChild(row4);
  const time = 3006;
  setTimeout(() => {
    node44.textContent = time / 1000;
  }, time);
});


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
    const node1 = document.createElement("td");
    const node11 = document.createElement("td");
    node1.textContent = "Loading...";
    node11.textContent = "Loading...";
    row.append(node1, node11);
    fruitList.appendChild(row);
  
    setTimeout(() => {
        node1.textContent = "Promise 1";
      node11.textContent = values[0];
    }, 2000);
  
    //Row 2
    const row2 = document.createElement("tr");
    const node2 = document.createElement("td");
    const node22 = document.createElement("td");
    node2.textContent = "Loading...";
    node22.textContent = "Loading...";
    row2.append(node2, node22);
    fruitList.appendChild(row2);
  
    setTimeout(() => {
        node2.textContent = "Promise 2";
      node22.textContent = values[1];
    }, 1000);
  
    //Row3
    const row3 = document.createElement("tr");
    const node3 = document.createElement("td");
    const node33 = document.createElement("td");
    node3.textContent = "Loading...";
    node33.textContent = "Loading...";
    row3.append(node3, node33);
    fruitList.appendChild(row3);
  
    setTimeout(() => {
        node3.textContent = "Promise 3";
      node33.textContent = values[2];
    }, 3000);
  
    const row4 = document.createElement("tr");
    const node4 = document.createElement("td");
    const node44 = document.createElement("td");
    node4.textContent = "Total";
    row4.append(node4, node44);
    fruitList.appendChild(row4);
    const time = 3006;
    setTimeout(() => {
      node44.textContent = time/1000 
    }, time);
  }); 

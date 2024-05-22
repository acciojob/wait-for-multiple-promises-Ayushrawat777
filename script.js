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
  setTimeout(() => {
    document.getElementById("col-1").innerHTML = values[0];
  }, 2000);
  setTimeout(() => {
    document.getElementById("col-2").innerHTML = values[1];
  }, 1000);
  setTimeout(() => {
    document.getElementById("col-3").innerHTML = values[2];
  }, 3000);
  setTimeout(() => {
    document.getElementById("col-4").innerHTML = Math.floor(
      values[0] + values[1] + values[2]
    );
  }, 3006);
});


function getRandomDelay() {
    return Math.random() * 2 + 1; // Random time between 1 and 3 seconds
  }
  
  const table = document.getElementById("promiseTable");
  const loadingText = document.getElementById("loadingText");
  
  // Create 3 promises with random delays
  const promises = Array.from({ length: 3 }, (_, index) => {
    const delay = getRandomDelay();
    return new Promise((resolve) => {
      setTimeout(() => resolve({ promise: `Promise ${index + 1}`, time: delay.toFixed(3) }), delay * 1000);
    });
  });
  
  // Use Promise.all() to wait for all promises to resolve
  Promise.all(promises).then((results) => {
    // Remove loading text row
    loadingText.parentNode.remove();
  
    // Add rows for each resolved promise
    let totalTime = 0;
    results.forEach(({ promise, time }) => {
      totalTime += parseFloat(time);
  
      const row = table.insertRow();
      const cell1 = row.insertCell(0);
      const cell2 = row.insertCell(1);
  
      cell1.textContent = promise;
      cell2.textContent = `${time} seconds`;
    });
  
    // Add a final row for the total time
    const totalRow = table.insertRow();
    const cell1 = totalRow.insertCell(0);
    const cell2 = totalRow.insertCell(1);
  
    cell1.textContent = "Total";
    cell2.textContent = `${totalTime.toFixed(3)} seconds`;
  });
  
let first_promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Resolved First after 1 second");
	}, 1000);
});

let second_promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Resolved First after 2 seconds");
	}, 3000);
});

let third_promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Resolved First after 3 seconds");
	}, 2000);
});

try {
	let result = Promise.all([first_promise, second_promise, third_promise]);
	result.then((data) => console.log(data));
} catch (error) {
	console.log(error);
}
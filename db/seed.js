const axios = require('axios');
const fs = require('fs');

fs.readFile('./products.json', 'utf8', (err, jsonString) => {
	const data = JSON.parse(jsonString);
	var products = data.products;
	for (const product in products) {
		axios({
			method: 'POST',
			url: 'http://localhost:9045/product/add',
			headers: { Authorization: 'Bearer token' },
			data: products[product]
		})
			.then(function (response) {
				console.log(response);
			})
			.catch(function (err) {
				console.log(err);
			});
	}
});

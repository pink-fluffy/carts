const fs = require('fs');

fs.readFile('./products.json', 'utf8', (err, jsonString) => {
	const data = JSON.parse(jsonString);
	var products = data.products;
	var brands = [];
	var categories = [];
	for (const product in products) {
		brands.push("'" + products[product].brand + "'");
		categories.push("'" + products[product].category + "'");
	}
	const uniqueBrands = brands.filter(function (item, pos) {
		return brands.indexOf(item) == pos;
	});
	const uniqueCategories = categories.filter(function (item, pos) {
		return categories.indexOf(item) == pos;
	});

	fs.writeFile('./category.js', 'const CATEGORIES = [' + uniqueCategories.toString() + '];', (err) => {
		if (err) {
			console.error(err);
			return;
		}
	});

	fs.writeFile('./brands.js', 'const BRANDS = [' + uniqueBrands.toString() + ']', (err) => {
		if (err) {
			console.error(err);
			return;
		}
	});
});

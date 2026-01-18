//Test
function sumar(a, b) {
	return a+b;
}

if (sumar(2, 3)===5) {
	console.log("Todos los test pasaron");
	process.exit(0);
} else {
	console.error("Test error");
	process.exit(1);
}

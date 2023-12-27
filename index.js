import fs from 'node:fs/promises'
try {
	// do everything in this block

	const data = await fs.readFile('./test.txt', { encoding: 'utf8' });

	console.log(data);

	// ignore the errors
} catch (err) {

	console.log("file does not exist");
	console.log(err);
}

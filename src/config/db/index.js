const mongoose = require('mongoose');

const options = {
    family: 4 // Use IPv4, skip trying IPv6
}

async function connect() {
	try {
		await mongoose.connect(process.env.MONGODB_URL, options);
		console.log('Connect successfully!');
	} catch (error) {
		console.log('Connect failed!');
	}
}

module.exports = { connect };

import express from 'express';
import bodyParser from 'body-parser';
import { createConnection } from 'mysql2';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const connection = createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'espectrosoft',
});

connection.connect(err => {
	if (err) {
		console.error('Error connecting to database:', err);
	} else {
		console.log('Connected to database');
	}
});

app.post('/api/login', async (req, res) => {

	const { email, password } = req.body;
	const query = `SELECT * FROM usuarios WHERE correo_electronico = ? AND contrasena = ?`;

	connection.query(query, [email, password], (err, results) => {
		if (err) {
			console.error('Error querying database:', err);
			res.status(500).send('Error querying database');
		} else if (results.length === 0) {
			res.status(401).send('Invalid username or password');
		} else {
			const user = results[0];
			const token = jwt.sign({ userId: user.id }, process.env.ACCESS_TOKEN_SECRET);
			res.json({ token });
		}
	});
});

app.listen(3001, () => {
	console.log('Server listening on port 3001');
});
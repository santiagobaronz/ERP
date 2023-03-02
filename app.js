/***************************************************************
 *                     Dependencies 
***************************************************************/

import express from 'express';
import bodyParser from 'body-parser';
import { createConnection } from 'mysql2';
import cors from 'cors';
import authRoute from './app/routes/authRoute.js'

const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

/***************************************************************
 *                     Database connection 
***************************************************************/

const connection = createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'espectrosoft',
});

connection.connect(err => {
	if (err) {
		console.error('Error al conectar a la base de datos');
	} else {
		console.log('Conectado a la base de datos');
	}
});

/***************************************************************
 *                          Routes 
***************************************************************/

app.use('/auth', authRoute )

/***************************************************************
 *                          Server 
***************************************************************/

app.listen(3001, () => {
	console.log('Server listening on port 3001');
});

export default connection;
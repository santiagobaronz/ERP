/***************************************************************
 *                     Dependencies 
***************************************************************/

import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import connection from '../../app.js';
import authenticateToken from '../middlewares/autenticateToken.js'

const router = express.Router();
dotenv.config();

/***************************************************************
 *                          Routes 
***************************************************************/

router.post('/login', async (req, res) => {

	const { email, password } = req.body;

	// Consulta a ambas tablas para encontrar una coincidencia
	const query = `
	SELECT *
	FROM usuarios u
	INNER JOIN empleados e ON u.ID_EMPLEADO = e.ID_EMPLEADO
	WHERE u.CORREO_ELECTRONICO = ? AND e.CLAVE = ?
`;

	connection.query(query, [email, password], (err, results) => {
		if (err) {
			console.error('Error querying database:', err);
			res.status(500).send('Error querying database');
		} else if (results.length === 0) {
			res.status(401).send('Invalid username or password');
		} else {
			const user = results[0];
			const token = jwt.sign({ userId: user.ID_USUARIO }, process.env.ACCESS_TOKEN_SECRET);
			res.json(token);
		}
	});
});

router.get('/userinfo', authenticateToken, (req, res) => {
	const userId = req.userId;
	const query = `
	SELECT *
	FROM usuarios u
	INNER JOIN empleados e ON u.ID_EMPLEADO = e.ID_EMPLEADO
	INNER JOIN cargos c ON e.ID_CARGO = c.ID_CARGO
	WHERE u.ID_USUARIO = ?
	`;
	connection.query(query, [userId], (err, results) => {
	  if (err) {
		console.error('Error querying database:', err);
		res.status(500).send('Error querying database');
	  } else if (results.length === 0) {
		res.status(401).send('Invalid user id');
	  } else {
		const user = results[0];
		res.json(user);
	  }
	});
  });
  

export default router;
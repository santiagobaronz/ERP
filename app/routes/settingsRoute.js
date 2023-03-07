/***************************************************************
 *                     Dependencies 
***************************************************************/

import express from 'express';
import connection from '../../app.js';

const router = express.Router();

/***************************************************************
 *                          Routes 
***************************************************************/

router.get('/main', async (req, res) => {

	const query = `SELECT * FROM ajustes_generales WHERE ID_AJUSTE = 1`;

	connection.query(query, (err, results) => {
		if (err) {
			console.error('Error querying database:', err);
			res.status(500).send('Error querying database');
		} else if (results.length === 0) {
			res.status(401).send('Invalid username or password');
		} else {
			const settings = results[0];
			res.json(settings);
		}
	});
});

export default router;
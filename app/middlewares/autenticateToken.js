import jwt from 'jsonwebtoken';

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401); // No se proporcionó un token de acceso

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, { ignoreExpiration: true }, (err, decoded) => {
    if (err) return res.sendStatus(403); // El token no es válido
    req.userId = decoded.userId;
    next(); // Verificación exitosa, continúa con la solicitud
  });
}

export default authenticateToken;
const jwt = require('jsonwebtoken')


// Middleware to validate JWT token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization']

  const token = authHeader && authHeader.split(' ')[1]
  if (!token) return res.status(401).json({ error: 'Token not found.' })

  jwt.verify(token, 'YOUR_SECRET_KEY', (err, user) => {
    if (err) return res.status(403).json({ error: 'Token is not valid.' })
    req.user = user
    next()
  })
}
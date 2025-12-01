import jwt from "jsonwebtoken";

export default function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;

    if(!authHeader) {
        return res.status(401).json({ error: "Token Não fornecido!" });
    }

    const [, token] = authHeader.split(" ");

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.id;
        next();
    } catch(error) {
        return res.status(403).json({ error: "Token inválido ou expirado!" });
    }
}
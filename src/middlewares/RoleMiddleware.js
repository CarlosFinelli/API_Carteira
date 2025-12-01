export function roleMiddleWare(rolesPermitidas = []) {
    return (req, res, next) => {
        const userRole = req.user.role;

        if(!rolesPermitidas.includes(userRole)) {
            return res
            .status(403)
            .json({ error: "Acesso negado: permissão insuficiente" });
        }

        return next();
    }
}
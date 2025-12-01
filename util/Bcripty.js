export async function hashPassword(senha) {
    const hashedPassword = await bcrypt.hash(senha, 10);
    return hashedPassword
}

export async function comparePassword(senha, hashedPassword) {
    const validation = await bcrypt.compare(senha, hashedPassword);

    return validation
}
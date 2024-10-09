import bcrypt from 'bcrypt';
import db from '../lib/db'
import { ERROR_MESSAGE, HASH_ROUND } from "./constants";

const generatePasswordHash = (password: string) => {
    const hashedPassword = bcrypt.hashSync(password, HASH_ROUND);
    return hashedPassword;
}

const checkDuplicateUser = async (email: string) => {
    try {
        const userCount = await db.user.count({
            where: {
                email: email,
            }
        })
        if (userCount > 0) throw ERROR_MESSAGE.alreadySignedUp
        return true
    }
    catch (error) {
        throw error
    }
}

export {
    generatePasswordHash,
    checkDuplicateUser,
}
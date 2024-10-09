import db from "../lib/db";
import { generatePasswordHash, checkDuplicateUser} from "../utils/authHelper";

function authService() {
    const signup = async (email: string, password: string) => {
        try {
            await checkDuplicateUser(email)

            const hashedPassword = generatePasswordHash(password)

            const userData = {
                email,
                password: hashedPassword,
            }

            const newUser = await db.user.create({
                data: userData
            })

            return newUser
        } catch (error) {
            throw error
        }
    }

    return {
        signup,
    }
}

export default authService();
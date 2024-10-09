import {FastifyInstance, FastifyReply, FastifyRequest} from 'fastify'
import { signUpSchema } from "../../schemas";
import { TAuthBody } from "../../schemas/types";
import authService from "../../services/authService";
import { ERROR_MESSAGE, SUCCESS_MESSAGE} from "../../utils/constants";
import {handleError} from "../../utils/errorHelper";

const authRoute = async (fastify: FastifyInstance) => {
    fastify.post('/signup', {schema: signUpSchema}, async (req: FastifyRequest<{Body: TAuthBody}>, rep: FastifyReply) => {
        const {email, password} = req.body

        try {
            await authService.signup(email, password)
            rep.status(SUCCESS_MESSAGE.signupSuccess.status).send(SUCCESS_MESSAGE.signupSuccess)
        } catch (error) {
            handleError(rep, ERROR_MESSAGE.badRequest, error)
        }
    });
}

export default authRoute;


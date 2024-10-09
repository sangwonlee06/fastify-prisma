import { Secret } from "jsonwebtoken";

const INITIAL_PASSWORD = process.env.INITIAL_PASSWORD
const SECRET_KEY = process.env.SECRET_KEY as Secret
const HASH_ROUND = Number(process.env.HASH_ROUND)
const JWT_ACCESS_TOKEN_EXPIRES_IN = process.env.JWT_ACCESS_TOKEN_EXPIRES_IN
const JWT_REFRESH_TOKEN_EXPIRES_IN = process.env.JWT_REFRESH_TOKEN_EXPIRES_IN

const ERROR_MESSAGE = {
    badRequest: {
        success: false,
        status: 400,
        message: 'Bad request',
    },
    likeAlreadyAdded: {
        success: false,
        status: 400,
        message: 'Like already added',
    },
    likeNotFound: {
        success: false,
        status: 400,
        message: 'Like not found',
    },
    unauthorized: {
        success: false,
        status: 401,
        message: 'Unauthorized',
    },
    invalidToken: {
        success: false,
        status: 401,
        message: 'Invalid token',
    },
    tokenNotExpired: {
        success: false,
        status: 401,
        message: 'Token not expired',
    },
    forbidden: {
        success: false,
        status: 403,
        message: 'Forbidden',
    },
    alreadySignedUp: {
        success: false,
        status: 403,
        message: 'User already signed up',
    },
    notFound: {
        success: false,
        status: 404,
        message: 'Not found',
    },
    preconditionFailed: {
        success: false,
        status: 412,
        message: 'Precondition failed',
    },
    serverError: {
        success: false,
        status: 500,
        message: 'Internal server error',
    },
} as const;

const SUCCESS_MESSAGE = {
    signInSuccess: {
        success: true,
        status: 201,
        message: 'Sign-in successful',
    },
    signOutSuccess: {
        success: true,
        status: 205,
        message: 'Sign-out successful',
    },
    tokenRefreshed: {
        success: true,
        status: 201,
        message: 'Token refreshed successfully',
    },
    accessTokenValid: {
        success: true,
        status: 200,
        message: 'Access token valid',
    },
    signupSuccess: {
        success: true,
        status: 201,
        message: 'Signup successful',
    },
} as const;


export {
    INITIAL_PASSWORD,
    SECRET_KEY,
    HASH_ROUND,
    JWT_ACCESS_TOKEN_EXPIRES_IN,
    JWT_REFRESH_TOKEN_EXPIRES_IN,
    ERROR_MESSAGE,
    SUCCESS_MESSAGE,
};

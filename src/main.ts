import Fastify from "fastify";
import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
import routes from "./routes";

const fastify = Fastify({
    logger: true,
}).withTypeProvider<TypeBoxTypeProvider>();

// fastify.get('/ping', async (request, reply) => {
//     return 'pong\n';
// });

fastify.register(routes);

const start = async () => {
    try {
        const PORT = 8000;
        await fastify.listen({ port: PORT });
        console.log(`Listening on ${PORT}`);
    } catch (error) {
        fastify.log.error(error);
        process.exit(1);
    }
};

start();

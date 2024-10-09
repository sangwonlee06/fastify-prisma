import Fastify from "fastify";

const fastify = Fastify();

fastify.get('/ping', async (request, reply) => {
    return 'pong\n';
});

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

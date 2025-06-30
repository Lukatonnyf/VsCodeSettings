import Fastify from 'fastify';
import { routes } from './routes';
import cors from '@fastify/cors';

const app = Fastify({ logger: true });
import { FastifyError, FastifyReply, FastifyRequest } from 'fastify';
app.setErrorHandler((error: FastifyError, request: FastifyRequest, reply: FastifyReply) => {
  reply.code(400).send({ message: error.message });
});

const start = async () => {
  try {
    await app.register(cors);
    await app.register(routes);

    const port = parseInt(process.env.PORT || '3000'); // Render usa process.env.PORT
    const host = '0.0.0.0'; // Importante!

    await app.listen({ port, host });

    console.log(`🚀 Server running at http://${host}:${port}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();

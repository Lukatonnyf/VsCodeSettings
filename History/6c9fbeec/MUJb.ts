import Fastify from 'fastify';
import { routes } from './routes';
import cors from '@fastify/cors';

const app = Fastify({ logger: true });

app.setErrorHandler((error, request, reply) => {
  reply.code(400).send({ message: error.message });
});

const start = async () => {
  try {
    await app.register(cors);
    await app.register(routes);

    const port = parseInt(process.env.PORT || '3000'); // Usa a variável de ambiente se existir
    const address = '0.0.0.0'; // Importante para ambientes como Render

    await app.listen({ port, host: address });

    console.log(`🚀 Server running at http://${address}:${port}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();

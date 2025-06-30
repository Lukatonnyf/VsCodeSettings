import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from 'fastify';
import { CreateCustomerController } from './controllers/CreateCostumerController';
import { ListCostumerController } from './controllers/ListCostumerController';

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
    return { ok: true };
  });

  fastify.post("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
    return new CreateCustomerController().handle(request, reply);
  });

  fastify.get("/feedbacks", async (request: FastifyRequest, reply: FastifyReply) => {
    return new CreateCustomerController().handle(request, reply);
  });
}

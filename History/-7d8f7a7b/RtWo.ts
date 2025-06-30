import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from 'fastify';
import { CreateCustomerController } from './controllers/CreateCostumerController';
import { ListCostumerController } from './controllers/ListCostumerController';

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

  fastify.get("/", async (request: FastifyRequest, reply: FastifyReply) => {
    // Aqui você pode retornar a lista de feedbacks que está no banco de dados ou em um array
    const feedbacks = await ListCostumerController.getAllFeedbacks(); // Supondo que exista uma função para pegar os feedbacks
    return { feedbacks }; // Retorna a lista de feedbacks
  });

  fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
    return { ok: true };
  });

  fastify.post("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
    return new CreateCustomerController().handle(request, reply);
  });

  fastify.get("/feedbacks", async (request: FastifyRequest, reply: FastifyReply) => {
    return new ListCostumerController().handle(request, reply);
  });
}

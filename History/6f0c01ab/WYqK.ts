// listcostumer.ts
import { FastifyRequest, FastifyReply } from "fastify";
import { ListCostumerService } from "../services/ListCostumerService";

class ListCostumerController {
  // Aqui você pode implementar a lógica para pegar os feedbacks, por exemplo:
  static async getAllFeedbacks() {
    const listCustomerService = new ListCostumerService();
    const feedbacks = await listCustomerService.execute(); // Aqui você chama o serviço que traz os feedbacks
    return feedbacks;
  }

  async handle(request: FastifyRequest, reply: FastifyReply) {
    const feedbacks = await ListCostumerController.getAllFeedbacks();
    reply.send(feedbacks);
  }
}

export { ListCostumerController };

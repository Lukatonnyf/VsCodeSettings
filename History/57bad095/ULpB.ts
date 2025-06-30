import { FastifyRequest, FastifyReply } from "fastify";
import { ListCostumerService } from "../services/ListCostumerService";

class ListCostumerController{
  async hadle(request: FastifyRequest, reply: FastifyReply){
    const listCustomerService = new ListCostumerService

  }
}

export { ListCostumerController }

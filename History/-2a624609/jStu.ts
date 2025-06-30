import { FastifyRequest, FastifyReply } from "fastify";
import {CreateCustomerServices} from "../services/CreateCustomerServices"

class CreateCustomerController{
  async handle(request: FastifyRequest, reply: FastifyReply){

    const costumerService = new CreateCustomerServices()

    const costumer = await costumerService.execute()
    reply.send(costumer)
  }
}


export { CreateCustomerController }

import { FastifyRequest, FastifyReply } from "fastify";
import {CreateCustomerServices} from "../services/CreateCustomerServices"

class CreateCustomerController{
  async handle(request: FastifyRequest, reply: FastifyReply){

    const costumerService = new CreateCustomerServices()

    const custumer = await costumerService.execute()
    reply.send(custumer)
  }
}


export { CreateCustomerController }

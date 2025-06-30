import { FastifyRequest, FastifyReply } from "fastify";
import {CreateCustomerServices} from "../services/CreateCustomerServices"

class CreateCustomerController{
  async handle(request: FastifyRequest, reply: FastifyReply){
    const customerService = new CreateCustomerService()

    const customer = await customerService.execute()
    reply.send(customer)
  }
}


export { CreateCustomerController }

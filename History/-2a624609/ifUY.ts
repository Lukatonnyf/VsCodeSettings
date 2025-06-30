import { FastifyRequest, FastifyReply } from "fastify";
import {CreateCustomerServices} from "../services/CreateCustomerServices"

class CreateCustomerController{
  async handle(request: FastifyRequest, reply: FastifyReply){
    const customerService = new CreateCustomerServices()

    const customer = await customerService.execute()
    reply.send(customer)
  }
}


export { CreateCustomerController }

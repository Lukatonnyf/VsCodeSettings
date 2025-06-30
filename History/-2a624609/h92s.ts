import { FastifyRequest, FastifyReply } from "fastify";
import {CreateCustomerServices} from "../services/CreateCustomerServices"

class CreateCustomerController{
  async handle(request: FastifyRequest, reply: FastifyReply){
    const customerServices = new CreateCustomerServices()

    const customer = await customerServices.execute()
    reply.send(customer)
  }
}


export { CreateCustomerController }

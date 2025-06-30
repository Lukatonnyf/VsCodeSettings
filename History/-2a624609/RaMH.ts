import { FastifyRequest, FastifyReply } from "fastify";
import {CreateCustomerServices} from "../services/CreateCustomerServices"

class CreateCustomerController{
  async handle(request: FastifyRequest, reply: FastifyReply){
    const { name, feedback } = request.body as { name: string, feedback: string };

    const customerServices = new CreateCustomerServices()
    const customer = await customerServices.execute({ name, feedback })
    reply.send(customer)
  }
}


export { CreateCustomerController }

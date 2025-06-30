import prismaClient from "../prisma";

interface CreateCustomerProps{
  name: string,
  feedback: string
}

class CreateCustomerServices{
  async execute({name, feedback}: CreateCustomerProps){
    if(!name || !feedback){
      throw new Error()

    }
    return {ok: true}
}
}

export { CreateCustomerServices }

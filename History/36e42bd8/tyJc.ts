import prismaClient from "../prisma";

interface CreateCustomerProps{
  name: string;
  feedback: string;
}

class CreateCustomerServices{
  async execute({ name, feedback}: CreateCustomerProps){
    console.log("ROTA FOI CHAMADA")

    return {ok: true}
  }
}

export { CreateCustomerServices }

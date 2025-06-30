import prismaClient from "../prisma";

interface CreateCustomerProps{
  name: string,
  feedback: string
}

class CreateCustomerServices{
  async execute(){
console.log("ROTA FOI CHAMADA")
return {ok: true}
}
}

export { CreateCustomerServices }

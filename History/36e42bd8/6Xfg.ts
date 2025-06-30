import prismaClient from "../prisma";

interface CreateCustomerProps{
  name: string,
  feedback: string
}

class CreateCustomerServices{
  async execute({ name, feedback}: CreateCustomerProps){
    if(!name || !feedback){
      throw new Error("preencha todos os campos");
    }

    const customer = await prismaClient.customer.create({
      data: {
        name,
        feedback,
      }
    });
    return customer;
  }
}

export { CreateCustomerServices }

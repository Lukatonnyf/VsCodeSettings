import prismaClient from "../prisma";

interface CreateCustomerProps{
  name: string;
  feedback: string;
}

class CreateCustomerServices {
  async execute({ name, feedback }: CreateCustomerProps) {
    if (!name.trim() || !feedback.trim()) {
      throw new Error("Preencha todos os campos corretamente");
    }

    try {
      const customer = await prismaClient.customer.create({
        data: {
          name,
          feedback,
        }
      });
      return customer;
    } catch (error) {
      console.error("Erro ao criar o cliente:", error);
      throw new Error("Erro ao criar o cliente");
    }
  }
}


export { CreateCustomerServices }

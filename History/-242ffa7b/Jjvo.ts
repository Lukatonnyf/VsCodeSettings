import prismaClient  from "../prisma";

class ListCostumerService{
  async execut(){
    const customers = await prismaClient.customer.findMany()
    return customers
  }
}

export { ListCostumerService }

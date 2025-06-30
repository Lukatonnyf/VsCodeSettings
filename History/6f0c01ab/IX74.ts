class ListCostumerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const listCustomerService = new ListCostumerService();

    try {
      const customers = await listCustomerService.execute();
      reply.send(customers);
    } catch (error) {
      console.error("Erro ao listar clientes:", error);  // Log para depuração
      reply.status(500).send({ error: "Erro interno ao listar clientes" });
    }
  }
}

export { ListCostumerController };

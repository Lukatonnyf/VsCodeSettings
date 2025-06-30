import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply} from "fastify"
import { CreateCustomerController } from "./controllers/CreateCostumerController"

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){
  app.use('/favicon.ico', express.static(path.join(__dirname, 'public', 'favicon.ico')));
  fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
    return { ok: true }
  })

  fastify.post("/costomer", async (request: FastifyRequest, reply: FastifyReply) => {
    return new CreateCustomerController().handle(request, reply);
  })
}

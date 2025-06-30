import Fastify from 'fastify'
import { routes } from './routes'
import cors from '@fastify/cors'

const app = Fastify({logger: true})

app.setErrorHandler((error, request, reply) => {
   reply.code(400).send({message: error.message})
})

const start = async () => {
  await app.register(cors)
  await app.register(routes)

  try {
    const port = process.env.PORT ? Number(process.env.PORT) : 3333;  // Converte para número
    app.listen(port, '0.0.0.0');  // Escuta na interface 0.0.0.0
    console.log(`Server running on port ${port}`);
  } catch (err) {
    process.exit(1)
  }
}

start()

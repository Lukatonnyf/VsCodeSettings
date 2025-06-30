import Fastify from 'fastify'
import { routes } from './routes'
import cors from '@fastify/cors'
app.use('/favicon.ico', express.static(path.join(__dirname, 'public', 'favicon.ico')));
const app = Fastify({logger: true})

const start =  async  () => {
  await app.register(cors)
  await app.register(routes)

  try{
    await app.listen({port:3333})
  }catch(err){
    process.exit(1)
  }
}


start()

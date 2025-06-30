import discord;
from discord.ext import commands

# Essa variável Guarda todas as permissões que o bot precisa do discord para funcionar
intents = discord.Intents.all()
# Essa variável vai representar o nosso bot, ou seja, um objeto que vai ter todas as propiedades do bot
bot = commands.Bot(".", intents=intents) # Aqui, o intents (permissões) recebe as permissões da variável intents
#definida por nós

@bot.event
async def on_ready():
  print("Bot está online!")

@bot.command()
async def falar(ctx: commands.Context, *,texto): # Aqui estamos Tipando o comando ctx como um Objeto do tipo Context

  #  O (ctx) é uma abreviação de Context, e oque ele guarda é literalmente o contexto contendo todas
  # as informações e processos relativos ao nosso comando, por exemplo, sobre o canal, o servidor,
  # o autor da mensagem e etc.

  await ctx.send(texto)

  # name = ctx.author.name
  # await ctx.reply(f"Olá, {name}! Tudo bem?") # Aqui o bot vai responder com a mensagem "Olá, tudo bem?" quando o comando for chamado


# token do bot
bot.run("MTM3NDkyMTU5MDQxMTc1NTY0Mg.Gk0U2g.Y59Noc0Tua9tf5I7hjMBuS3EYi2lzr-f83nU6Y")

#  token my bot: MTM3NDkyMTU5MDQxMTc1NTY0Mg.Gk0U2g.Y59Noc0Tua9tf5I7hjMBuS3EYi2lzr-f83nU6Y

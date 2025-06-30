import discord;
from discord.ext import commands

# Essa variável Guarda todas as permissões que o bot precisa do discord para funcionar
intents = discord.Intents.all()
# Essa variável vai representar o nosso bot, ou seja, um objeto que vai ter todas as propiedades do bot
bot = commands.Bot(".", intents=intents)


#  token my bot: MTM3NDkyMTU5MDQxMTc1NTY0Mg.Gk0U2g.Y59Noc0Tua9tf5I7hjMBuS3EYi2lzr-f83nU6Y

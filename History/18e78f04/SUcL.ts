// pages/api/github.ts

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const username = 'Lukatonnyf'; // Seu nome de usuário do GitHub

  try {
    // Fazendo o fetch da API do GitHub
    const response = await fetch(`https://github.com/Lukatonnyf/${username}`);

    // Verificando se a resposta foi bem-sucedida
    if (!response.ok) {
      // Se a resposta não for OK (ex: 404, 500), tenta pegar o texto da resposta de erro
      const errorMessage = await response.text(); // Pega a resposta em texto (HTML, geralmente uma página de erro)
      return res.status(response.status).json({ error: `Erro no GitHub API: ${errorMessage}` });
    }

    // A resposta foi bem-sucedida, agora tenta fazer o JSON.parse
    const data = await response.json();

    // Pegando as informações desejadas do GitHub
    const userInfo = {
      avatar_url: data.avatar_url, // Imagem de perfil
      followers: data.followers, // Quantidade de seguidores
      public_repos: data.public_repos, // Quantidade de repositórios públicos
    };

    // Retorna as informações do usuário
    res.status(200).json(userInfo);
  } catch (error) {
    // Caso ocorra algum erro durante o fetch ou outro tipo de falha
    res.status(500).json({ error: 'Erro ao obter dados do GitHub' });
  }
}

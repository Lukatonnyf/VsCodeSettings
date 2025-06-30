

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const username = 'Lukatonnyf'; 

  try {
    // Fetch para obter informações do usuário
    const response = await fetch(`https://api.github.com/users/${Lukatonnyf}`);
    if (!response.ok) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    const data = await response.json();

    // Pegando a quantidade de repositórios, imagem e seguidores
    const userInfo = {
      avatar_url: data.avatar_url, // Imagem de perfil
      followers: data.followers, // Quantidade de seguidores
      public_repos: data.public_repos, // Quantidade de repositórios públicos
    };

    res.status(200).json(userInfo);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter dados do GitHub' });
  }
}

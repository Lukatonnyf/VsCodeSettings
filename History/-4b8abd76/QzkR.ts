import type { NextApiRequest, NextApiResponse } from "next";

const GITHUB_API_URL = "https://github.com/Lukatonnyf";
const GITHUB_USERNAME = "seu-usuario"; // Substitua pelo seu username

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const [reposRes, followersRes] = await Promise.all([
      fetch(`${GITHUB_API_URL}/users/${GITHUB_USERNAME}/repos`),
      fetch(`${GITHUB_API_URL}/users/${GITHUB_USERNAME}`)
    ]);

    const repos = await reposRes.json();
    const userData = await followersRes.json();

    const repoCount = repos.length; // Número de repositórios
    const followerCount = userData.followers; // Número de seguidores

    return res.status(200).json({ repoCount, followerCount });
  } catch (error) {
    return res.status(500).json({ error: "Erro ao buscar dados do GitHub" });
  }
}

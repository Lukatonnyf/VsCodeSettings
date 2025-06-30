import { NextResponse } from "next/server";

const GITHUB_API_URL = "https://github.com/Lukatonnyf";
const GITHUB_USERNAME = "Lukatonnyf";

export async function GET() {
  try {
    const [reposRes, userDataRes] = await Promise.all([
      fetch(`${GITHUB_API_URL}/users/${GITHUB_USERNAME}/repos`),
      fetch(`${GITHUB_API_URL}/users/${GITHUB_USERNAME}`)
    ]);

    const repos = await reposRes.json();
    const userData = await userDataRes.json();

    return NextResponse.json({
      repoCount: repos.length,
      followerCount: userData.followers
    });
  } catch (error) {
    return NextResponse.json({ error: "Erro ao buscar dados do GitHub" }, { status: 500 });
  }
}

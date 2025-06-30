// components/GithubInfo.tsx

import { useEffect, useState } from 'react';

type GithubInfo = {
  avatar_url: string;
  followers: number;
  public_repos: number;
};

const GithubInfo: React.FC = () => {
  const [githubData, setGithubData] = useState<GithubInfo | null>(null);

  useEffect(() => {
    // Chama a API que criamos
    const fetchGithubData = async () => {
      const response = await fetch('/api/github');
      const data = await response.json();
      setGithubData(data);
    };

    fetchGithubData();
  }, []);

  if (!githubData) return <div>Carregando...</div>;

  return (
    <div className="github-info">
      <img src={githubData.avatar_url} alt="Avatar do GitHub" width={100} height={100} />
      <div>
        <p>Seguidores: {githubData.followers}</p>
        <p>Repositórios Públicos: {githubData.public_repos}</p>
      </div>
    </div>
  );
};

export default GithubInfo;

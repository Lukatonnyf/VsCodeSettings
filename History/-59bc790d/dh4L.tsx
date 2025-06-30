// components/GithubInfo.tsx

import { useEffect, useState } from 'react';

type GithubInfo = {
  avatar_url: string;
  followers: number;
  public_repos: number;
};

const GithubInfo: React.FC = () => {
  const [githubData, setGithubData] = useState<GithubInfo | null>(null);
  const [error, setError] = useState<string | null>(null); // Para capturar possíveis erros

  useEffect(() => {
    // Função para pegar os dados da API
    const fetchGithubData = async () => {
      try {
        const response = await fetch('/api/github');
        const data = await response.json();

        // Caso haja erro na resposta
        if (response.status !== 200) {
          setError(data.error || 'Erro desconhecido');
          return;
        }

        // Armazenando as informações do GitHub
        setGithubData(data);
      } catch (err) {
        setError('Erro ao carregar os dados do GitHub');
      }
    };

    fetchGithubData();
  }, []);

  // Exibindo uma mensagem de erro, caso haja
  if (error) {
    return <div className="error-message">{error}</div>;
  }

  // Exibindo os dados se disponíveis
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

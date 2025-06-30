'use client'

import { useRouter } from 'next/navigation';
import jwtDecode from 'jwt-decode';

type JwtPayload = {
  userId: string;
  email: string;
  exp: number;
};

export default function VerificarLoginButton() {
  const router = useRouter();

  const goToLoginPage = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
      return;
    }

    try {
      const decoded = jwtDecode<JwtPayload>(token);

      const isExpired = decoded.exp * 1000 < Date.now(); // o exp vem em segundos
      if (isExpired) {
        localStorage.removeItem("token");
        router.push("/login");
      } else {
        router.push(`/cadastrar-negocio?id=${decoded.userId}`);
      }
    } catch (error) {
      console.error("Token inválido:", error);
      localStorage.removeItem("token");
      router.push("/login");
    }
  };

  return <button onClick={goToLoginPage}>Verificar Login</button>;
}

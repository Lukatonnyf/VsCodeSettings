"use client";

import { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";

interface DecodedToken {
  userId: string;
  email: string;
  // adicione aqui os campos que seu token tem
}

export function useUserFromToken() {
  const [user, setUser] = useState<DecodedToken | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setUser(null);
      return;
    }

    try {
      const decoded = jwtDecode<DecodedToken>(token);
      setUser(decoded);
    } catch (error) {
      console.error("Token inválido", error);
      setUser(null);
    }
  }, []);

  return user;
}

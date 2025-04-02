// Renderização no cliente: necessário para interatividade dinâmica, mas depende do JavaScript do navegador.

"use client";

import { useEffect, useState } from "react";

interface DataProps {
  id: number;
  name: string;
  full_name: string;
  created_at: string;
  updated_at: string;
  visibility: string;
  watchers: number;
}

export default function Repositories() {
  const [repos, setRepos] = useState<DataProps[]>([]);

  useEffect(() => {
    async function getData() {
      fetch("https://api.github.com/users/plogicador/repos")
        .then((response) => response.json())
        .then((data: DataProps[]) => {
          setTimeout(() => {
            setRepos(data);
          }, 2000);
        });
    }

    getData();
  }, []);

  return (
    <div>
      <h1>Repositories Page</h1>

      {repos.map((item) => (
        <div key={item.id}>
          <strong>Repository: </strong> <a>{item.full_name}</a>
          <p>visibility: {item.visibility}</p>
          <br />
        </div>
      ))}
    </div>
  );
}

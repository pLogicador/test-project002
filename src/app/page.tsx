import { OwnerRepo } from "@/components/OwnerRepo";
import { resolve } from "path";

// Server Component/Renderização no servidor: executa no backend, funciona mesmo sem JavaScript no navegador e permite carregamento inicial mais rápido.
interface DataProps {
  id: number;
  name: string;
  full_name: string;
  created_at: string;
  updated_at: string;
  visibility: string;
  watchers: number;
  owner: {
    login: string;
    id: number;
    avatar_url: string;
    url: string;
  };
}

async function delayFetch(url: string, delay: number) {
  await new Promise((resolve) => setTimeout(resolve, delay));
  const response = await fetch(url, { next: { revalidate: 120 } });
  return response.json();
}
/*
async function getData() {
  const response = await fetch("https://api.github.com/users/plogicador/repos");
  return response.json();
}
*/
async function getData() {
  const data = await delayFetch(
    "https://api.github.com/users/plogicador/repos",
    0
  );
  return data;
}

export default async function Home() {
  const data: DataProps[] = await getData();

  return (
    <main>
      <h1>Home Page</h1>
      <span>Welcome to Home Page</span>
      <br />
      <h3>My Repositories</h3>
      {data.map((item) => (
        <div key={item.id}>
          <strong>Repository: </strong> <a>{item.full_name}</a>
          <br />
          <OwnerRepo
            avatar_url={item.owner.avatar_url}
            name={item.owner.login}
          />
          <br />
        </div>
      ))}
    </main>
  );
}

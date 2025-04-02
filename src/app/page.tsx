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
}

async function delayFetch(url: string, delay: number) {
  await new Promise((resolve) => setTimeout(resolve, delay));
  const response = await fetch(url);
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
    2000
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
          <p>visibility: {item.visibility}</p>
          <br />
        </div>
      ))}
    </main>
  );
}

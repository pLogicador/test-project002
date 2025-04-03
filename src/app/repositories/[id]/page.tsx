interface PageDetailProps {
  params: {
    id: string;
  };
}

async function getData(id: string) {
  console.log(id);
  const response = await fetch("https://api.github.com/users/plogicador/repos");
  return response.json();
}

export default async function RepositoryId({ params }: PageDetailProps) {
  const data = await getData(params.id);

  return (
    <div>
      <h1>Details Repository Page Id {params.id}</h1>
    </div>
  );
}

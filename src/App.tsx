import { useFetch } from "./hooks/useFetch";

interface Repository {
  full_name: string;
  description: string;
  html_url: string;
}

export function App() {
  const { data: repositories, error, isFetching } = useFetch<Repository[]>("https://api.github.com/users/brhcastro/repos");
  
  return (
    <>
      <h1>Hello vite</h1>
      <ul>
        {isFetching && <p>Carregando...</p>}
        {error && <p>{`🛑 ${error.name} ➡️ ${error.message}`}</p>}
        {repositories?.map(repository => (
          <li key={repository.full_name}>
            <a href={repository.html_url} target="_blank" rel="noreferrer">
              <h4>{repository.full_name}</h4>
            </a>
            <small>{repository.description}</small>
          </li>
        ))}
      </ul>
    </>
  )
}
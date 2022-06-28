import axios from 'axios';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

export interface Repository {
  full_name: string;
  description: string;
  html_url: string;
}

export function Repos() {
  const { data: repositories, isFetching } = useQuery<Repository[]>('repos', async () => {
    const response = await axios.get('https://api.github.com/users/brhcastro/repos');
    return response.data;
  }, {
    staleTime: 1000 * 60, // 1 minute
  });

  return (
    <>
      <h1>Hello vite</h1>
      <ul>
        {isFetching && <p>Carregando...</p>}
        {repositories?.map(repository => (
          <li key={repository.full_name}>
            <Link to={`/repos/${repository.full_name}`}>
              <h4>{repository.full_name}</h4>
            </Link>
            <small>{repository.description}</small>
            <a href={repository.html_url} target="_blank" rel="noreferrer">
              <small> | View on GitHub</small>
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}
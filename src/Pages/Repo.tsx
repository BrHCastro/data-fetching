import { useParams } from "react-router-dom";
import { queryClient } from "../services/queryClient";
import { Repository } from "./Repos";

export function Repo() {
  const params = useParams();
  const currentRepo = params['*'] as string

  function handleChancheRepositoryDescription() {
    const previousRepos = queryClient.getQueryData<Repository[]>('repos');

    if(previousRepos) {
      const nextRepos = previousRepos.map(repository => {
        if(repository.full_name === currentRepo) {
          return {
            ...repository,
            description: 'Nova descrição'
          }
        } else {
          return repository
        }
      });

      queryClient.setQueryData('repos', nextRepos);
    }
  }

  return (
    <>
      <h1>{currentRepo}</h1>
      <button type="button" onClick={handleChancheRepositoryDescription}>
        Alterar descrição
      </button>
    </>
  )
}
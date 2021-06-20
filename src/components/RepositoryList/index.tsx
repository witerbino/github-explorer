import { useState, useEffect, ReactElement } from "react";

import { RepositoryItem } from "../RepositoryItem";

import './styles.scss';

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList(): ReactElement {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    getRepositories();
  }, []);

  function getRepositories(): void {
    fetch('https://api.github.com/repositories')
      .then(response => response.json())
      .then(data => setRepositories(data));
  }

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>
      <ul>
        {repositories.map((repository: Repository) => (
          <RepositoryItem 
            key={repository.id} 
            repository={repository}  
          />
        ))}
      </ul>
    </section>
  );
}
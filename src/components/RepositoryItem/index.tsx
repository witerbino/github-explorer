import { ReactElement } from 'react';
import { RepositoryItemProps } from './props';
import './styles.scss';

export function RepositoryItem({ 
  repository
}: RepositoryItemProps): ReactElement {
  return (
    <li className="repository-item">
      <strong>{repository.name}</strong>
      <p>{repository.description}</p>
      <a href={repository.html_url}>acessar</a>
    </li>
  );
}
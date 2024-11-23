import React from "react";
import styles from './RepoList.module.css'

interface RepoListProps {
  repos: { name: string; url: string }[];
}

const RepoList: React.FC<RepoListProps> = ({ repos }) => (
  <ol className={styles.repoListWrapper}>
    {repos.map((repo, index) => (
      <li key={index}>
        <a href={repo.url} target="_blank" rel="noopener noreferrer">
          {repo.name}
        </a>
      </li>
    ))}
  </ol>
);

export default RepoList;

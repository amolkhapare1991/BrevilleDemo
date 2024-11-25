import React, {useState} from "react";
import { fetchRepos, fetchUser } from "../../services/gitHubServices";
import SearchBar from "../../components/searchBar";
import UserCard from "../../components/userCard";
import RepoList from "../../components/repoList";
import styles from './HomePage.module.css'
import { GitHubRepo, GitHubUser } from "../../types/gitHubTypes";

const HomePage: React.FC = () => {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (username: string) => {
    try {
      setError(null);
      const userData = await fetchUser(username);
      const userRepos = await fetchRepos(username);
      setUser(userData);
      setRepos(userRepos);
    } catch (err) {
      setError("User not found.");
      setUser(null);
      setRepos([]);
    }
  };
  
  return (
    <div className={styles.homePageContainer}>
      <SearchBar onSearch={handleSearch} />
      <div className={styles.cardContainer}>
      {error && <p>{error}</p>}
      {user && (
        <div className={styles.cardWrapper}>
          <UserCard
            avatarUrl={user.avatar_url}
            userId={user.login}
            followers={user.followers}
            username={user.name}
          />
          <h2>Repositories:</h2>
          <RepoList repos={repos.map((repo) => ({ name: repo.name, url: repo.html_url }))} />
        </div>
      )}
      </div>
    </div>
  );
};

export default HomePage;

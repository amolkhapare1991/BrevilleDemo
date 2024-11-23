export interface GitHubUser {
    login: string;
    id: number;
    name: string;
    avatar_url: string;
    html_url: string;
    followers: number;
    following: number;
    public_repos: number;
    bio?: string;
  }
  
  export interface GitHubRepo {
    id: number;
    name: string;
    html_url: string;
    description?: string;
    language?: string;
    stargazers_count: number;
  }
  
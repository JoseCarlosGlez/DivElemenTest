export class RepoInformation {
    
  static FromGithub(
    name: string,
    description: string,
    commits_url: string
  ) {
    return new RepoInformation(name, description, commits_url);
  }
  constructor(
    public name: string,
    public description: string,
    public commits_url: string
  ) {}
}

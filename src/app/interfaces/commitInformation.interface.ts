export interface ICommitInformation {
  author: IAuthorCommitInformation;
  message: string;
}

export interface IAuthorCommitInformation {
  name: string;
  email: string;
  date: string;
}

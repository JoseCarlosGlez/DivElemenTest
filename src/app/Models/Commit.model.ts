import { IAuthorCommitInformation, ICommitInformation } from '../interfaces/commitInformation.interface';

export class CommitInformation implements ICommitInformation {
  
    static FromGithub(author:IAuthorCommitInformation, message:string){
        return new CommitInformation(author,message)
    }


  constructor(public author, public message) {}
}

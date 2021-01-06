# DivElementTest

This application was created in angular and it's main task is display a timeline of commits from a user repository

## Installation and setup

1.  You must have nodejs installed in your enviroment.
2.  You must have angularCli installed in your envioroment.
3.  You must have a github account:
    1. In your github account you have to generate a _token_, this token will allow you makes the request to the github API(if you dont know how gets this token you can click on the link: _https://docs.github.com/es/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token_ ).
    2. You have to open the app in any IDE and in _src/enviroments/enviroments.ts_ and you have to paste the token generated by github.


        ```javascript
        export const environment = {
                 production: false,
                    token: TokenGenerated',
    };
    ```
4.  You have to run the following comand in the project directory: _npm install_
5.  You have to run the following comand in the project directory: _ng serve_
6.  You have to open a browser and writes http://localhost:4200

### Used Libraries

- RXJS
- NGRX
- Bootstrap

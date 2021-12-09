const Employee = require("./Employee");

class Engineer extends Employee{
//     * `github`&mdash;GitHub username


// * `getGithub()`



    constructor(name, id, email, github){
        super(name, id, email)

        this.github = github;
    }
    
    // * `getRole()`&mdash;overridden to return `'Engineer'`
    getRole() {
        return "Engineer";
    }
}
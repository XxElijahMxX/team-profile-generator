class Engineer {
    constructor (name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github
    }

    // this will return engineer's name
    getName () {
        return this.name;
    }

    // this will return engineer's id
    getId () {
        return this.id;
    }

    // this will return engineer's email
    getEmail () {
        return this.email;
    }

    // this will return engineer's github
    getGithub () {
        return this.github;
    }

    // this will return engineer role
    getRole () {
        return 'Engineer'
    }
};

module.exports = Engineer;
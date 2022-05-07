class Intern {
    function (name, id, email, school) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
    }

     // this will return intern's name
     getName () {
        return this.name;
    }

    // this will return intern's id
    getId () {
        return this.id;
    }

    // this will return intern's email
    getEmail () {
        return this.email;
    }

    // this will return intern's school
    getSchool () {
        return this.school;
    }

    // this will return intern role
    getRole () {
        return 'Intern';
    }
};

module.exports = Intern;
class Manager {
    function (name, id, email, officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
    }

     // this will return Manager's name
     getName () {
        return this.name;
    }

    // this will return Manager's id
    getId () {
        return this.id;
    }

    // this will return Manager's email
    getEmail () {
        return this.email;
    }

    // this will return Manager's school
    getOfficeNumber () {
        return this.officeNumber;
    }

    // this will return Manager role
    getRole () {
        return 'Manager';
    }
};

module.exports = Manager;
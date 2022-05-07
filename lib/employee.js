// employee class
class Employee {
    function (name, id, email) {
        this.name =name;
        this.id = id;
        this.email = email;
    }

    // this will return employee's name
    getName () {
        return this.name;
    }

    // this will return employee's id
    getId () {
        return this.id;
    }

    // this will return employee's email
    getEmail () {
        return this.email;
    }

    // this will return employee role
    getRole () {
        return 'Employee';
    }
};

module.exports = Employee;
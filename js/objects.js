// const Main=new Object();

// Main.name="Siva"

// console.log(Main.name);

const person = {
    firstname: "Yugesh",
    lastName: "Waran",
    fullName: function() {
        return this.firstname + this.lastName;
    }
};

console.log(person.fullName());

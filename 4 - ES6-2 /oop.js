// naming convention
// camelCase : ten bien, phuong thuc
// PascalCase : class
// snake_case

class Person {
    constructor(name, gender, dob) {
        this.name = name;
        this.gender = gender;
        this.dob = dob;
    }
    setMobile(phoneNumber) {
        this.mobile = phoneNumber;
    }
    getMobile() {
        return this.mobile;
    }

    set location(newLocation) {
        this.address = newLocation;
    }
    get location() {
        return this.address;
    }
    static slogen() {
        return `Still breath still alive`;
    }
}

class Student extends Person {
    constructor(name, gender, dob, email) {
        super(name, gender, dob);
        this.email = email;
    }
}

// OOP
// ke thua
// dong goi
// da hinh
// truu tuong

//getter vs setter

let khoa = new Person("Khoa", true, "10/10/2010");
// let thuong = new Student("Thuong", false, "10/20/3020", "abc@gmail.com");
// console.log(khoa);
// khoa.setMobile("090392029");
// khoa.location = "Hue";

// console.log(khoa);
// console.log(khoa.getMobile());

console.log(Person.slogen());

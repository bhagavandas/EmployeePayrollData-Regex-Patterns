//UC 11
class EmployeePayrollData{
    //Property
    id;
    name;
    salary;

    //constructor
    constructor(id, name, salary){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    get id(){
        return this.id;
    }
    set id(id){
        this.id = id;
    }

    get name(){
        return this.name;
    }
    set name(name){
        this.name = name;
    }

    get salary(){
        return this.salary;
    }
    set salary(salary){
        this.salary = salary;
    }

    //toString
    toString(){
        return "id:" + this.id + " name:"+ this.name + " salary:" + this.salary;
    }
}

let employeePayrollData = new EmployeePayrollData(1, "Das", 50000);
console.log(employeePayrollData.toString());
employeePayrollData.id = 2;
employeePayrollData.name = "David";
employeePayrollData.salary = 75000;
console.log(employeePayrollData.toString());


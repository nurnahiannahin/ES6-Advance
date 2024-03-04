const student = {id: 123, name: "Nahian", cgpa: "3.00", address: "Cox'sBazar"};

const {id, name, address, cgpa} = student;

console.log(address, cgpa);


const company = {
    comName: "Nahian Ltd.",
    address: "Cox'sBazar",
    ceo: {id: 1, ceoName: "Nahian", age: "24"},
    website: {work: "website build", framework: "React"},
    phone: "0012985657"
};

const {work, framework} = company.website;
const {ceoNname, age} = company.ceo;
const {comName} = company;


console.log(work, age, comName);
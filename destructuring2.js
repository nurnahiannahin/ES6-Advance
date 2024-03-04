const {name, address, job} = {
    name: 'Nahian',
    address: 'Ukhia',
    phone: '01267534838',
    job: 'Student',
}

console.log(name, address, job);


const company = {
    cName: 'GP',
    ceo: {
        id: 1,
        ceoName: 'Nahian',
        food: 'Burger'
    },
    web: {
        work: 'Website bulding',
        framework: 'React'
    }
}

const {work, framework} = company.web;
const {ceoName, food} = company.ceo;

console.log(ceoName, work, framework);
console.log(`Name of the CEO ${ceoName}, we focus on ${work}, We use ${framework} while building.`);
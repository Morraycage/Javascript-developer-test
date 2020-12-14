const data = require("./data");
const finalData = data.data;
const myArgs = process.argv.slice(2);

let option;
if (myArgs[0].split('--')[1]) {
    option = myArgs[0].split('--')[1].split('=');
}

const filter = (array, indicator) => {
    return JSON.stringify(array.map(subElement => {
        let arrayBis = [];
        subElement.people.forEach((o) => {
            let valueElements = [];
            o.animals.forEach(element => {
                if (element.name.includes(indicator)) {
                    valueElements.push(element)
                }
            });
            if (valueElements.length > 0) {
                return arrayBis.push({
                    name: o.name,
                    animals: valueElements
                })
            }
        });
        if (arrayBis.length > 0)
            return {
                name: subElement.name,
                people: arrayBis
            }
    }).filter((element) => element), null, "  ");
};

const count = (array) => {
    let finalArray = [];
    array.map(element => {
        const peopleLength = element.people.length;
        let obj = {
            name: `${element.name} [${peopleLength}]`,
            people: []
        };
        element.people.map(subPeople => {
            const animalsLength = subPeople.animals.length;
            let subObj = {
                name: `${subPeople.name} [${animalsLength}]`,
                animals: subPeople.animals
            };
            obj.people.push(subObj);
        });
        finalArray.push(obj);
    });
    return JSON.stringify(finalArray, null, " ")
};

let arg;
if (option) {
    switch (option[0]) {
        case 'count':
            console.log(count(finalData));
            break;
        case 'filter':
            const args = option[1];
            arg = args;
            console.log(filter(finalData, args));
            break;
        default:
            console.log('Sorry, that is not something I know how to do.');
    }
} else {
    console.log('Sorry, that is not something I know how to do.');
    return;
}

module.exports = filter;
module.exports = count;

/* const user = {
    name: "Stefan",
    age: 24
};

console.log({
    ...user,
    surname: "Golubovic"
}); */



/* const item = ['Coffee (hot)', '$2.00', '$2.60', '$2.75'];
const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`); */



/* const address = ['Timocka 11', 'Zemun', 'Serbia', '1080'];
const [, area, country = 'USA'] = address;


console.log(`You are in ${area}, ${country}`); */




/* const person = {
    name: 'Stefan',
    age: 25,
    location: {
        city: 'Beograd',
        temp: '10'
    }
};

const { name: firstName = 'Anonymous', age } = person;
const { city, temp: temperature } = person.location;

console.log(`${firstName} is ${age}.`);

if (temperature && city) {
    console.log(`It's ${temperature} in ${city}.`);
}; */


/* const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName); */

const Person = {

    name: "chikwado",
    age: 26,
    location: {
        city: "Aba",
        weather: 9
    }
}

const {name,age} = Person;


console.log(`${name} is ${age}`);

const {city, weather} = Person.location;

console.log(`My city is ${city} and the weather is ${weather}`);

////////////////////


const Book = {
    title: "Ego is the Enemy",
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}


const {name: self_Published = "self-published"} = Book.publisher;
console.log(`the name of the publisher is ${self_Published}`);



///////////// Array distructuring 



const Item = ['Coffee (hot)', '$2.00', '$2.50','$2.75'];

const [Item_Name,,medium] = Item;



console.log(`A medium ${Item_Name} costs ${medium}`);
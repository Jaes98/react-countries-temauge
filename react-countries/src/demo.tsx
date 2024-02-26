interface Person {
    name: string;
    age: number;
    id?: number;
}

const persons:Array<Person> = []
persons.push({ name: "John", age: 25, id: 1 });

function createPerson(name:string, age:number) {
    return { name, age}
}

const p = createPerson("John", 25);

console.log(p);

persons.push(p);
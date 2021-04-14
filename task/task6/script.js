class Animal{
    constructor(id, category, type, voice, name, age, children){
        this._id =id;
        this.category = category;
        this.type = type;
        this.voice = voice;
        this.name = name;
        this.age = age;
        this.children = children;
    }

    get id(){
        return this._id;
    }
}

class Zoo{
    constructor(animals){
        this.animals = animals.slice()
    }

    get(id){
        return this.animals.find((item) => item.id == id) || false;
    }

    add(animal){
        this.animals.push(animal);
    }

    numberOfAnimals(nameOfCategory){
        let result = this.animals.filter(c => c.category == nameOfCategory ).length;
        console.log('Количество обитателей в зоопарке категории - ' + nameOfCategory + ': ' + result);
    }
}



let animals = [
    new Animal(
        '1',
        'животное',
        'Тигр',
        'ррррр',
        'василиса',
        '4',
        false,
    ),
    new Animal(
        '2',
        'животное',
        'Кошка',
        'мяу',
        'барсик',
        '2',
        false,
    ),
    new Animal(
        '3',
        'птица',
        'попугай',
        'арррр',
        'кеша',
        '3',
        false,
    ),
    new Animal(
        '4',
        'животное',
        'Лев',
        'ррррр',
        'Нала',
        '5',
        true,
    ),
    new Animal(
        '5',
        'животное',
        'Белка',
        'кврквр',
        'Зайка',
        '4',
        false,
    )
];

let ZooAnimals = new Zoo(animals);



// добавление нового животного

console.log('добавлено новое животное ' + ZooAnimals.add({
    id: '10',
    category: 'животное',
    type: 'собака',
    voice: 'гав',
    name: 'шэри',
    age: '3',
    children: false,
}));

console.log(ZooAnimals);

console.log(ZooAnimals.numberOfAnimals('животное'));


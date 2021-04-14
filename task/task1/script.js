let person1 = {
    name: " Карина ",
    age: 17,
    gender: "ж",
    social_status: "студент"
};

person1.yarsNew = function() {
    alert("Через год тебе будет " + (+this.age + 1));
}
person1.yarsNew();

let person2 = new Object();
person2.name = "Лера";
person2.age = 18;
person2.gender = "ж";
person2.social_status = "студент";

Object.defineProperty(person2, "name", {
    value: "Лера",
    writable: false
});

Object.defineProperty(person2, "age", {
    value: 18,
    enumerable: false
});
Object.defineProperty(person2, "gender", {
    value: "ж",
    configurable: false
});

function showMeal(person) {
    alert("Имя: " + person.name + "Возраст: " + person.age + " Пол: " + person.gender + " Социальный статус: " + person.social_status);
}


function askAge() {
    gen = prompt("Введите пол");
    if (gen == "ж") {
        alert("Вы занимаетесь фитнесом?");
    }
    if (gen == "м") {
        alert("Вы занимаетесь спортом? ");
    }
}


class FablePerson {
    constructor(fairytale) {
        this.fairytale = fairytale;
    }

    ShowName() {
        alert(this.fairytale);
    }
}
class Person extends FablePerson {
    constructor(isPositive, fairytale, name) {
        super(fairytale);
        this.isPositive = isPositive;
        this.name = name;
    }
    ShowName() {
        let character;
        if (this.isPositive) {
            character = "добрый";
        } else {
            character = "злой"
        }
        alert(`Персонаж из ${this.fairytale} и он ${character}, которого зовут ${this.name}`);
    }
}

let hero1 = new Person(false, "сказки 1", "Иван");
let hero2 = new Person(true, "сказки 1", "Бель");
let hero3 = new Person(false, "сказки 2", "Бим");
let hero4 = new Person(true, "сказки 2", "Золушка");
class Person extends FablePerson{
    constructor(isPositive, fairytale){
        this.isPositive = isPositive;
        super(fairytale);
    }
    ShowName(){
        alert(`${this.isPositive} Персонаж из ${this.fairytale} `);
    }
}
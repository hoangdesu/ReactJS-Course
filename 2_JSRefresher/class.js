
// ES6
class Me {
    constructor() {
        this.name = 'Hoàng';
    }

    sayHi() {
        console.log(`Xin chào tớ là ${this.name}`);
    }
}


// ES7
class NewMe {
    name = 'Brian';

    sayHi = () => {
        console.log(`Hi my name is ${this.name}`);
    }
}


const hoang = new Me();
const brian = new NewMe();

hoang.sayHi();
brian.sayHi();


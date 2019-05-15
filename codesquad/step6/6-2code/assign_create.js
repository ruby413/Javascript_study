const animals = {
    run() {
        console.log("열심히 달린다");
    },
    jump(){
        console,log("팔짝팔짝 뛴다");
    },
    bite(){
        console,log("어쩌면 물어");
    },
    info(){
        console,log(`name is ${this.name}, age is ${this.age}`);
    }
}

const animalFactory = (name, age) =>{
    return Object.assign(Object.create(animals),{name,age});
}

const man = animalFactory("crong", 11);
console.dir(man);
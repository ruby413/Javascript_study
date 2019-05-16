class Garden {
    constructor(flower) {
        this.flower = flower
    }

    grow(){
        setTimeout( ()=>{
            console.log(`식물이 쑥쑥 자라는 중 입니다...`);
            this.grow();

        }, 1000);
    }

}

function grow(){
    setTimeout(function(){
        console.log(`식물이 지맘대로 자라요`)
        this.grow();
    },Math.random()*2000);
}

myflower = new Garden("Lily");
myflower.grow.call(this);

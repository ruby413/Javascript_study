class Garden {
    constructor(flower) {
        this.flower = flower
    }

    grow(){
        setTimeout( function(){
            console.log(`식물이 쑥쑥 자라는 중 입니다...`);
            this.grow();

        }.bind(this), 1000);
    }

}
  
myflower = new Garden("Lily");
myflower.grow();

const update = class{
    constructor(updateId, updateStatus){
        this.updateId = updateId;
        this.updateStatus = updateStatus;
    }
    updateExcute(){
        //1. const updateOBJ = this.updateID 체크해서 해당 오브젝트를 확인
        //2. updateOBJ에서 this.updateStatus로 바꾸기
    }
}

const todoUpdate = new update(updateId, updateStatus);
todoUpdate.updateExcute();

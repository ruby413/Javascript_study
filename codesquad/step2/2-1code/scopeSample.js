function test() { 
    console.log(printName()); 
    var printName = function() {
        return 'anonymouse';
    }
}

test();

function test() { 
    console.log(printName); 
    var printName = 2
}

test();
//TypeError: printName is not a function


function test() { 
    console.log(printName); 
    const printName = 2
}

test();

function test() { 
    console.log(printName()); 
    const printName = function() {
        return 'anonymouse';
    }
}

test();
//ReferenceError: printName is not defined

function printName(firstname) {
    const myname = "jisu";
    const result = myname + " " +  firstname;

    console.log(result);
 }
 printName("dlwndus");
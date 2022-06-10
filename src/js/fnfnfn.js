
const gugudan = (dan) => (num) => {
    console.log(`${dan} * ${num} = ${dan*num}`)
}

for (let i = 2; i <= 9 ; i++) {
    console.log(`========${i} 단=========`)
    for (let j = 1; j <=9 ; j++) {
        gugudan(i)(j)
    }
    console.log("=================")
}

const gugudan = (dan) => (num) => {
    console.log(`${dan} * ${num} = ${dan*num}`)
}

const roof = (start, end, fn ) => {
    for (let i = start; i <= end ; i++){
        if(typeof fn === 'function'){
            roof(start, end, fn(i))
        }
    }
}

roof(2, 9, gugudan)


let gugu = function(j) {
    function gu(i) {
        console.log(i + " x " + j + " = " + (i*j));
        if ( i < 9 ) {
            return gu(i+1);
        }
    }
    return gu;
};

for ( let a = 2 ; a < 10 ; a++ ) {
    gugu(a)(2);
}
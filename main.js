/**********
 * DATA *
 **********/

let sixes = []; 
let doubleSixes = [];
let twelves = [];
let twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random(); //grabbing a random number
    const range = rand * max; //multiply random number by "max"
    const result = Math.ceil(range); // grab result up to ceil or maximum for that range. 
    //Math.ceil(Math.random * max) //same thing
    return result;
}

// same thing as function expression above
//function getRandomNumber(max){
//     const rand = Math.random();
//     const range = rand * max;
//     const result = Math.ceil(range);
//     return result;
// }

/*******************
 * YOUR CODE BELOW *
 *******************/



/*******************
 * QUERY SELECTORS *
 *******************/

// let button_d6 = document.querySelector("#d6-button");
 let image_d6 = document.querySelector('#d6-roll')
 let mean_d6 = document.querySelector('#d6-rolls-mean')

 let imageDD1 = document.querySelector('#double-d6-roll-1')
 let imageDD2 = document.querySelector('#double-d6-roll-2')
 let meanDD6 = document.querySelector('#double-d6-rolls-mean')
 let doubleD6Buttons = document.querySelector('#double-d6-buttons')

 let image_d12 = document.querySelector('#d12-roll')
 let mean_d12 = document.querySelector('#d12-rolls-mean')

 let image_d20 = document.querySelector('#d20-roll')
 let mean_d20 = document.querySelector('#d20-rolls-mean')

 let resetButton = document.querySelector('#reset-button')


/*******************
 * EVENT LISTENERS *
 *******************/
image_d6.addEventListener('click', d6RollFunction);

doubleD6Buttons.addEventListener('click', dd6RollFunction);

image_d12.addEventListener('click', d12RollFunction);

image_d20.addEventListener('click', d20RollFunction);

resetButton.addEventListener('click', resetFunction);

/******************
 * RESET FUNCTION *
 ******************/
resetFunction();
function resetFunction(){
    
    console.log("Reset Button clicked!");
    
    //Empty all global roll arrays    
    sixes = [];
    doubleSixes = [];
    twelves = [];
    twenties = [];
    
    //change die buttons to starting images  
    image_d6.src = "./images/start/d6.png";

    imageDD1.src = "./images/start/d6.png";
    imageDD2.src = "./images/start/d6.png";

    image_d12.src = "./images/start/d12.jpeg";

    image_d20.src = "./images/start/d20.jpg";

    //change text in our mean areas to N/A
    mean_d6.innerText = "N/A";
    meanDD6.innerText = "N/A";
    mean_d12.innerText = "N/A";
    mean_d20.innerText = "N/A";
    
}


/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/
function d6RollFunction(){
    let result = getRandomNumber(6);
    console.log(result);

    if(result === 1){
        image_d6.src = "./images/d6/1.png";
    } else if(result === 2){
        image_d6.src = "./images/d6/2.png";
    }else if(result === 3){
        image_d6.src = "./images/d6/3.png";
    }else if(result === 4){
        image_d6.src = "./images/d6/4.png";
    }else if(result === 5){
        image_d6.src = "./images/d6/5.png";
    }else if(result === 6){
        image_d6.src = "./images/d6/6.png";
    }

    sixes.push(result);
    console.log(sixes);
    findMean6(sixes);
}

function dd6RollFunction(){
    let result1 = getRandomNumber(6);
    let result2 = getRandomNumber(6);
    console.log(result1);
    console.log(result2);

    //die 1
    if(result1 === 1){
        imageDD1.src = "./images/d6/1.png";
    } else if(result1 === 2){
        imageDD1.src = "./images/d6/2.png";
    }else if(result1 === 3){
        imageDD1.src = "./images/d6/3.png";
    }else if(result1 === 4){
        imageDD1.src = "./images/d6/4.png";
    }else if(result1 === 5){
        imageDD1.src = "./images/d6/5.png";
    }else if(result1 === 6){
        imageDD1.src = "./images/d6/6.png";
    }

    //die 2
    if(result2 === 1){
        imageDD2.src = "./images/d6/1.png";
    } else if(result2 === 2){
        imageDD2.src = "./images/d6/2.png";
    }else if(result2 === 3){
        imageDD2.src = "./images/d6/3.png";
    }else if(result2 === 4){
        imageDD2.src = "./images/d6/4.png";
    }else if(result2 === 5){
        imageDD2.src = "./images/d6/5.png";
    }else if(result2 === 6){
        imageDD2.src = "./images/d6/6.png";
    }

    doubleSixes.push(result1 + result2);
    console.log(doubleSixes);
    findMeanDD6(doubleSixes);

}

function d12RollFunction(){
    let result = getRandomNumber(12);
    console.log(result);

    if(result === 1){
       image_d12.src = "./images/numbers/1.png";
    } else if(result === 2){
        image_d12.src = "./images/numbers/2.png";
    } else if(result === 3){
        image_d12.src = "./images/numbers/3.png";
    } else if(result === 4){
        image_d12.src = "./images/numbers/4.png";
    } else if(result === 5){
        image_d12.src = "./images/numbers/5.png";
    } else if(result === 6){
        image_d12.src = "./images/numbers/6.png";
    } else if(result === 7){
        image_d12.src = "./images/numbers/7.png";
    } else if(result === 8){
        image_d12.src = "./images/numbers/8.png";
    } else if(result === 9){
        image_d12.src = "./images/numbers/9.png";
    } else if(result === 10){
        image_d12.src = "./images/numbers/10.png";
    } else if(result === 11){
        image_d12.src = "./images/numbers/11.png";
    } else if(result === 12){
        image_d12.src = "./images/numbers/12.png";
    }

    twelves.push(result);
    console.log(twelves);
    findMean12(twelves);

}

function d20RollFunction(){
    let result = getRandomNumber(20);
    console.log(result);

    if(result === 1){
       image_d20.src = "./images/numbers/1.png";
    } else if(result === 2){
        image_d20.src = "./images/numbers/2.png";
    } else if(result === 3){
        image_d20.src = "./images/numbers/3.png";
    } else if(result === 4){
        image_d20.src = "./images/numbers/4.png";
    } else if(result === 5){
        image_d20.src = "./images/numbers/5.png";
    } else if(result === 6){
        image_d20.src = "./images/numbers/6.png";
    } else if(result === 7){
        image_d20.src = "./images/numbers/7.png";
    } else if(result === 8){
        image_d20.src = "./images/numbers/8.png";
    } else if(result === 9){
        image_d20.src = "./images/numbers/9.png";
    } else if(result === 10){
        image_d20.src = "./images/numbers/10.png";
    } else if(result === 11){
        image_d20.src = "./images/numbers/11.png";
    } else if(result === 12){
        image_d20.src = "./images/numbers/12.png";
    } else if(result === 13){
        image_d20.src = "./images/numbers/13.png";
    } else if(result === 14){
        image_d20.src = "./images/numbers/14.png";
    } else if(result === 15){
        image_d20.src = "./images/numbers/15.png";
    } else if(result === 16){
        image_d20.src = "./images/numbers/16.png";
    } else if(result === 17){
        image_d20.src = "./images/numbers/17.png";
    } else if(result === 18){
        image_d20.src = "./images/numbers/18.png";
    } else if(result === 19){
        image_d20.src = "./images/numbers/19.png";
    } else if(result === 20){
        image_d20.src = "./images/numbers/20.png";
    }

    twenties.push(result);
    console.log(twenties);
    findMean20(twenties);
}

/***************
 * MATH SECTION *
****************/

function findMean6(mean){
    let total = 0;
    for(let i = 0; i < mean.leangth; i++){
        total += mean[i]
    }
    total = total/mean.length;
    console.log("mean");
    console.log(total);

    mean_d6.innerText = total;
}

function findMeanDD6(mean){
    let total = 0;
    for(let i = 0; i < mean.leangth; i++){
        total += mean[i]
    }
    total = total/mean.length;
    console.log("mean");
    console.log(total);

    meanDD6.innerText = total;
}

function findMean12(mean){
    let total = 0;
    for(let i = 0; i < mean.leangth; i++){
        total += mean[i]
    }
    total = total/mean.length;
    console.log("mean");
    console.log(total);

    mean_d12.innerText = total;
}

function findMean20(mean){
    let total = 0;
    for(let i = 0; i < mean.leangth; i++){
        total += mean[i]
    }
    total = total/mean.length;
    console.log("mean");
    console.log(total);

    mean_d20.innerText = total;
}


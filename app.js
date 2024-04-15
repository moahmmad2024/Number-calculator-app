const currentNum =  document. getElementById('number');
const increseBtn = document.getElementById('increase');
const resetBtn = document.getElementById('reset');
const decreaseBtn = document.getElementById('decrease');



let newNum;

function updateNumberColor(){
    const num = Number(currentNum.innerHTML);
    if (num > 0){
        currentNum.style.color = 'green';
    }else if ( num < 0){
        currentNum.style.color = 'red';
    }else{
        currentNum.style.color = '#fff';
    }
}

// increase but ton
increseBtn.addEventListener('click' , function(){
    newNum = Number(currentNum.innerHTML) + 1;
    currentNum.innerHTML = newNum;
    updateNumberColor()
});

// reset button

resetBtn.addEventListener('click', function(){
    currentNum.innerHTML = 0;
    updateNumberColor()
})

// decrease button

decreaseBtn.addEventListener('click' , function(){
    newNum = Number(currentNum.innerHTML) - 1;
    currentNum.innerHTML = newNum
    updateNumberColor()
}) 


updateNumberColor();
console.log('js collegato')

const container = document.querySelector('.container');
console.log(container);

for(let i = 1; i <= 100; i++){
    let box = document.createElement('div');
    box.classList.add('box');
    console.log(box);
    if (i % 3 == 0 && i % 5 == 0){
        console.log ('FizzBuzz');
        box.classList.add('fizzbuzz')
        box.innerHTML = 'FizzBuzz';

    }
    else if(i % 3 == 0){
        console.log('Fizz');
        box.classList.add('fizz');
        box.innerHTML = 'Fizz'
    }
    else if(i % 5 == 0){
        console.log('Buzz');
        box.classList.add('buzz');
        box.innerHTML = 'Buzz'
    }
    else{
        console.log(i);
        box.innerHTML = i
    }
    container.append(box);
};


function random(){
    let arrayRandom = [];
    for (let i = 0; i < 5; i++) {
        let nRandom = Math.floor(Math.random() * 100);
        arrayRandom.push(nRandom);

        // console.log(arrayRandom);
    }
    return arrayRandom;
}
console.log(random());

let text = document.getElementById('text');
text.innerHTML += random();


// TIME----------------------------------------------------------------------

// function timedText(){
//     text = setTimeout( 3000, function(){text.classList.add('none')}, 3000);
// }
// timedText();


// setTimeout (3000, set(text));
// function set(text){
//     text.classList.add('none');
// }


// function timedText(){
//     text = setTimeout(3000, add(text));
// }
// timedText();
// function add(element){element.classList.add('none');};


// setTimeout(function(text){ 
//     text.classList.add('none')
//     // text.innerHTML = `id="text" class="none"`,
// }, 3000);


// setTimeout(
//     text.classList.add('none'),
//     // text.innerHTML = `id="text" class="none"`,
// 6000);

// -----------------------------------------------------------------------------

const clock = setInterval(time, 10*3000);
function time(){

    t = document.getElementById('text');
    t.innerHTML = 'vuoto non è';
    clearInterval(clock);
    alert('Time out');

    let nUser = [];

    for (let i = 0; i < 5; i++) {
    let n = parseInt(prompt('Inserisci il numero'));

    nUser.push(n);

    console.log(nUser);
    document.getElementById("lo").innerHTML = nUser;
    };

if(random == nUser){
    alert('You win!');
}else{
    alert('You loose!');
}    
};


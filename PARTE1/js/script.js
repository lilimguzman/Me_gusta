var count1 = 3;

function AddLike(){
    ++count1;
    console.log(count1);
    var cuenta = document.querySelector('.contador');
    cuenta.innerText = count1;
}


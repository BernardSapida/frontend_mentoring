var number = 2
let count=document.getElementById('number').innerHTML= number
let action = document.getElementById('action').value
switch (action) {
    case 'increase':
        number++
        break;

    case 'decrease':
        number--
        break;
}
    
const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('oculos');

function lampOn() {

    lamp.src = './img/oculosinteiro.png';
}

function lampOff() {
    lamp.src = './img/oculosquebrado.png';
}


turnOn.addEventListener('click', lampOn);
lamp.addEventListener('dblclick', lampOff);

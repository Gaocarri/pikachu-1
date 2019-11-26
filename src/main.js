import string from './css.js'; //从css.js导入
const style = document.querySelector('#style');
const text = document.querySelector('#text')
let n = 1
let rate = 40
const run = () => {
    if (n > string.length) {
        window.clearInterval(run)
        return;
    }
    style.innerHTML = string.substring(0, n);
    text.innerText = string.substring(0, n);
    n++;
    text.scrollTop = text.scrollHeight
}
let id = setInterval(run, rate)

pause.onclick = () => {
    window.clearInterval(id)
}
play.onclick = () => {
    window.clearInterval(id)
    id = setInterval(run, rate)
}
fast.onclick = () => {
    window.clearInterval(id);
    rate = 1;
    id = setInterval(run, rate)
}
medium.onclick = () => {
    window.clearInterval(id);
    rate = 40;
    id = setInterval(run, rate)
}
slow.onclick = () => {
    window.clearInterval(id);
    rate = 100;
    id = setInterval(run, rate)
}
replay.onclick = () => {
    window.clearInterval(id);
    text.innerText = '';
    style.innerHTML = '';
    n = 1;
    rate = 40;
    id = setInterval(run, rate)
}
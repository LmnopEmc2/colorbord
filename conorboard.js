const board = document.getElementById('board');
const changer = document.getElementById('change-btn');
const pixel = document.createElement('div');

const rgb = () => Math.floor(Math.random() * 255);
const rgbCol = () => `${rgb()}, ${rgb()}, ${rgb()}`;

const colorChanger = () => {
    board.innerHTML = "";
    for(let i = 0; i < 976; i++) {
    board.innerHTML += `<span style="background:rgba(${rgbCol()}, ${Math.random()});">__</span>`;
    }
}
changer.addEventListener("click", colorChanger)
const Container = document.getElementById('container');
const button = document.getElementById('btn');
const display = document.getElementById('code');
const hexArray = ['#333', '#F5DEB3', '#008000', '#f00', '#00f'];
button.addEventListener("click", () => {
    const color = Math.floor(Math.random() * hexArray.length);
    const colorToShow = hexArray[color];
    displayContent(hexArray[color]);
    Container.style.backgroundColor = colorToShow;
});
displayContent = (color) => {
    display.innerHTML = `Hex Code: ${color}`; 
}
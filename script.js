let button = document.querySelector("button");
let BtnColor = prompt("upisi mi boju dugmeta ").toLowerCase();
let textColor = prompt("koja je boju teksta").toLowerCase();
let widthButton = `${prompt("sirina dugmeta")}px`;
let heightButton = `${prompt("visina dugmeta")}px`;



switch (BtnColor){
    case "crvena":
        button.style.backgroundColor = "red";
        break;

    case "plava":
        button.style.backgroundColor = "blue";
        break;

    default:
        button.style.backgroundColor = "green";
        break;

}
switch (textColor){
    case "crvena":
        button.style.color = "red";
        break;
    default:
        button.style.color = "yellow";
        break;
}

button.style.width = widthButton;
button.style.height = heightButton;


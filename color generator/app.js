const getColor = () => {
    let randomNumber = Math.floor(Math.random()*16777215);
    randomNumber = "#" + randomNumber.toString(16);
    // console.log(randomNumber);
    document.body.style.backgroundColor = randomNumber;
    document.getElementById("clrCode").innerHTML = randomNumber;
}

document.getElementById("btn").addEventListener("click", getColor);
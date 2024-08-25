function rollDice(){
    const numofDice = document.getElementById("numOfDice").value;
    const diceresult = document.getElementById("diceresult");
    const diceimages = document.getElementById("diceimages");
    const values = [];
    const images = [];

    for(let i = 0; i < numofDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dice_images/${value}.png">`);
    }

    diceresult.textContent = `Rolled: ${values.join(`, `)}.`
}
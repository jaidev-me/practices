let elem = document.getElementsByClassName("lih-32");
let Redbet = 0;
let Greenbet = 0;
Voiletbet = 0;

Array.from(elem).forEach((element) => {
    let childs = element.getElementsByTagName("div");
    let childsArray = Array.from(childs);
    let issueNumber = childsArray[0].innerText;

        let color = element.getElementsByTagName('span')[0].innerText;
        
        if (color == "R" || color == "2" || color == "4" || color == "6" || color == "8") {
            Redbet += parseInt(childsArray[3].innerText.replace(/[^\d.-]/g, ''));
        }
        if (color == "G" | color == "1" || color == "3" || color == "7" || color == "9") {
            Greenbet += parseInt(childsArray[3].innerText.replace(/[^\d.-]/g, ''));
        }
        if(color == "V" || color == "0" || color == "5"){
            Voiletbet += parseInt(childsArray[3].innerText.replace(/[^\d.-]/g, ''));
        }
});

console.log(`RED is ${Redbet} and Green is ${Greenbet} and Voilet is ${Voiletbet}`);




// second code


let elem = document.getElementsByClassName("lih-32");

let Redbet = 0;
let Greenbet = 0;
let Voiletbet = 0;
let Number0bet = 0;
let Number1bet = 0;
let Number2bet = 0;
let Number3bet = 0;
let Number4bet = 0;
let Number5bet = 0;
let Number6bet = 0;
let Number7bet = 0;
let Number8bet = 0;
let Number9bet = 0;

Array.from(elem).forEach((element) => {
    let childs = element.getElementsByTagName("div");
    let childsArray = Array.from(childs);
    let issueNumber = childsArray[0].innerText;

    let color = element.getElementsByTagName('span')[0].innerText;
    let betAmount = parseInt(childsArray[3].innerText.replace(/[^\d.-]/g, ''));

    if (color === "R") {
        Redbet += betAmount;
    } else if (color === "G") {
        Greenbet += betAmount;
    } else if (color === "V") {
        Voiletbet += betAmount;
    } else if (color === "0") {
        Number0bet += betAmount;
    } else if (color === "1") {
        Number1bet += betAmount;
    } else if (color === "2") {
        Number2bet += betAmount;
    } else if (color === "3") {
        Number3bet += betAmount;
    } else if (color === "4") {
        Number4bet += betAmount;
    } else if (color === "5") {
        Number5bet += betAmount;
    } else if (color === "6") {
        Number6bet += betAmount;
    } else if (color === "7") {
        Number7bet += betAmount;
    } else if (color === "8") {
        Number8bet += betAmount;
    } else if (color === "9") {
        Number9bet += betAmount;
    }
});

console.log(`
RED bets total: ${Redbet}
GREEN bets total: ${Greenbet}
VIOLET bets total: ${Voiletbet}
Number 0 bets total: ${Number0bet}
Number 1 bets total: ${Number1bet}
Number 2 bets total: ${Number2bet}
Number 3 bets total: ${Number3bet}
Number 4 bets total: ${Number4bet}
Number 5 bets total: ${Number5bet}
Number 6 bets total: ${Number6bet}
Number 7 bets total: ${Number7bet}
Number 8 bets total: ${Number8bet}
Number 9 bets total: ${Number9bet}
`);

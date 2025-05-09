const calendrierDuCrayon = {
    septembre: 10,
    octobre: 9,
    novembre: 8,
    decembre: 7,
    janvier: 6,
    fevrier: 5,
    mars: 4,
    avril: 3,
    mai: 2,
    juin: 1,
};

const drawMyPen = (month) => {
    const crayonBody = "||||\n"
    const gommeUnEtage = "|__|\n" + "|__|";
    const gommeDeuxEtages = "|__|\n" + "|  |\n" + "|__|"
    console.log(" /\\\n" + "/__\\");

    if (month === calendrierDuCrayon.juin){
        return console.log(crayonBody.repeat(1) + gommeDeuxEtages);
    }
    if (month === calendrierDuCrayon.mai){
        return console.log(crayonBody.repeat(2) + gommeDeuxEtages);
    }
    if (month === calendrierDuCrayon.avril){
        return console.log(crayonBody.repeat(3) + gommeDeuxEtages);
    }
    if (month === calendrierDuCrayon.mars){
        return console.log(crayonBody.repeat(4) + gommeUnEtage);
    }
    if (month === calendrierDuCrayon.fevrier){
        return console.log(crayonBody.repeat(5) + gommeUnEtage);
    }
    if (month === calendrierDuCrayon.janvier){
        return console.log(crayonBody.repeat(6) + gommeUnEtage);
    }
    if (month === calendrierDuCrayon.decembre){
        return console.log(crayonBody.repeat(7) + gommeUnEtage);
    }
    if (month === calendrierDuCrayon.novembre){
        return console.log(crayonBody.repeat(8) + gommeUnEtage);
    }
    if (month === calendrierDuCrayon.octobre){
        return console.log(crayonBody.repeat(9) + gommeUnEtage);
    }
    if (month === calendrierDuCrayon.septembre){
        return console.log(crayonBody.repeat(10) + gommeUnEtage);
    }
}

drawMyPen(10)
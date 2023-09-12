// 1.a) Get all the countries from Asia continent /region using Filter function


let data = new XMLHttpRequest();

data.open("GET","https://restcountries.com/v3.1/all");
data.send();
data.onload = function(){
    const recieveData = JSON.parse(data.response);
    // console.log(recieveData);
    const asiaConti = recieveData.filter((value)=>{
        if(value.region === 'Asia'){
            return value.name;
        }
    })
    console.log(asiaConti);
    
}

// 1.b) Get all the countries with a population of less than 2 lakhs using Filter function

let popRequest = new XMLHttpRequest();
popRequest.open("GET","https://restcountries.com/v3.1/all");
popRequest.send();
popRequest.onload = function(){
    const popData = JSON.parse(popRequest.response);
    const totalPopul = popData.filter((numbers)=>{
        return numbers.population<200000;
    });
    console.log(totalPopul);
};

// 1.c) Print the following details name, capital, flag using forEach function

let countryRequest = new XMLHttpRequest();
countryRequest.open("GET","https://restcountries.com/v3.1/all");
countryRequest.send();
countryRequest.onload = function(){
    const countryData = JSON.parse(countryRequest.response);
    countryData.forEach((wholearr)=>{
        console.log(`
Name : ${wholearr.name.common}
Captial : ${wholearr.capital}
Flag : ${wholearr.flag}`);
    });
};


// 1.d)Print the total population of countries using reduce function

let populationReq = new XMLHttpRequest();
populationReq.open("GET","https://restcountries.com/v3.1/all");
populationReq.send();
populationReq.onload = function(){
    const wholePopData = JSON.parse(populationReq.response);

    const TotalPopulation = wholePopData.reduce((acc,tot)=>{
        return acc + tot.population;
    },0);
    console.log(`
Total population : ${TotalPopulation}`);
};


// 1.e) Print the country which uses US Dollars as currency

let dollarReq = new XMLHttpRequest();
dollarReq.open("GET","https://restcountries.com/v3.1/all");
dollarReq.send();
dollarReq.onload = function(){
    const dollars = JSON.parse(dollarReq.response);

    for(let i =0; i<dollars.length; i++){
        if(dollars[i].currencies === USD){
            console.log(`
Name : ${dollars[i].name.common}`);
        }
    }
};


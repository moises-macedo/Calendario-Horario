const paragrafo = document.querySelector('.paragrafo')

const myDate = new Date();


function dayWeek (dayOfTheWeek){

    let dayWeeks;

    switch (dayOfTheWeek){
        case 0:
        dayWeeks = "Domingo";
        return dayWeeks;
        case 1:
        dayWeeks = "Segunda-feira";
        return dayWeeks;        
        case 2:
        dayWeeks = "Terça-feira";
        return dayWeeks;
        case 3:
        dayWeeks = "Quarta-feira";
        return dayWeeks;
        case 4:
        dayWeeks = "Quinta-feira";
        return dayWeeks;        
        case 5:
        dayWeeks = "Sexta-feira";
        return dayWeeks;
        case 6:
        dayWeeks = "Sábado";
        return dayWeeks;
        case 7:
        dayWeeks = "";
        return dayWeeks;
        
    }

}

function monthOfTheYear (currentMonth){

    let valueOfTheMonth;

    switch (currentMonth){
        case 0:
        valueOfTheMonth = "Janeiro";
        return valueOfTheMonth;
        case 1:
        valueOfTheMonth = "Fevereiro";
        return valueOfTheMonth;
        case 2:
        valueOfTheMonth = "Março";
        return valueOfTheMonth;
        case 3:
        valueOfTheMonth = "Abril";
        return valueOfTheMonth;
        case 4:
        valueOfTheMonth = "Maio";
        return valueOfTheMonth;
        case 5:
        valueOfTheMonth = "Junho";
        return valueOfTheMonth;
        case 6:
        valueOfTheMonth = "Julho";
        return valueOfTheMonth;
        case 7:
        valueOfTheMonth = "Agosto";
        return valueOfTheMonth;
        case 8:
        valueOfTheMonth = "Setembro";
        return valueOfTheMonth;
        case 9:
        valueOfTheMonth = "Outubro";
        return valueOfTheMonth;
        case 10:
        valueOfTheMonth = "Novembro";
        return valueOfTheMonth;
        case 11:
        valueOfTheMonth = "Dezembro";
        return valueOfTheMonth;
        
    }

}

function zeroLeft (num) {

    return num < 10 ? `0${num}`: num




}

function createDate (data) {

    const dayOfTheWeek = myDate.getDay();
    const monthNumber = myDate.getMonth();

    const treatedDayOfTheWeek = dayWeek(dayOfTheWeek);
    const treatedMonthNumber = monthOfTheYear(monthNumber);



    return `${treatedDayOfTheWeek}, ${myDate.getDate()} ${treatedMonthNumber} de ${myDate.getFullYear()} ` +
    `${myDate.getHours()}:${myDate.getMinutes()}:${zeroLeft(myDate.getSeconds())}:${myDate.getMilliseconds()}`

}


paragrafo.innerText = createDate(myDate)

/*

const option = {
    dataStyle: 'full',
    timeStyle: "short",

};

paragrafo.innerText = mydatatoLocaleDateString('pt-BR', option)





*/


const day = 10;
const month = 10;
/*
Aries	March 21 – April 20	Mars	Mars
Taurus.svg	♉	Taurus	April 21 – May 21	Venus with Earth	Venus
Gemini.svg	♊	Gemini	May 22 – June 21	Mercury	Mercury
Cancer.svg	♋	Cancer	June 22 – July 22	Moon	Moon
Leo.svg	♌	Leo	July 23 – August 22	Sun	Sun
Virgo.svg	♍	Virgo	August 23 – September 23	Mercury	Mercury
Libra.svg	♎	Libra	September 24 – October 23	Venus	Venus
Scorpio.svg	♏	Scorpio	October 24 – November 22	Pluto	Mars
Sagittarius.svg	♐	Sagittarius	November 23 – December 21	Jupiter	Jupiter
Capricorn.svg	♑	Capricorn	December 22 – January 20	Saturn	Saturn
Aquarius.svg	♒	Aquarius	January 21 – February 19	Uranus	Saturn
Pisces.svg	♓	Pisces
*/
const Aries = "Aries";
const Taurus = "Taurus";
const Gemini = "Gemini";
const Cancer = "Cancer"
const Leo = "Leo";
const Virgo = "Virgo";
const Libra = "Libra";
const Scorpio = "Scorpio";
const Sagittarius = "Sagittarius"
const Capricorn = "Capricorn";
const Aquarius = "Aquarius";
const Pisces = "Pisces";

/// Alt + shift + f - выравнивание кода 
let sign;
if(month === 1){
    if(day <= 19){
        sign = Capricorn; // ToDO
    } else{
        sign = Aquarius;
    }
} else if(month == 2){
    if(day <= 18){
        sign = Aquarius;
    } else{
        sign = Pisces;
    }
} else if(month == 3){
    if(day <= 20){
        sign = Pisces;
    } else{
        sign = Aries;
    }
} else if(month == 4){
    if(day <= 20){
        sign = Aries;
    } else{
        sign = Taurus;
    }
} else if(month == 5){
    if(day <= 21){
        sign = Taurus;
    } else{
        sign = Gemini
    }
} else if(month == 6){
    if(day <= 21){
        sign = Gemini;
    } else{
        sign = Cancer;
    }
}
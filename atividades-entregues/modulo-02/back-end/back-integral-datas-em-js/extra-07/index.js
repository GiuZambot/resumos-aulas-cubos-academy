function taValentoPromo(dateIni, dateNow) {
    const prazo = dateIni.getTime() + (30*24*60*60*1000);
    if(dateIni.getTime() <= dateNow.getTime() && dateNow.getTime() <= prazo ) {
        return true;
    } else {
        return false;
    }   
}

// false pois ainda não começou a promoção
console.log(taValentoPromo(new Date(2021,3,25,12), new Date(2021,3,25,11)));

// true, dentro do prazo
console.log(taValentoPromo(new Date(2021,3,25,12), new Date(2021,4,25,12)));

// true, dentro do prazo
console.log(taValentoPromo(new Date(2021,3,25,12), new Date(2021,4,12,23)));

// false, passou um minuto 
console.log(taValentoPromo(new Date(2021,3,25,12), new Date(2021,4,25,12,1)));
function taAberto(date) {
    const time = date.getHours() + (date.getMinutes() / 60);
    const dia = date.getDay();
    if ((dia > 0 && dia < 6) && (time > 8 && time < 18)) {
        return true;
    } else if (dia === 6 && (time > 8 && time < 12)) {
        return true;
    } else {
        return false;
    }
}

console.log(taAberto(new Date(2021,3,25,12)));

console.log(taAberto(new Date(2021,3,26,12)));

console.log(taAberto(new Date(2021,3,26,7,59)));

console.log(taAberto(new Date(2021,3,24,9,30)));
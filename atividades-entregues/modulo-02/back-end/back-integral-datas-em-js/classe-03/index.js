function taAberto(date) {
    const time = date.getHours() + (date.getMinutes() / 60);

    if (time > 8 && time < 18) {
        return true;
    } else {
        return false;
    }
}

console.log(taAberto(new Date(2015,1,1,12)));

console.log(taAberto(new Date(2015,1,1,2)));

console.log(taAberto(new Date(2015,1,1,17,59)));

console.log(taAberto(new Date(2015,1,1,18,1)));
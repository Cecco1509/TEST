const DEG_PER_M = 6;
const DEG_PER_H = 30;

function angolo(d) {
    let ore = d.getHours()%12;
    let minuti = d.getMinutes();
    let hoursDeg = 0;
    let minutesDeg = 0;

    if(minuti == 0) return ore*DEG_PER_H;

    minutesDeg = minuti*DEG_PER_M;
    console.log("m", minutesDeg);
    let minP = (minutesDeg/360)*100; 
    console.log(minP, ((minP*DEG_PER_H)/100));
    hoursDeg = Math.floor(ore*DEG_PER_H + ((minP*DEG_PER_H)/100));
    
    return Math.min(hoursDeg, minutesDeg);
}

console.log(angolo(new Date("2021-04-23 14:00:00")));
console.log(angolo(new Date("2021-04-23 14:15:15")));
console.log(angolo(new Date("2021-04-23 6:50:50")));
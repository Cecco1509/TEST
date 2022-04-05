function extend(a,b){
    return {...b,...a};
}

//ES 4

function  produci(G,s){
    let r = "";
    for (const i of s) {
        if(G[i]) r += G[i];
        else r += i;
    }
    return r;
}

let G= {A:"aAB", B:"bb", C:"33"};
console.log(produci(G,"CAz"), "33aABz");
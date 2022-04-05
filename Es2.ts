function unique<T>(a:T[], equals:(x:T, y:T) => boolean): T[] {
    let r:T[] = [];
    for (let i = 0; i < a.length; i++) {
        for(let j = 0; j < a.length; j++){
            if(equals(a[i], a[j]) && i != j){
                if(r.indexOf(a[i]) < 0) r.push(a[i])
                j = a.length; 
            }
        }
    }
    return r;
}
console.log([3,5,3,2,8,5].indexOf(2))
console.log(unique<number>([3,5,3,2,8,5],((x,y)=>x==y)))// -> [3,5]
console.log(unique<number>([0,0,0,0,0,0,0],((x,y)=>x==y)))// -> [ 0 ]
console.log(unique<string>(['hello','hello', 'how','are','you'],((x,y)=>x==y)))// -> [ 'hello' ]
class BinTree<T>{
    public left:BinTree<T>|null = null; 
    public right:BinTree<T>|null = null;

    constructor(public data:T, public index:number){;}

    insert(value:T, index:number):void{
        if(index > this.index){
            if(this.right) return this.right.insert(value, index);
            this.right = new BinTree<T>(value,index);
            return;
        }
        if(index < this.index){
            if(this.left) return this.left.insert(value, index);
            this.left = new BinTree<T>(value, index);
            return;
        }
    }

    contains(index:number):T|null{
        if(index == this.index) return this.data;
        if(index > this.index && this.right) return this.right.contains(index);
        else if (index < this.index && this.left) return this.left.contains(index);
        return null;
    }
}

let bt1 = new BinTree("pippo", 10);
bt1.insert("pluto", 10);
bt1.insert("paperino", 15);
bt1.insert("qui", 3);
bt1.insert("quo", 7);
bt1.insert("qua", 17);
bt1.insert("nonna papera", 13);
console.log(bt1);
console.log(bt1.contains(10));
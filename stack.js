const Stack = function() {
    this.storage = {};
    this.count = 0;

    this.push = function(value){
        this.storage[this.count] = value;
        this.count++;
    }

    this.pop = function() {
        if(this.count == 0 ) {
            return;
        }
        let value = this.storage[this.count-1];
        delete this.storage[this.count-1];
        this.count--;
        return value;
    }

    this.peek = function(){

       return( this.storage[this.count-1]);

    }


}

let s1 = new Stack();
 s1.push(5);
 console.log(s1.peek());
 s1.push(12)
 console.log(s1.peek());

 console.log("count=", s1.count, "store=", s1.storage);
 console.log(s1.pop());
 console.log("count=", s1.count, "store=", s1.storage); 
 console.log(s1.pop());
 console.log("count=", s1.count, "store=", s1.storage);
 console.log(s1.pop());
 console.log("count=", s1.count, "store=", s1.storage);


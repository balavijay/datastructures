const Stack = function() {
    this.storage = {};
    this.count = 0;

    this.push = (value) => {
        this.storage[this.count] = value;
        this.count++;
    }

    this.pop = () => {
        if(this.count == 0 ) {
            return;
        }
        let value = this.storage[this.count-1];
        delete this.storage[this.count-1];
        this.count--;
        return value;
    }

    this.peek = () => {
       return( this.storage[this.count-1]);
    }

    this.display = () => {
        console.log("count=", this.count, "store=", this.storage);
    }


}

const s1 = new Stack();
 s1.push(5);
 console.log(s1.peek());
 s1.push("First");
 console.log(s1.peek());

 s1.display();
 console.log(s1.pop());
 s1.display();
 console.log(s1.pop());
 s1.display();
 console.log(s1.pop());
 s1.display();


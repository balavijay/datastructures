function Queue() {
    const collection = [];

    this.display = () => {
        console.log("Display Queue=", collection);
    }

    this.addToQueue = function(value) {
        collection.push(value);
    }

    this.addToQueuePriority = function(value, location) {
        let added = false;
        for(i=0; i < collection.length; i++){
            if(i == location) {
                collection.splice(i,0,value);
                added = true;
                break;
            }
        }

        if(!added){
            this.addToQueue(value);
        }
    }

    this.removefromQueue = function() {
        collection.shift();
    }

    this.empty = function(){
        collection.length = 0;
    }
}

const q1 = new Queue();
q1.addToQueue(51);
q1.addToQueue(52);
q1.addToQueue(53);
q1.addToQueue(54);
q1.display();
q1.addToQueue(55);
q1.display();
q1.addToQueue(555);
q1.removefromQueue();
q1.removefromQueue();
q1.display();


q1.addToQueuePriority("first", 1);
q1.addToQueuePriority("last", -1);

q1.display();
q1.empty();
q1.display();
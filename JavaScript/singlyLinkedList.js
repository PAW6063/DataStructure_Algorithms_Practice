// JavaScript implementation of a singly linked list

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let temp = new Node(val);
        try{
            if(!this.head){
                this.head = temp;
                this.tail = temp;
            }else{
                this.tail.next = temp;
                this.tail = temp;
            }
            
            this.length += 1;
            return this;
        }catch(err){
            console.log(err);
        }
    }

    pop(){
        try{
            if(!this.head) return undefined;

            let traverse = this.head;
            let temp = traverse;

            while(traverse.next){
                temp = traverse;
                traverse = traverse.next;
            }

            this.head
            traverse = null;
            this.length -= 1;

            if(this.length === 0){
                    this.head = null;
                    this.tail = null;
            }
        }catch(err){
            console.log(err);
        }
    }
}


function main(){
    let list = new SinglyLinkedList();
    
    for(let i = 0; i < 3; i++){
        list.push(Math.floor(Math.random() * 10));
    }

    let temp = list.head;
    for(let i = 0; i < list.length; i++){
        console.log(temp);
        temp = temp.next;
    }

    list.pop();

    temp = list.head;
    for(let i = 0; i < list.length; i++){
        console.log(temp);
        temp = temp.next;
    }

    return 0;
}

main();
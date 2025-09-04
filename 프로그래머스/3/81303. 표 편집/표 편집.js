class Node{
    constructor(data){
        this.data = data
        this.prev = null
        this.next = null
    }
}


function solution(n, k, command) {
    const nodes = Array.from({length:n}, (_,i)=>new Node(i))
    
    for(let i=0; i<n; i++){
        if(i>0) nodes[i].prev = nodes[i-1]
        if(i<n-1) nodes[i].next = nodes[i+1]
    }
    
    let cur_pointer = nodes[k]
    const stack = []
    
    for(let cmd of command){
        let [op, num] = cmd.split(" ")
        switch(op){
            case "D" :
                while(num--) cur_pointer = cur_pointer.next
                break;
            case "U" :
                while(num--) cur_pointer = cur_pointer.prev
                break;
            case "C" :
                stack.push(cur_pointer)
                if(cur_pointer.prev) cur_pointer.prev.next = cur_pointer.next
                if(cur_pointer.next) cur_pointer.next.prev = cur_pointer.prev
                cur_pointer = cur_pointer.next? cur_pointer.next: cur_pointer.prev
                break;
            case "Z" :
                const node = stack.pop()
                if(node.prev) node.prev.next = node
                if(node.next) node.next.prev = node
                break;
        }
    }
    
    const result = Array(n).fill("O")
    for(let node of stack){
        result[node.data] = "X"
    }
    return result.join("");
}
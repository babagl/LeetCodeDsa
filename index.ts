function minimumDelection(s:string):number {

    let totalA = 0;
    for(let char of s){
        console.log(char);
        if (char === 'a') {
            totalA ++;
            console.log(totalA);  
        }
    }
    let minDelection = totalA;
    let bCount = 0;

    for (let char of s) {
        if (char === 'a') {
            totalA--;
        }else if(char === 'b'){
            minDelection = Math.min(minDelection, bCount+totalA);
            console.log(minDelection);
            
            bCount++;
        }
    }
    return Math.min(minDelection, bCount);
}


// minimumDelection("SallAbdoulaye")
// console.log(minimumDelection("babab"));
//1654. Minimum Jumps to Reach Home


// function minimumJumps(forbidden: number[], a: number, b: number, x: number): number {
//     const forbiddenSet = new Set(forbidden);
//     console.log(forbiddenSet);
//     const visited = new Set<string>();

    
//     return 0;
// };


/**
 * two somme 
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
 */

function twoSomme(nums:number[], target: number){
    const numSom : {[key:number]: number} = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        console.log("###Complement : ",complement);
        if (complement in numSom) {
            return [numSom [complement], i];
        }
        numSom[nums[i]];
        
    }
    return []
}


// add two numbers 
class ListNode{
    val: number;
    next : ListNode | null;
    constructor(val: number = 0,next : ListNode | null = null){
        this.val = val
        this.next = next
    }
}


function addTwoSumNumbers(l1 : ListNode | null, l2: ListNode| null){
    let dummyHead = new ListNode(0);
    let p = l1 , q = l2 , curr = dummyHead;
    let curry = 0;

    while(p !== null || q !== null ){
        let x = p !== null ? p.val : 0;
        console.log("x",x);
        
        let y = q !== null ? q.val : 0;
        console.log("x",y);
        let sum = curry + x + y;
        curry = Math.floor( sum / 10 );
        console.log( "curry", curry );
        
        curr.next = new ListNode(sum % 10);
        curr = curr.next;
        console.log(" curr ", curr);
        
        if (p !== null ) {
            p = p.next
            console.log(" p ", p);
            
        }
        if (q !== null) {
            q = q.next
            console.log(" q ", q);
            
        }
    }
    if (curry > 0) {
        curr.next = new ListNode(curry);

        console.log(" curry next +", curr.next);
        
    }

    return dummyHead.next;
}




function lengthOfLongestSubstring(s: string){
    const charMap: Map<string, number> = new Map()
    let maxlen = 0;
    let start = 0;
    for(let i = 0 ; i< s.length; i++){
        const char = s[i]
        console.log("Char",char);
        if (charMap.has(char) && charMap.get(char)! >= start) {
            start = charMap.get(char)! + 1;
            console.log(" start ",start);
            

        }
        charMap.set(char ,i);
        console.log("charMap",charMap);
        maxlen = Math.max(maxlen, i- start + 1);
    }

    console.log("Maxlen + ", maxlen);
    
    return maxlen;
}

console.log("Lenght of letter");

lengthOfLongestSubstring("baba galle");

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
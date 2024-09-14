function minimumDelection(s) {
    var totalA = 0;
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var char = s_1[_i];
        console.log(char);
        if (char === 'a') {
            totalA++;
            console.log(totalA);
        }
    }
    var minDelection = totalA;
    var bCount = 0;
    for (var _a = 0, s_2 = s; _a < s_2.length; _a++) {
        var char = s_2[_a];
        if (char === 'a') {
            totalA--;
        }
        else if (char === 'b') {
            minDelection = Math.min(minDelection, bCount + totalA);
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
function twoSomme(nums, target) {
    var numSom = {};
    for (var i = 0; i < nums.length; i++) {
        var complement = target - nums[i];
        console.log("###Complement : ", complement);
        if (complement in numSom) {
            return [numSom[complement], i];
        }
        numSom[nums[i]];
    }
    return [];
}

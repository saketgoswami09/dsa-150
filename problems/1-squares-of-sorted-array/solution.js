/**
 * Pattern: Two Pointers (Opposite Ends)
 * Time Complexity: O(n) - Hum array ko sirf ek baar traverse kar rahe hain.
 * Space Complexity: O(n) - Naya result array banaya hai jiska size 'n' hai.
 * Key Insight: Array sorted hai, isliye sabse bade squares ya toh extreme left (negative) mein honge ya extreme right (positive) mein. Hum dono ends ko compare karke sabse bada square result array ke aakhiri (end) se bharna shuru karte hain.
 */

function sortedSquares(nums) {
    // Result store karne ke liye ek naya array banate hain jiska size 'nums' ke barabar ho
    const result = new Array(nums.length);
    
    // Left pointer ko array ke bilkul shuru (index 0) mein set karte hain
    let left = 0;
    
    // Right pointer ko array ke bilkul end mein set karte hain
    let right = nums.length - 1;
    
    // Result array ko peeche se (end se) bharna hai, kyunki hum sabse bade squares pehle dhund rahe hain
    let insertIndex = nums.length - 1;
    
    // Jab tak left pointer right pointer ko cross na kar le (saare elements cover na ho jayein)
    while (left <= right) {
        // Left wale number ka square nikalte hain
        const leftSquare = nums[left] * nums[left];
        
        // Right wale number ka square nikalte hain
        const rightSquare = nums[right] * nums[right];
        
        // Dono squares mein se kaunsa bada hai, ye compare karte hain
        if (leftSquare > rightSquare) {
            // Agar left square bada hai, toh usko array ki last available khali jagah par daal do
            result[insertIndex] = leftSquare;
            // Ab left element check ho gaya, toh left pointer ko ek step right mein khiskate hain
            left++;
        } else {
            // Agar right square bada ya barabar hai, toh usko array ki last available khali jagah par daal do
            result[insertIndex] = rightSquare;
            // Ab right element check ho gaya, toh right pointer ko ek step left mein khiskate hain
            right--;
        }
        
        // Ek number successfully fill kar diya, isliye insertIndex ko pichle box ke liye kam kar dete hain
        insertIndex--;
    }
    
    // Completely bhara hua sorted squared array return kar dete hain
    return result;
}

/*
=== Common Mistakes (Jo beginners aksar karte hain) ===
1. Pehle saare numbers ka square karna aur fir default sorting (jaise `nums.sort()`) use karna. Isse Time Complexity O(n log n) ho jati hai. Interviewer ye optimal O(n) solution dekhna chahte hain!
2. Naya result array na banana aur aalsi banke inplace modifying ki koshish karna. Ye galti loop ko bahut complicated kar deti hai kyunki numbers aapas mein overwrite hone lagte hain.
3. While loop ki condition mein 'left < right' likh dena 'left <= right' ki jagah. Is choti si galti se middle wala aakhiri element check hi nahi hota aur missing reh jata hai.
*/
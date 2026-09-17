/**
 * Pattern: Two Pointers (Same Direction / Fast & Slow Pointers)
 * Time Complexity: O(n) - Hum array ko sirf ek baar traverse kar rahe hain.
 * Space Complexity: O(1) - Hum array ko in-place modify kar rahe hain, koi extra space nahi liya.
 * Key Insight: Hum do pointers use karte hain. Ek "fast" pointer jo array ko read karta hai, aur ek "slow" (k) pointer jo valid elements ko array ke shuru mein write karta hai.
 */

function removeElement(nums, val) {
    // k ek slow pointer hai jo us position ko point karta hai jahan naya valid number aana chahiye.
    // Starting mein, first valid number 0th index pe jayega.
    let k = 0;
    
    // i humara fast pointer hai jo har ek number ko ek-ek karke check karega
    for (let i = 0; i < nums.length; i++) {
        // Agar current number us value ke barabar NAHI hai jise humein hatana hai
        if (nums[i] !== val) {
            // Toh is number ko 'k' position par rakh do (kyunki ye valid element hai)
            nums[k] = nums[i];
            
            // Ab humne ek valid number place kar diya hai, toh 'k' ko ek step aage badha do
            // Taaki agla valid number agli jagah par aaye
            k++;
        }
        // Note: Agar nums[i] == val hai, toh hum kuch nahi karte. 
        // Hum bas i++ (loop ke through) se aage badh jate hain aur is number ko skip kar dete hain.
    }
    
    // k effectively un elements ki count bata raha hai jo 'val' nahi the.
    // Humara naya valid array size 'k' hai.
    return k;
}

/*
=== Common Mistakes (Jo beginners aksar karte hain) ===
1. Array se actually elements delete karne ke liye `splice()` method use karna. `splice()` internally elements ko shift karta hai jisse complexity O(n^2) ho jati hai.
2. Naya array bana lena. Question mein explicitly kaha gaya hai ki kaam in-place karna hai (Space Complexity O(1)).
3. Jab valid element mile, sirf `k++` karna aur `nums[k] = nums[i]` copy karna bhool jana. Isse original array elements nahi badlenge.
*/
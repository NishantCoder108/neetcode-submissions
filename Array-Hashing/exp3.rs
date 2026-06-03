//Instead of looping 2 for-loops. We can use `zip` 

use std::collections::HashMap;
fn main() {
    let a = "jar".to_string();
    let b = "jam".to_string();
    
    let res = is_anagram(a,b);
    println!("RES: {}", res);
   
}


fn is_anagram(s: String, t: String) -> bool {
        if s.len() != t.len() {
            return false;
        }
        let mut count_s: HashMap<char, i32> = HashMap::new();
        let mut count_t: HashMap<char, i32> = HashMap::new();
        for (a, b) in s.chars().zip(t.chars()) {
        
            println!("A: {}, B: {}", a, b);
            
            *count_s.entry(a).or_insert(0) += 1;
            *count_t.entry(b).or_insert(0) += 1;
        }
        
        println!("counts : {:?}", count_s);
        count_s == count_t
}

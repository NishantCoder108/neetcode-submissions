use std::collections::HashMap;
fn main() {
    
    let s = "nishaaa";
    let t = "tinshna";
    
    if s.len() != t.len() {
        println!("False");

        return;
    }
    
    let mut t_hash : HashMap<char, i32> = HashMap::new();
    let mut s_hash: HashMap<char, i32> = HashMap::new();
    
    // let len = name.chars().count();
    
    for char in s.chars() {
        let val = s_hash.entry(char).or_insert(0);
        *val += 1;
    }
    
    for char in t.chars(){
        let val = t_hash.entry(char).or_insert(0);
        *val += 1;
    }
    
    println!("T Hash : {:?}", t_hash);
    println!("S Hash : {:?}", s_hash);
    println!("T_Hash Keys: {:?}", t_hash.keys());
    println!("Length of T_Hash Keys: {:?}", t_hash.len());
    //check, t_hash and s_hash's keys len() are same
    
    if t_hash.keys().len() != s_hash.keys().len() {
        println!("False");
        
    }
    
    if t_hash.len() != s_hash.len() {
        println!("False");
        // return ;
    }
    
    //Now, actual compare with s_hash with t_hash
    
    for (s_key, s_value) in &s_hash{
        if t_hash[s_key] != *s_value{
            println!("False");
            // return ;
        }
    }
    
    println!("True");
    
    println!("Ownership moved of s_hash:{:?}", s_hash);
    
    //we can also this alternative method as well to compare to other hashmap
    if s_hash != t_hash{
        println!("False : Direct check");
    }else{
        println!("True : Direct check");
    }
    
}

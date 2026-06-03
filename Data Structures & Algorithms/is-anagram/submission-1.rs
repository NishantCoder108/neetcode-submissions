use std::collections::HashMap;

impl Solution {
    pub fn is_anagram(s: String, t: String) -> bool {

    if s.len() != t.len() {
        return false;
    }

    let mut s_hash: HashMap<char, i32> = HashMap::new();
    let mut t_hash: HashMap<char, i32> = HashMap::new();

    for char in s.chars(){
        let val = s_hash.entry(char).or_insert(0);
        *val += 1;
    }

    for char in t.chars(){
        let val = t_hash.entry(char).or_insert(0);
        *val += 1;
    }

    // Manually compare with hashes
    if s_hash.len() != t_hash.len() {
        return false;
    }
    for (s_key, s_val) in &s_hash{
        if t_hash.get(s_key) != Some(s_val){
            return false;
        }
    }

    return true;
    }
}

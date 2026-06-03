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

    if s_hash != t_hash{
        return false;
    }else{
        return true;
    }
    }
}

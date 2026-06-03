use std::collections::HashMap;

fn main() {
  let a = vec![1,2,3];
  let name = "nishant".to_string();
  
  
  let mut hash:HashMap<i32, i32> = HashMap::new();
  let mut hash_char: HashMap<char, i32> = HashMap::new();
  
  
  for i in 0..a.len(){
      let val = hash.entry(a[i]).or_insert(0);
      *val += 1;
  }
  
  
  println!("Hash: {:?}", hash);
  
  
  for ele in &a{
    let val=  hash.entry(*ele).or_insert(0);
    *val += 1;
  }
  
  println!("Hash in arr: {:?}", hash);
  
  println!("Array: {:?}",a);
  
  
  //looping on str
  for cha in name.chars() {
      let val = hash_char.entry(cha).or_insert(0);
      *val += 1;
  }
    
  println!("Character Hash: {:?}", hash_char);
  
 
  
  println!("Name: {:?}", name);
  
  
  
}

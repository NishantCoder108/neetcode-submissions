impl Solution {
    pub fn has_duplicate(nums: Vec<i32>) -> bool {

     let mut hash:HashMap<i32,i32> = HashMap::new();

     println!("Hahs: {hash:?}");

     for num in nums{
       let val = hash.entry(num).or_insert(0);

        *val += 1;

     }
     

     for (key, value) in &hash{

        if *value > 1 {
            return true ;
        }
     }

     false
    }
}

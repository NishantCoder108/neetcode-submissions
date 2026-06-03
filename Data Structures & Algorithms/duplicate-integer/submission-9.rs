impl Solution {
    pub fn has_duplicate(mut nums: Vec<i32>) -> bool {

    

    nums.sort();

    
    if nums.len() == 0 {
        return false;
    }
    
    for i in 0..(nums.len() - 1){
        if nums[i] == nums[i+1]{
            return true;
        }
    }

    false

    //  let mut hash:HashMap<i32,i32> = HashMap::new();

    //  println!("Hahs: {hash:?}");

    //  for num in nums{
    //    let val = hash.entry(num).or_insert(0);

    //     *val += 1;

    //  }
     

    //  for (key, value) in &hash{

    //     if *value > 1 {
    //         return true ;
    //     }
    //  }

    //  false




    }
}

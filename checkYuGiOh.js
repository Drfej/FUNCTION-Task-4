function checkYuGioh(p) {
    let arr = [];
    if(typeof p != "number") {
        return 'invalid p : "fizzbuzz is meh")'
    }

    for (let n =1; n <= p; ++n) {
        arr.push (n)
    }

    for (let n =0; n < arr.length; ++n) {
        let F = arr[n];
        if(F % 2 === 0) {
            arr[n] = "yu"
        }
        if(F % 3 === 0) {
            if(F % 2 === 0) {
                arr[n] = arr[n] + "-gi";
             } else {
                    arr[n] = "gi"
             }
        }    
        if(F % 5 === 0) {
            if(F % 2 === 0 || F % 3 === 0) {
                arr[n] = arr[n] + "-oh";
             } else {
                    arr[n] = "oh"
             }
        }
            
        
    }



    return arr;
}

let p = 10;
  console.log (checkYuGioh(p))
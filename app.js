function convertFahrToCelcius(F) {
    if(typeof F === "number") {
        let celcius = (F -32) * 5/9;
        return celcius.toFixed(4);
    } else{
        return '${F} is not a valid number but a/an $typeof F)}';
    }
}

let F = 10;
 console.log (convertFahrToCelcius(F))
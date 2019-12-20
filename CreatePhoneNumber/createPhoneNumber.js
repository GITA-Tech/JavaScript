/* written by Claude J Will on December 20, 2019
function accepts an array of single digit integers
if array length is greater than or less than 10
return the string 'There can only be ten one digit integers */
const createPhoneNumber = numbers => {
    let format = "(xxx) xxx-xxxx";
    // create for loop that starts at the index of 0
    // while i is less than the length of the numbers
    // use the .replace() iteration method to replace 
    // each x with the number at the current index
    // then assign to format
    for(let i = 0; i < numbers.length; i++)
    {
        // ensure that lenth is equal to 10
        // if not break out of the loop
        if(numbers.length < 10 || numbers.length > 10){
            return 'There can only be ten one digit integers'
            break;
        }
        format = format.replace('x',numbers[i]);
    }
    // return modified format string
    return format;
}


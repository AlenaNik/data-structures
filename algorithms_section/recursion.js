// a function that refers to itself
let counter = 0;
function inception() {
    console.log(counter);
    if (counter > 3) {
        return 'done';
    }
    counter++;
    return inception();
}
inception()
// stackoverflow is WHEN A FUNC CALLS ITSELF UNTIL THE
//MAN ON A COUCH IS DROWNED


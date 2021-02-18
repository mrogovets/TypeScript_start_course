var isFetching = true;
var isLoading = false;
var int = 42;
var float = 4.2;
var number = 3e10;
var message = "Hello Typescript";
var numberArray = [1, 1, 2, , 3, 5, 8, 13];
var numberArray2 = [1, 1, 2, , 3, 5, 8, 13];
var words = ["Hello", "Typescript"];
// Tuple
var contacts = ['Max', 1234567];
// Any
var variable = 42;
//...
variable = [];
// ====
function sayMyName(name) {
    console.log(name);
}
sayMyName('Haysenberg');
// Never called
function throwError(message) {
    throw new Error(message);
}
function infinite() {
    while (true) {
    }
}
var login = 'admin';
var id1 = 123456;
var id2 = '123456';

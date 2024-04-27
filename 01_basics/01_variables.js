const accountId = 1234   //cannot be modified afterwards
let accountEmail = "sakshamgarg782@gmail.com"   //can be modified
var accountPassword = "Sakshamg1"               //can be modified
accountCity = "Delhi"          /*can be modified, this is also how a
                            variable can be declared but it is not a good practice*/
/*let and var are similar but var does not understand scope (block scope and functional 
scop).....forloop whileloop if
so we use only let now which understands scope*/
let accountState       //this will remain undefined
accountEmail = "782sakshamgarg@gmail.com"
console.log(accountId)
console.table([accountEmail, accountPassword, accountCity])
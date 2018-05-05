let checkLogin = (email, password, ...allUsers) =>{
let isUserFound = false
let passwordCorrect = false

for(let currentUser of allUsers) {
console.log(currentUser)
if(currentUser.email == email) {
	if(currentUser.password == password) {
  	isUserFound = true
    passwordCorrect = true
    break
  } else {
  isUserFound = true
  passwordCorrect = false
  break
  }
 } else {
 isUserFound = false
 }
} //end for of loop

if(isUserFound == true && passwordCorrect == true) {
alert('You are logged in')
} else if(isUserFound == true && passwordCorrect == false) {
alert('You have provided incorrect password')
} else {
alert('No user with this email found')
}
} // end check login


//Function call using REST parameters
checkLogin("divgoel@xyz.com","123456", {"userId" : "1", 
"email" : "divgoel@xyz.com", 
"password" : "123456"},
{"userId" : "2", 
"email" : "abc@xyz.com", 
"password" : "1234"})
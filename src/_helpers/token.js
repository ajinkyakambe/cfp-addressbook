let tokenValue;
let userObject = localStorage.getItem("user");
console.log(userObject);
if(userObject === null){
    tokenValue = 0;
   
} else {
    let tokenObject = JSON.parse(userObject);
    tokenValue = tokenObject.token;
}



export const tokenHelper = {
    token:tokenValue
};
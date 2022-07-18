let tokenValue;
let userObject = localStorage.getItem("user");
if(userObject !== null){
    let tokenObject = JSON.parse(userObject);
    tokenValue = tokenObject.token;
} else {
    tokenValue = 0;
}



export const tokenHelper = {
    token:tokenValue
};
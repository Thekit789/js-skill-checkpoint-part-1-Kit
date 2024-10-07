// Question #3
let userPassword = "password=autorun/trojan.exe";
// เริ่มเขียนโค้ดตรงนี้
console.log(checkPasswordStrength(userPassword));

function checkPasswordStrength(userPassword) {
  if (userPassword.length < 6) {
    return "Weak";
  } else if (userPassword.length >= 6 && userPassword.length <= 10) {
    return "Medium";
  } else {
    return "Strong";
  }
}

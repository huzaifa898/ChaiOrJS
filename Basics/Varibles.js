const accountId = '1234567890';
let accountEmail= 'test@gmail.com';
var accountPassword = 'password123';
accountCity = 'New York';

//accountId = '0987654321'; // Error: Assignment to constant variable.
accountEmail = 'test1@gmail.com'; // No Error
accountPassword = 'password321'; // No Error
accountCity = 'San Francisco'; // No Error
console.log([accountId, accountEmail, accountPassword, accountCity]); // Output
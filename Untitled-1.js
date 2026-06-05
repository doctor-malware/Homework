let firstName = " иВАН ";
let lasttName = " ПЕТРОВ ";
const Name = firstName.trim().toLowerCase();
const lastName = lasttName.trim().toLowerCase();
const Age = "25";
const Subscribed = "true";
const Email = `${Name}.${lastName}@qa-test.com`;
console.log(`=== User Profile ===
Name: ${Name}
Last Name: ${lastName}
Age: ${Age}
Subscribed: ${Subscribed}
Email: ${Email}
====================`)
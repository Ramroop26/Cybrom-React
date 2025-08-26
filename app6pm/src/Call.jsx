function greetUser(name) {
  console.log("Hello " + name);
  
}


function sayGoodbye(callback) {
  console.log("Goodbye!");
  callback(); 
}

greetUser("Ramroop", sayGoodbye);

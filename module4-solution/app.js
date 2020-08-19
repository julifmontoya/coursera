// The idea of this assignment is to take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program should say "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program should say "Good Bye". So, the final output
// on the console should look like this:
/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim*/

/*Hello speaker function*/
const helloSpeaker = {
  speakWord: "Hello",
};

//This says Hello
(() => {
  helloSpeaker.speak = function (userName) {
    return helloSpeaker.speakWord + " " + userName;
  };
})();

//This says Goodbye
const byeSpeaker = {
  speakWord: "Good Bye",
};

(() => {
  byeSpeaker.speak = function (userName) {
    return byeSpeaker.speakWord + " " + userName;
  };
})();

//This choose the names
(() => {
  let names = [
    "Yaakov",
    "John",
    "Jen",
    "Jason",
    "Paul",
    "Frank",
    "Larry",
    "Paula",
    "Laura",
    "Jim",
  ];
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    let firstLetter = name.charAt(0).toLowerCase();
    if (firstLetter === "j") {
      console.log(byeSpeaker.speak(name));
      document.write(`${byeSpeaker.speak(name)} <br>`);
    } else {
      console.log(helloSpeaker.speak(name));
      document.write(`${helloSpeaker.speak(name)} <br>`);
    }
  }
})();

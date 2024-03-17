function shout(string) {
    return string.toUpperCase();
};
console.log(shout("Hello"));

function whisper(string) {
    return string.toLowerCase();
}
console.log(whisper("Hello"));

function logShout(string) {
    console.log(string.toUpperCase());
  }
  
  module.exports = logShout; // Exporting the function for testing
  
  function logWhisper(string) {
    console.log(string.toLowerCase());
  }
  module.exports = logWhisper;

  function sayHiToHeadphonedRoommate(string) {
   if (string.toLowerCase() === string) {
    return("I can\'t hear you!")
    }
    else if (string.toUpperCase() === string) {
return("YES INDEED!");
    }
    else if (string === "Let\'s have dinner together!") {
        return("I would love to!");
    }
    
   }
  console.log(sayHiToHeadphonedRoommate("HELLO"));
  module.exports = sayHiToHeadphonedRoommate;
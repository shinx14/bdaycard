document.addEventListener("DOMContentLoaded", function() {
  const sentences = ["youre my favorite cheese", "you still wouldve been mine we wouldve been timeless", "youre the sweetest corn", 
    "youre the coolest poet ever", "youre the best outlaw who stole my heart", "i just wanna be yours", "one single thread of gold tied me to you <3"];
  const randomWord = sentences[Math.floor(Math.random() * sentences.length)];
  document.getElementById("text-container").textContent = randomWord;
});
import { checkLength, auth, getCookie, socialButton } from "../!/lib.js";

const usr = getCookie('username');
const psw = getCookie('password');

if (auth(usr, psw) != null) {
  const usrF = document.getElementById("username");
  usrF.value = `${usr}`;

  const usrP = document.getElementById("password");
  usrP.value = `${psw}`;
}


window.addEventListener("load", function() {
  document.getElementById("holder").classList.add("fade-in");
  document.getElementById("background").classList.add("fade-in");
  document.getElementById("social-buttons").classList.add("fade-in");
});


const toggleButton = document.querySelector('button.toggle');
const signupButton = document.getElementById('register-button');
const loginButton = document.getElementById('login-button');


const youtubeButton = document.getElementById("youtube-button");
const instagramButton = document.getElementById("instagram-button");
const twitterButton = document.getElementById("twitter-button");
const tiktokButton = document.getElementById("tiktok-button");

socialButton(youtubeButton, "https://www.youtube.com/@Opinac");
socialButton(instagramButton, "https://www.instagram.com");
socialButton(twitterButton, "https://twitter.com/Opinac_co");
socialButton(tiktokButton, "https://www.tiktok.com/@Opinac");


toggleButton.addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById("primary-container").classList.add("hidden");
  setTimeout(function() {
    document.getElementById("login-container").classList.remove("hidden");
  }, 300);
});

signupButton.addEventListener('click', function(event) {
    event.preventDefault();
  }
);

loginButton.addEventListener('click', function(event) {
    event.preventDefault();

    const username = document.getElementById("username");
    const password = document.getElementById("password");
    
    checkLength(username.value, password.value)

    const _v = auth(username.value, password.value)

    if (_v != null) {
      {document.getElementById("username").classList.add("valid");}
      {document.getElementById("password").classList.add("valid");}

      document.cookie = `username=${username.value};path=/`
      document.cookie = `password=${password.value};path=/`

      document.getElementById("login-container").classList.add("hidden");
      document.getElementById("social-buttons").classList.remove("fade-in");

      setTimeout(function() {
        window.location.href='../dashboard/dash.html'
      }, 300);

  
    } else {
      {document.getElementById("username").classList.remove("valid");}
      {document.getElementById("password").classList.remove("valid");}
      {document.getElementById("password").classList.add("invalid");}
    }

    

  }
)


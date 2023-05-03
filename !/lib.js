export function encrypt(text, key) {
    const keyWords = CryptoJS.enc.Utf8.parse(key);
    const encrypted = CryptoJS.AES.encrypt(text, keyWords, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString();
  }

export function decrypt(text, key) {
    var decrypted = CryptoJS.AES.decrypt(text, key)
    return decrypted.toString(CryptoJS.enc.Utf8)
}

export function checkLength(username, password) {

    if (username.length === 0) {document.getElementById("username").classList.add("invalid");}
    if (password.length === 0) {document.getElementById("password").classList.add("invalid");}

    if (username.length >= 1) {document.getElementById("username").classList.remove("invalid");}
    if (password.length >= 1) {document.getElementById("password").classList.remove("invalid");}

}

export function auth(user, pass) {
    const token = encrypt(`${user}:${pass}`, pass);
    if (token == "GMq400LJy0rEQ+t13C7SwGqjCvMoNNAyVj0KPz/2Q3s=") {
        return 0
    } else {
        return null
    }
  
}
  
export function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(`${name}=`)) {
        return cookie.substring(name.length + 1);
      }
    }
    return null;
  }

export function loginAuth() {

  const usr = getCookie('username');
  const psw = getCookie('password');

  if (auth(getCookie('username'), getCookie('password')) != null) {
    return true
  } else return false
}

export function socialButton(button, url) {
  button.addEventListener("click", function() {
    window.open(url, "_blank");
  });
}


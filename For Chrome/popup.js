function randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
    return result;
}

var url = '';

function copy(){
  var str, sel, copied;
  str = randomString(8, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
  url = 'http://www.dispostable.com/inbox/' + str + '/';
  email=str+"@dispostable.com";
  document.getElementById('p1').value = email;
  sel = document.getElementById('p1');
  sel.select();
  document.execCommand("copy");
  copied = document.getElementById('copied');
  if(copied.innerHTML==''){
    copied.innerHTML = 'Copied to clipboard';
  }
  setTimeout(function(){ copied.innerHTML = ''; }, 1500);
  return url;
}
document.getElementById('copy').onclick = copy;

function generate(){
  if(url==''){
    var str;
    str = randomString(8, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
    url = 'http://www.dispostable.com/inbox/' + str + '/';
  }
  window.open(url);
}
document.getElementById('inbox').onclick=generate;

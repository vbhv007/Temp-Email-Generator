function randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
    return result;
}

function copyToClipboard(element) {
  var temp = ("<input>");
  ("body").append(temp);
  temp.val((element).text()).select();
  document.execCommand("copy");
  temp.remove();
}

var url = '';

function copy(){
  var str;
  str = randomString(8, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
  url = 'http://www.dispostable.com/inbox/' + str + '/';
  //document.getElementById('p1').innerHTML = url;
  copyToClipboard('#p1');
  return url;
}
document.getElementById('copy').onclick=copy;

function generate(){
  if(url==''){
    var str;
    str = randomString(8, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
    url = 'http://www.dispostable.com/inbox/' + str + '/';
  }
  window.open(url);
}
document.getElementById('inbox').onclick=generate;

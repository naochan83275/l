var url = window.location.href;
if ( ~url.indexOf('https://naochan83275.github.io/l/#')){
  var linkid = url.replace('https://naochan83275.github.io/l/#', '');
  var link = linkid;
  console.log = link;
  window.location.href = link;
}else{
  window.location.href = 'https://naochan83275.github.io';
}

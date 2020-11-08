let Shortcut = [
  {
    "link":"https://bilibili.com",
    "ico":"/favicon.ico",
    "name":"bilibili"
  },
  {
    "link":"https://mozhua.aerfaying.com",
    "ico":"/Content/logo.ico",
    "name":"A营"
  }
];

let search = [
  {
    "name":"Google",
    "link":"https://www.google.com/search?q=$&oq=$&ie=UTF-8"
  },
  {
    "name":"百度",
    "link":"https://www.baidu.com/s?ie=utf-8&tn=56080572_22_hao_pg&wd=$"
  }
];

let select_search = 1;

let body_box = document.getElementById("body-box");
let html = body_box.innerHTML + "<div class=\"body-link-bar\">";
for(let i = 0;i < Shortcut.length;i++){

  html += "<a href=\""
   + 
  Shortcut[i].link
   + 
  "\" class=\"inLine select\"><img src=\""
   + 
  Shortcut[i].link
   + 
  Shortcut[i].ico
   + 
  "\" alt=\"\">"
   + 
  "<p>"
   +
  Shortcut[i].name
   +  
  "</p>"
   + 
  "</a>";

}

body_box.innerHTML = html + "</div>";

let search_box = document.getElementById("search");
window.setInterval(function () {
search_box.placeholder = "在 " + search[select_search].name + " 上搜索，或者输入一个网址";
}, 0);

function getLink(link, search) {
  var result = "";
  for(var j = 0;j < link.length;j++) {
    if(link[j] === "$") {
      result += search;
    } else {
      result += link[j];
    }
  }
  return result;
}

function getKey(event) {
  if (event.keyCode == 13) {
    window.open(getLink(search[select_search].link, document.getElementById("search").value)); 
  }
}
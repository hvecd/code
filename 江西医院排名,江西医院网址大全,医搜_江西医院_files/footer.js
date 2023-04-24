
var arrImg = document.getElementsByTagName("img");
for(i=0; i<arrImg.length; i++){
	if(arrImg[i].attributes['src'].value.substr(0, 8) == '/uploads'){
		arrImg[i].attributes['src'].value = "//www.esoou.com" + arrImg[i].attributes['src'].value;
	}
}


//统计代码
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?6e780a2f75cea9de2e1b1e8591600be9";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();



var origBox = document.getElementById("list-content");
var showBox = document.getElementById("list-content-clone");
var aLi = origBox.getElementsByTagName("li");
//container 容器，count 总页数 pageindex 当前页数
function setPage(container, count, pageindex) {
  for (var j = 0; j < 20; j++) {
	showBox.innerHTML += "<li class=\"fix\">" + aLi[j].innerHTML + "</li>";
  }
  var container = container;
  var count = count;
  var pageindex = pageindex;
  var a = [];
  //总页数少于20 全部显示,大于20 显示前3 后3 中间3 其余....
  if (pageindex == 1) {
	a[a.length] = "<a href=\"#pageup\" target=\"_self\" class=\"prev unclick\">上一页</a>";
  } else {
	a[a.length] = "<a href=\"#pageup\" target=\"_self\" class=\"prev\">上一页</a>";
  }
  function setPageList() {
	if (pageindex == i) {
	  a[a.length] = "<a href=\"#pageup\" target=\"_self\" class=\"on\">" + i + "</a>";
	} else {
	  a[a.length] = "<a href=\"#pageup\" target=\"_self\">" + i + "</a>";
	}
  }
  //总页数小于20
  if (count <= 10) {
	for (var i = 1; i <= count; i++) {
	  setPageList();
	}
  }
  //总页数大于20页
  else {
	if (pageindex <= 4) {
	  for (var i = 1; i <= 5; i++) {
		setPageList();
	  }
	  a[a.length] = "...<a href=\"#pageup\" target=\"_self\">" + count + "</a>";
	} else if (pageindex >= count - 3) {
	  a[a.length] = "<a href=\"#pageup\" target=\"_self\">1</a>...";
	  for (var i = count - 4; i <= count; i++) {
		setPageList();
	  }
	} else { //当前页在中间部分
	  a[a.length] = "<a href=\"#pageup\" target=\"_self\">1</a>...";
	  for (var i = pageindex - 2; i <= pageindex + 2; i++) {
		setPageList();
	  }
	  a[a.length] = "...<a href=\"#pageup\" target=\"_self\">" + count + "</a>";
	}
  }
  if (pageindex == count) {
	a[a.length] = "<a href=\"#pageup\" target=\"_self\" class=\"next unclick\">下一页</a>";
  } else {
	a[a.length] = "<a href=\"#pageup\" target=\"_self\" class=\"next\">下一页</a>";
  }
  container.innerHTML = a.join("");
  //事件点击
  var pageClick = function() {
	var oAlink = container.getElementsByTagName("a");
	var inx = pageindex; //初始的页码
	oAlink[0].onclick = function() { //点击上一页
	  if (inx == 1) {
		return false;
	  }
	  inx--;
	  setPage(container, count, inx);
	  showBox.innerHTML = "";
	  for (var j = (inx - 1) * 20; j < inx * 20; j++) {
		showBox.innerHTML += "<li class=\"fix\">" + aLi[j].innerHTML + "</li>";
	  }
	  //return false;
	  window.scrollTo(0,0);
	}
	for (var i = 1; i < oAlink.length - 1; i++) { //点击页码
	  oAlink[i].onclick = function() {
		inx = parseInt(this.innerHTML);
		setPage(container, count, inx);
		var aLiClone = new Array();
		for (var k = 0; k < aLi.length; k++) {
		  aLiClone.push(aLi[k]);
		}
		showBox.innerHTML = "";
		for (var j = (inx - 1) * 20; j < inx * 20; j++) {
		  showBox.innerHTML += "<li class=\"fix\">" + aLiClone[j].innerHTML + "</li>";
		}
		//return false;
		window.scrollTo(0,0);
	  }
	}
	oAlink[oAlink.length - 1].onclick = function() { //点击下一页
	  if (inx == count) {
		return false;
	  }
	  inx++;
	  setPage(container, count, inx);
	  showBox.innerHTML = "";
	  for (var j = (inx - 1) * 20; j < inx * 20; j++) {
		showBox.innerHTML += "<li class=\"fix\">" + aLi[j].innerHTML + "</li>";
	  }
	  window.scrollTo(0,0);
	  //return false;
	}
  }()
}
setPage(document.getElementById("page"), Math.ceil(aLi.length/20), 1);

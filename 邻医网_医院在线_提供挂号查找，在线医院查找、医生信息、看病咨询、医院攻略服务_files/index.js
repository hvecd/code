// JavaScript Document
//首页幻灯片
function show(index){
	$(".hdp_num span").removeClass("dq");
	$(".hdp_num span:eq("+index+")").addClass("dq");
	$(".hdp_con a").hide();
	$(".hdp_con a:eq("+index+")").show();
	i = index;
}
var i = 0;
function set(){
	T = setInterval(function(){
		i++;
		if(i>=$(".hdp_con a").size()){
			i = 0;
		}
		show(i);
	},2000)	
}
$(function(){	
	show(0);
	$(".hdp_num span").mouseover(function(){
		show($(this).index());
	});
	$(".index1_left").mouseover(function(){
		clearInterval(T);	
	}).mouseout(function(){
		set();	
	})
	set()
})
//首页地区查找切换
function tabOver(tabHover,tabCon){
	tabHover.mouseover(function(){
		tabHover.removeClass("hover");
		$(this).addClass("hover");
		tabCon.hide();
		tabCon.eq($(this).index()).show();
	})	
}
function tabClick(tabHover,tabCon){
	tabHover.click(function(){
		tabHover.removeClass("hover");
		$(this).addClass("hover");
		tabCon.hide();
		tabCon.eq($(this).index()).show();
	})	
}
$(function(){
	$(".index2_tab_ul li:last").addClass("last_li");
	tabOver($(".index2_tab_ul li"),$(".index2_lb_ul"));
})
//按科室
$(function(){
	for(i=0;i<$(".index3_jbcx_lb").size();i++){
		if((i+1)%2==0){
			$(".index3_jbcx_lb:eq("+i+")").css({"margin-right":"0px"});
		}		
	}		
})
$(function(){
	for(i=0;i<$(".index3_rmyy_lb_ul li").size();i++){
		$(".rmyy_span_num:eq("+i+")").text(i+1);
	}	
})

//按疾病
$(function(){
	$(".index4_tab_ul li:last").addClass("last_li");
	tabOver($(".index4_tab_ul li"),$(".index4_lb_ul"));	
})
//最后一个
$(function(){
	$(".index4_left1_rmwd:last").addClass("last_div");	
	$(".tsyytj_lb1:last").css("border-bottom","none");	
})
$(function(){
	for(i=0;i<$(".tjys_lb1").size();i++){
		if(i%2==0){
			$(".tjys_lb1:eq("+(i+1)+")").addClass("tjys_lb1_bg");
		}
	}
		
})
//筛选列表
$(function(){
	$(".sxjg_lb_ul li").mouseover(function(){
		$(".sxjg_lb_ul li").removeClass("hover");
		$(this).addClass("hover");	
	})
	$(".sxjg_lb_ul").mouseout(function(){
		$(".sxjg_lb_ul li").removeClass("hover");	
	})
})

$(function(){
	tabClick($(".fbxx3_tab ul li"),$(".fbxx3_con"));
	$(".fbxx_gongsi").hide();
	$("#fblx_radio3").click(function(){
		$(".fbxx_gongsi").hide();	
	})
	$("#fblx_radio4").click(function(){
		$(".fbxx_gongsi").show();	
	})
})
function xxtsShow(){
	$("#xxts_tankuang").show();	
}
function xxtsHide(){
	$("#xxts_tankuang").hide();	
}
//特色医院
$(function(){
	$(".tsyy_nav_ul li a").addClass("png");
	tabOver($(".tsyy1_ksdh_ul li"),$(".tsyy1_dh_con"));	
	tabOver($(".tsyy1_left_ul li"),$(".tsyy1_right_pic_con"));	
	$(".tsyy_tsjb_left_tjzj:first").addClass("margin_top");
	$(".tsyy_tsjb_zljs ul li").addClass("png");
})
$(function(){
	for(i=0;i<$(".tsyy_jyhj_pic").size();i++){
		if(i%4 == 0){
			$(".tsyy_jyhj_pic:eq("+(i+1)+")").addClass("tsyy_jyhj_pic_right_none");
		}	
	}
	for(i=0;i<$(".tsyy_cgal_img_lb1").size();i++){
		if((i+1)%4 == 0){
			$(".tsyy_cgal_img_lb1:eq("+i+")").addClass("margin_right");
		}	
	}	
	for(i=0;i<$(".zhongxin_right1_yyhj1").size();i++){
		if((i+1)%4 == 0){
			$(".zhongxin_right1_yyhj1:eq("+i+")").addClass("padding_none");
		}	
	}
})
//中心
function zxHeight(){
	var leftHeight = $(".zhongxin_left").height();
	var rightHeight = $(".zhongxin_right").height();
	var centerHeight = $(".zhongxin_index_center").height();
	var zhongxinHeight = $(".margin_top20").outerHeight();
	if(rightHeight < 743){
		$(".zhongxin_left").css("height","743px");
		$(".zhongxin_right").css("height","743px");
	}else{
		$(".zhongxin_left").css("height",zhongxinHeight + "px");
	}
}

$(function(){
	zxHeight();
	$(".zhongxin_left_dh_erji span").addClass("png");
	$(".zhongxin_left_dh_1").mouseover(function(){
		$(this).addClass("hover");
	})
	$(".zhongxin_left_dh_1").mouseout(function(){
		$(".zhongxin_left_dh_1").removeClass("hover");
	})
	for(i=0;i<$(".zhongxin_left_dh_span2").size();i++){
		$(".zhongxin_left_dh_span2:eq("+i+")").click(function(){
			$(this).parent("div").toggleClass("dq");
			$(this).parent("div").parent("li").toggleClass("show");	
		})
	}
})
$(function(){
	$(".zhongxin_index_cen2_con ul li").addClass("png");
	tabOver($(".zhongxin_index_cen2_lm ul li"),$(".zhongxin_index_cen2_con"));
	$(".zhongxin_index_cen2_lm ul li:eq(1)").mouseover(function(){
		$(this).addClass("hover_1")	
	})
	$(".zhongxin_index_cen2_lm ul li:eq(0)").mouseover(function(){
		$(".zhongxin_index_cen2_lm ul li:eq(1)").removeClass("hover_1")	
	})
	$(".zhongxin_index_r1_ul li").addClass("png");	
})
function checkBox(checkB){
	if($(checkB).attr("checked")=="checked"){
		$(".zhognxin_r_check").removeAttr("checked");
	}else{
		$(".zhognxin_r_check").attr("checked","checked");
	}	
}
$(function(){
	$("#firstBox").mouseup(function(){
		checkBox(this);
	})	
})
//添加分类
function middle(midbox){
	midbox.css({ 
		position:"absolute", 
		left: ($(window).width() - midbox.outerWidth())/2, 
		top: ($(window).height() - midbox.outerHeight())/2 + $(document).scrollTop() 
	}); 
}
function tjflBoxHide(){
	$(".tsjb_tjfl_box").hide();
}
function tjflBoxShow(){
	$(".tsjb_tjfl_box").show();
	middle($(".tsjb_tjfl_box"));
}

//环境修改
$(function(){
	$(".zhongxin_right1_yyhj1").mouseover(function(){
		$(this).children(".zhongxin_right_yyhj_caozuo").show();
	})
	$(".zhongxin_right1_yyhj1").mouseout(function(){
		$(this).children(".zhongxin_right_yyhj_caozuo").hide();
	})
})




//弹出box
function boxTop(){
	var boxH = $(".choose_hospital_con").outerHeight();
	$(".choose_hospital_box").css({
		"margin-top" : "-"+boxH/2+"px"
	})
}
function centerH(box){
	box.css({
		top : ($(window).height() - box.outerHeight())/2 + $(document).scrollTop()
	});		
}
$(function(){
	var hospital = $("#hospital");
	var hospitalValue = hospital.val();
	var popBox = $(".hospital_pop_box");
	function popBoxShow(){
		$("#mask1").height($(window).height());
		popBox.show();
		centerH($(".choose_hospital_box"));
	}
	function popBoxHide(){
		popBox.hide();
	}
	$(".span_close_box").click(function(){
		popBoxHide();
	})
	hospital.unbind();
	hospital.bind('click',function(){
		popBoxShow()
	})
})


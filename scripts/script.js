$.fn.intractiveBG=function(){
	$(this).each(function(){
		var ele=$(this);
		//var isOver=false;		
		ele.bind("mouseout",function(){ $(this).css("background-position","center center")});
		ele.bind("mousemove",function(e){
			
			var offset=$(this).offset();
			var xy={x:e.clientX - offset.left,y:e.clientY - offset.top}
			
			var halfWidth=$(this).width()/2;
			var halfHeight=$(this).height()/2;
			
			var space=($(this).width()-128)/2			
			var ratio=halfWidth/space;
			
			 $(this).css("background-position", (xy.x/ratio)+"px "+ (xy.y/ratio)+"px");
			//console.log(xy.x/ratio+"px "+xy.y/ratio+"px");			
		});
	});
}
//
$(function(){
	$('#icons>div').intractiveBG()
	var idArr={"myself":"#myself_container","portfolio":"#portfolio_container","contact":"#contact_container"}
	//Homepage tabs
	$("#icons>div").bind('click',function(){
		$("#main").removeClass('moveFront').addClass("moveBack");
		$(idArr[$(this).attr('id')]).removeClass('moveBack').addClass("moveFront");
	});
	//Home tab
	$('.home').bind('click',function(){
		$("#main").removeClass('moveBack').addClass("moveFront");
		$(this).parent().removeClass('moveFront').addClass('moveBack');
	});
});
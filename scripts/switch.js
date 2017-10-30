$(function(){
	var switchA  = $('.switch_a');
	var switchB  = $('.switch_b');
	var switchOn = $('.switch');

		switchOn.on("click",function(){
			switchOn.attr("src","img/activebutt.png");
			switchA.attr("src","img/nextbutt.png");
			switchB.attr("src","img/nextbutt.png");

				
		});

		switchB.on("click",function(){
			switchB.attr("src","img/activebutt.png");
			switchOn.attr("src","img/nextbutt.png");
			switchA.attr("src","img/nextbutt.png");
			$(".slide").css("background","url("+"img/2.jpg"+")");
		});

		switchA.on("click",function(){
			switchA.attr("src","img/activebutt.png");
			switchOn.attr("src","img/nextbutt.png");
			switchB.attr("src","img/nextbutt.png");
		});
	
});


$(document).ready(function() {
var gridNumber=16
var gridSize=600/gridNumber;



/*populate with divs*/

var func= function(){
	for(var i=0; i<(gridNumber*gridNumber);i++) {
$('#box').append("<div class ='grid'></div>");

}

}

func();


var high= function(){
$('.grid').hover(function() {
/*
	$('.highlight').css({backround-color:"#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6)"});
*/
	$(this).addClass('highLight');
});
}
high();


$('#someLink').click(function() {
	var gridAmount = prompt("Choose amount", 28);
	

	if(gridAmount<=600) {
		$('.grid').remove();
		gridNumber=gridAmount;
		func();
}
else {
	func();
	high();

}
$('.grid').css({"width": 600/gridAmount , "height":600/gridAmount });
		high();
	});

});

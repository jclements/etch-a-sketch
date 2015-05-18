var initialGridSize = 16;

var elementSize = 25;

var totalWidth = 384;

$(document).ready(function() {
	drawGrid(16);
	

	$(".element").hover(function(){
		alert('working');
		$(this).toggleClass("blue");
	},
	function(){
		$(this).toggleClass("blue");
		$(this).addClass("lightblue");
	});

	
	$(".menu > button").click(function(){
			$(".element").css("background-color","white");
			var newSize = prompt("How big?");
			$('#wrap').empty();
			drawGrid(newSize); 
	});

});

function drawGrid(size) {

	var id=1;
	for (var j=0; j < size; j++){
		$("#wrap").append("<div class='row' style='width:"+(totalWidth)+"px'>");
		for(var i = 0; i < size; i++) {
			$(".row:last-child").append("<div class='element' id='"+id+"'></div>");
			id++;
		}
		$("#wrap").append("</div>");

	}
	$(".element").css("width",totalWidth/size-4);
	$(".element").css("height",totalWidth/size-4);
}


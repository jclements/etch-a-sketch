var initialGridSize = 16;

var elementSize = 25;

var totalWidth = 384;

$(document).ready(function() {
	var grid=initialGridSize;
	
	if(window.location.search) {
		var query=window.location.search.split("=");
		grid=query[1];
		
	}
	
	drawGrid(grid);

	$(".element").hover(function(){
		$(this).toggleClass("blue");
	},
	function(){
		$(this).css("background-color","blue");
		$(this).css("background-color","lightblue");
	});


	$(".menu > button").click(function(){
			var newSize = prompt("How big?");
			window.location.search = 'grid='+newSize;
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


/**
 * @author David Rudder
 */

/*
 * This is a recursive function that calls the ajax method of
 * calculating the fuzzbuzz.  The reason why I used a recursive 
 * method is that I find it to be the most readable way of 
 * chaining asynchronous calls together.
 */
var run_ajax_based = function(num, end) {
	if (num > end) return;
	
	$.ajax({
		url: '/fizzbuzz/ajax_based?num='+num,
		success: function(line) {
			$("#ajax-based-output").append(line);
			$("#ajax-based-output").append("<br>");
			run_ajax_based(num+1, end);
		}
	});
}

$(document).ready(function() {
	$("#ajax-based-go-btn").click(function() {
		var start = $("#ajax-based-start-num").val();
		var end = $("#ajax-based-end-num").val();
		
		if (!$.isNumeric(start)) {
			alert("Please enter a number in the start field");
			return;
		}

		if (!$.isNumeric(end)) {
			alert("Please enter a number in the end field");
			return;
		}
		
		if (end<=start) {
			alert("Please make sure that end is greater than start");
			return;
		}
		run_ajax_based(parseInt(start), parseInt(end));
	});
});

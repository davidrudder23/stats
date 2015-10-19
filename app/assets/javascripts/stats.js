var refreshSyslog = function() {
	$.ajax({
		url: "/stats/logs",
		success: function(lines) {
			$.each(lines, function(index, line) {
				$("#syslog-output").prepend(line+"<br>");
			});
		}
	});
}
 
var refreshFree = function() {
	console.log("Refreshing free");
	$.ajax({
		url: "/stats/free",
		success: function(output) {
			$("#free-output").html("<pre>"+output+"</pre>");
		}
	});
}

$(document).ready(function() {
	setInterval(refreshSyslog, 1000);
	refreshSyslog();
	
	setInterval(refreshFree, 5000);
	refreshFree();

})

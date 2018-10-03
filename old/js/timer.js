$(window).resize(function(){
	$("#DateCountdown").TimeCircles().rebuild();
});
$("#DateCountdown").TimeCircles({
	"animation": "smooth",
	"bg_width": 0.5,
	"fg_width": 0.023333333333333334,
	"circle_bg_color": "#60686F",
		"time": {
			"Days": {
				"text": "Days",
				"color": "#f44242",
				"show": true
			},
			"Hours": {
				"text": "Hours",
				"color": "#f44242",
				"show": true
			},
			"Minutes": {
				"text": "Minutes",
				"color": "#f44242",
				"show": true
			},
			"Seconds": {
				"text": "Seconds",
				"color": "#f44242",
				 "show": true
			}
		}
});

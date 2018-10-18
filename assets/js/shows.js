var shows = [{
	show: 'Utah Quilting and Sewing Marketplace',
	website: "<a href='https://www.downunderdiversions.com/uqsm-show.htm' target='_blank'>click here</a>",
	date: 'May 1-4, 2019'
},
];

var info = "<div class='container col-md-7 col-sm-7 col-lg-7' id='dealer-table'>  <table class ='table table-striped table-bordered table-hover'> <tr> <th class='text-center'>Show</th> <th class='text-center'>Website</th> <th class='text-center'>Date</th> </tr> </div>";

for (var i = 0; i < shows.length; i++) {
	info += "<tr><td class='shows-name'>" + shows[i].show + "</td><td>" + shows[i].website + "</td><td>" + shows[i].date + "</td></tr>";
}

info += "</table>";

document.write(info);
var shows = [
	{
	show: 'Utah Quilting and Sewing Marketplace',
	website: "<a href='https://www.downunderdiversions.com/uqsm-show.htm' target='_blank'>click here</a>",
	date: 'May 1-4, 2019'
},
{
	show: 'Quiltfest Lancaster',
	website: "<a href='https://www.quiltfest.com/upcoming-shows-and-events/quiltfest-lancaster/' target='_blank'>click here</a>",
	date: 'May 9-11, 2019'
},
{
	show: 'Vermont Quilt Fest',
	website: "<a href='https://www.vqf.org/home/' target='_blank'>click here</a>",
	date: 'June 26-29, 2019'
},
{
	show: 'World Quilt New England',
	website: "<a href='https://www.quiltfest.com/upcoming-shows-and-events/world-quilt-new-england/' target='_blank'>click here</a>",
	date: 'August 15-17, 2019'
},
{
	show: 'Pennsylvania National Quilt Extravaganza',
	website: "<a href='https://www.quiltfest.com/upcoming-shows-and-events/pennsylvania-national-quilt-extravaganza/' target='_blank'>click here</a>",
	date: 'September 12-15, 2019'
},
];

var info = "<div class='container col-md-7 col-sm-7 col-lg-7' id='dealer-table'>  <table class ='table table-striped table-bordered table-hover'> <tr> <th class='text-center'>Show</th> <th class='text-center'>Website</th> <th class='text-center'>Date</th> </tr> </div>";

for (var i = 0; i < shows.length; i++) {
	info += "<tr><td class='shows-name'>" + shows[i].show + "</td><td>" + shows[i].website + "</td><td>" + shows[i].date + "</td></tr>";
}

info += "</table>";

document.write(info);

var showscord = [
	{
	name: "Utah Quilting & Sewing Machine Marketplace",
	cords: {
		lat: 40.5779603,
		lng: -111.8898461
	}
},
	{
	name: "Quiltfest Lancaster",
	cords: {
		lat: 40.0254098,
		lng: -76.2157195
	}
},
{
	name: "Vermont Quilt Fest",
	cords: {
		lat: 44.496469,
		lng: -73.1253808
	}
},
{
	name: "World Quilt New England",
	cords: {
		lat: 42.1128192,
		lng: -72.6163815
	}
},
{
	name: "Pennsylvania Quilt Extravaganza",
	cords: {
		lat: 40.1238039,
		lng: -75.460306
	}
}
];
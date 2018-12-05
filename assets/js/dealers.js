var dealers = [{
		name: 'Above and Beyond',
		address: '38 N Middletown Rd, Nanuet, NY 10954',
		phoneNumber: '845-623-4313'
	},

	{
		name: 'Ace Sewing and Vacuum',
		address: '2414 Portland Rd, Suite 1, Newberg, OR 97132',
		phoneNumber: '503-538-1122'
	},

	{
		name: 'Anderson Sewing Center',
		address: '151 Victoria St, Kamloops BC, V2C 1Z4',
		phoneNumber: '250-374-1154'
	},

	{
		name: 'Bearly Threaded Quilting',
		address: '44332 Sterling Highway, Suite 8, Soltdona, AK, 99669',
		phoneNumber: '907-631-8129'
	},

	{
		name: "Bob's Sewing and Vacuum",
		address: '3551 Hwy 528, NW Albequerque, NM 87114',
		phoneNumber: '505-897-9782'
	},

	{
		name: 'Electric Hospital',
		address: '988 S Broadway, Coos Bay, OR 97420',
		phoneNumber: '541-267-2241'
	},

	{
		name: 'Floyd & Lizzies',
		address: '2263 W. 7800 South, West Jordan, Ut 84088',
		phoneNumber: '801-255-4130'
	},

	{
		name: 'Oregon Quilt Woman',
		address: '880 Railroad Ave, Ontario OR 97914',
		phoneNumber: '541-881-1160'
	},

	{
		name: 'Pieced Together Studio',
		address: '205 W Main, Mesquite, TX 75149',
		phoneNumber: '972-270-0961'
	},

	{
		name: 'Prairie Quilts',
		address: '101 S Main, Hennessey, OK 73742',
		phoneNumber: '405-853-6801'
	},

	{
		name: 'Pumpkin Ridge Quilting',
		address: '118 W Main St, McArthur, OH 45651',
		phoneNumber: '740-596-2345'
	},

	{
		name: 'Quilt Patch',
		address: '2221 Jacksboro Pike # C4, LaFollette, TN 37766',
		phoneNumber: '423-562-4420'
	},

	{
		name: 'Rainbow Service',
		address: '2420 6th Ave S, Great Falls, MT 59405',
		phoneNumber: '406-453-4830'
	},

	{
		name: 'S&R Sewing & Vacuum Center',
		address: '723 Arcadia Circle, Huntsville, AL 35801',
		phoneNumber: '256-536-5696'
	},

];


var html = "<table class='table table-striped table-bordered table-hover'>";

for (var i = 0; i < dealers.length; i++) {
	html += "<tr>";
	html += "<td class='dealer-name'>" + dealers[i].name + "</td>";
	html += "<td class='dealer-address'>" + dealers[i].address + "</td>";
	html += "<td class='dealer-phoneNumber'>" + dealers[i].phoneNumber + "</td>";
	html += "</tr>";
}

html += "</table>";
document.getElementById("dealer-table").innerHTML = html;

// var info = "<div class='container col-md-7 col-sm-7 col-lg-7' id='dealer-table'>  <table class ='table table-striped table-bordered table-hover'> <tr> <th class='text-center'>Name</th> <th class='text-center'>Address</th> <th class='text-center'>Phone Number</th> </tr> </div>";

// for (var i = 0; i < dealers.length; i++) {
// 	info += "<tr><td class='dealer-name'>" + dealers[i].name + "</td><td>" + dealers[i].address + "</td><td>" + dealers[i].phoneNumber + "</td></tr>";
// }

// info += "</table>";

// document.write(info);

var dealerscord = [{
		name: "Above and Beyond",
		cords: {
			lat: 41.0996676,
			lng: -74.0127113
		}
	},

	{
		name: "Ace Sewing and Vacuum",
		cords: {
			lat: 45.3030876,
			lng: -122.9582768
		}
	},

	{
		name: "Anderson Sewing Center",
		cords: {
			lat: 50.675931,
			lng: -120.3396706
		}
	},
	{
		name: "Bearly Threaded Quilting",
		cords: {
			lat: 60.4843483,
			lng: -151.0721138
		}

	}, {
		name: "Bob's Sewing and Vacuum",
		cords: {
			lat: 35.2073876,
			lng: -106.6517018
		}
	},

	{
		name: "Electric Hospital",
		cords: {
			lat: 43.3582576,
			lng: -124.2151345
		}
	},

	{
		name: "Floyd & Lizzies",
		cords: {
			lat: 40.6089684,
			lng: -111.9518761
		}
	},

	{
		name: "Oregon Quilt Woman",
		cords: {
			lat: 44.001451,
			lng: -117.0830477
		}
	},

	{
		name: "Pieced Together Studio",
		cords: {
			lat: 32.767008,
			lng: -96.6026727
		}
	},

	{
		name: "Prairie Quilts",
		cords: {
			lat: 36.109296,
			lng: -97.9007437
		}
	},

	{
		name: "Pumpkin Ridge Quilting",
		cords: {
			lat: 39.2463344,
			lng: -82.4820741
		}
	},

	{
		name: "Quilt Patch",
		cords: {
			lat: 36.3470438,
			lng: -84.161348
		}
	},

	{
		name: "Rainbow Service",
		cords: {
			lat: 47.498208,
			lng: -111.2669607
		}
	},

	{
		name: "S&R Sewing & Vacuum Center",
		cords: {
			lat: 34.7469759,
			lng: -86.6011365
		}
	}

];
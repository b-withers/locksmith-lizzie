var dealers = [{
		name: 'Above and Beyond',
		address: '38 N Middletown Rd Nanuet NY 10954',
		phoneNumber: '1-845-623-4313'
	},

	{
		name: 'Ace Sewing and Vacuum',
		address: '2414 Portland Rd Suite 1 Newberg, OR 97132',
		phoneNumber: '1-503-538-1122'
	},

	{
		name: 'Anderson Sewing Center',
		address: '151 Victoria St Kamloops BC V2C 1Z4',
		phoneNumber: '1-250-374-1154'
	},

	{
		name: 'Bearly Thread Quilting',
		address: '47027 Belmont Court Kenai AK 99611',
		phoneNumber: '1-907-631-8129'
	},

	{
		name: "Bob's Sewing and Vacuum",
		address: '3551 Hwy 528 NW Albequerque, NM 87114',
		phoneNumber: '1-505-897-9782'
	},

	{
		name: 'Electric Hospital',
		address: '988 S Broadway Coos Bay, OR 97420',
		phoneNumber: '1-541-267-2241'
	},

	{
		name: 'Orgeon Quilt Woman',
		address: '880 Railroad Ave Ontario OR 97914',
		phoneNumber: '1-541-881-1160'
	},

	{
		name: 'Pieced Together Studio',
		address: '205 W Main Mesquite, TX 75149',
		phoneNumber: '1-972-270-0961'
	}
];

var info = "<div class='container col-md-7 col-sm-7 col-lg-7'> <h1 class='text-center'>LockSmith Lizzie Dealers</h1> <table class ='table table-striped table-bordered table-hover'> <tr> <th class='text-center'>Name</th> <th class='text-center'>Address</th> <th class='text-center'>Phone Number</th> </tr> </div>";

for (var i = 0; i < dealers.length; i++) {
	info += "<tr><td>" + dealers[i].name + "</td><td>" + dealers[i].address + "</td><td>" + dealers[i].phoneNumber + "</td></tr>";
}

info += "</table>";

document.write(info);



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
			lat: 60.516219,
			lng: -151.1472738
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

];
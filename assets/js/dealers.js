var dealers = [{
		name: 'Above and Beyond',
		address: '38 N Middletown Rd Nanuet, NY 10954',
		phoneNumber: '1-845-623-4313'
	},

	{
		name: 'Ace Sewing and Vacuum',
		address: '2414 Portland Rd Suite 1 Newberg, OR 97132',
		phoneNumber: '1-503-538-1122'
	},

	{
		name: 'sewing company',
		address: 'sewing company lane',
		phoneNumber: '1800-523-1235'
	},

	{
		name: 'sewing company',
		address: 'sewing company lane',
		phoneNumber: '1800-523-1235'
	},

	{
		name: 'sewing company',
		address: 'sewing company lane',
		phoneNumber: '1800-523-1235'
	},

	{
		name: 'sewing company',
		address: 'sewing company lane',
		phoneNumber: '1800-523-1235'
	}
];

var info = "<div class='container col-md-7 col-sm-7 col-lg-7'> <h2 class='text-center'>LockSmith Lizzie Dealers</h2> <table class ='table table-striped table-bordered table-hover'> <tr> <th class='text-center'>Name</th> <th class='text-center'>Address</th> <th class='text-center'>Phone Number</th> </tr> </div>"



for (var i = 0; i < dealers.length; i++) {
	info += "<tr><td>" + dealers[i].name + "</td><td>" + dealers[i].address + "</td><td>" + dealers[i].phoneNumber + "</td></tr>"
}

info += "</table>";

document.write(info);
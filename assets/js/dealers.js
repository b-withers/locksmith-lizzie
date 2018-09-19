var dealers = [
{name: 'sewing company', 
address: 'sewing company lane',
phoneNumber: '1800-523-1235'},

{name: 'sewing company', 
address: 'sewing company lane',
phoneNumber: '1800-523-1235'},

{name: 'sewing company', 
address: 'sewing company lane',
phoneNumber: '1800-523-1235'},

{name: 'sewing company', 
address: 'sewing company lane',
phoneNumber: '1800-523-1235'},

{name: 'sewing company', 
address: 'sewing company lane',
phoneNumber: '1800-523-1235'},

{name: 'sewing company', 
address: 'sewing company lane',
phoneNumber: '1800-523-1235'}
];
	
var text = "<div class='container col-md-7 col-sm-7 col-lg-7'><h2 class='text-center'>LockSmith Lizzie Dealers</h2><table class ='table table-striped table-bordered table-hover'><tr><th>Name</th><th>Address</th><th>Phone Number</th></tr></div>"



for (var i=0;i<dealers.length;i++){
 text+="<tr><td>"+dealers[i].name+"</td><td>"+dealers[i].address+"</td><td>"+dealers[i].phoneNumber+"</td></tr>"				
}
text+="</table>";
document.write(text);
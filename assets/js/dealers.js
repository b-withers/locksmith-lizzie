$(document).ready(function () {
	$.getJSON("../assets/data/dealers.json", function (data) {
			//I can see all the individual arrays within the JSON file.
			console.log(data.name);
			console.log(data.address);
			console.log(data.phone_number);
			//showing basic data from JSON file is working.
			var applicant_data = '';
			//.each loop over the data from data.json
			$.each(data.applicants, function (key, value) {
					applicant_data += '<tr>';
					applicant_data += '<td>' + value.name + '</td>';
					applicant_data += '<td>' + value.address + '</td>';
					applicant_data += '<td>' + value.phone_nubmer + '</td>';
					applicant_data += '</tr>';
			});
			$('#applicant_table').append(applicant_data);
			//WORKING ON JOINING / SORTING / MERGING DATA FIELDS??
	});
});
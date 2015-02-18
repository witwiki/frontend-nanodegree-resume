//var awesomeThoughts = "I am witwiki and I am AWESOME!";
//console.log(awesomeThoughts);

//var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
//$("#main").append(funThoughts);

var name = "Vikram Udyawer";
var role = "Engineer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);	// want a name to appear first
$("#header").prepend(formattedName);	// thats why we use .prepend()


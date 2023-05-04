
 		
function readClicked(){
          $.ajax({
            url: "/read",
            type: "GET",
            data: {},
            success: function(data){
                if (data.error)
                  alert("bad");
                else {
                  console.log(data.ident + " " + data.gradeLevel);
                  $("#identifier").val(data.ident);
                  $("#gradeLevel").val(data.gradeLevel);

                }
              } ,     
            dataType: "json"
          });   
  return false;
}
function updateClicked(){
          $.ajax({
            url: "/update",
            type: "PUT",
            data: {identifier:$("#identifier").val(),
            gradeLevel:$("#gradeLevel").val()           
            },
            success: function(data){
                if (data.error)
                  alert("bad");
                else
                  alert("good");
              } ,     
            dataType: "json"
          });   
  return false;
}
/*
function deleteClicked(){

    let trimIdentifier = $("#identifier").val().trim();
    if (trimIdentifier == "") {
      alert("bad");
      return false; 
    }

    $.ajax({
      url: "/delete/" + $("#identifier").val(),
      type: "DELETE",
      success: function(data) { 
        if (data.error)
          alert("bad");
        else
          alert("good");
      } ,   
      dataType: "json"
    });  
    return false;             
}      
*/

function logoutClicked(){
console.log("session logoutClicked")
  $.get("/logout",function(data){
console.log("session logout function callback");    
    window.location = data.redirect;
  });
  return false;             
}

$(document).ready(function(){ 
console.log("session doc ready")
	$.get("/userInfo",function(data){
console.log("session get userInfo function callback");		

		if (data.username)
      $("#session").html("Session " + data.username);
      $("#identifier").val(data.ident);
      $("#gradeLevel").val(data.gradeLevel);
	});


  $("#readButton").click(readClicked);
  $("#updateButton").click(updateClicked);
//  $("#deleteButton").click(deleteClicked);

	$("#logout").click(logoutClicked);

});  		
    



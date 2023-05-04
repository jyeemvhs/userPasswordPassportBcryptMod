

/*
function createClicked(){
          $.ajax({
            url: "/create",
            type: "POST",
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
*/
 		
function readClicked(){
        console.log($("#username").val());

          $.ajax({
            url: "/readAdmin",
            type: "GET",
            data: {username:$("#username").val()},
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
            url: "/updateAdmin",
            type: "PUT",
            data: {username:$("#username").val(),
            identifier:$("#identifier").val(),
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
	$.get("/adminInfo",function(data){
console.log("session get adminInfo function callback");		

        for (let i=0;i<data.userList.length;i++) {
          console.log(data.userList[i].name);
          $('#username').append($('<option>', { value : data.userList[i].name }).text(data.userList[i].name));
        }

	});

  $("#readButton").click(readClicked);
  $("#updateButton").click(updateClicked);
//  $("#deleteButton").click(deleteClicked);

	$("#logout").click(logoutClicked);

});  		
    



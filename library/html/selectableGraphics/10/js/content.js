$(document).ready(function() {
    $("#content1").find("[id^='tab']").hide(); 
    $("#tabs li:first").attr("id","current"); 
    $("#inner_bg #tab1").fadeIn(); 
    
    $('#tabs a').click(function(e) {
        if ($(this).closest("li").attr("id") == "current"){ 
         return;       
        }
        else{             
          $("#content1").find("[id^='tab']").hide(); 
          $("#tabs li").attr("id",""); 
          $(this).parent().attr("id","current"); 
          $('#' + $(this).attr('name')).fadeIn(); 
        }
    });
});
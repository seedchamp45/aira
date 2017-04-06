 
$(function(){
 var idOld="";
// hide bg
 if(idOld == ""){
    $(".page").hide();
 }
    // chang menu bar
   $("a").click(function() {
        var name = this.name;
        var cls = this.className;
         
        //remove class
        $("#"+ idOld +'_txt').removeClass('menu_action');
         $("#"+ idOld +'_img').attr("src",'images/menu/'+ idOld +".png");
        
         //add class
        idOld = this.id;
       
        $("#"+ idOld +'_img').attr("src",'images/menu/'+ idOld +"_action.png");
        $("#"+ idOld +'_txt').addClass('menu_action');
        load_page();
    });
    
    function load_page(){
        $(".page").show();
       
        $("#content_page").load("aira_network.html", function(responseTxt, statusTxt, jqXHR){
                if(statusTxt == "success"){
                    //alert("success!");
                }
                if(statusTxt == "error"){
                   // alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
                }
        });
    }
});





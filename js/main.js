 
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
        //alert("name1 "+idOld)
        load_page();
    });
    
    function load_page(){
        $(".page").show();
        //alert("xxxx");
        $('.carousel').carousel('pause');
        $("#content_page").load(idOld+".html", function(responseTxt, statusTxt, jqXHR){
                if(statusTxt == "success"){
                   $('#carousel_bar').hide();
                    //alert("success!");
                }
                if(statusTxt == "error"){
                  alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
                }
        });
    }
    
    
});





/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$( function() {
     $( "#tabs" ).tabs();
     var idOld="";
      if(idOld == ""){
          idOld = "m_data_1";
           $("#txt_"+ idOld).addClass("menu_title_action");
      }
        $( "#tabs" ).tabs();
          $("a").click(function() {
             if(this.id != "myBtn"){    
                $("#txt_"+ idOld ).removeClass('menu_title_action');
                idOld = this.id;
                $("#txt_"+ idOld).addClass("menu_title_action");
            }else{
                $("#myBtn").click(function(){
                    $("#myModal").modal();
                });
                
            }
          });
  } );
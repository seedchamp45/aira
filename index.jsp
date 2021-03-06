<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <title>AIRA</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <!-- Bootstrap CSS 
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
        --> <link rel="stylesheet" href="css/bootstrap.min.css">
        <!-- CSS -->
        <link href="css/font.css" rel="stylesheet">
     
        <!--stylesheet-->
         <link rel="stylesheet" type="text/css" media="(min-width: 768px) and (max-width: 996px)" href="css/min_768-max_996px.css" />
        <link rel="stylesheet" type="text/css" media="(min-width: 997px) and (max-width: 1199px)" href="css/min_997-max_1199px.css" />
        <link rel="stylesheet" type="text/css" media="(min-width: 1200px)" href="css/min_1200-max_1399px.css" />
        <link rel="stylesheet" type="text/css" media="(min-width: 1400px)" href="css/min_1400px.css" />
        <link rel="stylesheet" type="text/css" media="(min-width: 1900px)" href="css/min_1900px.css" />
        <link href="css/main.css" rel="stylesheet">
        
        <!-- 
        <script src="js/jquery.min.js"></script>
        <script src="js/jquery-ui.js"></script>
        <script src="js/tether.min.js"></script>-->
        
       <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
        <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
        <script src="https://npmcdn.com/tether@1.2.4/dist/js/tether.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/main.js"></script>
        
    	<!-- The Boutique CSS: -->
        <link rel="stylesheet" href="css/boutique.css">

        <!-- The Boutique plugin: -->
        <script src="js/jquery.boutique.min.js"></script>

        <script>
            // Calling Boutique on your HTML element when the document is ready:
            $(document).ready(function(){
                $("#detail_1").show();
                $("#detail_2").hide();
                $("#detail_3").hide();
                $('#boutique').boutique({
                    container_width: 'auto',
                    front_img_width: 500,
                    autoplay:false,
                    frames:3
                });
            });
        </script>
        <!--<script src="js/init_page.js"></script>-->
    </head>
    <body>
        <!-- jQuery first, then Tether, then Bootstrap JS.
        <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
        
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
        --> 
      
        <!--carousel-->
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators" id="carousel_bar">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            </ol>
            <div class="carousel-inner" role="listbox">
                <div class="carousel-item active" id="carousel_1">
                    <img class="d-block img-fluid bg_captions" id="carousel_img_1" src="images/index/bg_1.jpg">
                </div>
                <div class="carousel-item" id="carousel_2">
                    <img class="d-block img-fluid bg_captions" id="carousel_img_2" src="images/index/bg_2.jpg">
                </div>
                <div class="carousel-item" id="carousel_3">
                    <img class="d-block img-fluid bg_captions" id="carousel_img_3" src="images/index/bg_3.jpg">
                </div>
                <div class="carousel-item" id="carousel_4">
                    <img class="d-block img-fluid bg_captions" id="carousel_img_4" src="images/index/bg_4.jpg">
                </div>
            </div>
        </div>
            
        <div class="bg_body">
            <div class="navbar navbar-toggleable-md navbar-inverse bar-top bg-inverse bg-faded">
                <div class="logo">
                    <a href="index.jsp" class="navbar-brand ">
                        <img src="images/logo.png" class="img-fluid"/>
                    </a>
                </div>
               
             <ul class="navbar-nav bar_full ui_bar w-100 justify-content-around">
                    <li class="nav-item  d-flex align-items-center justify-content-around">
                       <!-- <div class="mx-auto">-->
                            <a href="#" id="aira_network" class="menu_bar_top">
                                <div class="menu_right">
                                    <div class="m_left_txt font"  id="aira_network_txt" data-translate="_m_b1">บริษัทใน<br>เครือไฮร่า</div> 
                                </div>
                                <div class="icon_menu img_width">
                                    <img src="images/menu/aira_network.png" class="img-fluid img_res" id="aira_network_img"/>
                                </div>
                            </a>
                        <!--</div>-->
                    </li>
                    <li class="nav-item  d-flex align-items-center" >
                       <!-- <div class="mx-auto">-->
                            <a href="#" id="aira_data">
                                <div class="menu_right" class="menu_bar_top">
                                    <div class="m_left_txt font" id="aira_data_txt" data-translate="_m_b2">ข้อมูล<br>บริษัท</div> 
                                </div>
                                 <div class="icon_menu img_width" >
                                    <img src="images/menu/aira_data.png" class="img-fluid img_res" id="aira_data_img"/>
                                </div>
                            </a>
                       <!-- </div>-->
                    </li>
                    <li class="nav-item   d-flex align-items-center"  >
                       <!-- <div class="mx-auto">-->
                            <a href="#" id="business_service" class="menu_bar_top">
                                <div class="menu_right">
                                    <div class="m_left_txt font" id="business_service_txt" data-translate="_m_b3">ข้อมูลธุรกิจ/<br>บริการ</div> 
                                </div>
                                <div class="icon_menu img_width">
                                     <img src="images/menu/business_service.png" class="img-fluid img_res" id="business_service_img"/>
                                </div>
                            </a>
                        <!--</div>-->
                    </li>
                    <li class="nav-item  d-flex align-items-center"  >
                        <!--<div class="mx-auto1">-->
                            <a href="#" id="investor_relation" class="menu_bar_top">
                                <div class="menu_right" >
                                    <div class="m_left_txt font" id="investor_relation_txt" data-translate="_m_b4">นักลงทุน<br>สัมพันธ์</div> 
                                     
                                </div>
                                <div class="icon_menu img_width">
                                    <img src="images/menu/investor_relation.png" class="img-fluid img_res" id="investor_relation_img"/>
                                </div>
                            </a>
                        <!--</div>-->
                    </li>
                    <li class="nav-item  d-flex align-items-center" >
                       <!-- <div class="mx-auto">-->
                            <a href="#" id="news_activity" class="menu_bar_top">
                                <div class="menu_right">
                                    <div class="m_left_txt2 font" id="news_activity_txt" data-translate="_m_b5">ข่าวสาร<br>กิจกรรม</div> 
                                </div>
                                <div class="icon_menu img_width">
                                    <img src="images/menu/news_activity.png" class="img-fluid img_res" id="news_activity_img"/>
                                </div>
                            </a>
                        <!--</div>-->
                    </li>
                     <li class="nav-item  d-flex align-items-center" >
                       <!-- <div class="mx-auto">-->
                            <a href="#" id="corporate_governance" class="menu_bar_top">
                                <div class="menu_right" >
                                    <div class="m_left_txt font" id="corporate_governance_txt" data-translate="_m_b6">การกำกับ<br>ดูแลกิจกรรม</div> 
                                </div>
                                <div class="icon_menu img_width">
                                     <img src="images/menu/corporate_governance.png" class="img-fluid img_res" id="corporate_governance_img"/>
                                </div>
                            </a>
                       <!-- </div>-->
                    </li>
                     <li class="nav-item  d-flex align-items-center"  >
                       <!-- <div class="mx-auto">-->
                            <a href="#" id="corporate_social_responsibility" class="menu_bar_top">
                                <div class="menu_right"  >
                                    <div class="m_left_txt font" id="corporate_social_responsibility_txt" data-translate="_m_b7">ความรับผิดชอบ<br>ต่อสังคม</div> 
                                </div>
                                <div class="icon_menu img_width">
                                    <img src="images/menu/corporate_social_responsibility.png" class="img-fluid img_res" id="corporate_social_responsibility_img"/>
                                </div>
                            </a>
                        <!--</div>-->
                    </li>
                </ul>  
                
                <div class="setting_bar my-2 my-lg-0" style="float: right;">
                    
                    <ul class="setting" style="margin-top: 0px;padding-left: 1em;">
                         <li>
                             <a href="#"  id="th"><div class ="bu_social icon_th menu_bar_top" id="th_img"></div> </a>

                         <li>
                             <a href="#"  id="en"><div class ="bu_social icon_en menu_bar_top" id="en_img"></div></a>
                         </li>
                         <li>
                             <a href="#"  id="jp"><div class ="bu_social icon_jp menu_bar_top" id="jp_img"></div></a>
                         </li>
                     </ul>
                     <div class="clearfix"></div>
                     <ul class="setting" style="margin-top: 0px;padding-left: 1em;" >
                         <li>
                             <a href="#" id="facebook" target="_blank"> <div class ="bu_social icon_facebook"></div></a>
                         </li>
                         <li>
                             <a href="#" id="youtub" target="_blank"> <div class ="bu_social icon_youtub"></div></a>
                         </li>
                         <li>
                             <a href="#" id="twitter" target="_blank"><div class ="bu_social icon_twitter"></div></a>
                         </li>
                         <li>
                             <a href="#" id="google" target="_blank"><div class ="bu_social icon_google"></div></a>
                         </li>
                     </ul>
                </div>
            </div>
            
            <div class="content-fluid">
                <div class="col-md-12 col-lg-12">
                    <div class="page">
                        
                    </div>    
                    <div id="content_page"></div>
                </div>
                    
            </div>
                   
        </div>
       
    
    </body>
</html>

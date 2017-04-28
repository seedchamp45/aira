 
$(function(){
    var url_facebook = "https://www.facebook.com/airasec";
    var url_youtube = "https://www.youtube.com/channel/UClcq7jhMDEQ7iDCb2g_F2Fw";
    var url_twitter = "https://twitter.com/airaplc";
    var url_google_plus = "https://plus.google.com/+AIRAPLCNo48";
    var img_map = "images/data/map";
    var url_map = "https://www.google.co.th/maps/"; 
    var img_board="images/data/board";
    var img_flow="images/data/data_flow";
    /*set url*/
    $("#facebook").attr("href",url_facebook);
    $("#youtub").attr("href",url_youtube);
    $("#twitter").attr("href",url_twitter);
    $("#google").attr("href",url_google_plus);
    
    /*set url*/
    dictionary = {
        "th": {
            "_m_b1": "บริษัทใน<br>เครือไฮร่า",
            "_m_b2": "ข้อมูล<br>บริษัท",
            "_m_b3": "ข้อมูลธุรกิจ/<br>บริการ",
            "_m_b4": "นักลงทุน<br>สัมพันธ์",
            "_m_b5": "ข่าวสาร<br>กิจกรรม",
            "_m_b6": "การกำกับ<br>ดูแลกิจกรรม",
            "_m_b7": "ความรับผิดชอบ<br>ต่อสังคม",
            
            "a_n_title": "บริษัทในเครือไอร่า",
            "a_n_1": "บริษัท ไอร่า แคปปิตอล จำกัด<br>( มหาชน )",
            "a_n_2": "บริษัท หลักทรัพย์ ไอร่า จำกัด<br>( มหาชน )",
            "a_n_3": "บริษัท ไอร่า แฟคเตอริ่ง จำกัด<br>( มหาชน )",
            "a_n_4": "AIRA International Advisory<br>( Singapore ) Pte.Ltd.",
            "a_n_5": "บริษัท ไอร่า แอนด์ ไอฟุล จำกัด<br>( มหาชน )",
            "a_n_6": "บริษัท ไอร่า พร็อพเพอร์ตี้ จำกัด<br>( มหาชน )",
            "a_n_7": "บริษัท ไอร่า ลีสซิ่ง จำกัด<br>( มหาชน )",
            "a_n_8": "บริษัท ไอร่า เวนเจอร์ แคปปิตอล<br>ทราเวลเล็กซ์ (ไทยแลนด์) จำกัด ",
            "a_n_9": "บริษัท ไอร่า แอดไวเซอรี่ จำกัด",
            "a_n_10": "บริษัท แอสไพเรชั่น วัน จำกัด",
            
            "c_g_m1": "นโยบายของบริษัท",
            "c_g_m2": "รายงานการกำกับดูแลกิจการที่ดี",
            "c_g_m1_t1": "จรรยาบรรณทางธุรกิจ (ฉบับทบทวน ปี 2559)",
            "c_g_m1_t2": "นโยบายการกำกับดูแลกิจการ (ฉบับทบทวน ปี 2559)",
            "c_g_m2_t3": "นโยบายการแจ้งเบาะแสหรือข้อร้องเรียน",
            "c_g_m2_t4": "นโยบายต่อต้านการทุจริตและคอร์รัปชั่น",
            
            "c_s_r_m_1":"นโยบายภาพรวม",
            "c_s_r_m_2":"ผลงาน",
            "c_s_r_tag1_t_1":"ความรับผิดชอบต่อสังคม",
            "c_s_r_tag1_t_2":"นโยบายภาพรวม",
            "c_s_r_tag1_t_3":"บริษัทฯ และบริษัทย่อย ตระหนักถึงความรับผิดชอบต่อสังคมและสิ่งแวดล้อม โดยได้มีการเข้าร่วมกิจกรรมเพื่อสังคม และสิ่งแวดล้อมอย่างต่อเนื่อง วัตถุประสงค์เพื่อเป็นส่วนหนึ่งในการช่วยเหลือ พัฒนาสังคมและอนุรักษ์สิ่งแวดล้อมให้ดีขึ้น โดยบริษัทฯ และบริษัทย่อยได้ให้ความสำคัญกับความรับผิดชอบต่อสังคมและสิ่งแวดล้อม",
            "c_s_r_tag2_t_1":"รายงานการกำกับดูแลกิจการที่ดี",
            "c_s_r_tag2_t_2":"รายงานการกำกับดูแลกิจการที่ดี",
        
            "i_r_m_1":"รายงานประจำปี",
            "i_r_m_2":"งบการเงิน",
            "i_r_m_3":"จรรยาบรรณนักลงทุนสัมพันธ์",
            "i_r_m_4":"รายการข้อมูลประจำปี",
            
            
           "i_r_tag1":"รายงานประจำปี",
           "i_r_tag1_t_1":"รายงานประจำปี",
           
           "i_r_tag2":"งบการเงิน",
           "i_r_tag2_t_1":"งบการเงิน",
           
           "i_r_tag3":"จรรยาบรรณนักลงทุนสัมพันธ์",
           "i_r_tag3_t_1":"จรรยาบรรณนักลงทุนสัมพันธ์",
           
           "i_r_tag4":"รายการข้อมูลประจำปี",
           "i_r_tag4_t_1":"รายการข้อมูลประจำปี",
           
             "n_a_m_1":"ข่าวสารบริษัท",
            "n_a_m_2":"กิจกรรม",
            "n_a_m_3":"ร่วมงานกับเครือไอร่า",
            
            "n_a_m_tag1":"ข่าวสารบริษัท",
            "n_a_m_tag2":"กิจกรรม",
            "n_a_m_tag3":"ร่วมงานกับเครือไอร่า",
            "n_a_m_tag1_t_1":"บริษัท ไอร่า แคปปิตอล จำกัด (มหาชน) ร่วมบริจาคในงานกาชาดคอนเสิร์ต ครั้งที่ 43 ประจำปี 2559  เนื่องในโอกาสมหามงคลเสด็จเถลิงถวัลยราชสมบัติครบ 70 ปี และเฉลิมพระเกียรติสมเด็จพระนางเจ้าฯ พระบรมราชินีนาถ เนื่องในโอกาส มหามงคลเฉลิมพระชนมพรรษา 7 รอบ รายได้โดยเสด็จพระราชกุศลบำรุงสภากาชาดไทย",
            "n_a_m_tag2_t_1":"ตัวแทนคณะผู้บริหาร บริษัท ไอร่า แคปปิตอล จำกัด (มหาชน) และบริษัทในเครือร่วมกันจัดโครงการช่วยเหลือสังคม เพื่อเป็นส่วนหนึ่งของการพัฒนาสังคม และสิ่งแวดล้อมสู่การพัฒนาอย่างยั่งยืน ตามแนวคิดด้าน CSR ของตลาดหลักทรัพย์ แห่งประเทศไทย โดยในปีนี้ บริษัทได้จัด “โครงการไอร่าเพื่อสังคม สู่การพัฒนาอย่างยั่งยืน” เป็นปีที่ 2 ขึ้นที่โรงเรียนปากคลองชวดใหญ่ อ.บางบ่อ จ.สมุทรปราการ โดยได้มอบทุนการศึกษาหนังสืออุปกรณ์การเรียนและอุปกรณ์กีฬาให้กับโรงเรียนที่ห่างไกล เมื่อวันที่ 15 กรกฎาคม 2559",
            "n_a_m_tag3_t_1":"333",
            
            "a_d_m_1":"วิสัยทัศน์",
            "a_d_m_2":"ประวัติบริษัท",
            "a_d_m_3":"แผนผังองค์กร",
            "a_d_m_4":"โครงสร้างคณะกรรมการ",
            "a_d_m_5":"ติดต่อเรา",
            
            "a_d_tag1":"วิสัยทัศน์ / พันธกิจ",
            "a_d_tag2":"ประวัติบริษัท",
            "a_d_tag3":"แผนผังองค์กร",
            "a_d_tag4":"โครงสร้างคณะกรรมการ",
            "a_d_tag5":"ติดต่อบริษัท",
            
            "a_d_tag1_txt_1":"บริษัท ไอร่า แคปปิตอล จำกัด (มหาชน) มุ่งมั่นที่จะเป็นบริษัทชั้นนำของกลุ่มบริษัทด้านการเงิน มีเครือข่ายกับบริษัทระหว่างประเทศที่ให้บริการเกี่ยวกับสินค้าด้านการเงิน จุดแข็ง จะให้ความสำคัญในการให้บริการที่มีคุณภาพ มีคุณธรรมจริยธรรม และสร้างผลตอบแทนที่ดีให้แก่ผู้ถือหุ้น ตลอดจนการดูแลเอาใจใส่สวัสดิการของพนักงานบริษัท ไอร่า แคปปิตอล จำกัด (มหาชน) มุ่งมั่นที่จะเป็นบริษัทชั้นนำของกลุ่มบริษัทด้านการเงิน มีเครือข่ายกับบริษัทระหว่างประเทศที่ให้บริการเกี่ยวกับสินค้าด้านการเงิน",
            "a_d_tag1_txt_2":"จุดแข็ง จะให้ความสำคัญในการให้บริการที่มีคุณภาพ มีคุณธรรมจริยธรรม และสร้างผลตอบแทนที่ดีให้แก่ผู้ถือหุ้น ตลอดจนการดูแลเอาใจใส่สวัสดิการของพนักงาน",
            "a_d_tag2_txt_1":"ต.ค. ก่อตั้งบริษัท แอสไพเรชั่น วัน จำกัด และถือหุ้น 60% ทุนจดทะเบียน  1 พันล้านบาท",
            "a_d_tag2_txt_2":"ก.ค. ก่อตั้งบริษัท ไอร่า พร๊อพเพอร์ตี้ จำกัด ทุนจดทะเบียน 200 ล้านบาท",
            "a_d_tag2_txt_3":"ธ.ค. ก่อตั้งบริษัท ไอร่า แอนด์ ไอฟุล จำกัด (มหาชน) ด้วยการเข้าถือหุ้น 30%  ด้วยทุนจดทะเบียน 1 พันล้านบาท",
            "a_d_tag2_txt_4":"ก.ค. บริษัท ไอร่า แคปปิตอล จำกัด (มหาชน) เข้าจดทะเบียนในตลาดหลักทรัพย์ เอ็ม เอ ไอ",
            "a_d_tag2_txt_5":"ธ.ค. ก่อตั้งบริษัท ไอร่า แอนด์ ไอฟุล จำกัด (มหาชน) ด้วยการเข้าถือหุ้น 30%  ด้วยทุนจดทะเบียน 1 พันล้านบาท",
            "a_d_tag2_txt_6":"ก.ค. บริษัท ไอร่า แคปปิตอล จำกัด (มหาชน) เข้าจดทะเบียนในตลาดหลักทรัพย์ เอ็ม เอ ไอ",
            "a_d_tag2_txt_7":"มี.ค. เพิ่มทุนจดทะเบียนที่ชำระแล้วของ บริษัท ไอร่า แคปปิตอล จำกัด (มหาชน) เป็น 1,000 ล้านบาท",
            "a_d_tag2_txt_8":"ต.ค. จัดตั้ง AIRA International Advisory (Singapore) PTE.LTD. บริษัทที่ปรึกษาทางการเงิน แห่งใหม่ ณ ประเทศสิงคโปร์",
            "a_d_tag2_txt_9":"ก.ย. แปลงสภาพ บริษัท ไอร่า แคปปิตอล จำกัด เป็นบริษัทมหาชน",
            "a_d_tag2_txt_10":'มี.ค. เข้าลงทุนใน บริษัทแฟคตอริ่งซึ่งจดทะเบียนในตลาด เอ็ม เอ ไอ และเปลี่ยนชื่อ เป็น "บริษัท ไอร่า แฟคตอริ่ง จำกัด (มหาชน)"',
            "a_d_tag2_txt_11":"ม.ค. เพิ่มทุนจดทะเบียนชำระแล้ว บริษัท ไอร่า แคปปิตอล จำกัด เป็น 779.18 ล้านบาท",
            "a_d_tag2_txt_12":"ก.พ. ก่อตั้งบริษัท ไอร่า แคปปิตอล จำกัด ด้วยทุนจดทะเบียน 623.36 ล้านบาท และเข้าถือหุ้น บริษัทหลักทรัพย์ ไอร่า จำกัด (มหาชน) 100%",
            "a_d_tag2_txt_13":"มี.ค. รวมบริษัทที่ปรึกษาทางการเงินในเครือ 3 แห่งเข้าด้วยกันและเพิ่มทุนจดทะเบียน จาก 20 ล้านบาทเป็น 30 ล้านบาท โดยเปลี่ยนชื่อเป็น บริษัท ไอร่า แอดไวเซอรี่ จำกัด",
            "a_d_tag2_txt_14":"มิ.ย. เพิ่มทุนจดทะเบียน บริษัทหลักทรัพย์ ไอร่า จำกัด (มหาชน) เป็น 720 ล้านบาท",
            "a_d_tag2_txt_15":"เม.ย. เพิ่มทุนที่ชำระแล้ว บริษัทหลักทรัพย์ ไอร่า จำกัด (มหาชน) เป็น 600 ล้านบาท",
            "a_d_tag2_txt_16":"ธ.ค. แปลงสภาพ บริษัทหลักทรัพย์ ไอร่า จำกัดเป็นบริษัทมหาชน",
            "a_d_tag2_txt_17":"พ.ค. บริษัทหลักทรัพย์ ไอร่า จำกัด เพิ่มทุนจดทะเบียนเป็น 500 ล้านบาท",
            "a_d_tag2_txt_18":"พ.ย. ซื้อกิจการบริษัทหลักทรัพย์ หมายเลข 48 ของตลาดหลักทรัพย์แห่งประเทศไทย โดยได้เปลี่ยนโครงสร้างการบริหารจัดการ และเปลี่ยนชื่อใหม่เป็น บริษัทหลักทรัพย์ ไอร่า จำกัด",
            "a_d_tag5_txt_1":"บริษัท ไอร่า แคปปิตอล จำกัด (มหาชน)",
            "a_d_tag5_txt_2":"319 อาคารจัตุรัสจามจุรี ชั้น12 <br> ถนนพญาไท  แขวงปทุมวัน เขตปทุมวัน กทม. 10330<br>โทรศัพท์ 02-684-8981 โทรสาร 02-684-8980"
        
        },
        "en": {
            "_m_b1": "Group<br>Companies",
            "_m_b2": "Company<br>Overview",
            "_m_b3": "Service<br>Information",
            "_m_b4": "Investor<br>Relations",
            "_m_b5": "News <br>and Event",
            "_m_b6": "Corporate <br>Governance",
            "_m_b7": "Corporate Social <br>Responsibility",
            
            "a_n_title": "บริษัทในเครือไอร่า en",
            "a_n_1": " ccc",
            "a_n_2": "บริษัท หลักทรัพย์ ไอร่า จำกัด<br>( มหาชน ) en",
            "a_n_3": "บริษัท ไอร่า แฟคเตอริ่ง จำกัด<br>( มหาชน ) en",
            "a_n_4": "AIRA International Advisory<br>( Singapore ) Pte.Ltd. en",
            "a_n_5": "บริษัท ไอร่า แอนด์ ไอฟุล จำกัด<br>( มหาชน ) en",
            "a_n_6": "บริษัท ไอร่า พร็อพเพอร์ตี้ จำกัด<br>( มหาชน ) en",
            "a_n_7": "บริษัท ไอร่า ลีสซิ่ง จำกัด<br>( มหาชน )en",
            "a_n_8": "บริษัท ไอร่า เวนเจอร์ แคปปิตอล<br>ทราเวลเล็กซ์ (ไทยแลนด์) จำกัด en",
            "a_n_9": "บริษัท ไอร่า แอดไวเซอรี่ จำกัด en",
            "a_n_10": "บริษัท แอสไพเรชั่น วัน จำกัด en",
            
            "c_g_m1": "นโยบายของบริษัท en",
            "c_g_m2": "รายงานการกำกับดูแลกิจการที่ดี en",
            "c_g_m1_t1": "จรรยาบรรณทางธุรกิจ (ฉบับทบทวน ปี 2559) en",
            "c_g_m1_t2": "นโยบายการกำกับดูแลกิจการ (ฉบับทบทวน ปี 2559) en",
            "c_g_m2_t3": "นโยบายการแจ้งเบาะแสหรือข้อร้องเรียน en",
            "c_g_m2_t4": "นโยบายต่อต้านการทุจริตและคอร์รัปชั่น en",
            
            "c_s_r_m_1":"นโยบายภาพรวม en",
            "c_s_r_m_2":"ผลงาน en",
            "c_s_r_tag1_t_1":"ความรับผิดชอบต่อสังคม en",
            "c_s_r_tag1_t_2":"นโยบายภาพรวม en",
            "c_s_r_tag1_t_3":"บริษัทฯ และบริษัทย่อย ตระหนักถึงความรับผิดชอบต่อสังคมและสิ่งแวดล้อม โดยได้มีการเข้าร่วมกิจกรรมเพื่อสังคม และสิ่งแวดล้อมอย่างต่อเนื่อง วัตถุประสงค์เพื่อเป็นส่วนหนึ่งในการช่วยเหลือ พัฒนาสังคมและอนุรักษ์สิ่งแวดล้อมให้ดีขึ้น โดยบริษัทฯ และบริษัทย่อยได้ให้ความสำคัญกับความรับผิดชอบต่อสังคมและสิ่งแวดล้อม en",
            "c_s_r_tag2_t_1":"รายงานการกำกับดูแลกิจการที่ดี en",
            "c_s_r_tag2_t_2":"รายงานการกำกับดูแลกิจการที่ดี  en",
        
            "i_r_m_1":"รายงานประจำปี en",
            "i_r_m_2":"งบการเงิน en",
            "i_r_m_3":"จรรยาบรรณนักลงทุนสัมพันธ์ en",
            "i_r_m_4":"รายการข้อมูลประจำปี en",
            
            
           "i_r_tag1":"รายงานประจำปี en",
           "i_r_tag1_t_1":"รายงานประจำปี en",
           
           "i_r_tag2":"งบการเงิน en",
           "i_r_tag2_t_1":"งบการเงิน en",
           
           "i_r_tag3":"จรรยาบรรณนักลงทุนสัมพันธ์ en",
           "i_r_tag3_t_1":"จรรยาบรรณนักลงทุนสัมพันธ์ en",
           
           "i_r_tag4":"รายการข้อมูลประจำปี en",
           "i_r_tag4_t_1":"รายการข้อมูลประจำปี en",
           
             "n_a_m_1":"ข่าวสารบริษัท en",
            "n_a_m_2":"กิจกรรม en",
            "n_a_m_3":"ร่วมงานกับเครือไอร่า en",
            
            "n_a_m_tag1":"ข่าวสารบริษัท en",
            "n_a_m_tag2":"กิจกรรม en",
            "n_a_m_tag3":"ร่วมงานกับเครือไอร่า en",
            "n_a_m_tag1_t_1":"บริษัท ไอร่า แคปปิตอล จำกัด (มหาชน) ร่วมบริจาคในงานกาชาดคอนเสิร์ต ครั้งที่ 43 ประจำปี 2559  เนื่องในโอกาสมหามงคลเสด็จเถลิงถวัลยราชสมบัติครบ 70 ปี และเฉลิมพระเกียรติสมเด็จพระนางเจ้าฯ พระบรมราชินีนาถ เนื่องในโอกาส มหามงคลเฉลิมพระชนมพรรษา 7 รอบ รายได้โดยเสด็จพระราชกุศลบำรุงสภากาชาดไทย en",
            "n_a_m_tag2_t_1":"ตัวแทนคณะผู้บริหาร บริษัท ไอร่า แคปปิตอล จำกัด (มหาชน) และบริษัทในเครือร่วมกันจัดโครงการช่วยเหลือสังคม เพื่อเป็นส่วนหนึ่งของการพัฒนาสังคม และสิ่งแวดล้อมสู่การพัฒนาอย่างยั่งยืน ตามแนวคิดด้าน CSR ของตลาดหลักทรัพย์ แห่งประเทศไทย โดยในปีนี้ บริษัทได้จัด “โครงการไอร่าเพื่อสังคม สู่การพัฒนาอย่างยั่งยืน” เป็นปีที่ 2 ขึ้นที่โรงเรียนปากคลองชวดใหญ่ อ.บางบ่อ จ.สมุทรปราการ โดยได้มอบทุนการศึกษาหนังสืออุปกรณ์การเรียนและอุปกรณ์กีฬาให้กับโรงเรียนที่ห่างไกล เมื่อวันที่ 15 กรกฎาคม 2559 en",
            "n_a_m_tag3_t_1":"333 en",
            
            "a_d_m_1":"วิสัยทัศน์ en",
            "a_d_m_2":"ประวัติบริษัท en",
            "a_d_m_3":"แผนผังองค์กร en",
            "a_d_m_4":"โครงสร้างคณะกรรมการ en",
            "a_d_m_5":"ติดต่อเรา  en",
            
            "a_d_tag1":"วิสัยทัศน์ / พันธกิจ en",
            "a_d_tag2":"ประวัติบริษัท en",
            "a_d_tag3":"แผนผังองค์กร en",
            "a_d_tag4":"โครงสร้างคณะกรรมการ en",
            "a_d_tag5":"ติดต่อบริษัท en",
            
            "a_d_tag1_txt_1":"บริษัท ไอร่า แคปปิตอล จำกัด (มหาชน) มุ่งมั่นที่จะเป็นบริษัทชั้นนำของกลุ่มบริษัทด้านการเงิน มีเครือข่ายกับบริษัทระหว่างประเทศที่ให้บริการเกี่ยวกับสินค้าด้านการเงิน จุดแข็ง จะให้ความสำคัญในการให้บริการที่มีคุณภาพ มีคุณธรรมจริยธรรม และสร้างผลตอบแทนที่ดีให้แก่ผู้ถือหุ้น ตลอดจนการดูแลเอาใจใส่สวัสดิการของพนักงานบริษัท ไอร่า แคปปิตอล จำกัด (มหาชน) มุ่งมั่นที่จะเป็นบริษัทชั้นนำของกลุ่มบริษัทด้านการเงิน มีเครือข่ายกับบริษัทระหว่างประเทศที่ให้บริการเกี่ยวกับสินค้าด้านการเงิน  en",
            "a_d_tag1_txt_2":"จุดแข็ง จะให้ความสำคัญในการให้บริการที่มีคุณภาพ มีคุณธรรมจริยธรรม และสร้างผลตอบแทนที่ดีให้แก่ผู้ถือหุ้น ตลอดจนการดูแลเอาใจใส่สวัสดิการของพนักงาน en",
            "a_d_tag2_txt_1":"ต.ค. ก่อตั้งบริษัท แอสไพเรชั่น วัน จำกัด และถือหุ้น 60% ทุนจดทะเบียน  1 พันล้านบาท en",
            "a_d_tag2_txt_2":"ก.ค. ก่อตั้งบริษัท ไอร่า พร๊อพเพอร์ตี้ จำกัด ทุนจดทะเบียน 200 ล้านบาท en",
            "a_d_tag2_txt_3":"ธ.ค. ก่อตั้งบริษัท ไอร่า แอนด์ ไอฟุล จำกัด (มหาชน) ด้วยการเข้าถือหุ้น 30%  ด้วยทุนจดทะเบียน 1 พันล้านบาท en",
            "a_d_tag2_txt_4":"ก.ค. บริษัท ไอร่า แคปปิตอล จำกัด (มหาชน) เข้าจดทะเบียนในตลาดหลักทรัพย์ เอ็ม เอ ไอ en",
            "a_d_tag2_txt_5":"ธ.ค. ก่อตั้งบริษัท ไอร่า แอนด์ ไอฟุล จำกัด (มหาชน) ด้วยการเข้าถือหุ้น 30%  ด้วยทุนจดทะเบียน 1 พันล้านบาท en",
            "a_d_tag2_txt_6":"ก.ค. บริษัท ไอร่า แคปปิตอล จำกัด (มหาชน) เข้าจดทะเบียนในตลาดหลักทรัพย์ เอ็ม เอ ไอ en",
            "a_d_tag2_txt_7":"มี.ค. เพิ่มทุนจดทะเบียนที่ชำระแล้วของ บริษัท ไอร่า แคปปิตอล จำกัด (มหาชน) เป็น 1,000 ล้านบาท en",
            "a_d_tag2_txt_8":"ต.ค. จัดตั้ง AIRA International Advisory (Singapore) PTE.LTD. บริษัทที่ปรึกษาทางการเงิน แห่งใหม่ ณ ประเทศสิงคโปร์ en",
            "a_d_tag2_txt_9":"ก.ย. แปลงสภาพ บริษัท ไอร่า แคปปิตอล จำกัด เป็นบริษัทมหาชน en",
            "a_d_tag2_txt_10":'มี.ค. เข้าลงทุนใน บริษัทแฟคตอริ่งซึ่งจดทะเบียนในตลาด เอ็ม เอ ไอ และเปลี่ยนชื่อ เป็น "บริษัท ไอร่า แฟคตอริ่ง จำกัด (มหาชน) en"',
            "a_d_tag2_txt_11":"ม.ค. เพิ่มทุนจดทะเบียนชำระแล้ว บริษัท ไอร่า แคปปิตอล จำกัด เป็น 779.18 ล้านบาท en",
            "a_d_tag2_txt_12":"ก.พ. ก่อตั้งบริษัท ไอร่า แคปปิตอล จำกัด ด้วยทุนจดทะเบียน 623.36 ล้านบาท และเข้าถือหุ้น บริษัทหลักทรัพย์ ไอร่า จำกัด (มหาชน) 100% en",
            "a_d_tag2_txt_13":"มี.ค. รวมบริษัทที่ปรึกษาทางการเงินในเครือ 3 แห่งเข้าด้วยกันและเพิ่มทุนจดทะเบียน จาก 20 ล้านบาทเป็น 30 ล้านบาท โดยเปลี่ยนชื่อเป็น บริษัท ไอร่า แอดไวเซอรี่ จำกัด en",
            "a_d_tag2_txt_14":"มิ.ย. เพิ่มทุนจดทะเบียน บริษัทหลักทรัพย์ ไอร่า จำกัด (มหาชน) เป็น 720 ล้านบาท en" ,
            "a_d_tag2_txt_15":"เม.ย. เพิ่มทุนที่ชำระแล้ว บริษัทหลักทรัพย์ ไอร่า จำกัด (มหาชน) เป็น 600 ล้านบาท en",
            "a_d_tag2_txt_16":"ธ.ค. แปลงสภาพ บริษัทหลักทรัพย์ ไอร่า จำกัดเป็นบริษัทมหาชน en",
            "a_d_tag2_txt_17":"พ.ค. บริษัทหลักทรัพย์ ไอร่า จำกัด เพิ่มทุนจดทะเบียนเป็น 500 ล้านบาท en",
            "a_d_tag2_txt_18":"พ.ย. ซื้อกิจการบริษัทหลักทรัพย์ หมายเลข 48 ของตลาดหลักทรัพย์แห่งประเทศไทย โดยได้เปลี่ยนโครงสร้างการบริหารจัดการ และเปลี่ยนชื่อใหม่เป็น บริษัทหลักทรัพย์ ไอร่า จำกัด en",
            "a_d_tag5_txt_1":"บริษัท ไอร่า แคปปิตอล จำกัด (มหาชน) en",
            "a_d_tag5_txt_2":"319 อาคารจัตุรัสจามจุรี ชั้น12 <br> ถนนพญาไท  แขวงปทุมวัน เขตปทุมวัน กทม. 10330<br>โทรศัพท์ 02-684-8981 โทรสาร 02-684-8980 en"
        },
        "jp": {
            "_m_b1": "<div class='txt_jp'>グループ会社</div>",
            "_m_b2": "<div class='txt_jp'>会社概要</div>",
            "_m_b3": "<div class='txt_jp'>サービス<br>インフォメーション</div>",
            "_m_b4": "<div class='txt_jp'>投資家向け広報<br>(IR)</div>",
            "_m_b5": "<div class='txt_jp'>ニュースとイベント</div>",
            "_m_b6": "<div class='txt_jp'>コーポレート<br>ガバナンス</div>",
            "_m_b7": "<div class='txt_jp'>企業の社会的責任<br>(CSR)</div>",
            
            "a_n_title": "บริษัทในเครือไอร่า js",
            "a_n_1": "บริษัท ไอร่า แคปปิตอล จำกัด<br>( มหาชน ) jp",
            "a_n_2": "บริษัท หลักทรัพย์ ไอร่า จำกัด<br>( มหาชน ) jp",
            "a_n_3": "บริษัท ไอร่า แฟคเตอริ่ง จำกัด<br>( มหาชน ) jp",
            "a_n_4": "AIRA International Advisory<br>( Singapore ) Pte.Ltd. jp",
            "a_n_5": "บริษัท ไอร่า แอนด์ ไอฟุล จำกัด<br>( มหาชน )jp",
            "a_n_6": "บริษัท ไอร่า พร็อพเพอร์ตี้ จำกัด<br>( มหาชน ) jp",
            "a_n_7": "บริษัท ไอร่า ลีสซิ่ง จำกัด<br>( มหาชน ) jp",
            "a_n_8": "บริษัท ไอร่า เวนเจอร์ แคปปิตอล<br>ทราเวลเล็กซ์ (ไทยแลนด์) จำกัด jp",
            "a_n_9": "บริษัท ไอร่า แอดไวเซอรี่ จำกัด jp",
            "a_n_10": "บริษัท แอสไพเรชั่น วัน จำกัด jp",
            
            
             "c_g_m1": "นโยบายของบริษัท jp",
            "c_g_m2": "รายงานการกำกับดูแลกิจการที่ดี jp",
            "c_g_m1_t1": "จรรยาบรรณทางธุรกิจ (ฉบับทบทวน ปี 2559) jp",
            "c_g_m1_t2": "นโยบายการกำกับดูแลกิจการ (ฉบับทบทวน ปี 2559) jp",
            "c_g_m2_t3": "นโยบายการแจ้งเบาะแสหรือข้อร้องเรียน  jp",
            "c_g_m2_t4": "นโยบายต่อต้านการทุจริตและคอร์รัปชั่น jp",
            
            "c_s_r_m_1":"นโยบายภาพรวม jp",
            "c_s_r_m_2":"ผลงาน jp",
            "c_s_r_tag1_t_1":"ความรับผิดชอบต่อสังคม jp",
            "c_s_r_tag1_t_2":"นโยบายภาพรวม jp",
            "c_s_r_tag1_t_3":"บริษัทฯ และบริษัทย่อย ตระหนักถึงความรับผิดชอบต่อสังคมและสิ่งแวดล้อม โดยได้มีการเข้าร่วมกิจกรรมเพื่อสังคม และสิ่งแวดล้อมอย่างต่อเนื่อง วัตถุประสงค์เพื่อเป็นส่วนหนึ่งในการช่วยเหลือ พัฒนาสังคมและอนุรักษ์สิ่งแวดล้อมให้ดีขึ้น โดยบริษัทฯ และบริษัทย่อยได้ให้ความสำคัญกับความรับผิดชอบต่อสังคมและสิ่งแวดล้อม jp",
            "c_s_r_tag2_t_1":"รายงานการกำกับดูแลกิจการที่ดี jp",
            "c_s_r_tag2_t_2":"รายงานการกำกับดูแลกิจการที่ดี jp",
        
            "i_r_m_1":"รายงานประจำปี jp",
            "i_r_m_2":"งบการเงิน jp",
            "i_r_m_3":"จรรยาบรรณนักลงทุนสัมพันธ์ jp",
            "i_r_m_4":"รายการข้อมูลประจำปี jp",
            
            
           "i_r_tag1":"รายงานประจำปี jp",
           "i_r_tag1_t_1":"รายงานประจำปี jp",
           
           "i_r_tag2":"งบการเงิน jp",
           "i_r_tag2_t_1":"งบการเงิน jp",
           
           "i_r_tag3":"จรรยาบรรณนักลงทุนสัมพันธ์ jp",
           "i_r_tag3_t_1":"จรรยาบรรณนักลงทุนสัมพันธ์ jp",
           
           "i_r_tag4":"รายการข้อมูลประจำปี jp",
           "i_r_tag4_t_1":"รายการข้อมูลประจำปี jp",
           
             "n_a_m_1":"ข่าวสารบริษัท jp",
            "n_a_m_2":"กิจกรรม jp",
            "n_a_m_3":"ร่วมงานกับเครือไอร่า jp",
            
            "n_a_m_tag1":"ข่าวสารบริษัท jp",
            "n_a_m_tag2":"กิจกรรม jp",
            "n_a_m_tag3":"ร่วมงานกับเครือไอร่า jp",
            "n_a_m_tag1_t_1":"บริษัท ไอร่า แคปปิตอล จำกัด (มหาชน) ร่วมบริจาคในงานกาชาดคอนเสิร์ต ครั้งที่ 43 ประจำปี 2559  เนื่องในโอกาสมหามงคลเสด็จเถลิงถวัลยราชสมบัติครบ 70 ปี และเฉลิมพระเกียรติสมเด็จพระนางเจ้าฯ พระบรมราชินีนาถ เนื่องในโอกาส มหามงคลเฉลิมพระชนมพรรษา 7 รอบ รายได้โดยเสด็จพระราชกุศลบำรุงสภากาชาดไทย jp",
            "n_a_m_tag2_t_1":"ตัวแทนคณะผู้บริหาร บริษัท ไอร่า แคปปิตอล จำกัด (มหาชน) และบริษัทในเครือร่วมกันจัดโครงการช่วยเหลือสังคม เพื่อเป็นส่วนหนึ่งของการพัฒนาสังคม และสิ่งแวดล้อมสู่การพัฒนาอย่างยั่งยืน ตามแนวคิดด้าน CSR ของตลาดหลักทรัพย์ แห่งประเทศไทย โดยในปีนี้ บริษัทได้จัด “โครงการไอร่าเพื่อสังคม สู่การพัฒนาอย่างยั่งยืน” เป็นปีที่ 2 ขึ้นที่โรงเรียนปากคลองชวดใหญ่ อ.บางบ่อ จ.สมุทรปราการ โดยได้มอบทุนการศึกษาหนังสืออุปกรณ์การเรียนและอุปกรณ์กีฬาให้กับโรงเรียนที่ห่างไกล เมื่อวันที่ 15 กรกฎาคม 2559 jp",
            "n_a_m_tag3_t_1":"333 jp",
            
            "a_d_m_1":"วิสัยทัศน์ jp" ,
            "a_d_m_2":"ประวัติบริษัท jp",
            "a_d_m_3":"แผนผังองค์กร jp",
            "a_d_m_4":"โครงสร้างคณะกรรมการ jp",
            "a_d_m_5":"ติดต่อเรา jp",
            
            "a_d_tag1":"วิสัยทัศน์ / พันธกิจ jp",
            "a_d_tag2":"ประวัติบริษัท jp",
            "a_d_tag3":"แผนผังองค์กร jp",
            "a_d_tag4":"โครงสร้างคณะกรรมการ jp",
            "a_d_tag5":"ติดต่อบริษัท jp",
            
            "a_d_tag1_txt_1":"บริษัท ไอร่า แคปปิตอล จำกัด (มหาชน) มุ่งมั่นที่จะเป็นบริษัทชั้นนำของกลุ่มบริษัทด้านการเงิน มีเครือข่ายกับบริษัทระหว่างประเทศที่ให้บริการเกี่ยวกับสินค้าด้านการเงิน จุดแข็ง จะให้ความสำคัญในการให้บริการที่มีคุณภาพ มีคุณธรรมจริยธรรม และสร้างผลตอบแทนที่ดีให้แก่ผู้ถือหุ้น ตลอดจนการดูแลเอาใจใส่สวัสดิการของพนักงานบริษัท ไอร่า แคปปิตอล จำกัด (มหาชน) มุ่งมั่นที่จะเป็นบริษัทชั้นนำของกลุ่มบริษัทด้านการเงิน มีเครือข่ายกับบริษัทระหว่างประเทศที่ให้บริการเกี่ยวกับสินค้าด้านการเงิน jp",
            "a_d_tag1_txt_2":"จุดแข็ง จะให้ความสำคัญในการให้บริการที่มีคุณภาพ มีคุณธรรมจริยธรรม และสร้างผลตอบแทนที่ดีให้แก่ผู้ถือหุ้น ตลอดจนการดูแลเอาใจใส่สวัสดิการของพนักงาน jp",
            "a_d_tag2_txt_1":"ต.ค. ก่อตั้งบริษัท แอสไพเรชั่น วัน จำกัด และถือหุ้น 60% ทุนจดทะเบียน  1 พันล้านบาท jp",
            "a_d_tag2_txt_2":"ก.ค. ก่อตั้งบริษัท ไอร่า พร๊อพเพอร์ตี้ จำกัด ทุนจดทะเบียน 200 ล้านบาท jp",
            "a_d_tag2_txt_3":"ธ.ค. ก่อตั้งบริษัท ไอร่า แอนด์ ไอฟุล จำกัด (มหาชน) ด้วยการเข้าถือหุ้น 30%  ด้วยทุนจดทะเบียน 1 พันล้านบาท jp",
            "a_d_tag2_txt_4":"ก.ค. บริษัท ไอร่า แคปปิตอล จำกัด (มหาชน) เข้าจดทะเบียนในตลาดหลักทรัพย์ เอ็ม เอ ไอ jp",
            "a_d_tag2_txt_5":"ธ.ค. ก่อตั้งบริษัท ไอร่า แอนด์ ไอฟุล จำกัด (มหาชน) ด้วยการเข้าถือหุ้น 30%  ด้วยทุนจดทะเบียน 1 พันล้านบาท jp",
            "a_d_tag2_txt_6":"ก.ค. บริษัท ไอร่า แคปปิตอล จำกัด (มหาชน) เข้าจดทะเบียนในตลาดหลักทรัพย์ เอ็ม เอ ไอ jp",
            "a_d_tag2_txt_7":"มี.ค. เพิ่มทุนจดทะเบียนที่ชำระแล้วของ บริษัท ไอร่า แคปปิตอล จำกัด (มหาชน) เป็น 1,000 ล้านบาท jp",
            "a_d_tag2_txt_8":"ต.ค. จัดตั้ง AIRA International Advisory (Singapore) PTE.LTD. บริษัทที่ปรึกษาทางการเงิน แห่งใหม่ ณ ประเทศสิงคโปร์ jp",
            "a_d_tag2_txt_9":"ก.ย. แปลงสภาพ บริษัท ไอร่า แคปปิตอล จำกัด เป็นบริษัทมหาชน jp",
            "a_d_tag2_txt_10":'มี.ค. เข้าลงทุนใน บริษัทแฟคตอริ่งซึ่งจดทะเบียนในตลาด เอ็ม เอ ไอ และเปลี่ยนชื่อ เป็น "บริษัท ไอร่า แฟคตอริ่ง จำกัด (มหาชน) jp"',
            "a_d_tag2_txt_11":"ม.ค. เพิ่มทุนจดทะเบียนชำระแล้ว บริษัท ไอร่า แคปปิตอล จำกัด เป็น 779.18 ล้านบาท jp",
            "a_d_tag2_txt_12":"ก.พ. ก่อตั้งบริษัท ไอร่า แคปปิตอล จำกัด ด้วยทุนจดทะเบียน 623.36 ล้านบาท และเข้าถือหุ้น บริษัทหลักทรัพย์ ไอร่า จำกัด (มหาชน) 100% jp",
            "a_d_tag2_txt_13":"มี.ค. รวมบริษัทที่ปรึกษาทางการเงินในเครือ 3 แห่งเข้าด้วยกันและเพิ่มทุนจดทะเบียน จาก 20 ล้านบาทเป็น 30 ล้านบาท โดยเปลี่ยนชื่อเป็น บริษัท ไอร่า แอดไวเซอรี่ จำกัดjp",
            "a_d_tag2_txt_14":"มิ.ย. เพิ่มทุนจดทะเบียน บริษัทหลักทรัพย์ ไอร่า จำกัด (มหาชน) เป็น 720 ล้านบาท jp",
            "a_d_tag2_txt_15":"เม.ย. เพิ่มทุนที่ชำระแล้ว บริษัทหลักทรัพย์ ไอร่า จำกัด (มหาชน) เป็น 600 ล้านบาท jp",
            "a_d_tag2_txt_16":"ธ.ค. แปลงสภาพ บริษัทหลักทรัพย์ ไอร่า จำกัดเป็นบริษัทมหาชน jp",
            "a_d_tag2_txt_17":"พ.ค. บริษัทหลักทรัพย์ ไอร่า จำกัด เพิ่มทุนจดทะเบียนเป็น 500 ล้านบาท jp",
            "a_d_tag2_txt_18":"พ.ย. ซื้อกิจการบริษัทหลักทรัพย์ หมายเลข 48 ของตลาดหลักทรัพย์แห่งประเทศไทย โดยได้เปลี่ยนโครงสร้างการบริหารจัดการ และเปลี่ยนชื่อใหม่เป็น บริษัทหลักทรัพย์ ไอร่า จำกัด jp",
            "a_d_tag5_txt_1":"บริษัท ไอร่า แคปปิตอล จำกัด (มหาชน) jp",
            "a_d_tag5_txt_2":"319 อาคารจัตุรัสจามจุรี ชั้น12 <br> ถนนพญาไท  แขวงปทุมวัน เขตปทุมวัน กทม. 10330<br>โทรศัพท์ 02-684-8981 โทรสาร 02-684-8980 jp"
            
        }
    };
    
    
  
 var idOld="";
 var lang="th";
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
        // alert("this.id"+this.id);
         if(this.id && this.id !="th" && this.id !="en" && this.id !="jp" && this.id !="facebook"
                 && this.id !="youtub" && this.id !="twitter" && this.id !="google"){
            idOld = this.id;
            
            $("#"+ idOld +'_img').attr("src",'images/menu/'+ idOld +"_action.png");
            $("#"+ idOld +'_txt').addClass('menu_action');
           
            
            load_page();
            
            
            
         }else if(this.id !="th" || this.id !="en" || this.id !="jp"){
             $("#"+ idOld +'_img').attr("src",'images/menu/'+ idOld +"_action.png");
            $("#"+ idOld +'_txt').addClass('menu_action');
            
                set_lang(dictionary[this.id]);
                  $("#"+lang+"_img").css('background-image', 'url(images/menu/bu_'+ lang +'.png)');
                  
                  $("#"+this.id+"_img").css('background-image', 'url(images/menu/bu_'+ this.id +'_action.png)');
                lang = this.id;
         }
    });
    
    function aira_data(){
        $("#url_map").attr("href",url_map);
        $("#img_map").attr("src",url_map+"_"+lang+".png");
        $("#img_b_1").attr("src",img_board+"_1_"+lang+".png");
        $("#img_b_2").attr("src",img_board+"_2_"+lang+".png");
        $("#img_b_3").attr("src",img_board+"_3_"+lang+".png");
        $("#img_b_4").attr("src",img_board+"_4_"+lang+".png");
        $("#img_b_5").attr("src",img_board+"_5_"+lang+".png");
        $("#img_b_6").attr("src",img_board+"_6_"+lang+".png");
        $("#img_b_7").attr("src",img_board+"_7_"+lang+".png");
        $("#img_b_8").attr("src",img_board+"_8_"+lang+".png");
        $("#img_b_9").attr("src",img_board+"_9_"+lang+".png");
        $("#img_b_10").attr("src",img_board+"_10_"+lang+".png");
        $("#img_b_11").attr("src",img_board+"_11_"+lang+".png");
        $("#img_b_12").attr("src",img_board+"_12_"+lang+".png");
        $("#img_flow").attr("src",img_flow+"_"+lang+".png");
        
    }
    function lang1(st){
      
    }
    
    function load_page(){
      
       // alert("xxxx");
        $('.carousel').carousel('pause');
        $("#content_page").load(idOld+".html", function(responseTxt, statusTxt, jqXHR){
                if(statusTxt == "success"){
                    $(".page").show();
                   $('#carousel_bar').hide();
                   if(lang == "th"){
                        set_lang(dictionary.th);
                   }else if(lang == "en"){
                        set_lang(dictionary.en);
                   }else{
                        set_lang(dictionary.jp);
                   }
                    //alert("success!");
                }
                if(statusTxt == "error"){
                  //alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
                }
                if(idOld=="aira_data"){
                    aira_data();
                }
        });
    }
    
    
    set_lang = function (dictionary) {
        $("[data-translate]").html(function () {
            var key = $(this).data("translate");
            if (dictionary.hasOwnProperty(key)) {
                return dictionary[key];
            }
        });
    };
    
     set_lang(dictionary.th);
      $("#th_img").css('background-image', 'url(images/menu/bu_th_action.png)');
});





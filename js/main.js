 
$(function(){
    var url_facebook = "https://www.facebook.com/airasec";
    var url_youtube = "https://www.youtube.com/channel/UClcq7jhMDEQ7iDCb2g_F2Fw";
    var url_twitter = "https://twitter.com/airaplc";
    var url_google_plus = "https://plus.google.com/+AIRAPLCNo48";
    var img_map = "images/data/map";
    var url_map = "https://www.google.co.th/maps/"; 
    var img_board="images/data/board";
    var img_flow="images/data/data_flow";
    var stLanguage = ""; 
    
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
            "a_n_8": "บริษัท ไอร่า เวนเจอร์ แคปปิตอล<br>จำกัด ",
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
            "n_a_m_tag3_t_1":" ",
            
            "n_a_m_tag1_i1":"คณะกรรมการบริษัท ร่วมแถลงผลการดำเนินงาน ในการประชุมสามัญผู้ถือหุ้น ประจำปี 2559  พร้อมเปิดตัวประธานกรรมการบริหาร บริษัท ไอร่า แคปปิตอล จำกัด (มหาชน) คุณปกรณ์ มาลากุล ณ อยุธยา เมื่อวันที่ 25 เมษายน 2559 ณ ห้องบุษบา โรงแรมแมนดาริน สามย่าน",
            "n_a_m_tag1_i2":"บริษัท ไอร่า แคปปิตอล จำกัด (มหาชน) ผนึกกำลังเซ็นสัญญาความร่วมมือทางธุรกิจ กับบริษัท Kenedix Asia Private Limited บริษัทจัดการกองทุนและบริหารสินทรัพย์ชั้นนำจากประเทศญี่ปุ่น และ บริษัท Eugene Investment & Securities กลุ่มบริษัทการเงิน และวัสดุก่อสร้างชั้นนำจากประเทศเกาหลี และ เพื่อต่อยอด เสริมความแข็งแกร่งทางธุรกิจด้านอสังหาริมทรัพย์ให้กับกลุ่มบริษัทในอนาคต",
            "n_a_m_tag1_i3":"บริษัท ไอร่า แคปปิตอล จำกัด (มหาชน) ร่วมบริจาคในงานกาชาดคอนเสิร์ต ครั้งที่ 43 ประจำปี 2559 เนื่องในโอกาสมหามงคลเสด็จเถลิงถวัลยราชสมบัติครบ 70 ปี และเฉลิมพระเกียรติสมเด็จพระนางเจ้าฯ พระบรมราชินีนาถ เนื่องในโอกาสมหามงคลเฉลิมพระชนมพรรษา 7 รอบ รายได้โดยเสด็จพระราชกุศลบำรุงสภากาชาดไทย",
            "n_a_m_tag1_i4":"ผลการแข่งขันฟุตบอล สิงห์โบรกเกอร์คัพ ชิงถ้วยพระราชทาน สมเด็จพระเทพรัตนราชสุดา ฯ สยามบรมราชกุมารี  ซึ่งทีมไอร่า โดยบริษัทหลักทรัพย์ ไอร่า จำกัด (มหาชน) สามารถคว้าแชมป์ชนะเลิศอันดับ 1 มาได้เป็นผลสำเร็จ โดยการเอาชนะบริษัทหลักทรัพย์ กรุงศรี 3:0 ประตู เมื่อเร็วๆ นี้",
            "n_a_m_tag1_i5":"ตัวแทนคณะผู้บริหาร บริษัท ไอร่า แคปปิตอล จำกัด (มหาชน) และบริษัทในเครือร่วมกันจัดโครงการช่วยเหลือสังคม เพื่อเป็นส่วนหนึ่งของ การพัฒนาสังคมและสิ่งแวดล้อมสู่การพัฒนาอย่างยั่งยืน ตามแนวคิดด้าน CSR ของตลาดหลักทรัพย์แห่งประเทศไทย โดยในปีนี้ บริษัทได้จัด “โครงการไอร่าเพื่อสังคม สู่การพัฒนาอย่างยั่งยืน” เป็นปีที่ 2 ขึ้นที่โรงเรียนปากคลองชวดใหญ่ อ.บางบ่อ จ.สมุทรปราการ โดยได้มอบทุน การศึกษา หนังสือ อุปกรณ์การเรียน และอุปกรณ์กีฬาให้กับโรงเรียนที่ห่างไกล เมื่อวันที่ 15 กรกฎาคม 2559",
            "n_a_m_tag1_i6":"ผลการแข่งขันแบดมินตันชิงถ้วยพระราชทานสมเด็จพระเทพฯ “Broker Badminton Championship” ปีที่ 6 เมื่อวันเสาร์ที่ 20 - 21 กุมภาพันธ์  2559 ที่ผ่านมา  บล.ทิสโก้ ได้รับรางวัลถ้วยพระราชทานฯ จากผลรวมคะแนนอันดับ 1 ส่วนทางไอร่า นั้นถือว่าเป็นปีแรกที่ได้เข้าร่วม รายการแข่งขัน  และสามารถผ่านเข้ารอบ 8 ทีม และ 16 ทีม ในหลายๆประเภท จากทั้งหมด 29 ทีม ซึ่งจะเป็นแรงผลักดันให้นักแบดมินตันไอร่า มุ่งมั่นฝึกซ้อมเพื่อคว้าเหรียญรางวัลมาให้ได้ในรายการแข่งขันต่อๆไป",
            
            "a_d_m_1":"วิสัยทัศน์",
            "a_d_m_2":"ประวัติบริษัท",
            "a_d_m_3":"แผนผังองค์กร",
            "a_d_m_4":"โครงสร้างคณะกรรมการ",
            "a_d_m_5":"ติดต่อเรา",
            
            "a_d_tag1":"วิสัยทัศน์/ พันธกิจ ",
            "a_d_tag1_1":"วิสัยทัศน์ ",
            "a_d_tag1_2":"พันธกิจ",
            "a_d_tag2":"ประวัติบริษัท",
            "a_d_tag3":"แผนผังองค์กร",
            "a_d_tag4":"โครงสร้างคณะกรรมการ",
            "a_d_tag5":"ติดต่อบริษัท",
            
            "a_d_tag1_txt_1":"มุ่งมั่นที่จะเป็นกลุ่มบริษัททางการเงินชั้นนำ ที่มีเครือข่ายพันธมิตรในระดับสากล ที่สามารถตอบสนองความต้องการของลูกค้า ด้วยผลิตภัณฑ์และบริการทางการเงินที่หลากหลายและครบถ้วน",
            "a_d_tag1_txt_2":"สร้างคุณค่าสูงสุดภายใต้หลักธรรมาภิบาลให้แก่ผู้มีส่วนได้เสีย ซึ่งได้แก่",
            "a_d_tag2_txt_1":"จัดตั้งบริษัท ไอร่า เวนเจอร์ แคปปิตอล เพื่อประกอบกิจการเงินร่วมลงทุน ด้วยทุนจดทะเบียน 20 ล้านบาท  บริษัท ไอร่า แคปปิตอล จำกัด (มหาชน) เซ็นต์สัญญา JVA กับ Kenedix Asia Pte. Ltd. และ Eugene Investment & Securities Co., Ltd. ในการร่วมลงทุนในบริษัท ไอร่า พร็อพเพอร์ตี้ จำกัด (มหาชน) ร่วมทุนกับ Travelex Limited จัดตั้งบริษัท “Travelex (Thailand) Limited” ดำเนินธุรกิจแลกเปลี่ยนสกุลเงิน ด้วยทุนจดทะเบียน 110 ล้านบาท เข้าลงทุนใน บริษัท เร้นท์-อะ-วี จำกัด และแปรสภาพเป็นบริษัทมหาชนพร้อมเปลี่ยนชื่อเป็น บริษัท ไอร่า ลีสซิ่ง จำกัด (มหาชน) บริษัท แอสไพเรชั่น วัน จำกัด ได้รับสิทธิ์ในการเช่าที่ดินหมายเลข1 บริเวณสี่แยกราชเทวีของสำนักงานทรัพย์สินส่วนพระมหากษัตริย์ เป็นเวลา 30 ปี เพื่อก่อสร้างอาคารสำนักงานให้เช่า เพิ่มทุนจดทะเบียนที่ชำระแล้วของ บริษัท ไอร่า พร็อพเพอร์ตี้ จำกัด เป็น 500 ล้านบาท และแปรสภาพเป็นบริษัทมหาชน",
            "a_d_tag2_txt_5":"บริษัท ไอร่า พร็อพเพอร์ตี้ จำกัด ร่วมทุนกับบริษัท เสนา ดีเวลอปเม้นต์ จำกัด (มหาชน) และบริษัท แสงฟ้าก่อสร้าง จำกัด จัดตั้งบริษัท แอสไพเรชั่น วัน จำกัด ซึ่งเป็นบริษัทพัฒนาอสังหาริมทรัพย์ใน สัดส่วน 60%",
            "a_d_tag2_txt_6":"ก่อตั้ง บริษัท ไอร่า พร็อพเพอร์ตี้ จำกัด ด้วยทุนจดทะเบียน 200 ล้านบาท",
            "a_d_tag2_txt_7":"เข้าร่วมลงทุนกับ AIFUL CORPORATION จัดตั้ง “บริษัท ไอร่า แอนด์ ไอฟุล จำกัด (มหาชน)”ใน สัดส่วน 30%",
            "a_d_tag2_txt_7_1":"เข้าจดทะเบียนในตลาดหลักทรัพย์ เอ็ม เอ ไอ",
            "a_d_tag2_txt_8":"เพิ่มทุนจดทะเบียนที่ชำระแล้วของ บริษัท ไอร่า แคปปิตอล จำกัด (มหาชน) เป็น 1,000 ล้านบาท",
            "a_d_tag2_txt_8_1":"จัดตั้ง AIRA International Advisory (Singapore) PTE.LTD. บริษัทที่ปรึกษาทางการเงิน แห่งใหม่ ณ ประเทศสิงคโปร์",
            "a_d_tag2_txt_9":"แปรสภาพ บริษัท ไอร่า แคปปิตอล จำกัด เป็นบริษัทมหาชน",
            "a_d_tag2_txt_10":'เข้าลงทุนใน บริษัท ธนมิตร แฟคตอริ่ง จำกัด (มหาชน) และเปลี่ยนชื่อ เป็น "บริษัท ไอร่า แฟคตอริ่ง จำกัด (มหาชน)"',
            "a_d_tag2_txt_11":"เพิ่มทุนจดทะเบียนชำระแล้ว บริษัท ไอร่า แคปปิตอล จำกัด เป็น 779.18 ล้านบาท",
            "a_d_tag2_txt_12":"ก่อตั้งบริษัท ไอร่า แคปปิตอล จำกัด ด้วยทุนจดทะเบียน 623.35 ล้านบาท และเข้าถือหุ้น บริษัทหลักทรัพย์ ไอร่า จำกัด (มหาชน) 99.99%",
            "a_d_tag2_txt_13":"・เริ่มทำธุรกรรมบริการยืมและให้ยืมทรัพย์ (SBL) และได้รับใบอนุญาต Private Fund จากสำนักงานคณะกรรมการกำกับหลักทรัพย์และตลาดหลักทรัพย์ (SEC)<br>・ให้บริการลงทุนในหลักทรัพย์ต่างประเทศ (Global Trading Business) ในไตรมาสที่ 2",
            "a_d_tag2_txt_13_1":"รวมบริษัทที่ปรึกษาทางการเงินในเครือ 3 แห่งเข้าด้วยกันและเพิ่มทุนจดทะเบียน จาก 20 ล้านบาทเป็น 30 ล้านบาท โดยเปลี่ยนชื่อเป็น บริษัท ไอร่า แอดไวเซอรี่ จำกัด",
            "a_d_tag2_txt_14":"บริษัทหลักทรัพย์ ไอร่า จำกัด (มหาชน) ได้รับอนุมัติใบอนุญาต TFEX และใบอนุญาตธุรกิจหลักทรัพย์ ประเภท ก.",
            "a_d_tag2_txt_14_1":"เพิ่มทุนจดทะเบียน บริษัทหลักทรัพย์ ไอร่า จำกัด (มหาชน) เป็น 720 ล้านบาท",
            "a_d_tag2_txt_15":"เพิ่มทุนที่ชำระแล้ว บริษัทหลักทรัพย์ ไอร่า จำกัด (มหาชน) เป็น 600 ล้านบาท",
            "a_d_tag2_txt_16":"แปรสภาพ บริษัทหลักทรัพย์ ไอร่า จำกัดเป็นบริษัทมหาชน",
            "a_d_tag2_txt_16_1":"บริษัทหลักทรัพย์ ไอร่า จำกัด เปิดสาขาแรก สำหรับบริการลูกค้ารายย่อย",
            "a_d_tag2_txt_17":"บริษัทหลักทรัพย์ ไอร่า จำกัด เพิ่มทุนจดทะเบียนเป็น 500 ล้านบาท",
            "a_d_tag2_txt_18":"เข้าซื้อกิจการบริษัทหลักทรัพย์ หมายเลข 48 ของตลาดหลักทรัพย์แห่งประเทศไทย โดยได้เปลี่ยนโครงสร้างการบริหารจัดการ และเปลี่ยนชื่อใหม่เป็น บริษัทหลักทรัพย์ ไอร่า จำกัด",
            "a_d_tag5_txt_1":"<b>บริษัท ไอร่า แคปปิตอล จำกัด (มหาชน)</b>",
            "a_d_tag5_txt_2":"319 อาคารจัตุรัสจามจุรี ชั้น12 ถนนพญาไท แขวงปทุมวัน เขตปทุมวัน กทม. 10330<br>โทร 02-684-8981 Fax:02-684-8980",
            
            
            "a_d_tag1_l1_1_1":"ผู้ถือหุ้น",
            "a_d_tag1_l1_1_2":"สร้างผลตอบแทนสูงสุดให้แก่ผู้ถือหุ้น",
            "a_d_tag1_l1_2_1":"พนักงาน",
            "a_d_tag1_l1_2_2":"พัฒนาศักยภาพและคุณภาพชีวิตให้แก่บุคลากร",
            "a_d_tag1_l1_3_1":"คู่แข่ง",
            "a_d_tag1_l1_3_2":"ดำเนินการแข่งขันทางธุรกิจให้เป็นไปตามกรอบกติกาและตามกฎหมาย",
            "a_d_tag1_l1_4_1":"ลูกค้า",
            "a_d_tag1_l1_4_2":"สร้างความพึงพอใจสูงสุดให้แก่ลูกค้า",
            
            "a_d_tag1_l2_1_1":"เจ้าหนี้",
            "a_d_tag1_l2_1_2":"ปฏิบัติตามสัญญาและเงื่อนไขที่มีต่อเจ้าหนี้อย่างเคร่งครัดและเป็นธรรม",
            "a_d_tag1_l2_2_1":"องค์กรกำกับดูแล และหน่วยงานรัฐ",
            "a_d_tag1_l2_2_2":"ปฏิบัติตามกฎหมาย และระเบียบต่าง ๆ ที่กำหนดโดยองค์กรที่กำกับดูแลอย่างเคร่งครัด โดยต่อต้านการทุจริตและคอร์รัปชั่นในทุกกรณี",
            "a_d_tag1_l2_3_1":"สังคม",
            "a_d_tag1_l2_3_2":"ร่วมช่วยเหลือสังคมและรักษาสิ่งแวดล้อม",
            
            "b_s_m_1":"ไอร่า แคปปิตอล",
            "b_s_m_2":"หลักทรัพย์ ไอร่า",
            "b_s_m_3":"ไอร่า แฟคตอริ่ง",
            "b_s_m_4":"AIRA International Advisory",
            "b_s_m_5":"ไอร่า แอนด์ ไอฟุล",
            "b_s_m_6":"ไอร่า พร็อพเพอร์ตี้",
            "b_s_m_7":"ไอร่า ลีสซิ่ง",
            "b_s_m_8":"ไอร่า เวนเจอร์ แคปปิตอล ทราเวลเล็กซ์",
            "b_s_m_9":"แอสไพเรชั่น วัน",
            "b_s_m_10":"ไอร่า แอดไวเซอรี่",
            "b_s_title_1":"ข้อมูลธุรกิจ / บริการ",
            
           
            "b_s_tag1_txt_1":"บริษัท ไอร่า แคปปิตอล จำกัด (มหาชน)",
            "b_s_tag2_txt_1":"บริษัทหลักทรัพย์ ไอร่า จำกัด (มหาชน)",
            "b_s_tag3_txt_1":"บริษัท ไอร่า แฟคตอริ่ง จำกัด (มหาชน)",
            "b_s_tag4_txt_1":"AIRA International Advisory (Singapore) Pte. Ltd.",
            "b_s_tag5_txt_1":"บริษัท ไอร่า แอนด์ ไอฟุล จำกัด (มหาชน)",
            "b_s_tag6_txt_1":"บริษัท ไอร่า พร็อพเพอร์ตี้ จำกัด (มหาชน)",
            "b_s_tag7_txt_1":"บริษัท ไอร่า ลีสซิ่ง จำกัด (มหาชน)",
            "b_s_tag8_txt_1":"บริษัท ไอร่า เวนเจอร์ แคปปิตอล จำกัด",
            "b_s_tag9_txt_1":"บริษัท ไอร่า แอดไวเซอรี่ จำกัด",
            "b_s_tag10_txt_1":"บริษัท แอสไพเรชั่น วัน จำกัด",
            
             "b_s_tag1_txt_2":"จดทะเบียนเป็นบริษัทจำกัดเมื่อ วันที่ 21 มกราคม 2553 และแปรสภาพเป็นบริษัทมหาชน<br>ในวันที่ 9 กันยายน 2554 บริษัทก่อตั้งขึ้นโดยมีจุดประสงค์เพื่อดำเนินธุรกิจการลงทุนในบริษัทอื่น<br>(Holding Company) ที่ประกอบธุรกิจการเงิน โดยมุ่งมั่นที่จะเป็นบริษัทชั้นนำของกลุ่มบริษัทด้านการเงิน<br>มีเครือข่ายกับบริษัทระหว่างประเทศที่ให้บริการเกี่ยวกับสินค้าด้านการเงิน และจะให้ความสำคัญ<br>ในการบริหารอย่างมีคุณธรรมจริยธรรม ให้บริการที่มีคุณภาพและสร้างผลตอบแทนที่ดีให้แก่ผู้ถือหุ้น<br>ตลอดจนการดูแลเอาใจใส่สวัสดิการของพนักงาน",
            "b_s_tag2_txt_2":"จำนวน 99.99% ซึ่งมีบริษัทไอร่า แอดไวเซอรี่ จำกัด เป็นบริษัทในเครือ<br>บริษัทหลักทรัพย์ ไอร่า จำกัด (มหาชน) ได้รับใบอนุญาตประกอบธุรกิจหลักทรัพย์หมายเลข 48<br>ของตลาดหลักทรัพย์แห่งประเทศไทย",
            "b_s_tag3_txt_2":"จำนวน 71.55%<br>โดยบริษัท ไอร่า แฟคตอริ่ง จำกัด (มหาชน) ประกอบธุรกิจผู้ให้บริการเงินทุนหมุนเวียนระยะสั้น<br>ประเภทแฟคตอริ่งแก่ผู้ประกอบการ เพื่อสร้างความมั่นใจให้กับลูกค้าของเราว่า จะสามารถดำเนินธุรกิจ<br>โดยมีเงินทุนหมุนเวียนในการดำเนินธุรกิจอย่างเพียงพอ",
            "b_s_tag4_txt_2":"จำนวน 90.00%<br>ให้บริการที่ปรึกษาทางธุรกิจแบบครบวงจร รวมถึงการควบรวม และซื้อขายกิจการ<br>ในภาคพื้นเอเชียตะวันออกเฉียงใต้ สำนักงานตั้งอยู่ ณ ประเทศสิงคโปร์",
            "b_s_tag5_txt_2":"จำนวน 30.00%<br>ประกอบธุรกิจให้บริการสินเชื่อส่วนบุคคลในประเทศไทย",
            "b_s_tag6_txt_2":"จำนวน 60% ประกอบธุรกิจพัฒนาอสังหาริมทรัพย์",
            "b_s_tag7_txt_2":"จำนวน 80%<br>ประกอบธุรกิจให้เช่า เช่าซื้อ และเช่าแบบลีสซิ่ง ทั้งบุคคลธรรมดา และนิติบุคคล",
            "b_s_tag8_txt_2":"จำนวน 100%<br>ประกอบกิจการเงินร่วมลงทุน เพื่อสนับสนุนการเงินร่วมลงทุนของภาครัฐ",
            "b_s_tag9_txt_2":"ให้บริการที่ปรึกษาทางธุรกิจแบบครบวงจร ทั้งในด้านการเงินและการบัญชี การปรับปรุงโครงสร้างหนี้<br>การซื้อขายและควบรวมกิจการ ภาษี และ การจัดฝึกอบรมภายในองค์กร บริการของเราครอบคลุมทุกภาคธุรกิจ<br>ทั้งภาครัฐและภาคเอกชน สถาบันการเงิน บริษัทจดทะเบียนในตลาดหลักทรัพย์ฯ<br>ธุรกิจSMEs รวมทั้งบุคคลธรรมดา",
            "b_s_tag10_txt_2":"จำนวน 60.00%<br>ประกอบธุรกิจพัฒนาอสังหาริมทรัพย์ ด้านการก่อสร้างอาคารสูง สำหรับสำนักงานให้เช่า"
            
            
        },
        "en": {
            "_m_b1": "Group<br>Companies",
            "_m_b2": "Company<br>Overview",
            "_m_b3": "Service<br>Information",
            "_m_b4": "Investor<br>Relations",
            "_m_b5": "News <br>and Event",
            "_m_b6": "Corporate <br>Governance",
            "_m_b7": "Corporate Social <br>Responsibility",
            
            "a_n_title": "OVERVIEW",
            "a_n_1": "AIRA Capital Public<br>Company Limited",
            "a_n_2": "AIRA Securities Public<br>Company Limited",
            "a_n_3": "AIRA Factoring Public<br>Company Limited",
            "a_n_4": "AIRA International Advisory<br>( Singapore ) Pte.Ltd.",
            "a_n_5": "AIRA & AIFUL Public<br>Company Limited.",
            "a_n_6": "AIRA Property Public<br>Company Limited",
            "a_n_7": "AIRA Leasing Public<br>Company Limited",
            "a_n_8": "AIRA Venture Capital Limited",
            "a_n_9": "AIRA Advisory Company Limited",
            "a_n_10": "Aspiration One Company Limited",
            
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
           
             "n_a_m_1":"NEWS",
            "n_a_m_2":"ACTIVITY",
            "n_a_m_3":"CAREERS",
            
            
            "n_a_m_tag1":"NEWS",
            "n_a_m_tag2":"ACTIVITY",
            "n_a_m_tag3":"CAREERS",
            "n_a_m_tag1_t_1":"บริษัท ไอร่า แคปปิตอล จำกัด (มหาชน) ร่วมบริจาคในงานกาชาดคอนเสิร์ต ครั้งที่ 43 ประจำปี 2559  เนื่องในโอกาสมหามงคลเสด็จเถลิงถวัลยราชสมบัติครบ 70 ปี และเฉลิมพระเกียรติสมเด็จพระนางเจ้าฯ พระบรมราชินีนาถ เนื่องในโอกาส มหามงคลเฉลิมพระชนมพรรษา 7 รอบ รายได้โดยเสด็จพระราชกุศลบำรุงสภากาชาดไทย",
            "n_a_m_tag2_t_1":"ตัวแทนคณะผู้บริหาร บริษัท ไอร่า แคปปิตอล จำกัด (มหาชน) และบริษัทในเครือร่วมกันจัดโครงการช่วยเหลือสังคม เพื่อเป็นส่วนหนึ่งของการพัฒนาสังคม และสิ่งแวดล้อมสู่การพัฒนาอย่างยั่งยืน ตามแนวคิดด้าน CSR ของตลาดหลักทรัพย์ แห่งประเทศไทย โดยในปีนี้ บริษัทได้จัด “โครงการไอร่าเพื่อสังคม สู่การพัฒนาอย่างยั่งยืน” เป็นปีที่ 2 ขึ้นที่โรงเรียนปากคลองชวดใหญ่ อ.บางบ่อ จ.สมุทรปราการ โดยได้มอบทุนการศึกษาหนังสืออุปกรณ์การเรียนและอุปกรณ์กีฬาให้กับโรงเรียนที่ห่างไกล เมื่อวันที่ 15 กรกฎาคม 2559",
            "n_a_m_tag3_t_1":" ",
            
            "n_a_m_tag1_i1":"Corporate Directors of AIRA groups announce its performance in the Annual General meeting 2016. Meanwhile, reveal the director chairman of AIRA Capital PCL on April 25, 2016 At Bussaba Room, Mandarin Bangkok Hotel ",
            "n_a_m_tag1_i2":"AIRA Capital Public Company Limited signed joint venture agreement with Kenedix Asia Private Limited; The leading Asset Management from Japan and Eugene Investment & Securities; Financial and Construction Group of Companies in order to develop its capacity  in property aspect of AIRA Group",
            "n_a_m_tag1_i3":"AIRA Capital Public Company Limited donates for The 43rd Red Cross Charity Concert 2016 which was organized by Thai Red Cross Society in collaborate with the Royal Thai Navy, to celebrate the 70th Anniversary of His Majesty the King ‘s accession to the throne and the 70th Birthday of Her Majesty the Queen. All Revenue from this concert will be donated to the Thai Red Cross Society",
            "n_a_m_tag1_i4":"AIRA Securities Public Company Limited celebrates the success of AIRA Football team winning Royal Trophy of HRH Princess Maha Chakri Sirindhorn in Singha Broker Cup  by beating Krungsri Securities 3:0",
            "n_a_m_tag1_i5":'“AIRA for Society to sustainability development” ,the social responsible project from AIRA group which is hold for the 2nd year of this project in 2016.  For this year, AIRA group management team representatives and staffs donate fund, books, school supplies and sport equipments to Pak Khlong chuat Yai School, Bang Bo District, Samut Prakarn Province on July  15th, 2016. AIRA Group management team’s representatives hold social responsibility activities to follow the ideas of sustainable development under CSR activities of SET',
            "n_a_m_tag1_i6":"The Result of “Broker Badminton Championship” for the Royal Trophy of HRH Princess Maha Chakri Sirindhorn on February 20-21,2016 which AIRA could get through the last 8 team from several match",

            
            "a_d_m_1":"VISION/ MISSION",
            "a_d_m_2":"MILESTONE",
            "a_d_m_3":"ORGANIZATION",
            "a_d_m_4":"MANAGEMENT",
            "a_d_m_5":"CONTACT",
            
            "a_d_tag1":"VISION / MISSION",
            "a_d_tag1_1":"VISION ",
            "a_d_tag1_2":"MISSION",
            "a_d_tag2":"ประวัติบริษัท en",
            "a_d_tag3":"ORGANIZATION CHART",
            "a_d_tag4":"MANAGEMENT",
            "a_d_tag5":"CONTACT",
            
            "a_d_tag1_txt_1":"We are determined to be a leading financial group company with an international network and alliance which can respond to our customer’s demands, providing a diverse and comprehensive range of financial products and services",
            "a_d_tag1_txt_2":"Create the highest value under the good governance principle for all stakeholder interest, therefore;",
             
            "a_d_tag2_txt_1":"Established “AIRA Venture Capital Limited” with the registered capital of 20 MB. AIRA Capital PCL has signed JVA with Kenedix Asia Pte. Ltd. And Eugene Investment & Securities Co., Ltd. to be the partnership in AIRA Property Plc. Established “Travelex (Thailand) Limited” by joint venture with Travelex Limited with registered capital of 110 MB to operate currency exchange business. Invested in RENT-A-V Co., Ltd. and renamed to AIRA Leasing Plc. Aspiration One Co., Ltd. has received Ratchtewi area 30 years land leased concession from Crown Property Bureau to perform an Office Building Service AIRA Property Co., Ltd. has increased registered capital to 500 MB and be transformed to Public Company Limited",
            "a_d_tag2_txt_5":"AIRA Property Plc. established its new subsidiary company with its alliances, SENA Development Plc. and Sang Fah Construction and Engineering Co., Ltd. Under the name “Aspiration One Company Limited” Established AIRA Property Co., Ltd. With a registered capital of Baht 200 million",
            "a_d_tag2_txt_6":'Established AIRA Property Co., Ltd. With a registered capital of Baht 200 million ',
            "a_d_tag2_txt_7":"Established “AIRA&AIFUL Plc.” as a joint venture company between AIRA Capital Plc. and AIFUL Corporation ",
            "a_d_tag2_txt_7_1":"Successfully listed in Market for Alternative Investments in Thailand",
            "a_d_tag2_txt_8":"Increased the paid-up capital to 1,000 MB",
            "a_d_tag2_txt_8_1":"Established AIRA International Advisory (Singapore) PTE. LTD. At Singapore",
            "a_d_tag2_txt_9":"AIRA Capital Co., Ltd has transformed to a Public Company Limited",
            "a_d_tag2_txt_10":'Invested in Dhanamitr Factoring and renamed to “AIRA Factoring Plc.”',
            "a_d_tag2_txt_11":"Increased its paid-up capital to 779.18 MB",
            "a_d_tag2_txt_12":"Established AIRA Capital Co., Ltd. with registered capital of Baht 623.35 million and acquire majority 99.99% share of AIRA Securities Plc.",
            "a_d_tag2_txt_13":"・Start up Stock Borrower and Lender Service (SBL) and granted Private Fund License from the Securities and Exchange Commission<br>・Provide Global Trading business in 2nd quarter",
            "a_d_tag2_txt_13_1":'Merged 3 financial advisory firms together and increased its registered capital from 20 MB onto 30 MB and renamed it to “AIRA Advisory Co., Ltd. "',
            "a_d_tag2_txt_14":"AIRA Securities Plc. has been granted TFEX and Securities Brokerage Licenses.",
            "a_d_tag2_txt_14_1":"AIRA Securities Plc. increased its registered capital to Baht 720 million",
            "a_d_tag2_txt_15":"AIRA Securities Plc. increased its paid-up capital to Baht 600 million",
            "a_d_tag2_txt_16":"AIRA Securities Co., Ltd. has been transformed to Public Company Limited",
            "a_d_tag2_txt_16_1":"AIRA Securities Co., Ltd. Start up its first branch and provide retail securities trading",
            "a_d_tag2_txt_17":"Increased “AIRA Securities Co., Ltd.” Registered Capital to Baht 500 MB",
            "a_d_tag2_txt_18":'Acquire a securities company with the full brokerage licenses, SET No.48 and renamed to “AIRA Securities Public Company Limited”',
            "a_d_tag5_txt_1":"<b>AIRA Capitail Public Company Limited</b>",
            "a_d_tag5_txt_2":"319 Chamchuri Square, 12th  Phayathai Rd., Pathumwan  <br> 12th  Phayathai Rd., Pathumwan Bangkok 10330<br>Tel: 02-684-8981  Fax: 02-684-8980",
            
            
             "a_d_tag1_l1_1_1":"SHAREHOLDERS",
            "a_d_tag1_l1_1_2":"Supports society and environment",
            "a_d_tag1_l1_2_1":"​EMPLOYEE",
            "a_d_tag1_l1_2_2":"Develop personnel potentiality and life quality of the employee",
            "a_d_tag1_l1_3_1":"​COMPETITORS",
            "a_d_tag1_l1_3_2":"Generate business competitiveness under the rules and law",
            "a_d_tag1_l1_4_1":"​CLIENTS",
            "a_d_tag1_l1_4_2":"Creates the highest satisfaction to clients",
            
            "a_d_tag1_l2_1_1":"CREDITOR",
            "a_d_tag1_l2_1_2":"Strictly and fairly follows contracts and conditions",
            "a_d_tag1_l2_2_1":"LIANCE AND STATE AGENCY",
            "a_d_tag1_l2_2_2":"Strictly operate the business under the law and statute assigned by Compliance and  State Agency,and working against corruption in every aspect",
            "a_d_tag1_l2_3_1":"​SOCIETY",
            "a_d_tag1_l2_3_2":"Supports society and environment",
            
            
            
            "b_s_m_1":"AIRA Capital",
            "b_s_m_2":"AIRA Securities",
            "b_s_m_3":"AIRA Factoring",
            "b_s_m_4":"AIRA International Advisory",
            "b_s_m_5":"AIRA & AIFUL",
            "b_s_m_6":"AIRA Property",
            "b_s_m_7":"AIRA Leasing",
            "b_s_m_8":"AIRA Venture Capital",
            "b_s_m_9":"AIRA Advisory",
            "b_s_m_10":"Aspiration One",
            "b_s_title_1":"OVERVIEW",
            "b_s_tag1_txt_1":"AIRA Capital Public Company Limited",
            "b_s_tag2_txt_1":"AIRA Securities Public Company Limited",
            "b_s_tag3_txt_1":"AIRA Factoring Public Company Limited",
            "b_s_tag4_txt_1":"AIRA International Advisory (Singapore) Pte. Ltd.",
            "b_s_tag5_txt_1":"AIRA & AIFUL Public Company Limited. ",
            "b_s_tag6_txt_1":"AIRA Property Public Company Limited",
            "b_s_tag7_txt_1":"AIRA Leasing Public Company Limited",
            "b_s_tag8_txt_1":"AIRA Venture Capital Co., Ltd.",
            "b_s_tag9_txt_1":"AIRA Advisory Co., Ltd.",
            "b_s_tag10_txt_1":"Aspiration One Co., Ltd.",
            
            "b_s_tag1_txt_2":"Established as a Company Limited on January 21, 2010<br>and transformed to Public Company on September 9, 2011 as a holding company<br>with the major target to invest in financial business.<br>The company aim to be a leading financial group of companies with an international network.<br>Emphasizing on corporate governance, with the qualified service and<br>creating an appropriate return to shareholders, at the same time,<br>taking well care of employees benefit.",
            "b_s_tag2_txt_2":"The company hold 99% of share.<br>AIRA Securities  receives full securities trading license Number 48<br>from The Stock Exchange of Thailand",
            "b_s_tag3_txt_2":"The company hold 71.55% of share.<br>AIRA Factoring provides account receivable factoring service",
            "b_s_tag4_txt_2":"The company hold 90% of shares,<br>provides international advisory, Merger and Acquisition for South East Asia Area,<br> the head office located in Singapore.",
            "b_s_tag5_txt_2":"The company hold 30% of shares.<br> AIRA & AIFUL Public Company Limited provides personal loan service in Thailand.",
            "b_s_tag6_txt_2":"The company hold 60% of shares.<br> AIRA Property Public Company Limited provides property development business.",
            "b_s_tag7_txt_2":"The company hold 80% of shares,<br>Providing leasing services for personal and corporation",
            "b_s_tag8_txt_2":"Provides venture capital service in order to respond the government policy",
            "b_s_tag9_txt_2":"Provides full advisory service for finance and accounting,<br>refinancing ,Merger and Acquisition, tax and training",
            "b_s_tag10_txt_2":"As a subsidiary of AIRA Property as 60% of shares<br>to manage high office building business"
        },
        "jp": {
            "_m_b1": "<div class='txt_jp'>グループ会社</div>",
            "_m_b2": "<div class='txt_jp'>会社概要</div>",
            "_m_b3": "<div class='txt_jp'>サービス<br>インフォメーション</div>",
            "_m_b4": "<div class='txt_jp'>投資家向け広報<br>(IR)</div>",
            "_m_b5": "<div class='txt_jp'>ニュースとイベント</div>",
            "_m_b6": "<div class='txt_jp'>コーポレート<br>ガバナンス</div>",
            "_m_b7": "<div class='txt_jp'>企業の社会的責任<br>(CSR)</div>",
            
            "a_n_title": "概要",
            "a_n_1": "AIRA Capital Public<br>Company Limited",
            "a_n_2": "AIRA Securities Public<br>Company Limited",
            "a_n_3": "AIRA Factoring Public<br>Company Limited",
            "a_n_4": "AIRA International Advisory<br>( Singapore ) Pte.Ltd.",
            "a_n_5": "AIRA & AIFUL Public<br>Company Limited.",
            "a_n_6": "AIRA Property Public<br>Company Limited",
            "a_n_7": "AIRA Leasing Public<br>Company Limited",
            "a_n_8": "AIRA Venture Capital Limited",
            "a_n_9": "AIRA Advisory Company Limited",
            "a_n_10": "Aspiration One Company Limited",
            
            
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
            "n_a_m_tag1_t_1":"บริษัท ไอร่า แคปปิตอล จำกัด (มหาชน) ร่วมบริจาคในงานกาชาดคอนเสิร์ต ครั้งที่ 43 ประจำปี 2559  เนื่องในโอกาสมหามงคลเสด็จเถลิงถวัลยราชสมบัติครบ 70 ปี และเฉลิมพระเกียรติสมเด็จพระนางเจ้าฯ พระบรมราชินีนาถ เนื่องในโอกาส มหามงคลเฉลิมพระชนมพรรษา 7 รอบ รายได้โดยเสด็จพระราชกุศลบำรุงสภากาชาดไทย jp",
            "n_a_m_tag2_t_1":"ตัวแทนคณะผู้บริหาร บริษัท ไอร่า แคปปิตอล จำกัด (มหาชน) และบริษัทในเครือร่วมกันจัดโครงการช่วยเหลือสังคม เพื่อเป็นส่วนหนึ่งของการพัฒนาสังคม และสิ่งแวดล้อมสู่การพัฒนาอย่างยั่งยืน ตามแนวคิดด้าน CSR ของตลาดหลักทรัพย์ แห่งประเทศไทย โดยในปีนี้ บริษัทได้จัด “โครงการไอร่าเพื่อสังคม สู่การพัฒนาอย่างยั่งยืน” เป็นปีที่ 2 ขึ้นที่โรงเรียนปากคลองชวดใหญ่ อ.บางบ่อ จ.สมุทรปราการ โดยได้มอบทุนการศึกษาหนังสืออุปกรณ์การเรียนและอุปกรณ์กีฬาให้กับโรงเรียนที่ห่างไกล เมื่อวันที่ 15 กรกฎาคม 2559 jp",
            "n_a_m_tag3_t_1":" ",
            
              "n_a_m_tag1_i1":"คณะกรรมการบริษัท ร่วมแถลงผลการดำเนินงาน ในการประชุมสามัญผู้ถือหุ้น ประจำปี 2559  พร้อมเปิดตัวประธานกรรมการบริหาร บริษัท ไอร่า แคปปิตอล จำกัด (มหาชน) คุณปกรณ์ มาลากุล ณ อยุธยา เมื่อวันที่ 25 เมษายน 2559 ณ ห้องบุษบา โรงแรมแมนดาริน สามย่าน",
            "n_a_m_tag1_i2":"บริษัท ไอร่า แคปปิตอล จำกัด (มหาชน) ผนึกกำลังเซ็นสัญญาความร่วมมือทางธุรกิจ กับบริษัท Kenedix Asia Private Limited บริษัทจัดการกองทุนและบริหารสินทรัพย์ชั้นนำจากประเทศญี่ปุ่น และ บริษัท Eugene Investment & Securities กลุ่มบริษัทการเงิน และวัสดุก่อสร้างชั้นนำจากประเทศเกาหลี และ เพื่อต่อยอด เสริมความแข็งแกร่งทางธุรกิจด้านอสังหาริมทรัพย์ให้กับกลุ่มบริษัทในอนาคต",
            "n_a_m_tag1_i3":"บริษัท ไอร่า แคปปิตอล จำกัด (มหาชน) ร่วมบริจาคในงานกาชาดคอนเสิร์ต ครั้งที่ 43 ประจำปี 2559 เนื่องในโอกาสมหามงคลเสด็จเถลิงถวัลยราชสมบัติครบ 70 ปี และเฉลิมพระเกียรติสมเด็จพระนางเจ้าฯ พระบรมราชินีนาถ เนื่องในโอกาสมหามงคลเฉลิมพระชนมพรรษา 7 รอบ รายได้โดยเสด็จพระราชกุศลบำรุงสภากาชาดไทย",
            "n_a_m_tag1_i4":"ผลการแข่งขันฟุตบอล สิงห์โบรกเกอร์คัพ ชิงถ้วยพระราชทาน สมเด็จพระเทพรัตนราชสุดา ฯ สยามบรมราชกุมารี  ซึ่งทีมไอร่า โดยบริษัทหลักทรัพย์ ไอร่า จำกัด (มหาชน) สามารถคว้าแชมป์ชนะเลิศอันดับ 1 มาได้เป็นผลสำเร็จ โดยการเอาชนะบริษัทหลักทรัพย์ กรุงศรี 3:0 ประตู เมื่อเร็วๆ นี้",
            "n_a_m_tag1_i5":"ตัวแทนคณะผู้บริหาร บริษัท ไอร่า แคปปิตอล จำกัด (มหาชน) และบริษัทในเครือร่วมกันจัดโครงการช่วยเหลือสังคม เพื่อเป็นส่วนหนึ่งของ การพัฒนาสังคมและสิ่งแวดล้อมสู่การพัฒนาอย่างยั่งยืน ตามแนวคิดด้าน CSR ของตลาดหลักทรัพย์แห่งประเทศไทย โดยในปีนี้ บริษัทได้จัด “โครงการไอร่าเพื่อสังคม สู่การพัฒนาอย่างยั่งยืน” เป็นปีที่ 2 ขึ้นที่โรงเรียนปากคลองชวดใหญ่ อ.บางบ่อ จ.สมุทรปราการ โดยได้มอบทุน การศึกษา หนังสือ อุปกรณ์การเรียน และอุปกรณ์กีฬาให้กับโรงเรียนที่ห่างไกล เมื่อวันที่ 15 กรกฎาคม 2559",
            "n_a_m_tag1_i6":"ผลการแข่งขันแบดมินตันชิงถ้วยพระราชทานสมเด็จพระเทพฯ “Broker Badminton Championship” ปีที่ 6 เมื่อวันเสาร์ที่ 20 - 21 กุมภาพันธ์  2559 ที่ผ่านมา  บล.ทิสโก้ ได้รับรางวัลถ้วยพระราชทานฯ จากผลรวมคะแนนอันดับ 1 ส่วนทางไอร่า นั้นถือว่าเป็นปีแรกที่ได้เข้าร่วม รายการแข่งขัน  และสามารถผ่านเข้ารอบ 8 ทีม และ 16 ทีม ในหลายๆประเภท จากทั้งหมด 29 ทีม ซึ่งจะเป็นแรงผลักดันให้นักแบดมินตันไอร่า มุ่งมั่นฝึกซ้อมเพื่อคว้าเหรียญรางวัลมาให้ได้ในรายการแข่งขันต่อๆไป",


            "a_d_m_1":". --ビジョン—   / ミッション " ,
            "a_d_m_2":"沿革",
            "a_d_m_3":"組織図 ",
            "a_d_m_4":"運営構成",
            "a_d_m_5":"投資家情報",
            
            "a_d_tag1":"--ビジョン—",
            "a_d_tag1_2":"ミッション",
            "a_d_tag2":"ประวัติบริษัท",
            "a_d_tag3":"組織図",
            "a_d_tag4":"運営構成",
            "a_d_tag5":"投資家情報",
            "a_d_tag1_1":"--ビジョン—",
            "a_d_tag1_txt_1":"AIRA Capital Public Company Limitedは様々な金融サービス<br>・プロダクトを提供する包括的、国際的なネットワークのファイナンシャルグループを目指している。",
            "a_d_tag1_txt_2":"企業倫理に基づいて、ステークホルダーに対し最大限の経営成果を還元すること。",
            
            
            
            "a_d_tag2_txt_1":"AIRA Capital Plc. は AIRA Venture Capital Limited を2千万バーツの登録資本金で設立 AIRA Capital Plc. は Kenedix Asia Pte. Ltd. および Eugene Investment & Securities Co., Ltd. と AIRA Property Co., Ltd. に投資する合弁契約を締結。 AIRA Capital Plc.は Travelex Limited と合弁で外貨両替ビジネスを運営する Travelex (Thailand) Limited を1.1億バーツの登録資本金で設立 AIRA Capital Plc.は Rent-A-V Co., Ltd.を買収し、AIRA Leasing Plc. に変更 Aspiration One Co., Ltd. はレンタル・オフィスビルの建築のため、王室財産事務局から30年の契約でラーチャテーウィーエリアの借地権を取得 AIRA Property Co., Ltd.の払込資本金を5億バーツに増資し、Public Company Limited に変更",
            "a_d_tag2_txt_2":"AIRA Capital Plc.はKenedix Asia Pte. Ltd.およびEugene Investment & Securities Co., Ltd.とAIRA Property Co., Ltd.に投資する合弁契約を締結",
            "a_d_tag2_txt_3":"AIRA Capital Plc.はTravelex Limitedと合弁で外貨両替ビジネスを運営するTravelex (Thailand) Limitedを1.1億バーツの登録資本金で設立 ",
            "a_d_tag2_txt_4":"AIRA Capital Plc.はRent-A-V Co., Ltd. を買収し、AIRA Leasing Plc.に変更",
            "a_d_tag2_txt_4_1":"Aspiration One Co., Ltd.はレンタル・オフィスビルの建築のため、王室財産事務局から30年の契約でラーチャテーウィーエリアの借地権を取得",
            "a_d_tag2_txt_4_2":"AIRA Property Co., Ltd.の払込資本金を5億バーツに増資し、Public Company Limitedに変更",
            "a_d_tag2_txt_5":"AIRA Property Co., Ltd.はSENA Development Plc.およびSangfah Construction & Engineering Co., Ltd. と提携し、不動産開発を扱うAspiration One Co., Ltd.を設立し、同社の60％の株を保有",
            "a_d_tag2_txt_6":"AIRA Property Co., Ltd.を２億バーツの資本金で設立",
            "a_d_tag2_txt_7":"AIRA Capital Plc.は、日本のアイフル株式会社と合弁契約を締結し、AIRA & AIFUL Plc.の30％の株を保有",
            "a_d_tag2_txt_7_1":"AIRA Capital Plc.をMAI市場に上場",
            "a_d_tag2_txt_8":"AIRA Capital Plc.の払込資本金を10億バーツに増資",
            "a_d_tag2_txt_8_1":"シンガポールで金融系アドバイザリーを扱うAIRA International Advisory (Singapore) Pte., Ltd.を設立",
            "a_d_tag2_txt_9":"AIRA Capital Co., Ltd.をPublic Company Limitedに変更",
            "a_d_tag2_txt_10":'Dhanamitr Factoring Plc.を買収し、AIRA Factoring Plc.に変更p"',
            "a_d_tag2_txt_11":"AIRA Capital Co., Ltd.の払込資本金を7億7918万バーツに増資",
            "a_d_tag2_txt_12":"6億2335万バーツの資本金でAIRA Capital Co., Ltd.を設立後、AIRA Securities Plc.の株をAIRA Capital Company Limited が99.99％保有",
            "a_d_tag2_txt_13":"・Securities Borrowing & Lending（SBL）の事業開始<br> Securities and Exchange Commission（SEC）証券取引委員会のライセンスを取得し、プライベートファンドを組成・運用<br>・Global Trading Businessの事業を第二四半期に開始",
            "a_d_tag2_txt_13_1":"3つの子会社を合併させ、資本金を２千万バーツから３千万バーツに増資し、AIRA Advisory Co., Ltd.を設立",
            "a_d_tag2_txt_14":"AIRA Securities Plc.はTFEX licenseを取得し、Securities Business Licenseのtype Aを取得",
            "a_d_tag2_txt_14_1":"AIRA Securities Plc.の登録資本金を7億2千万バーツに増資",
            "a_d_tag2_txt_15":"AIRA Securities Plc.の払込資本金を6億バーツに増資",
            "a_d_tag2_txt_16":"AIRA Securities Co., Ltd.をPublic Company Limitedに変更",
            "a_d_tag2_txt_16_1":"AIRA Securities Co., Ltd.の第1支店を出店",
            "a_d_tag2_txt_17":"AIRA Securities Co., Ltd.の資本金を５億バーツに増資",
            "a_d_tag2_txt_18":"タイ証券取引所の48番号のブローカー許可証を持つ証券会社を買収し、経営構成を変更後、AIRA Securities Company Limitedに商号変更",
            "a_d_tag5_txt_1":"<b>投資家情報</b>",
            "a_d_tag5_txt_2":"当社の取締役会がInvestor Relations (IR)を選任しました。<br> IRは投資家、機関投資家、一般投資家、アナリスト、当該の国営機関の皆さまへの正確かつ有用な情報提供窓口としてご利用いただけます。<br>Tel: 02-684-8981  Fax: 02-684-8980",
            
            
            "a_d_tag1_l1_1_1":"株主",
            "a_d_tag1_l1_1_2":"株主に最大限の利益を還元する",
            "a_d_tag1_l1_2_1":"社員",
            "a_d_tag1_l1_2_2":"社員の可能性を育成し、良い生活をサポートする",
            "a_d_tag1_l1_3_1":"競合会社",
            "a_d_tag1_l1_3_2":"規則・法律に従い、同業他社と競合する",
            "a_d_tag1_l1_4_1":"顧客",
            "a_d_tag1_l1_4_2":"顧客満足度最高のサービスを提供する",
            
            "a_d_tag1_l2_1_1":"債権者",
            "a_d_tag1_l2_1_2":"​契約書と契約条件に厳しく公平に従う",
            "a_d_tag1_l2_2_1":"コンプライアンス機関<br>と政府機関",
            "a_d_tag1_l2_2_2":"当該機関が定めた法律・基準の下で厳し く運営を行い、全ての汚職を拒否する",
            "a_d_tag1_l2_3_1":"社会",
            "a_d_tag1_l2_3_2":"社会と環境をサポートする",
            
            
            "b_s_m_1":"AIRA Capital",
            "b_s_m_2":"AIRA Securities",
            "b_s_m_3":"AIRA Factoring",
            "b_s_m_4":"AIRA International Advisory",
            "b_s_m_5":"AIRA & AIFUL",
            "b_s_m_6":"AIRA Property",
            "b_s_m_7":"AIRA Leasing",
            "b_s_m_8":"AIRA Venture Capital",
            "b_s_m_9":"AIRA Advisory",
            "b_s_m_10":"Aspiration One",
            "b_s_title_1":"概要",
            "b_s_tag1_txt_1":"AIRA Capital Public Company Limited",
            "b_s_tag2_txt_1":"AIRA Securities Public Company Limited",
            "b_s_tag3_txt_1":"AIRA Factoring Public Company Limited",
            "b_s_tag4_txt_1":"AIRA International Advisory (Singapore) Pte. Ltd.",
            "b_s_tag5_txt_1":"AIRA & AIFUL Public Company Limited.",
            "b_s_tag6_txt_1":"AIRA Property Public Company Limited",
            "b_s_tag7_txt_1":"AIRA Leasing Public Company Limited",
            "b_s_tag8_txt_1":"AIRA Venture Capital Co., Ltd.",
            "b_s_tag9_txt_1":"AIRA Advisory Co., Ltd.",
            "b_s_tag10_txt_1":"Aspiration One Co., Ltd.",
            
            "b_s_tag1_txt_2":"2010年1月21日にCompany Limitedとして設立され、2011年9月9日にPublic Company Limited<br>に変更された、金融系企業の株式を保有するホールディングカンパニーである。その目的は様々な金融サービス<br>・プロダクトを提供する包括的、国際的なネットワークのファイナンシャルグループを目指すことと、<br>企業倫理のあるマネージメントに重点を置いて、株主や社員に対し経営成果を還元することである。",
            "b_s_tag2_txt_2":"の株を99.99%保有している。<br>そこにAIRA Advisory Company Limitedという子会社がある。AIRA Securities Public Company Limited<br>はタイ証券取引所の48番号のブローカー許可証を保有している。",
            "b_s_tag3_txt_2":"の株を71.55%保有している。AIRA Factoring Public Company Limited<br> はファクタリングを通じて短期運転資金を経営者に提供する事業を行っている。<br>事業運営に十分な運転資金を提供することにより、顧客に安心いただけるサービスを提供している。",
            "b_s_tag4_txt_2":"の株を90%保有している。東南アジ<br>アにおけるM&Aなど幅広いビジネスのコンサルティングサービスを提供している。シンガポールにオフィスを構えている。",
            "b_s_tag5_txt_2":"の株を30%保有している。タイにおける消費者金融サービスを行っている。",
            "b_s_tag6_txt_2":"の株を60%保有している。不動産開発の事業を行っている。",
            "b_s_tag7_txt_2":"の株を80%保有している。<br>個人・法人にハイヤー・パーチェスやリースの事業をしている。",
            "b_s_tag8_txt_2":"の株を100%保有している。<br>公共との投資をサポートするための共同投資の事業をしている。",
            "b_s_tag9_txt_2":"は財務・会計、債務再編、M&A、税関系、社内研修など幅広いビ<br>ジネスのコンサルティングサービスを提供している。当社のサービスは公共・民間を問わず、<br>金融機関、上場株式会社や中小企業および個人事業など包括的に実施している。",
            "b_s_tag10_txt_2":"の株を60%保有している。<br>レンタル・オフィス向けの高層ビルを中心とした不動産開発の事業をしている"
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

           changeBg();

        }else if(this.id !="th" || this.id !="en" || this.id !="jp"){
            $("#"+ idOld +'_img').attr("src",'images/menu/'+ idOld +"_action.png");
            $("#"+ idOld +'_txt').addClass('menu_action');

            $(".font").removeClass("font_"+lang);
            $("#"+lang+"_img").css('background-image', 'url(images/menu/bu_'+ lang +'.png)');
             lang = this.id;
            set_lang(dictionary[this.id]);
            $("#"+this.id+"_img").css('background-image', 'url(images/menu/bu_'+ this.id +'_action.png)');
           
            aira_data();
        }
    });
    
    
    function changeBg(){
       // alert("changeBg  --- page " +idOld );
        
        if ( $( "#carousel_1" ).hasClass( "active" ) ) {
            //alert("---1---");
            $("#carousel_img_1").attr("src","images/index/bg_"+idOld+".jpg");
        }else if($( "#carousel_2" ).hasClass( "active" ) ){
           // alert("---2---");
            $("#carousel_img_2").attr("src","images/index/bg_"+idOld+".jpg");
        }else if($( "#carousel_3" ).hasClass( "active" ) ){
            //alert("---3---");
            $("#carousel_img_3").attr("src","images/index/bg_"+idOld+".jpg");
        }else if($( "#carousel_4" ).hasClass( "active" ) ){
            //alert("---4---");
            $("#carousel_img_4").attr("src","images/index/bg_"+idOld+".jpg");
        }
           //bg_aira_network
    }
    
    
    function aira_data(){
       
        $("#url_map").attr("href",url_map);
        $("#img_flow").attr("src",img_flow+"_"+lang+".png");
        $("#img_map").attr("src",img_map+"_"+lang+".png");
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
         
        $(".font").addClass("font_"+lang);
        
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





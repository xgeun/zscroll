$(function(){
    // 1.페이지 로딩시 제일 상단으로 스크롤 이동 
      //스크롤이 0으로 가서 스톱하라
    $("body, html").stop().animate({"scrollTop":0},1500,"swing");
  
      //1. 변수 scroll에 현재 scrollTop의 위치값을 저장하고 h1에 텍스트로 출력
      $(window).on("scroll", function(){
        var scroll = $(this).scrollTop();
        $("h1").text(scroll);
  
        //for : 반복문 (변수 초기값; 조건문; 증감식)
      for(var i =0; i<5; i++){
        $("section>article").eq(i).css({"transform":"translateZ(" + parseInt((-5000*i)+ scroll) + "px)"});
        if(scroll >= i*5000 && scroll < (i +1)*5000){
            $(".scrollNavi li").removeClass('on');
            $(".scrollNavi li").eq(i).addClass('on');
            $("article").removeClass('on');
            $("article").eq(i).addClass('on');
        };
    };
  
    //parseInt() 함수는 문자열을 숫자열로 반환
    //1, 변수 i의 초기값은 0이며 i가 5보다 작을 때, 곧 4일 때까지 다음 구문 실행
    //2. 각 article의 인덱스는 z축으로 (-5000*인덱스)+ scroll(현재스크롤 위치값)으로 이동하고 다음 조건식 실행
    //3. scroll(현재스크롤 위치값)이 (해당 인덱스 * 5000)보다 크거나 작고, (해당인덱스 +1 ) * 5000 보다 작으면 true를 반환하여 다음{} 구문 실행
  
  
  
  
    // 3. 스크롤 네비게이션 클릭시 스크롤 이동
    $(".scrollNavi li").on("click", function(){
      var a = $(this).index();
      $("body, html").stop().animate({"scrollTop":5000 * a}, 1500, "swing");
    });
  
  
    
     
        //화면에서 마우스 무브시 박스안에 콘텐츠 움직이기
        $("body").on("mousemove", function(e){
          var posX = e.pageX/50; //변수 posX에는 현재 화면상의 마우스커서의 X축위치를, 
          var posY = e.pageY/70; //변수 posY에는 현재 화면상의 마우스커서의 Y축위치를 저장하고 이때 해당수치의 변화폭을 죽이기위해 각각100과 150으로 나눠줌
         
          $(".obj11").css({"left":-270+posX, "bottom":-85+posY});
          $(".obj12").css({"right":-593-posX, "top":-85-posY});
          $(".obj13").css({"left":-100-posX, "bottom":20+posY});
          $(".obj21").css({"left":-710+posX, "bottom":-450+posY});
          $(".obj22").css({"right":-50-posX, "bottom":100+posY});
          $(".obj31").css({"left":110-posX, "bottom":70-posY});
          $(".obj32").css({"right":100-posX, "bottom":-160+posY});
          $(".obj41").css({"left":350+posX, "bottom":150+posY});
          $(".obj42").css({"right":167-posX, "bottom":-255-posY});
          $(".obj43").css({"right":-100+posX, "bottom":-120+posY});
          $(".obj51").css({"left":-100+posX, "bottom":-290+posY});
          $(".obj52").css({"right":30+posX, "top":170-posY});
          $(".obj53").css({"left":-30+posX, "bottom":0-posY});
   
        });
        });
      });
   
  
   
  
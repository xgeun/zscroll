    gsap.registerPlugin(ScrollTrigger); //스크롤트리거를 원활하게 하겠다.

    //01. x축 가로스크롤
    let list = gsap.utils.toArray('.two .list li'); //('.two .list li')가 배열화 되서 변수 리스트에게 가는...
    let listA = gsap.utils.toArray('.two .list .a');
    let listB = gsap.utils.toArray('.two .list .b');
    let listC = gsap.utils.toArray('.two .list .c');
    
    let scrollTween = gsap.to(list, {
      xPercent: -100 * (list.length - 1), //리스트 총길이 - 1
      ease : 'none',
      scrollTrigger: {
        trigger : ".two", //트리거의 대상
        pin: true, // 고정하겠다
        scrub: 1,
        end: "200%",
        markers: true
      } 
    });


    gsap.to(listA, {
      scrollTrigger : {
        trigger: ".two",
        /* pin: true, */
        scrub: 1,
        end: "200%" // 트리거 영역을 어디까지 이동해야 트윈이 끝나는지 설정합니다.
      }
    });

    
    gsap.to(listB, {
      scrollTrigger : {
        trigger: ".two",
        /* pin: true, */
        scrub: 1,
        end: "200%"
      }
    });

    
    gsap.to(listC, {
      scrollTrigger : {
        trigger: ".two",
        /* pin: true, */
        scrub: 1,
        end: "200%"
      }
    });
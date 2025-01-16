// lenis 스크롤 부드럽게
const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 800)
})

gsap.ticker.lagSmoothing(0)

// 인트로 영역
const splitLines2 = new SplitType('#content .text_effect', {types: 'lines'});

gsap.from('header',{autoAlpha:0,yPercent:-50,duration:2,delay:.5})
gsap.from('.sc_visual .group_visual_thumb',{autoAlpha:0,scale:1.2,duration:2,delay:.5})
gsap.from('.visual_bottom',{autoAlpha:0,duration:2,delay:.5})
gsap.from('.sc_visual .visual_title .line',{autoAlpha:0,yPercent:-30,stagger:0.3,duration:.7,delay:.3})
gsap.from('.sc_visual .visual_btn',{autoAlpha:0,yPercent:-30,stagger:0.5,duration:.7,delay:.3})
gsap.from('.sc_visual .visual_text .line',{autoAlpha:0, stagger:0.3,duration:.7,delay:.3})

const introTl = gsap.timeline({
  scrollTrigger:{
    trigger: ".sc_visual",
    start: '0% 0%',
    endTrigger:".sc_calibre",
    end: '50% 50%',
    //markers: true,
    scrub:0,
  }
})
introTl
.to('.sc_visual .group_visual_thumb',{rotate:5,scale:2.5})


// 딤드 공통
$('#content section').each(function(i,el){
  const manifestoTl = gsap.timeline({
    scrollTrigger:{
      trigger: el,
      start: '0% 100%',
      end: '0% 0%',
      //markers: true,
      scrub:0,
    }
  })
  manifestoTl
  .to($(el).find('.dimmed'),{ opacity:0, })
})

// 헤더 색 변환
const backplateTl3 = gsap.timeline({
  scrollTrigger:{
    trigger: ".sc_backplate",
    start: '80% 80%',
    end: '100% 100%',
    //markers: true,
    scrub:0,
    toggleClass: {
      className: "dark",
      targets: "#header"
    }
  }
})

// 헤더 색 변환
ScrollTrigger.create({
  trigger:".sc_manifesto",
  start:"0% 0%",
  endTrigger:".sc_backplate",
  end:"15% 20%",
  //markers:true,
  toggleClass:{
    targets:"#header",
    className:"dark"
  }
})

// 헤더 색 변환
ScrollTrigger.create({
  trigger:".sc_engraved",
  start:"0% 0%",
  endTrigger:".sc_crown",
  end:"40% 40%",
  //markers:true,
  toggleClass:{
    targets:"#header",
    className:"dark"
  }
})

// 헤더 색 변환
ScrollTrigger.create({
  trigger:".sc_reassurance",
  start:"20% 20%",
  endTrigger:".sc_order",
  end:"5% 5%",
  //markers:true,
  toggleClass:{
    targets:"#header",
    className:"dark"
  }
})


// reassurance 버튼영역
$('.specs_btn').click(function(){
  $('.specs_content').toggleClass('close');
  $('.specs_btn-ic:nth-of-type(2)').toggleClass('close');
  $('.specs_btn-ic:nth-of-type(1)').toggleClass('close');
})


// 이미지 시퀀스 공통

sequenceMotion('#canvas01',1100,1956,311,'image_sequence','.sc_calibre .image_sequence_container','0% 100%','100% 100%')
sequenceMotion('#canvas02',1606,852,154,'image_sequence02','.sc_backplate','0% 100%','100% 100%')
sequenceMotion('#canvas03',1300,731,89,'image_sequence03','.sc_material .sticky_container','0% 100%','100% 100%')
sequenceMotion('#canvas04',1100,1956,165,'image_sequence04','.sc_engraved','0% 100%','100% 100%')

/**
 * 
 * @param {*} frame 
 * @param {*} w 
 * @param {*} h 
 * @param {*} total 
 * @param {*} src 
 * @param {*} triggerEl 
 * @param {*} triggerStart 
 * @param {*} triggerEnd 
 */
function sequenceMotion(frame,w,h,total,src,triggerEl,triggerStart,triggerEnd){
    const canvas = document.querySelector(frame);
    const ctx = canvas.getContext('2d');
    
    canvas.width = w;
    canvas.height = h;
    
    const frameCount = total;
    
    const currentFrame = (idx) => {
      return `asset/${src}/${idx.toString().padStart(4, '0')}.webp`;
    }; // 리턴 필수
    
    const images = [];
    const card = {
      frame: 0,
    };
    
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i + 1);
      images.push(img);
    }
    
    seqMotion = gsap.timeline({
      scrollTrigger: {
        trigger: triggerEl,
        scrub: 0,
        start: triggerStart,
        end: triggerEnd,
        //markers: true,
        onUpdate:function(self){
          // console.log(Math.floor(self.progress*frameCount));
    
        }
      },
    })
    seqMotion.to(card,{
      frame: frameCount - 1,
      snap: 'frame',
      ease: 'none',
      onUpdate: render,
    });
    
    images[0].onload = render;
    
    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(images[card.frame], 0, 0 ,canvas.width, canvas.height);
    }
}

// 이미지 시퀀스 1
const splitLines = new SplitType('.sticky_container .text_effect', {types: 'lines'});

gsap.set('#calibreTxt1',{autoAlpha:0})
gsap.set('#calibreTxt2',{autoAlpha:0})
gsap.set('#calibreTxt3',{autoAlpha:0})

gsap.set('#calibretitle1',{autoAlpha:0})
gsap.set('#calibretitle2',{autoAlpha:0})
gsap.set('.head_line_area.bottom',{autoAlpha:0})

gsap.set('.sc_calibre .hotspot_area:nth-child(1)',{autoAlpha:0, scale:0})
gsap.set('.sc_calibre .hotspot_area:nth-child(2)',{autoAlpha:0, scale:0})
gsap.set('.sc_calibre .hotspot_area:nth-child(3)',{autoAlpha:0, scale:0})

gsap.set('.sticky_container .text_effect .line',{ opacity:0})

textShow1 = gsap.to('#calibreTxt1',{ paused:true, autoAlpha:1 })
headlineShow1 = gsap.to('#calibretitle1',{ paused:true, autoAlpha:1 })
spotShow1  = gsap.to('.sc_calibre .hotspot_area:nth-child(1)',{ paused:true, autoAlpha:1,scale:1 })

textShow2 = gsap.to('#calibreTxt2',{ paused:true, autoAlpha:1 })
headlineShow2 = gsap.to('.head_line_area.bottom',{ paused:true, autoAlpha:1 })
spotShow2 = gsap.to('.sc_calibre .hotspot_area:nth-child(2)',{ paused:true, autoAlpha:1,scale:1 })

textShow3 = gsap.to('#calibreTxt3',{ paused:true, autoAlpha:1 })
spotShow3 = gsap.to('.sc_calibre .hotspot_area:nth-child(3)',{ paused:true, autoAlpha:1,scale:1 })

headlineShow3 = gsap.to('#calibretitle2',{ paused:true, autoAlpha:1 })

stakShow1 = gsap.to('.hotspot_info_area.left_bottom .text_effect .line',{ opacity:1, stagger:0.3, paused:true})
stakShow2 = gsap.to('#calibretitle1 .text_effect .line',{ opacity:1, stagger:0.3, paused:true})
stakShow3 = gsap.to('#calibreTxt2 .text_effect .line',{ opacity:1, stagger:0.3, paused:true})
stakShow4 = gsap.to('#calibreTxt3 .text_effect .line',{ opacity:1, stagger:0.3, paused:true})
stakShow5 = gsap.to('.head_line_area.bottom .text_effect .line',{ opacity:1, stagger:0.3, paused:true})
stakShow6 = gsap.to('#calibretitle2 .text_effect .line',{ opacity:1, stagger:0.3, paused:true})


avx = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc_calibre',
    scrub: 0,
    start: "0 100%",
    end: "100% 100%",
    //markers: true,
    onUpdate:function(self){
      idx = Math.floor(self.progress*311);


      if(idx>=80){
        textShow1.play();
        headlineShow1.play();
        spotShow1.play();
        stakShow1.play();
        stakShow2.play();
      }else{
        textShow1.reverse();
        headlineShow1.reverse();
        spotShow1.reverse();
        stakShow1.reverse();
        stakShow2.reverse();
      }

      if(idx>=100){
        textShow2.play();
        textShow1.reverse();
        headlineShow1.reverse();
        spotShow2.play();
        spotShow1.reverse();
        stakShow1.reverse();
        stakShow2.reverse();
        
        stakShow3.play();
      }else{
        textShow2.reverse();
        spotShow2.reverse();
        stakShow3.reverse();
      }

      if(idx>=120){
        spotShow3.play();
        textShow2.reverse();
        textShow3.play();
        spotShow2.reverse();
        stakShow4.play();
        stakShow3.reverse();
      }else{
        spotShow3.reverse();
        textShow3.reverse();
        stakShow4.reverse();
      }

      if(idx>=140){
        spotShow3.reverse();
        textShow3.reverse();
        stakShow4.reverse();
      }else{
        headlineShow2.reverse();
      }

      if(idx>=160){
        headlineShow2.play();
        stakShow5.play();
      }else{
        headlineShow2.reverse();
        stakShow5.reverse();
      }

      if(idx>=180){
        headlineShow2.reverse();
        stakShow5.reverse();
        stakShow6.play();
      }else{
        headlineShow3.reverse();
        stakShow6.reverse();
      }

      if(idx>=230){
        headlineShow3.play();
        headlineShow2.reverse();
      }else{
        headlineShow3.reverse();
        stakShow6.reverse();
      }

    }
  },
})

gsap.set('#canvas01',{y:'30vh',scale:'1.5'})

sequence1 = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc_calibre',
    scrub: 0,
    start: "0 100%",
    end: "100% 100%",
    //markers: true,
  },
})
sequence1.to('#canvas01',{y:'50vh',scale:'1'})
sequence1.to('#canvas01',{y:'30vh'})
sequence1.to('#canvas01',{y:'-37vh',scale:'.7'})
sequence1.to('#canvas01',{y:'10vh'})
sequence1.to('#canvas01',{y:'10vh'})


// 이미지 시퀀스 2
gsap.set('.backplate_title_box .line',{autoAlpha:0})
gsap.set('.backplate_title_desc .line',{autoAlpha:0})
gsap.set('.backplate_label_area',{autoAlpha:0})
gsap.set('.backplate_info_box .line',{autoAlpha:0})

bptextShow1 = gsap.to('.backplate_title_box .line',{ paused:true, autoAlpha:1, stagger:0.2 })
bpdescShow1 = gsap.to('.backplate_title_desc .line',{ paused:true, autoAlpha:1,stagger:0.2 })
bptextShow2 = gsap.to('.backplate_label_area',{ paused:true, autoAlpha:1})
bpdescShow2 = gsap.to('.backplate_info_box .line',{ paused:true, autoAlpha:1,stagger:0.2 })
bodyColor = gsap.to('.sc_backplate',{ "--bg-white": "#e6e6e6",paused:true})


backplateTl4 = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc_backplate',
    scrub: 0,
    start: "0 0%",
    end: "100% 100%",
    //markers: true,
    onUpdate:function(self){
      idx = Math.floor(self.progress*154);


      if(idx>=70){
        bptextShow1.play();
        bpdescShow1.play();
      }else{
        bptextShow1.reverse();
        bpdescShow1.reverse();
      }

      if(idx>=90){
        bptextShow1.reverse();
        bpdescShow1.reverse();
      }else{

      }

      if(idx>=94){
        bodyColor.play();
      }else{
        bodyColor.reverse();
      }

      if(idx>=101){
        bptextShow2.play();
        bpdescShow2.play();
      }else{
        bptextShow2.reverse();
        bpdescShow2.reverse();
      }

    }
  },
})

// 이미지 시퀀스 3
gsap.set('#canvas03',{scale:'2'})

sequence2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc_material',
    scrub: 0,
    start: "0 100%",
    end: "100% 100%",
    //markers: true,
  },
})
sequence2.to('#canvas03',{scale:"1.5"})

gsap.set('.sc_material .head_line_area.top .line',{autoAlpha:0})
gsap.set('.sc_material .hotspot_info_box .line',{autoAlpha:0})
gsap.set('.sc_material .hotspot_area',{autoAlpha:0,scale:0})

mttextShow1 = gsap.to('.sc_material .head_line_area.top .line',{ paused:true, autoAlpha:1, stagger:0.2 })
mtdescShow1 = gsap.to('.sc_material .hotspot_info_area:nth-child(1) .line',{ paused:true, autoAlpha:1,stagger:0.1 })
mtdescShow2 = gsap.to('.sc_material .hotspot_info_area:nth-child(2) .line',{ paused:true, autoAlpha:1,stagger:0.1 })
mtspotShow1 = gsap.to('.sc_material .hotspot_area',{ paused:true, autoAlpha:1,scale:1})


materialTl10 = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc_material .sticky_container',
    scrub: 0,
    start: "0 0%",
    end: "100% 100%",
    //markers: true,
    onUpdate:function(self){
      idx = Math.floor(self.progress*89);
      // console.log(Math.floor(self.progress*89));

      if(idx>=50){
        mttextShow1.play();
      }else{
        mttextShow1.reverse();
      }

      if(idx>=60){
        mtdescShow1.play();
        mtdescShow2.play();
        mtspotShow1.play();
        $('.group_hotspot_info').addClass('active');
      }else{
        mtdescShow1.reverse();
        mtdescShow2.reverse();
        mtspotShow1.reverse();
        $('.group_hotspot_info').removeClass('active');
      }

    }
  },
})

// 이미지 시퀀스 4

gsap.set('#canvas04',{y:'6vh'})

sequence3 = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc_engraved',
    scrub: 0,
    start: "0% 100%",
    end: "100% 100%",
    //markers: true,
  },
})
sequence3.to('#canvas04',{y:'25vh',scale:'.8'})
sequence3.to('#canvas04',{y:'50vh',scale:'.6'})
sequence3.to('#canvas04',{y:'32vh',scale:'.4'})
sequence3.to('#canvas04',{y:'-50vh'})

gsap.set('#eg_label01',{autoAlpha:0})
gsap.set('#eg_label02',{autoAlpha:0})
gsap.set('#eg_label03',{autoAlpha:0})
gsap.set('.sc_engraved .head_line_area .line',{autoAlpha:0})
gsap.set('.sc_engraved .engraved_info_box .text_effect .line',{autoAlpha:0})

eglabelShow1 = gsap.to('#eg_label01',{ paused:true, autoAlpha:1})
eglabelShow2 = gsap.to('#eg_label02',{ paused:true, autoAlpha:1})
eglabelShow3 = gsap.to('#eg_label03',{ paused:true, autoAlpha:1})
egtextShow1 = gsap.to('.sc_engraved .head_line_area .line',{ paused:true, autoAlpha:1,stagger:0.2})
egtextShow2 = gsap.to('.sc_engraved .engraved_info_box .text_effect .line',{ paused:true, autoAlpha:1,stagger:0.2})


// 이미지 시퀀스4의 숫자 영역
const counter1 = document.getElementById('counter1');
const counter2 = document.getElementById('counter2');
const counter3 = document.getElementById('counter3');
const counter4 = document.getElementById('counter4');

numberMotion1 = gsap.to({ value: 0 }, {
  paused:true,
  value: 10.74,
  duration: 2, // 애니메이션 지속 시간 (초)
  ease: "power1.out", // 이징 효과
  onUpdate: function () {
    // 현재 값을 소수점 2자리로 고정하여 업데이트
    counter1.textContent = this.targets()[0].value.toFixed(2);
  }
});
numberMotion2 = gsap.to({ value: 0 }, {
  paused:true,
  value: 11.026,
  duration: 2, // 애니메이션 지속 시간 (초)
  ease: "power1.out", // 이징 효과
  onUpdate: function () {
    // 현재 값을 소수점 2자리로 고정하여 업데이트
    counter2.textContent = this.targets()[0].value.toFixed(2);
  }
});
numberMotion3 = gsap.to({ value: 0 }, {
  paused:true,
  value: 8.95,
  duration: 2, // 애니메이션 지속 시간 (초)
  ease: "power1.out", // 이징 효과
  onUpdate: function () {
    // 현재 값을 소수점 2자리로 고정하여 업데이트
    counter3.textContent = this.targets()[0].value.toFixed(2);
  }
});
numberMotion4 = gsap.to({ value: 0 }, {
  paused:true,
  value: 32.516,
  duration: 2, // 애니메이션 지속 시간 (초)
  ease: "power1.out", // 이징 효과
  onUpdate: function () {
    // 현재 값을 소수점 2자리로 고정하여 업데이트
    counter4.textContent = this.targets()[0].value.toFixed(3);
  }
});

// 이미지 시퀀스4의 타임라인 
engravedTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc_engraved',
    scrub: 0,
    start: "0 100%",
    end: "100% 100%",
    //markers: true,
    onUpdate:function(self){
      idx = Math.floor(self.progress*165);
      // console.log(Math.floor(self.progress*165));


      if(idx>=61){
        egtextShow1.play();
      }else{
        egtextShow1.reverse();
      }
      
      if(idx>=71){
        egtextShow2.play();
      }else{
        egtextShow2.reverse();
      }

      if(idx>=74){
        eglabelShow1.play();
        numberMotion1.play();
        egtextShow2.play();
      }else{
        eglabelShow1.reverse();
        numberMotion1.reverse();
      }

      if(idx>=127){
        eglabelShow2.play();
        numberMotion2.play();
        eglabelShow1.reverse();
        numberMotion1.reverse();
        egtextShow1.reverse();
      }else{
        eglabelShow2.reverse();
        numberMotion2.reverse();
      }

      if(idx>=140){
        eglabelShow3.play();
        numberMotion3.play();
        eglabelShow2.reverse();
        numberMotion2.reverse();
        egtextShow2.reverse();
      }else{
        eglabelShow3.reverse();
        numberMotion3.reverse();
      }

    }
  },
})

engraved_list = gsap.timeline({
  scrollTrigger: {
    trigger: '.group_engraved_desc',
    scrub: 0,
    start: "0% 100%",
    end: "100% 100%",
    //markers: true,
    onUpdate:function(self){
      idx = Math.floor(self.progress*10);

      if(idx>=1){
        numberMotion4.play();
      }else{
        numberMotion4.reverse();
      }
    }
  },
})

// crown 영역
gsap.set('.crown_hotspot_desc .line',{autoAlpha:0})
gsap.set('.crown_info_left .line',{autoAlpha:0})
gsap.set('.crown_info_right .line',{autoAlpha:0})

cwtextShow1 = gsap.to('.crown_hotspot_desc .line',{ paused:true, autoAlpha:1,stagger:0.3})
cwtextShow2 = gsap.to('.crown_info_left .line',{ paused:true, autoAlpha:1,stagger:0.3})
cwtextShow3 = gsap.to('.crown_info_right .line',{ paused:true, autoAlpha:1,stagger:0.3})

crownTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc_crown',
    scrub: 0,
    start: "90% 90%",
    end: "100% 100%",
    //markers: true,
    onUpdate:function(self){
      idx = Math.floor(self.progress*10);

      if(idx>=1){
        cwtextShow1.play();
        cwtextShow2.play();
        cwtextShow3.play();
        $('.crown_hotspot_line').addClass('active');
      }else{
   
      }
    }
  },
})

// spesc의 드래그 영역
const margin = 30;

Draggable.create(".reassurance_wrapper", {
  type: "x",
  bounds:  {
    minX: -document.querySelector(".reassurance_wrapper").offsetWidth 
          + document.querySelector(".reassurance_container").offsetWidth 
          - margin * 2, // 끝에 margin-left 적용
    maxX: 0, // 시작점은 0
  },
  onDrag: function () {
    // 드래그 가능한 전체 범위
    const totalDistance = this.maxX - this.minX;

    // 현재 위치 (this.x는 현재 드래그된 위치)
    const currentDistance = this.x - this.minX;

    // 진행 비율 계산 (1 → 0)
    const progress = 1 - currentDistance / totalDistance;

    // CSS 변수 업데이트
    gsap.set('.reassurance_container', { '--pro': progress.toFixed(2) });

    gsap.to('.instruction', { 
      opacity: 0, // 드래그 중 투명도 0.5로 변경
      duration: 0.3, // 0.3초 동안 부드럽게 전환
      ease: 'power1.out' // 부드러운 이징 효과 적용
    });
  },
  onDragEnd: function () {
    gsap.to('.instruction', { 
      opacity: 1, // 드래그 종료 시 투명도 0으로 변경
      duration: 0.5, // 0.5초 동안 부드럽게 사라짐
      ease: 'power1.inOut' // 부드러운 이징 효과 적용
    });
  },
});

// reassurance 영역
const reassuranceTl = gsap.timeline({
  scrollTrigger:{
    trigger: ".sc_reassurance",
    start: '0% 0%',
    endTrigger: '.sc_order',
    end: '100% 100%',
    //markers: true,
    scrub:0,
  }
})

gsap.set('.sc_reassurance .sub_title_box .line',{autoAlpha:0})
gsap.set('.reassurance_bottom_text .line',{autoAlpha:0})

rstextShow1 = gsap.to('.sc_reassurance .sub_title_box .line',{ paused:true, autoAlpha:1,stagger:0.3})
rstextShow2 = gsap.to('.reassurance_bottom_text .line',{ paused:true, autoAlpha:1,stagger:0.3})

reassuranceTl3 = gsap.timeline({
  scrollTrigger: {
    trigger: '.reassurance_bottom',
    scrub: 0,
    start: "0% 0%",
    end: "100% 100%",
    //markers: true,
    onUpdate:function(self){
      idx = Math.floor(self.progress*10);

      if(idx>=1){
        rstextShow1.play();
        rstextShow2.play();
      }else{
   
      }
    }
  },
})

// gallery 영역
gsap.set('.group_gallery .line',{autoAlpha:0,y:30})
gsap.set('.indicator_line',{autoAlpha:0,scale:0})

indicatorShow1 = gsap.to('.group_gallery .line',{ paused:true, autoAlpha:1,y:0})
indicatorShow2 = gsap.to('.indicator_line',{ paused:true, autoAlpha:.3,scale:1})

$('.gallery_item').each(function(i,el){
  ScrollTrigger.create({
    trigger: el,
    start: "0% 50%",
    end: "100% 50%",
    //markers: true,
    onUpdate: function() {
      $('#indicator_count').text(i+1)
    }
  })
})

indicatorTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.group_gallery',
    scrub: 0,
    start: "0% 80%",
    end: "100% 100%",
    //markers: true,
    onUpdate:function(self){
      idx = Math.floor(self.progress*10);

      if(idx>=1){
        indicatorShow1.play();
        indicatorShow2.play();
      }else{
        indicatorShow1.reverse();
        indicatorShow2.reverse();
      }

      if(idx>=10){
        indicatorShow1.reverse();
        indicatorShow2.reverse();
      }else{
   
      }
    }
  },
})

// Order a Timepiece 영역
const stepItems = document.querySelectorAll('.step_item');
const progressBars = document.querySelectorAll('.step_progress');

const timeline = gsap.timeline({ repeat: -1, delay: 0 });

// 각 슬라이드에 대한 애니메이션을 순차적으로 추가
stepItems.forEach((item, index) => {
  timeline
    .to(progressBars[index], {
      width: '100%', // 현재 슬라이드의 프로그레스 바 채우기
      duration: 3, // 3초 동안 채우기
      ease: 'power2.out',
      onStart: () => {
        // 현재 슬라이드 활성화
        stepItems.forEach((el) => el.classList.remove('active'));
        item.classList.add('active');
      },
    })
    .to(progressBars[index], {
      width: '0%', // 현재 슬라이드의 프로그레스 바 초기화
      duration: 0, // 즉시 초기화
      ease: 'none',
    });
});


// footer
const splitLines4 = new SplitType('#footer .text_effect', {types: 'lines'});

gsap.set('.footer_container .line',{autoAlpha:0})

footerShow = gsap.to('.footer_container .line',{ paused:true, autoAlpha:1,stagger:0.1})

footerTl = gsap.timeline({
  scrollTrigger: {
    trigger: '#footer',
    scrub: 0,
    start: "0% 50%",
    end: "100% 100%",
    //markers: true,
    onUpdate:function(self){
      idx = Math.floor(self.progress*10);

      if(idx>=1){
        footerShow.play();
      }else{

      }
  
    }
  },
})







// // 2


// const canvas = document.querySelector('#canvas02');
// const ctx = canvas.getContext('2d');

// canvas.width = 1680;
// canvas.height = 889;

// const frameCount = 154;

// const currentFrame = (idx) => {
//   // return `asset/images/capture/capture${idx.toString()}.jpg`;

//   return `asset/image_sequence02/${idx.toString().padStart(4, '0')}.webp`;
// }; // 리턴 필수

// const images = [];
// const card = {
//   frame: 0,
// };

// for (let i = 0; i < frameCount; i++) {
//   const img = new Image();
//   img.src = currentFrame(i + 1);
//   images.push(img);
// }

// b2 = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.sc_calibre',
//     scrub: 0,
//     start: '90% 90%',
//     endTrigger: '.sc_order',
//     end: '100% 100%',
//     //markers: true,
//     onUpdate:function(self){
//       // console.log(self.progress);
//       console.log(Math.floor(self.progress*154));

//     }
//   },
// })

// b2.to(card,154,{
//   frame: frameCount - 1,
//   snap: 'frame',
//   ease: 'none',
//   onUpdate: render,
// },'b1');

// images[0].onload = render;

// function render() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   ctx.drawImage(images[card.frame], 0, 0);
// }



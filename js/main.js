// 画像フェード表示
window.onload = () => {
  let profileImg = document.getElementById('fadein');
  profileImg.style.opacity = '1';
  profileImg.style.transform = 'translateX(0)';

  let profileName = document.querySelector('.profile-name');
  profileName.classList.toggle('onload');
};

window.setTimeout(() => {
  let profileName = document.querySelector('.profile-name');
  profileName.classList.toggle('onload');
}, 2000);


// ハンバーガーメニュー
let menuBar = document.querySelector('.menu-btn');
let nav = document.getElementById('nav');
menuBar.addEventListener('click', () => {
  nav.classList.toggle('open');
  menuBar.classList.toggle('open');
});

// スクロール表示
let fadeInTarget = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
  for (let i = 0; i < fadeInTarget.length; i++) {
    const rect = fadeInTarget[i].getBoundingClientRect().top;
    const scroll = window.scrollY || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight;
    if (scroll > offset - windowHeight + 150) {
      fadeInTarget[i].classList.add('scroll-in');
    }
  }
});



// 英語版表示？



// ナイトモード処理？
// 画像フェード表示
window.onload = () => {
  let profileImg = document.getElementById('fadein');
  profileImg.style.opacity = '1';
  profileImg.style.transform = 'translateX(0)';

  let profileName = document.querySelector('.profile-name');
  // console.log(profileName);
  profileName.classList.toggle('onload');
};

window.setTimeout(() => {
  let profileName = document.querySelector('.profile-name');
  profileName.classList.toggle('onload');
}, 2000);


// 画像スクロール表示


// ハンバーガーメニュー



// 英語版表示？



// ナイトモード処理？
const skillUrl = "../json/mySkill.json";
const historyUrl = "../json/myHistory.json";

// let url = "http://kentodaikoku.html.xdomain.jp/portfolio/json/myskill.json";

window.addEventListener('load', ()=> {
  fetch(skillUrl).then(response => response.json()).then(data => getSkillJson(data));
  fetch(historyUrl).then(response => response.json()).then(data => getHistoryJson(data));
})

function getSkillJson(data) {
  let html = document.querySelector('.skill-wrapper');
  let contents = '';
  data.forEach( e => {
    // console.log(e.leng);
    contents += '<div class="skill-bar">';
      contents += '<div class="skill-info">';
        contents += '<span>' + e.name + '</span>';
        contents += '<span>' + e.level + '%</span>';
      contents += '</div>';
      contents += '<div class="skill-line ' + e.class + '"></div>';
    contents += '</div>';  
  });

  html.innerHTML = contents;
}

function getHistoryJson(data) {
  let html = document.querySelector('.history-contents');
  let contents = '';

  data.forEach(e => {
      contents += '<dt>' + e.date + '</dt>';
      contents += '<dd>' + e.text + '</dd>';
  });

  html.innerHTML = contents;
}
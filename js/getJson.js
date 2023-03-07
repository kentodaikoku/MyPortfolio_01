var url = "/json/myskill.json";

window.addEventListener('load', ()=> {
  fetch(url).then(response => response.json()).then(data => getSkillJson(data));
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
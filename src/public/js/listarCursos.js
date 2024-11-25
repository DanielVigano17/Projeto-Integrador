const cards_cursos = document.querySelector(".cards_cursos");
const title = document.querySelector(".title_cursos_apresentation");

const cursos = JSON.parse(localStorage.getItem("cursos"))

function listarItensDaLoja (){
    let html = "";
    cursos.forEach(item => {
        html+= `
             <div class="card" style="width: 18rem;" data-aos="zoom-in">
                <img src="${item.banner}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${item.nome}</h5>
                  <p class="card-text">${item.desc}</p>
                  <a href="/detalhes-curso" class="btn btn-primary">Participar</a>
                </div>
              </div>
            `;
    });
    cards_cursos.innerHTML = html;
 }


listarItensDaLoja();
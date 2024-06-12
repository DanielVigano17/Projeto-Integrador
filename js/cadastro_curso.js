const button_salvar = document.querySelector(".salvar");
const input_banner_curso = document.querySelector("#input_banner_curso");
const input_desc = document.querySelector("#input_desc");
const input_nome = document.querySelector("#input_nome");

const cursos = JSON.parse(localStorage.getItem("cursos"))


button_salvar.addEventListener("click", function(){

    cursos.push({
        banner: input_banner_curso.value,
        desc: input_desc.value,
        id: cursos.length + 1 ,
        nome: input_nome.value
    });
    
    localStorage.setItem("cursos", JSON.stringify(cursos))

    alert("Curso cadastrado com sucesso");
})
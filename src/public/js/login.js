// Seleção dos elementos do DOM
const emailInput = document.querySelector("#email_input");
const passwordInput = document.querySelector("#password_input");
const formLogin = document.querySelector("#form_login");

const cursos = [
    {
        id:"1",
        nome:"Curso de Informática",
        desc:"Curso gratuito e de qualidade para capacitação e qualificação profissional",
        banner: "img/img_curso.svg",
    },
 ]

// Evento de envio do formulário
formLogin.addEventListener("submit", function(event) {
    event.preventDefault();
    popularBd();
    const email = emailInput.value;
    const password = passwordInput.value;
    buscarLogin(email, password);
});


// Função para buscar o login
function buscarLogin(email, password) {
    const usersData = JSON.parse(localStorage.getItem("users"));

    const userRegistered = usersData.find(user => {
        return user.email === email && user.senha === password;
    });

    if (userRegistered) {
        sessionStorage.setItem("user", JSON.stringify(userRegistered));
        localStorage.setItem("cursos", JSON.stringify(cursos));
        window.location.href = "/home.html";
    } else {
        alert("Usuário ou senha inválido");
    }
}

function popularBd(){
    // Dados dos usuários
    const users = [
        {
            id: 1,
            nome: "daniel",
            email: "danielvigano17@gmail.com",
            senha: "1234",
        }
    ];

    // Verifica se os usuários estão armazenados no localStorage, se não estiver, armazena-os
    if (!localStorage.getItem("users")) {
        localStorage.setItem("users", JSON.stringify(users));
    }

}

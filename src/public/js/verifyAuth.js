// if(!sessionStorage.getItem("user")) {
//     window.location.href = "/login.html";
// }else{
//     const user = sessionStorage.getItem("user");
//     buscarLogin(user.email,user.password);
// }

// function buscarLogin(email, password) {
//     const usersData = JSON.parse(localStorage.getItem("user"));

//     const userRegistered = usersData.find(user => {
//         return user.email === email && user.senha === password;
//     });

//     if (!userRegistered) {
//         window.location.href = "/login.html";
//     }
// }

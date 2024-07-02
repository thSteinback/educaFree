document.addEventListener("DOMContentLoaded", () => {
    // Adiciona eventos para os botões de login e cadastro
    const loginBtn = document.querySelector('.login-btn');
    const signupBtn = document.querySelector('.signup-btn');

    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            window.location.href = 'login.html';
        });
    }

    if (signupBtn) {
        signupBtn.addEventListener('click', () => {
            window.location.href = 'register.html';
        });
    }

    // Código existente para responsividade e carregamento de cursos
    const featuredCoursesContainer = document.getElementById('featured-courses');
    const allCoursesContainer = document.getElementById('all-courses');
    const courseDetailContainer = document.getElementById('course-detail');
    const profileInfoContainer = document.getElementById('profile-info');

    if (featuredCoursesContainer) {
        displayFeaturedCourses(featuredCoursesContainer);
    }

    if (allCoursesContainer) {
        displayAllCourses(allCoursesContainer);
    }

    if (courseDetailContainer) {
        displayCourseDetail(courseDetailContainer);
    }

    if (profileInfoContainer) {
        displayUserProfile(profileInfoContainer);
    }
});

function displayFeaturedCourses(container) {
    const featuredCourses = courses.slice(0, 2);
    featuredCourses.forEach(course => {
        const courseElement = createCourseElement(course);
        container.appendChild(courseElement);
    });
}

function displayAllCourses(container) {
    courses.forEach(course => {
        const courseElement = createCourseElement(course);
        container.appendChild(courseElement);
    });
}

function displayCourseDetail(container) {
    const params = new URLSearchParams(window.location.search);
    const courseId = params.get('id');
    const course = courses.find(course => course.id == courseId);

    if (course) {
        container.innerHTML = `
            <h2>${course.title}</h2>
            <p>${course.description}</p>
            <ul>${course.lessons.map(lesson => `<li>${lesson}</li>`).join('')}</ul>
            <a href="courses.html" class="btn">Voltar</a>
        `;
    } else {
        container.innerHTML = '<p>Curso não encontrado...</p>';
    }
}

function displayUserProfile(container) {
    const { name, enrolledCourses } = userProfile;
    container.innerHTML = `
        <h3>${name}</h3>
        <h4>Cursos Inscritos</h4>
        <ul>${enrolledCourses.map(courseId => {
            const course = courses.find(course => course.id == courseId);
            return `<li>${course.title}</li>`;
        }).join('')}</ul>
    `;
}

function createCourseElement(course) {
    const courseElement = document.createElement('div');
    courseElement.className = 'course';
    courseElement.innerHTML = `
        <h3>${course.title}</h3>
        <p>${course.description}</p>
    `;
    courseElement.addEventListener('click', () => {
        window.location.href = `course-detail.html?id=${course.id}`;
    });
    return courseElement;
}

function displayCourseDetail(container) {
    const params = new URLSearchParams(window.location.search);
    const courseId = parseInt(params.get('id'));
    const course = courses.find(course => course.id === courseId);

    if (course) {
        container.innerHTML = `
            <h2>${course.title}</h2>
            <p>${course.description}</p>
            <ul>
                ${course.lessons.map(lesson => `                              
                    <li>
                    <span> </span>
                    <span> </span>
                        <span>${lesson.title}</span>
                    </li>
                    <iframe src="https://www.youtube.com/embed/9YffrCViTVk" width="300" height="200" frameborder="3" allowfullscreen></iframe>
                `).join('')}
            </ul>
            <a href="courses.html" class="btn btn-secondary">Voltar</a>
        `;
       
    } else {
        container.innerHTML = '<p>Curso não encontrado...</p>';
    }
}
/* PAGINA DE REGISTRO */

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    checkForm();
}) 

username.addEventListener("blur", () => {
    checkInputUsername();
})

email.addEventListener("blur", () => {
    checkInputEmail();
})

password.addEventListener("blur", () => {
    checkInputPassword();
})

passwordConfirmation.addEventListener("blur", () => {
    checkInputPasswordConfirmation();
})

function checkInputUsername(){
    const usernameValue = username.value;

    if(usernameValue === ""){
        errorInput(username, "Preencha seu nome.")
    }else{
        const formItem = username.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputEmail(){
    const emailValue = email.value;

    if(emailValue === ""){
        errorInput(email, "O email é obrigatório.")
    }else{
        const formItem = email.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputPassword(){
    const passwordValue = password.value;

    if(passwordValue === ""){
        errorInput(password, "A senha é obrigatória.")
    }else if(passwordValue.lenght < 8){
        errorInput(password, "A senha precisa ter no mínimo 8 caracteres.")
    }else{
        const formItem = password.parentElement;
        formItem.className = "form-content"
    }  
}

function checkInputPasswordConfirmation(){
    const passwordValue = password.value;
    const confirmationPasswordValue = passwordConfirmation.value;

    if(confirmationPasswordValue === ""){
        errorInput(passwordConfirmation, "A confirmação de senha é obrigatória.")
    }else if(confirmationPasswordValue !== passwordValue){
        errorInput(passwordConfirmation, "Ase senhas não são iguais.")
    }else{
        const formItem = passwordConfirmation.parentElement;
        formItem.className = "form-content"
    }
        
}

function checkForm(){
    checkInputUsername();
    checkInputEmail();
    checkInputPassword();
    checkInputPasswordConfirmation();

    const formItems = form.querySelectorAll(".form-content")

    const isValid = [...formItems].every((item) => {
        return item.className === "form-content"
    });

}

function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;

    formItem.clasName = "form-content error"
}
//responsividade tamanho da pagina/mobile//
function menu() { //troca do icon//
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "imagem/menu.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "imagem/fechar.png";
    }
  }
//cards//
let swiperCards = new Swiper(".card__content", {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints:{
      600: {
        slidesPerView: 2,
      },
      968: {
        slidesPerView: 3,
      },
    },
  });
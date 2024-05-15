document.addEventListener("DOMContentLoaded", () => {
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
            <a href="courses.html" class="btn">Back to Courses</a>
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

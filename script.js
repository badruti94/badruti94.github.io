document.addEventListener('DOMContentLoaded', () => {

    const getMode = () => {
        return localStorage.getItem('mode') || 'light'
    }
    const setMode = mode => {
        localStorage.setItem('mode', mode)
    }

    const changeMode = () => {
        if (getMode() === 'light') {
            document.querySelector('body').classList.add('dark')
            document.querySelector('#dark-btn').innerHTML = '<i class="fas fa-sun" ></i>'

            setMode('dark')
        } else {
            document.querySelector('body').classList.remove('dark')
            document.querySelector('#dark-btn').innerHTML = '<i class="fas fa-moon" ></i>'

            setMode('light')
        }
    }

    const loadMode = () => {
        if(getMode() === 'dark'){
            document.querySelector('body').classList.add('dark')
            document.querySelector('#dark-btn').innerHTML = '<i class="fas fa-sun" ></i>'
        }
    }

    loadMode()

    document.querySelector('#dark-btn').addEventListener('click', changeMode)


    let html = ''
    projects.forEach(project => {
        let github_link = ''

        project.githubs.forEach(github => {
            github_link += `<li><a href="${github}" target="_blank" > <i class="fab fa-github"></i> </a></li>`
        })

        const web_link = project.web ? `<li><a href="${project.web}" target="_blank" > <i class="fas fa-globe"></i> </a></li>` : '';

        html += `
        <div class="card">
            <img src="./img/projects/${project.image}" alt="">
            <div class="info">
                <h3>${project.title}</h3>
                <p>${project.description}
                </p>
                <ul class="link">
                    ${github_link}
                    ${web_link}
                </ul>
            </div>
        </div>
        `;
    })
    document.querySelector('#projects').innerHTML = html;
})
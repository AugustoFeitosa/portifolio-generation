let about = document.querySelector('#about')
let areaProfile = document.querySelector('#area')

async function getApiGithub() {
    try {
        const dataProfile = await fetch('https://api.github.com/users/augustofeitosa')
        const profile = await dataProfile.json()

        let content = `
            
            <article class="section_content">
                <h1>Quem sou eu?</h1>
                <p>
                    Sou um desenvolvedor Java apaixonado por programação, tenho um conhecimento sólido em Java e estou familiarizado com os princípios do framework Spring e a linguagem SQL para manipulação de bancos de dados. Sou dedicado, autodidata e estou sempre buscando aprender e aprimorar minhas habilidades.
                </p>

                <div class="section_github flex">
                    <a class="btn2" href="${profile.html_url}">Github</a>
                    <p>${profile.followers} Seguidores</p>
                    <p>${profile.public_repos} Repositórios</p>
                </div>
            </article>
        `
        about.innerHTML += content

    } catch (error) {
        console.log(error)
    }
}

function changeTheme() {
    document.body.classList.toggle('dark-theme')
}

getApiGithub()
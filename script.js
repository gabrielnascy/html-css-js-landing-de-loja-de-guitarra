// Constantes da Home
const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')
const items = document.querySelectorAll('.item')

let active = 0

function showItem(index) {

    // remove active de todos
    items.forEach(item => {
        item.classList.remove('active')
    })

    // adiciona no atual
    items[index].classList.add('active')

    // fecha todos os specs
    closeAllSpecs()

    // remove active de todos
    items.forEach(item => {
        item.classList.remove('active')
    })

    // adiciona no atual
    items[index].classList.add('active')




}

function closeAllSpecs() {
    const specs = document.querySelectorAll(".specs")

    specs.forEach(spec => {
        spec.classList.remove("active")
    })
}

nextButton.addEventListener('click', () => {

    active++

    if (active >= items.length) {
        active = 0
    }

    showItem(active)

})

prevButton.addEventListener('click', () => {
    active--

    if (active < 0) {
        active = items.length - 1
    }

    showItem(active)

})

// =============================
// TROCA DE MARCAS DAS GUITARRAS
// =============================

const brandButtons = document.querySelectorAll('.brands_btn')
const sections = document.querySelectorAll('.projetos')

brandButtons.forEach(button => {

    button.addEventListener('click', () => {

        const brand = button.dataset.brand

        sections.forEach(section => {

            section.classList.remove('active_1')

            if (section.dataset.brand === brand) {
                section.classList.add('active_1')
            }

        })

    })

})
// ==============================
//  ABRIR BOTAO PARA CADA CARD
// ==============================

const botoes = document.querySelectorAll(".btn")

botoes.forEach((botao) => {

    botao.addEventListener("click", () => {

        const content = botao.closest(".content")
        const specs = content.querySelector(".specs")

        specs.classList.toggle("active")

    })

})



function modal() {
    const cards = document.querySelectorAll(".card")
    const modal = document.querySelector(".section__modal")
    const modalContainer = document.querySelector(".modal__container")

    function abrirModal() {
        cards.forEach(card => {
            card.addEventListener("click", (e) => {
                const cardImage = card.querySelector('.card__image img').getAttribute("src")
                const cardTitle = card.querySelector('.card__content .card__title').textContent
                const cardSubtitle = card.querySelector('.card__content .card__author').textContent

                const cardClicado = e.currentTarget

                modal.classList.add("section__modal--active")
                modalContainer.innerHTML = `
                    <div class="modal__card">
                        <div class="modal__card__image">
                            <img src="${cardImage}" alt="">
                        </div>
                        <div class="modal__card__content">
                            <a href="#" class="modal__card__title">${cardTitle}</a>
                            <a href="#" class="modal__card__author">${cardSubtitle}</a>
                        </div>
                    </div>

                    <span class="modal__close">Fechar modal</span>
                `

                fecharModal()
            })
        })
    }
    
    function fecharModal() {
        const modalClose = document.querySelector(".modal__close")
        modalClose.addEventListener('click', () => {
            modalContainer.innerHTML = ""
            modal.classList.remove("section__modal--active")
        })
    }

    abrirModal()
    
}

modal()
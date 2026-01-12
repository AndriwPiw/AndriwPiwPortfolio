`use strict`


const cardViewer = document.querySelector(`.cardViewer`)
const cardViewerImgFront = cardViewer.querySelector('.cardViewer-img--front')
let projectImgs = document.querySelectorAll(`.Project-img`)

projectImgs.forEach((img) => {

    img.addEventListener(`click`, () => {
        let frontSrc = img.getAttribute(`data-front`)
        cardViewerImgFront.src = frontSrc


    })

    projectImgs.forEach((_, index) => {
        projectImgs[index].addEventListener(`click`, () => {
            projectImgs.forEach((_, index) => {
                projectImgs[index].classList.remove(`isActive`)
            })

            projectImgs[index].classList.add(`isActive`)
        })
    })

})





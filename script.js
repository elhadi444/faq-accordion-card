document.querySelectorAll('.accordion-qst').forEach(btn => btn.addEventListener('click', e => {
    btn.classList.toggle('open')
    btn.nextElementSibling.classList.toggle('open')
}))
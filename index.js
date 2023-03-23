let ratings = document.querySelector('.ratings')

ratings.addEventListener('click', function(e) {
    let customerRate = e.target.getAttribute('value')
    localStorage.setItem("rateValue", customerRate)
})
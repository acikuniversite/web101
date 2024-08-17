const cards = document.querySelectorAll('.card');

// Sayfa yüklenince Kartları karıştır
(() => {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();

function flipCard() {

    //Burada kullanılan "this" ifadesi
    //bu fonksiyonun çalışmasına sebep olan elementi belirtir.
    //console.log(this); //yardımıyla bunu görebilirsiniz.
    //this ifadesi arrow function ile çalışmaz çünkü arrow funksiyonunu bir değişkenmiş gibi tanımlanır.
    this.classList.add('flipped');

}

cards.forEach(card => card.addEventListener('click', flipCard));

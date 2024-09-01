const notgir = document.getElementById('notgir');
const gonder = document.getElementById('gonder');
const liste = document.getElementById('liste');
let notlar = []
// {id:'',not:'',yapildiMi:false} // Notun Yapısı


const listeEleman = (item) => {
    const li = document.createElement('li');
    li.classList.add('liste-eleman');
    li.id = item.id;
    const span = document.createElement('span');
    span.textContent = item.not;

    const sil = document.createElement('button');
    sil.classList.add('sil');
    sil.textContent = '\u00D7'; // X sembolü

    li.appendChild(span);
    li.appendChild(sil);
    return li;

}

// hoisting
const notEkle = (item) => {
    notlar.push(item);
    liste.appendChild(listeEleman(item));
}

gonder.addEventListener('pointerup', () => {

    notEkle({ id: Date.now(), not: notgir.value, yapildiMi: false });
})


liste.addEventListener('pointerup', (e) => {
    if (e.target.classList.contains('sil')) {
        e.target.parentElement.remove()

        notlar = notlar
            .filter(item => item.id != e.target.parentElement.id)

        return;
    }

    if (e.target.tagName === 'LI' || e.target.parentElement.tagName === 'LI') {
        const element = e.target.tagName === 'LI' ? e.target : e.target.parentElement
        element.classList.toggle('checked')

        notlar.map((item) => { //Dizimizi de güncel tuttuk
            if (item.id == element.id) {
                item.yapildiMi = !item.yapildiMi
            }
        })
    }

})


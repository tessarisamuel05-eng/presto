fetch('./MOCK_DATA.json').then((response) => response.json()).then((data) => {
    console.log(data);
    let radioBtn = document.querySelector('.radioBtn');
    let cardContainer = document.querySelector('#cardContainer');
    let searchInput = document.querySelector('#searchInput');

    function crearadioBtn() {

        let categories = data.map((annuncio) => annuncio.category);

        categories.forEach((category) => {
            let div = document.createElement('div');
            div.classList.add('form-check');
            div.innerHTML = `
            <input class="form-check-input" type="radio" name="categories" id="${category}">
            <label class="form-check-label" for="${category}">
            ${category}
            </label>
            `;
            radioBtn.appendChild(div);
        });
    }
    crearadioBtn();

    function mostracard(array) {
        cardContainer.innerHTML = '';
        array.forEach((annuncio) => {
            let div = document.createElement('div');
            div.classList.add('card-custom');
            div.innerHTML = `
            <h3>${annuncio.name}</h3>
            <p>${annuncio.category}</p>
            <p>${annuncio.price}</p>
            `;
            cardContainer.appendChild(div);
        });
    }
    mostracard(data);

    function filterCategory(categoria) {
    if (categoria != 'All') {
            let filtered = data.filter((annuncio) => annuncio.category == categoria);
            mostracard(filtered);
        }else {
            mostracard(data);}}

        let radioBtns = document.querySelectorAll('.form-check-input');

        radioBtns.forEach((button) => {
            button.addEventListener('click', () => {
                filterCategory(button.id);
            });







        });


        function trovaparola(parola) {
            let filtered = data.filter((annuncio) => annuncio.name.toLowerCase().includes(parola.toLowerCase()));
            mostracard(filtered);
        }

        searchInput.addEventListener('input', () => {
            trovaparola(searchInput.value);
        });


    });
import './styles.css';
import refs from './js/refs';
import template from './templates/template.hbs';

console.log(refs.search);

let query = '';
const apiKey = 'aa8103c96a5c481a951da99868cd8cbc';
let searchQuery = ''
let page = 0;
 
refs.btnSearch.addEventListener('click', () => {
    page = 1;
    query = refs.search.value;
    const url = `https://newsapi.org/v2/everything?q=${query}&language=en&page=${page}`;
    const options = {
        headers: {
            Authorization: apiKey,
        },
    }

    refs.ulArticles.innerHTML = '';
    refs.spinner.classList.remove('is-hidden');

    fetch(url, options).then(res => res.json())
    .then(data =>  {
        console.log(data),
        refs.ulArticles.insertAdjacentHTML('beforeend', template(data.articles)),
    page += 1,
    refs.spinner.classList.add('is-hidden')
}
    );
    refs.btnMore.classList.remove('is-hidden')
})



refs.btnMore.addEventListener('click', () => {
    const url = `https://newsapi.org/v2/everything?q=${query}&language=en&page=${page}`;
    const options = {
        headers: {
            Authorization: apiKey,
        },
    }
    refs.spinner.classList.remove('is-hidden');
    refs.btnText.textContent = 'Загрузка...';
    refs.btnSpinner.classList.remove('is-hidden');
    refs.btnMore.disabled = true;
    page = 1;

    fetch(url, options).then(res => res.json())
    .then(data =>  {
        console.log(data),
        refs.ulArticles.insertAdjacentHTML('beforeend', template(data.articles)),
    page += 1,
    refs.btnText.textContent = 'Показать еще',
    refs.btnSpinner.classList.add('is-hidden'),
    refs.btnMore.disabled = false,
    refs.spinner.classList.add('is-hidden'),
    console.log(data)
}
    );
})


refs.backToTop.addEventListener('click', () => {
    scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})
import './styles.css';
import refs from './js/refs';
import template from './templates/template.hbs';

console.log(refs.search);

let query = '';
const apiKey = 'aa8103c96a5c481a951da99868cd8cbc';
 
refs.btnSearch.addEventListener('click', () => {
    console.log(refs.search.value)
    query = refs.search.value;
    const url = `https://newsapi.org/v2/everything?q=${query}&from=2020-09-19&sortBy=publishedAt&apiKey=${apiKey}`;
    fetch(url).then(res => res.json())
    .then(data => refs.ulArticles.innerHTML = template(data.articles)
    );

})


// http://newsapi.org/v2/top-headlines?country=us&category=business&
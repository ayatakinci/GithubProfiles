const apiUrl = 'https://api.github.com/users/';
const main = document.querySelector('main');
const search = document.querySelector('#search');
const form = document.querySelector('form');

function searchProfile(url){
    fetch(url)
    .then(res => res.json())
    .then(function(data){
        const img = document.createElement('img');
        const h3 = document.createElement('h3');
        const h2 = document.createElement('h2');
        const p = document.createElement('p');

        main.appendChild(img);
        main.appendChild(h3);
        main.appendChild(h2);
        main.appendChild(p);
        img.src = `${data.avatar_url}`;
        h3.innerHTML = ` Login : <a href="${data.html_url}" target="_blank">${data.login}</a>`;
            h2.innerHTML = ` Name : ${data.name}`;
            p.innerHTML = `Bio : ${data.bio}`


    });
}
form.addEventListener("submit", (e) =>{
    e.preventDefault();
    main.innerHTML = '';
    const searchTerm = search.nodeValue;
    if(searchTerm){
        searchProfile(apiUrl + searchTerm);
        searchTerm.value = "";
    }
})
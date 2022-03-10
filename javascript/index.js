let parrafo = document.getElementById("card");
fetch('https://rickandmortyapi.com/api/character/?page=19')
  .then(response => response.json())
  .then(data =>
    {
      let name =(data.results)
      console.log(name)
      name.forEach(element => {
          parrafo.innerHTML += 
        `
          <div class="col-sm-4">
              <div class="card m-1">
                <div class="cat">
                    <img  src="${element.image}" alt="">
                </div>
                <div class="card-body m-1">
                  <h5 class="card-title">${element.species}</h5>
                  <p class="card-text">${element.type}</p>
                  <a href="/Pages/profile.html?name=${element.image}" class="btn btn-primary">${element.location.name}</a>
                </div>
              </div>
            </div>
        `;
      });
    }
);
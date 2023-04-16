// IIFE Immediately invoked function Expressions  267138
(async function () {
    const response = await fetch("./data.json");
    const Movie = await response.json();

    console.log(Movie);

    // Display All Movies

    const inputElem = document.getElementById("searchInput");
    const btnElem = document.getElementById("searchBtn");
    const listElem = document.getElementById("Movie-list");

   

    function displaySearchResults (results) {
      listElem.innerHTML = "";
      results.forEach(function (Movie) {
        const li = document.createElement("li");
        const listItem = `
        <div class = div>
        <a href="${Movie.homepage}"><img class = "poster" src="${Movie.poster_path}" ></a>
            <h2 class="title">${Movie.title}</h2>
             <Label id="date">${Movie.release_date}</Label>
        </div>
            <hr>
        `;
        li.innerHTML = listItem;
        li.addEventListener("click",function () {
          loadRecipeDetails(Movie);
        });
        listElem.appendChild(li);
      })
    }
  
    function search() {
      const query = inputElem.value.toLowerCase();
      const results = Movie.filter(function (Movie) {
        return (Movie.title.toLowerCase().includes(query) ||
        Movie.release_date.toLowerCase().includes(query)) 
      });
  
      displaySearchResults(results);
    }
  
    btnElem.addEventListener("click", search);
  })();

function fetchData() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=mojito')
        .then(response => response.json())
        .then(data => {
            if (data.drinks) {
                const cocktailList = document.getElementById('mojitosContainer');
                for (let i = 0; i < data.drinks.length; i++) {
                    const cocktail = data.drinks[i];

                    const drinkDiv = document.createElement('div');
                    drinkDiv.classList.add('mojitos-content')

                    const img = document.createElement('img');
                    const nameParagraph = document.createElement('p');
                    const categoryParagraph = document.createElement('p');
                    const idPrice = document.createElement('span');

                    img.src = cocktail.strDrinkThumb;
                    img.alt = cocktail.strDrink;
                    nameParagraph.textContent = `${cocktail.strDrink}`;
                    categoryParagraph.textContent = `Category: ${cocktail.strCategory}`;
                    idPrice.textContent = `$12.00`;

                    drinkDiv.appendChild(img);

                    drinkDiv.appendChild(nameParagraph);
                    drinkDiv.appendChild(categoryParagraph);
                    drinkDiv.appendChild(idPrice);

                    cocktailList.appendChild(drinkDiv);
                }
            } else {
                console.error('No drinks found.');
            }
        })
        .catch(error => console.error('Error:', error));
}

fetchData();



document.addEventListener("DOMContentLoaded", function() {
    fetchAndRender('all');
});

function fetchAndRender(name) {
    const apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => renderDrinks(data.drinks))
        .catch(error => console.error('Error fetching data:', error));
}

function renderDrinks(drinks) {
    const drinksContainer = document.getElementById('drinks-container');
    drinksContainer.innerHTML = '';

    if (drinks) {
        drinks.slice(0, 12).forEach(drink => {
            const drinkElement = document.createElement('div');
            drinkElement.classList.add('drink-container')
            drinkElement.innerHTML = `
          <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}">
          <h3>${drink.strDrink}</h3>
          <p>${drink.strCategory}</p>
        `;
            drinksContainer.appendChild(drinkElement);
        });
    } else {
        drinksContainer.innerHTML = '<p>No drinks found.</p>';
    }
}
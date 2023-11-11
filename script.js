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
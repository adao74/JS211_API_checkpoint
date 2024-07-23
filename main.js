require('dotenv').config()

var myHeaders = new Headers();
myHeaders.append("apikey", process.env.SECRET_KEY);

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

// Autocomplete a partial input to receive recipe names.
// Response has recipe ID
fetch("https://api.apilayer.com/spoonacular/recipes/autocomplete?query=burger", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

// Fetch full information for a recipe (ingredients, nutrition, diet, etc)
// Use recipe ID from previous fetch.
fetch("https://api.apilayer.com/spoonacular/recipes/631814/information?includeNutrition=true", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

// Fetch whole foods (i.e. recipe ingredients)
// E.g. Return 3 ingredients that contain "banana". Sort in ascending order by cholesterol. Exclude ingredients that contain dairy & eggs. Skip 0 results (offset).
// Response has ingredient ID
fetch("https://api.apilayer.com/spoonacular/food/ingredients/search?sortDirection=asc&sort=cholesterol&query=banana&offset=0&number=3&intolerances=dairy%2C%20egg", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

// Fetch the amount you need of a certain ingredient for a certain nutritional goal. 
// E.g. How much of that ingredient do I need to reach 2 oz of protein? Use the food ingredient ID from previous fetch. 
fetch("https://api.apilayer.com/spoonacular/food/ingredients/10011111/amount?unit=oz&target=2&nutrient=protein", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


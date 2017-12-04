var app = function() {

  var createCatUl = function(){
    var catUl = document.createElement('ul');
    catArticle.classList.add('cat');
    return catUl;
  }

  var createCatName = function(name) {
    car catName = document.createElement('li');
    catName.innerText = `Name: ${name}`;
    return catName;
  }

  var createCatFaveFood = function(food) {
    var catFaveFood = document.createElement('li');
    catFaveFood.innerText = `Favourite food: ${food}`;
    return catFaveFood;
  }

  var createCatPic = function(pic) {
    var catPic = document.createElement('li');
    var picture = document.createElement('img');
  }


}

window.onload = app;

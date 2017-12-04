var app = function() {

  var createCatUl = function(){
    var catUl = document.createElement('ul');
    catUl.classList.add('cat');
    return catUl;
  }

  var createCatName = function(name) {
    var catName = document.createElement('li');
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
    picture.width = 500;
    picture.src = pic;
    catPic.appendChild(picture);
    return catPic;
  }

  var appendElements = function(name, food, pic) {
    var catUl = createCatUl();
    catUl.appendChild(name);
    catUl.appendChild(food);
    catUl.appendChild(pic);


    var cats = document.querySelector('#cats');
    cats.appendChild(catUl);
  }

  var createCat = function(name, food, pic) {
    var catName = createCatName(name);
    var catFood = createCatFaveFood(food);
    var catPic = createCatPic(pic);

    appendElements(catName, catFood, catPic);
  }

  createCat("Chad", "Duck", 'http://canitbesaturdaynow.com/images/fpics/530/4_10_09_%20(67).jpg');

}



window.onload = app;

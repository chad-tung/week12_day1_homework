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

  var Cat = function(name, food, pic) {
    this.name = name;
    this.food = food;
    this.pic = pic;
  }

  var easyCreateCat = function(cat) {
    createCat(cat.name, cat.food, cat.pic);
  }


  var cat1 = new Cat("Boba", "Sock fluff", "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg");

  var cat2 = new Cat("Barnaby", "Tuna", "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg");

  var cat3 = new Cat("Max", "Whiskas Temptations", "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg");

  var cat4 = new Cat("Chad", "Duck", 'http://canitbesaturdaynow.com/images/fpics/530/4_10_09_%20(67).jpg');

  var catArr = [cat1, cat2, cat3, cat4]

  for (cat of catArr) {
    easyCreateCat(cat);
  }

}



window.onload = app;

'use strict';


//Helper Functions

//var _random = function(min,max) // min and max included
//{
  //return Math.floor(Math.random()*(max-min)+min);
//}



// =============================

/* 
List of Stores
    List of hours a store is open paired with total numbers 
    
    Store Objects {

    min customer
    max customer
    average cookies per customer
    store name
    store open hours: 8
    store close hours: 7

    cookies sold each hour []
    (per is singular, each is a collection)

    1. Calculate cookies per hour (method)
      Get random number between this.min and this.max === customers


      Result: 
      Alki = Min: 11, Max 25, average cookies per customer = 4
      Next Location = Min 9, Max 22, average cookies per customer = 3

    2. Object method to generate random number of customers per hour
    var cookies = cookies per hour * customers

    Result: 
    Alki  = 15 at 8AM, 20 at 9AM....
    Next location = 12 at 8AM, 22 at 9AM....


    3. Calculate cookies all hours (method)
    for loop [30, 40, 25, 30];  
    array [30, 40, 25, 30]

    Result: cookie data for every hour

    4. Results for each location as separate array 
      Alki for loop []
      Next location for loop []

    Result: Alki [#, #, #, #]
    Next location [#, #, #, #]

    5. <ul> for each location's values

    Result: Alki <ul>
    Next Location <ul>

    6. Calculate the sum of hourly totals for each location

    Alki SumArray
    Next location SumArray

    Result: Alki 
    7AM: 15 cookies
    8AM: 22 cookies
    9AM: 25 cookies
    ..
    ..
    Total: 511 cookies

    render

    }
    */
/*
var Alki = {
  min_cust : 2,
  max_cust : 16,
  avg_cookies_per_customer: 4.6,
  store_name : 'Alki',
  store_open: 8,
  store_close: 19,
  cookies_sold_each_hour: []
};

Alki.calculate_cookies_per_hour = function(){
  var random_customers = Math.floor(_random(this.min_cust, this.max_cust));
  return Math.floor(this.avg_cookies_per_customer * random_customers);
};

Alki.calculate_cookies_sold_each_hour = function () {
  for(var i = this.store_open; i < this.store_close; i++){
    var cookies_sold = this.calculate_cookies_per_hour();
    this.cookies_sold_each_hour.push(cookies_sold);
  }
  console.log('Calculatng cookies' + this.cookies_sold_each_hour);
};

Alki.render = function (){
  var target = document.getElementById('store-container');
  var li_el = document.createElement('li');
  var h2_el = document.createElement('h2');
  var ul_el = document.createElement('ul');

  h2_el.textContent = this.store_name;

  for(var i = 0; i < this.cookies_sold_each_hour.length; i++){
    console.log(i);
    console.log(this.cookies_sold_each_hour[i]);
    var hour_li_el = document.createElement('li');
    hour_li_el.textContent = this.cookies_sold_each_hour[i];
    ul_el.appendChild(hour_li_el);
  }
  console.log(this.cookies_sold_each_hour);
  
  li_el.appendChild(h2_el);
  li_el.appendChild(ul_el);
  target.appendChild(li_el);

};


Alki.calculate_cookies_sold_each_hour();
Alki.render();

var SeaCenter = {
  min_cust : 11,
  max_cust : 38,
  avg_cookies_per_customer: 3.7,
  store_name : 'SeaCenter',
  store_open: 8,
  store_close: 19,
  cookies_sold_each_hour: []
} ;

SeaCenter.calculate_cookies_per_hour = function(){
  var random_customers = Math.floor(_random(this.min_cust, this.max_cust));
  return Math.floor(this.avg_cookies_per_customer * random_customers);
};

SeaCenter.calculate_cookies_sold_each_hour = function(){
  for (var i = this.store_open; i < this.store_close; ++i){
    var cookies_sold = this.calculate_cookies_per_hour();
    this.cookies_sold_each_hour.push(cookies_sold);
  }

};
SeaCenter.render = function (){
  var target = document.getElementById('store-container');
  var li_el = document.createElement('li');
  var h2_el = document.createElement('h2');
  var ul_el = document.createElement('ul');

  h2_el.textContent = this.store_name;

  for(var i = 0; i < this.cookies_sold_each_hour.length; i++){
    console.log(i);
    console.log(this.cookies_sold_each_hour[i]);
    var hour_li_el = document.createElement('li');
    hour_li_el.textContent = this.cookies_sold_each_hour[i];
    ul_el.appendChild(hour_li_el);
  }
  console.log(this.cookies_sold_each_hour);
  console.log('Hi!');
  
  
  li_el.appendChild(h2_el);
  li_el.appendChild(ul_el);
  target.appendChild(li_el);

};

SeaCenter.calculate_cookies_sold_each_hour();
SeaCenter.render(); 

*/

/*===============Commenting out Lab 6 with Lab 7 below==============================*/

/* 1. Create a single constructor function when called with new creates instances

    var cookie store location = new cookie store location (20, 32, 40);
    function Location(location, total number of cookies needed, hourly breakdown of cookie sales, totals)
    this.location = 
    this.total number cookies =
    this. totals =
    this.        = function () {

      return this. - this
    }
   Result: Creates new instances when called with 'new' */

function Locations(name, cookies_needed, hourly_sales){
  this.name = name;
  this.cookies_needed = cookies_needed;
  this.hourly_sales = hourly-sales;
  this.projected-cookies = function(){
    return this.cookies_needed / hourly_sales;

  }
  var AlkiLocations = new Locations ('Alki') 
  var SeaCenterLocations = new Locations ('SeaCenter')
  console.log(constructor)

  Alki.calculate_cookies_needed = function(){
    var Alki= Math.floor(_random(this.min_hourly-sales, this.max_hourly-sales));
    return Math.floor(this.????);
  };

  Alki.render = function (){
    var target = document.getElementById('store-container');
    var li_el = document.createElement('li');
    var h2_el = document.createElement('h2');
    var ul_el = document.createElement('ul');
  };

  li_el.appendChild(h2_el);
  li_el.appendChild(ul_el);
  target.appendChild(li_el);

  Alki.calculate_Locations();
  Alki.render();

  SeaCenter.calculate_cookies_needed = function(){
    var SeaCenter = Math.floor(_random(this.min_hourly_sales, this.max_hourly_sales));
    return Math.floor(this.???);
  };

  SeaCenter.render = function (){
    var target = document.getElementById('store-container');
    var li_el = document.createElement('li');
    var h2_el = document.createElement('h2');
    var ul_el = document.createElement('ul');
  };

  li_el.appendChild(h2_el);
  li_el.appendChild(ul_el);
  target.appendChild(li_el);

  SeaCenter.calculate_Locations();
  SeaCenter.render();

    }

  };
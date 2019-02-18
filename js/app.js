'use strict';

document.addEventListener('click', function(event){
  console.log(event);

});

document.addEventListener ('mouseover', console.log);

var form =document.getElementById('form-to-change');
form.addEventListener('change', function(event){

});

var button=document.getElementById('button-clicker');
var handle_button_press=function(event){
  alert('Nice Work!');
};
button.addEventListener('click', handle_button_press);

var form = document.getElementById('store-form');
form.addEventListener('submit', function(formSubmit){
  formSubmit.preventDefault();
  var time = formSubmit.target.time.value;
  var date = formSubmit.date.date.value;
  var location = formSubmit.target.location.value;
  var minimum_number_of_customers = formSubmit.target.minimum_number_of_customers.value;
  var maximum_number_of_customers = formSubmit.target.maximum_number_of_customers.value;
  var average_cookies_per_customer = formSubmit.target.average_cookies_per_customer.value;
  var store_open = formSubmit.target.store_open.value;
  var store_closes = formSubmit.target.store_closes.value;
  var cookies_sold_each_hour = formSubmit.target.calculate_cookies_sold_each_hour.value;
  
});



/*var _random = function(min,max) // min and max included
{
  console.log('random #' + Math.floor(Math.random()*(max-min)+min));
  return Math.floor(Math.random()*(max-min)+min); 
}; */


var Salmon = function (location, min_cust, max_cust, avg_cookies_per_customer, store_open, store_close){
  this.location = location;
  this.min_cust = min_cust;
  this.max_cust = max_cust;
  this.avg_cookies_per_customer = avg_cookies_per_customer;
  /*this.store_name = store_name;*/
  this.store_open = store_open; 
  this.store_close = store_close;
  /*this.cookies_sold_each_hour = cookies_sold_each_hour;*/
  this.cookies_sold_each_hour = [];
  this.calculate_cookies_sold_each_hour();
  this.render();
};

Salmon.prototype.calculate_cookies_per_hour = function(){
  var random_customers = Math.floor(Math.random()*(this.max_cust-this.min_cust)+this.min_cust);
  // console.log(Math.floor(this.avg_cookies_per_customer * random_customers));
  return Math.floor(this.avg_cookies_per_customer * random_customers);
};

Salmon.prototype.calculate_cookies_sold_each_hour = function(){
  var sum = 0; 
  for (var i = this.store_open; i <=this.store_close; i ++) {
    var cookies_sold = this.calculate_cookies_per_hour();
    this.cookies_sold_each_hour.push(cookies_sold);
  } 

  for (var j = 0; j < this.cookies_sold_each_hour.length; j++){
    sum += this.cookies_sold_each_hour[j];
  }
  this.cookies_sold_each_hour.push(sum);
  console.log(sum);
  console.log(this.cookies_sold_each_hour);

};

Salmon.prototype.render = function (){
  var target = document.getElementById('store-container');
  var tr_el = document.createElement('tr');
  var td_el = document.createElement('td');

  td_el.textContent = this.location;
  tr_el.appendChild(td_el);

  target.appendChild(tr_el);
  for (var i = 0; i < 13; i++){
    var cookies_data = document.createElement('td');
    cookies_data.textContent = this.cookies_sold_each_hour[i];
    tr_el.appendChild(cookies_data);

  }

};
/*===================== Double for loop =======================
var store_open = 8;
var store_close = 19;
var stores = 5;
    
for (var i = store_open; i <= store_close; i++) {
  for (i = 0; i <= stores; i++){
    console.log(store_open, store_close, stores);
  } 
}*/

new Salmon('Alki', 2, 16, 4.6, 8, 19);
new Salmon('CapHill', 20, 38, 2.3, 8, 19);
new Salmon('SeaCenter', 11, 38, 3.7, 8, 19);
new Salmon('FirstPike', 23, 65, 6.3, 8, 19);
new Salmon('SeaTac', 3, 24, 1.2, 8, 19);


/*var seatac = new Salmon('SeaTac', 'Seatac_store', 3, 24, 1.2, '8AM', '7PM');
var seacenter = new Salmon('SeaCenter', 'Seacenter_store', 11, 38, 3.7, '8AM', '7PM');
var firstpike = new Salmon('FirstPike', 'Firstpike_store', 23, 65, 6.3, '8AM', '7PM');
var caphill = new Salmon('CapHill', 'Caphill_store', 20, 38, 2.3, '8AM', '7PM');


seatac.render();
seacenter.render();
firstpike.render();
caphill.render();*/


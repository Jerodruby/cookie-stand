'use strict';

document.addEventListener('click', function(event){
  console.log(event);

}


/*var _random = function(min,max) // min and max included
{
  console.log('random #' + Math.floor(Math.random()*(max-min)+min));
  return Math.floor(Math.random()*(max-min)+min); 
}; */


var Salmon = function (location, min_cust, max_cust, avg_cookies_per_customer, store_name, store_open, store_close, cookies_sold_each_hour){
  this.location = location;
  this.min_cust = min_cust;
  this.max_cust = max_cust;
  this.avg_cookies_per_customer = avg_cookies_per_customer;
  /*this.store_name = store_name;
  this.store_open = store_open; 
  this.store_close = store_close;
  this.cookies_sold_each_hour = cookies_sold_each_hour;*/
  this.calculate_cookies_per_hour();
  this.render();
};

Salmon.prototype.calculate_cookies_per_hour = function(){
  console.log(this.max-cust);
  console.log(this.min-cust);
  var random_customers = Math.floor(Math.floor(Math.random()*(this.max_cust-this.min-cust)+this.min_cust);
  console.log(random_customers);
  // console.log(Math.floor(this.avg_cookies_per_customer * random_customers));
  return Math.floor(this.avg_cookies_per_customer * random_customers);
};

Salmon.prototype.render = function (){
  var target = document.getElementById('store-container');
  var tr_el = document.createElement('tr');
  var td_el = document.createElement('td');

  td_el.textContent = this.store_name;
  tr_el.appendChild(td_el);

  td_el = document.createElement('td');
  td_el.textContent = this.location;
  tr_el.appendChild(td_el);

  td_el = document.createElement('td');
  td_el.textContent = this.min_cust;
  tr_el.appendChild(td_el);

  td_el = document.createElement('td');
  td_el.textContent = this.max_cust;
  tr_el.appendChild(td_el);

  td_el = document.createElement('td');
  td_el.textContent = this.store_open;
  tr_el.appendChild(td_el);

  td_el = document.createElement('td');
  td_el.textContent = this.store_close;
  tr_el.appendChild(td_el);

  target.appendChild(tr_el);

};

new Salmon('Alki', 'Alki_store', 2, 16, 4.6, '8AM', '7PM');
var seatac = new Salmon('SeaTac', 'Seatac_store', 3, 24, 1.2, '8AM', '7PM');
var seacenter = new Salmon('SeaCenter', 'Seacenter_store', 11, 38, 3.7, '8AM', '7PM');
var firstpike = new Salmon('FirstPike', 'Firstpike_store', 23, 65, 6.3, '8AM', '7PM');
var caphill = new Salmon('CapHill', 'Caphill_store', 20, 38, 2.3, '8AM', '7PM');


seatac.render();
seacenter.render();
firstpike.render();
caphill.render();


/*
 * Date Created: 11/17/2021
 * Creator: Roger Shagawat
 * Description: You know downloading the internet
 * Alright here we go again, structuring this project from scratch a 3rd time lol
 */

let player = {
  time: 0,
  ticks: 0,
  total_bits: 0,
  bits: 0,
  money: 0,
  delta_bits: 0,
  bit_sell_price: 0,

  // searchers
  searchers: 0,
  searcher_price: 0,

  // skimmers
  skimmers: 0,
  skimmer_price: 0,
};

let sell_bits = function () {
  // sell all bits
  let bits_sold = player.bits;
  player.bits = 0;
  let delta_money = bits_sold * bit_sell_price;
  money += delta_money;
  return delta_money;
};

let init = function () {
  // player globals
  player.bits = 1;
  player.bit_sell_price = 0.001;

  // building globals
  player.searchers = 0;
  player.searcher_price = 0.01;

  player.skimmers = 0;
  player.skimmer_price = 1;
};

let calc_delta_bits = function () {
  let delta_bits = 0;
  
  return delta_bits;
}

let render = function () {
  // currency display
  document.getElementById("total-bits").innerHTML = total_bits;
  document.getElementById("bits").innerHTML = bits;
  document.getElementById("delta-bits").innerHTML = delta_bits;
  document.getElementById("money").innerHTML = money;

  // selling display
  document.getElementById("bit-sell-price").innerHTML = bit_sell_price;
};

let paused = false;

let elements = {
  total_bits: document.getElementById("total-bits"),
  money: document.getElementById("money"),
  bits: document.getElementById("bits"),
  delta_bits: document.getElementById("delta-bits"),
  searches_bought: document.getElementById("searches-bought"),
  searches_cost: document.getElementById("searches-cost"),
  bit_price: document.getElementById("bit-price"),
};

let total_ticks = 0;
let tick_duration = 2000;
let total_bits = 0;
let bits = 10;
let delta_bits = 0;
let money = 0;
let bit_price = 1e-4;
let buy_mode = "1";

function init() {
  render();
}

function tick() {
  delta_bits = 0;

  delta_bits += searches.tick();

  bits += delta_bits;

  if (render) {
  }

  total_ticks++;
}

function render() {
  elements.total_bits.innerHTML = "Total Bits Downloaded: " + total_bits;
  elements.money.innerHTML = "Money: $" + money;
  elements.bits.innerHTML = "Bits: " + bits;
  elements.delta_bits.innerHTML = "&Delta; Bits: " + delta_bits;
  elements.bit_price.innerHTML = "Bits Sell For: $" + bit_price;
  elements.searches_bought.innerHTML = "Searches: " + this.bought;
  elements.searches_cost.innerHTML = "$" + this.cost;
}

function tickLoop(timestamp) {
  var progress = timestamp - last_render;
  time_since_last_tick += progress;
  // console.log(time_since_last_tick +" " + tick_duration);
  if (time_since_last_tick > tick_duration) {
    time_since_last_tick -= tick_duration;
    tick();
  }
  render();
  last_render = timestamp;
  window.requestAnimationFrame(tickLoop);
}
let last_render = 0;
let time_since_last_tick = 0;

init();
window.requestAnimationFrame(tickLoop);

function searches() {
  this.base_cost = 1e-3;
  this.cost = this.base_cost;
  this.bought = 0;
  this.bits_per_tick = 1;

  calc_delta_bits = function (delta_tick) {
    let delta_bits = 0;
    delta_bits = this.bought * this.bits_per_tick * delta_tick;
    return delta_bits;
  };

  tick = function () {
    let delta_bits = 0;
    delta_bits = calc_delta_bits(1);
    return delta_bits;
  };

  buy = function () {
    calc_new_cost = function (num_bought) {};
    buy_helper = function () {};

    switch (buy_mode) {
      case "1":
        break;
      case "10":
        break;
      case "max":
        break;
      default:
        break;
    }

    new_cost();
  };
}

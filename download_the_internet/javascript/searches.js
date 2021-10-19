function searches() {
  this.base_cost = 1e-3;
  this.cost = this.base_cost;
  this.bought = 0;
  this.bits_per_tick = 1;
  tick = function () {
    let delta_bits = 0;
    delta_bits = this.bought * this.bits_per_tick;

    return delta_bits;
  };

  buy = function () {
    let buy_one = function () {
      console.log(this.cost);
      if (money < this.cost) {
        return false;
      }
      money = money - this.cost;
      this.bought++;
      return true;
    };

    let new_cost = function () {
      if (bought > 0) {
        this.cost = this.base_cost * bought;
      }
    };

    switch (buy_mode) {
      case "1":
        buy_one();
        break;
      case "10":
        let i = 0;
        while (i < 10 && buy_one()) {
          i++;
        }
        break;
      case "max":
        while (buy_one()) {}
        break;
      default:
        break;
    }

    new_cost();
  };
}

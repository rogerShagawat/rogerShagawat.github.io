function searches() {
  base_cost = 1e-3;
  this.cost = searches.base_cost;
  this.bought = 0;
  this.bits_per_tick = 1;
  tick = function () {
    let delta_bits = 0;
    delta_bits = this.bought * this.bits_per_tick;

    if (render) {
      elements.searches_bought.innerHTML = "Searches: " + this.bought;
      elements.searches_cost.innerHTML = "$" + this.cost;
    }

    return delta_bits;
  };

  buy = function () {
    let buy_one = function () {
      console.log(searches.cost);
      if (money < searches.cost) {
        return false;
      }
      money = money - searches.cost;
      searches.bought++;
      return true;
    };

    let new_cost = function () {
      if (bought > 0) {
        searches.cost = searches.base_cost * bought;
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

    if (render) {
      elements.searches_bought.innerHTML = "Searches: " + this.bought;
      elements.searches_cost.innerHTML = "$" + this.cost;
      elements.money.innerHTML = "Money: $" + money;
    }
  };
}

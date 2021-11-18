let buy_searchers = function () {
  // modifies player.money, player.searchers, player.searcher_price
  if (player.money < player.searcher_price) {
    return false;
  }

  player.money -= player.searcher_price;
  player.searchers += 1;
  player.searcher_price *= 1.2;

  return true;
};

let calc_searchers_bits = function (delta_ticks, searchers_amount) {
  // returns the delta bits over time
  let base_delta_bits = 1;
  let delta_bits = delta_ticks * searchers_amount * base_delta_bits;
  return delta_bits;
};

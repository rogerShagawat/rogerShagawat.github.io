let buy_searchers = function () {
  // modifies player.bits, player.searchers, player.searcher_price
};

let calc_searchers_bits = function (delta_time, searchers_amount) {
  // returns the delta bits over time
  let base_delta_bits = 1;
  let delta_bits = delta_time * searchers_amount * base_delta_bits;
  return delta_bits;
};

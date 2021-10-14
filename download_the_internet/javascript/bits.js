let sell_bits = function (bits_sold) {
  if (bits < bits_sold) {
    bits_sold = bits;
  }

  bits -= bits_sold;
  money += bits_sold * bit_price;

  //render bits, money
  if (render) {
    elements.money.innerHTML = "Money: $" + money;
    elements.bits.innerHTML = "Bits: " + bits;
  }


  return bits_sold * bit_price;
};

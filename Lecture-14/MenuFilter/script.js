const dishes = [
  "Kadhai Paneer",
  "Chilli Paneer",
  "Onion Paratha",
  "Garlic Bread",
  "Butter Chicken",
  "Dal Makhni",
  "Chilli Chicken",
  "Kadhai Chicken",
  "Garlic chicken",
  "Drink Chocolate Shake",
  "Drink Butterscotch Shake",
  "Drink Pepsi",
  "Fish curry",
  "Sookhi fish",
  "fish fry",
];

const vegDishes = dishes.filter((dish) => {
  if (!dish.toLowerCase().includes("chicken") &&!dish.toLowerCase().includes("fish"))return true;
  return false;
});

console.log(vegDishes);

const JainSpecial = dishes.filter((dish) => {
    if (!dish.toLowerCase().includes("chicken") &&!dish.toLowerCase().includes("fish")) return true;
    return false;
  })
  .filter((dish) => {
    if (!dish.toLowerCase().includes("onion") && !dish.toLowerCase().includes("garlic")) return true;
    return false;
  });

console.log(JainSpecial);

const NavratriSpecial = dishes.filter((dish) => {
    if (!dish.toLowerCase().includes("chicken") &&!dish.toLowerCase().includes("fish")) return true;
    return false;
  })
  .filter((dish) => {
    if (!dish.toLowerCase().includes("onion") && !dish.toLowerCase().includes("garlic")) return true;
    return false;
  }).map((dish)=>{
    if(!dish.toLowerCase().includes('drink')) return dish + '-Navratri Special';
    return dish;
  });
console.log(NavratriSpecial);

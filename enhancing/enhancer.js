module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  (item.enhancement < 20) ? item.enhancement = item.enhancement + 1 : null;
  return { ...item };
}

function fail(item) {
  (item.enhancement < 15) ? item.durability = item.durability - 5 : item.durability = item.durability - 10;
  (item.enhancement > 16) ? item.enhancement = item.enhancement - 1 : null;
  return { ...item };
}

function repair(item) {
  item.durability = 100;
  return { ...item };
}

function get(item) {
  (item.enhancement > 0) ? item.name = `[+${item.enhancement}] ${item.name}` : null;
  return { ...item };
}

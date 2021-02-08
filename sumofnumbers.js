function sumFor(list) {
  let forsum = 0;
  for (let i = 0; i < list.length; i++) {
    forsum += list[i];
  }
  return forsum;
}

console.log(sumFor([1, 3, 5, 7, 9]));

function sumWhile(list) {
  let whilesum = 0;
  let i = 0;
  while (i < list.length) {
    whilesum += list[i];
    i++;
  }
  return whilesum;
}

console.log(sumWhile([1, 2, 3]));

function sumRecursion(list, n) {
  if (n <= 0) {
    return 0;
  }
  return sumRecursion(list, n - 1) + list[n - 1];
}

console.log(sumRecursion([1, 3, 5, 7, 9], 5));

function sumTheSimpleWay(list) {
  return _.reduce(list, function(memo, num) {
    return memo + num;
  }, 0);
}

console.log(sumTheSimpleWay([1, 3, 5, 7, 9]));

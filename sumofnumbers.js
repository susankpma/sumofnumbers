function sumFor(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum;
}

console.log(sumFor([1, 3, 5]));

function sumWhile(list) {
  let sum = 0;
  let i = 0;
  while (i < list.length) {
    sum += list[i];
    i++;
  }
  return sum;
}

console.log(sumWhile([1, 3, 5]));

function sumRecursion(num, n) {
  if (n <= 0) {
    return 0;
  }
  return sumRecursion(num, n - 1) + num[n - 1];
}

console.log(sumRecursion([1, 3, 5], 3));

function sumTheSimpleWay(list) {
  console.log(_.reduce(list, function (memo, num) {
    return memo + num;
  }, 0));
}

sumTheSimpleWay([1, 3, 5]);

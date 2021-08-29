const fillArray = <T>(size: number, data: T) => {

  const array = [];

  for (const elem of Array(size)) {
    array.push(data);
  }

  return array;

};

const size = 3;
const data = 'hello';
const resultFA = fillArray(size, data);


const size1 = 4;
const data1 = { prop: 'x' };
const resultFA1 = fillArray(size1, data1);

console.log(resultFA);
console.log(resultFA1);

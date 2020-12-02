const cities = [
  { city: 'Madrid', population: 6_642_000 },
  { city: 'Berlin', population: 3_769_000 },
  { city: 'Moscow', population: 11_920_000 },
  { city: 'Hong Kong', population: 7_451_000 },
];
const maxPopulation = 6_000_000;

const getCityWithBiggerPopulation = (inpCities, maxPopulation) => {
  const resultedArrayOfCities = inpCities
    .reduce((accumulator, current, index) => {
      current.population > maxPopulation
        ? accumulator.push(current)
        : undefined;

      return accumulator;
    }, [])
    .forEach((item) => {
      console.log(
        `${item.city}'s population: ${item.population} > ${maxPopulation}`
      );
    });;

    // console.log(resultedArrayOfCities);
};

getCityWithBiggerPopulation(cities, maxPopulation);

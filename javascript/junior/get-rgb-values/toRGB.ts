const toRGB = (rgbString: string): object => {
  const [red, green, blue] = rgbString.match(/\d+/g)!.map(Number);
  return {
    red, green, blue
  }
};

const rgbString = 'rgb(235, 7, 98)';

const RGBValues = toRGB(rgbString);

console.log(RGBValues);

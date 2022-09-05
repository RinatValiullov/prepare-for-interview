const toRGB = (rgbString) => {
    const [red, green, blue] = rgbString.match(/\d+/g).map(Number);
    return {
        red,
        green,
        blue
    };
};
const rgbString1 = "rgb(235, 7, 98)";
const rgbString2 = "rgb(0, 0, 0)";
const RGBValues1 = toRGB(rgbString1);
const RGBValues2 = toRGB(rgbString2);
console.log(RGBValues1);
console.log(RGBValues2);
export { toRGB };

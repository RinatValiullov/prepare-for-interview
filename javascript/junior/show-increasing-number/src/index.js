const showNumber = () => {
  let number = 0;

  setTimeout(function output() {
    console.log(number++);

    if (number > 0 && number < 10) {
      setTimeout(output, number * 1000);
    }
  }, 0);
};

showNumber();

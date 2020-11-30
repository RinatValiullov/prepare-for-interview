// let app = document.querySelector('#app');

// app.innerHTML = '<h2>Welcome to show-increasing-number</h2>';

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

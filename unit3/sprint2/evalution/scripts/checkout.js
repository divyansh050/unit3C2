function proceed(event) {
  event.preventDefault();

  let name = event.target.name.value;

  // alert after 0 sec
  alert(`${name} Your Order Is Accepted`);

  setTimeout(() => {
    // alert after 3 sec

    alert(`${name} Your Order id Being Cooked`);

    setTimeout(() => {
      // alert after 8 sec

      alert(`${name}  Your order is ready`);

      setTimeout(() => {
        // alert after 10 sec

        alert(`${name}   Order out for delivery `);

        setTimeout(() => {
          // alert after 12 sec

          alert(`${name}  Order delivered `);
        }, 12000);
      }, 10000);
    }, 8000);
  }, 3000);
}

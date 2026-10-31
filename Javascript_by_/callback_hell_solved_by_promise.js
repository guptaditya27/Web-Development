// zomato some functionalities
const orderdetails = {
  orderId: 1234,
  food: ['pizza', 'coke', 'garlic bread', 'cheese'],
  cost: 620,
  customer_name: 'Aditya',
  customer_location: 'gamma 1 Greater Noida',
  restaurent_location: 'Alpha 1 Greater Noida',
  Status: false,
  token: 0,
  recived: false,
  delivery: false,
};

function placeOrder(orderdetails) {
  console.log(`${orderdetails.cost} payment is in Progress ----`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (orderdetails.cost <= 0) {
        reject(new Error('Payment failed'));
        return;
      }

      console.log('Payment is recived and order placed');
      orderdetails.Status = true;
      resolve(orderdetails);
    }, 3000);
  });
}
function PreparingOrder(orderdetails) {
  console.log(`fOOD IS PREPARING items:- ${orderdetails.food}`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!orderdetails.Status) {
        reject(new Error('Order has not been placed'));
        return;
      }

      console.log('Food is Prepared');
      orderdetails.token = 123;
      resolve(orderdetails);
    }, 3000);
  });
}

function pickupOrder(orderdetails) {
  console.log(
    `Delivery boy Picking up order from ${orderdetails.restaurent_location}`
  );

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (orderdetails.token !== 123) {
        reject(new Error('Food has not been prepared'));
        return;
      }

      console.log('I have picked up the order');
      orderdetails.recived = true;
      resolve(orderdetails);
    }, 3000);
  });
}

function deliverOrder(orderdetails) {
  console.log(`Rider on the Way ... to ${orderdetails.customer_location}`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!orderdetails.recived) {
        reject(new Error('Order has not been picked up'));
        return;
      }

      console.log('Order Delivered Successfully ...');
      orderdetails.delivery = true;
      resolve(orderdetails);
    }, 3000);
  });
}

placeOrder(orderdetails)
  .then((orderdetails) => {
    return PreparingOrder(orderdetails);
  })
  .then((orderdetails) => {
    return pickupOrder(orderdetails);
  })
  .then((orderdetails) => {
    return deliverOrder(orderdetails);
  })
  .then((orderdetails) => {
    console.log(orderdetails);
  })
  .catch((error) => {
    console.log('Error :', error.message);
  });

// mujhe yeh chaiye ki ek jb fully execute ho jyee tab hi dusra chale.
// fn execute hone ke bdd mujhe promise return kree

// .then () dursra call kr de

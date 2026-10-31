// callback fn ek fn jo as a args dusre fn ko leta hai is callback fn
// js is single threaded don't block any line of code 

// zomato some functionalities
const orderdetails={
    orderId:1234,
    food:['pizza','coke','garlic bread','cheese'],
    cost:620,
    customer_name:"Aditya",
    customer_location:"gamma 1 Greater Noida",
    restaurent_location:"Alpha 1 Greater Noida",
    Status:false,
    token:0,
    recived:false,
    delivery:true

}

function placeOrder(orderdetails,callback){
    console.log(`${orderdetails.cost} payment is in Progress ----`);
    setTimeout(()=>{
        console.log("Payment is recived and order placed")
        orderdetails.Status=true;

        callback(orderdetails);
    },3000)
}
function PreparingOrder(orderdetails,callback){
    console.log(`fOOD IS PREPARING items:- ${orderdetails.food}`);
    setTimeout(()=>{
        console.log('Food is Prepared')
        orderdetails.token=123;
        callback(orderdetails);
    },3000)
}

function pickupOrder(orderdetails,callback){
    console.log(`Delivery boy Picking up order from ${orderdetails.restaurent_location}`);

    setTimeout(()=>{
        console.log("I have picked up the order");
        orderdetails.recived=true;
        callback(orderdetails);
    },3000);
}

function deliverOrder(orderdetails){
    console.log(`Rider on the Way ... to ${orderdetails.customer_location}`)

    setTimeout(()=>{
        console.log("Order Delivered Successfully ...")
        orderdetails.delivery=true;
    },3000)
}

// need to pass call back fn inside a callback fn then how to do it .

//placeOrder(PreparingOrder); // jo order chaiye the woh hi mila using callback 


placeOrder(orderdetails,(orderdetails)=>{
    PreparingOrder(orderdetails,(orderdetails)=>{
        pickupOrder(orderdetails,(orderdetails)=>{
            deliverOrder(orderdetails);
        });
    });
})


// const callback=()=>{
//    pickupOrder();
// }
// need to call callback(); tab pickup order chlega 
// pickupOrder ki fn call call back ke andar hai to jab call back chlega tbhi pickupOrder ki fn call chlegi .


// Payment is recived and order placed
// fOOD IS PREPARING
// your Food is Ready sir
// Delivery boy Picking up order
// I have picked up the order
// Rider on the Way ...
// Order Delivered Successfully ...
// output expected ...

// This is callback hell due to intro asynchronous 


// callback code ko both tightly coupled bna deta hai and complex diff to debug and understand and each func depn on others for its successfull execution .
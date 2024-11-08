const cart = ["abc","def","ghi"];

cerateOrder(cart);
// console.log(promise);

cerateOrder(cart).then(function (orderId){
    console.log(orderId);
});

function cerateOrder(cart){
    return  new Promise(function (resolve,reject){
        if(!validateCart(cart)){
            const err= new Error("cart is not valid");
            reject(err);
        }
        const orderId ="12345";
        if(orderId)
        {
            setTimeout(function(){
                resolve(orderId);
            },5000);
        }
    }).then(print())
}
function print(){
    console.log("holaaaaa");
}
function validateCart(){
    return true;
}



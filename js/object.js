let productDetails = {
  productName: "Laptop",
  productPrice: 50000,
  productColor: "pink",
  productRate: 5,
};
console.log(productDetails.productName);
console.log(productDetails.productColor);
console.log(productDetails["productRate"]);
for(let i in productDetails){
    console.log(i)
    console.log(productDetails[i])
}

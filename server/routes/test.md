
router.post(`/${routerName}/buy`, async (req, res, next) => {
  const data = req.body.basket;
  const SP = `call ecommerceshop.SP_BUY_PRODUCTS(?, ?)`;

// console.log(data)

for (let j = 0; j < data.length; j++) {
const check = checkProductValue(data[j].pID,data[j].value)
console.log(check)
}


  // for (let i = 0; i < data.length; i++) {
  //     conn.query(SP, [data[i].pID, data[i].value], (error, result) => {
  //     if (error) {
  //       throw error;
  //     } else {
  //       console.log("Product bought successfully");
  //     }
  //   });
  // }

  // res.send("Thank you for shopping");

  
// ---------------------------
// const data = {
//   basket: [
//       { pID: "2VSkOiNmiI", value: 5 },
//       { pID: "E4bpJ4QuFZ", value: 5 }
//   ]
// };

// fetch('http://your-server-url/your-api-endpoint/buy', {
//   method: 'POST',
//   headers: {
//       'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(data)
// })
// .then(response => response.json())
// .then(data => {
//   console.log(data);
// })
// .catch(error => {
//   console.error('Error:', error);
// });


});

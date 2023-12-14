let modalBox = document.getElementsByClassName(".modal");

function show() {
  document.getElementById("modalWrapper").style.display = "block";
}

function close() {
  document.getElementById("modalWrapper").style.display = "none";
}

function add_to_cart(pid, pname, price) {
  let cart = localStorage.getItem("cart");
  if (cart == null) {
    let products = [];
    let product = {
      productId: pid,
      productName: pname,
      productQty: 1,
      productPrice: price,
    };
    products.push(product);
    localStorage.setItem("cart", json.stringify(products));
  } else {
  }
}

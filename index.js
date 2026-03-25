const dataitem = document.getElementById("proditd");
console.log("hello");

async function prodetdat() {
  try {
    const respose = await fetch("prodes.json");
    const data = await respose.json();
    console.log(data);

    data.products.forEach((item) => {
      console.log(item);
      const cards = document.createElement("div");
      cards.className = "col-md-4 col-lg-4 col-sm-4";
      cards.innerHTML = `
 <div class="card" style="width:100% gap-1rem ; ">
  <img src="${item.thumbnail}" class="card-img-top" alt="disimg">
  <div class="card-body" >
    <h5 class="card-title"> title: ${item.title}</h5>
    <p class="card-text"> category: ${item.category}</p>
    <p>${item.description}</p>
    <a href="product.html?slug=${item.slug}" class="btn btn-primary">view</a>
  </div>
</div>
      
      `;

      dataitem.appendChild(cards);
    });
  } catch (error) {
    console.log(error);
  }
}
prodetdat();

const proams = new URLSearchParams(window.location.search);
console.log(proams);
const slugs = proams.get("slug");
console.log(slugs);
const dataislug = document.getElementById("");

async function itemprod() {
  try {
    const resdpprsm = await fetch("prodes.json");
    const dataitem = await resdpprsm.json();
    console.log(dataitem);

    const itemdata = dataitem.products.find((item) => item.slug === item.slug);
    console.log(itemdata);

    document.getElementById("proditdts").innerHTML = `
   
    

<div class="col-md-4 m-auto"> 

    <div class="card shadow p-4 text-center">
        <img  src=  "${itemdata.thumbnail} " class="card-img-top mb-3  >

        <div class=card-body>
    <h3 class="text-black "> Title-${itemdata.title}</h3>
    <p > slug- ${itemdata.slug}</p>
    <p>category- ${itemdata.category}</p>
    <p class="text-primary"> Price- ${itemdata.price}</p>
    <p class="text-black"> Rating-${itemdata.rating}</p>
    <p> Brand-${itemdata.brand}</p> 
    <p> stock- ${itemdata.stock}</p>
    </div>
    </div>


    
    `;
  } catch (error) {
    console.log(error);
  }
}
itemprod();

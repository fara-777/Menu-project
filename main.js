import menu from "./db.js";

// html elamanlari alma
const menuContainer = document.querySelector("#menu-container");

// sayfa yuklendigi anda elemanlari gosteren fonksiyonu calistir
document.addEventListener("DOMContentLoaded", () => {
  displayMenuItems(menu);
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(
    (item) => `  
<div id="card"
  class="d-flex gap-3 flex-column flex-md-row align-items-center" 
>
  <img src="${item.foodimg}" alt=""
    class="img-fluid shadow rounded"
  />
  <div>
    <div class="d-flex justify-content-between my-2">
      <h5>${item.FoodName}</h5>
      <p>${item.price}</p>
    </div>
    <p class="">${item.des} </p>
  </div>
</div>
</div>`
  );

  // aralardaki vigulu silme
  displayMenu = displayMenu.join("");
  // olusturdugumuz divleri htmle gonderme
  menuContainer.innerHTML = displayMenu;
}

// Filtreleme kismi
const filterBtns = document.querySelectorAll(".filter-btn");
// dizideki her bir elamanin tiklanma olayini izleme
filterBtns.forEach((btn) => {
  // butonlara tiklanma olayini izleme
  btn.addEventListener("click", searchCategory);

  function searchCategory(e) {
    // tiklanilan butonun kategory degerini alma
    const category = e.target.dataset.id;

    // elemanlari kategory degerine gore filtreleme
    const filtredItems = menu.filter((menuItem) => {
      if (menuItem.category === category) return menuItem;
      console.log(menuItem);
    });
    // hepsi secildiyse tamamini goster degilse filtrelenmis diziye
    if (category === "all") {
      displayMenuItems(menu);
    } else {
      displayMenuItems(filtredItems);
    }
  }
});

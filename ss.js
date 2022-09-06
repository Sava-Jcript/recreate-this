const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(7, 5);


fetch("/Users/alimerkouk/Desktop/s2/recreate this/list.json")
.then((res)=>res.json())
.then(collectEach); 


function collectEach(data){
data.forEach(showCategory); 

}


function showCategory(oneCategory){




    const template = document.querySelector("template").content; 

    // Clone it 

    const copy = template.cloneNode(true); 


copy.querySelector("a").textContent=oneCategory.category;
copy.querySelector("a").href= `/Users/alimerkouk/Desktop/product/product-list.html?category=${oneCategory.category}`;


    // grab parent
    const parent=document.querySelector("#letter_b ol"); 
// Append

parent.appendChild(copy);


console.log(oneCategory);


}


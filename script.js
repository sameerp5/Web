let products = [{
                    id:101,
                    img:"https://imgs.search.brave.com/rTBjQlBIaOAmQJeMP_UzOMfcsoOZDYH4F0bcbEps1A0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFPbFJGQmpyN0wu/anBn",
                    name:"Samsung",
                    price: 40000,
                    qty:1
                },
                {
                    id:102,
                    img:"https://imgs.search.brave.com/W59IJHC2JcX4JJX3rcDED0ys_nHotwD0yppYD3ytyhM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMubWFjcnVtb3Jz/LmNvbS9hcnRpY2xl/LW5ldy8yMDE5LzEw/L2lwaG9uZTEyZGVz/aWduLmpwZw",
                    name:"Iphone",
                    price: 80000,
                    qty:1
                },
                {
                    id:103,
                    img:"https://imgs.search.brave.com/bFDAY-1ydtxzFOk7WPhgHZhNorjqJk_l2B-rw2X1w9E/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90LW1v/YmlsZS5zY2VuZTcu/Y29tL2lzL2ltYWdl/L1RtdXNwcm9kL2Zn/LW9uZXBsdXMtMTB0/LTc1MHg3NTA_dHM9/MTY4MzIwNzQ5OTE4/MCYkcG5ndHJhbnNw/YXJlbnQkJmRwcj1v/ZmY",
                    name:"Oneplus",
                    price: 30000,
                    qty:1
                }
                ];

let disTag = document.querySelector('#display');

function incQty(id){
    let prod = products.map((item)=>{
        if(item.id == id){
            return {
                ...item,
                qty: ++item.qty
            };
        }
        else{
                return item
            }
    });
    dispProd(prod);
    
}
dispProd(products);
function dispProd(items){
    if(items.length>0){
        let eachItem = ``;
        for(let item of items){
            eachItem += `<div class="row">
            <div class="col-6">
                <div class="row">
                    <div class="col-4">
                        <img src="${item.img}" alt="Image not found">
                    </div>
                    <div class="col-8">
                        <h1>${item.name}</h1>
                        <h4>${item.price} &#8377</h4>
                        <h2><i class="fa fa-minus-circle pe-3"></i>${item.qty}<i class="fa fa-plus-circle ps-3" onclick="incQty(${item.id})"></i></h2>
                        <small>${item.price * item.qty}</small>
                    </div>
                </div>
            </div>
        </div>`;
        }
        disTag.innerHTML = eachItem;
    }
}

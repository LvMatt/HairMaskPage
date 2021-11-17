var container = document.getElementById('productsListContainer');
var productGroup = document.getElementById('productOrganicGroup');

for(i = 0; i < 8; i++){
    container.innerHTML += `
        <div class="productItem">
            <div class="productItemImage">
                <img src="./images/image 5.jpg" alt="">
            </div>
            <div class="productItemTextSection">
                <div class="productItemHeadline">
                    HAND POMADE / POMMADE MAINS
                </div>
                <div class="productItemSubHeadline">
                    NOURISHMENT FOR YOUR HANDS
                </div>
                <div class="productItemPrice">
                    159,00 KR
                </div>
            </div>
        </div>
    </div>
    `
}

for(i = 0; i < 4; i++){
    productGroup.innerHTML += `
        <div class="item">
            <div class="itemContainer">
                <img src="./images/Group 194.png" alt="">
                <h5>100% Organic</h5>
            </div>
        </div>
    `
}

function previous(){
    document.getElementById('productsListContainer').scrollLeft -= 470;
}
function next()
{
    document.getElementById('productsListContainer').scrollLeft += 470;
}
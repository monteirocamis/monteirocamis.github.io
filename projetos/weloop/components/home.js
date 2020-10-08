function loadAllProducts(){
    $.ajax({
        type: 'GET',
        url: "http://api.we-loop.com.br/home",
        statusCode: {
            200: function(data){
                var products = Array();
                jsonData = JSON.parse(data);

                jsonData.records.forEach(function(record){
                    products.push(this.getProduct(record))
                });

                _appendProductsInRow("#product_detail", products)
            }
        }
    });

}

function getProduct(record){
    var product = {
        name: record.fields["Título do Produto"], 
        price: record.fields["Preço"], 
        image_name: record.fields["Imagens"][0].url
    }
    return product
}

function _appendProductsInRow(id, products){
    var itens = "";
    var numberOfProductAdd = 1;
    products.forEach(function(product){
        productDetail =  _appendProduct(product)
        itens = itens+productDetail
        if (numberOfProductAdd == 4){
            var html = `<div class="row">%product%</div>`
            html = html.replace("%product%", itens);
            $(id).append(html); 
            numberOfProductAdd = 0 ;
            itens = "";
        }
        numberOfProductAdd++
    });

    if (numberOfProductAdd <= 4){
        var html = `<div class="row">%product%</div>`
        html = html.replace("%product%", itens);
        $(id).append(html); 
    }

    
}


function _appendProduct(product){

    let html = `
            <div class="col-50 medium-25">
                <div class="content-item radius-default bg-white">
                    <a href="/ads-details/">
                        <img class="full-width radius-default" src="%image_name%" alt="">
                        <div class="text-desc">
                            <p class="title-item2">%product_name%</p>
                            <p class="price-item">R$ %price%</p>
                            <p class="location-item"><ion-icon name="map-outline"></ion-icon>RIO DE JANEIRO, RJ</p>
                        </div>
                    </a>
                </div>
            </div>
    `

    html = html.replace("%product_name%", product.name);
    html = html.replace("%price%", product.price);
    html = html.replace("%image_name%", product.image_name);
    return html
}
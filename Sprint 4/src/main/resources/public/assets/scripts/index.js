let divCarInd = document.getElementById('car_indicator'),
    divCarImgs = document.getElementById('car_imgs'),
    divCarInst = document.getElementById('inst_carrossel');

let instituicoes, carousel;

if(load_instsData() == 200) load_InstsCarousel();
if(load_carouselData() == 200) load_Carousel();

// ----------------------------------------------------------------------------------------------------------------------------------- //

function setClickInst(id) 
{
    sessionStorage.setItem('id_clickInst', id);
    location.href = "instituicao.html";
}

// ----------------------------------------------------------------------------------------------------------------------------------- //

function load_instsData()
{
    $.ajax({

        async: false,
        url: 'http://localhost:6587/institutions',
        method: 'GET',

        success: function(result, json, data) { 
            
            instituicoes = JSON.parse(result);

            // ---------------------- //

            response = data.status;
        },

        error: function(req, status, error) { response = req.status; }
    })
    return response;
}

// ----------------------------------------------------------------------------------------------------------------------------------- //

function load_InstsCarousel() 
{
    let texto = '';

    // Montar um bloco de informações para cada instituição
    for(i = 0; i < instituicoes.length; i++) 
    {
        let instInfo = instituicoes[i],
            textCat = '';

        if(instInfo.category == 0) textCat = 'Alimentos, cestas básicas';
        else if(instInfo.category == 1) textCat = 'Roupas, sapatos, cobertores';
        else if(instInfo.category == 2) textCat = 'Itens de higiene';
        else if(instInfo.category == 3) textCat = 'Itens de mercado em geral';
        else if(instInfo.category == 4) textCat = 'Livros, brinquedos';
        else if(instInfo.category == 5) textCat = 'Bens materiais';
        else if(instInfo.category == 6) textCat = 'Dinheiro';

        if(i == 0) texto += `<div class="carousel-item active">`;
        else texto += `<div class="carousel-item">`;

        texto +=
            `<span class="inst_info">
                <img src="${instInfo.image_url}" alt="${instInfo.name}" width="200" height="200">
                <h5>${instInfo.name}</h5>
                <h6>
                    <b>Contato:</b> ${instInfo.phone}<br>
                    <b>Endereço:</b> ${instInfo.address}<br>
                    <b>Categoria:</b> ${textCat}
                </h6>
                <button type="button" class="btn inst_saibaMais" onclick="setClickInst(${instInfo.id})"><i class="fas fa-plus"></i>Saiba mais</button>
            </span>
        </div>`;
    };

    // Preencher a DIV com o texto HTML
    divCarInst.innerHTML = texto;
}

// ----------------------------------------------------------------------------------------------------------------------------------- //

function load_carouselData()
{
    $.ajax({

        async: false,
        url: 'http://localhost:6587/carousel',
        method: 'GET',

        success: function(result, json, data) { 
            
            carousel = JSON.parse(result);

            // ---------------------- //

            response = data.status;
        },

        error: function(req, status, error) { response = req.status; }
    })
    return response;
}

// ----------------------------------------------------------------------------------------------------------------------------------- //

function load_Carousel() 
{
    let divButtonsControl = document.getElementById('btns_control');

    if(getUserLogged() == -1) divButtonsControl.style.display = 'none';
    else divButtonsControl.innerHTML = `<div id="btns_control" class="camp_controle container-fluid">
                <div class="row">
                    <span class="col-6 text-right"><button data-toggle="modal" data-target="#addImgModal" class="btn btn_campAdd"><i class="fas fa-plus"></i>Adicionar imagem</button></span>
                    <span class="col-6 text-left"><button onclick="excluirImg()" class="btn btn_campExcluir"><i class="fas fa-trash"></i>Excluir imagem</button></span>
                </div>
            </div>`;

    // --------------- //

    let textoInd = '',
        textoImg = '';

    // Montar um bloco de informações para cada instituição
    for(i = 0; i < carousel.length; i++) {

        let imgInfo = carousel[i];

        if(i == 0) 
        {
            textoInd += `<li data-target="#carouselExampleIndicators" data-slide-to="${i}" class="carImg-indicator active"></li>`;
            textoImg += `<div class="carImg-item carousel-item active">
                            <img class="d-block w-100" src="${imgInfo.image_url}" alt="${imgInfo.description}">
                        </div>`;
        }
        else
        {
            textoInd += `<li data-target="#carouselExampleIndicators" data-slide-to="${i}" class="carImg-indicator"></li>`;
            textoImg += `<div class="carImg-item carousel-item">
                            <img class="d-block w-100" src="${imgInfo.image_url}" alt="${imgInfo.description}">
                        </div>`;
        }

        divCarInd.innerHTML = textoInd;
        divCarImgs.innerHTML = textoImg;
    };
}

// ----------------------------------------------------------------------------------------------------------------------------------- //

function addImg()
{
    let allAreFilled = true;

    document.getElementById("form_addImg").querySelectorAll("[required]").forEach(function(i) 
    {
        if(!allAreFilled) return;
        if(!i.value) allAreFilled = false;
    })

    if(allAreFilled) 
    {
        event.preventDefault();

        let add_altInput = document.getElementById('addImg_alt');
       
        image_url = 'assets/images/img-car/car_' + (Math.floor(Math.random() * 3) + 1) + '.jpg';
        description = add_altInput.value;
    
        $.ajax({
    
            url: 'http://localhost:6587/carousel/insert',
            method: 'POST',
            data: {
                image_url,
                description
            },
    
            success: function(result, json, data) { if(load_carouselData() == 200) load_Carousel(); },
            error: function(req, status, error) {
                
                bootbox.alert({
                    closeButton: false,
                    message: `Ocorreu um erro ao adicionar uma nova imagem.`,
                    size: 'small',
                    buttons: {
                        ok: {
                            label: 'Fechar',
                            className: 'btn_green'
                        },
                    },
                });
            }
        })

        $('#addImgModal').modal('hide');
    }
}

// ----------------------------------------------------------------------------------------------------------------------------------- //

function excluirImg()
{
    let img,
        listItem = $(".carImg-indicator.active");
    
    let id_img = $("li").index(listItem) - 4;

    $.ajax({

        async: false,
        url: 'http://localhost:6587/carousel/offset/' + id_img,
        method: 'GET',

        success: function(result, json, data) { img = JSON.parse(result); }
    })

    $.ajax({

        async: false,
        url: 'http://localhost:6587/carousel/delete/' + img.id,
        method: 'GET',
    })

    if(load_carouselData() == 200) load_Carousel();
}
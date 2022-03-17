let divCarInd = document.getElementById('car_indicator'),
    divCarImgs = document.getElementById('car_imgs'),
    divCarInst = document.getElementById('inst_carrossel');

loadImgs();
loadInsts();

// ----------------------------------------------------------------------------------------------------------------------------------- //

function loadImgs() 
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
    for(i = 0; i < imgs.length; i++) {

        let imgInfo = imgs[i];

        if(i == 0) 
        {
            textoInd += `<li data-target="#carouselExampleIndicators" data-slide-to="${i}" class="carImg-indicator active"></li>`;
            textoImg += `<div class="carImg-item carousel-item active">
                            <img class="d-block w-100" src="${imgInfo.href}" alt="${imgInfo.alt}">
                        </div>`;
        }
        else
        {
            textoInd += `<li data-target="#carouselExampleIndicators" data-slide-to="${i}" class="carImg-indicator"></li>`;
            textoImg += `<div class="carImg-item carousel-item">
                            <img class="d-block w-100" src="${imgInfo.href}" alt="${imgInfo.alt}">
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

        let add_altInput = document.getElementById('addImg_alt'),
            add_fileInput = document.getElementById('addImg_file');
        
        let file_path = add_fileInput.files[0];
        let fr = new FileReader(), imgResult;

        fr.onloadend = function() 
        { 
            imgResult = fr.result; 

            let newImg = 
            {
                "href": imgResult,
                "alt": add_altInput.value,
            };

            imgs.push(newImg);
            localStorage.setItem("img_carrossel", JSON.stringify(imgs));

            loadImgs();

            $('#addImgModal').modal('hide');
        }

        fr.readAsDataURL(file_path);
    }
}

// ----------------------------------------------------------------------------------------------------------------------------------- //

function excluirImg()
{
    let listItem = $(".carImg-indicator.active");
    let id_img = $("li").index(listItem) - 4;

    imgs.splice(id_img, 1);
    localStorage.setItem("img_carrossel", JSON.stringify(imgs));

    loadImgs();
}

// ----------------------------------------------------------------------------------------------------------------------------------- //

function setClickInst(id) 
{
    sessionStorage.setItem('id_clickInst', id);
    location.href = "instituicao.html";
}

// ----------------------------------------------------------------------------------------------------------------------------------- //

function loadInsts() 
{
    let texto = '';

    // Montar um bloco de informações para cada instituição
    for(i = 0; i < instituicoes.length; i++) 
    {
        let instInfo = instituicoes[i],
            textCat = '';

        if(instInfo.categoria == 0) textCat = 'Alimentos, cestas básicas';
        else if(instInfo.categoria == 1) textCat = 'Roupas, sapatos, cobertores';
        else if(instInfo.categoria == 2) textCat = 'Itens de higiene';
        else if(instInfo.categoria == 3) textCat = 'Itens de mercado em geral';
        else if(instInfo.categoria == 4) textCat = 'Livros, brinquedos';
        else if(instInfo.categoria == 5) textCat = 'Bens materiais';
        else if(instInfo.categoria == 6) textCat = 'Dinheiro';

        if(i == 0) texto += `<div class="carousel-item active">`;
        else texto += `<div class="carousel-item">`;

        texto +=
            `<span class="inst_info">
                <img src="${instInfo.logo}" alt="${instInfo.nome}" width="200" height="200">
                <h5>${instInfo.nome}</h5>
                <h6>
                    <b>Contato:</b> ${instInfo.telefone}<br>
                    <b>Endereço:</b> ${instInfo.endereco}<br>
                    <b>Categoria:</b> ${textCat}
                </h6>
                <button type="button" class="btn inst_saibaMais" onclick="setClickInst(${i})"><i class="fas fa-plus"></i>Saiba mais</button>
            </span>
        </div>`;
    };

    // Preencher a DIV com o texto HTML
    divCarInst.innerHTML = texto;
}
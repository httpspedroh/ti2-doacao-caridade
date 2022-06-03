let instId_Clicked = sessionStorage.getItem("id_clickInst");

if(instId_Clicked == -1) location.href = '/';
if(load_instData() == 200) load_instInfo();
if(load_newsData() == 200) load_newsInfo();

// ----------------------------------------------------------------------------------------------------------------------------------- //

function load_instData() {

    $.ajax({

        async: false,
        url: 'http://localhost:6587/institutions/' + instId_Clicked,
        method: 'GET',

        success: function(result, json, data) { 
            
            inst = JSON.parse(result);

            // ---------------------- //

            response = data.status;
        },

        error: function(req, status, error) { response = req.status; }
    })
    return response;
}

// ----------------------------------------------------------------------------------------------------------------------------------- //

function load_instInfo() 
{
    let text = '',
        textCat = '';

    if(inst.category == 0) textCat = 'Alimentos, cestas básicas';
    else if(inst.category == 1) textCat = 'Roupas, sapatos, cobertores';
    else if(inst.category == 2) textCat = 'Itens de higiene';
    else if(inst.category == 3) textCat = 'Itens de mercado em geral';
    else if(inst.category == 4) textCat = 'Livros, brinquedos';
    else if(inst.category == 5) textCat = 'Bens materiais';
    else if(inst.category == 6) textCat = 'Dinheiro';

    text += `
    <div class="col-12 col-xl-3 align-self-center text-center">
        <img src="${inst.image_url}" alt="${inst.name}" width="250" height="250">
        <br><span class="infoInst_contato"><i class="fas fa-phone-alt"></i>${inst.phone}</span>
    </div>
    <div class="infoInst_general col-12 col-xl-9 align-self-center">
        <span class="infoInst_nome">${inst.name}</span>
        <br><span class="infoInst_categoria">${textCat}</span>
        <p>${inst.description}</p>`;

    if(getUserLogged() == instId_Clicked)
    {
        text += `<button onclick="openEditModal()" class="infoInst_editar btn" data-toggle="modal" data-target="#editDataModal"><i class="fas fa-cogs"></i>Editar informações</button>
        <button class="infoInst_editar btn" data-toggle="modal" data-target="#newNewModal"><i class="far fa-newspaper"></i>Nova notícia</button>`;
    }

    text += `</div>`;

    document.getElementById('inst_info').innerHTML = text;
    document.getElementById('inst_map').innerHTML = `<iframe width="600" height="450" style="border:0" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBtqkUaBFscfVerKFh1bb2A3yfDqS24m6c&q=${inst.address}"></iframe>`;
}

// ----------------------------------------------------------------------------------------------------------------------------------- //

let edit_nameInput = document.getElementById('edit_name'),
    edit_logoFile = document.getElementById('edit_logo'),
    edit_userInput = document.getElementById('edit_user'),
    edit_passInput = document.getElementById('edit_pass'),
    edit_catSelect = document.getElementById('edit_categoria'),
    edit_endInput = document.getElementById('edit_endereco'),
    edit_telInput = document.getElementById('edit_telefone'),
    edit_descInput = document.getElementById('edit_descricao');

// ----------------------------------------------------------------------------------------------------------------------------------- //

function openEditModal()
{
    edit_nameInput.value = inst.name;
    edit_userInput.value = inst.username;
    edit_passInput.value = inst.password;
    edit_catSelect.value = inst.category;
    edit_endInput.value = inst.address;
    edit_telInput.value = inst.phone;
    edit_descInput.value = inst.description;
}

// ----------------------------------------------------------------------------------------------------------------------------------- //

function saveUserInfo()
{
    let allAreFilled = true;

    document.getElementById("form_editInfo").querySelectorAll("[required]").forEach(function(i) 
    {
        if(!allAreFilled) return;
        if(!i.value) allAreFilled = false;
    })

    if(allAreFilled) 
    {
        event.preventDefault();

        name = edit_nameInput.value;
        image_url = 'assets/images/inst-profile/inst_' + (Math.floor(Math.random() * 9) + 1) + '.png';
        username = edit_userInput.value;
        password = edit_passInput.value;
        category = edit_catSelect.value;
        address = edit_endInput.value;
        phone = edit_telInput.value;
        description = edit_descInput.value;

        $.ajax({
        
            url: 'http://localhost:6587/institutions/update/' + inst.id,
            method: 'POST',
            data: {
                username,
                name,
                password,
                image_url,
                category,
                address,
                phone,
                description
            },

            success: function(result, json, data) { if(load_instData() == 200) load_instInfo(); },
            error: function(req, status, error) {
                
                bootbox.alert({
                    closeButton: false,
                    message: `Ocorreu um erro ao salvar os dados da instituição.`,
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

        $('#editDataModal').modal('hide');
    }
}

// ----------------------------------------------------------------------------------------------------------------------------------- //

function edit_userLostFocus()
{   
    let search = inst_searchByUser(edit_userInput.value);

    console.log(search);

    if(search != 404)
    {
        if(instId_Clicked != search.id)
        {
            document.getElementById('edit_userForm').style.border = "1px solid red";
            document.getElementById('edit_userForm').style.borderRadius = "0.25rem";
            document.getElementById('label_user').style.color = "#FF0000";
            document.getElementById('label_user').innerHTML = "Usuário indisponível";
        }
    }
    else if(edit_userInput.value.length < 5)
    {
        document.getElementById('edit_userForm').style.border = "1px solid red";
        document.getElementById('edit_userForm').style.borderRadius = "0.25rem";
        document.getElementById('label_user').style.color = "#FF0000";
        document.getElementById('label_user').innerHTML = "Mín. 5 caracteres";
    }
    else
    {
        document.getElementById('edit_userForm').style.border = "1px solid green";
        document.getElementById('edit_userForm').style.borderRadius = "0.25rem";
        document.getElementById('label_user').style.color = "inherit";
        document.getElementById('label_user').innerHTML = "Usuário";
    }
}

// ----------------------------------------------------------------------------------------------------------------------------------- //

function edit_passLostFocus()
{
    if(edit_passInput.value.length < 8)
    {
        document.getElementById('edit_passForm').style.border = "1px solid red";
        document.getElementById('edit_passForm').style.borderRadius = "0.25rem";
        document.getElementById('label_pass').style.color = "#FF0000";
        document.getElementById('label_pass').innerHTML = "Mín. 8 caracteres";
    }
    else 
    {
        document.getElementById('edit_passForm').style.border = "1px solid green";
        document.getElementById('edit_passForm').style.borderRadius = "0.25rem";
        document.getElementById('label_pass').style.color = "inherit";
        document.getElementById('label_pass').innerHTML = "Senha";
    }
}

// ----------------------------------------------------------------------------------------------------------------------------------- //

function load_newsData() {

    $.ajax({

        async: false,
        url: 'http://localhost:6587/news/' + instId_Clicked,
        method: 'GET',

        success: function(result, json, data) { 
            
            news = JSON.parse(result);

            // ---------------------- //

            response = data.status;
        },

        error: function(req, status, error) { response = req.status; }
    })
    return response;
}

// ----------------------------------------------------------------------------------------------------------------------------------- //

function load_newsInfo()
{
    let text = '';

    if(news.length == 0) document.getElementById('div_News').innerHTML = "<i>Nenhuma notícia encontrada.";
    else
    {
        for(x = news.length - 1; x >= 0; x--)
        {
            let noticia = news[x];
            let dateIso = new Date(noticia.date);

            console.log(noticia.date);

            text += `
            <div class="blog_noticia row">
                <div class="blog_noticiaImg col-12 col-xl-4 text-center align-self-center"><img src="${noticia.image_url}" alt="${noticia.title}"></div>
                <div class="blog_noticiaCorpo col-12 col-xl-8">
                    <div class="blog_noticiaTitulo justify-content-center">${noticia.title}
                        <div class="blog_noticiaData text-center d-flex">Postado em ${dateIso.toLocaleString('pt-br')}</div>
                    </div>
                    <div class="blog_noticiaDescricao">
                        <p>${noticia.description}</p>
                    </div>`;
            
            if(getUserLogged() == instId_Clicked) text += 
            `<div>
                <button onclick="openEditNewModal(${x})" class="blog_ntc_editar btn" data-toggle="modal" data-target="#editNewModal"><i class="fas fa-cogs"></i>Editar</button>
                <button onclick="deleteNew(${x})" class="blog_ntc_excluir btn"><i class="far fa-newspaper"></i>Excluir</button>
            </div>`;

            text += `</div></div>`;

            document.getElementById('div_News').innerHTML = text;
        }
    }
}

// ----------------------------------------------------------------------------------------------------------------------------------- //

function addNewNew()
{
    let allAreFilled = true;

    document.getElementById("form_addNewNew").querySelectorAll("[required]").forEach(function(i) 
    {
        if(!allAreFilled) return;
        if(!i.value) allAreFilled = false;
    })

    if(allAreFilled)
    {
        $('#newNewModal').modal('hide');
        
        event.preventDefault();

        let addNew_titleInput = document.getElementById('newNew_title'),
            addNew_captionInput = document.getElementById('newNew_caption');

        let today = new Date();
        
        inst_id = instId_Clicked;
        date = today.toISOString();
        title = addNew_titleInput.value;
        description = addNew_captionInput.value;
        image_url = 'assets/images/news/new_' + (Math.floor(Math.random() * 18) + 1) + '.jpg';

        $.ajax({
        
            url: 'http://localhost:6587/news/insert',
            method: 'POST',
            data: {
                inst_id,
                date,
                title,
                description,
                image_url
            },

            success: function(result, json, data) { if(load_newsData() == 200) load_newsInfo(); },
            error: function(req, status, error) {
                
                bootbox.alert({
                    closeButton: false,
                    message: `Ocorreu um erro ao criar uma nova notícia.`,
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

        $('#newNewModal').modal('hide');
    }
}

// ----------------------------------------------------------------------------------------------------------------------------------- //

let edit_newTitle = document.getElementById('editNew_title'),
    edit_newCaption = document.getElementById('editNew_caption');

// ----------------------------------------------------------------------------------------------------------------------------------- //

function openEditNewModal(newid) 
{ 
    sessionStorage.setItem("id_clickNew", newid);

    edit_newTitle.value = news[newid].title;
    edit_newCaption.value = news[newid].description;
}

// ----------------------------------------------------------------------------------------------------------------------------------- //

function editNew()
{
    let allAreFilled = true;

    document.getElementById("form_editNew").querySelectorAll("[required]").forEach(function(i) 
    {
        if(!allAreFilled) return;
        if(!i.value) allAreFilled = false;
    })

    if(allAreFilled) 
    {
        event.preventDefault();
        
        let noticia = news[sessionStorage.getItem("id_clickNew")];

        title = edit_newTitle.value;
        description = edit_newCaption.value;
    
        $.ajax({
        
            url: 'http://localhost:6587/news/update/' + noticia.id,
            method: 'POST',
            data: {
                title,
                description
            },

            success: function(result, json, data) { if(load_newsData() == 200) load_newsInfo(); },
            error: function(req, status, error) {
                
                bootbox.alert({
                    closeButton: false,
                    message: `Ocorreu um erro ao salvar os dados da notícia.`,
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
        
        $('#editNewModal').modal('hide');
    
        sessionStorage.removeItem("id_clickNew");
    }
}

// ----------------------------------------------------------------------------------------------------------------------------------- //

function deleteNew(newid)
{
    $.ajax({

        async: false,
        url: 'http://localhost:6587/news/delete/' + news[newid].id,
        method: 'GET',

        success: function(result, json, data) { if(load_newsData() == 200) load_newsInfo(); },
        error: function(req, status, error) {
                
            bootbox.alert({
                closeButton: false,
                message: `Ocorreu um erro ao deletar a notícia.`,
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
}
let instId_Clicked = sessionStorage.getItem("id_clickInst");
let inst = instituicoes[instId_Clicked];

if(instId_Clicked == -1 || inst == undefined) location.href = '/';

loadInstInfo();
loadNews();

// ----------------------------------------------------------------------------------------------------------------------------------- //

function loadInstInfo() 
{
    let text = '',
        textCat = '';

    if(inst.categoria == 0) textCat = 'Alimentos, cestas básicas';
    else if(inst.categoria == 1) textCat = 'Roupas, sapatos, cobertores';
    else if(inst.categoria == 2) textCat = 'Itens de higiene';
    else if(inst.categoria == 3) textCat = 'Itens de mercado em geral';
    else if(inst.categoria == 4) textCat = 'Livros, brinquedos';
    else if(inst.categoria == 5) textCat = 'Bens materiais';
    else if(inst.categoria == 6) textCat = 'Dinheiro';

    text += `
    <div class="col-12 col-xl-3 align-self-center text-center">
        <img src="${inst.logo}" alt="${inst.nome}" width="250" height="250">
        <br><span class="infoInst_contato"><i class="fas fa-phone-alt"></i>${inst.telefone}</span>
    </div>
    <div class="infoInst_general col-12 col-xl-9 align-self-center">
        <span class="infoInst_nome">${inst.nome}</span>
        <br><span class="infoInst_categoria">${textCat}</span>
        <p>${inst.descricao}</p>`;

    if(getUserLogged() == instId_Clicked)
    {
        text += `<button onclick="openEditModal()" class="infoInst_editar btn" data-toggle="modal" data-target="#editDataModal"><i class="fas fa-cogs"></i>Editar informações</button>
        <button class="infoInst_editar btn" data-toggle="modal" data-target="#newNewModal"><i class="far fa-newspaper"></i>Nova notícia</button>`;
    }

    text += `</div>`;

    document.getElementById('inst_info').innerHTML = text;
    document.getElementById('inst_map').innerHTML = `<iframe width="600" height="450" style="border:0" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBtqkUaBFscfVerKFh1bb2A3yfDqS24m6c&q=${inst.endereco}"></iframe>`;
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
    edit_nameInput.value = inst.nome;
    edit_userInput.value = inst.user;
    edit_passInput.value = inst.senha;
    edit_catSelect.value = inst.categoria;
    edit_endInput.value = inst.endereco;
    edit_telInput.value = inst.telefone;
    edit_descInput.value = inst.descricao;
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

        let file_path = edit_logoFile.files[0];

        if(file_path != undefined)
        {
            let fr = new FileReader(), imgResult;

            fr.onloadend = function() 
            { 
                imgResult = fr.result; 

                inst.nome = edit_nameInput.value;
                inst.logo = imgResult;
                inst.user = edit_userInput.value;
                inst.senha = edit_passInput.value;
                inst.categoria = edit_catSelect.value;
                inst.endereco = edit_endInput.value;
                inst.telefone = edit_telInput.value;
                inst.descricao = edit_descInput.value;

                localStorage.setItem("instituicoes", JSON.stringify(instituicoes));

                loadInstInfo();

                $('#editDataModal').modal('hide');
            }

            fr.readAsDataURL(file_path);
        }
        else
        {
            inst.nome = edit_nameInput.value;
            inst.user = edit_userInput.value;
            inst.senha = edit_passInput.value;
            inst.categoria = edit_catSelect.value;
            inst.endereco = edit_endInput.value;
            inst.telefone = edit_telInput.value;
            inst.descricao = edit_descInput.value;

            localStorage.setItem("instituicoes", JSON.stringify(instituicoes));

            loadInstInfo();

            $('#editDataModal').modal('hide');
        }
    }
}

// ----------------------------------------------------------------------------------------------------------------------------------- //

function edit_userLostFocus()
{   
    let i_id = instituicoes.findIndex(x => x.user === edit_userInput.value);

    if(i_id != -1)
    {
        if(instId_Clicked != i_id)
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
        event.preventDefault();

        let addNew_imgFile = document.getElementById('newNew_img'),
            addNew_titleInput = document.getElementById('newNew_title'),
            addNew_captionInput = document.getElementById('newNew_caption');

        let file_path = addNew_imgFile.files[0];
        let fr = new FileReader(), imgResult;

        fr.onloadend = function() 
        { 
            imgResult = fr.result; 
        
            let today = new Date();
            let newNew = 
            {
                "href": imgResult,
                "titulo": addNew_titleInput.value,
                "data": today.toISOString(),
                "descricao": addNew_captionInput.value,
            };

            news[instId_Clicked].push(newNew);
            localStorage.setItem("inst_news", JSON.stringify(news));

            loadNews();

            $('#newNewModal').modal('hide');
        }

        fr.readAsDataURL(file_path);
    }
}

// ----------------------------------------------------------------------------------------------------------------------------------- //

function loadNews()
{
    let text = '';

    if(news[instId_Clicked].length == 0) document.getElementById('div_News').innerHTML = "<i>Nenhuma notícia encontrada.";
    else
    {
        for(x = news[instId_Clicked].length - 1; x >= 0; x--)
        {
            let noticia = news[instId_Clicked][x];
            let dateIso = new Date(noticia.data);

            text += `
            <div class="blog_noticia row">
                <div class="blog_noticiaImg col-12 col-xl-4 text-center align-self-center"><img src="${noticia.href}" alt="${noticia.titulo}"></div>
                <div class="blog_noticiaCorpo col-12 col-xl-8">
                    <div class="blog_noticiaTitulo justify-content-center">${noticia.titulo}
                        <div class="blog_noticiaData text-center d-flex">Postado em ${dateIso.toLocaleString('pt-br')}</div>
                    </div>
                    <div class="blog_noticiaDescricao">
                        <p>${noticia.descricao}</p>
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

let edit_newTitle = document.getElementById('editNew_title'),
    edit_newCaption = document.getElementById('editNew_caption');

// ----------------------------------------------------------------------------------------------------------------------------------- //

function openEditNewModal(newid) 
{ 
    sessionStorage.setItem("id_clickNew", newid);

    edit_newTitle.value = news[instId_Clicked][newid].titulo;
    edit_newCaption.value = news[instId_Clicked][newid].descricao;
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
        
        let file_path = document.getElementById('editNew_img').files[0],
            noticia = news[instId_Clicked][sessionStorage.getItem("id_clickNew")];

        if(file_path != undefined)
        {
            let fr = new FileReader(), imgResult;

            fr.onloadend = function() 
            { 
                imgResult = fr.result; 

                noticia.href = imgResult;
                noticia.titulo = edit_newTitle.value;
                noticia.descricao = edit_newCaption.value;

                localStorage.setItem("inst_news", JSON.stringify(news));

                loadNews();

                $('#editNewModal').modal('hide');
            }

            fr.readAsDataURL(file_path);
        }
        else
        {
            noticia.titulo = edit_newTitle.value;
            noticia.descricao = edit_newCaption.value;

            localStorage.setItem("inst_news", JSON.stringify(news));

            loadNews();

            $('#editNewModal').modal('hide');
        }

        sessionStorage.removeItem("id_clickNew");
    }
}

// ----------------------------------------------------------------------------------------------------------------------------------- //

function deleteNew(newid)
{
    news[instId_Clicked].splice(newid, 1);
    localStorage.setItem("inst_news", JSON.stringify(news));

    loadNews();
}
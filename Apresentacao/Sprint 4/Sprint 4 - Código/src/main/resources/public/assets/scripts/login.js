if(getUserLogged() != -1) location.href = '/';

let reg_userInput = document.getElementById('reg_user')
    reg_passInput = document.getElementById('reg_pass');

document.getElementById('login_btn').addEventListener('click', checkLogin);

// ------------------------------------------------------------------------------------------------------------------ //

function checkLogin()
{
    let log_userInput = document.getElementById('login_user'),
        log_passInput = document.getElementById('login_pass');

    if(!log_userInput.value.length || !log_passInput.value.length)
    {
        bootbox.alert({
            closeButton: false,
            message: `Os campos não podem estar vazios!`,
            size: 'small',
            buttons: {
                ok: {
                    label: 'Fechar',
                    className: 'btn_green'
                },
            },
        });

        return event.preventDefault();
    }

    // ---------------------------------------------------------------------------- //

    let inst = inst_searchByUser(log_userInput.value);
    
    if(inst == 404) {

        bootbox.alert({
            closeButton: false,
            message: `O usuário "${log_userInput.value}" não existe!`,
            size: 'small',
            buttons: {
                ok: {
                    label: 'Fechar',
                    className: 'btn_green'
                },
            },
        });
    }
    else
    {
        if(log_passInput.value === inst.password) {

            location.href = '/';
            sessionStorage.setItem('userLogged', inst.id);
        }
        else
        {
            bootbox.alert({
                closeButton: false,
                message: `A senha inserida está incorreta.`,
                size: 'small',
                buttons: {
                    ok: {
                        label: 'Fechar',
                        className: 'btn_green'
                    },
                },
            });
        }
    }

    event.preventDefault();
}

// ------------------------------------------------------------------------------------------------------------------ //

function reg_userLostFocus()
{   
    let inst = inst_searchByUser(reg_userInput.value);

    if(inst == 200) {

        document.getElementById('reg_userForm').style.border = "1px solid red";
        document.getElementById('reg_userForm').style.borderRadius = "0.25rem";
        document.getElementById('label_user').style.color = "#FF0000";
        document.getElementById('label_user').innerHTML = "Usuário indisponível";
    }
    else if(reg_userInput.value.length < 5) {

        document.getElementById('reg_userForm').style.border = "1px solid red";
        document.getElementById('reg_userForm').style.borderRadius = "0.25rem";
        document.getElementById('label_user').style.color = "#FF0000";
        document.getElementById('label_user').innerHTML = "Mín. 5 caracteres";
    }
    else {

        document.getElementById('reg_userForm').style.border = "1px solid green";
        document.getElementById('reg_userForm').style.borderRadius = "0.25rem";
        document.getElementById('label_user').style.color = "inherit";
        document.getElementById('label_user').innerHTML = "Usuário";
    }
}

// ------------------------------------------------------------------------------------------------------------------ //

function reg_passLostFocus()
{
    if(reg_passInput.value.length < 8) {

        document.getElementById('reg_passForm').style.border = "1px solid red";
        document.getElementById('reg_passForm').style.borderRadius = "0.25rem";
        document.getElementById('label_pass').style.color = "#FF0000";
        document.getElementById('label_pass').innerHTML = "Mín. 8 caracteres";
    }
    else {

        document.getElementById('reg_passForm').style.border = "1px solid green";
        document.getElementById('reg_passForm').style.borderRadius = "0.25rem";
        document.getElementById('label_pass').style.color = "inherit";
        document.getElementById('label_pass').innerHTML = "Senha";
    }
}

// ------------------------------------------------------------------------------------------------------------------ //

function reg_clickBtn()
{
    let allAreFilled = true;

    document.getElementById("form_register").querySelectorAll("[required]").forEach(function(i) 
    {
        if(!allAreFilled) return;
        if(!i.value) allAreFilled = false;
    })

    // ---------------- //

    if(allAreFilled)
    {
        event.preventDefault();

        let reg_nameInput = document.getElementById('reg_name'),
            reg_catSelect = document.getElementById('reg_categoria'),
            reg_endInput = document.getElementById('reg_endereco'),
            reg_telInput = document.getElementById('reg_telefone'),
            reg_descInput = document.getElementById('reg_descricao');
        
        $('#registerModal').modal('hide');

        username = reg_userInput.value;
        name = reg_nameInput.value;
        password = reg_passInput.value;
        image_url = 'assets/images/inst-profile/inst_' + (Math.floor(Math.random() * 9) + 1) + '.png';
        category = reg_catSelect.value;
        address = reg_endInput.value;
        phone = reg_telInput.value;
        description = reg_descInput.value;
    
        $.ajax({
    
            url: 'http://localhost:6587/institutions/insert',
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
    
            success: function(result, json, data) { 
                
                let inst = inst_searchByUser(username);

                setUserLogged(inst.id);

                bootbox.alert({
                    closeButton: false,
                    message: `Usuário criado e logado com sucesso.`,
                    size: 'small',
                    callback: function(){ location.href = '/'; },
                    buttons: {
                        ok: {
                            label: 'Fechar',
                            className: 'btn_green'
                        },
                    },
                });
            },
                
            error: function(req, status, error) {
                
                bootbox.alert({
                    closeButton: false,
                    message: `Ocorreu um erro ao criar um novo usuário.`,
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
}

// ------------------------------------------------------------------------------------------------------------------ //
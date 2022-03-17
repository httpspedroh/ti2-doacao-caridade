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

    let i_id = instituicoes.findIndex(x => x.user === log_userInput.value);

    if(i_id == -1)
    {
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
        let inst = instituicoes[i_id];

        if(log_passInput.value === inst.senha)
        {
            location.href = '/';
            sessionStorage.setItem('userLogged', i_id);
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
    let i_id = instituicoes.findIndex(x => x.user === reg_userInput.value);

    if(i_id != -1)
    {
        document.getElementById('reg_userForm').style.border = "1px solid red";
        document.getElementById('reg_userForm').style.borderRadius = "0.25rem";
        document.getElementById('label_user').style.color = "#FF0000";
        document.getElementById('label_user').innerHTML = "Usuário indisponível";
    }
    else if(reg_userInput.value.length < 5)
    {
        document.getElementById('reg_userForm').style.border = "1px solid red";
        document.getElementById('reg_userForm').style.borderRadius = "0.25rem";
        document.getElementById('label_user').style.color = "#FF0000";
        document.getElementById('label_user').innerHTML = "Mín. 5 caracteres";
    }
    else
    {
        document.getElementById('reg_userForm').style.border = "1px solid green";
        document.getElementById('reg_userForm').style.borderRadius = "0.25rem";
        document.getElementById('label_user').style.color = "inherit";
        document.getElementById('label_user').innerHTML = "Usuário";
    }
}

// ------------------------------------------------------------------------------------------------------------------ //

function reg_passLostFocus()
{
    if(reg_passInput.value.length < 8)
    {
        document.getElementById('reg_passForm').style.border = "1px solid red";
        document.getElementById('reg_passForm').style.borderRadius = "0.25rem";
        document.getElementById('label_pass').style.color = "#FF0000";
        document.getElementById('label_pass').innerHTML = "Mín. 8 caracteres";
    }
    else 
    {
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
            reg_logoFile = document.getElementById('reg_logo'),
            reg_catSelect = document.getElementById('reg_categoria'),
            reg_endInput = document.getElementById('reg_endereco'),
            reg_telInput = document.getElementById('reg_telefone'),
            reg_descInput = document.getElementById('reg_descricao');
        
        let file_path = reg_logoFile.files[0];
        let fr = new FileReader(), imgResult;

        fr.onloadend = function() 
        { 
            imgResult = fr.result; 

            let newUser = 
            {
                "nome": reg_nameInput.value,
                "user": reg_userInput.value,
                "logo": imgResult,
                "senha": reg_passInput.value,
                "categoria": reg_catSelect.value,
                "endereco": reg_endInput.value,
                "telefone": reg_telInput.value,
                "descricao": reg_descInput.value
            };

            let i_id = instituicoes.push(newUser) - 1;

            news.push([]);

            localStorage.setItem("instituicoes", JSON.stringify(instituicoes));
            localStorage.setItem("inst_news", JSON.stringify(news));

            setUserLogged(i_id);

            // ------------- //

            $('#registerModal').modal('hide');

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
        }

        fr.readAsDataURL(file_path);
    }
}
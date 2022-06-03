(function () {
    var div = document.createElement("div");
    document.getElementsByTagName('body')[0].appendChild(div);
    div.outerHTML = "<div id='botDiv' style='height: 38px; position: fixed; bottom: 0; z-index: 1000; background-color: #fff'><div id='botTitleBar' style='height: 38px; width: 400px; position:fixed; cursor: pointer;'></div><iframe width='400px' height='600px' src='https://webchat.botframework.com/embed/quem-bot-bot?s=fYC7LG3eGgM.ZnnTj9m7oG5Y0cR9Nf24BDq0ywSjnS3dDO6VfPUreco'></iframe></div>"; 

    document.querySelector('body').addEventListener('click', function (e) {
        e.target.matches = e.target.matches || e.target.msMatchesSelector;
        if (e.target.matches('#botTitleBar')) { 
            var botDiv = document.querySelector('#botDiv'); 
            botDiv.style.height = botDiv.style.height == '600px' ? '38px' : '600px';
        };
    });
}());

// ------------------------------------------------------------------------------------------------------------------ //

var db_fakeInstituicoes = 
{
    "instituicoes": 
    [
        {
            "name": "Instituto Casa do Caminho",
            "username": "casacaminho",
            "image_url": "assets/images/inst-profile/inst_1.png",
            "password": "1234567",
            "category": 6,
            "address": "R. Padre Rolim, 222 - Santa Efigênia, Belo Horizonte - MG, 30130-090",
            "phone": "(31) 3586-3856",
            "description": "Instituição de apoio às pessoas com Câncer. Vivem de doações, inclusive o salário dos funcionários são providos por doações. Promovem bazares para angariar fundos e sempre precisam de ajuda."
        },
        {
            "name": "Exército de Salvação",
            "username": "salvação_army",
            "image_url": "assets/images/inst-profile/inst_2.png",
            "password": "12345678",
            "category": 0,
            "address": "R. Maravilhas, 25 - Providência, Belo Horizonte - MG, 31814-040",
            "phone": "(31) 3433-3563",
            "description": "O Exército de Salvação existe para salvar almas, edificar os santos e servir a humanidade sofredora, motivado pelo amor a Deus, em nome de Jesus, sem discriminação."
        },
        {
            "name": "Associação Das Famílias Carentes De Belo Horizonte",
            "username": "familiasCarentes",
            "image_url": "assets/images/inst-profile/inst_3.png",
            "password": "12345678",
            "category": 0,
            "address": "R. Islândia, 196 - Sala 6 - Europa, Belo Horizonte - MG, 31620-430",
            "phone": "(31) 3458-9070",
            "description": "A Associação das Famílias Carentes de Belo Horizonte é uma entidade de direito privado, sem fins lucrativos, de caráter assistencial e filantrópico, que tem como principal finalidade amparar as famílias carentes, por meio do desenvolvimento e execução de programas sociais."
        },
        {
            "name": "Fundação Sara",
            "username": "fundacao_sara",
            "image_url": "assets/images/inst-profile/inst_4.png",
            "password": "12345678",
            "category": 1,
            "address": "R. André Luís, 415 - Canelas II, Montes Claros - MG, 39402-384",
            "phone": "(38) 3214-5500",
            "description": "Prestar assistência social às crianças e adolescentes com câncer e ser agente de promoção de conhecimentos e de melhorias do tratamento oncológico."
        },
        {
            "name": "Casa Santa Bernadete",
            "username": "SantaBernadete",
            "image_url": "assets/images/inst-profile/inst_5.png",
            "password": "123456778",
            "category": 3,
            "address": "R. Gentil Gonzaga, 181 - Canelas, Montes Claros - MG, 39402-661",
            "phone": "(38) 3222-6055",
            "description": " A instituição acolhe jovens e adultos em situação de vulnerabilidade social com diagnóstico de câncer e em tratamento ambulatorial de radioterapia e/ou quimioterapia."
        },
        {
            "name": "Exército de Salvação",
            "username": "salvação_army",
            "image_url": "assets/images/inst-profile/inst_6.png",
            "password": "12345678",
            "category": 4,
            "address": "R. Maravilhas, 25 - Providência, Belo Horizonte - MG, 31814-040",
            "phone": "(31) 3433-3563",
            "description": ""
        },
        {
            "name": "Lar das velhinhas",
            "username": "velha_lar",
            "image_url": "assets/images/inst-profile/inst_7.png",
            "password": "12345678",
            "category": 5,
            "address": "R. Dom João Pimenta, 65 - Centro, Montes Claros - MG, 39400-003",
            "phone": "(38) 3221-1299",
            "description": "O Centro Feminino de Longa Permanecia “Lar das Velhinhas” é uma entidade civil, filantrópica, sem fins lucrativos, de cunho social, que presta Serviço de Acolhimento Institucional para pessoas idosas gênero feminino dando-lhes assistência alimentar, fornecendo-lhes atividades recreativas, abrigo e proteção."
        },
        {
            "name": "APAE PORTO SEGURO - BAHIA",
            "username": "apae_bahia",
            "image_url": "assets/images/inst-profile/inst_8.png",
            "password": "1234567",
            "category": 6,
            "address": "Av. do Trab., 53 - Campinho, Porto Seguro - BA, 45810-000",
            "phone": "(73) 98109-2161",
            "description": "Somos uma rede sem fins lucrativos que, há mais de 60 anos, se dedica na defesa dos direitos e na prestação de serviços à pessoa com deficiência no Brasil. A APAE é responsável pela inclusão social em diversos níveis de milhares de pessoas ao longo de sua história. "
        },
        {
            "name": "Fundação da Terceira Idade Doce Lar",
            "username": "doce_lar",
            "image_url": "assets/images/inst-profile/inst_9.png",
            "password": "1234562278",
            "category": 5,
            "address": "Rua do Campo s/n - Agrovila, Porto Seguro - BA, 45810-000",
            "phone": "(73) 99819-0151",
            "description": "Casa de acolhimento da terceira idade, que vive de doações e sempre realiza campanhas para o recebimento de doações e divulgação do projeto"
        }
    ]
};

var db_fakeImgs = 
{
    "img_carrossel": 
    [
        {
            "image_url": "assets/images/img-car/car_1.jpg",
            "description": "Criança carente",
        },
        {
            "image_url": "assets/images/img-car/car_2.jpg",
            "description": "Mão estendida",
        },
        {
            "image_url": "assets/images/img-car/car_3.jpg",
            "description": "Mantimentos",
        },
    ]
};

var db_fakeNews = 
{
    "inst_news":
    [
        [
            {
                "image_url": "assets/images/news/new_1.jpg",
                "title": "He hated that he loved what she hated about hate.",
                "date": "2021-11-29T14:22:00-03:00",
                "description": "Ambusher maze wocka wocka fruit Pac-Man Fever arcade Galaxian Boss power up intermission. He hated that he loved what she hated about hate. Pac-Man Namco Toru Iwatani Pac-Man Fever maze dots. The external scars tell only part of the story. Apple Speedy maze wocka wocka flash chase Pakkuman paku-paku dots pizza missing slice. Fluffy pink unicorns are a popular status symbol among macho men. Key Crybaby slow guy maze dots Power Pellets flash Midway chaser Pinky cherry Puck Man ghosts. Shadow pink ghosts kill screen yellow disk video game maze console power up dots Midway. He found his art never progressed when he literally used his sweat and tears. Clyde blue enemies flash dots wocka maze monsters ghosts red chaser.",
            },
            {
                "image_url": "assets/images/news/new_2.jpg",
                "title": "Fluffy pink unicorns are a popular men.",
                "date": "2021-11-29T19:26:04-03:00",
                "description": "She was disgusted he couldn’t tell the difference between lemonade and limeade. Shadow dots strawberry Pac-Man Midway chaser Pinky kill screen. Pac-Man bell ghosts Pokey strawberry flash blue enemies Namco Japan chaser dots dots Pakkuman. He had a hidden stash underneath the floorboards in the back room of the house. I think I will buy the red car, or I will lease the blue one. She had the gift of being able to paint songs. Ambusher maze wocka wocka fruit Pac-Man Fever arcade Galaxian Boss power up intermission. I hear that Nancy is very pretty. She learned that water bottles are no longer just to hold liquid, but they're also status symbols. The external scars tell only part of the story.",
            }
        ],
        [
            {
                "image_url": "assets/images/news/new_3.jpg",
                "title": "I hear that Nancy is very pretty.",
                "date": "2021-11-29T13:15:55-03:00",
                "description": "He found his art never progressed when he literally used his sweat and tears. I hear that Nancy is very pretty. I think I will buy the red car, or I will lease the blue one. He had a hidden stash underneath the floorboards in the back room of the house. Ghosts dots cherry Blinky Pac-Man Power Pellets fruit. Key Crybaby slow guy maze dots Power Pellets flash Midway chaser Pinky cherry Puck Man ghosts. Don't put peanut butter on the dog's nose. Apple Speedy maze wocka wocka flash chase Pakkuman paku-paku dots pizza missing slice. Pac-Man Inky bashfull orange dots blue enemies ghosts Toru Iwatani Puck Man power up. He was willing to find the depths of the rabbit hole in order to be with her.",
            },
            {
                "image_url": "assets/images/news/new_4.jpg",
                "title": "The old apple revels in its authority.",
                "date": "2021-11-29T15:26:04-03:00",
                "description": "Patricia loves the sound of nails strongly pressed against the chalkboard. Flying fish few by the space station. Orange fickle blue guy maze chase. He found his art never progressed when he literally used his sweat and tears. She was disgusted he couldn’t tell the difference between lemonade and limeade. Shadow dots strawberry Pac-Man Midway chaser Pinky kill screen. The external scars tell only part of the story. Pac-Man Namco Toru Iwatani Pac-Man Fever maze dots. Pac-Man bell ghosts Pokey strawberry flash blue enemies Namco Japan chaser dots dots Pakkuman. I think I will buy the red car, or I will lease the blue one.",
            }
        ],
        [
            {
                "image_url": "assets/images/news/new_5.jpg",
                "title": "The external scars tell only part of the story.",
                "date": "2021-11-29T09:26:04-03:00",
                "description": "Orange fickle blue guy maze chase. Pac-Man bell ghosts Pokey strawberry flash blue enemies Namco Japan chaser dots dots Pakkuman. The external scars tell only part of the story. Don't put peanut butter on the dog's nose. Ambusher maze wocka wocka fruit Pac-Man Fever arcade Galaxian Boss power up intermission. He hated that he loved what she hated about hate. Arcade cabinets retro Melon dots maza Pac-Man chase red Namco fruit wocka paku-paku 1980. She learned that water bottles are no longer just to hold liquid, but they're also status symbols. Clyde blue enemies flash dots wocka maze monsters ghosts red chaser. I think I will buy the red car, or I will lease the blue one.",
            },
            {
                "image_url": "assets/images/news/new_6.jpg",
                "title": "Orange fickle blue guy maze chase.",
                "date": "2021-11-29T15:26:04-03:00",
                "description": "Shadow pink ghosts kill screen yellow disk video game maze console power up dots Midway. She had the gift of being able to paint songs. Don't put peanut butter on the dog's nose. The old apple revels in its authority. She learned that water bottles are no longer just to hold liquid, but they're also status symbols. Ghosts dots cherry Blinky Pac-Man Power Pellets fruit. I hear that Nancy is very pretty. The external scars tell only part of the story. Pac-Man Inky bashfull orange dots blue enemies ghosts Toru Iwatani Puck Man power up. Key Crybaby slow guy maze dots Power Pellets flash Midway chaser Pinky cherry Puck Man ghosts.",
            }
        ],
        [
            {
                "image_url": "assets/images/news/new_7.jpg",
                "title": "I hear that Nancy is very pretty.",
                "date": "2021-11-29T10:15:05-03:00",
                "description": "He hated that he loved what she hated about hate. Don't put peanut butter on the dog's nose. She had the gift of being able to paint songs. He found his art never progressed when he literally used his sweat and tears. Flying fish few by the space station. Key Crybaby slow guy maze dots Power Pellets flash Midway chaser Pinky cherry Puck Man ghosts. The external scars tell only part of the story. Clyde blue enemies flash dots wocka maze monsters ghosts red chaser. Pac-Man Namco Toru Iwatani Pac-Man Fever maze dots. Shadow dots strawberry Pac-Man Midway chaser Pinky kill screen.",
            },
            {
                "image_url": "assets/images/news/new_8.jpg",
                "title": "The old apple revels in its authority.",
                "date": "2021-11-29T19:21:07-03:00",
                "description": "Orange fickle blue guy maze chase. Ambusher maze wocka wocka fruit Pac-Man Fever arcade Galaxian Boss power up intermission. Pac-Man Namco Toru Iwatani Pac-Man Fever maze dots. Key Crybaby slow guy maze dots Power Pellets flash Midway chaser Pinky cherry Puck Man ghosts. He was willing to find the depths of the rabbit hole in order to be with her. She was disgusted he couldn’t tell the difference between lemonade and limeade. She learned that water bottles are no longer just to hold liquid, but they're also status symbols. Clyde blue enemies flash dots wocka maze monsters ghosts red chaser. I hear that Nancy is very pretty. I think I will buy the red car, or I will lease the blue one.",
            }
        ],
        [
            {
                "image_url": "assets/images/news/new_9.jpg",
                "title": "I hear that Nancy is very pretty.",
                "date": "2021-11-29T05:26:13-03:00",
                "description": "Ambusher maze wocka wocka fruit Pac-Man Fever arcade Galaxian Boss power up intermission. Pac-Man Namco Toru Iwatani Pac-Man Fever maze dots. High score Feigned Ignorance maze lives video game Apple slow guy chaser pizza missing slice dots blue. She was disgusted he couldn’t tell the difference between lemonade and limeade. Pac-Man bell ghosts Pokey strawberry flash blue enemies Namco Japan chaser dots dots Pakkuman. Poison ivy grew through the fence they said was impenetrable. Patricia loves the sound of nails strongly pressed against the chalkboard. The beauty of the sunset was obscured by the industrial cranes. Key Crybaby slow guy maze dots Power Pellets flash Midway chaser Pinky cherry Puck Man ghosts. Fluffy pink unicorns are a popular status symbol among macho men.",
            },
            {
                "image_url": "assets/images/news/new_10.jpg",
                "title": "The old apple revels in its authority.",
                "date": "2021-11-29T14:54:55-03:00",
                "description": "Patricia loves the sound of nails strongly pressed against the chalkboard. She had the gift of being able to paint songs. Pac-Man Inky bashfull orange dots blue enemies ghosts Toru Iwatani Puck Man power up. Clyde blue enemies flash dots wocka maze monsters ghosts red chaser. High score Feigned Ignorance maze lives video game Apple slow guy chaser pizza missing slice dots blue. Fluffy pink unicorns are a popular status symbol among macho men. She was disgusted he couldn’t tell the difference between lemonade and limeade. He hated that he loved what she hated about hate. I hear that Nancy is very pretty. He was willing to find the depths of the rabbit hole in order to be with her.",
            }
        ],
        [
            {
                "image_url": "assets/images/news/new_11.jpg",
                "title": "I hear that Nancy is very pretty.",
                "date": "2021-11-29T23:26:15-03:00",
                "description": "She was disgusted he couldn’t tell the difference between lemonade and limeade. Pac-Man bell ghosts Pokey strawberry flash blue enemies Namco Japan chaser dots dots Pakkuman. Patricia loves the sound of nails strongly pressed against the chalkboard. Orange fickle blue guy maze chase. She had the gift of being able to paint songs. Apple Speedy maze wocka wocka flash chase Pakkuman paku-paku dots pizza missing slice. Flying fish few by the space station. Don't put peanut butter on the dog's nose. Ghosts dots cherry Blinky Pac-Man Power Pellets fruit. Ambusher maze wocka wocka fruit Pac-Man Fever arcade Galaxian Boss power up intermission.",
            },
            {
                "image_url": "assets/images/news/new_12.jpg",
                "title": "The old apple revels in its authority.",
                "date": "2021-11-29T23:54:13-03:00",
                "description": "Shadow pink ghosts kill screen yellow disk video game maze console power up dots Midway. Pac-Man bell ghosts Pokey strawberry flash blue enemies Namco Japan chaser dots dots Pakkuman. As she walked along the street and looked in the gutter, she realized facemasks had become the new cigarette butts. Clyde blue enemies flash dots wocka maze monsters ghosts red chaser. He found his art never progressed when he literally used his sweat and tears. The beauty of the sunset was obscured by the industrial cranes. Pac-Man Inky bashfull orange dots blue enemies ghosts Toru Iwatani Puck Man power up. Poison ivy grew through the fence they said was impenetrable. She was disgusted he couldn’t tell the difference between lemonade and limeade. The external scars tell only part of the story.",
            }
        ],
        [
            {
                "image_url": "assets/images/news/new_13.jpg",
                "title": "I hear that Nancy is very pretty.",
                "date": "2021-11-29T16:05:34-03:00",
                "description": "High score Feigned Ignorance maze lives video game Apple slow guy chaser pizza missing slice dots blue. Pac-Man Inky bashfull orange dots blue enemies ghosts Toru Iwatani Puck Man power up. Don't put peanut butter on the dog's nose. Clyde blue enemies flash dots wocka maze monsters ghosts red chaser. Ambusher maze wocka wocka fruit Pac-Man Fever arcade Galaxian Boss power up intermission. Ghosts dots cherry Blinky Pac-Man Power Pellets fruit. Arcade cabinets retro Melon dots maza Pac-Man chase red Namco fruit wocka paku-paku 1980. I hear that Nancy is very pretty. He hated that he loved what she hated about hate. Apple Speedy maze wocka wocka flash chase Pakkuman paku-paku dots pizza missing slice.",
            },
            {
                "image_url": "assets/images/news/new_14.jpg",
                "title": "The old apple revels in its authority.",
                "date": "2021-11-29T17:26:31-03:00",
                "description": "Shadow dots strawberry Pac-Man Midway chaser Pinky kill screen. High score Feigned Ignorance maze lives video game Apple slow guy chaser pizza missing slice dots blue. The old apple revels in its authority. He hated that he loved what she hated about hate. I think I will buy the red car, or I will lease the blue one. Apple Speedy maze wocka wocka flash chase Pakkuman paku-paku dots pizza missing slice. The beauty of the sunset was obscured by the industrial cranes. He had a hidden stash underneath the floorboards in the back room of the house. Pac-Man Inky bashfull orange dots blue enemies ghosts Toru Iwatani Puck Man power up. The external scars tell only part of the story.",
            }
        ],
        [
            {
                "image_url": "assets/images/news/new_15.jpg",
                "title": "I hear that Nancy is very pretty.",
                "date": "2021-11-29T07:20:05-03:00",
                "description": "Pac-Man Namco Toru Iwatani Pac-Man Fever maze dots. He had a hidden stash underneath the floorboards in the back room of the house. She learned that water bottles are no longer just to hold liquid, but they're also status symbols. Patricia loves the sound of nails strongly pressed against the chalkboard. Shadow dots strawberry Pac-Man Midway chaser Pinky kill screen. Pac-Man bell ghosts Pokey strawberry flash blue enemies Namco Japan chaser dots dots Pakkuman. Fluffy pink unicorns are a popular status symbol among macho men. I hear that Nancy is very pretty. Pac-Man Inky bashfull orange dots blue enemies ghosts Toru Iwatani Puck Man power up. Poison ivy grew through the fence they said was impenetrable.",
            },
            {
                "image_url": "assets/images/news/new_16.jpg",
                "title": "The old apple revels in its authority.",
                "date": "2021-11-29T08:34:00-03:00",
                "description": "Shadow dots strawberry Pac-Man Midway chaser Pinky kill screen. The external scars tell only part of the story. He was willing to find the depths of the rabbit hole in order to be with her. He found his art never progressed when he literally used his sweat and tears. Ghosts dots cherry Blinky Pac-Man Power Pellets fruit. Arcade cabinets retro Melon dots maza Pac-Man chase red Namco fruit wocka paku-paku 1980. She learned that water bottles are no longer just to hold liquid, but they're also status symbols. Fluffy pink unicorns are a popular status symbol among macho men. She was disgusted he couldn’t tell the difference between lemonade and limeade. Clyde blue enemies flash dots wocka maze monsters ghosts red chaser.",
            }
        ],
        [
            {
                "image_url": "assets/images/news/new_17.jpg",
                "title": "I hear that Nancy is very pretty.",
                "date": "2021-11-29T10:35:13-03:00",
                "description": "He was willing to find the depths of the rabbit hole in order to be with her. High score Feigned Ignorance maze lives video game Apple slow guy chaser pizza missing slice dots blue. I think I will buy the red car, or I will lease the blue one. Orange fickle blue guy maze chase. The external scars tell only part of the story. I hear that Nancy is very pretty. Don't put peanut butter on the dog's nose. As she walked along the street and looked in the gutter, she realized facemasks had become the new cigarette butts. He hated that he loved what she hated about hate. She was disgusted he couldn’t tell the difference between lemonade and limeade.",
            },
            {
                "image_url": "assets/images/news/new_18.jpg",
                "title": "The old apple revels in its authority.",
                "date": "2021-11-29T21:26:43-03:00",
                "description": "Pac-Man Inky bashfull orange dots blue enemies ghosts Toru Iwatani Puck Man power up. As she walked along the street and looked in the gutter, she realized facemasks had become the new cigarette butts. He was willing to find the depths of the rabbit hole in order to be with her. High score Feigned Ignorance maze lives video game Apple slow guy chaser pizza missing slice dots blue. Poison ivy grew through the fence they said was impenetrable. Don't put peanut butter on the dog's nose. Pac-Man Namco Toru Iwatani Pac-Man Fever maze dots. Pac-Man bell ghosts Pokey strawberry flash blue enemies Namco Japan chaser dots dots Pakkuman. She had the gift of being able to paint songs. I hear that Nancy is very pretty.",
            }
        ],
    ],
};

loadLogin();

// ----------------------------------------------------------------------------------------------------------------------------------- //

function loadLogin()
{
    if(getUserLogged() == null) setUserLogged(-1);
    
    let divLoginText = document.getElementById('textLogin');

    if(getUserLogged() == -1) divLoginText.innerHTML = `<a id="b_loginOrLogoff" class="header_loginBtn" href="login.html"><i class="fas fa-user"></i></i>Login</a>`;
    else divLoginText.innerHTML = `<a id="b_loginOrLogoff" class="header_loginBtn" href="login.html"><i class="fas fa-user"></i></i>Sair</a>`;

    let blogin = document.getElementById('b_loginOrLogoff');

    blogin.addEventListener('click', loginOrLogoff);
}

// ----------------------------------------------------------------------------------------------------------------------------------- //

function loginOrLogoff()
{
    if(getUserLogged() != -1)
    {
        event.preventDefault();

        setUserLogged(-1);

        location.reload();
    }
}

// ----------------------------------------------------------------------------------------------------------------------------------- //

function inst_searchByUser(username) {

    let response;

    $.ajax({

        async: false,
        url: 'http://localhost:6587/institutions/user/' + username,
        method: 'GET',

        success: function(result, json, data) { response = JSON.parse(result); },
        error: function(req, status, error) { response = req.status; }
    })
    return response;
}

// ----------------------------------------------------------------------------------------------------------------------------------- //

function insertFakeUsers() {

    for(i = 0; i < db_fakeInstituicoes.instituicoes.length; i++) {

        let user = db_fakeInstituicoes.instituicoes[i];

        username = user.username;
        name = user.name;
        password = user.password;
        image_url = 'assets/images/inst-profile/inst_' + (Math.floor(Math.random() * 9) + 1) + '.png';
        category = user.category;
        address = user.address;
        phone = user.phone;
        description = user.description;
    
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
        })
    }
}

// ----------------------------------------------------------------------------------------------------------------------------------- //

function insertFakeCarousel() {

    for(i = 0; i < db_fakeImgs.img_carrossel.length; i++) {

        let img = db_fakeImgs.img_carrossel[i];

        image_url = img.image_url;
        description = img.description;

        $.ajax({
            
            url: 'http://localhost:6587/carousel/insert',
            method: 'POST',
            data: {
                image_url,
                description
            },
        })
    }
}

// ----------------------------------------------------------------------------------------------------------------------------------- //

function insertFakeNews() {

    for(i = 0; i < db_fakeNews.inst_news.length; i++) {

        for(var k in db_fakeNews.inst_news[i]) 
        {
            let instii;

            $.ajax({

                async: false,
                url: 'http://localhost:6587/institutions/offset/' + i,
                method: 'GET',
        
                success: function(result, json, data) { instii = JSON.parse(result); },
            })

            inst_id = instii.id;
            date = db_fakeNews.inst_news[i][k].date;
            title = db_fakeNews.inst_news[i][k].title;
            description = db_fakeNews.inst_news[i][k].description;
            image_url = db_fakeNews.inst_news[i][k].image_url;

            console.log(date);
            
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

                success: function(result, json, data) { console.log(data.status); },
                error: function(req, status, error) { console.log(req.status); }
            })
        }
    }
}

// ----------------------------------------------------------------------------------------------------------------------------------- //

function getUserLogged() { return sessionStorage.getItem("userLogged"); }
function setUserLogged(user_id) { return sessionStorage.setItem("userLogged", user_id); }
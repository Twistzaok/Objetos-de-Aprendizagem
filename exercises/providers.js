var pagina = 0;

var q1 = document.getElementById('q1');
var q2 = document.getElementById('q2');
var q3 = document.getElementById('q3');
var q4 = document.getElementById('q4');

var q0t = document.getElementById('q0t');
var q1t = document.getElementById('q1t');
var q2t = document.getElementById('q2t');
var q3t = document.getElementById('q3t');
var q4t = document.getElementById('q4t');

var p0 = document.getElementById('p0');
var p1 = document.getElementById('p1');
var p2 = document.getElementById('p2');
var p3 = document.getElementById('p3');
var p4 = document.getElementById('p4');
var p5 = document.getElementById('p5');
var p6 = document.getElementById('p6');
var p7 = document.getElementById('p7');
var p8 = document.getElementById('p8');
var p9 = document.getElementById('p9');

var questoes = [
    // 1
    {
        t:  "Qual a função dos Provedores de Conteúdo?",
        q1: "a) Fornecem auxílio para tocar vídeos e áudios.",
        q2: "b) Gerenciam o acesso a um banco de dados.",
        q3: "c) Gerenciam o acesso a uma rede social.",
        q4: "d) Provém conteúdo para Youtubers.",
        r:  "q2"
    },
    // 2
    {
        t:  "Marque a alternativa incorreta.",
        q1: "a) Os Provedores são principalmente destinados ao seu uso por outros aplicativos.",
        q2: "b) ContentResolver pode realizar todas as ações de um CRUD.",
        q3: "c) Um content provider não esta relacionado ao banco de dados",
        q4: "d) Para exibir os dados, é necessário usar o método ContentResolver.query()",
        r:  "q3"
    },
    // 3
    {
        t:  "Content provider são utilizados quando:",
        q1: "a) É necessário compartilhamento de dados entre diferentes aplicações.",
        q2: "b) É necessário impedir o acesso dos dados.",
        q3: "c) Os conteúdos devem ser acessados apenas por uma aplicação. ",
        q4: "d) É necessário Privar o usuário de acessar o conteúdo.",
        r:  "q1"
    },
    // 4
    {
        t:  "O Content Provider gerencia o acesso aos dados de uma aplicação Android. Sobre Content Providers, é correto afirmar que:",
        q1: "a) Content.Resolver.query() Cria uma classe no mesmo diretório onde reside o arquivo MainActivity  .",
        q2: "b) Content providers implementam uma interface comum para fazer buscas e retornar resultados.",
        q3: "c) Content.Provider.query() se comunica com o objeto do provedor.",
        q4: "d) Content providers implementam interfaces diferentes para manter as aplicação isoladas.",
        r:  "q2"
    },
     // 5
    {
        t:  "Sobre o objeto ContentResolver, é incorreto afirmar que:",
        q1: "a) ContentResolver.insert() é utilizado para inserir conteúdo no provedor.",
        q2: "b) ContentResolver.select() é utilizado para ocultar os conteúdos no provedor",
        q3: "c) ContentResolver.update() é utilizado para atualizar valores adicionando-os no ContentValues.",
        q4: "d) ContentResolver.delete() é utilizado para especificar a seleção, informando o user que será deletado.",
        r:  "q2"
    },
    // 6
    {
        t:  "Para acessar um Provedor é necessário utilizar:",
        q1: "a) um objeto ContentReader",
        q2: "b) um objeto ContentReturn",
        q3: "c) um objeto ContentRuler",
        q4: "d) um objeto ContentResolver",
        r:  "q4"
    },
    // 7
    {
        t:  "São métodos de um Content Provider?",
        q1: "a) query(), insert(), update(), delete(), getType() e onCreate().",
        q2: "b) Activity (), insert(), update(), delete(), select() e onCreate().",
        q3: "c) query(), insert(), update(), delete(), select() e onCreate().",
        q4: "d) Activity (), insert(), update(), delete(), getType() e onCreate().",
        r:  "q1"
    },
    // 8
    {
        t:  "Por que plataformas Android utilizam Content Provider?",
        q1: "a) Porque o Android possui varios locais para guardar os dados aplicações",
        q2: "b) para as aplicações carregarem mais rápido",
        q3: "c) Porque o Android não possui um local comum para guardar os dados das aplicações",
        q4: "d) para ter mais espaço para armazenar as aplicações",
        r:  "q3"
    },
 // 9
    {
       t:  "Oque é necessário para recuperar dados de um Provedor?",
        q1: "a) Usar O método ContentResolver.select() ",
        q2: "b) Criar e definir váriaveis para acessar o Provedor desejado.",
        q3: "c) Criar uma superclasse para extrair os dados do provedor desejado",
        q4: "d) Usar O método ContentResolver.insert() ",
        r:  "q2"
    },
    // 10
    {
        t:  "Oque é necessário para exibir os dados",
        q1: "a) usar o método ContentResolver.query() ",
        q2: "b) usar o método ContentResolver.onCreate()",
        q3: "c) Usar O método ContentResolver.insert()",
        q4: "d) Criar e definir váriaveis para acessar o Provedor desejado. ",
        r:  "q1"
    }
];

function Clear() {
    q1.classList.remove("correct-border");
    q2.classList.remove("correct-border");
    q3.classList.remove("correct-border");
    q4.classList.remove("correct-border");

    q1.classList.remove("incorrect-border");
    q2.classList.remove("incorrect-border");
    q3.classList.remove("incorrect-border");
    q4.classList.remove("incorrect-border");
}

function VerificarResposta(e, q) {
    Clear();
    if (q == questoes[pagina].r) {
        document.getElementById(q).classList.add("correct-border");
        document.getElementById("p" + pagina).classList.remove("incorrect");
        document.getElementById("p" + pagina).classList.add("correct");
    } else {
        document.getElementById(q).classList.add("incorrect-border");
        document.getElementById(questoes[pagina].r).classList.add("correct-border");
        document.getElementById("p" + pagina).classList.remove("correct");
        document.getElementById("p" + pagina).classList.add("incorrect");
    }
};

function mudarPagina(e, q) {
    pagina = parseInt(q);
    Clear();
    q0t.innerHTML = questoes[pagina].t;
    q1t.innerHTML = questoes[pagina].q1;
    q2t.innerHTML = questoes[pagina].q2;
    q3t.innerHTML = questoes[pagina].q3;
    q4t.innerHTML = questoes[pagina].q4;
}

q1.addEventListener('click', (e) => VerificarResposta(e, "q1"));
q2.addEventListener('click', (e) => VerificarResposta(e, "q2"));
q3.addEventListener('click', (e) => VerificarResposta(e, "q3"));
q4.addEventListener('click', (e) => VerificarResposta(e, "q4"));

p0.addEventListener('click', (e) => mudarPagina(e, "0"));
p1.addEventListener('click', (e) => mudarPagina(e, "1"));
p2.addEventListener('click', (e) => mudarPagina(e, "2"));
p3.addEventListener('click', (e) => mudarPagina(e, "3"));
p4.addEventListener('click', (e) => mudarPagina(e, "4"));
p5.addEventListener('click', (e) => mudarPagina(e, "5"));
p6.addEventListener('click', (e) => mudarPagina(e, "6"));
p7.addEventListener('click', (e) => mudarPagina(e, "7"));
p8.addEventListener('click', (e) => mudarPagina(e, "8"));
p9.addEventListener('click', (e) => mudarPagina(e, "9"));

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
        t:  "Para que serve uma Intent?",
        q1: "a) Uma Intent é um objeto utilizado para solicitar uma ação de outro componente.",
        q2: "b) Uma Intent é um objeto utilizado para conectar dois usuários. ",
        q3: "c) Uma Intent é um objeto utilizado para desconectar dois usuários.",
        q4: "d) Uma Intent é um objeto utilizado para explicar o sistema ao usuário.",
        r:  "q1"
    },
    // 2
    {
        t:  "Uma Intent será implícita quando:",
        q1: "a) Especificam o componente e a ação.",
        q2: "b) Especificam o componente mas não a ação.",
        q3: "c) Não especificam o componente nem a ação.",
        q4: "d) Não especificam o componente mas a ação.",
        r:  "q4"
    },
    // 3
    {
        t:  "Uma Intent será explícita quando tiver:",
        q1: "a) Nome",
        q2: "b) Ação",
        q3: "c) Interface",
        q4: "d) ID",
        r:  "q1"
    },
    // 4
    {
        t:  "Para iniciar uma Intent para Provider é necessário:",
        q1: "a) Passar um Intent para startActivity().",
        q2: "b) Iniciar um Serviço utilizando um JobScheduler.",
        q3: "c) Passar um Intent ao sendBroadcast() ou sendOrderedBroadcast()..",
        q4: "d) Passar um Intent para startProvider().",
        r:  "q3"
    },
    // 5
    {
        t:  "Para iniciar uma Intent para Activity é necessário:",
        q1: "a) Passar um Intent para startActivity().",
        q2: "b) Iniciar um Serviço utilizando um JobScheduler.",
        q3: "c) Passar um Intent ao sendBroadcast() ou sendOrderedBroadcast()..",
        q4: "d) Passar um Intent para startProvider().",
        r:  "q1"
    },
    // 6
    {
        t:  "Para iniciar uma Intent para Service é necessário:",
        q1: "a) Passar um Intent para startActivity().",
        q2: "b) Iniciar um Serviço utilizando um JobScheduler.",
        q3: "c) Passar um Intent ao sendBroadcast() ou sendOrderedBroadcast()..",
        q4: "d) Passar um Intent para startProvider().",
        r:  "q2"
    },
    // 7
    {
        t:  "São exemplos de dados para criação de Intents:",
        q1: "a) Nome, Ação, Interface, Dados",
        q2: "b) Nome, Ação, Interface, ID",
        q3: "c) Nome, Ação, Dados, Categoria",
        q4: "d) Nome, Ação, Dados, ID",
        r:  "q3"
    },
    // 8
    {
        t:  "Para especificar ações é necessário usar:",
        q1: "a) setAction() ou construtor Intent.",
        q2: "b) createAction() ou construtor Intent.",
        q3: "c) startAction() ou construtor Intent.",
        q4: "d) bindAction() ou construtor Intent.",
        r:  "q1"
    },
    // 9
    {
        t:  "Qual dos métodos a seguir NÃO é utilizado para definir nomes:",
        q1: "a) setComponent()",
        q2: "b) setComponentName()",
        q3: "c) setClass()",
        q4: "d) setClassName()",
        r:  "q2"
    },
    // 10
    {
        t:  "É possível especificar uma categoria com:",
        q1: "a) addCategory()",
        q2: "b) setCategory()",
        q3: "c) bindCategory()",
        q4: "d) createCategory()",
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

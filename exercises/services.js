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
        t:  "O que é um Service?",
        q1: "a) Um componente capaz de efetuar operações longas.",
        q2: "b) Um componente capaz de oferecer uma interface para o usuário.",
        q3: "c) Um componente capaz de delegar informações entre componentes.",
        q4: "d) Um componente capaz de oferecer um Banco de Dados.",
        r:  "q1"
    },
    // 2
    {
        t:  "São exemplos de tarefas realizadas pelos Services:",
        q1: "a) Reproduzir música, executar E/S de arquivos imagem e interagir com Provedores de Conteúdo.",
        q2: "b) Reproduzir música, efetuar consultas ao Banco de Dados e transferir informações.",
        q3: "c) Interagir com Provedores de Conteúdo, transferir informações e salvar documentos.",
        q4: "d) Nenhuma das anteriores.",
        r:  "q1"
    },
    // 3
    {
        t:  "A respeito de serviços de primeiro e segundo plano pode se afirmar que:",
        q1: "a) As tarefas de primeiro plano são imperceptíveis para o usuário.",
        q2: "b) As tarefas de primeiro plano são perceptíveis para o usuário.",
        q3: "c) As tarefas de segundo plano são aquelas que permanecem enquanto houver um serviço ligado a si.",
        q4: "d) As tarefas de segundo plano são perceptíveis para o usuário.",
        r:  "q2"
    },
    // 4
    {
        t:  "Para vincular um Service é necessário:",
        q1: "a) Utilizar o comando linkService()",
        q2: "b) Utilizar o comando attachService()",
        q3: "c) Utilizar o comando bindService()",
        q4: "d) Utilizar o comando serviceService()",
        r:  "q3"
    },
    // 5
    {
        t:  "Para declarar um serviço é necessário:",
        q1: "a) Utilizar o manifesto e adicionar um elemento <service> como filho do elemento <application>.",
        q2: "b) Utilizar o manifesto e adicionar um elemento <bindService> como filho do elemento <application>.",
        q3: "c) Utilizar a activity e adicionar um elemento <service> como filho do elemento <application>.",
        q4: "d) Utilizar a activity e adicionar um elemento <bindService> como filho do elemento <application>.",
        r:  "q1"
    },
    // 6
    {
        t:  "O comando que invoca e o comando que recebe o início do serviço são, respectivamente:",
        q1: "a) startCommand() e onStartCommand()",
        q2: "b) bindService() e onStartService()",
        q3: "c) startService() e onStartService()",
        q4: "d) startService() e onStartCommand()",
        r:  "q4"
    },
    // 7
    {
        t:  "Os dois modos de vida de um serviço são:",
        q1: "a) Primeiro e Segundo Plano.",
        q2: "b) Iniciado e Terminado.",
        q3: "c) Iniciado e Vinculado.",
        q4: "d) Iniciado e Retomado.",
        r:  "q3"
    },
    // 8
    {
        t:  "São callbacks de Serviços:",
        q1: "a) onCreate(), onRecreate() e onDestroy()",
        q2: "b) onCreate(), onDestroy() e onPause()",
        q3: "c) onBind(), onUnbind() e onRebind()",
        q4: "d) onBind(), onRecreate() e onDestroy()",
        r:  "q3"
    },
    // 9
    {
        t:  "O comando onBind() é utilizado quando:",
        q1: "a) Um cliente está se vinculando ao serviço.",
        q2: "b) Um cliente está se desvinculando ao serviço.",
        q3: "c) Um cliente está iniciando o serviço.",
        q4: "d) Um cliente estã removendo o serviço.",
        r:  "q1"
    },
    // 10
    {
        t:  "Complete: Um serviço funciona por um tempo ... até que seja concluído ou parado.",
        q1: "a) determinado",
        q2: "b) indeterminado",
        q3: "c) curto",
        q4: "d) longo",
        r:  "q2"
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

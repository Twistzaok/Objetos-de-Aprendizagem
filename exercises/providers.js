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
        q1: "a) Os aplicativos não podem enviar transmissões.",
        q2: "b) As transmissões sem goAsync() não são recomendadas para atividades de Segundo Plano.",
        q3: "c) Iniciar uma Activity a partir de um receptor pode gerar problemas para o usuário.",
        q4: "d) É recomendado enviar transmissões locais utilizando o LocalBroadcastManager.",
        r:  "q1"
    },
    // 3
    {
        t:  "Complete: O sistema ... cria um novo receptor quando lida com ... novas.",
        q1: "a) Nunca, transmissões.",
        q2: "b) Nunca, permissões.",
        q3: "c) Sempre, transmissões.",
        q4: "d) Sempre, permissões.",
        r:  "q3"
    },
    // 4
    {
        t:  "Para criar um receptor no Manifest é necessário:",
        q1: "a) Especificar o <manifest> e usar a subclasse Activity.",
        q2: "b) Especificar o <receiver> e usar a subclasse BroadcastReceiver.",
        q3: "c) Especificar o onReceive() e usar a subclasse Manifest.",
        q4: "d) Especificar o <receiver> e usar a subClasse onReceive.",
        r:  "q2"
    },
    // 5
    {
        t:  "Para criar um receptor no Context é necessário:",
        q1: "a) Criar uma instância BroadcastReceiver e registrar o Receiver.",
        q2: "b) Especificar o <receiver> e usar a subclasse BroadcastReceiver.",
        q3: "c) Criar uma instância IntentFilter e fazer o registro utilizando BroadcastReceiver.",
        q4: "d) Não é necessário criar nenhuma instância já que o receptor é inato do Context.",
        r:  "q1"
    },
    // 6
    {
        t:  "Qual NÃO é um método de transmitir Broadcast?",
        q1: "a) sendOrderedBroadcast",
        q2: "b) sendBroadcast",
        q3: "c) LocalBroadcastManager.sendBroadcast",
        q4: "d) sendReversedBroadcast",
        r:  "q4"
    },
    // 7
    {
        t:  "Para enviar uma transmissão dentro de um aplicativo, é recomendado usar:",
        q1: "a) sendOrderedBroadcast",
        q2: "b) sendBroadcast",
        q3: "c) LocalBroadcastManager.sendBroadcast",
        q4: "d) sendProtectedBroadcast",
        r:  "q3"
    },
    // 8
    {
        t:  "Para enviar várias transmissões não sequenciais, é recomendado usar:",
        q1: "a) sendOrderedBroadcast",
        q2: "b) sendBroadcast",
        q3: "c) LocalBroadcastManager.sendBroadcast",
        q4: "d) sendProtectedBroadcast",
        r:  "q2"
    },
    // 9
    {
        t:  "Para enviar várias transmissões onde é necessário uma checagem das transmissões, é recomendado usar:",
        q1: "a) sendOrderedBroadcast",
        q2: "b) sendBroadcast",
        q3: "c) LocalBroadcastManager.sendBroadcast",
        q4: "d) sendProtectedBroadcast",
        r:  "q1"
    },
    // 10
    {
        t:  "Para enviar transmissões sem especificações é recomendado usar:",
        q1: "a) sendOrderedBroadcast",
        q2: "b) sendBroadcast",
        q3: "c) LocalBroadcastManager.sendBroadcast",
        q4: "d) sendProtectedBroadcast",
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

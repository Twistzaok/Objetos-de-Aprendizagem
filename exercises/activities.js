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
        t:  "Uma Activity faz o papel de...",
        q1: "a) iniciar o código.",
        q2: "b) somar números.",
        q3: "c) promover um formulário.",
        q4: "d) exercitar o usuário.",
        r:  "q1"
    },
    // 2
    {
        t:  "Por que as Activities fizeram-se necessárias em aplicações mobile?",
        q1: "a) Porque é necessário uma maior ligação entre as interfaces.",
        q2: "b) Para que houvesse um ponto inicial de interação aplicação-usuário.",
        q3: "c) Porque a interação aplicação-usuário poderia iniciar-se a partir de diferentes telas.",
        q4: "d) Para que todas as Activities trabalhem separadas.",
        r:  "q3"
    },
    // 3
    {
        t:  "A Activity responsável por iniciar a interação aplicação-usuário é chamada de:",
        q1: "a) Principal",
        q2: "b) Secundária",
        q3: "c) Terciária",
        q4: "d) Neutra",
        r:  "q1"
    },
    // 4
    {
        t:  "Complete: A Activities são consideradas ...  pois ...",
        q1: "a) Independentes. Trabalham unicamente sozinhas.",
        q2: "b) Dependentes. Dependem da Activity Principal para serem ativadas.",
        q3: "c) Independentes. Tem ligações mínimas umas com as outras.",
        q4: "d) Dependentes. Pois trabalham juntas e por muitas vezes iniciam-se umas as outras.",
        r:  "q3"
    },
    // 5
    {
        t:  "Normalmente uma atividade implementa:",
        q1: "a) Uma interface.",
        q2: "b) Um formulário.",
        q3: "c) Uma rotina.",
        q4: "d) Um loop.",
        r:  "q1"
    },
    // 6
    {
        t:  "As atividades devem ser declaradas como filhas de qual elemento?",
        q1: "a) Manifest.",
        q2: "b) Activity.",
        q3: "c) Application.",
        q4: "d) Android-Name.",
        r:  "q3"
    },
    // 7
    {
        t:  "São exemplos de callbacks:",
        q1: "a) onCreate(), onDestroy(), onFix()",
        q2: "b) onPause(), onResume(), onAccelerate()",
        q3: "c) onCreate(), onStart(), onStop()",
        q4: "d) onCreate(), onStop(), onFix()",
        r:  "q3"
    },
    // 8
    {
        t:  "Quando é chamada a callback onStart()?",
        q1: "a) Quando o aplicativo inicia.",
        q2: "b) Quando a atividade prepara-se para tornar-se visível ao usuário.",
        q3: "c) Quando o usuário insere algum dado.",
        q4: "d) Quando o aplicativo para de funcionar.",
        r:  "q2"
    },
    // 9
    {
        t:  "Qual callback é chamada quando a função não está mais visível para o usuário?",
        q1: "a) onResume()",
        q2: "b) onStop()",
        q3: "c) onRestart()",
        q4: "d) onDestroy()",
        r:  "q2"
    },
    // 10
    {
        t:  "O onStart() é sempre iniciado após...",
        q1: "a) onCreate()",
        q2: "b) onStop()",
        q3: "c) onRestart()",
        q4: "d) onDestroy()",
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

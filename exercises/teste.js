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
var p10 = document.getElementById('p10');
var p11 = document.getElementById('p11');
var p12 = document.getElementById('p12');
var p13 = document.getElementById('p13');
var p14 = document.getElementById('p14');
var p15 = document.getElementById('p15');
var p16 = document.getElementById('p16');
var p17 = document.getElementById('p17');
var p18 = document.getElementById('p18');
var p19 = document.getElementById('p19');

var questoes = [
    // 1
    {
        t:  "Por que as Activities fizeram-se necessárias em aplicações mobile?",
        q1: "a) Porque é necessário uma maior ligação entre as interfaces.",
        q2: "b) Para que houvesse um ponto inicial de interação aplicação-usuário.",
        q3: "c) Porque a interação aplicação-usuário poderia iniciar-se a partir de diferentes telas.",
        q4: "d) Para que todas as Activities trabalhem separadas.",
        r:  "q3"
    },
    // 2
    {
        t:  "A Activity responsável por iniciar a interação aplicação-usuário é chamada de:",
        q1: "a) Principal",
        q2: "b) Secundária",
        q3: "c) Terciária",
        q4: "d) Neutra",
        r:  "q1"
    },
    // 3
    {
        t:  "Normalmente uma atividade implementa:",
        q1: "a) Uma interface.",
        q2: "b) Um formulário.",
        q3: "c) Uma rotina.",
        q4: "d) Um loop.",
        r:  "q1"
    },
    // 4
    {
        t:  "São exemplos de callbacks de atividades:",
        q1: "a) onCreate(), onDestroy(), onFix()",
        q2: "b) onPause(), onResume(), onAccelerate()",
        q3: "c) onCreate(), onStart(), onStop()",
        q4: "d) onCreate(), onStop(), onFix()",
        r:  "q3"
    },
    // 5
    {
        t:  "O que é uma transmissão?",
        q1: "a) Uma mensagem enviada via ondas de rádio para um aplicativo Android.",
        q2: "b) Uma mensagem enviada por um dispositivo externo como uma televisão para um aplicativo Android.",
        q3: "c) Uma mensagem enviada do sistema Android e de outros aplicativos Android entre si.",
        q4: "d) Uma mensagem criptografada enviada para fins de segurança para um aplicativo Android.",
        r:  "q3"
    },
    // 6
    {
        t:  "Marque a alternativa incorreta.",
        q1: "a) Os aplicativos não podem enviar transmissões.",
        q2: "b) As transmissões sem goAsync() não são recomendadas para atividades de Segundo Plano.",
        q3: "c) Iniciar uma Activity a partir de um receptor pode gerar problemas para o usuário.",
        q4: "d) É recomendado enviar transmissões locais utilizando o LocalBroadcastManager.",
        r:  "q1"
    },
    // 7
    {
        t:  "Qual NÃO é um método de transmitir Broadcast?",
        q1: "a) sendOrderedBroadcast",
        q2: "b) sendBroadcast",
        q3: "c) LocalBroadcastManager.sendBroadcast",
        q4: "d) sendReversedBroadcast",
        r:  "q4"
    },
    // 8
    {
        t:  "Para enviar uma transmissão dentro de um aplicativo, é recomendado usar:",
        q1: "a) sendOrderedBroadcast",
        q2: "b) sendBroadcast",
        q3: "c) LocalBroadcastManager.sendBroadcast",
        q4: "d) sendProtectedBroadcast",
        r:  "q3"
    },
    // 9
    {
        t:  "Qual a função dos Provedores de Conteúdo?",
        q1: "a) Fornecem auxílio para tocar vídeos e áudios.",
        q2: "b) Gerenciam o acesso a um banco de dados.",
        q3: "c) Gerenciam o acesso a uma rede social.",
        q4: "d) Provém conteúdo para Youtubers.",
        r:  "q2"
    },
    // 10
    {
        t:  "O Content Provider gerencia o acesso aos dados de uma aplicação Android. Sobre Content Providers, é correto afirmar que:",
        q1: "a) Content.Resolver.query() cria uma classe no mesmo diretório onde reside o arquivo MainActivity.",
        q2: "b) Content Providers implementam uma interface comum para fazer buscas e retornar resultados.",
        q3: "c) Content.Provider.query() se comunica com o objeto do provedor.",
        q4: "d) Content Providers implementam interfaces diferentes para manter as aplicação isoladas.",
        r:  "q2"
    },
  // 11
    {
        t:  "Por que plataformas Android utilizam Content Provider?",
        q1: "a) Porque o Android possui vários locais para guardar os dados das aplicações.",
        q2: "b) Para as aplicações carregarem mais rápido.",
        q3: "c) Porque o Android não possui um local comum para guardar os dados das aplicações.",
        q4: "d) Para ter mais espaço para armazenar as aplicações.",
        r:  "q3"
    },
    // 12
    {
        t:  "São métodos de um Content Provider?",
        q1: "a) query(), insert(), update(), delete(), getType() e onCreate().",
        q2: "b) Activity (), insert(), update(), delete(), select() e onCreate().",
        q3: "c) query(), insert(), update(), delete(), select() e onCreate().",
        q4: "d) Activity (), insert(), update(), delete(), getType() e onCreate().",
        r:  "q1"
    },
    // 13
    {
        t:  "O que é um Service?",
        q1: "a) Um componente capaz de efetuar operações longas.",
        q2: "b) Um componente capaz de oferecer uma interface para o usuário.",
        q3: "c) Um componente capaz de delegar informações entre componentes.",
        q4: "d) Um componente capaz de oferecer um Banco de Dados.",
        r:  "q1"
    },
    // 14
    {
        t:  "Os dois modos de vida de um serviço são:",
        q1: "a) Primeiro e Segundo Plano.",
        q2: "b) Iniciado e Terminado.",
        q3: "c) Iniciado e Vinculado.",
        q4: "d) Iniciado e Retomado.",
        r:  "q3"
    },
    // 15
    {
        t:  "São callbacks de Serviços:",
        q1: "a) onCreate(), onRecreate() e onDestroy()",
        q2: "b) onCreate(), onDestroy() e onPause()",
        q3: "c) onBind(), onUnbind() e onRebind()",
        q4: "d) onBind(), onRecreate() e onDestroy()",
        r:  "q3"
    },
    // 16
    {
        t:  "Complete: Um serviço funciona por um tempo ... até que seja concluído ou parado.",
        q1: "a) determinado",
        q2: "b) indeterminado",
        q3: "c) curto",
        q4: "d) longo",
        r:  "q2"
    },
    // 17
    {
        t:  "Para que serve uma Intent?",
        q1: "a) Uma Intent é um objeto utilizado para solicitar uma ação de outro componente.",
        q2: "b) Uma Intent é um objeto utilizado para conectar dois usuários. ",
        q3: "c) Uma Intent é um objeto utilizado para desconectar dois usuários.",
        q4: "d) Uma Intent é um objeto utilizado para explicar o sistema ao usuário.",
        r:  "q1"
    },
    // 18
    {
        t:  "Uma Intent será implícita quando:",
        q1: "a) Especificam o componente e a ação.",
        q2: "b) Especificam o componente mas não a ação.",
        q3: "c) Não especificam o componente nem a ação.",
        q4: "d) Não especificam o componente mas a ação.",
        r:  "q4"
    },
    // 19
    {
        t:  "São exemplos de dados para criação de Intents:",
        q1: "a) Nome, Ação, Interface, Dados",
        q2: "b) Nome, Ação, Interface, ID",
        q3: "c) Nome, Ação, Dados, Categoria",
        q4: "d) Nome, Ação, Dados, ID",
        r:  "q3"
    },
    // 20
    {
        t:  "Qual dos métodos a seguir NÃO é utilizado para definir nomes em uma Intent:",
        q1: "a) setComponent()",
        q2: "b) setComponentName()",
        q3: "c) setClass()",
        q4: "d) setClassName()",
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
p10.addEventListener('click', (e) => mudarPagina(e, "10"));
p11.addEventListener('click', (e) => mudarPagina(e, "11"));
p12.addEventListener('click', (e) => mudarPagina(e, "12"));
p13.addEventListener('click', (e) => mudarPagina(e, "13"));
p14.addEventListener('click', (e) => mudarPagina(e, "14"));
p15.addEventListener('click', (e) => mudarPagina(e, "15"));
p16.addEventListener('click', (e) => mudarPagina(e, "16"));
p17.addEventListener('click', (e) => mudarPagina(e, "17"));
p18.addEventListener('click', (e) => mudarPagina(e, "18"));
p19.addEventListener('click', (e) => mudarPagina(e, "19"));

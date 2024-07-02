const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é a sua cor favorita? ",
        alternativas: [
            {
                texto: "Verde",
                afirmacao: "Você é uma ervilha comum. "
            },
            {
                texto: "Amarelo",
                afirmacao: "Você é uma ervilha que gosta de se destacar."
            },
            {
                texto: "Laranja",
                afirmacao: "Laranja?."
            }
        
        ]
    },
    {
        enunciado: ". O que você prefere fazer em seu tempo livre?",
        alternativas: [
            {
                texto: " Em meu tempo livre, costumo praticar meu brilho natural. Afinal, você tem que manter esse amarelo vibrante em dia. ",
                afirmacao: "Acha que o mundo gira ao seu redor? você não é o último bombomzin não."
            },
            {
                texto: "Adoro relaxar sob o sol, absorvendo todos os nutrientes que ele tem para oferecer. É como uma festa de fotosíntese!",
                afirmacao: "Você é bem humilde e descontraida, amei!"
            },
            {
                texto: "Honestamente, meu tempo livre é um pouco entediante. Às vezes, fico apenas contemplando a vida vegetal. Não é emocionante, mas alguém tem que fazer isso.",
                afirmacao: "Você é muito chata e entediante, mas alguém te que ser assim né."
            }
        ]
    },
    {
        enunciado: " Se você fosse uma celebridade na horta, quem você seria?",
        alternativas: [
            {
                texto: "Serena Williams",
                afirmacao: "Quem é Serena Williams, nega?"
            },
            {
                texto: "Beyoncé",
                afirmacao: "Tu jurou que é parecida com a Beyoncé."
            },
            {
                texto: "Elon Musk",
                afirmacao: "Elon Musck? esperva mais."
            }
            
        ]
    },
    {
        enunciado: " Qual é a sua relação com outras plantas ao seu redor? ",
        alternativas: [
            {
                texto: "Gosto de crescer em grupo e compartilhar nutrientes.",
                afirmacao: "Sua conecxão com os outros é saudavel e harmoniosa, você é muito brother."
            },
            {
                texto: "Prefiro crescer sozinho, sem competição.",
                afirmacao: "Mesmo você sendo uma emo excluida, vocễ reconhece a libertade e apresença das outras."
            },
            {
                texto: "Não me importo com outras plantas ao meu redor.",
                afirmacao: "Você é distante e se acha superior em relação as outras plantas, por iso ninguém gosta de você."
            }
        ]
    },
    {
        enunciado: "O que você faria se visse uma ervilha saltitando? ",
        alternativas: [
            {
                texto: " Tentaria conversar com ela para descobrir por que está tão animada.",
                afirmacao: "Se alguém te chamar e fofoqueira, diga que você apenas relata fatos."
            },
            {
                texto: "Julgaria e continuaria com minhas atividades.",
                afirmacao: "Melhorar um pouco pras pessoas gotarem de você não é uma escolha ruim. "
            },
            {
                texto: "Correria na direção oposta, pois seria muito estranho",
                afirmacao: "Felicidade alheia te incomoda, suas atitudes são compreensiveis, mas melhore. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Ervilha...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

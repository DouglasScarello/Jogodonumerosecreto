# 🎯 Jogo do Número Secreto (Secret Number Game)

Uma aplicação web interativa desenvolvida com **JavaScript Vanilla**, **HTML5** e **CSS3**, focada na aplicação prática de lógica de programação, manipulação dinâmica do DOM (Document Object Model) e recursos de acessibilidade com sintetização de voz (**Web Speech / ResponsiveVoice**).

<p align="left">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/Alura-0070BA?style=for-the-badge&logo=google-classroom&logoColor=white" alt="Formação Alura" />
  <img src="https://img.shields.io/badge/Status-Concluído-success?style=for-the-badge" alt="Status" />
</p>

---

## 📌 Visão Geral

O projeto consiste em um jogo de adivinhação onde o usuário tenta descobrir um número pseudialeatório gerado pelo sistema entre 1 e 10. A aplicação fornece pistas contextuais ("maior" ou "menor") e contabiliza a quantidade de tentativas necessárias até o acerto.

### 🌟 Destaques de Engenharia e Boas Práticas

- **Recursão com Controle de Estado Único**: O algoritmo `gerarNumeroAleatorio()` utiliza recursão associada a um array de histórico (`listasDeNumerosAcertados`). O número sorteado não se repete até que todos os 10 números do intervalo tenham sido jogados, momento em que a lista é reiniciada automaticamente.
- **Manipulação Eficiente e Desacoplada do DOM**: Uso da função utilitária `exibirTextoNaTela(tag, Texto)` para padronizar a injeção dinâmica de conteúdo em diferentes nós HTML, promovendo o princípio DRY (*Don't Repeat Yourself*).
- **Gerenciamento de Estado da UI**: Controle programático de atributos nativos (`disabled`, foco de input com `.focus()`) para impedir ações inválidas do jogador antes da hora.
- **Acessibilidade e Narração por Voz**: Integração com a biblioteca de síntese de voz (TTS) para fornecer feedback auditivo das ações e mensagens na tela.

---

## 🔄 Fluxo e Lógica do Jogo

```mermaid
flowchart TD
    Start([Início / Carregamento]) --> Init[reiniciarJogo]
    Init --> Random[gerarNumeroAleatorio com histórico único]
    Random --> Input[/Jogador digita o chute/]
    Input --> Verify{Chute == Número Secreto?}
    
    Verify -- Sim --> Win[Exibe mensagem de sucesso + total de tentativas]
    Win --> EnableBtn[Habilita botão 'Novo Jogo']
    EnableBtn --> ClickNew[Jogador clica em Reiniciar]
    ClickNew --> Init
    
    Verify -- Não --> Hint{Chute > Número Secreto?}
    Hint -- Sim --> Less[Pista: 'O número secreto é menor']
    Hint -- Não --> Greater[Pista: 'O número secreto é maior']
    Less --> Loop[Incrementa tentativas + limpa input]
    Greater --> Loop
    Loop --> Input
```

---

## 🚀 Como Executar Localmente

Como se trata de uma aplicação estática em **Vanilla Web**:

### 1. Clonar o repositório:
```bash
git clone https://github.com/DouglasScarello/Jogodonumerosecreto.git
cd Jogodonumerosecreto
```

### 2. Abrir a aplicação:
Basta abrir o arquivo `index.html` em qualquer navegador moderno de sua preferência:
```bash
# No Linux:
xdg-open index.html

# Ou simplesmente dê um duplo clique no arquivo index.html
```

*(Opcional com Live Server / VS Code)*: Você também pode clicar com o botão direito em `index.html` e selecionar **Open with Live Server**.

---

## 📁 Estrutura de Arquivos

```text
Jogodonumerosecreto/
├── app.js            # Lógica completa do jogo, recursão e controle do DOM
├── index.html        # Estrutura semântica e importação de scripts/fontes
├── style.css         # Estilização responsiva, tipografia e layout
├── img/              # Assets estáticos, ícones e background
└── README.md         # Documentação técnica do projeto
```

---

## 🎓 Contexto de Desenvolvimento

Projeto desenvolvido e consolidado durante a formação prática de **Lógica de Programação e JavaScript** da **Alura**, demonstrando proficiência nos alicerces fundamentais da linguagem ECMAScript antes da adoção de frameworks modernos.

---

Desenvolvido por **[Douglas Scarello](https://github.com/DouglasScarello)** 🚀

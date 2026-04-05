const projetos = [
    {
        id: "space",
        titulo: "Space Cleaner",
        paragrafos: [
            "Na disciplina Lógica de Programação, como avaliação final foi proposta a criação de um jogo educativo com o tema naves espaciais. Para isso, foi feito o Space Cleaner, um jogo onde é possível se divertir e praticar somas matemáticas. O game foi feito no P5.js, uma biblioteca de JavaScript muito útil para programar jogos. A temática do semestre 2021.2 foi \"Naves espaciais\", por isso foi recomendado como tema padrão dos jogos elaborados pelos discentes."
        ],
        imagens: [
            { src: "imagens/img-jogo1.jpeg", legenda: "Imagem do jogo" }
        ],
        links: [
            { url: "https://murilobarros304.github.io/Space-Cleaner/", texto: "Link para o jogo." }
        ]
    },
    {
        id: "peplot",
        titulo: "Peplot",
        paragrafos: [
            "Em Probabilidade e Estatística, uma das avaliações consistiu na criação e apresentação de um artigo sobre dados do Brasil, aplicando os conceitos apresentados em aula. Foi analisado o comportamento do IDEB nas escolas municipais do Rio Grande do Norte, e o que ocorreu com os dados na pandemia de COVID-19. Para melhor visualização das características dos índices, foi feito um programa em Python utilizando Google Colab aplicado a tabelas obtidas no site do IBGE.",
            "O objetivo do artigo, além de aplicar os conhecimentos adquiridos em sala de aula, consiste em testar a hipótese de que a pandemia impactou negativamente na educação municipal no estado do Rio Grande do Norte, Brasil."
        ],
        imagens: [
            { src: "imagens/peboxplot.png", legenda: "Box Plot gerado para o IDEB nos municípios do RN de 2005 a 2021" }
        ],
        links: [
            { url: "https://colab.research.google.com/drive/1aeWIHKh12Ftd7PhhnUBTx1zwvYstIdoM?usp=sharing", texto: "Programa no Google Colab." },
            { url: "https://drive.google.com/file/d/1ixtfV0KjK3hCiHNvZvmWbf0QWI0mf0Zy/view?usp=drive_link", texto: "Artigo em PDF." }
        ]
    },
    {
        id: "solaria",
        titulo: "SolarIA",
        paragrafos: [
            "O SolarIA é um projeto robusto de Machine Learning focado na previsão de irradiação solar no Rio Grande do Norte, construído a partir do cruzamento de dados de estações terrestres do INMET com medições de satélite da NSRDB. Após a testagem rigorosa de diferentes algoritmos, o modelo XGBoost otimizado consolidou-se como a ferramenta definitiva do projeto, entregando uma performance de altíssima precisão: ele consegue explicar mais de 98% da variabilidade da Irradiância Horizontal Global (GHI), mantendo um Erro Médio Absoluto (MAE) de apenas 16.05 W/m². Todo esse poder preditivo, impulsionado pela leitura inteligente de padrões sazonais e variáveis meteorológicas locais, foi disponibilizado de forma acessível através de uma interface interativa desenvolvida em Streamlit. Dessa forma, o projeto não apenas resolve um problema complexo de dados no backend, mas também entrega uma aplicação web onde é possível explorar visualmente o potencial energético solar da região."
        ],
        imagens: [
            { src: "imagens/solaria.png", legenda: "Tela inicial da página no Streamlit do projeto SolarIA." }
        ],
        links: [
            { url: "https://solar-ia.streamlit.app/", texto: "Acesse a aplicação interativa." },
        ]
    },
    {
        id: "rbf",
        titulo: "Ajuste de Curvas com Funções de Base Radial",
        paragrafos: [
            "Em Computação Numérica, parte da avaliação da unidade em que foram estudadas as diferentes formas\
                de ajuste de funções foi proposta a criação de um programa em Python para fazer um ajuste de funções de\
                base radial com dados de valores mensais de incidência solar ao longo do dia de um lugar de\
                escolhaprópria, bem como os valores médios anuais ao longo dos meses do ano de 2022. Esse tipo de estudo\
                é útil caso haja pretensão de implantação de uma fonte de energia solar.",
            "Nos gráficos, o eixo vertical representa a radiação direta normal em Wh/m² enquanto o eixo\
                horizontal mostra as horas das\
                5h às 19h"
        ],
        imagens: [
            { src: "imagens/May.png", legenda: "Gráfico de ajuste de curva de incidência solar para maio de 2022." },
            { src: "imagens/anual.png", legenda: "Exemplo de ajuste de incidência solar média anual." }
        ],
        links: [
            { url: "https://colab.research.google.com/drive/1cAuff_g34BIGp5otb01buiisAH4yI2S_?usp=sharing", texto: "Programa no Google Colab." },
            { url: "https://globalsolaratlas.info/detail?s=-8.035778,-37.441406&m=site", texto: "Dados de incidência solar." }
        ]
    },
    {
        id: "escultor",
        titulo: "Escultor 3D",
        paragrafos: [
            "Para aprofundar os conhecimentos adquiridos nas primeiras duas unidades da disciplina Programação\
                Avançada tais como: Programação orientada a objetos em C++, programação estruturada, e outros como\
                noções espaciais (para a modelagem). Foi proposto o projeto para a construção de um escultor 3D para\
                artes em cubos utilizando a alocação dinâmica de uma matriz de objetos com atributos tais como\
                cor e transparência, além disso o programa deve passar a matriz construída para o formato OFF dentro das\
                diretrizes de escrita do formato, para que a modelagem seja lida por programas como GeomView (Linux) e\
                MeshLab (Windows)."
        ],
        imagens: [
            { src: "imagens/img-geomview.png", legenda: "Exemplo de modelagem feita no programa." },
        ],
        links: [
            { url: "https://murilobarros304.github.io/minha-pag/doc-escultor/", texto: "Documentação do programa." }
        ]
    }
];

// Lógica de Renderização
const menuNavegacao = document.getElementById('menu-navegacao');
const containerProjetos = document.getElementById('container-projetos');

projetos.forEach(proj => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="#${proj.id}">${proj.titulo}</a>`;
    menuNavegacao.appendChild(li);

    let sectionHTML = `
        <section id="${proj.id}" class="project-section">
            <h2>${proj.titulo}</h2>
            ${proj.paragrafos.map(p => `<p>&emsp;${p}</p>`).join('')}
    `;

    if (proj.imagens && proj.imagens.length > 0) {
        proj.imagens.forEach(img => {
            sectionHTML += `
            <figure>
                <img src="${img.src}" class="center" alt="${img.legenda}">
                <figcaption class="center">${img.legenda}</figcaption>
            </figure>`;
        });
    }

    if (proj.links && proj.links.length > 0) {
        // Um pequeno container para alinhar os links
        sectionHTML += `<div class="links-container">`;
        proj.links.forEach(link => {
            sectionHTML += `<a href="${link.url}" target="_blank" rel="noreferrer noopener">${link.texto}</a>`;
        });
        sectionHTML += `</div>`;
    }

    sectionHTML += `</section>`;
    
    // Injeta na página
    containerProjetos.insertAdjacentHTML('beforeend', sectionHTML);
});
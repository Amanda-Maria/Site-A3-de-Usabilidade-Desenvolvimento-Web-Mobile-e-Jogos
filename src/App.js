import React, { useState, useEffect } from "react";
import "./App.css"; 

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentPrivateSlide, setCurrentPrivateSlide] = useState(0); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const handleModalToggle = (content) => {
    setIsModalOpen(!isModalOpen);
    setModalContent(content);
  };

  const contentData = {
    energia: {
      title: "Reduzir o uso de energia elétrica",
      description: (
        <ul>
          <li>Utilizar lâmpadas de LED, que consomem menos energia e têm uma vida útil mais longa.</li>
          <li>Investir em eletrodomésticos mais eficientes em termos de energia.</li>
          <li>Utilizar mais frequentemente a luz natural e reduzir a dependência de iluminação artificial.</li>
          <li>O setor de transportes é um dos principais responsáveis pela emissão de gases de efeito estufa. Para reduzir as emissões pessoais, as pessoas podem adotar modos de transporte mais sustentáveis:</li>
          <li>Optar por transportes públicos em vez de dirigir carros particulares, o que reduz o número de veículos nas ruas e as emissões de gases poluentes.</li>
          <li>Utilizar bicicletas ou caminhar em distâncias curtas, contribuindo para a redução da poluição do ar e do consumo de combustíveis fósseis.</li>
          <li>Incentivar o uso de caronas para diminuir o número de carros em circulação.</li>
        </ul>
      ),
    },
    alimentacao: {
      title: "Adotar uma alimentação mais sustentável",
      description: (
        <ul>
          <li>Reduzir o consumo de produtos de origem animal, especialmente carne vermelha, que possui uma pegada de carbono muito alta devido à sua produção intensiva.</li>
          <li>Aumentar o consumo de alimentos vegetais e produtos locais e sazonais, que têm um impacto ambiental menor.</li>
          <li>Evitar o desperdício de alimentos, planejar melhor as compras e consumir de forma consciente.</li>
          <li>Reduzir o consumo de produtos processados que requerem energia e recursos significativos para sua produção.</li>
        </ul>
      ),
    },
    reciclagem: {
      title: "Reduzir, reutilizar e reciclar",
      description: (
        <ul>
          <li>Reduzir o uso de produtos descartáveis, como garrafas plásticas e sacolas, e optar por alternativas reutilizáveis, como garrafas de água de vidro ou metal.</li>
          <li>Reutilizar itens sempre que possível, como roupas, móveis e embalagens, prolongando seu ciclo de vida e evitando o desperdício.</li>
          <li>Reciclar materiais como papel, vidro, plástico e metal, encaminhando-os para a reciclagem e evitando que se acumulem em aterros sanitários.</li>
        </ul>
      ),
    },
  };

  const solutions = [
    {
      img: './images/ONG1.jpg',
      text: 'Greenpeace Brasil: Combate o desmatamento e promove energias renováveis.'
    },
    {
      img: './images/ONG2.jpg',
      text: 'WWF Brasil: Protege biomas e promove práticas sustentáveis.'
    },
    {
      img: './images/ONG3.jpg',
      text: 'Instituto Socioambiental (ISA): Foca na defesa dos direitos indígenas e na preservação da Amazônia.'
    },
    {
      img: './images/ONG4.jpg',
      text: 'Instituto Terra: Realiza reflorestamento e restauração ecológica na Mata Atlântica.'
    }
  ];

  const iniciativaPrivada = [
    {
      img: './images/tesla.jpeg',
      text: 'A Tesla é um ícone na indústria automotiva e de energias renováveis.Com sua visão voltada para a mobilidade sustentável, a empresa produz carros elétricos de alto desempenho e investe fortemente em soluções de armazenamento de energia e energia solar. A Tesla também é conhecida por seu compromisso com a redução das emissões de gases de efeito estufa e com a promoção de um futuro mais sustentável por meio de inovações tecnológicas.'
    },
    {
      img: './images/google.jpg',
      text: 'O Google é uma das empresas mais influentes em termos de inovação tecnológica e, desde 2007, se comprometeu a ser carbono neutro. A empresa investe fortemente em fontes de energia renovável, como a energia solar e eólica, para alimentar seus data centers. Além disso, o Google também se dedica a tecnologias verdes e ao apoio de iniciativas sustentáveis em diversos setores, como transporte e educação.'
    },
    {
      img: './images/natura.jpg',
      text: 'A Natura é uma empresa brasileira do setor de cosméticos que tem se destacado globalmente por seu compromisso com a sustentabilidade. A marca adota práticas de produção que buscam minimizar os impactos ambientais, com destaque para o uso de ingredientes naturais e a compensação de carbono. A Natura também promove a economia circular por meio de programas de reciclagem e reutilização de embalagens.'
    },
  ];

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? solutions.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === solutions.length - 1 ? 0 : prev + 1));
  };

  const handlePrevPrivateSlide = () => {
    setCurrentPrivateSlide((prev) => (prev === 0 ? iniciativaPrivada.length - 1 : prev - 1));
  };

  const handleNextPrivateSlide = () => {
    setCurrentPrivateSlide((prev) => (prev === iniciativaPrivada.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setIsNavbarHidden(true);
      } else {
        setIsNavbarHidden(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return (
    <div className="App">
      <header className={`navbar ${isNavbarHidden ? "hidden" : ""}`}>
        <img src="./images/Logo.png" alt="Logo" className="logo" />
        <nav className="nav-links">
          <ul>
            <li><a href="#home" onClick={() => setActiveSection('home')}>Página Incial</a></li>
            <li><a href="#desafios-impactos" onClick={() => setActiveSection('desafios')}>Desafios e Impactos</a></li>
            <li><a href="#solucao-acoes-globais" onClick={() => setActiveSection('solucao')}>Solução e Ações Globais</a></li>
            <li><a href="#educacao-conscientizacao" onClick={() => setActiveSection('educacao')}>Educação e Conscientização</a></li>
            <li><a href="#iniciativa-privada" onClick={() => setActiveSection('iniciativa')}>Iniciativa Privada</a></li>
            <li><a href="#como-ajudar" onClick={() => setActiveSection('ajudar')}>Como Ajudar</a></li>
          </ul>
        </nav>
      </header>

      <main className="main-content">
        {activeSection === 'home' && (
          <div id="home">
            <h1 className="main-title">Ação Contra a Mudança Global do Clima</h1>

            <div className="image-container">
              <img src="./images/ODS-13-T.png" alt="Imagem principal" className="main-image" />
            </div>

            <div className="text-container">
              <p className="main-text">
                A ODS 13 é um dos 17 Objetivos de Desenvolvimento Sustentável propostos pela ONU para enfrentar os maiores desafios globais até 2030.
                Esta meta foca em ações urgentes para combater a mudança do clima e seus impactos em todo o mundo. As alterações climáticas afetam diretamente a vida humana, biodiversidade, economia e segurança global.
                A mobilização de governos, empresas e indivíduos é fundamental para conter essa crise.
              </p>
            </div>

            <h2 className="sub-title">Entendendo a Ação Climática</h2>
            <p className="sub-text">
              A ODS 13 visa integrar ações imediatas para reduzir as emissões de gases de efeito estufa e fortalecer a resiliência às mudanças climáticas.
              Sua meta principal é limitar o aquecimento global a 1,5°C acima dos níveis pré-industriais, de acordo com o Acordo de Paris.
            </p>

            <h3 className="sub-title-2">Metas Principais do ODS 13</h3>
            <ul className="sub-title-2-list">
              <li>Reduzir emissões de carbono.</li>
              <li>Aumentar a resiliência e a capacidade de adaptação às mudanças climáticas.</li>
              <li>Promover a educação e a conscientização sobre os impactos das mudanças climáticas.</li>
              <li>Mobilizar US$ 100 bilhões por ano até 2025 para ajudar os países em desenvolvimento.</li>
            </ul>

            <div className="video-container">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/E0tubYc3IgM"
                title="ODS 13 – AÇÃO CONTRA A MUDANÇA GLOBAL DO CLIMA"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
              </iframe>
            </div>
          </div>
        )}

        {activeSection === 'desafios' && (
          <div id="desafios-impactos">
            <h2 className="title-desafios">Desafios e Impactos</h2>

            <div className="image-container">
              <img src="./images/desafioseImpactos.jpg" alt="Imagem Desafios e Impactos" className="image-desafios" />
            </div>

            <div className="text-container">
              <p className="text-desafios">
                As mudanças climáticas são um dos maiores desafios globais, causadas principalmente pelas emissões de gases de efeito estufa, como o CO₂,
                levando ao aumento das temperaturas globais, eventos climáticos extremos e graves impactos sociais e ambientais.
              </p>
            </div>

            <h3 className="sub-title-2">Impactos globais</h3>
            <ul className="sub-text-desafios">
              <li>Aquecimento global: Aumento médio de 1,1°C desde a era pré-industrial, afetando ecossistemas, agricultura e saúde.</li>
              <li>Degelo e elevação do nível do mar: Desafiam áreas costeiras, ameaçando infraestrutura e populações. Projeções indicam aumento de até 1 metro neste século.</li>
              <li>Perda de biodiversidade: Extinção de espécies e degradação de habitats como recifes de corais.</li>
              <li>Eventos extremos: Aumento de furacões, secas, enchentes e ondas de calor, com impactos econômicos e humanitários.</li>
            </ul>

            <h3 className="sub-title-2">Impactos no Brasil</h3>
            <ul className="sub-text-desafios">
              <li>Nordeste: Secas intensas afetam agricultura e migração. Exemplo: Serra Talhada enfrenta escassez de água..</li>
              <li>Sul: Chuvas intensas causam enchentes e deslizamentos, destruindo infraestrutura. Exemplo: Enchentes de 2008 em Santa Catarina.</li>
              <li>Amazônia: Desmatamento e secas afetam biodiversidade e comunidades indígenas. Exemplo: Ribeirinhos enfrentam escassez de recursos naturais.</li>
            </ul>

            <h3 className="sub-title-2">Impactos internacionais</h3>
            <ul className="sub-text-desafios">
              <li>Ilhas do Pacífico: Países como Kiribati enfrentam desaparecimento devido ao aumento do nível do mar.</li>
              <li>África Subsaariana: Secas e variabilidade climática agravam insegurança alimentar e deslocamentos.</li>
              <li>Austrália: Incêndios florestais e degradação da Grande Barreira de Corais devido ao aumento das temperaturas.</li>
            </ul>

            <div className="text-container">
              <p className="main-text">
                As mudanças climáticas intensificam desigualdades sociais, deslocam populações e demandam ações urgentes para mitigar seus efeitos.
              </p>
            </div>

          </div>
        )}

        {activeSection === 'solucao' && (
          <div id="solucao-acoes-globais">
            <div className="text-container">
            <h2 className="title-solucao">Soluções Globais</h2>
              <p className="text-solucao">
                A luta contra as mudanças climáticas é um esforço global envolvendo países, governos, empresas e a sociedade civil.
                As principais iniciativas incluem o Acordo de Paris, políticas públicas nacionais e internacionais, a expansão de energias renováveis e o trabalho de organizações não governamentais.
              </p>
            </div>

            <div className="image-container">
              <img src="./images/Acordo-de-Paris.jpg" alt="Imagem principal" className="main-image" />
            </div>

            <h2 className="sub-title-1-solucao">Acordo de Paris</h2>
            <p className="sub-text-1-desafio">
              O objetivo do acordo de Paris é Limitar o aumento da temperatura global a menos de 2°C, com esforços para mantê-la em 1,5°C.
            </p>

            <h3 className="sub-title-2-solucao">Metas principais</h3>
            <ul className="sub-text-2-desafio">
              <li>Redução de emissões de gases de efeito estufa (GEE) através de contribuições nacionalmente determinadas (NDCs), revisadas a cada cinco anos.</li>
              <li>Adaptação a impactos inevitáveis, como eventos climáticos extremos, por meio de infraestrutura resiliente e segurança alimentar.</li>
              <li>Financiamento climático: US$ 100 bilhões anuais para países em desenvolvimento.</li>
              <li>Alcançar neutralidade de carbono até 2050-2100.</li>
              <li>Monitoramento e transparência para garantir cumprimento das metas.</li>
            </ul>

            <h2 className="sub-title-3-solucao">Governos e Políticas Públicas</h2>
            <p className="sub-text-3-desafio">
              Governos têm promovido políticas para reduzir emissões e adotar fontes de energia renováveis, como solar e eólica.
            </p>

            <ul className="sub-text-list-desafios">
              <li>Alemanha: Líder em energia solar e eólica, com metas de neutralidade de carbono até 2045.</li>
              <li>China: Maior produtor de energia solar e eólica, com planos de atingir 1.200 GW até 2030.</li>
              <li>Brasil: Destaque em energia eólica no nordeste e energia solar, com incentivos fiscais para renováveis.</li>
              <li>Índia: Grande expansão de energia solar, com parques gigantes e metas de 500 GW de renováveis até 2030.</li>
              <li>Dinamarca: 50% da energia elétrica provém de fontes eólicas, com investimentos em parques offshore.</li>
            </ul>

            <h2 className="sub-title">Organizações e ONGs</h2>
            <p className="sub-text">
              ONGs desempenham papel essencial na mobilização e conscientização, algumas delas são:
            </p>

            <div className="slider-container">
              <button className="slider-button" onClick={handlePrevSlide}>←</button>
              <div className="slider-content">
                <img src={solutions[currentSlide].img} alt={`Solução ${currentSlide + 1}`} className="slider-image" />
                <p className="slider-text">{solutions[currentSlide].text}</p>
              </div>
              <button className="slider-button" onClick={handleNextSlide}>→</button>
            </div>
          </div>
        )}

        {activeSection === 'educacao' && (
          <div id="educacao-conscientizacao">
            <h2 className="title-educacao">Educação e Conscientização</h2>

            <div className="image-container">
              <img src="./images/edu1.jpg" alt="Imagem Educação e Conscientização" className="image-educacao" />
            </div>

            <h3 className="sub-title-educacao">Atividades para Escolas</h3>
            <p className="sub-text-educacao">
              As escolas desempenham um papel crucial na formação de uma geração consciente sobre os desafios ambientais.
              Incorporar atividades educativas sobre sustentabilidade pode ajudar as crianças e jovens a entenderem a importância da ação climática e como suas escolhas
              podem impactar o futuro do planeta. Algumas sugestões de atividades incluem:
            </p>

            <h4 className="sub-title-educacao">Debates sobre as mudanças climáticas</h4>
            <p className="sub-text-educacao">
              Promover debates em sala de aula sobre o que são as mudanças climáticas, suas causas e consequências, pode ajudar os alunos a desenvolverem pensamento crítico e a se
              posicionarem como agentes de mudança. Os alunos podem ser divididos em grupos para pesquisar diferentes aspectos do tema e apresentar soluções para
              combater o aquecimento global.
            </p>

            <h4 className="sub-title-educacao">Projetos de pesquisa e campanhas de conscientização</h4>
            <p className="sub-text-educacao">
              Estimular os alunos a desenvolverem projetos de pesquisa sobre tópicos relacionados ao ODS 13 pode ajudá-los a entender melhor os desafios climáticos e as possíveis soluções. Além disso, é possível incentivá-los a criar campanhas de conscientização dentro da escola, utilizando materiais como cartazes, vídeos e apresentações, para compartilhar com a comunidade escolar as melhores práticas para a preservação ambiental.
            </p>

            <h4 className="sub-title-educacao">Simulações e dinâmicas de impacto ambiental</h4>
            <p className="sub-text-educacao">
              Realizar dinâmicas e simulações que mostrem os efeitos das mudanças climáticas e o impacto das ações humanas no meio ambiente pode ser uma forma divertida e
              educativa de ensinar os alunos sobre sustentabilidade. Por exemplo, simular o aumento do nível do mar e os efeitos das inundações pode ajudar os alunos a
              visualizarem de maneira prática os riscos associados ao aquecimento global.
            </p>

            <div className="image-container">
              <img src="./images/edu2.jpg" alt="Imagem do Impacto Educacional" className="image-educacao" />
            </div>

            <h3 className="sub-title-educacao">Oficinas de reciclagem e consumo consciente</h3>
            <p className="sub-text-educacao">
              Organizar oficinas de reciclagem e consumo consciente pode ser uma forma interativa de envolver os alunos em práticas sustentáveis no seu cotidiano.
              Nessas oficinas, os alunos podem aprender sobre os diferentes tipos de materiais recicláveis e a importância de reduzir o desperdício,
              bem como criar objetos úteis a partir de materiais reutilizados.
              Promover a educação ambiental nas escolas e comunidades é essencial para formar uma sociedade mais consciente e preparada para enfrentar os
              desafios das mudanças climáticas. Ao utilizar materiais didáticos, vídeos explicativos, debates e atividades interativas,
              podemos sensibilizar as gerações atuais e futuras sobre a importância de adotar comportamentos mais sustentáveis e colaborar na preservação do meio ambiente.
              Somente por meio da educação será possível construir um futuro mais verde e sustentável.
            </p>
          </div>
        )}

        {activeSection === 'iniciativa' && (
          <div id="iniciativa-privada">
            <h2 className="title-iniciativa">Iniciativa Privada</h2>
            <p className="main-text-iniciativa">
              A iniciativa privada tem um papel fundamental na luta contra as mudanças climáticas, pois as empresas possuem grande capacidade de implementar mudanças significativas em seus processos produtivos e operacionais. Cada vez mais, as empresas ao redor do mundo estão adotando práticas sustentáveis, com o objetivo de reduzir sua pegada de carbono, promover a economia circular e melhorar a eficiência energética.
              A adoção de tais práticas não só contribui para o bem-estar ambiental, mas também pode gerar benefícios econômicos, como redução de custos e maior competitividade no mercado.
            </p>

            <h3 className="sub-title-iniciativa">Exemplos de Iniciativas</h3>
            <div className="content-iniciativa">
              <div className="carousel-iniciativa">
                <button className="carousel-button" onClick={handlePrevPrivateSlide}>
                  <span className="arrow">←</span> {/* Seta para a esquerda */}
                </button>

                <div className="carousel-content">
                  <div className="image-text-container">
                    <img
                      src={iniciativaPrivada[currentPrivateSlide].img}
                      alt={`Iniciativa ${currentPrivateSlide + 1}`}
                      className="carousel-image"
                    />
                    <div className="text-side-image">
                      <p>{iniciativaPrivada[currentPrivateSlide].text}</p>
                    </div>
                  </div>
                </div>

                <button className="carousel-button" onClick={handleNextPrivateSlide}>
                  <span className="arrow">→</span> 
                </button>
              </div>
            </div>

            <h3 className="sub-title-iniciativa">Certificações e Selos Verdes</h3>
            <p className="main-text-iniciativa">
              A adoção de práticas sustentáveis não é apenas uma decisão estratégica para empresas conscientes, mas também uma necessidade crescente para atender à demanda dos consumidores por produtos e serviços ambientalmente responsáveis. Para garantir que as empresas realmente estão comprometidas com a gestão ambiental sustentável, diversos selos e certificações estão disponíveis, com destaque para o ISO 14001.
            </p>

            <h4 className="sub-title-iniciativa">ISO 14001</h4>
            <p className="main-text-iniciativa">
              A ISO 14001 é uma certificação internacional que estabelece requisitos para um sistema de gestão ambiental eficaz. Ela visa ajudar as empresas a identificar, monitorar e minimizar os impactos ambientais de suas atividades, produtos e serviços. Empresas certificadas com o ISO 14001 demonstram seu compromisso com a sustentabilidade e com a redução de impactos ambientais, além de garantir a conformidade com regulamentações ambientais.
            </p>

            <h4 className="sub-title-iniciativa">Outros Selos Ambientais</h4>
            <p className="main-text-iniciativa">
              Além do ISO 14001, existem outros selos e certificações relevantes, como o LEED (Leadership in Energy and Environmental Design), que é um sistema de certificação ambiental para construções sustentáveis, e o Carbon Trust Standard, que reconhece empresas que tomam ações para reduzir suas emissões de carbono. Esses selos auxiliam os consumidores a identificar empresas que estão ativamente contribuindo para a preservação do clima e para a implementação de práticas de gestão ambiental eficientes.
              A adoção de práticas sustentáveis pelas empresas é fundamental para a mitigação das mudanças climáticas. Por meio de inovações tecnológicas, energia renovável, economia circular e a obtenção de certificações ambientais, as empresas podem não apenas reduzir sua pegada de carbono, mas também influenciar positivamente os consumidores e outras empresas a seguirem práticas semelhantes. As iniciativas das empresas, junto com a pressão de regulamentações e consumidores conscientes, têm o poder de transformar a maneira como os negócios operam no cenário global, contribuindo para um futuro mais sustentável.
            </p>
          </div>
        )}
      </main>

      {activeSection === 'ajudar' && (
        <div id="como-ajudar">
          <h1 className="title-ajuda">Como Ajudar</h1>
          <p className="main-text">
            Existem diversas maneiras de contribuir para um mundo mais sustentável. Você pode começar adotando práticas no dia a dia que minimizem seu impacto ambiental e colaborando com iniciativas que promovam mudanças positivas.
          </p>
          <h2 className="sub-title-ajuda">Exemplos de Contribuições</h2>
          <div className="content">
            <div className="item">
              <img
                src="./images/energia.png" alt="Reduzir o uso de energia elétrica"
                className="rounded-image"
              />
              <div className="text-box">
                <div className="text-box-container">
                  <p>
                    <h4 className="destaque">Reduzir o uso de energia elétrica</h4>
                    O consumo de energia elétrica é uma das maiores fontes de emissões de gases de efeito estufa. Reduzir o consumo de energia em casa, no trabalho e em outras atividades cotidianas pode ser um passo importante para diminuir a pegada de carbono.
                  </p>
                  <button className="saiba-mais-btn" onClick={() => handleModalToggle(contentData.energia)}>
                    Saiba Mais <span className="plus-sign">+</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="item">
              <img
                src="./images/alimentacao.png" alt="Adotar uma alimentação mais sustentável"
                className="rounded-image"
              />
              <div className="text-box">
                <div className="text-box-container">
                  <p>
                    <h4 className="destaque">Adotar uma alimentação mais sustentável</h4>
                    A produção e o consumo de alimentos também desempenham um papel importante nas emissões de gases de efeito estufa. Adotar uma alimentação mais sustentável pode ajudar a reduzir esses impactos.
                  </p>
                  <button className="saiba-mais-btn" onClick={() => handleModalToggle(contentData.alimentacao)}>
                    Saiba Mais <span className="plus-sign">+</span>
                  </button>
                </div>
              </div>
            </div>


            <div className="item">
              <img
                src="./images/reciclagem.png" alt="Reduzir, reutilizar e reciclar"
                className="rounded-image" />
              <div className="text-box">
                <div className="text-box-container">
                  <p>
                    <h4 className="destaque">Reduzir, reutilizar e reciclar</h4>
                    Os resíduos sólidos são uma grande preocupação ambiental, especialmente quando não são devidamente reciclados ou reutilizados. Adotar práticas de redução, reutilização e reciclagem pode minimizar a quantidade de lixo gerado.
                  </p>
                  <button className="saiba-mais-btn" onClick={() => handleModalToggle(contentData.reciclagem)}>
                    Saiba Mais <span className="plus-sign">+</span>
                  </button>
                </div>
              </div>
            </div>
          </div>


          {isModalOpen && (
            <div className="modal">
              <div className="modal-content">
                <h3>{modalContent.title}</h3>
                <p>{modalContent.description}</p>
              </div>
              <button className="close-modal-btn" onClick={handleModalToggle}>
                X
              </button>
            </div>

          )}
          {!isModalOpen && (
            <div className="additional-text">
              <p>As pequenas mudanças no estilo de vida de cada pessoa podem se somar a um impacto significativo na redução das emissões de carbono e na preservação ambiental. Ao adotar práticas mais sustentáveis no dia a dia, como reduzir o consumo de energia, adotar transportes mais ecológicos, seguir uma alimentação mais consciente e fazer um uso responsável dos recursos, todos podem contribuir para a preservação do nosso planeta e ajudar a combater as mudanças climáticas. Essas ações, quando realizadas de forma coletiva, têm o poder de gerar grandes transformações, aproximando-nos dos Objetivos de Desenvolvimento Sustentável.</p>
            </div>
          )}

          <div id="contato-envolvimento">
            <h2>Contato e Envolvimento</h2>
            <p>
              Se você tem sugestões, dúvidas ou deseja saber mais sobre como participar de iniciativas locais, entre em contato conosco.
              Preencha o formulário abaixo e entraremos em contato com você.
            </p>

            <form>
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" name="name" placeholder="Digite seu nome" required />

              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Digite seu email" required />

              <label htmlFor="message">Mensagem</label>
              <textarea id="message" name="message" placeholder="Sua mensagem" rows="4" required></textarea>

              <button type="submit">Enviar</button>
            </form>
          </div>


        </div>
      )}

      <footer className="footer">
        <div className="footer-logo">
          <img src="./images/Logo.png" alt="Logo" className="footer-logo-img" />
        </div>

        <div className="social-icons">
          <a href="#" className="social-icon">
            <img src="./images/facebook-icon.png" alt="Facebook" />
          </a>
          <a href="#" className="social-icon">
            <img src="./images/twitter-icon.png" alt="Twitter" />
          </a>
          <a href="#" className="social-icon">
            <img src="./images/instagram-icon.png" alt="Instagram" />
          </a>
        </div>

        <div className="footer-links">
          <a href="#" className="footer-link">Política de Privacidade</a> |
          <a href="#" className="footer-link">Termos de Uso</a>
        </div>
      </footer>
    </div >
  );
}

export default App;

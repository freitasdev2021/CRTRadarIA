var areas = {
    "Civil": [
        {
            "software": "Revit",
            "descricao": "Software BIM da Autodesk com recursos de IA para arquitetura e engenharia.",
            "pagamento": "Pago",
            "nivel": "Intermediário",
            "link": "https://www.autodesk.com/products/revit/overview"
        },
        {
            "software": "Tekla Structures",
            "descricao": "Software BIM para estruturas de aço e concreto com IA.",
            "pagamento": "Pago",
            "nivel": "Avançado",
            "link": "https://www.tekla.com/products/tekla-structures"
        },
        {
            "software": "AutoCAD",
            "descricao": "Software CAD tradicional para desenho 2D e 3D com novos recursos de IA.",
            "pagamento": "Pago",
            "nivel": "Intermediário",
            "link": "https://www.autodesk.com/products/autocad/overview"
        },
        {
            "software": "Spacemaker (Forma)",
            "descricao": "IA para planejamento urbano, vento e análise solar em tempo real.",
            "pagamento": "Pago",
            "nivel": "Avançado",
            "link": "https://www.autodesk.com/products/forma/overview"
        },
        {
            "software": "Kreo Software",
            "descricao": "Orçamentação automática (Takeoff) lendo PDFs com visão computacional.",
            "pagamento": "Pago",
            "nivel": "Intermediário",
            "link": "https://www.kreo.net/"
        },
        {
            "software": "Bentley MicroStation",
            "descricao": "Modelagem de infraestrutura (Digital Twins) para grandes obras.",
            "pagamento": "Pago",
            "nivel": "Avançado",
            "link": "https://www.bentley.com"
        },
        {
            "software": "Civil 3D",
            "descricao": "Projetos de infraestrutura civil com otimização de terraplenagem.",
            "pagamento": "Pago",
            "nivel": "Avançado",
            "link": "https://www.autodesk.com/products/civil-3d/overview"
        },
        {
            "software": "Togal.AI",
            "descricao": "Estimação de custos e quantitativos automáticos a partir de plantas.",
            "pagamento": "Pago",
            "nivel": "Avançado",
            "link": "https://www.togal.ai/"
        },
        {
            "software": "OpenSpace",
            "descricao": "Documentação de obra em 360º com comparação BIM via IA.",
            "pagamento": "Pago",
            "nivel": "Intermediário",
            "link": "https://www.openspace.ai/"
        },
        {
            "software": "TestFit",
            "descricao": "Design generativo para viabilidade imobiliária (configura prédios em segundos).",
            "pagamento": "Pago",
            "nivel": "Intermediário",
            "link": "https://testfit.io/"
        },
        {
            "software": "Dynamo",
            "descricao": "Programação visual para automatizar rotinas complexas no Revit.",
            "pagamento": "Gratuito",
            "nivel": "Avançado",
            "link": "https://dynamobim.org/"
        },
        {
            "software": "Grasshopper",
            "descricao": "Algoritmos visuais para design paramétrico complexo (Rhino).",
            "pagamento": "Gratuito",
            "nivel": "Avançado",
            "link": "https://www.grasshopper3d.com/"
        },
        {
            "software": "Rhinoceros 3D",
            "descricao": "Modelagem livre complexa, base para plugins de IA.",
            "pagamento": "Pago",
            "nivel": "Intermediário",
            "link": "https://www.rhino3d.com"
        },
        {
            "software": "Hypar",
            "descricao": "Plataforma de design generativo aberta para sistemas construtivos.",
            "pagamento": "Recursos Pagos",
            "nivel": "Avançado",
            "link": "https://hypar.io/"
        },
        {
            "software": "Alice Technologies",
            "descricao": "Otimização de cronogramas de construção usando IA generativa.",
            "pagamento": "Pago",
            "nivel": "Avançado",
            "link": "https://www.alicetechnologies.com/"
        },
        {
            "software": "InfraWorks",
            "descricao": "Conceituação de infraestrutura com modelos realistas e dados GIS.",
            "pagamento": "Pago",
            "nivel": "Intermediário",
            "link": "https://www.autodesk.com/products/infraworks/overview"
        },
        {
            "software": "Structure (StruEngineers)",
            "descricao": "Cálculo estrutural com otimização automática de armaduras.",
            "pagamento": "Pago",
            "nivel": "Avançado",
            "link": "https://www.struengineers.com/"
        },
        {
            "software": "Robot Structural Analysis",
            "descricao": "Análise estrutural avançada integrada ao fluxo BIM.",
            "pagamento": "Pago",
            "nivel": "Avançado",
            "link": "https://www.autodesk.com/products/robot-structural-analysis/overview"
        },
        {
            "software": "SAP2000",
            "descricao": "Software de elementos finitos para estruturas civis (pontes/barragens).",
            "pagamento": "Pago",
            "nivel": "Avançado",
            "link": "https://www.csiamerica.com/products/sap2000"
        },
        {
            "software": "TQS",
            "descricao": "Software brasileiro para cálculo estrutural de concreto armado.",
            "pagamento": "Pago",
            "nivel": "Avançado",
            "link": "https://www.tqs.com.br"
        },
        {
            "software": "Eberick",
            "descricao": "Projeto estrutural com recursos de detalhamento automático.",
            "pagamento": "Pago",
            "nivel": "Intermediário",
            "link": "https://altoqi.com.br/eberick/"
        },
        {
            "software": "PlanRadar",
            "descricao": "Gestão de defeitos e tarefas em obra com documentação digital.",
            "pagamento": "Pago",
            "nivel": "Iniciante",
            "link": "https://www.planradar.com/"
        },
        {
            "software": "Fieldwire",
            "descricao": "Gestão de campo e coordenação de equipes em canteiro.",
            "pagamento": "Recursos Pagos",
            "nivel": "Iniciante",
            "link": "https://www.fieldwire.com/"
        },
        {
            "software": "Doxel",
            "descricao": "Monitoramento de progresso de obra usando robôs/drones e IA.",
            "pagamento": "Pago",
            "nivel": "Avançado",
            "link": "https://www.doxel.ai/"
        },
        {
            "software": "Versatile",
            "descricao": "IA em guindastes para analisar eficiência e segurança no canteiro.",
            "pagamento": "Pago",
            "nivel": "Avançado",
            "link": "https://www.versatile.ai/"
        },
        {
            "software": "Twinmotion",
            "descricao": "Renderização em tempo real para arquitetura (Unreal Engine).",
            "pagamento": "Pago",
            "nivel": "Iniciante",
            "link": "https://www.twinmotion.com/"
        },
        {
            "software": "D5 Render",
            "descricao": "Renderizador com IA para ativos e iluminação realista.",
            "pagamento": "Recursos Pagos",
            "nivel": "Intermediário",
            "link": "https://www.d5render.com/"
        },
        {
            "software": "Veras (EvolveLab)",
            "descricao": "Plugin de IA para renderizar imagens direto do Revit/Sketchup.",
            "pagamento": "Pago",
            "nivel": "Iniciante",
            "link": "https://www.evolvelab.io/veras"
        },
        {
            "software": "QGIS",
            "descricao": "SIG (GIS) Open Source com plugins de IA para análise territorial.",
            "pagamento": "Gratuito",
            "nivel": "Intermediário",
            "link": "https://qgis.org/"
        },
        {
            "software": "ArcGIS",
            "descricao": "Análise geoespacial líder de mercado com ferramentas de Deep Learning.",
            "pagamento": "Pago",
            "nivel": "Avançado",
            "link": "https://www.esri.com/arcgis"
        }
    ],
    "Mecânica": [
        {
            "software": "Autodesk Fusion 360",
            "descricao": "CAD/CAM com Design Generativo e manufatura automatizada.",
            "area": "Mecânica",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://www.autodesk.com/products/fusion-360/overview"
        },
        {
            "software": "SolidWorks",
            "descricao": "Modelagem 3D mecânica com assistentes de design inteligentes.",
            "area": "Mecânica",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://www.solidworks.com/"
        },
        {
            "software": "Siemens NX",
            "descricao": "Solução topo de linha para design de produto e manufatura digital.",
            "area": "Mecânica",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://plm.sw.siemens.com/en-us/nx/"
        },
        {
            "software": "Ansys Mechanical",
            "descricao": "Simulação estrutural e térmica com IA para malhas e solver.",
            "area": "Mecânica",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.ansys.com/products/structures/ansys-mechanical"
        },
        {
            "software": "CATIA",
            "descricao": "Design de superfícies complexas (aeroespacial/automotivo).",
            "area": "Mecânica",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.3ds.com/products-services/catia/"
        },
        {
            "software": "Inventor",
            "descricao": "CAD mecânico com automação de projetos (iLogic) e simulação.",
            "area": "Mecânica",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://www.autodesk.com/products/inventor/overview"
        },
        {
            "software": "Onshape",
            "descricao": "CAD em nuvem com colaboração real e versionamento tipo Git.",
            "area": "Mecânica",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://www.onshape.com/"
        },
        {
            "software": "PTC Creo",
            "descricao": "CAD com extensão de Design Generativo integrado.",
            "area": "Mecânica",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.ptc.com/en/products/creo"
        },
        {
            "software": "CloudNC (CAM Assist)",
            "descricao": "IA que cria programação CNC automaticamente no Fusion/Mastercam.",
            "area": "Mecânica",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.cloudnc.com/"
        },
        {
            "software": "MasterCAM",
            "descricao": "Software CAM robusto para usinagem complexa multieixos.",
            "area": "Mecânica",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.mastercam.com/"
        },
        {
            "software": "nTopology (nTop)",
            "descricao": "Design computacional para criar peças leves e treliças complexas.",
            "area": "Mecânica",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.ntop.com/"
        },
        {
            "software": "Altair Inspire",
            "descricao": "Otimização topológica e simulação rápida para designers.",
            "area": "Mecânica",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://www.altair.com/inspire/"
        },
        {
            "software": "Abaqus",
            "descricao": "Análise de elementos finitos não-linear avançada.",
            "area": "Mecânica",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.3ds.com/products-services/simulia/products/abaqus/"
        },
        {
            "software": "LS-DYNA",
            "descricao": "Simulação de impacto e crash-test (dinâmica explícita).",
            "area": "Mecânica",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.ansys.com/products/structures/ansys-ls-dyna"
        },
        {
            "software": "OpenFOAM",
            "descricao": "CFD (Fluidodinâmica) gratuito e open source.",
            "area": "Mecânica",
            "aquisicao": "Gratuito",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.openfoam.com/"
        },
        {
            "software": "PowerMill",
            "descricao": "CAM especializado em moldes, matrizes e 5 eixos.",
            "area": "Mecânica",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.autodesk.com/products/powermill/overview"
        },
        {
            "software": "EdgeCAM",
            "descricao": "Programação CAM inteligente para fresamento e torneamento.",
            "area": "Mecânica",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://www.hexagonmi.com/products/production-software/edgecam"
        },
        {
            "software": "Machina Labs",
            "descricao": "Controle de robôs para conformação de chapas metálicas via IA.",
            "area": "Mecânica",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.machinalabs.ai/"
        },
        {
            "software": "Neural Concept",
            "descricao": "Deep Learning para prever resultados de simulação 3D instantaneamente.",
            "area": "Mecânica",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.neuralconcept.com/"
        },
        {
            "software": "Oqton",
            "descricao": "Sistema operacional de manufatura (MOS) gerido por IA.",
            "area": "Mecânica",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.oqton.com/"
        },
        {
            "software": "SimScale",
            "descricao": "Simulação (CFD/FEA) rodando 100% na nuvem via navegador.",
            "area": "Mecânica",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://www.simscale.com/"
        },
        {
            "software": "Valispace",
            "descricao": "Engenharia de sistemas baseada em dados e IA (Hardware dev).",
            "area": "Mecânica",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://www.valispace.com/"
        },
        {
            "software": "Monolith AI",
            "descricao": "Reduz testes físicos prevendo performance com dados históricos.",
            "area": "Mecânica",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.monolithai.com/"
        },
        {
            "software": "Leo",
            "descricao": "Copiloto de IA que transforma restrições textuais em CAD 3D.",
            "area": "Mecânica",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://www.getleo.ai/"
        },
        {
            "software": "Xometry",
            "descricao": "Plataforma de manufatura sob demanda com cotação via IA.",
            "area": "Mecânica",
            "aquisicao": "Gratuito",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://www.xometry.com/"
        },
        {
            "software": "G-Code Ripper",
            "descricao": "Ferramenta utilitária para ajustes de código G.",
            "area": "Mecânica",
            "aquisicao": "Gratuito",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://www.scorchworks.com/Gcoderipper/gcoderipper.html"
        },
        {
            "software": "Tulip",
            "descricao": "Apps de \"chão de fábrica\" com visão computacional para montagem.",
            "area": "Mecânica",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://tulip.co/"
        },
        {
            "software": "FlexSim",
            "descricao": "Simulação de processos produtivos e logística 3D.",
            "area": "Mecânica",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://www.flexsim.com/"
        },
        {
            "software": "Arena Simulation",
            "descricao": "Simulação de eventos discretos para otimização industrial.",
            "area": "Mecânica",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.rockwellautomation.com/en-us/products/software/arena-simulation.html"
        },
        {
            "software": "AutoCAD Mechanical",
            "descricao": "Versão do AutoCAD com bibliotecas de peças normalizadas.",
            "area": "Mecânica",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://www.autodesk.com/products/autocad/mechanical/overview"
        }
    ],
    "Elétrica": [
        {
            "software": "MATLAB",
            "descricao": "Padrão ouro para computação numérica e simulação de sistemas.",
            "area": "Elétrica",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": ""
        },
        {
            "software": "Simulink",
            "descricao": "Simulação baseada em diagramas de blocos (integrado ao MATLAB).",
            "area": "Elétrica",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": ""
        },
        {
            "software": "COMSOL Multiphysics",
            "descricao": "Simulação de campos eletromagnéticos e acoplamento físico.",
            "area": "Elétrica",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": ""
        },
        {
            "software": "Altium Designer",
            "descricao": "Design de PCB profissional com recursos de roteamento assistido.",
            "area": "Elétrica",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.altium.com"
        },
        {
            "software": "KiCad",
            "descricao": "EDA Open Source para PCB (com plugins de autorouter IA).",
            "area": "Elétrica",
            "aquisicao": "Gratuito",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://www.kicad.org/"
        },
        {
            "software": "Flux.ai",
            "descricao": "Ferramenta de design de PCB na nuvem com copiloto de IA.",
            "area": "Elétrica",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://www.flux.ai/"
        },
        {
            "software": "AutoCAD Electrical",
            "descricao": "Projetos de sistemas de controle elétrico e painéis.",
            "area": "Elétrica",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://www.autodesk.com"
        },
        {
            "software": "EPLAN Electric P8",
            "descricao": "Planejamento e engenharia de projetos elétricos e automação.",
            "area": "Elétrica",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.eplan.com"
        },
        {
            "software": "ETAP",
            "descricao": "Digital Twin para sistemas de energia elétrica (análise e operação).",
            "area": "Elétrica",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://etap.com/"
        },
        {
            "software": "Ansys Electronics",
            "descricao": "Simulação eletromagnética (HFSS/Maxwell) de alta fidelidade.",
            "area": "Elétrica",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.ansys.com/"
        },
        {
            "software": "Jitx",
            "descricao": "Design generativo de hardware: cria circuitos a partir de código.",
            "area": "Elétrica",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.jitx.com/"
        },
        {
            "software": "Celus",
            "descricao": "Plataforma de engenharia IA que automatiza diagramas e PCBs.",
            "area": "Elétrica",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://www.celus.io/"
        },
        {
            "software": "Quilter",
            "descricao": "Compilador para circuitos: desenha o layout da placa sozinho.",
            "area": "Elétrica",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://www.quilter.ai/"
        },
        {
            "software": "DeepPCB",
            "descricao": "Inteligência Artificial pura para roteamento de placas de circuito.",
            "area": "Elétrica",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://deeppcb.ai/"
        },
        {
            "software": "LTspice",
            "descricao": "Simulador SPICE gratuito, padrão da indústria para analógicos.",
            "area": "Elétrica",
            "aquisicao": "Gratuito",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://www.analog.com"
        },
        {
            "software": "PSpice",
            "descricao": "Simulação avançada de circuitos mistos (Cadence).",
            "area": "Elétrica",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.cadence.com"
        },
        {
            "software": "NI LabVIEW",
            "descricao": "Programação gráfica para testes automatizados e medição.",
            "area": "Elétrica",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://www.ni.com/labview"
        },
        {
            "software": "NI Multisim",
            "descricao": "Captura de esquemáticos e simulação SPICE intuitiva.",
            "area": "Elétrica",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://www.ni.com/multisim"
        },
        {
            "software": "Proteus Design Suite",
            "descricao": "Simulação de microcontroladores e design de PCB.",
            "area": "Elétrica",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://www.labcenter.com"
        },
        {
            "software": "Tinkercad Circuits",
            "descricao": "Simulação básica de Arduino e eletrônica (ótimo para ensino).",
            "area": "Elétrica",
            "aquisicao": "Gratuito",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://www.tinkercad.com"
        },
        {
            "software": "Fritzing",
            "descricao": "Criação de esquemáticos simples e layout para makers.",
            "area": "Elétrica",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://fritzing.org/"
        },
        {
            "software": "Siemens PSS®SINCAL",
            "descricao": "Planejamento e análise de redes de energia e tubulações.",
            "area": "Elétrica",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.siemens.com"
        },
        {
            "software": "DigSilent PowerFactory",
            "descricao": "Análise de sistemas de potência e redes inteligentes (Smart Grids).",
            "area": "Elétrica",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.digsilent.de"
        },
        {
            "software": "Schneider EcoStruxure",
            "descricao": "Arquitetura IoT para gestão de energia e automação industrial.",
            "area": "Elétrica",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.se.com/"
        },
        {
            "software": "EasyEDA",
            "descricao": "Ferramenta web para PCB, integrada com fabricação (LCSC).",
            "area": "Elétrica",
            "aquisicao": "Gratuito",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://easyeda.com/"
        },
        {
            "software": "CircuitLab",
            "descricao": "Simulação de circuitos e esquemáticos no navegador.",
            "area": "Elétrica",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://www.circuitlab.com"
        },
        {
            "software": "PLECS",
            "descricao": "Simulação de sistemas de eletrônica de potência (conversores).",
            "area": "Elétrica",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.plexim.com"
        },
        {
            "software": "PSIM",
            "descricao": "Simulação rápida focada em eletrônica de potência e drives.",
            "area": "Elétrica",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://powersimtech.com"
        },
        {
            "software": "Wokwi",
            "descricao": "Simulador online de ESP32, Arduino e Pi Pico (ótimo para IoT).",
            "area": "Elétrica",
            "aquisicao": "Gratuito",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://wokwi.com/"
        },
        {
            "software": "Edge Impulse",
            "descricao": "Machine Learning para microcontroladores (TinyML) e sensores.",
            "area": "Elétrica",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://edgeimpulse.com"
        }
    ],
    "Metalurgia": [
        {
            "software": "MAGMASOFT",
            "descricao": "Simulação de fundição líder mundial com otimização autônoma de processos.",
            "area": "Metalurgia",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.magmasoft.de"
        },
        {
            "software": "Thermo-Calc",
            "descricao": "Termodinâmica computacional com IA para prever fases e propriedades de ligas.",
            "area": "Metalurgia",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://thermocalc.com/"
        },
        {
            "software": "Altair Inspire Cast",
            "descricao": "Simulação de fundição acessível com \"solver\" inteligente e rápido.",
            "area": "Metalurgia",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://altair.com/inspire-cast"
        },
        {
            "software": "Simufact Welding",
            "descricao": "Simulação de soldagem que prevê distorções e microestruturas.",
            "area": "Metalurgia",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.simufact.com"
        },
        {
            "software": "Ansys Granta",
            "descricao": "Seleção inteligente de materiais e gestão de dados de engenharia.",
            "area": "Metalurgia",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://www.ansys.com/products/materials"
        },
        {
            "software": "ZEISS ZEN Core",
            "descricao": "Software de microscopia com módulos de IA para análise de grãos e fases.",
            "area": "Metalurgia",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://www.zeiss.com/microscopy"
        },
        {
            "software": "Citrine Platform",
            "descricao": "IA para Informática de Materiais: descobre novas ligas usando dados históricos.",
            "area": "Metalurgia",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://citrine.io/"
        },
        {
            "software": "ProCAST (ESI)",
            "descricao": "Simulação de fundição por elementos finitos com otimização avançada.",
            "area": "Metalurgia",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.esi-group.com"
        },
        {
            "software": "AutoForm",
            "descricao": "Padrão na indústria automotiva para simulação de estampagem de metais.",
            "area": "Metalurgia",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.autoform.com"
        },
        {
            "software": "Qform",
            "descricao": "Simulação de forjamento e extrusão com previsão de fluxo de grãos.",
            "area": "Metalurgia",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://qform3d.com/"
        },
        {
            "software": "FactSage",
            "descricao": "Banco de dados termoquímico para cálculos de equilíbrio de fases.",
            "area": "Metalurgia",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.factsage.com"
        },
        {
            "software": "Alchemite (Intellegens)",
            "descricao": "Deep Learning para prever propriedades de materiais com dados esparsos.",
            "area": "Metalurgia",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://intellegens.com/"
        },
        {
            "software": "JMatPro",
            "descricao": "Simulação de propriedades de materiais focada em aços e ligas de alta temperatura.",
            "area": "Metalurgia",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://www.sentesoftware.co.uk"
        },
        {
            "software": "Materials Studio",
            "descricao": "Modelagem e simulação em escala atômica/molecular (BIOVIA).",
            "area": "Metalurgia",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.3ds.com"
        },
        {
            "software": "QuesTek",
            "descricao": "Design de ligas computacional (ICME) para criar novos metais de alto desempenho.",
            "area": "Metalurgia",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.questek.com"
        },
        {
            "software": "Transvalor FORGE",
            "descricao": "Simulação de processos de conformação a quente e a frio.",
            "area": "Metalurgia",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.transvalor.com"
        },
        {
            "software": "Olympus Stream",
            "descricao": "Análise de imagem com microscopia com contagem automática de partículas.",
            "area": "Metalurgia",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://www.olympus-ims.com"
        },
        {
            "software": "Keyence VHX",
            "descricao": "Software de microscopia digital com foco e medição automáticos por IA.",
            "area": "Metalurgia",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://www.keyence.com"
        },
        {
            "software": "Almacam Weld",
            "descricao": "Programação offline de robôs de solda com automação de trajetórias.",
            "area": "Metalurgia",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.almacam.com"
        },
        {
            "software": "Mat3ra (Exabyte.io)",
            "descricao": "Plataforma na nuvem para modelagem de novos materiais (R&D).",
            "area": "Metalurgia",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://mat3ra.com/"
        },
        {
            "software": "DEFORM",
            "descricao": "Sistema de simulação para análise de fluxo de metal e tratamento térmico.",
            "area": "Metalurgia",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.deform.com"
        },
        {
            "software": "FLOW-3D CAST",
            "descricao": "CFD focado em fundição com rastreamento preciso de metal líquido.",
            "area": "Metalurgia",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.flow3d.com"
        },
        {
            "software": "PanAT",
            "descricao": "Cálculo de diagramas de fase e propriedades termodinâmicas (CompuTherm).",
            "area": "Metalurgia",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://computherm.com"
        },
        {
            "software": "Granta MI",
            "descricao": "Gestão de informações de materiais corporativos (\"Single Source of Truth\").",
            "area": "Metalurgia",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://www.ansys.com"
        },
        {
            "software": "Generic AI (ChatGPT)",
            "descricao": "Auxiliar para leitura de normas técnicas (ASTM/ISO) e relatórios.",
            "area": "Metalurgia",
            "aquisicao": "Gratuito",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://openai.com/"
        },
        {
            "software": "Fictiv Materials.AI",
            "descricao": "Assistente de IA para seleção de materiais de manufatura e cotação.",
            "area": "Metalurgia",
            "aquisicao": "Gratuito",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://www.fictiv.com/"
        },
        {
            "software": "Struers Software",
            "descricao": "Automação para equipamentos de preparação metalográfica (cortadoras/polidoras).",
            "area": "Metalurgia",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://www.struers.com"
        },
        {
            "software": "Afry Smart",
            "descricao": "Soluções de digitalização para plantas de metalurgia e mineração.",
            "area": "Metalurgia",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://afry.com/"
        },
        {
            "software": "Thermo-Calc (Educational)",
            "descricao": "Versão educacional limitada para estudantes de engenharia de materiais.",
            "area": "Metalurgia",
            "aquisicao": "Gratuito",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://thermocalc.com/"
        },
        {
            "software": "MatWeb",
            "descricao": "Banco de dados de propriedades de materiais (útil com plugins de busca).",
            "area": "Metalurgia",
            "aquisicao": "Gratuito",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://www.matweb.com"
        }
    ],
    "Geologia": [
        {
            "software": "Leapfrog Geo",
            "descricao": "Modelagem geológica 3D implícita (padrão da indústria) com ferramentas rápidas.",
            "area": "Geologia",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://www.seequent.com/products-solutions/leapfrog-geo/"
        },
        {
            "software": "Datamine Studio RM",
            "descricao": "Modelagem de recursos e reservas com geoestatística avançada.",
            "area": "Geologia",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.dataminesoftware.com/mining-software-solutions/studio-rm/"
        },
        {
            "software": "Oasis Montaj",
            "descricao": "Processamento de dados geofísicos (magnetometria/gravimetria) com IA.",
            "area": "Geologia",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.seequent.com/products-solutions/oasis-montaj/"
        },
        {
            "software": "ArcGIS Pro",
            "descricao": "SIG avançado com ferramentas de Deep Learning para detecção de feições.",
            "area": "Geologia",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://www.esri.com/en-us/arcgis/products/arcgis-pro/overview"
        },
        {
            "software": "Micromine",
            "descricao": "Solução integrada para exploração e design de mina com automação.",
            "area": "Geologia",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.micromine.com/"
        },
        {
            "software": "Earth AI",
            "descricao": "Plataforma de IA dedicada à descoberta de novos depósitos minerais.",
            "area": "Geologia",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://earth-ai.com/"
        },
        {
            "software": "Datarock",
            "descricao": "Usa visão computacional para analisar fotos de testemunhos de sondagem.",
            "area": "Geologia",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://datarock.com.au/"
        },
        {
            "software": "Petrel (SLB)",
            "descricao": "Software de E&P (Petróleo) com IA para interpretação sísmica automática.",
            "area": "Geologia",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.slb.com/products-and-services/software/petrel"
        },
        {
            "software": "Vulcan (Maptek)",
            "descricao": "Modelagem geológica e planejamento de mina 3D robusto.",
            "area": "Geologia",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.maptek.com/products/vulcan/index.html"
        },
        {
            "software": "GeologicalAI",
            "descricao": "Hardware e software para escaneamento e análise digital de rochas.",
            "area": "Geologia",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://www.geologicalai.com/"
        },
        {
            "software": "Paleoscan (Eliis)",
            "descricao": "Interpretação sísmica semi-automática que cria modelos geológicos rápidos.",
            "area": "Geologia",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.eliis-geo.com/"
        },
        {
            "software": "OreFox",
            "descricao": "IA generativa para identificar alvos de exploração em dados antigos.",
            "area": "Geologia",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://orefox.com/"
        },
        {
            "software": "Imago (Seequent)",
            "descricao": "Gestão e visualização de imagens geológicas na nuvem.",
            "area": "Geologia",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://www.seequent.com/products-solutions/imago/"
        },
        {
            "software": "RockWorks",
            "descricao": "Visualização de dados de subsuperfície, logs e diagramas.",
            "area": "Geologia",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://www.rockware.com/product/rockworks/"
        },
        {
            "software": "QGIS",
            "descricao": "SIG Gratuito com plugins (ex: Mapflow) para análise de imagens via IA.",
            "area": "Geologia",
            "aquisicao": "Gratuito",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://qgis.org/"
        },
        {
            "software": "Global Mapper",
            "descricao": "Canivete suíço do SIG, excelente para processar LiDAR e terrenos.",
            "area": "Geologia",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://www.bluemarblegeo.com/global-mapper/"
        },
        {
            "software": "Radixplore",
            "descricao": "Google para geólogos: usa IA para ler relatórios antigos e achar dados.",
            "area": "Geologia",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://radixplore.com/"
        },
        {
            "software": "acQuire",
            "descricao": "Gestão de banco de dados geocientíficos (GIM Suite).",
            "area": "Geologia",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.acquire.com.au/"
        },
        {
            "software": "ioGAS",
            "descricao": "Análise de dados geoquímicos exploratórios com detecção de padrões.",
            "area": "Geologia",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://reflexnow.com/product/iogas/"
        },
        {
            "software": "Deswik",
            "descricao": "Planejamento de lavra e design de mina com alto nível de automação.",
            "area": "Geologia",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.deswik.com/"
        },
        {
            "software": "SKUA-GOCAD",
            "descricao": "Modelagem estrutural e estratigráfica para óleo e gás.",
            "area": "Geologia",
            "aquisicao": "Gratuito",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.pdgm.com/products/skua-gocad/"
        },
        {
            "software": "Surpac",
            "descricao": "Software de geologia e planejamento de minas (popular no Brasil).",
            "area": "Geologia",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://www.3ds.com/products-services/geovia/products/surpac/"
        },
        {
            "software": "MinePlan",
            "descricao": "Pacote completo para modelagem e planejamento (antigo MineSight).",
            "area": "Geologia",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://hexagonmining.com/solutions/mine-planning"
        },
        {
            "software": "GoldSpot (EarthLabs)",
            "descricao": "Consultoria/Software que usa Machine Learning para exploração de ouro.",
            "area": "Geologia",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://earthlabs.com/goldspot/"
        },
        {
            "software": "Percepto",
            "descricao": "Drones autônomos para inspeção e monitoramento de minas.",
            "area": "Geologia",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://percepto.co/"
        },
        {
            "software": "Stereonet (Allmendinger)",
            "descricao": "Software clássico para análise estrutural (agora com versões mobile).",
            "area": "Geologia",
            "aquisicao": "Gratuito",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://www.rickallmendinger.net/stereonet"
        },
        {
            "software": "Strater",
            "descricao": "Software para plotagem de logs de poços e perfis geológicos.",
            "area": "Geologia",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://www.goldensoftware.com/products/strater"
        },
        {
            "software": "Google Earth Pro",
            "descricao": "Ferramenta básica mas essencial para visualização inicial de campo.",
            "area": "Geologia",
            "aquisicao": "Gratuito",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://www.google.com/earth/versions/#earth-pro"
        },
        {
            "software": "ALS CoreViewer",
            "descricao": "Visualização web de fotos de caixas de testemunho em alta resolução.",
            "area": "Geologia",
            "aquisicao": "Gratuito",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://www.alsglobal.com/en/services-and-products/geochemistry/geochemistry-data-solutions/coreviewer"
        },
        {
            "software": "RMS (Emerson)",
            "descricao": "Modelagem de reservatórios com foco em incertezas geológicas.",
            "area": "Geologia",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.emerson.com/en-us/automation/slb-roxar-rms"
        }
    ],
    "Arquitetura": [
        {
            "software": "Autodesk Forma (Spacemaker)",
            "descricao": "Planejamento urbano com IA que analisa vento, sol e ruído em tempo real.",
            "area": "Arquitetura",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.autodesk.com"
        },
        {
            "software": "TestFit",
            "descricao": "Configurador imobiliário generativo: desenha estacionamentos e prédios em segundos.",
            "area": "Arquitetura",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://testfit.io/"
        },
        {
            "software": "Revit",
            "descricao": "O padrão BIM, agora com automação de rotinas e análise energética integrada.",
            "area": "Arquitetura",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://www.autodesk.com"
        },
        {
            "software": "Archicad",
            "descricao": "Software BIM intuitivo com \"AI Visualizer\" para renderização conceitual.",
            "area": "Arquitetura",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://graphisoft.com/solutions/archicad"
        },
        {
            "software": "Veras (EvolveLab)",
            "descricao": "Plugin para Revit/SketchUp que usa IA para renderizar imagens a partir da geometria 3D.",
            "area": "Arquitetura",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://www.evolvelab.io/veras"
        },
        {
            "software": "D5 Render",
            "descricao": "Renderizador em tempo real com \"AI Atmosphere\" e ativos inteligentes.",
            "area": "Arquitetura",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://www.d5render.com/"
        },
        {
            "software": "Midjourney",
            "descricao": "Ferramenta essencial para criação de Moodboards e conceitos arquitetônicos artísticos.",
            "area": "Arquitetura",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://www.midjourney.com/"
        },
        {
            "software": "Finch 3D",
            "descricao": "Gera plantas baixas otimizadas automaticamente com base em regras (Graph technology).",
            "area": "Arquitetura",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://finch3d.com/"
        },
        {
            "software": "Hypar",
            "descricao": "Plataforma aberta de design generativo onde você combina lógicas de construção.",
            "area": "Arquitetura",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://hypar.io/"
        },
        {
            "software": "Cove.tool",
            "descricao": "Análise de performance predial (luz/energia) automatizada para sustentabilidade.",
            "area": "Arquitetura",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://www.cove.tools/"
        },
        {
            "software": "SketchUp",
            "descricao": "Modelagem rápida, potencializada por plugins de IA como Diffusion e ArkoAI.",
            "area": "Arquitetura",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://www.sketchup.com/"
        },
        {
            "software": "Rhino + Grasshopper",
            "descricao": "A base do design paramétrico mundial, essencial para formas complexas.",
            "area": "Arquitetura",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.rhino3d.com"
        },
        {
            "software": "Twinmotion",
            "descricao": "Renderização rápida (Unreal Engine) com povoamento automático de cenas.",
            "area": "Arquitetura",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://www.twinmotion.com"
        },
        {
            "software": "Enscape",
            "descricao": "Renderização em tempo real integrada ao BIM com ajustes automáticos de exposição.",
            "area": "Arquitetura",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://enscape3d.com/"
        },
        {
            "software": "Interior AI",
            "descricao": "Gera ideias de design de interiores a partir de uma foto do ambiente vazio.",
            "area": "Arquitetura",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://interiorai.com/"
        },
        {
            "software": "PromeAI",
            "descricao": "Transforma esboços manuais (croquis) em renders realistas.",
            "area": "Arquitetura",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://www.promeai.com"
        },
        {
            "software": "Planner 5D",
            "descricao": "Design de interiores acessível com reconhecimento de plantas via upload de imagem.",
            "area": "Arquitetura",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://planner5d.com/"
        },
        {
            "software": "Sidewalk Labs (Delve)",
            "descricao": "Ferramenta do Google para design urbano generativo focado em qualidade de vida.",
            "area": "Arquitetura",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.sidewalklabs.com/delve"
        },
        {
            "software": "BricsCAD BIM",
            "descricao": "Usa IA para classificar sólidos geométricos em elementos BIM automaticamente.",
            "area": "Arquitetura",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://www.bricsys.com"
        },
        {
            "software": "Vectorworks",
            "descricao": "BIM focado em design visual e paisagismo, com ferramentas de automação.",
            "area": "Arquitetura",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://www.vectorworks.net"
        },
        {
            "software": "Lumion",
            "descricao": "Renderização arquitetônica famosa pela facilidade e bibliotecas de alta qualidade.",
            "area": "Arquitetura",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://lumion.com/"
        },
        {
            "software": "Arkio",
            "descricao": "Design colaborativo em Realidade Virtual (VR) para modelagem volumétrica.",
            "area": "Arquitetura",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://arkio.is/"
        },
        {
            "software": "Adobe Firefly",
            "descricao": "IA Generativa ética para criar texturas e preencher fundos em pós-produção.",
            "area": "Arquitetura",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://firefly.adobe.com"
        },
        {
            "software": "Matterport",
            "descricao": "Criação de Gêmeos Digitais (Digital Twins) de edifícios existentes via escaneamento.",
            "area": "Arquitetura",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://matterport.com/"
        },
        {
            "software": "Autodesk Insight",
            "descricao": "Simulação energética na nuvem integrada ao Revit para certificação LEED/Green.",
            "area": "Arquitetura",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://insight.autodesk.com"
        },
        {
            "software": "Chaos Vantage",
            "descricao": "Exploração de cenas V-Ray em tempo real com Ray Tracing puro.",
            "area": "Arquitetura",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.chaos.com"
        },
        {
            "software": "Swapp",
            "descricao": "Automação de documentos de construção: do conceito ao projeto executivo via IA.",
            "area": "Arquitetura",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.swapp.ai/"
        },
        {
            "software": "Higharc",
            "descricao": "Plataforma de automação para construtoras de casas residenciais (homebuilding).",
            "area": "Arquitetura",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://higharc.com/"
        },
        {
            "software": "Luma AI",
            "descricao": "Captura de objetos e cenas 3D (NeRF/Gaussian Splatting) usando o celular.",
            "area": "Arquitetura",
            "aquisicao": "Gratuito",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://lumalabs.ai/"
        },
        {
            "software": "RoomGPT",
            "descricao": "Redecora ambientes virtualmente usando IA para testar diferentes estilos.",
            "area": "Arquitetura",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://www.roomgpt.io"
        }
    ],
    "Telecomunicações": [
        {
            "software": "Atoll (Forsk)",
            "descricao": "Software líder mundial para planejamento e otimização de redes de rádio (5G/LTE).",
            "area": "Telecomunicações",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.forsk.com/"
        },
        {
            "software": "iWave Design",
            "descricao": "O padrão para planejamento de redes indoor (dentro de prédios/estádios).",
            "area": "Telecomunicações",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://ibwave.com/"
        },
        {
            "software": "MATLAB (5G Toolbox)",
            "descricao": "Simulação de sistemas de comunicação, processamento de sinais e beamforming.",
            "area": "Telecomunicações",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.mathworks.com/"
        },
        {
            "software": "Ekahau AI Pro",
            "descricao": "Planejamento de Wi-Fi com IA que simula paredes e interferências automaticamente.",
            "area": "Telecomunicações",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://www.ekahau.com/"
        },
        {
            "software": "Cisco Packet Tracer",
            "descricao": "Simulador de redes essencial para aprendizado e configuração de roteadores/switches.",
            "area": "Telecomunicações",
            "aquisicao": "Gratuito",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://www.netacad.com/"
        },
        {
            "software": "GNS3",
            "descricao": "Emulador de redes gráficas que permite rodar sistemas reais de roteadores.",
            "area": "Telecomunicações",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.gns3.com/"
        },
        {
            "software": "Pathloss",
            "descricao": "Ferramenta padrão para design de enlaces de rádio micro-ondas (ponto-a-ponto).",
            "area": "Telecomunicações",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://pathloss.com/"
        },
        {
            "software": "Ansys HFSS",
            "descricao": "Simulação eletromagnética 3D para design de antenas de alta frequência.",
            "area": "Telecomunicações",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.ansys.com/"
        },
        {
            "software": "CST Studio Suite",
            "descricao": "Simulação EM para filtros, antenas e compatibilidade eletromagnética (EMC).",
            "area": "Telecomunicações",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.3ds.com/"
        },
        {
            "software": "Wireshark",
            "descricao": "Analisador de protocolo de rede nº 1 do mundo (Troubleshooting de pacotes).",
            "area": "Telecomunicações",
            "aquisicao": "Gratuito",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://www.wireshark.org/"
        },
        {
            "software": "Hamina Wireless",
            "descricao": "Ferramenta baseada na nuvem para planejamento de redes Wi-Fi/BLE/5G.",
            "area": "Telecomunicações",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://www.hamina.com/"
        },
        {
            "software": "Infovista Planet",
            "descricao": "Planejamento de redes RF com dados de geolocalização e mapas 3D precisos.",
            "area": "Telecomunicações",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.infovista.com/"
        },
        {
            "software": "Ranplan Wireless",
            "descricao": "Planejamento conjunto de redes Indoor e Outdoor (HetNet) com simulação 3D.",
            "area": "Telecomunicações",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://ranplanwireless.com/"
        },
        {
            "software": "Teoco ASSET",
            "descricao": "Ferramenta de planejamento de rádio com foco em otimização automática (SON).",
            "area": "Telecomunicações",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.teoco.com/"
        },
        {
            "software": "NetSim",
            "descricao": "Emulador de redes para P&D (IoT, 5G, WSN) com bibliotecas extensas.",
            "area": "Telecomunicações",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://www.tetcos.com/"
        },
        {
            "software": "PRTG Network Monitor",
            "descricao": "Monitoramento de infraestrutura de TI com sensores e alertas inteligentes.",
            "area": "Telecomunicações",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://www.paessler.com/"
        },
        {
            "software": "SolarWinds NPM",
            "descricao": "Monitoramento de performance de rede com análise preditiva de tráfego.",
            "area": "Telecomunicações",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://www.solarwinds.com/"
        },
        {
            "software": "Nagios",
            "descricao": "Monitoramento de sistemas open source padrão da indústria (requer configuração).",
            "area": "Telecomunicações",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.nagios.org/"
        },
        {
            "software": "Zabbix",
            "descricao": "Plataforma de monitoramento enterprise-class open source.",
            "area": "Telecomunicações",
            "aquisicao": "Gratuito",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.zabbix.com/"
        },
        {
            "software": "Ookla Speedtest Intelligence",
            "descricao": "Análise de dados de performance de rede global baseada em crowdsourcing.",
            "area": "Telecomunicações",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://www.ookla.com/"
        },
        {
            "software": "Opensignal",
            "descricao": "Dados e insights sobre experiência real do usuário em redes móveis.",
            "area": "Telecomunicações",
            "aquisicao": "Gratuito",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://www.opensignal.com/"
        },
        {
            "software": "Qualcomm QXDM",
            "descricao": "Ferramenta de diagnóstico avançado para testes de campo em redes celulares.",
            "area": "Telecomunicações",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.qualcomm.com/"
        },
        {
            "software": "Keysight PathWave",
            "descricao": "Design e simulação de sistemas de comunicação e circuitos RF.",
            "area": "Telecomunicações",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.keysight.com/"
        },
        {
            "software": "Remcom Wireless InSite",
            "descricao": "Predição de propagação de rádio em ambientes complexos (Urbanos/Indoor).",
            "area": "Telecomunicações",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.remcom.com/"
        },
        {
            "software": "OptiSystem",
            "descricao": "Simulação de sistemas de comunicação óptica (Fibras, Amplificadores).",
            "area": "Telecomunicações",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://optiwave.com/"
        },
        {
            "software": "VPIphotonics",
            "descricao": "Modelagem de sistemas fotônicos e redes ópticas de alta capacidade.",
            "area": "Telecomunicações",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.vpiphotonics.com/"
        },
        {
            "software": "NS-3",
            "descricao": "Simulador de eventos discretos (focado em pesquisa acadêmica).",
            "area": "Telecomunicações",
            "aquisicao": "Gratuito",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.nsnam.org/"
        },
        {
            "software": "Omnet++",
            "descricao": "Framework de simulação modular para redes (comum em pesquisas).",
            "area": "Telecomunicações",
            "aquisicao": "Gratuito",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://omnetpp.org/"
        },
        {
            "software": "Ansible",
            "descricao": "Automação de configuração de redes (Network as Code) via scripts simples.",
            "area": "Telecomunicações",
            "aquisicao": "Gratuito",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://www.ansible.com/"
        },
        {
            "software": "Riverbed Modeler",
            "descricao": "Modelagem de performance de aplicações e redes corporativas.",
            "area": "Telecomunicações",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.riverbed.com/"
        }
    ],
    "Empreendedorismo": [
        {
            "software": "Jasper",
            "descricao": "Ferramenta de escrita com IA para criação de conteúdo de marketing profissional.",
            "area": "Empreendedorismo",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://www.jasper.ai/"
        },
        {
            "software": "Copy.ai",
            "descricao": "Ferramenta de copywriting com IA para gerar textos de marketing eficazes.",
            "area": "Empreendedorismo",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://www.copy.ai/"
        },
        {
            "software": "Synthesia",
            "descricao": "Plataforma de criação de vídeos com avatares de IA para empresas.",
            "area": "Empreendedorismo",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://www.synthesia.io"
        },
        {
            "software": "Murf AI",
            "descricao": "Geração de voz com IA profissional para vídeos e apresentações corporativas.",
            "area": "Empreendedorismo",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://murf.ai/"
        },
        {
            "software": "Otter.ai",
            "descricao": "Transcrição automática de reuniões e chamadas com IA para produtividade.",
            "area": "Empreendedorismo",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://otter.ai/"
        },
        {
            "software": "Writesonic",
            "descricao": "Plataforma de escrita com IA para conteúdo de marketing e blogs.",
            "area": "Empreendedorismo",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://writesonic.com/"
        },
        {
            "software": "Rytr",
            "descricao": "Assistente de escrita com IA para criar conteúdo rapidamente.",
            "area": "Empreendedorismo",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://rytr.me/"
        },
        {
            "software": "Lumen5",
            "descricao": "Criação de vídeos de marketing com IA a partir de texto.",
            "area": "Empreendedorismo",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://lumen5.com/"
        },
        {
            "software": "Pictory",
            "descricao": "Ferramenta de IA para criar vídeos profissionais rapidamente.",
            "area": "Empreendedorismo",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://pictory.ai/"
        },
        {
            "software": "Descript",
            "descricao": "Editor de áudio e vídeo com IA para criadores de conteúdo.",
            "area": "Empreendedorismo",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://www.descript.com"
        },
        {
            "software": "Runway ML",
            "descricao": "Suite de ferramentas criativas com IA para vídeo e imagem.",
            "area": "Empreendedorismo",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://runwayml.com/"
        },
        {
            "software": "Midjourney",
            "descricao": "Geração de imagens artísticas com IA para projetos criativos.",
            "area": "Empreendedorismo",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://www.midjourney.com"
        },
        {
            "software": "DALL-E 3",
            "descricao": "Gerador de imagens com IA da OpenAI para uso comercial.",
            "area": "Empreendedorismo",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://openai.com/pt-BR"
        },
        {
            "software": "Stable Diffusion",
            "descricao": "Modelo de IA open source para geração de imagens personalizadas.",
            "area": "Empreendedorismo",
            "aquisicao": "Gratuito",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://stability.ai/stable"
        },
        {
            "software": "Adobe Firefly",
            "descricao": "Suite de IA criativa da Adobe para design profissional.",
            "area": "Empreendedorismo",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://www.adobe.com"
        },
        {
            "software": "Canva AI",
            "descricao": "Recursos de IA integrados no Canva para design automatizado.",
            "area": "Empreendedorismo",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://www.canva.com"
        },
        {
            "software": "Figma AI",
            "descricao": "Recursos de IA no Figma para acelerar o processo de design.",
            "area": "Empreendedorismo",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://www.figma.com/"
        },
        {
            "software": "Salesforce Einstein",
            "descricao": "IA integrada ao CRM para automação de vendas e marketing.",
            "area": "Empreendedorismo",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.salesforce.com"
        },
        {
            "software": "HubSpot AI",
            "descricao": "Ferramentas de IA integradas no HubSpot para marketing e vendas.",
            "area": "Empreendedorismo",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://www.hubspot.com"
        },
        {
            "software": "Zapier AI",
            "descricao": "Automação de workflows com IA para conectar aplicações.",
            "area": "Empreendedorismo",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://zapier.com/ai"
        },
        {
            "software": "Make (Integromat)",
            "descricao": "Plataforma de automação visual com recursos de IA.",
            "area": "Empreendedorismo",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://www.make.com/"
        },
        {
            "software": "ChatBot",
            "descricao": "Plataforma para criar chatbots com IA para atendimento ao cliente.",
            "area": "Empreendedorismo",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://www.chatbot.com"
        },
        {
            "software": "Intercom",
            "descricao": "Plataforma de comunicação com clientes com recursos de IA.",
            "area": "Empreendedorismo",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://www.intercom.com"
        },
        {
            "software": "Zendesk AI",
            "descricao": "Soluções de atendimento ao cliente com IA integrada.",
            "area": "Empreendedorismo",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://www.zendesk.com"
        },
        {
            "software": "Freshworks AI",
            "descricao": "Suite de CRM e atendimento com recursos de IA.",
            "area": "Empreendedorismo",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://www.freshworks.com"
        },
        {
            "software": "Typeform AI",
            "descricao": "Criação de formulários inteligentes com IA.",
            "area": "Empreendedorismo",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://www.typeform.com"
        },
        {
            "software": "SurveyMonkey AI",
            "descricao": "Pesquisas e análises com recursos de IA integrados.",
            "area": "Empreendedorismo",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://www.surveymonkey.com"
        },
        {
            "software": "Notion AI",
            "descricao": "Assistente de IA integrado ao Notion para produtividade.",
            "area": "Empreendedorismo",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://www.notion.com"
        },
        {
            "software": "Grammarly",
            "descricao": "Assistente de escrita com IA para comunicação profissional.",
            "area": "Empreendedorismo",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://www.grammarly.com"
        },
        {
            "software": "Calendly AI",
            "descricao": "Agendamento inteligente com recursos de IA.",
            "area": "Empreendedorismo",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://calendly.com/"
        }
    ],
    "Produtividade": [
        {
            "software": "ChatGPT",
            "descricao": "Assistente de IA conversacional da OpenAI para diversas tarefas de produtividade.",
            "area": "Produtividade",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://chatgpt.com/"
        },
        {
            "software": "Claude",
            "descricao": "Assistente de IA da Anthropic focado em conversas úteis, inofensivas e honestas.",
            "area": "Produtividade",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://claude.ai/login?r"
        },
        {
            "software": "Gemini",
            "descricao": "Assistente de IA do Google para conversas, criação e colaboração.",
            "area": "Produtividade",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://gemini.google.com"
        },
        {
            "software": "Perplexity",
            "descricao": "Motor de busca com IA que fornece respostas diretas e fontes verificadas.",
            "area": "Produtividade",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://www.perplexity.ai"
        },
        {
            "software": "Lovable",
            "descricao": "Plataforma de desenvolvimento de aplicações web com IA generativa.",
            "area": "Produtividade",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://lovable.dev/"
        },
        {
            "software": "Gamma",
            "descricao": "Criação de apresentações, documentos e sites com IA de forma intuitiva.",
            "area": "Produtividade",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://gamma.app/pt-br"
        },
        {
            "software": "NotebookLM",
            "descricao": "Ferramenta experimental do Google para pesquisa e escrita com IA.",
            "area": "Produtividade",
            "aquisicao": "Gratuito",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://notebooklm.google"
        },
        {
            "software": "Canva AI",
            "descricao": "Design gráfico simplificado com recursos de IA integrados.",
            "area": "Produtividade",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://www.canva.com/"
        },
        {
            "software": "CapCut",
            "descricao": "Editor de vídeo com recursos de IA para criação de conteúdo viral.",
            "area": "Produtividade",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://www.capcut.com"
        },
        {
            "software": "Sora",
            "descricao": "Gerador de vídeos com IA da OpenAI (em desenvolvimento).",
            "area": "Produtividade",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://openai.com/pt-BR"
        },
        {
            "software": "Opus Clip",
            "descricao": "Transforme vídeos longos em clipes virais com IA automaticamente.",
            "area": "Produtividade",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://www.opus.pro/pt"
        },
        {
            "software": "Beautiful.ai",
            "descricao": "Criação de apresentações profissionais com design inteligente automático.",
            "area": "Produtividade",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://www.beautiful.ai"
        },
        {
            "software": "Microsoft Copilot",
            "descricao": "Assistente de IA integrado aos produtos Microsoft para produtividade.",
            "area": "Produtividade",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://copilot.microsoft.com"
        },
        {
            "software": "GitHub Copilot",
            "descricao": "Assistente de IA para programação que acelera o desenvolvimento.",
            "area": "Produtividade",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://github.com/features"
        },
        {
            "software": "Cursor",
            "descricao": "Editor de código com IA integrada para desenvolvimento acelerado.",
            "area": "Produtividade",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://cursor.com/"
        },
        {
            "software": "Replit AI",
            "descricao": "Ambiente de desenvolvimento online com assistente de IA.",
            "area": "Produtividade",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://replit.com/"
        },
        {
            "software": "CodeWhisperer",
            "descricao": "Assistente de IA da AWS para desenvolvimento de código.",
            "area": "Produtividade",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://aws.amazon.com"
        },
        {
            "software": "Tabnine",
            "descricao": "Assistente de IA para autocompletar código em qualquer IDE.",
            "area": "Produtividade",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://www.tabnine.com"
        },
        {
            "software": "Codeium",
            "descricao": "Assistente de IA gratuito para programação e autocompletar.",
            "area": "Produtividade",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://windsurf.com/"
        },
        {
            "software": "Tome",
            "descricao": "Criação de apresentações narrativas com IA generativa.",
            "area": "Produtividade",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://tome.app/"
        },
        {
            "software": "Slides AI",
            "descricao": "Geração automática de slides profissionais com IA.",
            "area": "Produtividade",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://www.slidesai.io/pt"
        },
        {
            "software": "Presentations.ai",
            "descricao": "Criador de apresentações com design automático e IA.",
            "area": "Produtividade",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://www.presentations"
        },
        {
            "software": "Slidesgo AI",
            "descricao": "Templates de apresentação personalizados com IA.",
            "area": "Produtividade",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://slidesgo.com/ai/"
        },
        {
            "software": "Krisp",
            "descricao": "Cancelamento de ruído com IA para chamadas profissionais.",
            "area": "Produtividade",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://krisp.ai/"
        },
        {
            "software": "Rev.ai",
            "descricao": "Transcrição automática de áudio e vídeo com alta precisão.",
            "area": "Produtividade",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://www.rev.ai/"
        },
        {
            "software": "Assembly AI",
            "descricao": "API de transcrição e análise de áudio com IA avançada.",
            "area": "Produtividade",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.assemblyai"
        },
        {
            "software": "Tldv",
            "descricao": "Gravação e resumo automático de reuniões com IA.",
            "area": "Produtividade",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://tldv.io/pt-br/"
        },
        {
            "software": "Fireflies.ai",
            "descricao": "Assistente de IA para reuniões que grava, transcreve e analisa.",
            "area": "Produtividade",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://fireflies.ai/"
        },
        {
            "software": "Read AI",
            "descricao": "Analytics de reuniões com IA para melhorar produtividade.",
            "area": "Produtividade",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://www.read.ai/pt"
        },
        {
            "software": "Reclaim AI",
            "descricao": "Agendamento inteligente com IA para otimizar o tempo.",
            "area": "Produtividade",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://reclaim.ai/"
        }
    ],
    "Rádio": [
        {
            "software": "Adobe Premiere Pro",
            "descricao": "TV (Edição de vídeo, Speech to Text e Remix de áudio).",
            "area": "Rádio e TV",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://www.adobe.com"
        },
        {
            "software": "DaVinci Resolve",
            "descricao": "TV (Color Grading e edição com Neural Engine).",
            "area": "Rádio e TV",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.blackmagicdesign.com"
        },
        {
            "software": "Descript",
            "descricao": "Rádio/TV (Edição de áudio/vídeo baseada em texto).",
            "area": "Rádio e TV",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://www.descript.com"
        },
        {
            "software": "ElevenLabs",
            "descricao": "Rádio (Geração de voz/locução ultra-realista).",
            "area": "Rádio e TV",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://elevenlabs.io/"
        },
        {
            "software": "Adobe Podcast",
            "descricao": "Rádio (Limpeza de áudio e aprimoramento de voz).",
            "area": "Rádio e TV",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://podcast.adobe.com"
        },
        {
            "software": "Runway (Gen-2)",
            "descricao": "TV (Geração e edição de vídeo com IA generativa).",
            "area": "Rádio e TV",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://runwayml.com/"
        },
        {
            "software": "Topaz Video AI",
            "descricao": "TV (Upscaling de vídeo e restauração de qualidade).",
            "area": "Rádio e TV",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://www.topazlabs.com"
        },
        {
            "software": "Auphonic",
            "descricao": "Rádio (Nivelamento e masterização automática de áudio).",
            "area": "Rádio e TV",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://auphonic.com/"
        },
        {
            "software": "Murf.ai",
            "descricao": "Rádio (Locução IA para spots e vinhetas).",
            "area": "Rádio e TV",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://murf.ai/"
        },
        {
            "software": "Izotope RX",
            "descricao": "Rádio/TV (Restauração e reparo de áudio avançado).",
            "area": "Rádio e TV",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.izotope.com"
        },
        {
            "software": "Opus Clip",
            "descricao": "TV/Social (Cortes automáticos de programas para redes).",
            "area": "Rádio e TV",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://www.opus.pro/"
        },
        {
            "software": "Otter.ai",
            "descricao": "Rádio/Jornalismo (Transcrição de entrevistas em tempo real).",
            "area": "Rádio e TV",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://otter.ai/"
        },
        {
            "software": "HeyGen",
            "descricao": "TV (Avatares virtuais para apresentação de notícias).",
            "area": "Rádio e TV",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://www.heygen.com"
        },
        {
            "software": "Synthesia",
            "descricao": "TV (Criação de vídeos com apresentadores IA).",
            "area": "Rádio e TV",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://www.synthesia.io"
        },
        {
            "software": "Trint",
            "descricao": "Jornalismo (Transcrição e edição colaborativa para redações).",
            "area": "Rádio e TV",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://trint.com/"
        },
        {
            "software": "InVideo",
            "descricao": "TV (Criação de vídeos a partir de texto/prompts).",
            "area": "Rádio e TV",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://invideo.io/"
        },
        {
            "software": "AutoCut",
            "descricao": "TV (Plugin para Premiere que remove silêncios automaticamente).",
            "area": "Rádio e TV",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://www.autocut.fr/"
        },
        {
            "software": "Podcastle",
            "descricao": "Rádio (Gravação e edição de podcasts com qualidade de estúdio).",
            "area": "Rádio e TV",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://podcastle.ai/"
        },
        {
            "software": "Cleanvoice AI",
            "descricao": "Rádio (Remove \"hums\", \"ahhs\" e gaguejos de gravações).",
            "area": "Rádio e TV",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://cleanvoice.ai/"
        },
        {
            "software": "Riverside.fm",
            "descricao": "Rádio/TV (Gravação remota de alta qualidade com clipes IA).",
            "area": "Rádio e TV",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://riverside.fm/"
        },
        {
            "software": "Captions.ai",
            "descricao": "TV/Social (Legendagem automática e contato visual IA).",
            "area": "Rádio e TV",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://www.captions.ai"
        },
        {
            "software": "Suno AI",
            "descricao": "Rádio (Geração de trilhas sonoras e jingles).",
            "area": "Rádio e TV",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://suno.com/"
        },
        {
            "software": "Luma Dream Machine",
            "descricao": "TV (Geração de vídeos realistas para B-Roll).",
            "area": "Rádio e TV",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://lumalabs.ai/dream-machine"
        },
        {
            "software": "Wisecut",
            "descricao": "TV (Edição automática baseada em reconhecimento de voz).",
            "area": "Rádio e TV",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://www.wisecut.video"
        },
        {
            "software": "Pictory",
            "descricao": "TV (Transforma roteiros e blogs em vídeos curtos).",
            "area": "Rádio e TV",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://pictory.ai/"
        },
        {
            "software": "Krisp",
            "descricao": "Rádio (Cancelamento de ruído em tempo real para transmissões).",
            "area": "Rádio e TV",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://krisp.ai/"
        },
        {
            "software": "Jasper",
            "descricao": "Roteiro (Assistente de escrita para scripts e copys).",
            "area": "Rádio e TV",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://www.jasper.ai/"
        },
        {
            "software": "Veed.io",
            "descricao": "TV (Editor online com legendas e avatares IA).",
            "area": "Rádio e TV",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://www.veed.io/"
        },
        {
            "software": "Dubverse",
            "descricao": "TV (Dublagem automática de vídeos para outros idiomas).",
            "area": "Rádio e TV",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://dubverse.ai/"
        },
        {
            "software": "Gling",
            "descricao": "TV (IA focada em cortar silêncios e erros de gravação).",
            "area": "Rádio e TV",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://www.gling.ai/"
        }
    ],
    "Jogos Digitais": [
        {
            "software": "Unity Muse",
            "descricao": "Engine (Suíte de IA da Unity para criar sprites, texturas e chat assistente).",
            "area": "Jogos Digitais",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://unity.com/products/muse"
        },
        {
            "software": "Scenario",
            "descricao": "Assets (Gerador de game assets 2D treinável com seu próprio estilo artístico).",
            "area": "Jogos Digitais",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://www.scenario.com/"
        },
        {
            "software": "Inworld AI",
            "descricao": "NPCs (Motor de personagens não-jogáveis com personalidade e diálogos reais).",
            "area": "Jogos Digitais",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.inworld.ai/"
        },
        {
            "software": "Blockade Labs (Skybox)",
            "descricao": "Ambiente (Gera skyboxes e panoramas 360º para cenários em segundos).",
            "area": "Jogos Digitais",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://skybox.blockadelabs.com/"
        },
        {
            "software": "Leonardo.ai",
            "descricao": "Concept Art/Assets (Geração de imagens de alta qualidade para UI, itens e conceitos).",
            "area": "Jogos Digitais",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://leonardo.ai/"
        },
        {
            "software": "Promethean AI",
            "descricao": "Ambiente (Assistente para construir mundos 3D virtuais via comandos de voz/texto).",
            "area": "Jogos Digitais",
            "aquisicao": "Gratuito",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.prometheanai.com/"
        },
        {
            "software": "Meshy",
            "descricao": "Modelagem 3D (Cria modelos 3D e texturas a partir de texto ou imagem).",
            "area": "Jogos Digitais",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://www.meshy.ai/"
        },
        {
            "software": "Ludo.ai",
            "descricao": "Ideação (Plataforma para pesquisa de mercado, conceitos e GDDs de jogos).",
            "area": "Jogos Digitais",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://ludo.ai/"
        },
        {
            "software": "Layer.ai",
            "descricao": "Assets (Criação de arte de jogo consistente para produção em massa).",
            "area": "Jogos Digitais",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://layer.ai/"
        },
        {
            "software": "Cascadeur",
            "descricao": "Animação (Física assistida por IA para criar animações de personagens fluidas).",
            "area": "Jogos Digitais",
            "aquisicao": "Gratuito",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://cascadeur.com/"
        },
        {
            "software": "Replica Studios",
            "descricao": "Áudio (Vozes de IA expressivas específicas para dublagem de personagens).",
            "area": "Jogos Digitais",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://replicastudios.com/"
        },
        {
            "software": "Charisma.ai",
            "descricao": "Narrativa (Criação de histórias interativas onde o jogador conversa com personagens).",
            "area": "Jogos Digitais",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://charisma.ai/"
        },
        {
            "software": "CSM.ai (Cube)",
            "descricao": "Modelagem 3D (Transforma qualquer imagem 2D em um modelo 3D pronto para game engines).",
            "area": "Jogos Digitais",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://csm.ai/"
        },
        {
            "software": "GitHub Copilot",
            "descricao": "Programação (Autocompletar código para C#, C++, Python e scripts de jogos).",
            "area": "Jogos Digitais",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://github.com/features/copilot"
        },
        {
            "software": "Modl.ai",
            "descricao": "QA/Teste (Bots de IA que jogam seu jogo para encontrar bugs e falhas).",
            "area": "Jogos Digitais",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://modl.ai/"
        },
        {
            "software": "Plask",
            "descricao": "Animação (Captura de movimento [Mocap] direto da webcam via browser).",
            "area": "Jogos Digitais",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://plask.ai/"
        },
        {
            "software": "DeepMotion",
            "descricao": "Animação (Converte vídeos em animações 3D FBX/BVH para personagens).",
            "area": "Jogos Digitais",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://www.deepmotion.com/"
        },
        {
            "software": "NVIDIA Audio2Face",
            "descricao": "Animação (Gera animação facial 3D automaticamente a partir de um áudio).",
            "area": "Jogos Digitais",
            "aquisicao": "Gratuito",
            "nivel_de_conhecimento": "Avançado",
            "link": "https://www.nvidia.com/en-us/geforce/broadcasting/broadcast-app/"
        },
        {
            "software": "Rosebud AI",
            "descricao": "Desenvolvimento (Criação de jogos completos via texto/prompt - \"Text to Game\").",
            "area": "Jogos Digitais",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://www.rosebud.ai/"
        },
        {
            "software": "Tripo AI",
            "descricao": "Modelagem 3D (Geração rápida de modelos 3D rascunho para prototipagem).",
            "area": "Jogos Digitais",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://www.tripo3d.ai/"
        },
        {
            "software": "Krea AI",
            "descricao": "Texturização/Upscale (Melhora qualidade de texturas e geração em tempo real).",
            "area": "Jogos Digitais",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://www.krea.ai/"
        },
        {
            "software": "Magnific AI",
            "descricao": "Texturização (Upscaling alucinante de detalhes para texturas realistas).",
            "area": "Jogos Digitais",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://magnific.ai/"
        },
        {
            "software": "DALL-E 3",
            "descricao": "Concept Art (Integrado ao ChatGPT, ótimo para ideias iniciais e ícones).",
            "area": "Jogos Digitais",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://openai.com/dall-e-3"
        },
        {
            "software": "Rodin (Deemos)",
            "descricao": "Modelagem 3D (Geração de modelos 3D de alta fidelidade e geometria limpa).",
            "area": "Jogos Digitais",
            "aquisicao": "Pago",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://hyperhuman.deemos.com/"
        },
        {
            "software": "Runway Gen-3",
            "descricao": "Cutscenes (Geração de vídeos cinematográficos para trailers e cutscenes).",
            "area": "Jogos Digitais",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://runwayml.com/"
        },
        {
            "software": "Texture Lab",
            "descricao": "Texturas (Gera texturas seamless [sem emenda] baseadas em texto).",
            "area": "Jogos Digitais",
            "aquisicao": "Gratuito",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://www.texturelab.org/"
        },
        {
            "software": "Pixel Lab (Aseprite)",
            "descricao": "Pixel Art (Plugins e ferramentas externas que auxiliam na geração de pixel art).",
            "area": "Jogos Digitais",
            "aquisicao": "Variável",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://www.aseprite.org/"
        },
        {
            "software": "Cursor",
            "descricao": "Programação (Editor de código focado em IA, excelente para refatorar scripts).",
            "area": "Jogos Digitais",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Intermediário",
            "link": "https://cursor.sh/"
        },
        {
            "software": "ElevenLabs",
            "descricao": "Efeitos Sonoros/Voz (Geração de efeitos sonoros [SFX] a partir de texto).",
            "area": "Jogos Digitais",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://elevenlabs.io/"
        },
        {
            "software": "Polycam",
            "descricao": "Escaneamento 3D (Usa IA para criar modelos 3D a partir de fotos do celular).",
            "area": "Jogos Digitais",
            "aquisicao": "Recursos Pagos",
            "nivel_de_conhecimento": "Iniciante",
            "link": "https://poly.cam/"
        }
    ]
};
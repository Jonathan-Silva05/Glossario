


  /* ===================== TRADUÇÃO INGLÊS PORTUGUÊS ==================== */

  let DEFAULT_LANG = 'en';
  let ALERT_TRANSLATION_INCOMPLETE = document.querySelector('#translatoin-incomplete');
  let ALERT_TRANSLATION_UNAVAILABLE = document.querySelector('#translatoin-unavailable');
  let DATA_LANG_ELEMENTS = document.querySelectorAll('[data-lang-str]');
  let TRANSLATIONS = {

    /* ===================== TRADUÇÃO INGLÊS ==================== */
    'en': {
      'HomePage': 'Home Page',
      'Language': 'Language',

      'TitleIntro': 'Glossary',
      'intro': 'Information Technology (IT) is an area in constant evolution and full of terms and '+
              'acronyms that can be confusing for those who are not familiar with it. This glossary '+
              'was created to help you better understand some terms and acronyms used in IT.',

      'Title01': 'API',
      'contentText01': 'API - Application Programming Interface:\n\n'+
                      'A communication interface between two different systems or applications. It '+
                      'defines the rules and protocols for exchanging information between these systems '+
                      'or applications. The API is usually composed of a set of functions, protocols and'+
                      'standards that allow applications to communicate with each other efficiently.',

      'Title02': 'AJAX',
      'contentText02': 'AJAX - Asynchronous JavaScript and XML:\n\n'+
                      'It is a technique used in web development to create interactive pages that '+
                      'allow users to interact with the page without having to completely reload it. '+
                      'This is possible because AJAX uses JavaScript to send and receive data in the '+ 
                      'background, without the need to reload the page. AJAX is also able to receive '+
                      'data in XML or JSON format and update specific parts of the page without having '+
                      'to reload the entire content.',

      'Title03': 'AWS',
      'contentText03': 'AWS - Amazon Web Services:\n\n'+
                      'It is a set of cloud services offered by Amazon.com. These services include '+
                      'data storage, cloud computing, database, artificial intelligence, data '+
                      'analysis, among others. AWS is one of the largest cloud service providers in '+
                      'the world and is used by many companies and developers to host and run cloud applications.',

      'Title04': 'BACK-END',
      'contentText04': 'Back-end - Part of the software that handles server and database logic:\n\n'+
                      'Responsible for processing and storing data, executing business logic, and '+
                      'providing responses to users. The backend is usually written in programming '+
                      'languages like PHP, Python, Java, and Ruby and runs on web servers.',

      'Title05': 'BIG DATA',
      'contentText05': 'Big Data - Large volume of data, structured or not, '+
                            'that need to be processed and analyzed:\n\n'+
                      'It is a term used to describe very large datasets, which can be structured or '+
                      'unstructured. This data can include information collected from sensors, social '+
                      'media, e-commerce transactions, and more. Due to the large volume of data, it '+
                      'is necessary to use special tools and technologies to process and analyze them, '+
                      'such as Hadoop, Spark, Apache Kafka, among others.',

      'Title06': 'CMS',
      'contentText06': 'CMS - Content Management System:\n\n'+
                      'It is used to create and manage content on websites, blogs and other types of '+
                      'web applications. CMS allow users to publish and update content without requiring '+
                      'technical programming skills. Some examples of popular CMS include WordPress, '+
                      'Joomla, and Drupal.',

      'Title07': 'CSS',
      'contentText07': 'CSS - Cascading Style Sheets:\n\n'+
                      'It is a style language used to define the look of an HTML document. It lets you '+
                      'control the layout, colors, fonts, and other visual aspects of a web page. CSS is '+
                      'applied to an HTML document using selectors, which are used to choose the HTML elements '+
                      'you want to style.',

      'Title08': 'ERP',
      'contentText08': "ERP - Enterprise Resource Planning:\n\n"+
                      "It is software that helps companies manage their business resources such as finance, "+
                      "inventory, production, sales, and human resources. The main objective of ERP is to "+
                      "improve the company's efficiency and productivity by integrating all its operations "+
                      "into a single system.",

      'Title09': 'Firewall',
      'contentText09': 'Firewall - Security system that monitors network traffic:\n\n'+
                      'It is used to protect the system from malicious attacks. It can be implemented in '+
                      'hardware or software and is responsible for blocking access to ports and services '+
                      'that should not be accessed externally. The firewall can also be configured to allow '+
                      'or block access to specific websites and applications.',

      'Title10': 'Framework',
      'contentText10': 'Framework - Set of libraries, standards and guidelines '+
                            'that facilitate software development:\n\n'+
                      'Provides a skeleton for application development and allows developers to focus on '+
                      'application functionality rather than worrying about software infrastructure. The '+
                      'framework can be used to develop a wide variety of applications including web, '+
                      'mobile and desktop applications.',

      'Title11': 'Front-end',
      'contentText11': 'Front-end - Part of the software that handles the user interface:\n\n'+
                      'This includes the layout, design, and user interaction with the app. Front-end is '+
                      'usually developed using web technologies such as HTML, CSS, and JavaScript.',

      'Title12': 'HTML',
      'contentText12': 'HTML - Markup language used to create web pages:\n\n'+
                      'It is composed of tags that define the structure, content and layout of a '+
                      'web page. HTML is the foundation of the web and is the language used by browsers '+
                      'to display content on the internet.',

      'Title13': 'HTTP',
      'contentText13': 'HTTP - Hypertext transfer protocol:\n\n'+
                      'It is responsible for requesting and sending data between clients and web servers. '+
                      'HTTP is an upper-layer application protocol that runs on top of the TCP/IP transport protocol.',

      'Title14': 'IDE',
      'contentText14': 'IDE - Integrated Development Environment:\n\n'+
                      'Provides an interface for writing, debugging, and testing code. It includes features '+
                      'such as code editors, debuggers, code analysis tools and integration with version control systems.',

      'Title15': 'IoT',
      'contentText15': 'IoT - Internet of Things:\n\n'+
                      'It refers to connecting devices and objects from the physical world to the internet. '+
                      'These devices include sensors, meters, cameras, wearables, home appliances, '+
                      'and vehicles, among others. IoT allows these devices to communicate with each other and '+
                      'with systems in the cloud, collecting and sharing data in real time. This allows companies '+
                      'and individuals to gain valuable insights, automate processes and improve decision-making.',

      'Title16': 'IP',
      'contentText16': 'IP - Internet Protocol:\n\n'+
                      'It is a network communication protocol that allows communication between devices on a '+
                      'network. IP is responsible for identifying and addressing devices and routing data '+
                      'through the network. IP is a fundamental protocol for internet communication and is used '+
                      'by all devices connected to the internet.',

      'Title17': 'JavaScript',
      'contentText17': "JavaScript - Programming language for the web:\n\n"+
                      "It is a high-level, interpreted, object-oriented programming language that is "+
                      "primarily used to develop interactive web applications. It runs in the user's "+
                      "browser and allows developers to create dynamic and responsive interfaces, as well "+
                      "as providing support for various frameworks and libraries.",

      'Title18': 'JSON',
      'contentText18': 'JSON - JavaScript Object Notation:\n\n'+
                      'It is a lightweight and easy to read and write data format that is used for exchanging '+
                      'data between systems. It is based on JavaScript object syntax and is widely used in '+
                      'communication between web applications and servers.',

      'Title19': 'LAN',
      'contentText19': 'LAN - Local Network:\n\n'+
                      'It is a network of computers covering a limited geographic area, such as an office, '+
                      'building or campus. Local area networks are used to allow devices to communicate with '+
                      'each other and share resources such as printers and files.',

      'Title20': 'Linux',
      'contentText20': 'Linux - Open Source Operating System:\n\n'+
                      'Based on the Unix kernel, which is widely used on servers, desktops and mobile devices. '+
                      'It offers a variety of distributions that are customizable and flexible, as well as being free',

      'Title21': 'Machine Learning',
      'contentText21': 'Machine Learning:\n\n'+
                      'It is an artificial intelligence technique that allows computers to learn from data and '+
                      'perform specific tasks without being explicitly programmed. Machine Learning is used in '+
                      'a variety of applications such as speech recognition, computer vision, and data analysis.',

      'Title22': 'MVC',
      'contentText22': "MVC - Model-View-Controller:\n\n"+
                      "It is an architectural pattern used in software development that separates the application "+
                      "into three main components: Model, View and Controller. The model is responsible for "+
                      "managing the application's data, the view is responsible for the user interface, and the "+
                      "controller is responsible for the application's logic.",

      'Title23': 'MySQL',
      'contentText23': 'MySQL - Relational database management system:\n\n'+
                      'It is used to store and manage large amounts of data, and is very popular with web developers '+
                      'and companies that need scalable and reliable databases. MySQL supports several programming '+
                      'languages and can run on different operating systems.',

      'Title24': 'Node.js',
      'contentText24': 'Node.js - JavaScript application development platform:\n\n'+
                      'Allows developers to create high-performance and scalable applications. It runs on '+
                      'the server and uses an event-driven programming model and non-blocking I/O to handle '+
                      'large numbers of concurrent requests. Node.js is widely used to develop web '+
                      'applications, APIs, games and other networking applications.',

      'Title25': 'ORM',
      'contentText25': 'ORM - Object-Relational Mapping:\n\n'+
                      'It is a programming technique that allows developers to map objects into a relational '+
                      'database system. It allows developers to build more efficient and maintainable '+
                      'applications by reducing the amount of code needed to access and manipulate data in a '+
                      'relational database. Some examples of popular ORM frameworks include Hibernate for Java '+
                      'and Sequelize for Node.js.',

      'Title26': 'PHP',
      'contentText26': 'PHP - Server-side programming language:\n\n'+
                      'Used to develop web applications. It runs on the server side and is often used in '+
                      'conjunction with a web server such as Apache or Nginx. PHP is widely used to create '+
                      'content management systems (CMS) such as WordPress, Drupal and Joomla, as well as to '+
                      'create web applications and APIs.',

      'Title27': 'Python',
      'contentText27': "Python - High-level interpreted programming language:\n\n"+
                      "It is widely used in web, scientific and data development. It's easy to learn and has "+
                      "a clear, concise syntax, making it a good choice for programming beginners. Python is "+
                      "used for creating web applications, automated scripting, data processing and data analysis.",

      'Title28': 'REST',
      'contentText28': 'REST - Representational State Transfer:\n\n'+
                      'It is a software architecture style used to create web services. It uses a set '+
                      'of standards and protocols to define how web applications should communicate '+
                      'with each other. REST is based on the HTTP protocol and is widely used to create '+
                      'web APIs that can be accessed by other applications.',

      'Title29': 'SaaS',
      'contentText29': 'SaaS - Software as a Service:\n\n'+
                      'It is a business model where software is provided as a service over the Internet. '+
                      'Users access the software through a web browser or an application, and the service '+
                      'provider is responsible for maintaining and updating the software. Some examples of '+
                      'SaaS include Google Docs, Salesforce and Slack.',

      'Title30': 'SEO',
      'contentText30': 'SEO - Optimization for Search Engines:\n\n'+
                      'It is the process of optimizing a website to improve its visibility in search engines, '+
                      'such as Google, Bing, among others. Optimization for search engines is done through '+
                      'various techniques, such as selecting keywords relevant to the business, producing '+
                      'quality content, optimizing titles, meta descriptions and header tags, improving loading '+
                      'speed of the site, the creation of backlinks, among others.',

      'Title31': 'SOAP',
      'contentText31': 'SOAP - Simple Object Access Protocol:\n\n'+
                      'It is a communication protocol used to exchange information between distributed systems. '+
                      'It allows applications to send and receive messages in XML (Extensible Markup Language) '+
                      'format and supports various transport protocols such as HTTP, HTTPS, SMTP and FTP. SOAP '+
                      'is mainly used in web services to communicate between distributed applications.',

      'Title32': 'SQL',
      'contentText32': 'SQL - Structured query language:\n\n'+
                      'Used to access and manipulate relational databases. With SQL, it is possible to perform '+
                      'several operations, such as data queries, inserts, updates and deletions. The language '+
                      'is standardized by ANSI (American National Standards Institute) and is widely used in '+
                      'business applications and content management systems.',

      'Title33': 'SSL',
      'contentText33': "SSL - Secure Sockets Layer:\n\n"+
                      "It is a security protocol used to guarantee the privacy and integrity of communications "+
                      "on the Internet. It allows the encryption of data transmitted between the user's browser "+
                      "and the web server, ensuring that only the recipient can access the transmitted information. "+
                      "SSL is commonly used on e-commerce websites, banks, and other applications that require a "+
                      "high level of security.",

      'Title34': 'TCP/IP',
      'contentText34': 'TCP/IP - Transmission Control Protocol/Internet Protocol:\n\n'+
                      'It is the set of communication protocols used on the Internet. It is responsible for '+
                      'transmitting data between computers on different networks and ensures the integrity and '+
                      'reliability of transmitted information. TCP/IP breaks data into packets and uses IP '+
                      'addresses to forward the packets to the correct destination.',

      'Title35': 'UI',
      'contentText35': 'UI - User interface\n\n'+
                      'It is the graphical interface that allows users to interact with a software or '+
                      'application. The interface should be designed in such a way as to facilitate navigation '+
                      'and make the user experience more pleasant. A good interface should be intuitive, clear '+
                      'and provide immediate feedback on user actions.',

      'Title36': 'UX',
      'contentText36': "UX - User experience:\n\n"+
                      "It is the user experience when using a software or application. It encompasses all"+
                      " aspects of the user's interaction with the software, including design, usability, "+
                      "accessibility and performance. A good user experience is critical to the success of "+
                      "any application or software.",

      'Title37': 'VPN',
      'contentText37': "VPN - Virtual Private Network:\n\n"+
                      "Allows remote users to connect to a corporate network or a private network over "+
                      "the Internet. VPN creates a secure and encrypted communication channel between the "+
                      "remote user's device and the corporate network, ensuring the privacy of transmitted "+
                      "data and protecting against external attacks.",

      'Title38': 'WAN',
      'contentText38': 'WAN - Wide Area Network:\n\n'+
                      'It is a computer network that spans a wide geographic area, such as a country or '+
                      'continent. It is used to connect smaller networks such as LANs (Local Area Networks) '+
                      'or MANs (Metropolitan Area Networks) to each other. WANs are generally managed by '+
                      'telecommunications companies or internet service providers and are used to enable '+
                      'communication between branches of a company or to connect remote users to a central network.',

      'Title39': 'XML',
      'contentText39': 'XML - Markup language for documents and data:\n\n'+
                      'It was created to be an alternative to HTML, but it can be used for various purposes, '+
                      'such as data transfer, application configuration, structured data storage, among others. '+
                      'XML is composed of tags that define the structure and content of the document, allowing it '+
                      'to be read and interpreted by different applications.',

      'Title40': 'YAML',
      'contentText40': 'YAML - Human readable data markup language:\n\n'+
                      'It is used to represent structured data clearly and concisely. YAML is used in many applications '+
                      'including software configuration, data representation, data exchange, among others.'
    },





    /* =================== TRADUÇÃO PORTUGUÊS =================== */

    'pt-br': {
      'HomePage': 'Página Inicial',
      'Language': 'Idioma',

      'TitleIntro': 'Glossário',
      'intro': 'A Tecnologia da Informação (TI) é uma área em constante evolução e repleta de '+
              'termos e siglas que podem ser confusos para aqueles que não são familiarizados '+
              'com ela. Este glossário foi criado para ajudar a compreender melhor alguns '+
              'termos e siglas utilizados em TI.',

      'Title01': '',
      'contentText01': 'API - Interface de Programação de Aplicativos:\n\n'+
                      'Uma interface de comunicação entre dois sistemas ou aplicativos '+
                      'diferentes. Ela define as regras e protocolos para a troca de informações '+
                      'entre esses sistemas ou aplicativos. A API geralmente é composta por um '+
                      'conjunto de funções, protocolos e padrões que permitem que as aplicações '+
                      'se comuniquem entre si de forma eficiente.',

      'Title02': 'AJAX',
      'contentText02': 'AJAX - JavaScript e XML assíncronos:\n\n'+
                      'É uma técnica utilizada em desenvolvimento web para criar páginas '+
                      'interativas que permitem que os usuários interajam com a página sem '+
                      'precisar recarregá-la completamente. Isso é possível porque o AJAX '+
                      'utiliza JavaScript para enviar e receber dados em segundo plano, sem '+
                      'a necessidade de recarregar a página. O AJAX também é capaz de receber '+
                      'dados em formato XML ou JSON e atualizar partes específicas da página '+
                      'sem precisar recarregar todo o conteúdo.',

      'Title03': 'AWS',
      'contentText03': 'AWS - Amazon Web Services:\n\n'+
                      'É um conjunto de serviços em nuvem oferecidos pela Amazon.com. Esses serviços '+
                      'incluem armazenamento de dados, computação em nuvem, banco de dados, inteligência '+
                      'artificial, análise de dados, entre outros. A AWS é uma das maiores provedoras de '+
                      'serviços em nuvem do mundo e é utilizada por muitas empresas e desenvolvedores para '+
                      'hospedar e executar aplicativos em nuvem.',

      'Title04': 'BACK-END',
      'contentText04': 'Back-end - Parte do software que lida com a lógica do servidor e banco de dados:\n\n'+
                      'Responsável por processar e armazenar dados, executar a lógica de negócios e fornecer '+
                      'respostas aos usuários. O back-end geralmente é escrito em linguagens de programação '+
                      'como PHP, Python, Java e Ruby, e é executado em servidores web.',

      'Title05': 'BIG DATA',
      'contentText05': 'Big Data - Grande volume de dados, estruturados ou não, '+
                            'que precisam ser processados e analisados:\n\n'+
                      'É um termo usado para descrever conjuntos de dados muito grandes, que podem ser '+
                      'estruturados ou não estruturados. Esses dados podem incluir informações coletadas '+
                      'de sensores, redes sociais, transações de comércio eletrônico e muito mais. Devido '+
                      'ao grande volume de dados, é necessário utilizar ferramentas e tecnologias especiais '+
                      'para processá-los e analisá-los, como Hadoop, Spark, Apache Kafka, entre outros.',

      'Title06': 'CMS',
      'contentText06': 'CMS - Sistema de Gerenciamento de Conteúdo:\n\n'+
                      'É usado para criar e gerenciar conteúdo em sites, blogs e outros tipos de aplicativos '+
                      'web. Os CMS permitem que os usuários publiquem e atualizem conteúdo sem precisar de '+
                      'conhecimentos técnicos em programação. Alguns exemplos de CMS populares incluem o '+
                      'WordPress, Joomla e Drupal.',

      'Title07': 'CSS',
      'contentText07': 'CSS - Folhas de Estilo em Cascata: \n\n'+
                      'É uma linguagem de estilo utilizada para definir o visual de um documento HTML. '+
                      'Ela permite que você controle o layout, as cores, as fontes e outros aspectos '+
                      'visuais de uma página da web. O CSS é aplicado em um documento HTML usando seletores, '+
                      'que são utilizados para escolher os elementos HTML que você deseja estilizar.',

      'Title08': 'ERP',
      'contentText08': 'ERP - Planejamento de Recursos Empresariais:\n\n'+
                      'É um software que ajuda as empresas a gerenciar seus recursos empresariais, como '+
                      'finanças, estoque, produção, vendas e recursos humanos. O objetivo principal do ERP '+
                      'é melhorar a eficiência e a produtividade da empresa, integrando todas as suas '+
                      'operações em um único sistema.',

      'Title09': 'Firewall',
      'contentText09': 'Firewall - Sistema de segurança que monitora o tráfego de rede:\n\n'+
                      'É usado para proteger o sistema contra ataques maliciosos. Ele pode ser implementado '+
                      'em um hardware ou software e é responsável por bloquear o acesso a portas e serviços '+
                      'que não devem ser acessados externamente. O firewall também pode ser configurado para '+
                      'permitir ou bloquear o acesso a sites e aplicativos específicos.',

      'Title10': 'Framework',
      'contentText10': 'Framework - Conjunto de bibliotecas, padrões e diretrizes '+
                            'que facilitam o desenvolvimento de software:\n\n'+
                      'Fornece um esqueleto para o desenvolvimento de aplicativos e permite que os '+
                      'desenvolvedores se concentrem nas funcionalidades do aplicativo em vez de se '+
                      'preocupar com a infraestrutura do software. O framework pode ser usado para '+
                      'desenvolver uma ampla variedade de aplicativos, incluindo aplicativos web, '+
                      'móveis e desktop.',

      'Title11': 'Front-end',
      'contentText11': 'Front-end - Parte do software que lida com a interface do usuário:\n\n'+
                      'Isso inclui o layout, o design e a interação do usuário com o aplicativo. O '+
                      'Front-end é geralmente desenvolvido utilizando tecnologias web, como HTML, '+
                      'CSS e JavaScript.',

      'Title12': 'HTML',
      'contentText12': 'HTML - Linguagem de marcação utilizada na criação de páginas web:\n\n'+
                      'É composta por tags que definem a estrutura, o conteúdo e o layout de uma '+
                      'página web. O HTML é a base da web e é a linguagem utilizada pelos navegadores '+
                      'para exibir conteúdo na internet.',

      'Title13': 'HTTP',
      'contentText13': 'HTTP - Protocolo de transferência de hipertexto:\n\n'+
                      'É responsável por solicitar e enviar dados entre clientes e servidores web. '+
                      'O HTTP é um protocolo de aplicação de camada superior que é executado sobre o '+
                      'protocolo de transporte TCP/IP.',

      'Title14': 'IDE',
      'contentText14': 'IDE - Ambiente de Desenvolvimento Integrado:\n\n'+
                      'Fornece uma interface para escrever, depurar e testar código. Ele inclui '+
                      'recursos como editores de código, depuradores, ferramentas de análise de '+
                      'código e integração com sistemas de controle de versão.',

      'Title15': 'IoT',
      'contentText15': 'IoT - Internet das Coisas:\n\n'+
                      'Refere-se à conexão de dispositivos e objetos do mundo físico à internet. '+
                      'Esses dispositivos incluem sensores, medidores, câmeras, dispositivos vestíveis, '+
                      'eletrodomésticos e veículos, entre outros. A IoT permite que esses dispositivos '+
                      'se comuniquem entre si e com sistemas na nuvem, coletando e compartilhando dados '+
                      'em tempo real. Isso permite que as empresas e indivíduos possam obter insights '+
                      'valiosos, automatizar processos e melhorar a tomada de decisões.',

      'Title16': 'IP',
      'contentText16': 'IP - Protocolo de Internet:\n\n'+
                      'É um protocolo de comunicação de rede que permite a comunicação entre dispositivos '+
                      'em uma rede. O IP é responsável pela identificação e endereçamento dos dispositivos '+
                      'e pelo roteamento de dados através da rede. O IP é um protocolo fundamental para a '+
                      'comunicação na internet e é usado por todos os dispositivos conectados à internet.',

      'Title17': 'JavaScript',
      'contentText17': 'JavaScript - Linguagem de programação para web:\n\n'+
                      'É uma linguagem de programação de alto nível, interpretada e orientada a objetos, '+
                      'que é usada principalmente para desenvolver aplicativos web interativos. Ela é executada '+
                      'no navegador do usuário e permite que os desenvolvedores criem interfaces dinâmicas e '+
                      'responsivas, além de oferecer suporte para vários frameworks e bibliotecas.',

      'Title18': 'JSON',
      'contentText18': 'JSON - Notação de Objeto JavaScript:\n\n'+
                      'É um formato de dados leve e fácil de ler e escrever que é utilizado para troca '+
                      'de dados entre sistemas. É baseado na sintaxe de objetos JavaScript e é amplamente '+
                      'utilizado na comunicação entre aplicativos web e servidores.',

      'Title19': 'LAN',
      'contentText19': 'LAN - Rede Local:\n\n'+
                      'É uma rede de computadores que cobre uma área geográfica limitada, como um escritório, '+
                      'prédio ou campus. As redes locais são usadas para permitir que os dispositivos se '+
                      'comuniquem entre si e compartilhem recursos, como impressoras e arquivos.',

      'Title20': 'Linux',
      'contentText20': 'Linux - Sistema Operacional de código aberto:\n\n'+
                      'Baseado no kernel do Unix, que é amplamente utilizado em servidores, desktops e '+
                      'dispositivos móveis. Ele oferece uma variedade de distribuições que são personalizáveis '+
                      'e flexíveis, além de serem gratuitas.',

      'Title21': 'Machine Learning',
      'contentText21': 'Machine Learning - Aprendizado de máquina:\n\n'+
                      'É uma técnica de inteligência artificial que permite que os computadores '+
                      'aprendam com dados e realizem tarefas específicas sem serem explicitamente '+
                      'programados. O Machine Learning é usado em diversas aplicações, como reconhecimento '+
                      'de fala, visão computacional e análise de dados.',

      'Title22': 'MVC',
      'contentText22': 'MVC - Controlador de visualização de modelo:\n\n'+
                      'É um padrão arquitetural utilizado no desenvolvimento de software que separa a aplicação '+
                      'em três componentes principais: Modelo (Model), Visão (View) e Controlador (Controller). '+
                      'O modelo é responsável por gerenciar os dados da aplicação, a visão é responsável pela '+
                      'interface do usuário e o controlador é responsável pela lógica do aplicativo.',

      'Title23': 'MySQL',
      'contentText23': 'MySQL - Sistema de gerenciamento de banco de dados relacional:\n\n'+
                      'É usado para armazenar e gerenciar grandes quantidades de dados, e é muito popular '+
                      'entre desenvolvedores web e empresas que precisam de bancos de dados escaláveis e '+
                      'confiáveis. O MySQL suporta várias linguagens de programação e pode ser executado '+
                      'em diferentes sistemas operacionais.',

      'Title24': 'Node.js',
      'contentText24': 'Node.js - Plataforma de desenvolvimento de aplicações em JavaScript:\n\n'+
                      'Permite aos desenvolvedores criar aplicativos de alta performance e escaláveis. '+
                      'Ele é executado no servidor e usa um modelo de programação orientado a eventos e '+
                      'I/O não bloqueante para lidar com um grande número de solicitações simultâneas. '+
                      'Node.js é amplamente utilizado para desenvolver aplicações web, APIs, jogos e '+
                      'outras aplicações de rede.',

      'Title25': 'ORM',
      'contentText25': 'ORM - Mapeamento Objeto-Relacional:\n\n'+
                      'É uma técnica de programação que permite aos desenvolvedores mapear objetos em um '+
                      'sistema de banco de dados relacional. Ele permite que os desenvolvedores criem '+
                      'aplicativos mais eficientes e fáceis de manter, reduzindo a quantidade de código '+
                      'necessário para acessar e manipular dados em um banco de dados relacional. Alguns '+
                      'exemplos de frameworks ORM populares incluem Hibernate para Java e Sequelize para Node.js.',

      'Title26': 'PHP',
      'contentText26': 'PHP - Linguagem de programação server-side:\n\n'+
                      'Usada para desenvolver aplicações web. É executado no lado do servidor e é frequentemente '+
                      'usado em conjunto com um servidor web como o Apache ou o Nginx. O PHP é amplamente utilizado '+
                      'para criar sistemas de gerenciamento de conteúdo (CMS) como o WordPress, Drupal e Joomla, '+
                      'bem como para criar aplicativos web e APIs.',

      'Title27': 'Python',
      'contentText27': 'Python - Linguagem de programação interpretada de alto nível:\n\n'+
                      'É amplamente utilizada em desenvolvimento web, científico e de dados. É fácil de aprender '+
                      'e possui uma sintaxe clara e concisa, tornando-o uma boa escolha para iniciantes em '+
                      'programação. O Python é usado para criar aplicações web, scripts automatizados, '+
                      'processamento de dados e análise de dados.',

      'Title28': 'REST',
      'contentText28': 'REST - Transferência de Estado Representacional:\n\n'+
                      'É um estilo de arquitetura de software usado para criar serviços web. Ele usa um '+
                      'conjunto de padrões e protocolos para definir como as aplicações web devem se comunicar '+
                      'umas com as outras. O REST é baseado no protocolo HTTP e é amplamente utilizado para '+
                      'criar APIs web que podem ser acessadas por outras aplicações.',

      'Title29': 'SaaS',
      'contentText29': 'SaaS - Software como serviço:\n\n'+
                      'É um modelo de negócios em que o software é fornecido como um serviço pela Internet. '+
                      'Os usuários acessam o software através de um navegador da web ou de um aplicativo, e '+
                      'o provedor de serviços é responsável por manter e atualizar o software. Alguns exemplos '+
                      'de SaaS incluem o Google Docs, Salesforce e Slack.',

      'Title30': 'SEO',
      'contentText30': 'SEO - Otimização para mecanismos de busca:\n\n'+
                      'É o processo de otimização de um site para melhorar sua visibilidade nos mecanismos '+
                      'de busca, como Google, Bing, entre outros. A otimização para mecanismos de busca é '+
                      'feita através de diversas técnicas, como a seleção de palavras-chave relevantes para '+
                      'o negócio, a produção de conteúdo de qualidade, a otimização de títulos, meta descrições '+
                      'e tags de cabeçalho, a melhoria da velocidade de carregamento do site, a criação de '+
                      'backlinks, entre outras.',

      'Title31': 'SOAP',
      'contentText31': 'SOAP - Protocolo de Acesso a Objetos Simples:\n\n'+
                      'É um protocolo de comunicação utilizado para troca de informações entre sistemas '+
                      'distribuídos. Ele permite que os aplicativos enviem e recebam mensagens em formato XML '+
                      '(Extensible Markup Language) e suporta diversos protocolos de transporte, como HTTP, '+
                      'HTTPS, SMTP e FTP. O SOAP é usado principalmente em serviços web para comunicação '+
                      'entre aplicações distribuídas.',

      'Title32': 'SQL',
      'contentText32': 'SQL - Linguagem de consulta estruturada:\n\n'+
                      'Utilizada para acessar e manipular bancos de dados relacionais. Com o SQL, é '+
                      'possível realizar diversas operações, como consultas de dados, inserções, atualizações'+
                      ' e exclusões. A linguagem é padronizada pela ANSI (American National Standards Institute)'+
                      ' e é amplamente utilizada em aplicações de negócios e sistemas de gerenciamento de conteúdo.',

      'Title33': 'SSL',
      'contentText33': 'SSL - Secure Sockets Layer:\n\n'+
                      'É um protocolo de segurança utilizado para garantir a privacidade e a integridade das '+
                      'comunicações na internet. Ele permite a criptografia dos dados transmitidos entre o '+
                      'navegador do usuário e o servidor web, garantindo que apenas o destinatário possa acessar '+
                      'as informações transmitidas. O SSL é comumente utilizado em sites de comércio eletrônico, '+
                      'bancos e outras aplicações que exigem alto nível de segurança.',

      'Title34': 'TCP/IP',
      'contentText34': 'TCP/IP - Protocolo de Controle de Transmissão/Protocolo da Internet:\n\n'+
                      'É o conjunto de protocolos de comunicação utilizado na internet. Ele é responsável '+
                      'pela transmissão de dados entre computadores em redes diferentes e garante a integridade '+
                      'e confiabilidade das informações transmitidas. O TCP/IP divide os dados em pacotes e '+
                      'utiliza endereços IP para encaminhar os pacotes até o destino correto.',

      'Title35': 'UI',
      'contentText35': 'UI - Interface do usuário\n\n'+
                      'É a interface gráfica que permite que os usuários interajam com um software ou aplicativo. '+
                      'A interface deve ser projetada de forma a facilitar a navegação e tornar a experiência do '+
                      'usuário mais agradável. Uma boa interface deve ser intuitiva, clara e fornecer feedback '+
                      'imediato sobre as ações do usuário.',

      'Title36': 'UX',
      'contentText36': 'UX - Experiência do usuário:\n\n'+
                      'É a experiência do usuário ao utilizar um software ou aplicativo. Ela engloba '+
                      'todos os aspectos da interação do usuário com o software, incluindo design, '+
                      'usabilidade, acessibilidade e performance. Uma boa experiência do usuário é '+
                      'fundamental para o sucesso de qualquer aplicativo ou software.',

      'Title37': 'VPN',
      'contentText37': 'VPN - Rede Virtual Privada:\n\n'+
                      'Permite que usuários remotos se conectem a uma rede corporativa ou a uma rede '+
                      'privada através da Internet. A VPN cria um canal de comunicação seguro e '+
                      'criptografado entre o dispositivo do usuário remoto e a rede corporativa, '+
                      'garantindo a privacidade dos dados transmitidos e protegendo de ataques externos.',

      'Title38': 'WAN',
      'contentText38': 'WAN - Rede de Área Ampla:\n\n'+
                      'É uma rede de computadores que se estende por uma área geográfica ampla, como '+
                      'um país ou continente. Ela é usada para conectar redes menores, como LANs '+
                      '(Redes Locais) ou MANs (Redes Metropolitanas), entre si. As WANs são '+
                      'geralmente gerenciadas por empresas de telecomunicações ou provedores de '+
                      'serviços de internet, e são usadas para permitir a comunicação entre filiais '+
                      'de uma empresa ou para conectar usuários remotos a uma rede central.',

      'Title39': 'XML',
      'contentText39': 'XML - Linguagem de marcação para documentos e dados:\n\n'+
                      'Foi criado para ser uma alternativa ao HTML, mas pode ser usado para diversos '+
                      'fins, como transferência de dados, configuração de aplicativos, armazenamento '+
                      'de dados estruturados, entre outros. O XML é composto por tags que definem a '+
                      'estrutura e o conteúdo do documento, permitindo que ele seja lido e '+
                      'interpretado por diferentes aplicativos.',

      'Title40': 'YAML',
      'contentText40': 'YAML - Linguagem de marcação de dados humanos legíveis:\n\n'+
                      'Ele é usado para representar dados estruturados de forma clara e concisa. O '+
                      'YAML é usado em muitos aplicativos, incluindo configuração de software, '+
                      'representação de dados, intercâmbio de dados, entre outros. O YAML usa espaços '+
                      'e endentação para definir a estrutura dos dados, tornando-o fácil de ler e entender. '+
                      'Ele também suporta o uso de comentários, tornando-o útil para a documentação de dados.'
    }
  };


  const translate = (lang = null) => {
    if (lang === null) {
      lang = DEFAULT_LANG;
    }
    let DEFAULT_LANG_LENGTH = Object.keys(TRANSLATIONS[DEFAULT_LANG]).length;
    // Verifica se o idioma selecionado existe.
    if (TRANSLATIONS[lang]) {
      // Existe... Agora verifica se a tradução selecionada está completa
      // Se não estiver exibe a mensagem.
      ALERT_TRANSLATION_UNAVAILABLE.style.display = 'none';
      let LANG_LENGTH = Object.keys(TRANSLATIONS[lang]).length;
      if (LANG_LENGTH < DEFAULT_LANG_LENGTH) {
        ALERT_TRANSLATION_INCOMPLETE.style.display = 'block';
      } else {
        ALERT_TRANSLATION_INCOMPLETE.style.display = 'none';
      }
      DATA_LANG_ELEMENTS.forEach((el) => {
        let STR = el.getAttribute('data-lang-str');
        if (TRANSLATIONS[lang][STR]) {
          el.innerText = (TRANSLATIONS[lang][STR]);
        }
      });
    } else {
      // Não existe, então exibe a mensagem
      ALERT_TRANSLATION_INCOMPLETE.style.display = 'none';
      ALERT_TRANSLATION_UNAVAILABLE.style.display = 'block';
    }
  }

  let BTNS_TRANSLATE = document.querySelectorAll('[name=btn-translate]');
  BTNS_TRANSLATE.forEach((btn) => {
    btn.addEventListener('click', (ev) => {
      translate(btn.getAttribute('data-lang'));
    });
  });

  translate();
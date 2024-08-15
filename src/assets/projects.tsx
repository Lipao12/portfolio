import projectImage2 from "./project-2.png";
import projectImage3 from "./project-3.png";
import projectImage4 from "./project-4.png";
import projectImage5 from "./project-5.png";

export const projects = [
  {
    id: "5",
    name: "Sistema de Agendamento para Salão Natural Hair",
    description:
      "Um site de agendamento de serviços para o salão Natural Hair, com landing page, listagem de serviços e sistema de agendamento. Desenvolvido com TypeScript e Tailwind CSS no frontend e Firebase como banco de dados.",
    full_description: `[![GitHub](https://img.shields.io/badge/GitHub-Natural--Hair-242933?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Lipao12/natural_hair)

O **Sistema de Agendamento para Salão Natural Hair** é uma aplicação web voltada para facilitar o processo de marcação de serviços em um salão de beleza especializado. Com uma interface intuitiva e um sistema robusto, os clientes podem visualizar os serviços disponíveis, escolher o que desejam e agendar diretamente pelo site.

Desenvolvido com **TypeScript** e **Tailwind CSS** no frontend, o site é responsivo e oferece uma experiência de usuário moderna e agradável. No backend, o uso do **Firebase** como banco de dados garante que os dados de agendamento sejam armazenados e gerenciados de forma eficiente.

## Funcionalidades Principais:
- **Landing Page:** Apresenta a profissional, o salão e seus diferenciais, com informações claras e imagens atraentes.
- **Listagem de Serviços:** Exibe todos os serviços disponíveis no salão, como corte de cabelo, análise capilar, entre outros, com detalhes e preços.
- **Sistema de Agendamento:** Permite que os clientes escolham um serviço, selecionem uma data e horário disponíveis, e façam a reserva de forma simples e rápida.

## Tecnologias Utilizadas:
- **TypeScript:** Linguagem principal para o desenvolvimento do frontend.
- **Tailwind CSS:** Framework de CSS utilizado para estilização.
- **Firebase:** Utilizado como banco de dados para armazenar e gerenciar agendamentos e informações dos serviços.

## Casos de Uso:
- **Agendamento de Serviços:** Ideal para clientes que desejam marcar horários de forma rápida e conveniente, evitando a necessidade de ligações telefônicas.

## Desafios e Soluções:
- **Sincronização de Horários:** Implementação de um sistema que garante a disponibilidade correta dos horários, evitando conflitos e sobreposições de agendamentos.
- **Gerenciamento de Dados:** Uso do Firebase para um armazenamento seguro e eficiente das informações de clientes e agendamentos.
`,
    image: projectImage5,
  },
  {
    id: "2",
    name: "Planner",
    description:
      "Aplicação web para gerenciamento de viagens, com login e edição de detalhes. Desenvolvida com TypeScript e Tailwind CSS no frontend e Python (Flask) com PostgreSQL no backend.",
    full_description: `[![GitHub](https://img.shields.io/badge/GitHub-Planner-242933?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Lipao12/planner)
    
O **Planner** é uma aplicação web projetada para facilitar a organização e o gerenciamento de viagens, ideal para grupos de amigos ou famílias que desejam planejar suas aventuras de maneira colaborativa e organizada. 

Desenvolvido com **TypeScript** e **Tailwind CSS** no frontend, o Planner oferece uma interface moderna, responsiva e intuitiva. O backend, construído com **Python (Flask)** e **PostgreSQL**, assegura um gerenciamento eficiente dos dados e lógica de negócios, proporcionando uma experiência de usuário robusta e confiável.

## Principais Funcionalidades:
- **Login Personalizado:** Cada usuário possui um acesso exclusivo, permitindo uma experiência personalizada e segura.
- **Criação de Viagens:** Crie novas viagens especificando locais, datas e horários, garantindo um planejamento detalhado e completo.
- **Gerenciamento de Atividades:** Adicione e organize atividades em horários e dias específicos dentro de cada viagem, facilitando o planejamento diário.
- **Adicionar Links e Convidados:** Inclua links relevantes para a viagem e convide amigos ou familiares via e-mail para participar, tornando o planejamento uma experiência colaborativa.

## Casos de Uso:
- **Planejamento de Férias em Grupo:** Ideal para amigos ou famílias que desejam coordenar suas atividades e itinerários de forma integrada.

## Desafios e Soluções:
- **Segurança e Privacidade:** Embora ainda não implementadas, essas áreas estão em foco para futuras versões, visando proteger os dados dos usuários.
- **Coordenação entre Participantes:** A aplicação foi otimizada para facilitar a colaboração e a comunicação entre os membros do grupo, assegurando que todos estejam sempre na mesma página.

## Resultados e Métricas:
- **Satisfação do Usuário:** Feedback inicial indica alta satisfação entre os usuários, especialmente pela facilidade de uso e pela interface colaborativa.

O **Planner** se destaca como uma ferramenta essencial para qualquer grupo que deseja planejar viagens de forma organizada, colaborativa e eficiente, oferecendo funcionalidades completas e uma interface amigável que torna o processo de planejamento uma experiência agradável.
`,
    image: projectImage2,
  },
  {
    id: "3",
    name: "Reconstrução da posição 3D de um robô móvel",
    description:
      "Projeto para detecção de robôs em vídeos e reconstrução de sua posição 3D utilizando marcadores ARUCO.",
    full_description: `[![GitHub](https://img.shields.io/badge/GitHub-Reconstrucao--da--posicao--3D-242933?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Lipao12/Reconstrucao-da-posicao-3D-de-um-robo-movel)
    
O **Projeto de Reconstrução da Posição 3D de um Robô Móvel** visa detectar robôs em vídeos capturados por câmeras e reconstruir sua posição tridimensional no espaço. Utilizando marcadores ARUCO acoplados aos robôs, o sistema realiza a detecção em imagens 2D e reconstrói a posição 3D dos robôs com precisão. O projeto foi desenvolvido em **Python** e emprega técnicas avançadas de processamento de imagem e visão computacional para garantir uma análise eficaz e precisa das posições dos robôs.
    
## Funcionalidades Principais
- **Detecção de Robôs:** Utiliza marcadores ARUCO para identificar robôs em vídeos.
- **Reconstrução 3D:** Converte imagens 2D em dados tridimensionais precisos.
- **Processamento de Vídeo:** Analisa vídeos em tempo real para realizar a detecção e reconstrução.
    
## Tecnologias Utilizadas
- **Python:** Linguagem principal usada para o desenvolvimento do projeto.
- **Visão Computacional:** Técnicas avançadas para detecção e análise de imagens.
- **Marcadores ARUCO:** Utilizados para marcação e detecção precisa dos robôs.
    
## Desafios e Soluções
- **Precisão na Reconstrução:** Implementação de algoritmos sofisticados para garantir alta precisão na reconstrução 3D.`,
    image: projectImage3,
  },
  {
    id: "4",
    name: "Análise de Sentimento",
    description:
      "Aplicação web para análise de sentimentos em textos usando um modelo treinado, com frontend em TypeScript e backend em Python.",
    full_description: `[![GitHub](https://img.shields.io/badge/GitHub-sentiment--analysis-242933?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Lipao12/sentiment-analysis)
    
A **Análise de Sentimento** é uma aplicação web projetada para avaliar o tom e a emoção de textos inseridos pelos usuários. Utilizando um modelo de análise de sentimento baseado no \`DistilBERT\` da Hugging Face, ajustado com o **Trainer** da Hugging Face para garantir precisão, a aplicação oferece uma análise detalhada dos sentimentos expressos.

Desenvolvido com **TypeScript**, **Tailwind CSS** e **Framer**, o frontend proporciona uma interface moderna, interativa e responsiva. O uso de **Framer** permite animações suaves e uma experiência de usuário aprimorada. O backend, construído com **Python (Flask)**, assegura um processamento eficiente e ágil dos dados.

A aplicação classifica os textos em categorias de sentimento como positivo, negativo ou neutro, fornecendo uma ferramenta valiosa para analisar feedbacks, opiniões e qualquer outro tipo de dado textual que requer uma compreensão emocional detalhada.

## Principais Características:
- **Modelo de Sentimento:** Baseado em \`DistilBERT\` e ajustado com o **Trainer** da Hugging Face.
- **Frontend:** Desenvolvido com **TypeScript**, **Tailwind CSS** e **Framer** para uma interface moderna e responsiva.
- **Backend:** Implementado em **Python (Flask)** para processamento eficiente.
- **Funcionalidades:** Classificação de sentimentos em positivo, negativo ou neutro.

## Casos de Uso:
- **Monitoramento de Twitter:** Análise de opiniões e emoções em comentários do twit.

## Desafios e Soluções:
- **Precisão do Modelo:** Ajustes e validação contínuos para garantir a precisão do modelo de análise de sentimento.
- **Processamento em Tempo Real:** Otimização do backend para permitir análise em tempo real de grandes volumes de texto.
- **Datasets em Português:** Uma dificuldade significativa foi encontrar datasets de qualidade em português para realizar a tarefa de análise de sentimentos. 

## Resultados e Métricas:
- **Precisão do Modelo:** O modelo alcança uma precisão de 90% em benchmarks internos.

Esta aplicação é uma ferramenta poderosa para qualquer organização que necessite de insights emocionais a partir de dados textuais, oferecendo uma interface intuitiva e resultados precisos.`,
    image: projectImage4,
  },
];

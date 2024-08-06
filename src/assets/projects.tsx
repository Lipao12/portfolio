import projectImage2 from "./project-2.png";
import projectImage3 from "./project-3.png";
import projectImage4 from "./project-4.png";
import projectImage1 from "./project-5.jpeg";

export const projects = [
  {
    id: "1",
    name: "Projeto 1",
    description:
      "Projeto focado em [área/tecnologia], desenvolvido para demonstrar [objetivo/tecnologia].",
    full_description:
      "O **Projeto 1** é uma iniciativa desenvolvida para explorar e implementar [área/tecnologia]. Este projeto foi projetado para [explicar o propósito ou objetivo do projeto], utilizando [tecnologias/metodologias específicas]. A solução oferece [benefícios/resultados esperados] e demonstra [aspectos importantes do projeto].",
    image: projectImage1,
  },
  {
    id: "2",
    name: "Planner",
    description:
      "Aplicação web para gerenciamento de viagens, com login e edição de detalhes. Desenvolvida com TypeScript e Tailwind CSS no frontend e Python (Flask) com PostgreSQL no backend.",
    full_description:
      "O **Planner** é uma aplicação web que facilita a organização e gerenciamento de viagens. Após o login, os usuários podem visualizar suas viagens, criar novos planejamentos e modificar detalhes como datas e locais. A aplicação é desenvolvida com **TypeScript** e **Tailwind CSS** no frontend para garantir uma interface moderna e responsiva, enquanto o backend utiliza **Python (Flask)** e **PostgreSQL** para o gerenciamento de dados e lógica do servidor. O Planner oferece uma experiência colaborativa e intuitiva para a criação e gestão de itinerários de viagem, com funcionalidades robustas e uma interface amigável.",
    image: projectImage2,
  },
  {
    id: "3",
    name: "Reconstrução da posição 3D de um robô móvel",
    description:
      "Projeto para detecção de robôs em vídeos e reconstrução de sua posição 3D utilizando marcadores ARUCO.",
    full_description:
      "O **Projeto de Reconstrução da Posição 3D de um Robô Móvel** visa detectar robôs em vídeos capturados por câmeras e reconstruir sua posição tridimensional no espaço. Utilizando marcadores ARUCO acoplados aos robôs, o sistema realiza a detecção em imagens 2D e reconstrói a posição 3D dos robôs com precisão. O projeto foi desenvolvido em **Python** e emprega técnicas avançadas de processamento de imagem e visão computacional para garantir uma análise eficaz e precisa das posições dos robôs.",
    image: projectImage3,
  },
  {
    id: "4",
    name: "Análise de Sentimento",
    description:
      "Aplicação web para análise de sentimentos em textos usando um modelo treinado, com frontend em TypeScript e backend em Python.",
    full_description:
      "A **Análise de Sentimento** é uma aplicação web projetada para avaliar o tom e a emoção de textos inseridos pelos usuários. Utilizando um modelo de análise de sentimento baseado no **DistilBERT** da Hugging Face, ajustado com o **Trainer** da Hugging Face para resultados precisos, o projeto foi desenvolvido com **TypeScript**, **Tailwind CSS** e **Framer** no frontend para uma interface moderna e responsiva. O backend é implementado em **Python (Flask)** para processamento eficiente dos dados. A aplicação permite a classificação dos sentimentos dos textos em categorias como positivo, negativo ou neutro, oferecendo uma ferramenta eficaz para análise de feedback, opiniões e outras aplicações que exigem compreensão emocional.",
    image: projectImage4,
  },
];

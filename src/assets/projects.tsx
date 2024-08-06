import projectImage1 from "./project-1.png";
import projectImage2 from "./project-2.png";
import projectImage3 from "./project-3.png";
import projectImage4 from "./project-4.png";

export const projects = [
  {
    id: "1",
    name: "Gerador de Histórias a partir de Imagens",
    description:
      "Uma aplicação que transforma imagens em histórias utilizando Machine Learning. O sistema usa Flask para integração entre frontend e backend e modelos de ML para gerar textos e áudios.",
    full_description:
      "O **Gerador de Histórias a partir de Imagens** é um projeto inovador que converte imagens em histórias detalhadas usando técnicas de Machine Learning. A aplicação frontend, desenvolvida com React, se comunica com um backend em **Python (Flask)**. O fluxo inclui: obtenção de uma imagem aleatória via API Unsplash, conversão da imagem em texto com o modelo `Salesforce/blip-image-captioning-base`, criação de uma história com o modelo GPT-2, e conversão da história em áudio com o modelo `espnet/kan-bayashi_ljspeech_vits`. A solução é uma demonstração eficaz de como combinar modelos de ML para criar conteúdo multimodal a partir de imagens.",
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

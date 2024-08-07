import projectImage4 from "./project-4.png";
import {
  default as projectImage1,
  default as projectImage2,
} from "./project-6.jpeg";

export const projects = [
  {
    id: "1",
    name: "Gerador de Histórias a partir de Imagens",
    description:
      "Uma aplicação que transforma imagens em histórias utilizando Machine Learning. O sistema usa Flask para integração entre frontend e backend e modelos de ML para gerar textos e áudios.",
    full_description:
      "O **Gerador de Histórias a partir de Imagens** é um projeto inovador que converte imagens em histórias detalhadas usando técnicas de Machine Learning. A aplicação frontend, desenvolvida com React, se comunica com um backend em **Python (Flask)**. \n\n## Fluxo do Projeto\n\n - **Obtenção de Imagem**: A imagem é obtida aleatoriamente via API Unsplash ou feita o upload de uma imagem localmente.\n - **Conversão da Imagem em Texto**: Utiliza o modelo `Salesforce/blip-image-captioning-base` para gerar uma descrição textual da imagem.\n - **Criação de História**: A descrição textual é expandida em uma história completa usando o modelo GPT-2.\n - **Conversão de Texto em Áudio**: A história gerada é convertida em áudio utilizando o modelo `espnet/kan-bayashi_ljspeech_vits`.\n\nEssa solução demonstra de forma eficaz como combinar diferentes modelos de Machine Learning para criar conteúdo multimodal a partir de imagens.",
    image: projectImage1,
  },
  {
    id: "2",
    name: "Planner",
    description:
      "Aplicação web para gerenciamento de viagens, com login e edição de detalhes. Desenvolvida com TypeScript e Tailwind CSS no frontend e Python (Flask) com PostgreSQL no backend.",
    full_description: `O **Planner** é uma aplicação web que facilita a organização e gerenciamento de viagens, ideal para grupos de amigos. Após o login, os usuários podem visualizar suas viagens, criar novos planejamentos e modificar detalhes como datas e locais. As principais funcionalidades incluem:
- **Login:** Acesso personalizado para cada usuário.
- **Criação de Viagens:** Permite criar viagens especificando locais e intervalos de datas.
- **Gerenciamento de Atividades:** Adicione atividades em horários e dias específicos dentro de cada viagem.
- **Adicionar Links e Convidados:** Inclua links relevantes e convide amigos através de e-mails para participar da viagem.

A aplicação é desenvolvida com **TypeScript** e **Tailwind CSS** no frontend para garantir uma interface moderna e responsiva, enquanto o backend utiliza **Python (Flask)** e **PostgreSQL** para o gerenciamento de dados e lógica do servidor. Embora a segurança e privacidade ainda não tenham sido implementadas, o Planner oferece uma experiência colaborativa e intuitiva para a criação e gestão de itinerários de viagem, com funcionalidades robustas e uma interface amigável.`,
    image: projectImage2,
  },
  {
    id: "3",
    name: "Reconstrução da posição 3D de um robô móvel",
    description:
      "Projeto para detecção de robôs em vídeos e reconstrução de sua posição 3D utilizando marcadores ARUCO.",
    full_description: `O **Projeto de Reconstrução da Posição 3D de um Robô Móvel** visa detectar robôs em vídeos capturados por câmeras e reconstruir sua posição tridimensional no espaço. Utilizando marcadores ARUCO acoplados aos robôs, o sistema realiza a detecção em imagens 2D e reconstrói a posição 3D dos robôs com precisão. O projeto foi desenvolvido em **Python** e emprega técnicas avançadas de processamento de imagem e visão computacional para garantir uma análise eficaz e precisa das posições dos robôs.
    
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
    image: projectImage2,
  },
  {
    id: "4",
    name: "Análise de Sentimento",
    description:
      "Aplicação web para análise de sentimentos em textos usando um modelo treinado, com frontend em TypeScript e backend em Python.",
    full_description: `**Análise de Sentimento**

A **Análise de Sentimento** é uma aplicação web projetada para avaliar o tom e a emoção de textos inseridos pelos usuários. Utilizando um modelo de análise de sentimento baseado no **DistilBERT** da Hugging Face, ajustado com o **Trainer** da Hugging Face para garantir precisão, a aplicação oferece uma análise detalhada dos sentimentos expressos.

Desenvolvido com **TypeScript**, **Tailwind CSS** e **Framer**, o frontend proporciona uma interface moderna, interativa e responsiva. O uso de **Framer** permite animações suaves e uma experiência de usuário aprimorada. O backend, construído com **Python (Flask)**, assegura um processamento eficiente e ágil dos dados.

A aplicação classifica os textos em categorias de sentimento como positivo, negativo ou neutro, fornecendo uma ferramenta valiosa para analisar feedbacks, opiniões e qualquer outro tipo de dado textual que requer uma compreensão emocional detalhada.

## Principais Características:
- **Modelo de Sentimento:** Baseado em **DistilBERT** e ajustado com o **Trainer** da Hugging Face.
- **Frontend:** Desenvolvido com **TypeScript**, **Tailwind CSS** e **Framer** para uma interface moderna e responsiva.
- **Backend:** Implementado em **Python (Flask)** para processamento eficiente.
- **Funcionalidades:** Classificação de sentimentos em positivo, negativo ou neutro.`,
    image: projectImage4,
  },
];

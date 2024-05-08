import reactLogo from '../../assets/logo/tech-logos/react-logo.png';
import mongoLogo from '../../assets/logo/tech-logos/mongo-logo.png';

export const projects = [
  {
    title: "Infodesk - An Academic ERP System",
    tags: [
        { name: "Full-Stack", color: "#61dafb", textColor: "#000" },
        { name: "ERP System", color: "#264de4", textColor: "#fff" },
      ],
    body: "This is a short description of Project One.",
    detail:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    thumbnails: [
      {
        image: reactLogo,
        link: "https://example.com/project-one",
      },
      {
        image: mongoLogo,
        link: "https://example.com/project-one",
      },
    ],
  },
  {
    title: "Vehicle Detection and Flagging",
    tags: [
        { name: "Machine Learning", color: "#f7df1e", textColor: "#000" },
        { name: "Python", color: "#e34c26", textColor: "#fff" }, 
    ],
    body: "This is a longer description of Project Two. It goes into some detail about the project and provides additional context.",
    detail:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    carousel:[
      {
        carouselImage:"https://images.unsplash.com/photo-1714886772771-c5b602e9e553?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        carouselText: "Basic Implementation of Something",
      },
      {
        carouselImage:"https://plus.unsplash.com/premium_photo-1714146015335-1ee8eefa9bc4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        carouselText: "Not so Basic Implementation of Something",
      }
    ],
  },
  {
    title: "Aakar 2023 College Fest Website",
    tags: [
        { name: "Full Stack", color: "#61dafb", textColor: "#000" },
        { name: "Laravel", color: "#640D6B", textColor: "#fff" }, 
    ],
    body: "This is a longer description of Project Two. It goes into some detail about the project and provides additional context.",
    detail:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    carousel:[
      {
        carouselImage:"https://images.unsplash.com/photo-1714886772771-c5b602e9e553?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        carouselText: "Basic Implementation of Something",
      },
      {
        carouselImage:"https://plus.unsplash.com/premium_photo-1714146015335-1ee8eefa9bc4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        carouselText: "Not so Basic Implementation of Something",
      }
    ],
  },
];
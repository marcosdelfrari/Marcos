import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  items = [
    {
      image: './assets/imgs/somoslp.png',
      title: 'Somos Claims Management',
      description: 'Desenvolvi o site Somos por conta própria, desde o início até a conclusão. Realizei ajustes e melhorias contínuas e integrei um sistema de tradução com o Strapi. A colaboração permitiu que o site se tornasse abrangente e multilíngue. Orgulho-me de ter contribuído para esse projeto e sua evolução.',
      tech: 'Angular 9 & Strapi',
      live: 'https://somos.us/en-US',
      repo: ''
    }, {
      image: './assets/imgs/task.png',
      title: 'Task Sync',
      description: 'App de lista de tarefas em Angular com recursos avançados: adição, edição, marcação de concluídas e exclusão de tarefas. Interface interativa e responsiva, oferecendo uma experiência intuitiva. Desenvolvimento ágil e escalável com arquitetura modular e orientada a componentes.',
      tech: 'Angular 9',
      live: 'https://playful-sherbet-d1b2d1.netlify.app/',
      repo: 'https://github.com/marcosdelfrari/TaskSync'
    }, {
      image: './assets/imgs/cp.png',
      title: 'Client Portal',
      description: 'No projeto em Angular 9, participei do desenvolvimento de um portal de cliente genérico. Contribuí na resolução de problemas e implementação de tarefas relacionadas ao SCSS. Garanti que o sistema atendesse às demandas estéticas e de usabilidade dos clientes. Colaborando com a equipe, compartilhei conhecimentos e propus soluções eficientes.',
      tech: 'Angular 9',
      live: 'https://test-cp.somos.us/auth/login',
      repo: ''
    }, {
      image: './assets/imgs/tempo.png',
      title: 'Clima Tempo',
      description: 'Projeto Angular de clima com interface interativa. Vinculação de [(ngModel)] ao input city. Disparo da função searchWeather() no evento (click). O serviço WeatherService utiliza HttpClient para chamadas à API, com apiKey armazenada. O método getWeather retorna um Observable com a resposta da chamada HTTP.',
      tech: 'Angular 9 ',
      live: 'https://creative-frangipane-b5922a.netlify.app/',
      repo: 'https://github.com/marcosdelfrari/ClimaTempo'
    }

  ];

  words = [
    {
      image: './assets/imgs/pg.png',
      title: 'Pogust Goodhead',
      description: 'No projeto em WordPress, utilizei o Elementor para criar um site funcional para um escritório britânico. Implementei um recurso multilíngue para atender a um público internacional. Trabalhei em estreita colaboração com a equipe, garantindo o alinhamento do design e estrutura com a identidade da marca. Satisfeito com o resultado final e orgulhoso de ter contribuído para o sucesso do site.',
      tech: 'Wordpress & Elementor',
      live: 'https://pogustgoodhead.com/',
    }, {
      image: './assets/imgs/mm.png',
      title: 'Mousinho & Martins',
      description: 'Desenvolvi um site funcional para um escritório britânico usando o Elementor no projeto em WordPress. Recurso multilíngue implementado para alcance internacional. Colaboração estreita para garantir design alinhado à identidade da marca. Satisfeito com o resultado e orgulhoso da contribuição ao sucesso do site.',
      tech: 'Wordpress & Elementor',
      live: 'https://test.mousinhomartins.com/',
    },
    {
      image: './assets/imgs/diesel.png',
      title: 'My Diesel Claim',
      description: 'Utilizei o Elementor no projeto WordPress para criar um site funcional para escritório britânico. Recurso multilíngue implementado para audiência global. Colaboração próxima para alinhar design e estrutura à identidade da marca. Satisfação com o resultado final e orgulho na contribuição ao sucesso do site.',
      tech: 'Wordpress & Elementor',
      live: 'https://mydieselclaim.com',
    },
    {
      image: './assets/imgs/nhs.png',
      title: 'NHS Lothian',
      description: 'No projeto WordPress, criei um site funcional para escritório britânico usando o Elementor. Recurso multilíngue para audiência internacional. Colaboração estreita para alinhar design e estrutura à identidade da marca. Satisfação com o resultado e orgulho de ter contribuído para o sucesso do site.',
      tech: 'Wordpress & Elementor',
      live: 'https://mydieselclaim.com',
    }, {
      image: './assets/imgs/mercedes.png',
      title: 'Mercedes Diesel',
      description: 'Desenvolvi um site funcional para um escritório britânico no projeto WordPress, utilizando o Elementor. Implementei recurso multilíngue para público internacional. Colaboração próxima para garantir alinhamento de design e estrutura com a identidade da marca. Satisfeito com o resultado final e orgulhoso da contribuição para o sucesso do site.',
      tech: 'Wordpress & Elementor',
      live: 'https://mercedesclaimlawyers.com/',
    }, {
      image: './assets/imgs/mariana.png',
      title: 'Caso Mariana',
      description: 'No projeto WordPress, utilizei o Elementor para criar um site funcional para escritório britânico. Recurso multilíngue implementado para audiência internacional. Colaboração próxima garantiu alinhamento de design e estrutura com a identidade da marca. Satisfeito com o resultado e orgulhoso por contribuir para o sucesso do site.',
      tech: 'Wordpress & Elementor',
      live: 'https://casoinglesmariana.com.br/',
    }, {
      image: './assets/imgs/zech.png',
      title: 'Zech',
      description: 'Desenvolvi o site ZECH, usando WordPress e Elementor, seguindo o design do Figma. Destaquei os recursos de proteção familiar de forma envolvente, com interface intuitiva. Alinhado com a identidade da marca, entreguei um site eficaz, promovendo tranquilidade e segurança às famílias. ',
      tech: 'Wordpress & Elementor',
      live: 'https://zech.com.br/',
    },
  ];

  itemfg = [
    {
      image: './assets/imgs/pg.png',
      title: 'Pogust Goodhead',
      description: 'No projeto em WordPress, utilizei o Elementor para criar um site funcional para um escritório britânico. Implementei um recurso multilíngue para atender a um público internacional. Trabalhei em estreita colaboração com a equipe, garantindo o alinhamento do design e estrutura com a identidade da marca. Satisfeito com o resultado final e orgulhoso de ter contribuído para o sucesso do site.',
      live: 'https://pogustgoodhead.com/',
    },
  ]
}

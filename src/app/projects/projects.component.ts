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
    }, {
      image: './assets/imgs/mm.png',
      title: 'Mousinho & Martins',
      description: 'Desenvolvi uma landing page avançada em Angular 9 para o escritório Mousinho & Martins. O objetivo era fornecer uma experiência envolvente aos visitantes, transmitindo profissionalismo e destacando os serviços oferecidos pelo escritório. O resultado é uma landing page sofisticada e eficaz em atrair e envolver os usuários.',
      tech: 'Angular 9 ',
      live: 'https://test.mousinhomartins.com/',
    },

  ];

  words = [
    {
      image: './assets/imgs/zech.png',
      title: 'Zech',
      description: 'Desenvolvi o site ZECH, usando WordPress e Elementor, seguindo o design do Figma. Destaquei os recursos de proteção familiar de forma envolvente, com interface intuitiva. Alinhado com a identidade da marca, entreguei um site eficaz, promovendo tranquilidade e segurança às famílias. ',
      tech: 'Wordpress & Elementor',
      live: 'https://zech.com.br/',
    }, {
      image: './assets/imgs/pg.png',
      title: 'Pogust Goodhead',
      description: 'Desenvolvi um site funcional no WordPress utilizando o Elementor, seguindo fielmente o design do Figma, e implementei recursos multilíngues para atender a um público internacional. Trabalhei em colaboração com a equipe para garantir o alinhamento do design e estrutura, resultando em um site de sucesso.',
      tech: 'Wordpress & Elementor',
      live: 'https://pogustgoodhead.com/',
    },
    {
      image: './assets/imgs/diesel.png',
      title: 'My Diesel Claim',
      description: 'Utilizei o Elementor no WordPress para criar um site seguindo o design detalhado no Figma. Integrei recursos multilíngues para alcançar um público global. Trabalhando em equipe, assegurei que o design e a estrutura estivessem alinhados, resultando em um site bem-sucedido.',
      tech: 'Wordpress & Elementor',
      live: 'https://mydieselclaim.com',
    },
    {
      image: './assets/imgs/nhs.png',
      title: 'NHS Lothian',
      description: 'Desenvolvi um site no WordPress usando o Elementor, respeitando rigorosamente o design definido no Figma. Adicionei recursos multilíngues para atender a um público internacional. Colaborei com a equipe para garantir a integração perfeita do design e da estrutura, alcançando um resultado final satisfatório.',
      tech: 'Wordpress & Elementor',
      live: 'https://mydieselclaim.com',
    }, {
      image: './assets/imgs/mercedes.png',
      title: 'Mercedes Diesel',
      description: 'No projeto em WordPress, utilizei o Elementor para implementar um site, seguindo cuidadosamente o design proposto no Figma. Integrei recursos multilíngues para atingir um público diversificado. Trabalhei em estreita colaboração com a equipe, garantindo que o design e a estrutura estivessem alinhados e obtendo um resultado final de sucesso.',
      tech: 'Wordpress & Elementor',
      live: 'https://mercedesclaimlawyers.com/',
    }, {
      image: './assets/imgs/mariana.png',
      title: 'Caso Mariana',
      description: 'Desenvolvi um site no WordPress utilizando o Elementor, seguindo fielmente o design do Figma. Implementei recursos multilíngues para alcançar uma audiência internacional. Colaborei de perto com a equipe para garantir o alinhamento do design e da estrutura, resultando em um site de destaque.',
      tech: 'Wordpress & Elementor',
      live: 'https://casoinglesmariana.com.br/',
    }
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

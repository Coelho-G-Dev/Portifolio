document.addEventListener('DOMContentLoaded', () => {

    const translations = {
        en: {
            pageTitle: "Gabriel Coelho - Backend Developer",
            navAbout: "About", navSkills: "Skills", navProjects: "Projects", navContact: "Contact", navExperience: "Experience",
            heroTitle: "Hello, I'm ",
            heroSubtitle: "Undergraduate in Science and Technology (UFMA) | Back-End Developer passionate about creating robust, scalable, and secure APIs with Node.js, Express, and MongoDB..",
            competenciesTitle: "Core Competencies",
            skillsTitle1: "My", skillsTitle2: "Skills",
            skillsSubtitle: "The technologies and tools I use in my daily life to create efficient solutions.",
            skillsCat1: "Languages", skillsCat2: "Frameworks & Libraries", skillsCat3: "Databases", skillsCat4: "Tools & DevOps",
            projectsTitle1: "My", projectsTitle2: "Projects",
            projectsSubtitle: "Personal and academic projects that demonstrate my technical skills and creativity.",
            experienceTitle1: "My", experienceTitle2: "Experience",
            experienceSubtitle: "Soon, my professional journey.",
            contactTitle1: "Let's", contactTitle2: "Talk",
            contactSubtitle: "Interested in collaborating or have a question? Get in touch!",
            contactEmail: "Email", contactLocation: "Location",
            footerDescription: "Developer passionate about creating innovative and impactful solutions. Always looking for new challenges and technologies.",
            footerNavTitle: "Navigation", footerConnectTitle: "Connect", footerCta: "Available for interesting opportunities and projects.",
            modalBack: "Back to projects", modalGithubBtn: "View on GitHub",
            modalGallery: "Project Gallery", modalSummary: "Project Summary", modalChallenges: "Challenges and Solutions", modalLearnings: "Lessons Learned",
            modalTech: "Technologies Used", modalFeatures: "Main Features", modalInfo: "Project Information",
            projectCardFooter: "Click to see details",
            statusCompleted: "Completed", statusInProgress: "In development",
        },
        pt: {
            pageTitle: "Gabriel Coelho - Desenvolvedor Back-End",
            navAbout: "Sobre", navSkills: "Habilidades", navProjects: "Projetos", navContact: "Contato", navExperience: "Experiência",
            heroTitle: "Olá, eu sou ",
            heroSubtitle: "Graduando em Ciências e Tecnologia (UFMA) | Desenvolvedor Back-End apaixonado por criar APIs robustas, escaláveis e seguras com Node.js, Express e MongoDB.",
            competenciesTitle: "Principais Competências",
            skillsTitle1: "Minhas", skillsTitle2: "Habilidades",
            skillsSubtitle: "As tecnologias e ferramentas que utilizo no meu dia a dia para criar soluções eficientes.",
            skillsCat1: "Linguagens", skillsCat2: "Frameworks & Bibliotecas", skillsCat3: "Bancos de Dados", skillsCat4: "Ferramentas & DevOps",
            projectsTitle1: "Meus", projectsTitle2: "Projetos",
            projectsSubtitle: "Projetos pessoais e acadêmicos que demonstram minhas habilidades técnicas e criatividade.",
            experienceTitle1: "Minha", experienceTitle2: "Experiência",
            experienceSubtitle: "Em breve, minha trajetória profissional.",
            contactTitle1: "Vamos", contactTitle2: "Conversar",
            contactSubtitle: "Interessado em colaborar ou tem alguma pergunta? Entre em contato!",
            contactEmail: "Email", contactLocation: "Localização",
            footerDescription: "Desenvolvedor apaixonado por criar soluções inovadoras e impactantes. Sempre em busca de novos desafios e tecnologias.",
            footerNavTitle: "Navegação", footerConnectTitle: "Conecte-se", footerCta: "Disponível para oportunidades e projetos interessantes.",
            modalBack: "Voltar aos projetos", modalGithubBtn: "Ver no GitHub",
            modalGallery: "Galeria do Projeto", modalSummary: "Resumo do Projeto", modalChallenges: "Desafios e Soluções", modalLearnings: "Lições Aprendidas",
            modalTech: "Tecnologias Utilizadas", modalFeatures: "Principais Funcionalidades", modalInfo: "Informações do Projeto",
            projectCardFooter: "Clique para ver detalhes",
            statusCompleted: "Concluído", statusInProgress: "Em desenvolvimento",
        }
    };
    const portfolioData = {
        typingEffect: {
            pt: ["Gabriel Coelho", "Desenvolvedor Back-End", "Criador de APIs"],
            en: ["Gabriel Coelho", "Backend Developer", "API Creator"]
        },
        projects: [
            {
                id: 1,
                title: { pt: "BuscaSUS – API de Acesso a Serviços de Saude ", en: "BuscaSUS – Health Services Access API" },
                status: { pt: "Concluído", en: "Completed" },
                description: { pt: "Sistema back-end que integra dados públicos e a Google Maps Platform para oferecer informações geolocalizadas sobre serviços essenciais como saúde, cultura e educação.", en: "Back-end system that integrates public data and Google Maps Platform to provide geolocated information about essential services such as healthcare, culture, and education." },
                technologies: ["Node.js", "Express", "MongoDB", "Render", "JWT", "Google Maps API", "Swagger"],
                features: { 
                    pt: ["Integração com APIs governamentais", "Geolocalização com Google Maps", "Autenticação via JWT e Google/GitHub OAuth"],
                    en: ["Integration with government APIs", "Geolocation with Google Maps", "Authentication via JWT and Google/GitHub OAuth"]
                },
                summary: { pt: "Uma API robusta e documentada para facilitar o acesso da população a serviços públicos essenciais por meio da geolocalização e da integração com plataformas confiáveis.", en: "A robust and well-documented API to make public services more accessible through geolocation and integration with reliable platforms." },
                challenges: { pt: "Padronizar dados de APIs externas, implementar autenticação com múltiplos provedores e integrar de forma fluida a Google Maps Platform foram os maiores desafios.", en: "Standardizing data from external APIs, implementing multi-provider authentication, and seamlessly integrating the Google Maps Platform were the biggest challenges." },
                learnings: { pt: "Aprofundei conhecimentos em integrações REST, autenticação segura, documentação com Swagger, arquitetura de microsserviços e modelagem com MongoDB.", en: "I deepened my knowledge in REST integrations, secure authentication, Swagger documentation, microservices architecture, and MongoDB modeling." },
                githubLink: "https://github.com/Coelho-G-Dev/Desafio-05-Back-End",
                images: ["assets/Busca Sus-Swagger.png", "assets/code-controler.png", "assets/code-placespng.png"]
            },
            {
                "id": 2,
                "title": { "pt": "Guia Maranhão – API de Serviços Públicos", "en": "Guia Maranhão – Public Services API" },
                "status": { "pt": "Em desenvolvimento", "en": "In development" },
                "description": { "pt": "Projeto Full-Stack para centralizar e facilitar o acesso a informações sobre serviços públicos no estado do Maranhão. A fase atual foca no desenvolvimento de uma API RESTful robusta, integrando dados do IBGE e a Google Maps Platform.", "en": "Full-Stack project to centralize and facilitate access to information about public services in the state of Maranhão. The current phase focuses on developing a robust RESTful API, integrating data from IBGE and the Google Maps Platform." },
                "technologies": ["Node.js", "Express", "MongoDB", "Mongoose", "JWT", "Google Maps API", "Swagger"],
                "features": { 
                    "pt": ["Integração com a API de localidades do IBGE", "Geolocalização e busca de locais com Google Places API", "Autenticação de usuários com JSON Web Tokens (JWT)", "Arquitetura resiliente com fallback para dados locais"],
                    "en": ["Integration with IBGE's locations API", "Geolocation and location search with Google Places API", "User authentication with JSON Web Tokens (JWT)", "Resilient architecture with local data fallback"]
                },
                "summary": { "pt": "Este projeto consiste em uma API robusta, documentada e resiliente, focada em facilitar o acesso da população maranhense a serviços públicos essenciais através da geolocalização.", "en": "This project consists of a robust, documented, and resilient API focused on facilitating access for the population of Maranhão to essential public services through geolocation." },
                "challenges": { "pt": "Os principais desafios incluem a implementação de uma arquitetura resiliente que funcione offline, a padronização de dados de diferentes fontes (IBGE, Google) e a garantia da segurança das rotas autenticadas.", "en": "The main challenges include implementing a resilient architecture that works offline, standardizing data from different sources (IBGE, Google), and ensuring the security of authenticated routes." },
                "learnings": { "pt": "Aprofundei conhecimentos em arquitetura de APIs RESTful com Node.js, modelagem de dados com Mongoose, estratégias de fallback para serviços externos, e autenticação segura com JWT.", "en": "I deepened my knowledge in RESTful API architecture with Node.js, data modeling with Mongoose, fallback strategies for external services, and secure authentication with JWT." },
                "githubLink": "https://github.com/Coelho-G-Dev/Guia-Maranhao",
                "images": ["assets/code-guia01.png", "assets/guia-02.png"]
            }
        ]
    };

    const LanguageSwitcher = {
        currentLang: 'pt',
        init() {
            this.langToggleButton = document.getElementById('lang-toggle');
            this.langToggleMobileButton = document.getElementById('lang-toggle-mobile'); 
            this.loadLanguage();
            this.addEventListeners();
        },
        loadLanguage() {
            const savedLang = localStorage.getItem('language') || 'pt';
            this.setLanguage(savedLang);
        },
        setLanguage(lang) {
            this.currentLang = lang;
            localStorage.setItem('language', lang);
            document.documentElement.lang = lang;
            
            const langText = lang.toUpperCase();
            if (this.langToggleButton) this.langToggleButton.querySelector('span').textContent = langText;
            if (this.langToggleMobileButton) this.langToggleMobileButton.querySelector('span').textContent = langText; 
            
            this.applyTranslations();
        },
        applyTranslations() {
            const elements = document.querySelectorAll('[data-lang-key]');
            elements.forEach(el => {
                const key = el.dataset.langKey;
                if (translations[this.currentLang] && translations[this.currentLang][key]) {
                    el.innerHTML = translations[this.currentLang][key];
                }
            });
            ProjectManager.renderProjects();
            Animations.initTypingEffect();
        },
        addEventListeners() {
            const toggleLang = () => {
                const newLang = this.currentLang === 'pt' ? 'en' : 'pt';
                this.setLanguage(newLang);
            };
            if (this.langToggleButton) this.langToggleButton.addEventListener('click', toggleLang);
            if (this.langToggleMobileButton) this.langToggleMobileButton.addEventListener('click', toggleLang); 
        }
    };

    const Navigation = {
        init() {
            this.handleHamburgerMenu();
            this.handleThemeToggle();
            this.handleActiveLinkOnScroll();
        },
        handleHamburgerMenu() {
            const hamburger = document.querySelector('.hamburger');
            const navMenu = document.querySelector('.nav-menu');
            const navLinks = document.querySelectorAll('.nav-link');
            const body = document.body;
            if (!hamburger || !navMenu) return;

            const closeMenu = () => {
                navMenu.classList.remove('active');
                hamburger.querySelector('i').classList.add('fa-bars');
                hamburger.querySelector('i').classList.remove('fa-times');
                body.classList.remove('no-scroll');
            };

            const openMenu = () => {
                navMenu.classList.add('active');
                hamburger.querySelector('i').classList.remove('fa-bars');
                hamburger.querySelector('i').classList.add('fa-times');
                body.classList.add('no-scroll');
            };

            hamburger.addEventListener('click', () => {
                if (navMenu.classList.contains('active')) {
                    closeMenu();
                } else {
                    openMenu();
                }
            });

            navLinks.forEach(link => {
                link.addEventListener('click', closeMenu);
            });

            window.addEventListener('resize', () => {
                if (window.innerWidth > 768) {
                    closeMenu();
                }
            });
        },
        handleThemeToggle() {
            const themeToggleButton = document.getElementById('theme-toggle');
            const themeToggleMobileButton = document.getElementById('theme-toggle-mobile'); 

            const applyTheme = (theme) => {
                document.body.classList.toggle('light-theme', theme === 'light');
                const iconClass = theme === 'light' ? 'fa-moon' : 'fa-sun';
                if (themeToggleButton) themeToggleButton.querySelector('i').className = `fas ${iconClass}`;
                if (themeToggleMobileButton) themeToggleMobileButton.querySelector('i').className = `fas ${iconClass}`; 
            };
            
            const toggleTheme = () => {
                const newTheme = document.body.classList.contains('light-theme') ? 'dark' : 'light';
                localStorage.setItem('theme', newTheme);
                applyTheme(newTheme);
            };

            if (themeToggleButton) themeToggleButton.addEventListener('click', toggleTheme);
            if (themeToggleMobileButton) themeToggleMobileButton.addEventListener('click', toggleTheme); 
            
            const savedTheme = localStorage.getItem('theme') || 'dark';
            applyTheme(savedTheme);
        },
        handleActiveLinkOnScroll() {
            const sections = document.querySelectorAll('.section');
            const navLinks = document.querySelectorAll('.nav-link');
            const header = document.querySelector('.header');
            if (sections.length === 0 || navLinks.length === 0 || !header) return;
            const headerHeight = header.offsetHeight;
            const updateActiveLink = () => {
                const scrollY = window.scrollY;
                let activeSectionId = '';
                sections.forEach(section => {
                    const sectionTop = section.offsetTop - headerHeight - 5;
                    if (scrollY >= sectionTop) {
                        activeSectionId = section.getAttribute('id');
                    }
                });
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${activeSectionId}`) {
                        link.classList.add('active');
                    }
                });
            };
            window.addEventListener('scroll', updateActiveLink);
            updateActiveLink();
        }
    };

    const Animations = {
        currentTypingTimeout: null,
        init() {
            this.initTypingEffect();
            this.initScrollReveal();
        },
        initTypingEffect() {
            const typingTextSpan = document.querySelector('.typing-text');
            if (!typingTextSpan) return;
            clearTimeout(this.currentTypingTimeout);
            typingTextSpan.textContent = '';
            const textArray = portfolioData.typingEffect[LanguageSwitcher.currentLang];
            const type = (textArrayIndex = 0, charIndex = 0) => {
                if (charIndex < textArray[textArrayIndex].length) {
                    typingTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
                    this.currentTypingTimeout = setTimeout(() => type(textArrayIndex, charIndex + 1), 150);
                } else {
                    this.currentTypingTimeout = setTimeout(() => erase(textArrayIndex, charIndex), 2000);
                }
            };
            const erase = (textArrayIndex, charIndex) => {
                if (charIndex > 0) {
                    typingTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
                    this.currentTypingTimeout = setTimeout(() => erase(textArrayIndex, charIndex - 1), 100);
                } else {
                    const nextIndex = (textArrayIndex + 1) % textArray.length;
                    this.currentTypingTimeout = setTimeout(() => type(nextIndex, 0), 500);
                }
            };
            type();
        },
        initScrollReveal() {
            const revealObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.15 });
            document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
        }
    };

    const ProjectManager = {
        currentProject: null,
        currentImageIndex: 0,
        init() {
            this.projectsGrid = document.querySelector('.projetos-grid-new');
            this.modal = document.getElementById('project-modal');
            if (!this.projectsGrid || !this.modal) return;
            this.addEventListeners();
        },
        renderProjects() {
            if (!this.projectsGrid) return;
            this.projectsGrid.innerHTML = '';
            portfolioData.projects.forEach((project) => {
                const lang = LanguageSwitcher.currentLang;
                const card = document.createElement('div');
                card.className = 'project-card-new reveal';
                card.dataset.projectId = project.id;
                const statusText = project.status[lang];
                const statusClass = statusText.toLowerCase().includes('concluído') || statusText.toLowerCase().includes('completed') ? 'concluido' : 'em-desenvolvimento';
                card.innerHTML = `
                    <div class="project-card-header">
                        <div class="project-card-header-top">
                            <h3><i class="fas fa-code-branch"></i> ${project.title[lang]}</h3>
                            <i class="fas fa-external-link-alt"></i>
                        </div>
                        <span class="status-badge ${statusClass}">${statusText}</span>
                    </div>
                    <div class="project-card-body"><p>${project.description[lang]}</p></div>
                    <div class="project-card-footer">${translations[lang].projectCardFooter} →</div>
                `;
                this.projectsGrid.appendChild(card);
            });
            Animations.initScrollReveal();
        },
        openModal(projectId) {
            const project = portfolioData.projects.find(p => p.id == projectId);
            if (!project) return;
            this.currentProject = project;
            const lang = LanguageSwitcher.currentLang;
            this.modal.querySelector('#modal-project-title').textContent = project.title[lang];
            const statusBadge = this.modal.querySelector('#modal-project-status');
            statusBadge.textContent = project.status[lang];
            statusBadge.className = `status-badge ${project.status[lang].toLowerCase().includes('concluído') || project.status[lang].toLowerCase().includes('completed') ? 'concluido' : 'em-desenvolvimento'}`;
            this.modal.querySelector('#modal-project-description').textContent = project.description[lang];
            this.modal.querySelector('#modal-github-link').href = project.githubLink;
            this.modal.querySelector('#modal-summary').textContent = project.summary[lang];
            this.modal.querySelector('#modal-challenges').textContent = project.challenges[lang];
            this.modal.querySelector('#modal-learnings').textContent = project.learnings[lang];
            this.modal.querySelector('#modal-tech-tags').innerHTML = project.technologies.map(tech => `<span>${tech}</span>`).join('');
            this.modal.querySelector('#modal-features-list').innerHTML = project.features[lang].map(feat => `<li>${feat}</li>`).join('');
            this.modal.querySelector('#modal-info-list').innerHTML = `
                <li><strong>Status:</strong> <span class="status-badge ${statusBadge.className.includes('concluido') ? 'concluido' : 'em-desenvolvimento'}">${project.status[lang]}</span></li>
                <li><strong>Repositório:</strong> <a href="${project.githubLink}" target="_blank">GitHub <i class="fas fa-external-link-alt"></i></a></li>
            `;
            this.currentImageIndex = 0;
            this.updateGallery();
            this.modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        },
        closeModal() {
            this.modal.classList.remove('active');
            document.body.style.overflow = '';
        },
        updateGallery() {
            if (!this.currentProject) return;
            this.modal.querySelector('#gallery-current-image').src = this.currentProject.images[this.currentImageIndex];
            this.modal.querySelector('#gallery-counter').textContent = `${this.currentImageIndex + 1}/${this.currentProject.images.length}`;
            const thumbnailsContainer = this.modal.querySelector('#gallery-thumbnails');
            thumbnailsContainer.innerHTML = this.currentProject.images.map((imgSrc, index) => `<img src="${imgSrc}" alt="Thumbnail ${index + 1}" data-index="${index}" class="${index === this.currentImageIndex ? 'active' : ''}">`).join('');
        },
        addEventListeners() {
            this.projectsGrid.addEventListener('click', e => {
                const card = e.target.closest('.project-card-new');
                if (card) this.openModal(card.dataset.projectId);
            });
            this.modal.querySelector('#modal-close-btn').addEventListener('click', () => this.closeModal());
            this.modal.querySelector('#modal-back-btn').addEventListener('click', e => { e.preventDefault(); this.closeModal(); });
            this.modal.addEventListener('click', e => { if (e.target === this.modal) this.closeModal(); });
            this.modal.querySelector('.gallery').addEventListener('click', e => {
                if (!this.currentProject) return;
                const totalImages = this.currentProject.images.length;
                if (e.target.closest('.next')) {
                    this.currentImageIndex = (this.currentImageIndex + 1) % totalImages;
                } else if (e.target.closest('.prev')) {
                    this.currentImageIndex = (this.currentImageIndex - 1 + totalImages) % totalImages;
                } else if (e.target.matches('.gallery-thumbnails img')) {
                    this.currentImageIndex = parseInt(e.target.dataset.index);
                } else {
                    return;
                }
                this.updateGallery();
            });
        }
    };

    Navigation.init();
    ProjectManager.init();
    LanguageSwitcher.init();
    Animations.init();
});
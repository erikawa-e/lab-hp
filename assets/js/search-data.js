
const currentUrl = window.location.href;
const siteUrl = "https://erikawa-e.github.io"; 
let updatedUrl = currentUrl.replace("https://erikawa-e.github.io/lab-hp", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "/lab-hp", "");
}
if ("".length > 0) {
  updatedUrl = updatedUrl.replace("/", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation menu",
    handler: () => {
      window.location.href = "/lab-hp/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "Lab news and updates",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/lab-hp/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/lab-hp/publications/";
          },
        },{id: "nav-presentations",
          title: "presentations",
          description: "Oral and poster presentations.",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/lab-hp/presentations/";
          },
        },{id: "nav-people",
          title: "people",
          description: "Members of the FEBQI research team",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/lab-hp/people/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/lab-hp/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Edit the `_data/repositories.yml` and change the `github_users` and `github_repos` lists to include your own GitHub profile and repositories.",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/lab-hp/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Curriculum Vitae — Erika Kawakami",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/lab-hp/cv/";
          },
        },{id: "nav-outreach",
          title: "outreach",
          description: "Review &amp; tutorial articles, public lectures, and more",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/lab-hp/outreach/";
          },
        },{id: "nav-access",
          title: "access",
          description: "How to find us",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/lab-hp/access/";
          },
        },{id: "post-",
        
          title: "",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/lab-hp/blog/2026/2021-11-04-yappari-butsuri/";
          
        },
      },{id: "post-hochan-chung-receives-best-bachelor-39-s-thesis-award",
        
          title: "Hochan Chung receives Best Bachelor&#39;s Thesis Award",
        
        description: "Hochan Chung receives Best Bachelor&#39;s Thesis Award",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/lab-hp/blog/2026/hochan-award/";
          
        },
      },{id: "post-happy-80th-birthday-oleksiy",
        
          title: "Happy 80th birthday, Oleksiy!",
        
        description: "Celebrating birthdays in the lab",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/lab-hp/blog/2026/birthdays/";
          
        },
      },{id: "post-plasmon-paper-posted-on-arxiv",
        
          title: "Plasmon paper posted on arXiv",
        
        description: "Our plasmon paper is now on arXiv",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/lab-hp/blog/2026/plasmon-arxiv/";
          
        },
      },{id: "post-our-review-article-on-quantum-computing-published-in-a-french-alumni-magazine",
        
          title: "Our Review Article on Quantum Computing Published in a French Alumni Magazine",
        
        description: "Review article by Yamada, Giovansili, and Kawakami published in French alumni magazine",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/lab-hp/blog/2026/french-review-article/";
          
        },
      },{id: "post-poster-award-and-prl-paper-featured-in-riken-research-news",
        
          title: "Poster award and PRL paper featured in RIKEN Research News",
        
        description: "Poster award and PRL paper featured in RIKEN Research News",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/lab-hp/blog/2026/poster-award-prl-news/";
          
        },
      },{id: "post-international-collaborative-project",
        
          title: "International collaborative project",
        
        description: "JST ASPIRE project selected for international collaboration",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/lab-hp/blog/2025/jst-aspire/";
          
        },
      },{id: "post-tetsu-39-s-farewell-party",
        
          title: "Tetsu&#39;s farewell party",
        
        description: "Farewell party for Tetsuyoshi Yamada",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/lab-hp/blog/2025/tetsu-farewell/";
          
        },
      },{id: "post-great-news-to-share",
        
          title: "Great News to Share",
        
        description: "PRL paper selected as Editors&#39; Suggestion and poster award at LT30",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/lab-hp/blog/2025/prl-editors-suggestion/";
          
        },
      },{id: "post-new-cryogenic-microwave-source-developed-using-a-tunnel-diode-oscillator",
        
          title: "New cryogenic microwave source developed using a tunnel diode oscillator",
        
        description: "New cryogenic microwave source developed using a tunnel diode oscillator",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/lab-hp/blog/2024/tdo-paper/";
          
        },
      },{id: "post-sander-39-s-farewell-party",
        
          title: "Sander&#39;s Farewell party",
        
        description: "Farewell party for Sander van Haagen",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/lab-hp/blog/2024/sander-farewell/";
          
        },
      },{id: "post-fcp-workshop-at-oist",
        
          title: "FCP workshop at OIST",
        
        description: "Team presents at quantum technology workshop at OIST",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/lab-hp/blog/2024/fcp-workshop-oist/";
          
        },
      },{id: "post-team-photo-april-2024",
        
          title: "Team photo, April 2024",
        
        description: "FEBQI team photo, April 2024",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/lab-hp/blog/2024/team-photo/";
          
        },
      },{id: "post-cherry-blossoms-burst-into-bloom-at-riken",
        
          title: "Cherry blossoms burst into bloom at RIKEN",
        
        description: "Spring cherry blossoms at RIKEN Wako campus",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/lab-hp/blog/2024/cherry-blossoms-2024/";
          
        },
      },{id: "post-our-article-was-featured-in-research-news",
        
          title: "Our article was featured in Research News!",
        
        description: "Research paper featured in RIKEN Research News",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/lab-hp/blog/2024/research-news/";
          
        },
      },{id: "post-xianjing-39-s-farewell-party",
        
          title: "Xianjing&#39;s farewell party",
        
        description: "Farewell party for Xianjing Zhou",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/lab-hp/blog/2023/xianjing-farewell/";
          
        },
      },{id: "post-ivan-39-s-poster-received-the-best-poster-award-at-ult2022",
        
          title: "Ivan&#39;s poster received the best poster award at ULT2022!",
        
        description: "Best poster award at ULT2022 conference",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/lab-hp/blog/2022/ivan-best-poster-ult2022/";
          
        },
      },{id: "post-cherry-blossoms-burst-into-bloom-at-riken",
        
          title: "Cherry blossoms burst into bloom at RIKEN",
        
        description: "Spring cherry blossoms at RIKEN Wako campus",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/lab-hp/blog/2022/cherry-blossoms-2022/";
          
        },
      },{id: "post-a-new-article-got-published-on-nextrendasia",
        
          title: "A new article got published on nextrendasia!",
        
        description: "New outreach article published on nextrendasia",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/lab-hp/blog/2021/nextrendasia-article/";
          
        },
      },{id: "post-やっぱり物理が好き",
        
          title: "やっぱり物理が好き",
        
        description: "第6回「やっぱり物理が好き！」で講演",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/lab-hp/blog/2021/yappari-butsuri/";
          
        },
      },{id: "post-quantum-ict-forum-interview",
        
          title: "Quantum ICT Forum Interview",
        
        description: "Erika interviewed by Quantum ICT Forum",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/lab-hp/blog/2021/quantum-ict-interview/";
          
        },
      },{id: "post-qfs2021",
        
          title: "QFS2021",
        
        description: "QFS2021 conference",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/lab-hp/blog/2021/qfs2021/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "",handler: () => {
              window.location.href = "/lab-hp/books/en-us/the_godfather/";
            },},{id: "projects-electrons-on-liquid-helium",
          title: 'Electrons on Liquid Helium',
          description: "Scalable electron spin qubits in a pristine environment",
          section: "Projects",handler: () => {
              window.location.href = "/lab-hp/projects/1-project/";
            },},{id: "projects-electrons-on-solid-neon",
          title: 'Electrons on Solid Neon',
          description: "Long coherence quantum memory using charge and spin states",
          section: "Projects",handler: () => {
              window.location.href = "/lab-hp/projects/2-project/";
            },},{id: "projects-cryogenic-electronics",
          title: 'Cryogenic Electronics',
          description: "Cryogenic microwave sources for scalable quantum computation",
          section: "Projects",handler: () => {
              window.location.href = "/lab-hp/projects/3-project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/lab-hp/projects/4-project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/lab-hp/projects/5-project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/lab-hp/projects/6-project/";
            },},{id: "projects-this-website",
          title: 'This Website',
          description: "Built with Jekyll and GitHub Pages, primarily by Claude Code",
          section: "Projects",handler: () => {
              window.location.href = "/lab-hp/projects/7-project/";
            },},{
        id: 'social-email',
        title: 'Send an email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%72%69%6B%65%6E%45%6F%6E%48%65@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/lab-hp/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
          id: 'lang-ja',
          title: 'ja',
          section: 'Languages',
          handler: () => {
            window.location.href = "/lab-hp/ja" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

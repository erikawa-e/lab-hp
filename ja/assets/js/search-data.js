
const currentUrl = window.location.href;
const siteUrl = "https://erikawa-e.github.io"; 
let updatedUrl = currentUrl.replace("https://erikawa-e.github.io/lab-hp", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "/lab-hp", "");
}
if ("ja".length > 0) {
  updatedUrl = updatedUrl.replace("/ja", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation menu",
    handler: () => {
      window.location.href = "/lab-hp/ja/";
    },
  },{id: "nav-ブログ",
          title: "ブログ",
          description: "研究室のニュースとアップデート",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/lab-hp/ja/blog/";
          },
        },{id: "nav-発表論文",
          title: "発表論文",
          description: "発表論文一覧（新しい順）。",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/lab-hp/ja/publications/";
          },
        },{id: "nav-発表",
          title: "発表",
          description: "口頭・ポスター発表一覧。",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/lab-hp/ja/presentations/";
          },
        },{id: "nav-メンバー",
          title: "メンバー",
          description: "FEBQIチームのメンバー",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/lab-hp/ja/people/";
          },
        },{id: "nav-プロジェクト",
          title: "プロジェクト",
          description: "Uma crescente coleção de seus projetos interessantes.",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/lab-hp/ja/projects/";
          },
        },{id: "nav-リポジトリ",
          title: "リポジトリ",
          description: "Edite o `_data/repositories.yml` e mude as listas `github_users` e `github_repos` para incluir seu próprio perfil do GitHub e repositórios.",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/lab-hp/ja/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "川上恵里加 — 業績一覧",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/lab-hp/ja/cv/";
          },
        },{id: "nav-教育",
          title: "教育",
          description: "Materiais de cursos que você ministrou. Substitua esse texto com sua descrição.",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/lab-hp/ja/teaching/";
          },
        },{id: "nav-アウトリーチ",
          title: "アウトリーチ",
          description: "解説記事・一般向け講演など",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/lab-hp/ja/outreach/";
          },
        },{id: "dropdown-publicações",
              title: "publicações",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/lab-hp/ja/publications/";
              },
            },{id: "dropdown-projetos",
              title: "projetos",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/lab-hp/ja/projects/";
              },
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/lab-hp/ja/blog/";
              },
            },{id: "nav-アクセス",
          title: "アクセス",
          description: "研究室へのアクセス",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/lab-hp/ja/access/";
          },
        },{id: "post-",
        
          title: "",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2026/2021-11-04-yappari-butsuri/";
          
        },
      },{id: "post-hochan-chungが学士論文優秀賞を受賞",
        
          title: "Hochan Chungが学士論文優秀賞を受賞",
        
        description: "Hochan Chungが学士論文優秀賞を受賞",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2026/hochan-award/";
          
        },
      },{id: "post-お誕生日おめでとう",
        
          title: "お誕生日おめでとう",
        
        description: "研究室のお誕生日のお祝い",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2026/birthdays/";
          
        },
      },{id: "post-プラズモン論文をarxivに公開",
        
          title: "プラズモン論文をarXivに公開",
        
        description: "プラズモン論文をarXivに公開しました",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2026/plasmon-arxiv/";
          
        },
      },{id: "post-フランスの同窓会誌に量子コンピューティングの解説記事が掲載",
        
          title: "フランスの同窓会誌に量子コンピューティングの解説記事が掲載",
        
        description: "山田、Giovansili、川上による解説記事がフランスの同窓会誌に掲載",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2026/french-review-article/";
          
        },
      },{id: "post-ポスター賞受賞とprl論文がriken-research-newsに掲載",
        
          title: "ポスター賞受賞とPRL論文がRIKEN Research Newsに掲載",
        
        description: "ポスター賞受賞とPRL論文がRIKEN Research Newsに掲載",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2026/poster-award-prl-news/";
          
        },
      },{id: "post-国際共同研究プロジェクト採択",
        
          title: "国際共同研究プロジェクト採択",
        
        description: "JST ASPIREプログラムに採択",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2025/jst-aspire/";
          
        },
      },{id: "post-tetsuの送別会",
        
          title: "Tetsuの送別会",
        
        description: "山田哲義の送別会",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2025/tetsu-farewell/";
          
        },
      },{id: "post-嬉しいニュース",
        
          title: "嬉しいニュース",
        
        description: "PRL論文がEditors&#39; Suggestionに選出、LT30でポスター賞受賞",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2025/prl-editors-suggestion/";
          
        },
      },{id: "post-トンネルダイオード発振器を用いた新しい極低温マイクロ波源を開発",
        
          title: "トンネルダイオード発振器を用いた新しい極低温マイクロ波源を開発",
        
        description: "トンネルダイオード発振器を用いた新しい極低温マイクロ波源を開発",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2024/tdo-paper/";
          
        },
      },{id: "post-sanderの送別会",
        
          title: "Sanderの送別会",
        
        description: "Sander van Haagenの送別会",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2024/sander-farewell/";
          
        },
      },{id: "post-oistでfcpワークショップ",
        
          title: "OISTでFCPワークショップ",
        
        description: "OISTでの量子技術ワークショップに参加",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2024/fcp-workshop-oist/";
          
        },
      },{id: "post-rikenの桜が満開",
        
          title: "RIKENの桜が満開",
        
        description: "RIKEN和光キャンパスの春の桜",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2024/cherry-blossoms-2024/";
          
        },
      },{id: "post-研究成果がresearch-newsに掲載",
        
          title: "研究成果がResearch Newsに掲載！",
        
        description: "研究論文がRIKEN Research Newsで紹介",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2024/research-news/";
          
        },
      },{id: "post-xianjingの送別会",
        
          title: "Xianjingの送別会",
        
        description: "Xianjing Zhouの送別会",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2023/xianjing-farewell/";
          
        },
      },{id: "post-ivanがult2022でベストポスター賞受賞",
        
          title: "IvanがULT2022でベストポスター賞受賞！",
        
        description: "ULT2022でベストポスター賞受賞",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2022/ivan-best-poster-ult2022/";
          
        },
      },{id: "post-rikenの桜が満開",
        
          title: "RIKENの桜が満開",
        
        description: "RIKEN和光キャンパスの春の桜",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2022/cherry-blossoms-2022/";
          
        },
      },{id: "post-nextrendasiaに記事が掲載",
        
          title: "nextrendasiaに記事が掲載！",
        
        description: "nextrendasiaに研究紹介記事が掲載",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2021/nextrendasia-article/";
          
        },
      },{id: "post-やっぱり物理が好き",
        
          title: "やっぱり物理が好き",
        
        description: "第6回「やっぱり物理が好き！」で講演",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2021/yappari-butsuri/";
          
        },
      },{id: "post-量子ictインタビュー",
        
          title: "量子ICTインタビュー",
        
        description: "量子ICTフォーラムのインタビュー",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2021/quantum-ict-interview/";
          
        },
      },{id: "post-qfs2021",
        
          title: "QFS2021",
        
        description: "QFS2021国際会議",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2021/qfs2021/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "",handler: () => {
              window.location.href = "/lab-hp/ja/books/en-us/the_godfather/";
            },},{id: "news-トンネルダイオード発振器を用いた極低温マイクロ波源を開発-商用源より優れた振幅安定性を実現しました",
          title: 'トンネルダイオード発振器を用いた極低温マイクロ波源を開発。商用源より優れた振幅安定性を実現しました。',
          description: "",
          section: "News",},{id: "news-ポスドク-インターン-3ヶ月以上-を募集中です-erika-kawakami-riken-jpまでご連絡ください",
          title: 'ポスドク・インターン（3ヶ月以上） を募集中です。erika.kawakami@riken.jpまでご連絡ください。',
          description: "",
          section: "News",},{id: "news-プラズモン論文がarxivに公開されました-液体ヘリウム表面上の浮揚電子の集団励起-プラズモンモード-に関する新しい研究成果です",
          title: 'プラズモン論文がarXivに公開されました！液体ヘリウム表面上の浮揚電子の集団励起（プラズモンモード）に関する新しい研究成果です。',
          description: "",
          section: "News",},{id: "projects-液体ヘリウム上の電子",
          title: '液体ヘリウム上の電子',
          description: "清浄な環境でのスケーラブルな電子スピン量子ビット",
          section: "Projects",handler: () => {
              window.location.href = "/lab-hp/ja/projects/1-project/";
            },},{id: "projects-固体ネオン上の電子",
          title: '固体ネオン上の電子',
          description: "単一電子の電荷・スピン量子ビットの実現",
          section: "Projects",handler: () => {
              window.location.href = "/lab-hp/ja/projects/2-project/";
            },},{id: "projects-極低温エレクトロニクス",
          title: '極低温エレクトロニクス',
          description: "量子ビット数の拡張に向けた極低温マイクロ波源の開発",
          section: "Projects",handler: () => {
              window.location.href = "/lab-hp/ja/projects/3-project/";
            },},{id: "projects-projeto-4",
          title: 'projeto 4',
          description: "outro sem imagem",
          section: "Projects",handler: () => {
              window.location.href = "/lab-hp/ja/projects/4-project/";
            },},{id: "projects-projeto-5",
          title: 'projeto 5',
          description: "um projeto com imagem de fundo",
          section: "Projects",handler: () => {
              window.location.href = "/lab-hp/ja/projects/5-project/";
            },},{id: "projects-projeto-6",
          title: 'projeto 6',
          description: "um projeto sem imagem",
          section: "Projects",handler: () => {
              window.location.href = "/lab-hp/ja/projects/6-project/";
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
          id: 'lang-en-us',
          title: 'en-us',
          section: 'Languages',
          handler: () => {
            window.location.href = "/lab-hp" + updatedUrl;
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

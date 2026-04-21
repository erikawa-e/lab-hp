
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
    section: "",
    handler: () => {
      window.location.href = "/lab-hp/ja/";
    },
  },{id: "nav-ブログ",
          title: "ブログ",
          description: "研究室のニュースとアップデート",
          section: "",
          handler: () => {
            window.location.href = "/lab-hp/ja/blog/";
          },
        },{id: "nav-発表論文",
          title: "発表論文",
          description: "発表論文一覧（新しい順）。jekyll-scholarにより自動生成。",
          section: "",
          handler: () => {
            window.location.href = "/lab-hp/ja/publications/";
          },
        },{id: "nav-メンバー",
          title: "メンバー",
          description: "FEBQIチームのメンバー",
          section: "",
          handler: () => {
            window.location.href = "/lab-hp/ja/people/";
          },
        },{id: "nav-プロジェクト",
          title: "プロジェクト",
          description: "Uma crescente coleção de seus projetos interessantes.",
          section: "",
          handler: () => {
            window.location.href = "/lab-hp/ja/projects/";
          },
        },{id: "nav-リポジトリ",
          title: "リポジトリ",
          description: "Edite o `_data/repositories.yml` e mude as listas `github_users` e `github_repos` para incluir seu próprio perfil do GitHub e repositórios.",
          section: "",
          handler: () => {
            window.location.href = "/lab-hp/ja/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Esta é uma descrição da página. Você pode modificá-la em &#39;_pages/cv.md&#39;. Também pode alterar ou remover o botão no topo de download de pdf.",
          section: "",
          handler: () => {
            window.location.href = "/lab-hp/ja/cv/";
          },
        },{id: "nav-教育",
          title: "教育",
          description: "Materiais de cursos que você ministrou. Substitua esse texto com sua descrição.",
          section: "",
          handler: () => {
            window.location.href = "/lab-hp/ja/teaching/";
          },
        },{id: "dropdown-publicações",
              title: "publicações",
              description: "",
              section: "",
              handler: () => {
                window.location.href = "/lab-hp/ja/publications/";
              },
            },{id: "dropdown-projetos",
              title: "projetos",
              description: "",
              section: "",
              handler: () => {
                window.location.href = "/lab-hp/ja/projects/";
              },
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "",
              handler: () => {
                window.location.href = "/lab-hp/ja/blog/";
              },
            },{id: "post-嬉しいニュース",
        
          title: "嬉しいニュース",
        
        description: "Hochan Chungが学士論文優秀賞を受賞",
        section: "",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2026/hochan-award/";
          
        },
      },{id: "post-お誕生日おめでとう",
        
          title: "お誕生日おめでとう",
        
        description: "研究室のお誕生日のお祝い",
        section: "",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2026/birthdays/";
          
        },
      },{id: "post-フランスの同窓会誌に量子コンピューティングの解説記事が掲載",
        
          title: "フランスの同窓会誌に量子コンピューティングの解説記事が掲載",
        
        description: "山田、Giovansili、川上による解説記事がフランスの同窓会誌に掲載",
        section: "",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2026/french-review-article/";
          
        },
      },{id: "post-嬉しいニュース",
        
          title: "嬉しいニュース",
        
        description: "ポスター賞受賞とPRL論文がRIKEN Research Newsに掲載",
        section: "",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2026/poster-award-prl-news/";
          
        },
      },{id: "post-tetsuの送別会-9月16日",
        
          title: "Tetsuの送別会 @9月16日",
        
        description: "山田哲義の送別会",
        section: "",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2025/tetsu-farewell/";
          
        },
      },{id: "post-国際共同研究プロジェクト採択",
        
          title: "国際共同研究プロジェクト採択",
        
        description: "JST ASPIREプログラムに採択",
        section: "",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2025/jst-aspire/";
          
        },
      },{id: "post-嬉しいニュース",
        
          title: "嬉しいニュース",
        
        description: "PRL論文がEditors&#39; Suggestionに選出、LT30でポスター賞受賞",
        section: "",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2025/prl-editors-suggestion/";
          
        },
      },{id: "post-sanderの送別会",
        
          title: "Sanderの送別会",
        
        description: "Sander van Haagenの送別会",
        section: "",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2024/sander-farewell/";
          
        },
      },{id: "post-oistでfcpワークショップ",
        
          title: "OISTでFCPワークショップ",
        
        description: "OISTでの量子技術ワークショップに参加",
        section: "",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2024/fcp-workshop-oist/";
          
        },
      },{id: "post-rikenの桜が満開",
        
          title: "RIKENの桜が満開",
        
        description: "RIKEN和光キャンパスの春の桜",
        section: "",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2024/cherry-blossoms-2024/";
          
        },
      },{id: "post-研究成果がresearch-newsに掲載",
        
          title: "研究成果がResearch Newsに掲載！",
        
        description: "研究論文がRIKEN Research Newsで紹介",
        section: "",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2024/research-news/";
          
        },
      },{id: "post-xianjingの送別会-6月28日",
        
          title: "Xianjingの送別会 @6月28日",
        
        description: "Xianjing Zhouの送別会",
        section: "",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2023/xianjing-farewell/";
          
        },
      },{id: "post-ivanがult2022でベストポスター賞受賞",
        
          title: "IvanがULT2022でベストポスター賞受賞！",
        
        description: "ULT2022でベストポスター賞受賞",
        section: "",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2022/ivan-best-poster-ult2022/";
          
        },
      },{id: "post-rikenの桜が満開",
        
          title: "RIKENの桜が満開",
        
        description: "RIKEN和光キャンパスの春の桜",
        section: "",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2022/cherry-blossoms-2022/";
          
        },
      },{id: "post-nextrendasiaに記事が掲載",
        
          title: "nextrendasiaに記事が掲載！",
        
        description: "nextrendasiaに研究紹介記事が掲載",
        section: "",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2021/nextrendasia-article/";
          
        },
      },{id: "post-やっぱり物理が好き",
        
          title: "やっぱり物理が好き",
        
        description: "第6回「やっぱり物理が好き！」で講演",
        section: "",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2021/yappari-butsuri/";
          
        },
      },{id: "post-量子ictインタビュー",
        
          title: "量子ICTインタビュー",
        
        description: "量子ICTフォーラムのインタビュー",
        section: "",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2021/quantum-ict-interview/";
          
        },
      },{id: "post-qfs2021",
        
          title: "QFS2021",
        
        description: "QFS2021国際会議",
        section: "",
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
          section: "",},{id: "news-ポスドク-インターン-3ヶ月以上-を募集中です-erika-kawakami-riken-jpまでご連絡ください",
          title: 'ポスドク・インターン（3ヶ月以上） を募集中です。erika.kawakami@riken.jpまでご連絡ください。',
          description: "",
          section: "",},{id: "news-プラズモン論文がarxivに公開されました-液体ヘリウム表面上の浮揚電子の集団励起-プラズモンモード-に関する新しい研究成果です",
          title: 'プラズモン論文がarXivに公開されました！液体ヘリウム表面上の浮揚電子の集団励起（プラズモンモード）に関する新しい研究成果です。',
          description: "",
          section: "",},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "",handler: () => {
              window.location.href = "/lab-hp/ja/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "",handler: () => {
              window.location.href = "/lab-hp/ja/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "",handler: () => {
              window.location.href = "/lab-hp/ja/projects/9_project/";
            },},{id: "projects-液体ヘリウム上の電子",
          title: '液体ヘリウム上の電子',
          description: "清浄な環境でのスケーラブルな電子スピン量子ビット",
          section: "",handler: () => {
              window.location.href = "/lab-hp/ja/projects/ja/1_project/";
            },},{id: "projects-固体ネオン上の電子",
          title: '固体ネオン上の電子',
          description: "電荷・スピン状態の長いコヒーレンスを利用した量子メモリ",
          section: "",handler: () => {
              window.location.href = "/lab-hp/ja/projects/ja/2_project/";
            },},{id: "projects-極低温エレクトロニクス",
          title: '極低温エレクトロニクス',
          description: "量子ビット数の拡張に向けた極低温マイクロ波源の開発",
          section: "",handler: () => {
              window.location.href = "/lab-hp/ja/projects/ja/3_project/";
            },},{id: "projects-projeto-4",
          title: 'projeto 4',
          description: "outro sem imagem",
          section: "",handler: () => {
              window.location.href = "/lab-hp/ja/projects/ja/4_project/";
            },},{id: "projects-projeto-5",
          title: 'projeto 5',
          description: "um projeto com imagem de fundo",
          section: "",handler: () => {
              window.location.href = "/lab-hp/ja/projects/ja/5_project/";
            },},{id: "projects-projeto-6",
          title: 'projeto 6',
          description: "um projeto sem imagem",
          section: "",handler: () => {
              window.location.href = "/lab-hp/ja/projects/ja/6_project/";
            },},{
        id: 'social-email',
        title: '',
        section: '',
        handler: () => {
          window.open("mailto:%72%69%6B%65%6E%45%6F%6E%48%65@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: '',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: '',
        handler: () => {
          window.open("/lab-hp/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: '',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
          id: 'lang-en-us',
          title: 'en-us',
          section: '',
          handler: () => {
            window.location.href = "/lab-hp" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: '',
      description: '',
      section: '',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: '',
      description: '',
      section: '',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: '',
      description: '',
      section: '',
      handler: () => {
        setThemeSetting("system");
      },
    },];


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
  },{id: "nav-メンバー",
          title: "メンバー",
          description: "FEBQIチームのメンバー",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/lab-hp/ja/people/";
          },
        },{id: "nav-ブログ",
          title: "ブログ",
          description: "研究室のニュースとアップデート",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/lab-hp/ja/blog/";
          },
        },{id: "dropdown-論文",
              title: "論文",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/lab-hp/ja/publications/";
              },
            },{id: "dropdown-発表",
              title: "発表",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/lab-hp/ja/presentations/";
              },
            },{id: "dropdown-アウトリーチ",
              title: "アウトリーチ",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/lab-hp/ja/outreach/";
              },
            },{id: "dropdown-受賞",
              title: "受賞",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/lab-hp/ja/awards/";
              },
            },{id: "dropdown-エクスポート",
              title: "エクスポート",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/lab-hp/ja/export/";
              },
            },{id: "nav-プロジェクト",
          title: "プロジェクト",
          description: "研究プロジェクト・活動紹介",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/lab-hp/ja/projects/";
          },
        },{id: "nav-グラント",
          title: "グラント",
          description: "以下の助成・支援を受けて研究を行っています。深く感謝申し上げます。",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/lab-hp/ja/grants/";
          },
        },{id: "nav-アクセス",
          title: "アクセス",
          description: "研究室へのアクセス",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/lab-hp/ja/access/";
          },
        },{id: "post-ネオン上の電子の電荷量子ビット論文をarxivに公開",
        
          title: "ネオン上の電子の電荷量子ビット論文をarXivに公開",
        
        description: "ネオン上の電子の電荷量子ビット論文をarXivに公開しました",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2026/neon-qubit-arxiv/";
          
        },
      },{id: "post-ワークショップ-固体ネオン上の電子によるスピン量子ビット実現へ向けて-を開催しました",
        
          title: "ワークショップ「固体ネオン上の電子によるスピン量子ビット実現へ向けて」を開催しました",
        
        description: "理研和光キャンパス（ハイブリッド）にてワークショップを開催しました",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2026/workshop-spin-qubits-solid-neon/";
          
        },
      },{id: "post-xianjingおかえり",
        
          title: "Xianjingおかえり！",
        
        description: "Xianjing Zhou が1週間滞在します",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2026/xianjing-visit/";
          
        },
      },{id: "post-hochan-chungが学士論文優秀賞を受賞",
        
          title: "Hochan Chungが学士論文優秀賞を受賞",
        
        description: "Hochan Chungが学士論文優秀賞を受賞",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2026/hochan-award/";
          
        },
      },{id: "post-oleksiy-傘寿おめでとう",
        
          title: "Oleksiy 傘寿おめでとう",
        
        description: "Oleksiy 傘寿（80歳）のお祝い",
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
      },{id: "post-tetsuの送別会",
        
          title: "Tetsuの送別会",
        
        description: "山田哲義の送別会",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2025/tetsu-farewell/";
          
        },
      },{id: "post-ash-ポスター賞受賞",
        
          title: "Ash ポスター賞受賞",
        
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
      },{id: "post-oistワークショップ-浮揚荷電粒子を用いた量子技術",
        
          title: "OISTワークショップ「浮揚荷電粒子を用いた量子技術」",
        
        description: "浮揚荷電粒子を用いた量子技術に関するOISTワークショップ",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2024/fcp-workshop-oist/";
          
        },
      },{id: "post-チーム写真-2024年4月",
        
          title: "チーム写真、2024年4月",
        
        description: "FEBQIチーム写真、2024年4月",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2024/team-photo/";
          
        },
      },{id: "post-xianjingの送別会",
        
          title: "Xianjingの送別会",
        
        description: "Xianjing Zhouの送別会",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2023/xianjing-farewell/";
          
        },
      },{id: "post-量子情報科学の研究を行う川上恵里加博士へのインタビュー",
        
          title: "量子情報科学の研究を行う川上恵里加博士へのインタビュー",
        
        description: "在日フランス大使館「Portraits de femmes en sciences」掲載インタビュー（2023年2月）",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2023/interview-fr/";
          
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
      },{id: "projects-浮揚電子系の概要",
          title: '浮揚電子系の概要',
          description: "液体ヘリウムや固体ネオン表面に浮かぶ電子の物理と量子応用",
          section: "Projects",handler: () => {
              window.location.href = "/lab-hp/ja/projects/0-project/";
            },},{id: "projects-リュードベリ遷移",
          title: 'リュードベリ遷移',
          description: "リュードベリ遷移による量子キャパシタンス",
          section: "Projects",handler: () => {
              window.location.href = "/lab-hp/ja/projects/1-project/";
            },},{id: "projects-極低温エレクトロニクス",
          title: '極低温エレクトロニクス',
          description: "大規模量子コンピューターの実現に向けた極低温マイクロ波発振器の開発",
          section: "Projects",handler: () => {
              window.location.href = "/lab-hp/ja/projects/3-project/";
            },},{id: "projects-このウェブサイト",
          title: 'このウェブサイト',
          description: "JekyllとGitHub Pagesで構築、主にClaude Codeが作成",
          section: "Projects",handler: () => {
              window.location.href = "/lab-hp/ja/projects/7-project/";
            },},{id: "projects-プラズモン-光子コヒーレント結合",
          title: 'プラズモン－光子コヒーレント結合',
          description: "クリーンな二次元電子系を用いたプラズモン－光子コヒーレント結合の実証",
          section: "Projects",handler: () => {
              window.location.href = "/lab-hp/ja/projects/8-project/";
            },},{id: "projects-固体ネオン上の電子-高精度量子ビットへの道",
          title: '固体ネオン上の電子：高精度量子ビットへの道',
          description: "NbTiNナノワイヤ共振器と固体ネオン上の電子を用いたスピン－光子強結合の設計",
          section: "Projects",handler: () => {
              window.location.href = "/lab-hp/ja/projects/9-project/";
            },},{id: "projects-研究概要",
          title: '研究概要',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/lab-hp/ja/projects/2-project/";
            },},{id: "projects-量子ドット",
          title: '量子ドット',
          description: "電子を狭い空間に閉じ込めた人工の原子",
          section: "Projects",handler: () => {
              window.location.href = "/lab-hp/ja/projects/4-project/";
            },},{id: "projects-量子コンピュータ",
          title: '量子コンピュータ',
          description: "量子の重ね合わせともつれを使う新しいコンピュータ",
          section: "Projects",handler: () => {
              window.location.href = "/lab-hp/ja/projects/5-project/";
            },},{id: "projects-液体ヘリウム上の浮揚電子",
          title: '液体ヘリウム上の浮揚電子',
          description: "液体ヘリウム表面の真空中に浮かぶ電子と量子コンピュータ",
          section: "Projects",handler: () => {
              window.location.href = "/lab-hp/ja/projects/6-project/";
            },},{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/febqi.bsky.social", "_blank");
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

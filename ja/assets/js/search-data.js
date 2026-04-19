
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
  },{id: "nav-blog",
          title: "blog",
          description: "um tema simples para acadêmicos",
          section: "",
          handler: () => {
            window.location.href = "/lab-hp/ja/blog/";
          },
        },{id: "nav-publicações",
          title: "publicações",
          description: "publicações por categoria em ordem cronológica reversa. gerado pelo jekyll-scholar.",
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
        },{id: "nav-projetos",
          title: "projetos",
          description: "Uma crescente coleção de seus projetos interessantes.",
          section: "",
          handler: () => {
            window.location.href = "/lab-hp/ja/projects/";
          },
        },{id: "nav-repositórios",
          title: "repositórios",
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
        },{id: "nav-ensino",
          title: "ensino",
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
            },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2025/plotly/";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2024/photo-gallery/";
          
        },
      },{id: "post-a-post-with-tabs",
        
          title: "a post with tabs",
        
        description: "this is what included tabs in a post could look like",
        section: "",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2024/tabs/";
          
        },
      },{id: "post-a-post-with-typograms",
        
          title: "a post with typograms",
        
        description: "this is what included typograms code could look like",
        section: "",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2024/typograms/";
          
        },
      },{id: "post-a-post-that-can-be-cited",
        
          title: "a post that can be cited",
        
        description: "this is what a post that can be cited looks like",
        section: "",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2024/post-citation/";
          
        },
      },{id: "post-a-post-with-pseudo-code",
        
          title: "a post with pseudo code",
        
        description: "this is what included pseudo code could look like",
        section: "",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2024/pseudocode/";
          
        },
      },{id: "post-a-post-with-code-diff",
        
          title: "a post with code diff",
        
        description: "this is how you can display code diffs",
        section: "",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2024/code-diff/";
          
        },
      },{id: "post-a-post-with-advanced-image-components",
        
          title: "a post with advanced image components",
        
        description: "this is what advanced image components could look like",
        section: "",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2024/advanced-images/";
          
        },
      },{id: "post-a-post-with-vega-lite",
        
          title: "a post with vega lite",
        
        description: "this is what included vega lite code could look like",
        section: "",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2024/vega-lite/";
          
        },
      },{id: "post-a-post-with-geojson",
        
          title: "a post with geojson",
        
        description: "this is what included geojson code could look like",
        section: "",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2024/geojson-map/";
          
        },
      },{id: "post-a-post-with-echarts",
        
          title: "a post with echarts",
        
        description: "this is what included echarts code could look like",
        section: "",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2024/echarts/";
          
        },
      },{id: "post-a-post-with-chart-js",
        
          title: "a post with chart.js",
        
        description: "this is what included chart.js code could look like",
        section: "",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2024/chartjs/";
          
        },
      },{id: "post-a-post-with-tikzjax",
        
          title: "a post with TikZJax",
        
        description: "this is what included TikZ code could look like",
        section: "",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2023/tikzjax/";
          
        },
      },{id: "post-a-post-with-bibliography",
        
          title: "a post with bibliography",
        
        description: "an example of a blog post with bibliography",
        section: "",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2023/post-bibliography/";
          
        },
      },{id: "post-a-post-with-jupyter-notebook",
        
          title: "a post with jupyter notebook",
        
        description: "an example of a blog post with jupyter notebook",
        section: "",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2023/jupyter-notebook/";
          
        },
      },{id: "post-a-post-with-custom-blockquotes",
        
          title: "a post with custom blockquotes",
        
        description: "an example of a blog post with custom blockquotes",
        section: "",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2023/custom-blockquotes/";
          
        },
      },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
        
          title: "a post with table of contents on a sidebar",
        
        description: "an example of a blog post with table of contents on a sidebar",
        section: "",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2023/sidebar-table-of-contents/";
          
        },
      },{id: "post-a-post-with-audios",
        
          title: "a post with audios",
        
        description: "this is what included audios could look like",
        section: "",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2023/audios/";
          
        },
      },{id: "post-a-post-with-videos",
        
          title: "a post with videos",
        
        description: "this is what included videos could look like",
        section: "",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2023/videos/";
          
        },
      },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
        
          title: "displaying beautiful tables with Bootstrap Tables",
        
        description: "an example of how to use Bootstrap Tables",
        section: "",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2023/tables/";
          
        },
      },{id: "post-a-post-with-table-of-contents",
        
          title: "a post with table of contents",
        
        description: "an example of a blog post with table of contents",
        section: "",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2023/table-of-contents/";
          
        },
      },{id: "post-a-post-with-giscus-comments",
        
          title: "a post with giscus comments",
        
        description: "an example of a blog post with giscus comments",
        section: "",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2022/giscus-comments/";
          
        },
      },{id: "post-a-post-with-redirect",
        
          title: 'a post with redirect <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "you can also redirect to assets like pdf",
        section: "",
        handler: () => {
          
            window.open("https://riken-share.box.com/s/xv9oj2sux7ms2zggatrbcfh1dd9jft0r", "_blank");
          
        },
      },{id: "post-a-post-with-diagrams",
        
          title: "a post with diagrams",
        
        description: "an example of a blog post with diagrams",
        section: "",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2021/diagrams/";
          
        },
      },{id: "post-a-post-with-twitter",
        
          title: "a post with twitter",
        
        description: "an example of a blog post with twitter",
        section: "",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2020/twitter/";
          
        },
      },{id: "post-a-distill-style-blog-post",
        
          title: "a distill-style blog post",
        
        description: "an example of a distill-style blog post and main elements",
        section: "",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2018/distill/";
          
        },
      },{id: "post-a-post-with-disqus-comments",
        
          title: "a post with disqus comments",
        
        description: "an example of a blog post with disqus comments",
        section: "",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2015/disqus-comments/";
          
        },
      },{id: "post-a-post-with-math",
        
          title: "a post with math",
        
        description: "an example of a blog post with some math",
        section: "",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2015/math/";
          
        },
      },{id: "post-a-post-with-code",
        
          title: "a post with code",
        
        description: "an example of a blog post with some code",
        section: "",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2015/code/";
          
        },
      },{id: "post-a-post-with-images",
        
          title: "a post with images",
        
        description: "this is what included images could look like",
        section: "",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2015/images/";
          
        },
      },{id: "post-a-post-with-formatting-and-links",
        
          title: "a post with formatting and links",
        
        description: "march &amp; april, looking forward to summer",
        section: "",
        handler: () => {
          
            window.location.href = "/lab-hp/ja/blog/2015/formatting-and-links/";
          
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
          section: "",},{id: "news-プラズモン論文がarxivに公開されました-液体ヘリウム表面上の浮遊電子の集団励起-プラズモンモード-に関する新しい研究成果です",
          title: 'プラズモン論文がarXivに公開されました！液体ヘリウム表面上の浮遊電子の集団励起（プラズモンモード）に関する新しい研究成果です。',
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

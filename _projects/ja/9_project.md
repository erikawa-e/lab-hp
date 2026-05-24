---
page_id: project_neon
layout: page
title: "固体ネオン上の電子：高精度量子ビットへの道"
description: NbTiNナノワイヤ共振器と固体ネオン上の電子を用いたスピン－光子強結合の設計
img: assets/img/neon_electron_deposition.png
importance: 4
category: research
---

固体ネオンの表面に浮かぶ電子は、量子状態を長く保つことができるため、量子ビットの候補として注目されています。本研究では、まず超伝導共振器に固体ネオンを堆積させ、その上に電子を浮揚させても、超伝導共振器の性能がほとんど損なわれないことを実証しました。これは、固体ネオン上の電子を使った量子デバイスが現実的に作製できることを示す重要な結果です。さらに、微小な磁石の配置を工夫することで、電子のスピン状態とマイクロ波光子を強く結合させる設計を理論的に分析しました。その結果、自然界に存在するネオンを用いた場合でも、1量子ビット操作で99.99%以上、2量子ビット操作で99.9%以上という非常に高い演算精度が達成できることが示されました。これは、実用的な量子コンピュータの実現に向けて十分な精度です。

<img src="{{ '/assets/img/neon_electron_deposition.png' | relative_url }}" class="img-fluid rounded z-depth-1" style="width:50%; display:block; margin:0 auto;">
<p style="font-size:0.85em; color:#888; text-align:left; width:50%; margin:0.5rem auto 0;">固体ネオン表面への電子の堆積過程を、超伝導共振器の共鳴ピーク（赤十字）の時間変化として示しています。フィラメント（電熱線）に電圧を印加するたびに電子が放出され（赤い破線）、共鳴周波数が段階的にシフトしていく様子が観測されました。十分な時間が経過すると周波数は安定し、電子が固体ネオン表面に定着したことが確認されました。左下の挿入図はフィラメントの電流－電圧特性を示しています。</p>

<div style="margin-top:2rem;"></div>

<div class="publications">
<style>div.publications h2 { display: none; }</style>
{% bibliography --query @*[key=tian2025neon] %}
</div>

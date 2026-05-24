---
page_id: project_3
layout: page
title: 極低温エレクトロニクス
description: 大規模量子コンピューターの実現に向けた極低温マイクロ波発振器の開発
img: assets/img/project3_tdo.png
importance: 3
category: research
---

大規模量子コンピューターの実現には、極低温の量子ビットと室温の機器を同軸ケーブルで接続する必要がありますが、ケーブル数には物理的な限界があります。そのため、低温で動作する測定機器の導入が求められています。量子ビットはマイクロ波で制御されるため、我々はトンネルダイオードを用いた極低温動作の小型マイクロ波発振器を開発しました。LC共振器に負性抵抗を持つトンネルダイオードを接続し、DC電圧でマイクロ波を生成します。2×2 cmと小型で、極低温でも安定に動作し、振幅のばらつきが市販品より小さいです。振幅の安定性は量子ビットの読み出し精度を左右するため、本発振器は高精度な読み出しに貢献します。

<img src="{{ '/assets/img/tdo_sample_ja.svg' | relative_url }}" class="img-fluid rounded z-depth-1" style="width:50%; display:block; margin:0 auto;">
<p style="font-size:0.85em; color:#888; text-align:left; width:50%; margin:0.5rem auto 2rem;">作成したマイクロ波発振器。これを極低温（10 mK）下で動作することを確認しました。図中の −R はトンネルダイオードを示します。C は10 MHz程の周波数可変のために可変容量ダイオードを、L は抵抗損失を低減するために微細加工された超伝導インダクタンスを用いています。</p>

<img src="{{ '/assets/img/tdo_fig2_ja.png' | relative_url }}" class="img-fluid rounded z-depth-1" style="width:50%; display:block; margin:0 auto;">
<p style="font-size:0.85em; color:#888; text-align:left; width:50%; margin:0.5rem auto 0;">市販のマイクロ波発振器と今回開発した低温マイクロ波発振器の振幅安定性の比較。</p>

<div style="margin-top:2rem;"></div>

<div class="publications">
<style>div.publications h2 { display: none; }</style>
{% bibliography --query @*[key=grytsenko2024tdo] %}
</div>

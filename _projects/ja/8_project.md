---
page_id: project_plasmon
layout: page
title: プラズモン－光子コヒーレント結合
description: クリーンな二次元電子系を用いたプラズモン－光子コヒーレント結合の実証
img: assets/img/plasmon_avoided_crossing.png
importance: 4
category: research
---

プラズモンとは、多数の電子が集団として振動する現象のことです。この振動は電磁波と強く相互作用するため、これまで化学センサーやバイオセンサーなど、さまざまな分野で利用されてきました。近年では、量子コンピュータなどの量子情報技術への応用にも注目が集まっています。液体ヘリウム表面に浮かぶ電子は、不純物や結晶欠陥のほとんどないクリーンな環境に存在します。このクリーンさゆえにプラズモン振動が高品質に保たれ、LC共振器のRFフォトンとの強いコヒーレント結合を実現することができました。時間分解測定では、プラズモンとフォトンの間でエネルギーが周期的にやり取りされる様子を直接観測しました。

<img src="{{ '/assets/img/plasmon_avoided_crossing.png' | relative_url }}" class="img-fluid rounded z-depth-1" style="width:50%; display:block; margin:0 auto;">
<p style="font-size:0.85em; color:#888; text-align:left; width:50%; margin:0.5rem auto 2rem;">電子の集団振動（プラズモン）の周波数を電極電圧で調整し、電気回路（LC共振器）の共鳴周波数に近づけていくと、二つのモードが交差せずに反発し合う「avoided crossing」と呼ばれる現象が現れます。これは、プラズモンとLC回路が量子力学的にコヒーレントに結合していることを示す重要な証拠です。二つの系が強く結合しているとき、それぞれ独立していたモードが混ざり合い、新しい二つのモードとして振る舞うようになります。左図に示す実験データはシミュレーション結果（右図）とよく一致しており、このモデルの妥当性を裏付けています。重ねて示した青破線はプラズモン周波数の理論曲線を表しており、観測されたモードをよく再現しています。</p>

<img src="{{ '/assets/img/plasmon_time_resolved.png' | relative_url }}" class="img-fluid rounded z-depth-1" style="width:50%; display:block; margin:0 auto;">
<p style="font-size:0.85em; color:#888; text-align:left; width:50%; margin:0.5rem auto 0;">20 nsのRFパルスを印加した後の反射信号強度の時間発展を示しています。実験結果（左）では、プラズモンとフォトンモード間のエネルギーが周期的にやり取りされる様子が明確に観測され、二つの系の強いコヒーレント結合が実証されています。右図は理論シミュレーション結果で、色はLC共振器内に蓄えられたRF電場強度を示しています。シミュレートされたエネルギー交換は実験観測をよく再現しています。</p>

<div style="margin-top:2rem;"></div>

<div class="publications">
<style>div.publications h2 { display: none; }</style>
{% bibliography --query @*[key=jennings2025plasmon] %}
</div>

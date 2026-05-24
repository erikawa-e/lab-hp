---
page_id: project_1
layout: page
title: リュードベリ遷移
description: リュードベリ遷移による量子キャパシタンス
img: assets/img/rydberg_rf.png
importance: 1
category: research
---

液体ヘリウム上の電子は、不純物や格子欠陥の影響を受けない、極めてクリーンな量子コンピューティングプラットフォームです。中でもスピン状態は、他の系と比べて非常に長いコヒーレンス時間を持つと理論的に予測されており、量子ビットとしての利用が注目されています。一方で、スピン状態の読み出しは依然として困難です。そこで我々は、スピン状態をリュードベリ状態にマッピングし、LC回路を用いてその遷移を高感度に検出する手法を提案・実証しました。周波数変調を加えたマイクロ波によりリュードベリ準位の遷移を誘起し、量子キャパシタンスの変化として読み出すことで、単一電子のリュードベリ遷移を識別できる感度を実現しました。この成果は、スケーラブルなスピン読み出しへの道を開くものです。

<img src="{{ '/assets/img/rydberg_rf.png' | relative_url }}" class="img-fluid rounded z-depth-1" style="width:50%; display:block; margin:0 auto;">
<p style="font-size:0.85em; color:#888; text-align:left; width:50%; margin:0.5rem auto 0;">マイクロ波（MW）キャリア周波数 f<sub>MW</sub> に対する反射RF電力をスペクトラムアナライザーで測定した結果。周波数変調（FM）のパラメータは f<sub>mf</sub> = 1 kHz、f<sub>ma</sub> = 768 MHz です。リュードベリ遷移に対応する信号として、f<sub>MW</sub> = 165 GHz 付近で f = f<sub>RF</sub> ± f<sub>mf</sub> にサイドバンド信号が現れます。</p>

<div style="margin-top:2rem;"></div>

<div class="publications">
<style>div.publications h2 { display: none; }</style>
{% bibliography --query @*[key=jennings2025rydberg] %}
</div>

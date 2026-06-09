---
page_id: outreach
layout: page
permalink: /outreach/
title: アウトリーチ
description: 解説記事・一般向け講演など
nav: false
nav_order: 6
tabs: true
---

<ul class="tab" data-tab="tab-outreach-ja">
  <li class="active"><a href="#">解説記事</a></li>
  <li><a href="#">書籍</a></li>
  <li><a href="#">アウトリーチ・セミナー</a></li>
</ul>

<ul id="tab-outreach-ja" class="tab-content">

<li class="active">
<p style="font-size: 0.9em; margin-bottom: 1em;">
  <u>下線</u>: FEBQI研究室メンバー &nbsp;|&nbsp; <sup>*</sup>: 責任著者（Corresponding author）
</p>
<table class="table table-sm" style="font-size: 0.9em;">
{% for article in site.data.tutorial_articles %}
<tr>
  <td style="white-space: nowrap; padding-right: 1em; color: #888;">{{ article.year }}</td>
  <td>
    <div>
      {{ article.title }}
      {% if article.lang %}&nbsp;<span class="badge" style="background:#aaa; color:#fff; font-size:0.8em;">{{ article.lang }}</span>{% endif %}
      {% if article.invited %}&nbsp;<span class="badge" style="background:#888; color:#fff; font-size:0.8em;">招待</span>{% endif %}
      {% if article.reviewed %}&nbsp;<span class="badge" style="background:#555; color:#fff; font-size:0.8em;">査読あり</span>{% endif %}
    </div>
    <div><br><span class="author">{% if article.authors_ja_html %}{{ article.authors_ja_html }}{% else %}{{ article.authors_html }}{% endif %}</span></div>
    <div><em>{{ article.journal }}</em></div>
    {% if article.issn %}<div class="issn hidden"><p>ISSN: {{ article.issn }}</p></div>{% endif %}
    <div class="links">
      {% if article.journal_url %}<a href="{{ article.journal_url }}" class="btn btn-sm z-depth-0" role="button" target="_blank">Journal</a>{% endif %}
      {% if article.doi %}<a class="doi btn btn-sm z-depth-0" role="button">DOI</a>{% endif %}
      {% if article.issn %}<a class="issn btn btn-sm z-depth-0" role="button">ISSN</a>{% endif %}
      {% if article.draft_url %}<a href="{{ article.draft_url }}" class="btn btn-sm z-depth-0" role="button" target="_blank">Draft</a>{% endif %}
    </div>
    {% if article.doi %}<div class="doi hidden"><p style="color:var(--global-text-color);padding:0.5rem 0;margin:0;">https://doi.org/{{ article.doi }}</p></div>{% endif %}
  </td>
</tr>
{% endfor %}
</table>
</li>

<li>
<div class="publications">
{% bibliography --file ja_books %}
</div>
</li>

<li>
<p style="font-size: 0.9em; margin-bottom: 1em;">
  <u>下線</u>: FEBQIメンバー
</p>
<table class="table table-sm" style="font-size: 0.9em;">
{% for act in site.data.outreach_activities %}
<tr>
  <td style="white-space: nowrap; padding-right: 1em; color: #888;">{{ act.date_ja | default: act.date }}</td>
  <td>
    {{ act.presenter_html }}<br>
    {{ act.title }}<br>
    <em>{{ act.venue }}</em>
    <div class="links">
      <span class="btn btn-sm z-depth-0" style="background-color:#f0f0f0; color:#555; cursor:default;">{{ act.format }}</span>
      {% if act.url %}<a href="{{ act.url }}" class="btn btn-sm z-depth-0" role="button" target="_blank">リンク</a>{% endif %}
    </div>
  </td>
</tr>
{% endfor %}
{% for act in site.data.outreach_activities_before2023 %}
<tr>
  <td style="white-space: nowrap; padding-right: 1em; color: #888;">{{ act.date_ja | default: act.date }}</td>
  <td>
    {{ act.presenter_html }}<br>
    {{ act.title }}<br>
    <em>{{ act.venue }}</em>
    <div class="links">
      <span class="btn btn-sm z-depth-0" style="background-color:#f0f0f0; color:#555; cursor:default;">{{ act.format }}</span>
      {% if act.url %}<a href="{{ act.url }}" class="btn btn-sm z-depth-0" role="button" target="_blank">リンク</a>{% endif %}
      {% if act.url2 %}<a href="{{ act.url2 }}" class="btn btn-sm z-depth-0" role="button" target="_blank">{{ act.url2_label | default: "Link 2" }}</a>{% endif %}
    </div>
  </td>
</tr>
{% endfor %}
</table>
</li>

</ul>

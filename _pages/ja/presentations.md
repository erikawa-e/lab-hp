---
page_id: presentations
layout: page
permalink: /presentations/
title: 発表
description: 口頭・ポスター発表一覧。
nav: false
nav_order: 5
tabs: true
---

<p style="font-size: 0.9em; margin-bottom: 0.5em;">
  未来の日付は予定されている発表を表します。
</p>
<p style="font-size: 0.9em; margin-bottom: 1em;">
  <u>下線</u>: FEBQIメンバー &nbsp;|&nbsp; <sup>*</sup>: 責任著者
</p>

{% assign years = site.data.presentations | map: "year" | uniq | sort | reverse %}

<ul class="tab" data-tab="tab-presentations-ja">
  {% for year in years %}
    <li{% if forloop.first %} class="active"{% endif %}><a href="#">{{ year }}</a></li>
  {% endfor %}
  <li><a href="#">〜2023年</a></li>
</ul>

<ul id="tab-presentations-ja" class="tab-content">
{% for year in years %}
<li{% if forloop.first %} class="active"{% endif %}>
{% assign year_pres = site.data.presentations | where: "year", year %}
<table class="table table-sm" style="font-size: 0.9em;">
{% for pres in year_pres %}
<tr>
  <td style="white-space: nowrap; padding-right: 1em; color: #888;">{{ pres.date }}</td>
  <td>
    <div>
      <strong>{{ pres.title }}</strong>
      {% if pres.type == "Oral" %}<span class="badge" style="background:#aaa; color:#fff; font-size:0.8em;">口頭</span>
      {% else %}<span class="badge" style="background:#aaa; color:#fff; font-size:0.8em;">ポスター</span>{% endif %}
      {% if pres.invited %}&nbsp;<span class="badge" style="background:#888; color:#fff; font-size:0.8em;">招待</span>{% endif %}
      {% if pres.reviewed %}&nbsp;<span class="badge" style="background:#555; color:#fff; font-size:0.8em;">審査あり</span>{% endif %}
      {% if pres.lang == "en" %}&nbsp;<span class="badge" style="background:#888; color:#fff; font-size:0.8em;">EN</span>{% endif %}
    </div>
    <div>{{ pres.presenter_html }}</div>
    <div style="font-size:0.9em;"><em>{{ pres.conference }}</em>{% if pres.venue %}, {{ pres.venue }}{% endif %}</div>
    <div class="links">
      {% if pres.url %}<a href="{{ pres.url }}" class="btn btn-sm z-depth-0" role="button">リンク</a>{% endif %}
    </div>
  </td>
</tr>
{% endfor %}
</table>
</li>
{% endfor %}

<li>
<table class="table table-sm" style="font-size: 0.9em;">
{% for pres in site.data.presentations_before2023 %}
<tr>
  <td style="white-space: nowrap; padding-right: 1em; color: #888;">{{ pres.date }}</td>
  <td>
    <div>
      <strong>{{ pres.title }}</strong>
      {% if pres.type == "Oral" %}<span class="badge" style="background:#aaa; color:#fff; font-size:0.8em;">口頭</span>
      {% else %}<span class="badge" style="background:#aaa; color:#fff; font-size:0.8em;">ポスター</span>{% endif %}
      {% if pres.invited %}&nbsp;<span class="badge" style="background:#888; color:#fff; font-size:0.8em;">招待</span>{% endif %}
      {% if pres.reviewed %}&nbsp;<span class="badge" style="background:#555; color:#fff; font-size:0.8em;">審査あり</span>{% endif %}
    </div>
    <div>{{ pres.presenter_html }}</div>
    <div style="font-size:0.9em;"><em>{{ pres.conference }}</em>{% if pres.venue %}, {{ pres.venue }}{% endif %}</div>
    <div class="links">
      {% if pres.url %}<a href="{{ pres.url }}" class="btn btn-sm z-depth-0" role="button">リンク</a>{% endif %}
    </div>
  </td>
</tr>
{% endfor %}
</table>
</li>

</ul>

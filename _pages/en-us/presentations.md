---
page_id: presentations
layout: page
permalink: /presentations/
title: Presentations
description: Oral and poster presentations.
nav: false
nav_order: 5
tabs: true
---

<p style="font-size: 0.9em; margin-bottom: 0.5em;">
  Future dates indicate scheduled events.
</p>
<p style="font-size: 0.9em; margin-bottom: 0.5em;">
  Japanese-language presentations are listed on the <a href="{{ '/ja/presentations/' | relative_url }}">Japanese page</a> only.
</p>
<p style="font-size: 0.9em; margin-bottom: 1em;">
  <u>Underline</u>: FEBQI lab member &nbsp;|&nbsp; <sup>*</sup>: Corresponding author
</p>

{% assign years = site.data.presentations | map: "year" | uniq | sort | reverse %}

<ul class="tab" data-tab="tab-presentations-en">
  {% for year in years %}
    <li{% if forloop.first %} class="active"{% endif %}><a href="#">{{ year }}</a></li>
  {% endfor %}
  <li><a href="#">Before 2023</a></li>
</ul>

<ul id="tab-presentations-en" class="tab-content">
{% for year in years %}
<li{% if forloop.first %} class="active"{% endif %}>
{% assign year_pres = site.data.presentations | where: "year", year %}
<table class="table table-sm" style="font-size: 0.9em;">
{% for pres in year_pres %}
  {% if pres.lang == "ja" %}{% continue %}{% endif %}
<tr>
  <td style="white-space: nowrap; padding-right: 1em; color: #888;">{{ pres.date }}</td>
  <td>
    <div>
      <strong>{{ pres.title }}</strong>
      {% if pres.type == "Oral" %}<span class="badge" style="background:#aaa; color:#fff; font-size:0.8em;">Oral</span>
      {% else %}<span class="badge" style="background:#aaa; color:#fff; font-size:0.8em;">Poster</span>{% endif %}
      {% if pres.invited %}&nbsp;<span class="badge" style="background:#888; color:#fff; font-size:0.8em;">Invited</span>{% endif %}
      {% if pres.reviewed %}&nbsp;<span class="badge" style="background:#555; color:#fff; font-size:0.8em;">Reviewed</span>{% endif %}
      {% if pres.lang == "ja" %}&nbsp;<span class="badge" style="background:#888; color:#fff; font-size:0.8em;">JA</span>{% endif %}
    </div>
    <div>{% if pres.presenter_en_html %}{{ pres.presenter_en_html }}{% else %}{{ pres.presenter_html }}{% endif %}</div>
    <div style="font-size:0.9em;"><em>{{ pres.conference }}</em>{% if pres.venue_en %}, {{ pres.venue_en }}{% elsif pres.venue %}, {{ pres.venue }}{% endif %}</div>
    <div class="links">
      {% if pres.url %}<a href="{{ pres.url }}" class="btn btn-sm z-depth-0" role="button">Link</a>{% endif %}
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
  {% if pres.lang == "J" %}{% continue %}{% endif %}
<tr>
  <td style="white-space: nowrap; padding-right: 1em; color: #888;">{{ pres.date }}</td>
  <td>
    <div>
      <strong>{{ pres.title }}</strong>
      {% if pres.type == "Oral" %}<span class="badge" style="background:#aaa; color:#fff; font-size:0.8em;">Oral</span>
      {% else %}<span class="badge" style="background:#aaa; color:#fff; font-size:0.8em;">Poster</span>{% endif %}
      {% if pres.invited %}&nbsp;<span class="badge" style="background:#888; color:#fff; font-size:0.8em;">Invited</span>{% endif %}
      {% if pres.reviewed %}&nbsp;<span class="badge" style="background:#555; color:#fff; font-size:0.8em;">Reviewed</span>{% endif %}
    </div>
    <div>{{ pres.presenter_html }}</div>
    <div style="font-size:0.9em;"><em>{{ pres.conference }}</em>{% if pres.venue %}, {{ pres.venue }}{% endif %}</div>
    <div class="links">
      {% if pres.url %}<a href="{{ pres.url }}" class="btn btn-sm z-depth-0" role="button">Link</a>{% endif %}
    </div>
  </td>
</tr>
{% endfor %}
</table>
</li>

</ul>

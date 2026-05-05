---
page_id: outreach
layout: page
permalink: /outreach/
title: Outreach
description: Review & tutorial articles, public lectures, and more
nav: false
nav_order: 6
tabs: true
---

<p style="font-size: 0.85em; color: #888; margin-bottom: 1rem;">Japanese-language outreach activities are listed on the <a href="/ja/outreach/">Japanese page</a> only.</p>

<ul class="tab" data-tab="tab-outreach-en">
  <li class="active"><a href="#">Review Articles</a></li>
  <li><a href="#">Outreach & Seminars</a></li>
</ul>

<ul id="tab-outreach-en" class="tab-content">

<li class="active">
<p style="font-size: 0.9em; margin-bottom: 1em;">
  <u>Underline</u>: FEBQI lab member &nbsp;|&nbsp; <sup>*</sup>: Corresponding author
</p>
<table class="table table-sm" style="font-size: 0.9em;">
{% for article in site.data.tutorial_articles %}
  {% if article.lang == "JA" %}{% continue %}{% endif %}
<tr>
  <td style="white-space: nowrap; padding-right: 1em; color: #888;">{{ article.year }}</td>
  <td>
    <div>
      {{ article.title }}
      {% if article.lang %}&nbsp;<span class="badge" style="background:#aaa; color:#fff; font-size:0.8em;">{{ article.lang }}</span>{% endif %}
      {% if article.invited %}&nbsp;<span class="badge" style="background:#888; color:#fff; font-size:0.8em;">Invited</span>{% endif %}
      {% if article.reviewed %}&nbsp;<span class="badge" style="background:#555; color:#fff; font-size:0.8em;">Reviewed</span>{% endif %}
    </div>
    <div><br><span class="author">{{ article.authors_html }}</span></div>
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
<p style="font-size: 0.9em; margin-bottom: 1em;">
  <u>Underline</u>: FEBQI lab member
</p>
<table class="table table-sm" style="font-size: 0.9em;">
{% for act in site.data.outreach_activities %}
  {% if act.lang == "ja" %}{% continue %}{% endif %}
<tr>
  <td style="white-space: nowrap; padding-right: 1em; color: #888;">{{ act.date }}</td>
  <td>
    {% if act.presenter_en_html %}{{ act.presenter_en_html }}{% else %}{{ act.presenter_html }}{% endif %}<br>
    {{ act.title }}<br>
    <em>{% if act.venue_en %}{{ act.venue_en }}{% else %}{{ act.venue }}{% endif %}</em>
    <div class="links">
      <span class="btn btn-sm z-depth-0" style="background-color:#f0f0f0; color:#555; cursor:default;">{{ act.format }}</span>
      {% if act.url_en %}<a href="{{ act.url_en }}" class="btn btn-sm z-depth-0" role="button" target="_blank">Link</a>{% elsif act.url %}<a href="{{ act.url }}" class="btn btn-sm z-depth-0" role="button" target="_blank">Link</a>{% endif %}
    </div>
  </td>
</tr>
{% endfor %}
{% for act in site.data.outreach_activities_old %}
  {% if act.lang == "ja" %}{% continue %}{% endif %}
<tr>
  <td style="white-space: nowrap; padding-right: 1em; color: #888;">{{ act.date }}</td>
  <td>
    {{ act.presenter_html }}<br>
    {{ act.title }}<br>
    <em>{{ act.venue }}</em>
    <div class="links">
      <span class="btn btn-sm z-depth-0" style="background-color:#f0f0f0; color:#555; cursor:default;">{{ act.format }}</span>
      {% if act.url %}<a href="{{ act.url }}" class="btn btn-sm z-depth-0" role="button" target="_blank">Link</a>{% endif %}
      {% if act.url2 %}<a href="{{ act.url2 }}" class="btn btn-sm z-depth-0" role="button" target="_blank">{{ act.url2_label | default: "Link 2" }}</a>{% endif %}
    </div>
  </td>
</tr>
{% endfor %}
</table>
</li>

</ul>

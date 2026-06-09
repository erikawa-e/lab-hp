---
page_id: awards
layout: page
permalink: /awards/
title: Awards
description: Awards received by FEBQI lab members
nav: false
nav_order: 5
---

<table class="table table-sm" style="font-size: 0.9em;">
{% for award in site.data.awards %}
<tr>
  <td style="white-space: nowrap; padding-right: 1em; color: #888;">{{ award.date | date: "%b %-d, %Y" }}</td>
  <td>
    <div><strong>{{ award.title_en }}</strong></div>
    <div>{{ award.recipient_en }}</div>
    <div style="font-size:0.9em;"><em>{{ award.work_en }}</em></div>
    {% if award.url %}<div class="links"><a href="{{ award.url }}" class="btn btn-sm z-depth-0" role="button" target="_blank">Link</a></div>{% endif %}
  </td>
</tr>
{% endfor %}
</table>

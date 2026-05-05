---
page_id: repositories
layout: page
permalink: /repositories/
title: Repositories
description:
nav: false
nav_order: 8
---

{% if site.data.repositories.github_users %}

## GitHub users

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for user in site.data.repositories.github_users %}
    {% include repository/repo_user.liquid username=user %}
  {% endfor %}
</div>

---

{% if site.repo_trophies.enabled %}
{% for user in site.data.repositories.github_users %}
{% if site.data.repositories.github_users.size > 1 %}

  <h4>{{ user }}</h4>
  {% endif %}
  <div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% include repository/repo_trophies.liquid username=user %}
  </div>

---

{% endfor %}
{% endif %}
{% endif %}

{% if site.data.repositories.github_repos %}

## GitHub Repositories

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}

## Code Tutorials

<table class="table table-sm" style="font-size: 0.95em;">
  <tr>
    <td><a href="https://sites.google.com/view/febqi/codes/qutip-%E6%97%A5%E6%9C%AC%E8%AA%9E-intro?authuser=0" target="_blank">QuTiP Introduction</a></td>
  </tr>
  <tr>
    <td><a href="https://sites.google.com/view/febqi/codes/mathematica?authuser=0" target="_blank">Mathematica code: Draw a Bloch sphere!</a></td>
  </tr>
</table>

{% include figure.liquid path="assets/img/bloch_cat.png" class="img-fluid" width="30%" %}

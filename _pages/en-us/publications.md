---
page_id: publications
layout: page
permalink: /publications/
title: Publications
description: publications by categories in reversed chronological order.
nav: false
nav_order: 4
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<p style="font-size: 0.9em; margin-bottom: 1em;">
  <u>Underline</u>: FEBQI lab member &nbsp;|&nbsp; <sup>*</sup>: Corresponding author &nbsp;|&nbsp; <span style="color:#999;">gray label</span>: internal raw data folder name
</p>

<div class="publications">

{% bibliography --query @*[year>=2023] %}

</div>

<p style="font-size: 0.85em; color: #888; margin-top: 2rem;">
  For papers before 2023, see the <a href="{{ '/cv/' | relative_url }}">profile publications page</a>.
</p>

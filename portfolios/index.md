---
title: Student Portfolios
---

<div id="links" class="post container">
  <div class="title">
    {{ page.title }}
  </div>

  <div class="content">
    <ul>
      {% assign portfolios = site.data.portfolios | sort: 'name' %}
      {% for portfolio in portfolios %}
        <li><a href="{{ portfolio.file }}.html">{{ portfolio.name }}</a></li>
      {% endfor %}
    </ul>
  </div>
</div>

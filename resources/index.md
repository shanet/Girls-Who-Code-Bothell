---
title: Resources
---

<div id="resources" class="post container">
  <div class="title">
    {{ page.title }}
  </div>

  <div class="content">
    <h1>Slides</h1>

    <ul>
      {% for slide in site.data.slides %}
        <li><a href="{{ slide.link }}">Week {{ forloop.index }}</a></li>
      {% endfor %}
    </ul>

    <h1>Documents</h1>

    <ul>
      {% for document in site.data.documents %}
        <li><a href="{{ document.link }}">{{ document.title }}</a></li>
      {% endfor %}
    </ul>
  </div>
</div>


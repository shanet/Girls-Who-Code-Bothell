---
title: Quick Links
---

<div id="links" class="post container">
  <div class="title">
    {{ page.title }}
  </div>

  <div class="content">
    Girls Who Code Clubs rely on several pieces of technology for the club to run smoothly. Below are some of the technologies we use. All of these resources are free to club participants.

    {% for link in site.data.links %}
      <div class="link_info">
        <div>
          <h1>{{ link.title }}</h1>

          <p>{{ link.description }}</p>
        </div>

        <div>
          <a class="go_to_link" href="{{ link.link }}">Go to {{ link.title }}</a>
        </div>

        <div class="clear"></div>
      </div>
    {% endfor %}
  </div>
</div>

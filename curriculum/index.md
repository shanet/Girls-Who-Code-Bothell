---
title: Curriculum
---

<div class="post container">
  <div class="title">
    {{ page.title }}
  </div>

  <div class="content">
    Our curriculum has three different levels that run concurrently. Each level is a self-paced experience that could take anywhere from a couple months to a couple years to complete. Students will be placed into the level that best matches her experience and current abilities. Bonus activities on each project allow girls to stretch themselves regardless of what level they are in.

    {% for level in site.data.levels %}
      <div class="level">
        <h1>{{ level.title }}</h1>

        <div>
          <img src="{{ site.baseurl }}/assets/images/{{ level.image }}" />
        </div>

        <div>
          <p>Prerequisites: {{ level.prerequisites }}</p>

          <p>Topics covered:
            <ul>
              {% for topic in level.topics %}
                <li>{{ topic }}</li>
              {% endfor %}
            </ul>
          </p>

          <p>Implementation: {{ level.implementation }}</p>
        </div>
      </div>
    {% endfor %}
  </div>
</div>


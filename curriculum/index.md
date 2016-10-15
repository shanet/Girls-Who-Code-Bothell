---
title: Curriculum
---

<div class="post container">
  <div class="title">
    {{ page.title }}
  </div>

  <div class="content">
    <p>Computer science is a rapidly changing field, and the list of programming languages that engineers use is always evolving. Still, there are a few logical problem-solving concepts that are the building blocks of nearly all programming languages. Girls Who Code calls these ideas the Core4: variables, loops, conditionals and functions.</p>

    <p>These Core4 concepts can be combined to solve many kinds of problems, whether you're building a game, making music, or creating digital art. Below, we offer several Activity Sets that will help you learn the Core4 concepts and apply them to whatever you want to build.</p>

    <h1>Activity Sets</h1>

    {% include activity_sets.md activity_sets=site.data.activity_sets %}

    <h1>Extended Activity Sets</h1>

    <p>The Core4 Activity Sets are meant to build proficiency in the Core4: loops, variables, conditionals and functions. However, there is a lot more to Computer Science than these four concepts! Extended Activity Sets give you the chance to explore these other concepts after you have developed a strong grasp of the Core4.</p>

    {% include activity_sets.md activity_sets=site.data.extended_activity_sets %}

    <h1>Example Projects</h1>

    <ul>
      {% for project in site.data.example_projects %}
        <li><a href="{{ project.link }}">{{ project.title }}</a></li>
      {% endfor %}
    </ul>
  </div>
</div>


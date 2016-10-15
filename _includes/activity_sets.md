{% for activity_set in include.activity_sets %}
  <div class="activity_set">
    <h2>{{ activity_set.title }}</h2>

    <div>
      <img src="{{ site.baseurl }}/assets/images/{{ activity_set.image }}" />
    </div>

    <div>
      <ul>
        <li>Description: {{ activity_set.description }}</li>
        <li>Prerequisites: {{ activity_set.prerequisites }}</li>
        <li>Language: {{ activity_set.language }}</li>

        <li>For those interested in:
          <ul>
            {% for like in activity_set.likes %}
              <li>{{ like }}</li>
            {% endfor %}
          </ul>
        </li>

      </ul>
    </div>
  </div>
{% endfor %}

---
title: Semester 1
icon: fas fa-book
order: 6
---

## Semester 1 Posts

{% for post in site.categories.semester1 %}
- [{{ post.title }}]({{ post.url }})
{% endfor %}

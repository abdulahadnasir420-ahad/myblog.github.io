---
title: Semester 2
icon: fas fa-book-open
order: 7
---

## Semester 2 Posts

{% for post in site.categories.semester2 %}
- [{{ post.title }}]({{ post.url }})
{% endfor %}

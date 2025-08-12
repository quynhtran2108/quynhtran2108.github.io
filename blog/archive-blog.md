---
layout: layout.njk
title: Blog Archive
---
<section id="archive-blogs" class="section">
  <h2>Archived Blog Posts</h2>
  <div class="blog-list">
  <a href="../../#blogs" style="color: var(--accentColor); font-weight: 500; text-decoration: underline; display: block; margin-top: 1rem;">&larr; Back to blogs</a>
    {% assign sortedBlogs = collections.blog | reverse %}
    {% assign oldBlogs = sortedBlogs | slice: 4, sortedBlogs.size %}
    {% for post in oldBlogs %}
      <div class="card">
        {% if post.data.image %}
          <img src="{{ post.data.image }}" alt="{{ post.data.title }}" class="featured-image">
        {% endif %}
        <h3>{{ post.data.title }}</h3>
        <h5>Published: {{ post.date | date: "%d.%m.%Y" }}</h5>
        <p>{{ post.data.summary }}</p>
        <a href="{{ post.url }}" class="read-more">Read More</a>
      </div>
    {% endfor %}
  </div>
  
</section>
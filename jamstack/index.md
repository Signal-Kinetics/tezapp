---
title: Home
white_header: true
sections:
  - type: hero_section
    section_id: hero_section
    background_image: images/header.jpg
    background_image_opacity: 65
    content: |
      # Developer Manuscripts

      Follow me to see what I'm up to as a developer
    actions:
      - type: action
        title: See all items
        url: /store
        style: primary
        arrow: true
  - type: featured_products_section
    title: Best sellers
    section_id: best_sellers_section
    light_title: true
    icon: true
    featured_products:
      - products/plant1.md
      - products/plant3.md
      - products/plant5.md
      - products/plant7.md
  - type: featured_categories_section
    section_id: featured_categories_section
    featured_categories:
      - category/bigplants.md
      - category/cactuses.md
  - type: testimonials_section
    section_id: testimonials_section
    title: Testimonials
    testimonials:
      - text: >-
          I didn't know the Snipcart guys were into herbs as well! How beautiful
          is that Planty theme. I'm going to launch a killer JAMstack e-commerce
          store using this for sure.
        author:
          name: John Dope
          location: 'Colorado, USA'
      - text: >-
          Well I'll be d*mned. These plants really ARE greener than any of my
          recruits.
        author:
          name: Major Payne
          location: 'VA, USA'
  - type: promotion_section
    section_id: promotion_section
    title: A new home interior for summer
    subtitle: from $149.99
    image: images/promo.jpg
    background_image: images/leaf.svg
    cta:
      type: action
      title: Discover
      url: /store
      style: secondary
      arrow: true
seo:
  type: stackbit_page_meta
  title: Planty Theme
  description: The preview of the Planty theme
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: Planty Theme
      keyName: property
    - name: 'og:description'
      value: The preview of the Planty theme
      keyName: property
    - name: 'og:image'
      value: images/header.jpg
      keyName: property
      relativeUrl: true
    - name: 'twitter:card'
      value: summary_large_image
    - name: 'twitter:title'
      value: Planty Theme
    - name: 'twitter:description'
      value: The preview of the Planty theme
    - name: 'twitter:image'
      value: images/header.jpg
      relativeUrl: true
layout: home
---

# Badge

> source:  [scss/parts/badge](../../src/scss/parts/_badge.scss)

## Usage

### Default Badge

``` html
<h1>Heading <span class="badge">New</span></h1>
```

### Badge with Color-set

> based on [Color-set](color-set.md)

Available color keywords: default, primary, secondary, info, success, warning, danger, error, light, dark, shade, link

``` html
<p>text and badge <span class="badge primary">Primary</span></p>
```

### Use badge as link

``` html
<p>text and badge <a class="badge success" href="#">Link</a></p>
```

### Rounded Badge

``` html
<a href="#">New Blog <span class="badge round success">4</span></a>
```

### Badge with Stacked Font Awesome Icon

> ~~Link: [http://fontawesome.io/examples/#stacked](http://fontawesome.io/examples/#stacked)~~ @deprecated in v0.5.x

``` html
<span class="fa-stack fa-lg">
  <i class="fa fa-square fa-stack-2x"></i>
  <i class="fa fa-bell fa-stack-1x fa-inverse"></i>
  <span class="badge in-icon danger">8,888</span>
</span>
```

## SCSS variables

``` scss
$badge-font-size: .85em !default;
$badge-border-radius: $radius-small !default;
$badge-default-color: $default-color !default;
```

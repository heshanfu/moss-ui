# Helper
> source:  [scss/components/helper](../src/scss/components/_helper.scss)

## Usage
#### Toggling content
```html
<p class="display-show">paragraph</p>
<p class="display-hide">paragraph</p>
<p class="display-invisible">paragraph</p>
```

#### Fonts
```html
<p class="font-sans-serif">Hello, World!</p>
<p class="font-accent">Hello, World!</p>
<p class="font-cursive">Hello, World!</p>
```

#### Align
```html
<p class="align-center">center align.</p>
<p class="align-left">left align.</p>
<p class="align-right">right align.</p>
<div class="flex-center-container">
  <div class="center-block">
    <p>vertically centering.</p>
  </div>
</div>
```

#### Float
```html
<div class="float-clear">
  <div class="float-right box-line">this is right.</div>
  <div class="float-left box-line">this is left.</div>
</div>
```

#### Position
```html
<!-- fixed top -->
<div class="fixed-top">It's fixed on top.</div>
<!-- sticky top -->
<div class="sticky-top">It'll be sticky on top.</div>
```
**Note:** `.sticky-top` isn't supported in IE and Edge. it will be as static(initial value).

#### Color
> based on [Color-set](color-set.md)

Available color keywords: default, primary, secondary, info, success, warning, danger, error, light, dark, shade, link

```html
<!-- text color -->
<p class="color-primary">...</p>
<p class="color-danger">...</p>
<!-- background color -->
<div class="bg-color-secondary">...</div>
<div class="bg-color-success">...</div>
```

#### Caret
```html
<span class="caret"></span>
<span class="caret up"></span>
```

#### Arrow
```html
<span class="arrow"></span>
<span class="arrow right"></span>
```

#### Box shadow
```html
<div class="shadow"></div>
<div class="shadow-near"></div>
<div class="shadow-far"></div>
```
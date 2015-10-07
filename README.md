# angular-uifaces
AngularJS directive using uifaces.com's API to display sample avatars for UI mockups.

## Installation
```
bower install [--save] angular-uifaces
```

In your html, include the angular-uifaces script:
```html
<script src="bower_packages/src/angular-uifaces.js"></script>
```

## Usage
Just put the `<uifaces>` tag wherever you want to display a sample avatar. It will be compiled into an `<img>` tag containing the actual picture.

## Examples
http://codepen.io/sebastianhaas/pen/WQjLqm

## Plans
* Add support for all different sizes provided by the uifaces.com API
* Possibility to add custom CSS classes to the rendered `<img>`

# ngx-ripple

<a href="https://ngxui.com" target="_blank" style="display: flex;gap: .5rem;align-items: center;cursor: pointer; padding: 0 0 0 0; height: fit-content;">
  <img src="https://ngxui.com/assets/img/ngxui-logo.png" style="width: 64px;height: 64px;">
</a>

This Library is part of the NGXUI ecosystem. <br>
View all available components at https://ngxui.com

`@omnedia/ngx-ripple` is an Angular library that provides a ripple animation effect for your Angular components. This component creates an expanding ripple effect with customizable color, border, and animation duration. Perfect for adding an interactive and engaging effect to backgrounds or containers in your application.

## Features

- Ripple animation with customizable colors and animation duration.
- Easy to integrate as a standalone component.
- Adds a dynamic ripple effect that can enhance the design of your application.

## Installation

Install the library using npm:

```bash
npm install @omnedia/ngx-ripple
```

## Usage

Import the `NgxRippleComponent` in your Angular module or component:

```typescript
import {NgxRippleComponent} from '@omnedia/ngx-ripple';

@Component({
  ...
    imports:
[
  ...
    NgxRippleComponent,
],
...
})
```

Use the component in your template:

```html

<om-ripple
  [rippleColor]="'rgba(0, 255, 255, 0.5)'"
  [rippleBorderColor]="'#00ffff'"
  [animationDuration]="'3s'"
  styleClass="custom-ripple-class"
>
  <div>Your content here</div>
</om-ripple>
```

## API

```html

<om-ripple
  [rippleColor]="rippleColor"
  [rippleBorderColor]="rippleBorderColor"
  [animationDuration]="animationDuration"
  styleClass="your-custom-class"
>
  <ng-content></ng-content>
</om-ripple>
```

- rippleColor (optional): The color of the ripple effect. Accepts any valid CSS color value (e.g., 'rgba(0, 255, 255, 0.5)', '#00ffff').
- rippleBorderColor (optional): The color of the ripple's border. Accepts any valid CSS color value.
- animationDuration (optional): The duration of the ripple animation. Accepts any valid CSS time value (e.g., '3s', '5s').
- styleClass (optional): A custom CSS class to apply to the component's wrapper element.

## Example

```html

<om-ripple
  [rippleColor]="'rgba(255, 105, 180, 0.6)'"
  [rippleBorderColor]="'#ff69b4'"
  [animationDuration]="'2s'"
  styleClass="ripple-background"
>
  <div class="content">This is a ripple background effect</div>
</om-ripple>
```

This will create a ripple effect with pink-colored ripples and a custom border color that animates over a 2-second duration.

## Styling

To customize the appearance of the ripple or the container, use the styleClass input to apply your own CSS classes.

```css
.ripple-background {
  background-color: #000;
  height: 100vh;
  position: relative;
}

.content {
  position: relative;
  z-index: 1;
  color: white;
  text-align: center;
  padding-top: 50px;
}
```

## Contributing

Contributions are welcome. Please submit a pull request or open an issue to discuss your ideas.

## License

This project is licensed under the MIT License.

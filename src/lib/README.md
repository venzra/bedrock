# Bedrock

This is the baseline project used for the design components used on the Open Source edition of the Veznra platform.

## Installation

To install run the command;

```
npm i @venzra/bedrock
```

To start using the components import them in your project;

```javascript
import { RockButtonModule } from '@venzra/bedrock';

@NgModule({
    imports: RockButtonModule,
})
export class AppModule { }
```

## Dependencies

To build this library we have benefited from several open source projects these are required to use certainly functionality within Bedrock.

- [Angular CDK](https://github.com/angular/components)  
  Component development kit from Angular to build component libraries.

- [Font Awesome](https://github.com/FortAwesome/angular-fontawesome)  
  Vector SVG icon library.

- [Marked](https://github.com/markedjs/marked)  
  Lightweight markdown rendering engine.

- [EXIF JS](https://github.com/exif-js/exif-js)  
  Retrieve image meta data from binary image files.

## Features

The following are a list of components that Bedrock provides, full documentation is available at https://bedrock.venzra.com.

### Form Components

- Input  
  Support for standard HTML form fields with validation messages.

- Checkbox  
  A simple to do list style toggle to select or de-select form choices.

- Images  
  This provides a drag and drop capable image form field with preview and uses canvas to resize the image on the browser.

### Action Components

- Button  
  A button which allows a user to provide intent of an action, buttons can be disabled and various colours are available.

- Pagination  
  Typically data cannot be viewed on a single page, pagination allows an easy way to traverse this data.

### Layout Components

- Alert  
  Show warning messages to users or prompts to give further information.

- Card  
  A clean clear way to contain content on a page.

- Expansion  
  Often additional or optional information does not need to be immediately viewable, this provides a simple way to toggle display of such content.

### Formatting Directives

- Markdown  
  Manage server side content in Markdown and use this to render the content in the browser.

# @dot-subscribe/vue3-async-pipe

Angular's async pipe, implemented in Vue 3, as close as possible.

## Installation

> npm install @dot-subscribe/vue3-async-pipe

## Features
* Reactively update the DOM
* Automatically unsubscribe when the component is destroyed

## Example project
https://github.com/JoshuaHull/vue3-async-pipe-example

## Usage

In Vue 3, we are unable to use filters in our HTML templates. So, unlike Angular,
we cannot do `{{ result | async }}`.

That's okay, it's pretty clean anyway:

HTML:

```html
<span>{{ result }}</span>
```

Typescript:
```ts
import { interval } from 'rxjs';
import { defineComponent } from 'vue'
import { asyncPipe } from '@dot-subscribe/vue3-async-pipe';

export default defineComponent({
  name: 'AsyncPipeExample',
  setup: (props) => {
    const stream = interval(1000);
    const result = asyncPipe(stream);

    return {
      result,
    };
  },
})
```

## License

GPL 3.0 License

Vue 3 Async Pipe - Angular's async pipe, implemented in Vue 3,
as close as possible

Copyright (C) 2020 Joshua Hull

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.

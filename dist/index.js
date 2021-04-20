/*
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
*/
import { ref, watchEffect } from '@vue/runtime-core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
export function asyncPipe(stream) {
    const onDestroy = new Subject();
    let out = ref(undefined);
    watchEffect(onInvalidate => {
        stream.pipe(takeUntil(onDestroy)).subscribe(output => {
            out.value = output;
        });
        onInvalidate(() => {
            onDestroy.next();
        });
    });
    return out;
}
//# sourceMappingURL=index.js.map
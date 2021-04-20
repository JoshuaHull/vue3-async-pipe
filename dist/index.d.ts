import { Ref } from '@vue/runtime-core';
import { Observable } from 'rxjs';
export declare function asyncPipe<T>(stream: Observable<T>): Ref<T | undefined>;

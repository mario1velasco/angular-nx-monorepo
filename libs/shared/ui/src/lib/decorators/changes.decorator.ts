/* eslint-disable @typescript-eslint/ban-types */
import { SimpleChanges } from '@angular/core';

const enum ChangesStrategy {
  First = 'firstTime',
  Each = 'eachTime',
  NonFirst = 'nonFirst',
}

export function TrackChanges<Type>(
  key: string,
  methodName: string,
  strategy: ChangesStrategy = ChangesStrategy.Each
): Function {
  return function (
    targetClass: any,
    functionName: string,
    descriptor: any
  ): Function {
    const source = descriptor.value;

    descriptor.value = function (changes: SimpleChanges): Function {
      if (changes && changes[key] && changes[key].currentValue !== undefined) {
        const isFirstChange = changes[key].firstChange;

        if (
          strategy === ChangesStrategy.Each ||
          (strategy === ChangesStrategy.First && isFirstChange) ||
          (strategy === ChangesStrategy.NonFirst && !isFirstChange)
        ) {
          targetClass[methodName].call(this, changes[key].currentValue as Type);
        }
      }

      return source.call(this, changes);
    };

    return descriptor;
  };
}

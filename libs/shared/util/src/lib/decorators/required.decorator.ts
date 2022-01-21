// ! SOLO FUNCIONA CUANDO SOLO HAY UN REQUIRED EN EL HTML
export function Required(target: object, propertyKey: string) {
  Object.defineProperty(target, propertyKey, {
    get() {
      console.log('GET');

      throw new Error(
        `Attribute ${propertyKey} from ${target.constructor.name} is required`
      );
    },
    set(value) {
      Object.defineProperty(target, propertyKey, {
        value,
        writable: true,
        configurable: true,
      });
    },
    configurable: true,
  });
}

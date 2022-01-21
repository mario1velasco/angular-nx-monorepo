export const EnumUtils = {
  existsOnEnum: (
    value: string | undefined,
    my_enum: object,
    constructorName: string
  ) => {
    const exist = Object.values(my_enum).some((x) => x === value);
    if (!exist) {
      throw new Error(
        `On ${constructorName} not exist on an enum the value ${value}`
      );
    }
  },
};

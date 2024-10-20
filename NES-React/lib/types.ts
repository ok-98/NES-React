import { ElementType } from "react";

export const colorClass = {
  primary: "is-primary",
  success: "is-success",
  warning: "is-warning",
  error: "is-error",
  disabled: "is-disabled",
} as const satisfies Record<string, string>;

export type Color = keyof typeof colorClass;

export type WithColor = {
  color?: Color;
}

export type WithClass = {
  className?: string;
}

type AsProp<E extends ElementType> = {
  as?: E;
};

type PropsToOmit<E extends ElementType, P> = keyof (AsProp<E> & P);

// This is the first reusable type utility we built
export type PolymorphicComponentProp<
  E extends React.ElementType,
  Props = {}
> = React.PropsWithChildren<Props & AsProp<E>> &
  Omit<React.ComponentPropsWithoutRef<E>, PropsToOmit<E, Props>>;

  // This is a new type utitlity with ref!
export type PolymorphicComponentPropWithRef<
  E extends ElementType,
  Props = {}
> = PolymorphicComponentProp<E, Props> & { ref?: PolymorphicRef<E> };

// This is the type for the "ref" only
export type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>["ref"];

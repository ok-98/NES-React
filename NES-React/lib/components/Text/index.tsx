import { ElementType, forwardRef } from "react";
import { PolymorphicComponentPropWithRef, PolymorphicRef, WithClass, WithColor } from "../../types";
import React from "react";
import { clsx } from "clsx";

type OwnProps = WithClass & WithColor & {

}

type Props<E extends ElementType> = PolymorphicComponentPropWithRef<E, OwnProps>


export const Text = forwardRef(<E extends ElementType>({ as, className, ...rest }: Props<E>, ref?: PolymorphicRef<E>) => {
  const Component = as || "span";

  return <Component ref={ref} className={clsx("nes-text", className)} {...rest} />
});

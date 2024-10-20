import React from 'react'

import styles from "./styles.module.scss"
import clsx from 'clsx'
import { colorClass, WithColor } from '../../types';

type GenericButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
type GenericInputProps = React.InputHTMLAttributes<HTMLInputElement>;
type GenericLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

type ButtonOwnProps = WithColor;
type ButtonBaseProps = (GenericButtonProps | GenericInputProps | GenericLinkProps);
type ButtonProps = ButtonOwnProps & ButtonBaseProps;

const isButton = (props: ButtonBaseProps): props is GenericButtonProps => {
  return isInput(props) === false && isLink(props) === false;
}

const isInput = (props: ButtonBaseProps): props is GenericInputProps => {
  return (props as GenericInputProps).type !== undefined;
}

const isLink = (props: ButtonBaseProps): props is GenericLinkProps => {
  return (props as GenericLinkProps).href !== undefined;
}

export const NESButton = ({ color, className, children, ...props }: ButtonProps) => {
  if (isInput(props)) {
    return <label className={clsx(styles["nes-btn"], color && styles[colorClass[color]], className)}>
      <span>{children}</span>
      <input {...props} />
    </label>
  }
  if (isLink(props)) {
    return <a {...props} className={clsx(styles["nes-btn"], color && styles[colorClass[color]], className)}>{children}</a>
  }
  if (isButton(props)) {
    return <button {...props} className={clsx(styles["nes-btn"], color && styles[colorClass[color]], className)}>{children}</button>
  }
  return null;
}

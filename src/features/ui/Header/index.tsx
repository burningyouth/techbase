import clsx from "clsx"
import classes from "./Header.module.css"

export type HeaderProps = React.ComponentProps<"div">

export const Header = ({ className, ...otherProps }: HeaderProps) => {
  return <div className={clsx(classes.root, className)} {...otherProps} />
}

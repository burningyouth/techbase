import clsx from "clsx"
import classes from "./Button.module.css"

export type ButtonProps = React.ComponentProps<"button">

export const Button = ({ className, ...props }: ButtonProps) => {
  return <button className={clsx(className, classes.root)} {...props} />
}

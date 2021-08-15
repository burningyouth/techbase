import clsx from "clsx"
import classes from "./Label.module.css"

export type LabelProps = React.ComponentProps<"label">

export const Label = ({ className, ...props }: LabelProps) => {
  return <label className={clsx(className, classes.root)} {...props} />
}

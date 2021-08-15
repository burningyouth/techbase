import clsx from "clsx"
import classes from "./Input.module.css"

export type InputProps = React.ComponentProps<"input"> & {
  error?: boolean
  success?: boolean
}

export const Input = ({ className, success, error, ...props }: InputProps) => {
  return (
    <input
      autoComplete="off"
      className={clsx(
        className,
        classes.root,
        success && classes.success,
        error && classes.error
      )}
      {...props}
    />
  )
}

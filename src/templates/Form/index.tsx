import React from "react"
import { DeepMap } from "react-hook-form"
import { Button } from "../../shared/ui/Button"
import { Caption, CaptionProps } from "../../shared/ui/Caption"
import { Grid } from "../../shared/ui/Grid"

export type FormLayoutProps = React.ComponentProps<"form"> & {
  caption?: {
    color?: CaptionProps["color"]
    message: React.ReactNode
  }
}

export const FormLayout = ({
  children,
  caption,
  ...props
}: FormLayoutProps) => {
  return (
    <form {...props}>
      <Grid>
        {children}
        {caption && <Caption color={caption.color}>{caption.message}</Caption>}
      </Grid>
    </form>
  )
}

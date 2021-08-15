import { Caption, CaptionProps } from "../../../shared/ui/Caption"
import { Input, InputProps } from "../../../shared/ui/Input"
import { Label, LabelProps } from "../../../shared/ui/Label"

export type TextFieldProps = InputProps & {
  required?: boolean
  label?: React.ReactNode
  caption?: React.ReactNode
  LabelProps?: Omit<LabelProps, "children">
  CaptionProps?: Omit<CaptionProps, "children">
}

/**
 * Текстовое поле, состоящие из Label, Input и Caption
 */
export const TextField = ({
  LabelProps,
  CaptionProps,
  label,
  caption,
  error,
  success,
  required,
  ...inputProps
}: TextFieldProps) => {
  return (
    <Label {...LabelProps}>
      <span>
        {label}
        {required && <Caption color="error"> *</Caption>}
      </span>
      <Input {...inputProps} error={error} success={success} />
      {caption && (
        <Caption
          color={error ? "error" : success ? "success" : undefined}
          {...CaptionProps}
        >
          {caption}
        </Caption>
      )}
    </Label>
  )
}

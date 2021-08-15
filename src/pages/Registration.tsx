import axios from "axios"
import { useCallback, useState } from "react"
import { useForm } from "react-hook-form"
import { TextField } from "../features/ui/TextField"
import { required } from "../shared/forms/lib"
import { Button } from "../shared/ui/Button"
import { Container } from "../shared/ui/Container"
import { FormLayout, FormLayoutProps } from "../templates/Form"

export const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [caption, setCaption] = useState<FormLayoutProps["caption"]>()
  const [loading, setLoading] = useState(false)

  const onSubmit = useCallback(async (data: any) => {
    setLoading(true)
    try {
      await axios.post(
        "http://ec2-18-117-84-227.us-east-2.compute.amazonaws.com:3000/register",
        data
      )
      setCaption({
        color: "success",
        message: "Вы успешно зарегистрировались!",
      })
    } catch (error: any) {
      setCaption({
        color: "error",
        message: Object.values(
          error.response.data.errors
        )[0] as React.ReactNode,
      })
    } finally {
      setLoading(false)
    }
  }, [])

  return (
    <Container maxWidth="sm">
      <FormLayout
        caption={caption}
        onSubmit={handleSubmit(onSubmit, (errors) => {
          setCaption({
            color: "error",
            message: Object.values(errors)[0].message,
          })
        })}
      >
        <TextField
          type="email"
          {...register("email", required)}
          error={errors.email}
          label="Почта"
          required
        />
        <TextField
          {...register("login", required)}
          label="Логин"
          required
          error={errors.login}
        />
        <TextField
          {...register("password", required)}
          label="Пароль"
          type="password"
          error={errors.password}
          required
        />

        <Button type="submit" disabled={loading}>
          {loading ? "Отправляем данные..." : "Зарегистрироваться"}
        </Button>
      </FormLayout>
    </Container>
  )
}

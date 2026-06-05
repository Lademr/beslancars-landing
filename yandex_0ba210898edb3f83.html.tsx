import { jsx } from "@app/html-jsx"

export const yandexVerificationRoute = app.get('/', async (ctx, req) => {
  return (
    <html>
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      </head>
      <body>Verification: 0ba210898edb3f83</body>
    </html>
  )
})

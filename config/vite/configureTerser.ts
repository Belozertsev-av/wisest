export const configureTerser = (isProd: boolean) => {
  return isProd
    ? {
        compress: {
          drop_console: true,
          drop_debugger: true
        },
        output: {
          comments: false
        }
      }
    : undefined
}

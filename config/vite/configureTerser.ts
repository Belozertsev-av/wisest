export const configureTerser = () => {
  return {
    compress: {
      drop_console: true,
      drop_debugger: true,
    },
    output: {
      comments: false,
    },
  }
}

import 'bootstrap/dist/css/bootstrap.css';

// import 'relative/path/to/bootstrap/dist/js/bootstrap.js'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
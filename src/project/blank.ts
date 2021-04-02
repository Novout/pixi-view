import { TemplateCreate } from '../utils';

export const createBlankHTML = (): TemplateCreate => {
  return {
    name: 'index.html',
    content: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Blank Template" />
    <title>Starter Snowpack App</title>
  </head>
  <body></body>
  <script type="module" src="/index.js"></script>
</html>
`
  }
}

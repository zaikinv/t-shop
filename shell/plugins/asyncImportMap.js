import html from "@rollup/plugin-html";

export default function asyncImportMap({ appId, entryCss, url, title }) {
  return html({
    template: ({ attributes, files, meta, publicPath }) => {
      let links = [...(files.css || [])];
      let scripts = [...(files.js || [])];
      let entryScript = '';

      function makeHtmlAttributes(attributes) {
        if (!attributes) {
          return '';
        }

        const keys = Object.keys(attributes);
        return keys.reduce((result, key) => (result += ` ${key}="${attributes[key]}"`), '');
      }

      const metas = meta
        .map((input) => {
          const attrs = makeHtmlAttributes(input);
          return `<meta${attrs}>`;
        })
        .join('\n');

      links = links
        .filter(({ name }) => {
          return name === `src/${entryCss}`;
        })
        .map(({ fileName }) => {
          const attrs = makeHtmlAttributes(attributes.link);
          return `<link href="${publicPath}${fileName}" rel="stylesheet"${attrs}>`;
        })
        .join('\n');

      scripts
        .filter((script) => {
          if (script.isEntry) {
            entryScript = script.fileName;
          }
          return script.isEntry;
        });

      return `
          <!doctype html>
          <html lang="en">
          <head>
            ${metas}
            <title>${title}</title>
            ${links}    
          </head>
          <body>
            <script>
              const loadImportMap = async () => {
                const imports = await (
                  await fetch("${url}")
                ).json();
                const im = document.createElement("script");
                im.type = "importmap";
                im.textContent = JSON.stringify({ imports });
                document.head.append(im);
              };
          
              const loadScript = async () => {
                const script = document.createElement("script");
                script.type = "module";
                script.src = "/${entryScript}";
                script.crossOrigin = true;
                document.body.appendChild(script);
              };
          
              (async () => {
                // Load Import Map
                await loadImportMap();
                // Load Scripts
                await loadScript();
              })();
              </script>
              <div id="${appId}"></div>
          </body>
          </html>        
        `;
    }
  });
}

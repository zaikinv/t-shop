#!/usr/bin/env node
const fs = require("fs");
const encoding = { encoding: "utf8" };
const requestBody = new FormData();

const publisher = () => {
  const bundleFile = JSON.parse(
    fs.readFileSync("./dist/manifest.json", encoding)
  )["index.html"].file;

  requestBody.append(
    "file",
    new Blob([fs.readFileSync(`./dist/${bundleFile}`, encoding)], {
      type: "text/javascript",
    }),
    bundleFile
  );

  const packageJSON = JSON.parse(fs.readFileSync("./package.json", encoding));

  requestBody.append("microfrontend-name", packageJSON.name);

  fetch("http://localhost:3000/api/uploadAsset", {
    method: "POST",
    body: requestBody,
    headers: {},
  });

  for (const [dependencyName, dependencyVersion] of Object.entries(
    packageJSON.dependencies || {}
  )) {
    fetch("http://localhost:3000/api/updateImportMap", {
      method: "POST",
      body: `dependency-name=${dependencyName}&dependency-version=${dependencyVersion.replace(
        "^",
        ""
      )}`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
  }
};

publisher();

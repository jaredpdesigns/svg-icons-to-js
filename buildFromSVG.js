import fs from "fs";
import { parse } from "node-html-parser";

function readIcons() {
  const dir = fs.readdirSync("svg");
  let counter = 0;
  let arr = [];
  dir.forEach((file) => {
    if (file !== ".DS_Store") {
      const name = file.replace(".svg", "");
      const el = fs.readFileSync(`svg/${file}`, "utf-8");
      const root = parse(el);
      const paths = root.getElementsByTagName("path");
      let arrPaths = [];
      paths.forEach((path) => {
        arrPaths.push({
          fill: parse(path.getAttribute("fill")).text,
          d: parse(path.getAttribute("d")).text,
        });
      });
      arr.push({
        name: name,
        dimensions: {
          height: Number(root.querySelector("svg").getAttribute("height")),
          width: Number(root.querySelector("svg").getAttribute("width")),
        },
        paths: arrPaths,
        viewBox: root.querySelector("svg").getAttribute("viewBox"),
      });
      counter += 1;
    }
  });
  !fs.existsSync("data") ? fs.mkdirSync("data", { recursive: true }) : null;
  const data = JSON.stringify(arr, null, 2);
  fs.writeFileSync("./data/icons.json", data);
  fs.writeFileSync("./data/icons.js", `export default ${data}`);
  console.log(`🔨 Added ${counter} icons to our data folder`);
}

function buildExports() {
  const model = `const icons = require("./data/icons.json"); module.exports = { icons };`;
  fs.writeFileSync(
    "index.js",
    `import icons from "./data/icons.js"; export { icons };`
  );
  fs.writeFileSync(
    "index.cjs",
    `const icons = require("./data/icons.json"); module.exports = { icons };`
  );
}

readIcons();
buildExports();

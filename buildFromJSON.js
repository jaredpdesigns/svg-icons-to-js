import fs from "fs";
import icons from "./data/icons.js";

function readJSON() {
  !fs.existsSync("svg") ? fs.mkdirSync("svg", { recursive: true }) : null;
  icons.forEach((icon) => {
    const model = `<svg xmlns="http://www.w3.org/2000/svg" height="${
      icon.dimensions.height
    }" width="${icon.dimensions.width}" viewBox="${
      icon.viewBox
    }"><g fill="none" fill-rule="evenodd">${icon.paths
      .map((path) => {
        return `<path fill="${path.fill}" d="${path.d}"></path>`;
      })
      .join("")}</g></svg>`;
    fs.writeFileSync(`./svg/${icon.name}.svg`, model);
  });
  console.log(`🔨 Added ${icons.length} icons to our svg folder`);
}

readJSON();

import fs from "fs";
import icons from "./data/icons.js";
import svg2img from "svg2img";

function buildPNGs() {
  let sizes = process.argv.slice(2).length ? process.argv.slice(2) : [1, 2];
  !fs.existsSync("png") ? fs.mkdirSync("png", { recursive: true }) : null;
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
    sizes.forEach((size) => {
      svg2img(
        model,
        {
          format: "png",
          resvg: {
            fitTo: {
              mode: "height",
              value: icon.dimensions.height * Number(size),
            },
            fitTo: {
              mode: "width",
              value: icon.dimensions.width * Number(size),
            },
          },
        },
        (error, buffer) => {
          fs.writeFileSync(`png/${icon.name}@${size}x.png`, buffer);
        }
      );
    });
  });
  console.log(
    `🔨 Added ${icons.length * sizes.length} icons to our png folder`
  );
}

buildPNGs();

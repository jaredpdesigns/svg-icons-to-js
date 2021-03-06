# SVG Icons to JS

A small utility to build dynamic JS/JSON output from a folder of SVGs.

## From a Folder

Providing you have a folder called `svg` in your root directory full of beautiful icons, running the following command will produce a new folder called `data` with both `icons.js` and `icons.json` available.

```bash
yarn build
```

Additionally you’ll get both `index.js` and `index.cjs` in the root of the directory—perfect for exporting the results of your icons in various `@import` statements.

```js
@import { icons } from "@jaredpdesigns/icons"
```

## From a Data file

The directory also works backwards that if you’d prefer updating the standard `icons.js` file in place of producing standalone SVGs, you can add an icon, and run:

```bash
yarn buildFromData
```

The results will be new icons placed in the `svg` folder.

## Create Directory of PNGs

If you need icons in both SVG and PNG format, you can optionally run:

```bash
yarn buildPNGs
```

The result will be a folder of all your icons in PNG format in both 1x and 2x variants. 

Optionally, you can pass in an army of scale arguments to return multiple sizes past the 1x and 2x variants:

```bash
yarn buildPNGs {1,2,3,4}
```
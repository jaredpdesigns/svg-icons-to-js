export default [
  {
    name: "flattened",
    dimensions: {
      height: 32,
      width: 32,
    },
    paths: [
      {
        fill: "currentColor",
        d: "M16 0a4 4 0 0 1 4 4v7.999L28 12a4 4 0 1 1 0 8h-8v8a4 4 0 1 1-8 0v-8H4a4 4 0 1 1 0-8h8V4a4 4 0 0 1 4-4Z",
      },
    ],
    viewBox: "0 0 32 32",
  },
  {
    name: "layered",
    dimensions: {
      height: 32,
      width: 32,
    },
    paths: [
      {
        fill: "red",
        d: "M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0Zm0 4C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12S22.627 4 16 4Z",
      },
      {
        fill: "red",
        d: "M8 14h16a2 2 0 1 1 0 4H8a2 2 0 1 1 0-4Z",
      },
    ],
    viewBox: "0 0 32 32",
  },
  {
    name: "logo",
    dimensions: {
      height: 64,
      width: 74,
    },
    paths: [
      {
        fill: "#41B883",
        d: "M45.545 0 37 14.78 28.455 0H0l37 64L74 0z",
      },
      {
        fill: "#34495E",
        d: "M45.468 0 37 14.626 28.532 0H15l22 38L59 0z",
      },
    ],
    viewBox: "0 0 74 64",
  },
];

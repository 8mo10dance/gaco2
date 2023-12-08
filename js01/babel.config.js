module.exports = (api) => {
  api.cache(true);

  const presets = ["@babel/preset-env"];

  const env = {
    test: {
      presets: [["@babel/preset-env", { targets: { node: "current" } }]],
    },
  };

  return {
    presets,
    env,
  };
};

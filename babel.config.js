module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "i18next-extract",
        {
          locales: ["en"],
          defaultNS: "common",
          outputPath: "src/locales/{{locale}}/{{ns}}.json",
          keyAsDefaultValue: ["en"],
          keySeparator: null,
          nsSeparator: ":",
          discardOldKeys: false,
        },
      ],
    ],
  };
};

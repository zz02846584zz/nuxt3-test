function capitalize(str) {
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

export { capitalize as c };
//# sourceMappingURL=str.e3d4e921.mjs.map

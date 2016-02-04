function noop() {
  return null;
}

// add more extensions if you have more imported file
// that you don't want to compile eg. css less scss png
require.extensions['.css'] = noop;

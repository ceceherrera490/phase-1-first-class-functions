function receivesAFunction(callBack) {
  callBack();
}

function returnsANamedFunction() {
  let funcName = function () {};
  return funcName;
}

function returnsAnAnonymousFunction() {
  return () => {};
}

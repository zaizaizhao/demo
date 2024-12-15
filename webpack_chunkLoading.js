var chunLoadingGlobal = [];

function callBack(a, data) {
  a(data);
}

chunLoadingGlobal.push = callBack.bind(
  null,
  chunLoadingGlobal.push.bind(chunLoadingGlobal)
);

chunLoadingGlobal.push("1");


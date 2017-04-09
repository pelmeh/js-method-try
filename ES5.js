var tryProxy = function (context) { 
  return new Proxy({}, {
    get: function(target, prop) {
      if (prop in context) {
        return context[prop];
      } else {
        return undefined;
      }
    }
  });
}

Object.defineProperty(Object.prototype, 'try', {
  get: function () { return tryProxy(this); }
})

const addEvent = function(object, type, callback) {
  if (object == null || typeof object === 'undefined') return;
  if (object.addEventListener) {
    object.addEventListener(type, callback, false);
  } else if (object.attachEvent) {
    object.attachEvent(`on${type}`, callback);
  } else {
    // eslint-disable-next-line no-param-reassign
    object[`on${type}`] = callback;
  }
};

export default addEvent;

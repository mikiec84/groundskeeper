function merge(target) {

    var objects = Array.prototype.slice.call(arguments, 1),
        keys = [];

    objects.forEach(function (val, idx) {
        keys = Object.keys(val);
        keys.forEach(function (val) {
            target[val] = objects[idx][val];
        });
    });
}
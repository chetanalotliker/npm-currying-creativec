function currying(a) {
    return function (b) {
        return function (c) {
            return a * b * c;
        }
    }
}
currying(2)(3)(4);
module.export = currying; 

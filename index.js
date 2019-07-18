const isFunction = function (obj) {
    return !!(obj && obj.constructor && obj.call && obj.apply);
};

module.exports = function chain(data) {
    return {
        if(condition, thanFn, elseFn) {
            const _condition = isFunction(condition) ? condition(data) : condition;

            return chain(_condition
                ? thanFn ? thanFn(data) : data
                : elseFn ? elseFn(data) : data
            );
        },
        chain(f) {
            return chain(f(data));
        },

        end() {
            return data;
        }
    };
};

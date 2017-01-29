
/**
 * Collected callbacks and call
 * @returns {{add: (CollectedCalls.add|*|add), call: (CollectedCalls.call|*)}}
 * @constructor
 */
function CollectedCalls() {
    var that = this;

    that.calls = [];
    that.orders = [];
    that.count = 0;

    /**
     * Get next count
     * @returns {number}
     */
    that.nextCount = function ()
    {
        do {
            that.count++;
        } while  (~that.orders.indexOf(that.count));

        return that.count;
    };

    /**
     * Add to stack call functions
     * @param {function} call
     * @param {number}   order
     */
    that.add = function (call, order)
    {
        that.nextCount();

        order = order || that.count;
        call  = typeof call === 'function' ? call : function(){};
        if (~that.orders.indexOf(order))
            order = that.count;

        that.orders.push(order);

        that.calls.push({
            order : order,
            call  : call
        });
    };

    /**
     * Call all function
     */
    that.call = function () {
        that.calls = that.calls.sort(function (a, b) {
            return a.order > b.order;
        });

        for (var i = 0; i < that.calls.length; ++i)
            that.calls[i].call();

    };

    return {
        add  : that.add,
        call : that.call
    };
}

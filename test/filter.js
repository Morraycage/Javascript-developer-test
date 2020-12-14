var {filter} = require('../app');

describe('The TEST CLI', function(){
    it('filter', function(){
        process.argv[3] = '--filter=ry';
        return filter;
    });
});

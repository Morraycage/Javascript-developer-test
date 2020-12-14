var assert = require('assert');
var expect = require("chai").expect;
var {count, filter} = require('../app');

describe('The TEST CLI', function(){
    it('count', function(){
        return count;
    });

    it('filter', function(){
        return filter;
    });
});

'use strict';

describe('wesapplication.version module', function() {
  beforeEach(module('wesapplication.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});

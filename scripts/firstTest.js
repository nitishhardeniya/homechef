describe("test it first", function() {
    it("should throw an exception if sum doesn't match", function() {
		var a = 12;
		var b = 22;
		var c = a+b;
		expect(c).toBe(34);
		expect(c).not.toBe(null);
	});
	
	it("should work for objects", function() {
      var foo = {
        a: 12,
        b: 34
      };
      var bar = {
        a: 12,
        b: 34
      };
		expect(foo).toEqual(bar);
		expect(foo.a).toBeDefined();
		expect(foo.c).not.toBeDefined();
    });

});


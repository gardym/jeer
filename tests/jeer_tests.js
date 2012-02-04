// jeer_tests.js

function runJeerSelfTests() {

	tests("Assertion Tests", function() {
	
		before(function() {
			var a = null;
		});
	
		after(function() {
			var b = null;
		});
	
		test("assert(true) Passes", function() {
			assert(true);
		});
	
		test("assert(false) Fails (Fails)", function() {
			try {
				assert(false);
			}
			catch(ex) {
				assert(true);
			}
		})
	
		test("2 + 2 = 4", function() {
			assertEqual(2 + 2, 4);
		});

		test("2 + 2 = 5 (Fails)", function() {
			try {
				assertEqual(2 + 2, 5);							
			}
			catch(ex) {
				assert(true);
			}
		})

		test("null is ... null", function() {
			assertNull(null);
		});

		test("null is not null (Fails)", function() {
			try {
				assertNotNull(null);
			}
			catch(ex) {
				assert(true);
			}
		});

		test("1 is not null", function() {
			assertNotNull(1);
		});
	
		test("1 is null (Fails)", function() {
			try {
				assertNull(1);							
			}
			catch(ex) {
				assert(true);
			}
		});
	
	});

	tests("Modules Tests", function() {
	
		test("Second Module Executes First Test", function() {
			assert(true);
		});
	
		test("Second Test Here Executes Second Test", function() {
			assert(true);
		});
	
	});
	
	tests("Failing Module Tests (Fails)", function() {
	    test("Fail Test Fails", function() {
	        assert(false);
	    });
	});
	
}

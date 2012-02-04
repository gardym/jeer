// jeer.js

function assert(expression) {
    if(!expression)
        throw "Assertion failed";
}

function assertNotNull(value) {
    assert(value != null);
}

function assertEqual(a, b) {
    assert(a == b);
}

function assertNull(value) {
    assert(value == null);
}



var _before = null, _after = null;
var _tests = [];

function before(f) {
    _before = f;
}

function after(f) {
    _after = f;
}

function test(name, f) {
    _tests[name] = f;
}

function tests(name, f) { // , outputFormatter) - use a different formatter for outputs (console, html)
    
    _tests = [], _before = null, _after = null;
    
    f();
    runAndPrintTests(name);
    
}


// ======================================================
// Consider the rest of this private!
// ======================================================

function runTests() {
    
    var results = [];
    
    for(var name in _tests) {

        _before && _before();
        try {
            _tests[name]();
            results[name] = "Pass";
        } 
        catch(err) {
            results[name] = "Fail";
        }    
        _after && _after();    
    }
    
    return results;
}

function runAndPrintTests(moduleName) {
    var results = runTests();
    htmlDisplayTestResults(moduleName, results);
}

function htmlDisplayTestResults(moduleName, results) {
    
    var moduleState = "pass";
    var passCount = 0, failCount = 0, total = 0;

    var table = document.createElement("table");
    table.className = "testResults";
    
    for(var name in results) {
        var row = document.createElement("tr");
        row.className = results[name].toLowerCase();
        table.appendChild(row);
        
        row.appendChild(createElementWithValue("td", name));        
        row.appendChild(createElementWithValue("td", results[name]));
        
        if(results[name] == "Fail") {
            moduleState = "fail";
            failCount++;
        } else {
            passCount++;
        }
            
        total++;
    }
    
    var moduleSummary = "Passed " + passCount + "/" + total + " tests (" + failCount + " failed)";
    var header = createElementWithValue("h1", moduleName + " - " + moduleSummary);
    header.className = moduleState;
    
    document.body.appendChild(header);
    document.body.appendChild(table);
}

function createElementWithValue(tagName, value) {
    var e = document.createElement(tagName);
    e.innerHTML = value;
    return e;
}



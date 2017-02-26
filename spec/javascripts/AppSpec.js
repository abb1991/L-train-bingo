describe("app", function(){
  var user;

  beforeEach(function(){
    user = {name: "alex"}
  })

  it("should have a user", function(){
    expect(user.name).toBe("alex");
  })
})

describe("new test suite", function(){
  var stuff;
  var timerCallback;
  beforeEach(function(){
    timerCallback = jasmine.createSpy("timerCallback");
    jasmine.clock().install();
    stuff = "abc";
  })

  afterEach(function(){
    jasmine.clock().uninstall();
    stuff = "";
  })

  it("should be async", function(){

    setTimeout(function(){
      timerCallback();
    })

    expect(timerCallback).not.toHaveBeenCalled();

    jasmine.clock().tick(101);

    expect(timerCallback).toHaveBeenCalled();
  })

  it ("should have stuff", function(){
    expect(stuff).toBe("abc")
  })
})
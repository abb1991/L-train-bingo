describe("app", function(){
  var user;

  beforeEach(function(){
    user = {name: "alex"}
  })

  it("should have a user", function(){
    expect(user.name).toBe("alex");
  })
})
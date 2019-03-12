describe ("User", function() {
  beforeEach(function(){
    user = new User("name", "email", "password")
  })
  it("has a username", function() {
    expect(user.username).toEqual("name")
  })

  it("user has email", function() {
    expect(user.email).toEqual("email")
  })
})

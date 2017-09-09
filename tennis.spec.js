function TennisGame(){
  this.reset = ()=>{
  }
  this.echo = ()=>{
    return 'Love - Love'
  }
}

test('Echo "Love - Love" when game starts',()=>{
//Arrange
  let app = new TennisGame()
//Act
  let result = app.echo()
//Assert
  expect(result).toBe('Love - Love')

})

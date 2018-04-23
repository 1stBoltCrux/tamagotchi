import { Pet } from './../src/scripts.js'

describe('Pet', function(){
  let tamagotchi = new Pet(10, 10, 10, 10);

  beforeEach(function(){
    jasmine.clock().install();
    tamagotchi.subtractFoodOverTime();
  });

  afterEach(function(){
    jasmine.clock().uninstall();
  });

  it('should test whether food level is full', function(){
    expect(tamagotchi.food).toEqual(10);
  });

  it('should test whether food level is 9 after 10000 milliseconds', function(){

    jasmine.clock().tick(10000);
    expect(tamagotchi.food).toEqual(9);
  });

  it('should test whether food level can be set to a specific value', function(){
    tamagotchi.replenishFood();
    // jasmine.clock().tick(10000);
    expect(tamagotchi.food).toEqual(10);
  });


});

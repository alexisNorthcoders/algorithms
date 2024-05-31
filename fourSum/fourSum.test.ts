import fourSum from "./fourSum";

describe("fourSum", () => {
    it("simple case nums = [1,0,-1,0,-2,2], target = 0",()=>{
        const nums =[1,0,-1,0,-2,2]
        const target = 0 
        const expected = [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
        expect(fourSum(nums, target)).toEqual(expected);
    })
    it("simple case nums = [2,2,2,2,2], target = 8",()=>{
        const nums =[2,2,2,2,2]
        const target = 8
        const expected = [[2,2,2,2]]
        expect(fourSum(nums, target)).toEqual(expected);
    })
    it("simple case nums =[-2,-1,-1,1,1,2,2], target = 0",()=>{
        const nums =[-2,-1,-1,1,1,2,2]
        const target = 0
        const expected = [[-2,-1,1,2],[-1,-1,1,1]]
        expect(fourSum(nums, target)).toEqual(expected);
    })
/*   it("test function time", () => {
    const nums = [
      10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
      10, 10, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20,
      20, 20, 20, 20, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
      30, 30, 30, 30, 30, 30, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40,
      40, 40, 40, 40, 40, 40, 40, 40, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50,
      50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 60, 60, 60, 60, 60, 60, 60, 60,
      60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 70, 70, 70, 70, 70, 70,
      70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 80, 80, 80, 80,
      80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 90, 90,
      90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
    ];
    const target = 200;
    const expected = [
      [10, 10, 90, 90],
      [10, 20, 80, 90],
      [10, 30, 70, 90],
      [10, 30, 80, 80],
      [10, 40, 60, 90],
      [10, 40, 70, 80],
      [10, 50, 50, 90],
      [10, 50, 60, 80],
      [10, 50, 70, 70],
      [10, 60, 60, 70],
      [20, 20, 70, 90],
      [20, 20, 80, 80],
      [20, 30, 60, 90],
      [20, 30, 70, 80],
      [20, 40, 50, 90],
      [20, 40, 60, 80],
      [20, 40, 70, 70],
      [20, 50, 50, 80],
      [20, 50, 60, 70],
      [20, 60, 60, 60],
      [30, 30, 50, 90],
      [30, 30, 60, 80],
      [30, 30, 70, 70],
      [30, 40, 40, 90],
      [30, 40, 50, 80],
      [30, 40, 60, 70],
      [30, 50, 50, 70],
      [30, 50, 60, 60],
      [40, 40, 40, 80],
      [40, 40, 50, 70],
      [40, 40, 60, 60],
      [40, 50, 50, 60],
      [50, 50, 50, 50],
    ];
    expect(fourSum(nums, target)).toEqual(expected);
  }); */
});
export default function twoSum(nums: number[], target: number): number[] {
    
    const indexes:number[] = []
    for (let i=0;i<nums.length;i++){
        if (indexes.length) return indexes
        for (let j=i+1;j<nums.length;j++){
            const currentSum = nums[i] + nums[j]
            if (currentSum === target){
                indexes.push(i)
                indexes.push(j)
                break
            }
            
        }
        
    }
   return []
};
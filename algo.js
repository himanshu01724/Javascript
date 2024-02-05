// // const arr = [100,23,96,5,89,1,-1,3]

// // const twoSum = (num,sum) =>{
// //     const res = []
// //     for(let i=0;i<num.length;i++){
// //         for(let j=i+1;j<num.length;j++){
// //             if (num[i]+num[j] == sum){
// //                 res.push(num[i],num[j])
// //             }
            
// //         }
// //     }
// //     return res
    
// // }

// // const bubbleSort = (num) =>{
// //     let res = 0;
// //     for(let i=0;i<num.length;i++){
// //         for(let j=0;j<num.length-1;j++){
// //             if (num[j+1]<num[j]){
// //                 res = num[j+1]
// //                 num[j+1]=num[j]
// //                 num[j]=res
// //             }
// //         }
// //     }
// //     return num;
// // }
// // const sorted = bubbleSort(arr);

// // const twoSumTwo = (num,inp) =>{
// //     //two pointer method or binary search algorithm
// //     l = 0;
// //     h = num.length-1;
// //     while(l<h){
// //         if (num[l]+num[h]===inp){
// //             return [num[l],num[h]]
// //         }
// //         else if(num[l]+num[h]>inp){
// //             h -=1;
// //         }
// //         else{
// //             l+=1;
// //         }
// //     }
// // }


// // const inp = [-1,0,1,2,-1,-4]

// // //3sum pending...




// // const twosum =(nums, target) => {
// //     for(let i=0;i>nums.length;i++){
// //         for(let j=0;j<nums.length;j++){
// //             if(nums[i]+nums[j+1] === target){
// //                 console.log(i,j)
// //             }
// //             else
// //                 return 0
// //         }
// //     }
// // };
// // var twosum1 = function (nums,target){
// //     for(let i=0;i<nums.length;i++){
// //         for(let j=0;j<nums.length;j++){
// //             if(nums[i]+nums[j+1] === target){
// //                 return [i,j+1]
// //             }
// //             else
// //                 return 0
// //         }
// //     }
// // }

// // console.log(twosum1(nums,target))

// // for(let i=0;i<nums.length;i++){
// //     for(let j=0;j<nums.length;j++){
// //         console.log(i,j+1)
// //     } 
// // }

// // var person = {
// //     firstName: "John",
// //     lastName: "Doe",
// //     age: 25,
// //     address: {
// //       street: "123 Main Street",
// //       city: "Anytown",
// //       state: "CA",
// //       zipCode: "12345"
// //     },
// //     hobbies: ["reading", "coding", "traveling"],
// //     isStudent: true,
// //   };

// // const {zipCode, ...other} = person.address;
// // const {firstName,...r} = person

// // // console.log(zipCode,other)
// // // console.log(firstName,r)


// // const [target,...nums]= [9,2,7,11,15]

// // const add = function(...numbers){
// //     let res = 0
// //     numbers.forEach((val)=>{
// //         res = res+val
// //     })
// //     return res
// // }

// // console.log(add(1,0,1,3,4))
// // console.log(add(...nums))


// const [case1,case2,case3,case4] = [[7,1,5,3,6,4],[7,6,4,3,1],[100,108,113,99,1000,2000],[2,4,1]]

// const stock = function(nums){
//     const newarr = [...nums]
//     newarr.sort((a,b)=>a-b)
//     console.log(newarr)
//     let init = newarr[0]
//     let final = newarr[newarr.length-1]
//     let checkinit = nums.indexOf(init)
//     let checkFinal = nums.indexOf(final)
//     console.log(nums)
//     console.log(init,final)
//     console.log(checkinit,checkFinal)
//     if (checkinit<checkFinal){
//         return final-init
//     }
//     else
//         return 0
// }

// const exchange = function(nums){
//         let res = nums[0]
//         let diff = 0
//         for(let i=1;i<nums.length;i++){
//             if(nums[i]<res){
//                 res = nums[i]
//             }
//         }
//         let posinit = nums.indexOf(res)
//         //console.log(posinit)
//         for(let i = posinit;i<posinit+1;i++){
//             for(let j = i+1;j<nums.length;j++){
//                 if (nums[j]-nums[i]>diff){
//                     diff = nums[j]-nums[i]
//                 }
//             }
//             return diff
//         }
// }

// //console.log(exchange(case4))
// //exchange(case1)


// const buySell = function(num){
//     let i = 0;
//     let j = 1;
//     let res = 0
//     while (j<num.length){
//         if (num[i]<num[j]){
//             let profit = num[j]-num[i]
//             res = Math.max(res,profit)
//         }
//         else
//             i=j
//     j+=1
//     }
//     return res
// }
// // console.log(buySell(case4))




// const problem3 = function(nums){
//     let res = 0
//     for(let i=0;i<nums.length;i++){        
//         for(let j=0;j<nums.length-i;j++){
//             if(nums[j+1]<nums[j]){
//                 res = nums[j+1]
//                 nums[j+1] = nums[j]
//                 nums[j]=res
//             }
//         }
//     }

    
//     for(let i=0;i<nums.length;i++){
//         if(nums[i]-i != 1){
//             return true
//         }
//     }
//     return false
// }
//problem3(case5)

// const problem4 = function(num){
//     num.sort((a,b)=>a-b)
//     if(num.length <= 1){
//         return false
//     }
//     else
//     {
//     for(let i=0;i<num.length;i++){    
//         let test = num[i]-i
//         if(test < 1){
//             return true
//         }
//     }
//     return false
//     }
    
// }
//console.log(problem3(case4))
//problem4(case4)
//console.log(case4.length)
//console.log(problem4(case3))








//const [case1,case2,case3,case4,case5,case6,case7] = [[1,2,3,1],[1,2,3,4],[1,1,1,3,3,4,3,2,4,2],[0],[3,1],[0,4,5,0,3,6],[2,14,18,22,22]]


// const hashSet = (num) =>{
//     const numSet = new Set(num)
//     if(num.length === numSet.length){
//         return false
//     }
//     return true
// }
// console.log(hashSet(case7))

// const bubble = function(num){
//     let res = 0
//     for(let i=0;i<num.length;i++){
//         console.log(`first ${i}`)
//         for(let j=0;j<num.length-i;j++){
//             console.log(`second ${j}`)
//             if(num[j+1]<num[j]){
//                 res = num[j+1]
//                 num[j+1] = num[j]
//                 num[j] = res
//             }
//         }
//     }
//     return num
// }
// console.log(bubble(case7))

// const duplicate = function(num){
//     let i = 0
//     let j = 0
//     if(num.length < 1){
//         return false
//     }
//     else{
//     console.log(num)
//     for(i;i<num.length;i++){
//         for(j;j<num.length-i;j++){
//             console.log(num[i],num[j])
//             if (num[j] === num[j+1])
//                 return true
//         }
//     }
//     return false
//     }
// }
//console.log(duplicate(case6))



// const bruteForce = (num) =>{
//     for(let i = 0;i<num.length;i++){
//         console.log(`BFfirst ${i}`)
//         for(let j = 0;j<i;j++){
//             console.log(`BFsecond ${j}`)
//         }
//     }
// }
// bruteForce(case7)



// const productSelf = function(num){
// let test = []
// let res = 1

// for(let i=0;i<num.length;i++){
//     res = res*num[i]
// }
// console.log(res)
// for(let j=0;j<num.length;j++){
//     test.push(res/num[j])
// }
// return test
// }

// console.log(productSelf(case0))


// const problem5 = function(num){
//     const res = new Array(num.length).fill(1)
//     let prefix = 1

//     for(let i=0;i<num.length;i++){
//         res[i] = prefix
//         prefix*=num[i]
//     }
//     console.log(res)
//     let postfix = 1
//     for(let i=num.length-1;i>=0;i--){
//         res[i]*= postfix;
//         postfix*=num[i]
//         console.log(res,postfix)
//     }
//     return res
// }

//console.log(problem5(case2))

// const test = new Array(case1.length).fill(1)
// console.log(test)

// var productExceptSelf = function(nums) {
//     const res = new Array(nums.length).fill(1)
//     let prefix = 1
//     for(let i=0;i<nums.length;i++){
//         res[i] = prefix
//         prefix *= nums[i]
//     }
//     let postfix = 1
//     for(let i=nums.length-1;i>=0;i--){
//         res[i]*= postfix;
//         console.log(res)
//         postfix*= nums[i]
//     }
//     return res
//  };

//  console.log(productExceptSelf(case0))
// const maxSubArray = function(nums){
//     let maxSum = nums[0]
//     let currSum = 0
//     for(let i=0;i<nums.length;i++){
//         if (currSum < 0)
//             currSum = 0
//         currSum += nums[i]
//         maxSum = Math.max(currSum,maxSum)
//     }
//     return maxSum
// }

// console.log(maxSubArray(case1))








//15 Jan 2024


//Test Cases

// const [case0,case1,case2,case3,case4,case5,case6,case7,case8] = [[-2,1,-3,4,-1,2,1,-5,4],[1,2,3,4],[-1,1,0,-3,3],[2,1,4,6],[1,1,1,3,3,4,3,2,4,2],[0],[3,1],[0,4,5,0,3,6],[2,14,18,22,3]]
// const test = [9,20,1,45,80,3]
// const testcase = [2,7,11,15]
// const sortedElement = test.slice().sort((a,b)=>a-b);
// const problem2 = [7,1,5,3,6,4]
// const quick = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]


//Problem Solutions

// function linear_search(num,element){
//     for(i =0;i<num.length;i++){
//         if(num[i] == element)
//             return i
//     }
//     return 0
// }

// const binary_search=function(num, element){
//     let l = 0
//     let h = num.length -1
//     while (l <= h){
//         let mid = Math.round((l+h)/2)
//         //console.log(mid)
//         if (num[mid] === element){
//             return mid
//         }
//         else if(num[mid]<element){
//             l = mid+1
//         }
//         else{
//             h = mid-1
//         }
    
//     }
    
// }

// function bubble_sort(nums){
//     let res = 0
//     for(i=0;i<nums.length-1;i++){
//         for(j=0;j<nums.length-1-i;j++){
//             if(nums[j+1]<nums[j]){
//                 res = nums[j+1]
//                 nums[j+1] = nums[j]
//                 nums[j] = res
//             }
//         }
//     }
//     return nums
// }

// function twoSum(num,element){
//     for(i=0;i<num.length-1;i++){
//         for(j=i+1;j<num.length;j++){
//             console.log(num[i],num[j])
//             if(num[i]+num[j] === element){
//                 return [i,j]
//             }
//         }
//     }
//     return 0
// }



// //16 Jan 2024

// function stockProblem(nums){
//     let diff = 0
//     let lowest = nums[0]
//     for(i=0;i<nums.length;i++){
//         if(nums[i]<lowest)
//             lowest = nums[i]
//         diff = Math.max(diff,nums[i]-lowest)
//     }
//     return diff
// }


// function containsDupsFromSets(nums){
//     let newNums = new Set(nums)
//     if (newNums.length != nums.length){
//         return true
//     }
//     return false
// }

// function containDupsFromBruteForce(nums){
//     for(i=0;i<nums.length-1;i++){
//         for(j=0;j<nums.length-1;j++){
//             let check = nums[i] === nums[j]
//             if (check)
//                 return true
//         }
//     }
//     return false
// }


// //18 Jan 2024

// function QuickSort(nums){
//     if (nums.length < 1){
//         return nums
//     }

//     const pivot = nums[0]
//     const left = []
//     const right = []

//     for(let i=1;i<nums.length;i++){
//         if (nums[i]<pivot){
//             left.push(nums[i])
//         }
//         else{
//             right.push(nums[i])
//         }
//     }
//     return [...QuickSort(left),pivot,...QuickSort(right)]
// }

// function productOfSelf(nums){
//     const res = []
//     let pre = 1
//     let post = 1
//     for(let i=0;i<nums.length;i++){
//         res[i] = pre
//         pre *= nums[i]
//     }
//     for(let j = nums.length-2;j>=0;j--){
//         post *= nums[j+1]
//         res[j] *= post
//     }

//     return res
// }

// //22-January-2024



// function problem(nums){


//     for(i=0;i<nums.length;i++){
//         for(j=i+1;j<nums.length;j++){
//             const a = nums[i] === nums[j]
//             if(a)
//             return true
//         }
//     }
//     return false
// }

// function problemx(nums){
//     let first = nums[0]
//     let res = 0
//     for(i=1;i<nums.length;i++){
//         if(nums[i]<first)
//         first=nums[i]
//     res = Math.max(res,nums[i]-first)
//     }
//     return res
// }

// function problemY(nums){
//     const res = []
//     let pre = 1
//     let post = 1
//     for(i=0;i<nums.length;i++){
//         res[i] = pre
//         pre *= nums[i]
//     }
//     for(let j=nums.length-2;j>=0;j--){
//         post *= nums[j+1]
//         res[j]*= post
//     }
//     return res
// }

// const twoSumTwo = (nums,target) =>{
//     let l = 0
//     let r = nums.length -1;
//     while(l<r){
//         const check = nums[l]+nums[r]
//         if (check === target){
//             return [l+1,r+1]
//         }
//         else if (check > target){
//             r-=1;
//         }
//         else{
//             l+=1
//         }
//     }
//     return 0
// }



// const threeSum = (nums) =>{
//     const res = []
//     nums.sort((a,b)=>a-b)
//     for(i=0;i<nums.length;i++){
//         const a = nums[i]
        
//         if(a > 0) break
//         if( i>0 && a === nums[i-1]) continue
        
        
//         let l = i+1
//         let r = nums.length-1
        
//         while(l<r){
//             const check = a + nums[l] + nums[r]
//             if(check > 0){
//                 r-=1;
//             }
//             else if(check< 0){
//                 l+=1;
//             }
//             else{
//                 res.push([a,nums[l],nums[r]])
//                 l+=1;
//                 r-=1;
//                 while(l<r && nums[l]<nums[l-1]){
//                     l++;
//                 }
//             }
//         }
//     }
//     return res
// }

// //25th January 2024

// const product = [1,8,6,2,5,4,8,3,7]
// const product2 = [1,0,-1,-1,-4,2]
// const product3 = [9,20,1,45,80,3]
// const product4 = [-1,2,-1,3,8,-4]


// //29th January 2024


// function quickSort(nums){
//     if(nums.length < 1){
//         return nums;
//     }

//     const par = nums[0]
//     const front = []
//     const end = []
//     for(let i = 1;i<nums.length;i++){
//         if(par > nums[i]){
//             front.push(nums[i])
//         }
//         else
//             end.push(nums[i])
//     }
//     return [...quickSort(front),par,...quickSort(end)]
// }


// const Sum3 = (nums) =>{
//     const res = []
//     nums.sort((a,b)=>a-b)
//     for(i=0;i<nums.length;i++){
//         const a = nums[i];
//         if(a > 0) break;
//         if(i > 0 && a === nums[i-1]) continue
//         l = i+1,r = nums.length-1;
//         while(l < r){
//             const check = a + nums[l] + nums[r];
//             if (check < 0){
//                 l+=1
//             }
//             else if (check > 0)
//             { r-=1}
//             else{
//                 res.push([a,nums[l],nums[r]])
//                 l+=1;
//                 r-=1;
//                 while(l<r && nums[l]< nums[l-1]){  //this part is for checking dups in the solution
//                     l+=1;
//                 }
//             }
//         }
//     }
//     return res;

// }


// function mostWater(nums){
//     let res = 0
//     let l=0,r=nums.length-1;
//     while(l<r){
//         let area = (r-l) * Math.min(nums[l],nums[r])
//         res = Math.max(res,area)
//         if(nums[r]>nums[l]){
//             l+=1
//         }
//         else{
//             r-=1
//         }
//     }
//     return res
// }

// function maxSubArr(nums){
//     let max = nums[0]
//     let curr = 0
//     for(i=0;i<nums.length;i++){
//         if(curr<0)
//             curr = 0
//         curr+=nums[i]
//         console.log(`Curr val = ${curr}`)
//         max = Math.max(max,curr)
//         console.log(`Curr val = ${max}`)
//     }
//     return max
// }

//30th January 2024

// const test = [1,3,6,8,2]
// const test2 = [2,3,-2,4]
// const test1 = [-2,1,-3,11,5,-9]
// const test3 = [1,2,-3,4]
// const test4 = [-10,2,8,-3,11,1]
// const test5 = [6,-10,-11,1,3]

//Another Approach

// function MaximumProductSubarray(nums){
//     if (nums.length<=1){
//         return nums.length === 0 ? 0: nums[0];
//     }
//     let MinPro = nums[0]
//     let MaxPro = nums[0]
//     let result = nums[0]
//     for(i=1;i<nums.length;i++){
//         console.log(`i = ${nums[i]}`)
//         if(nums[i]<0){
//             let temp = MaxPro
//             MaxPro = MinPro
//             MinPro = temp
//             console.log(`temp val max and min===== ${temp},${MaxPro},${MinPro}`)
            
//         }
//         MaxPro = Math.max(nums[i],MaxPro*nums[i])
//         MinPro = Math.min(nums[i],nums[i]*MinPro)
//         console.log(`Max pro && Min pro = ${MaxPro}, ${MinPro}`)

//     result = Math.max(result,MaxPro)
//     console.log(`result = ${result}`)
//     }
// return result
// }

// const MaxProSub = (nums) =>{
//     let res = nums[0]
//     let currMax = 1, currMin = 1
//     for(i=1;i<nums.length;i++){
//         if (nums[i] === 0)
//             currMax = 1,currMin=1
//         currMax = Math.max(i*currMax,i*currMin,nums[i])
//         currMin = Math.min(i*currMax,i*currMin,nums[i])

//     res = Math.max(res,currMax)
//     }
//     return res
// }


// //31st January 2024


// //console.log(MaximumProductSubarray(test5))


// //2nd febraury 2024

// const test = [23,4,6,8,9,1,85]
// const test2 = [2,-2,1,-3,3,10]


// function rotateMin(nums){
//     let pivot = nums[0]
//     for(i=1;i<nums.length;i++){
//         if (nums[i] < pivot)
//             pivot = nums[i]
//     }
//     return pivot
// }

// function containerMost(nums){
//     let l = 0;
//     let h = nums.length-1;
//     let res = 0
//     while(l<h){
//         let area = ((h-l) * Math.min(nums[l],nums[h]))
//         console.log(area)
//         res = Math.max(res,area)
//         if(nums[h]>nums[l]){
//             l+=1
//         }
//         else    
//             h-=1
//     }
//     return res;
// }


// function subSubMax(nums){
//     let currSum = 0
//     let maxSum = 0
//     for(i=1;i<nums.length;i++){
//         if (currSum<0)
//             currSum = 0
//         currSum +=nums[i]
//         console.log(currSum)
//     maxSum = Math.max(maxSum,currSum)

//     }
//     return maxSum
// }


// function maxSubProduct(nums){
//     let currMax = nums[0]
//     let currMin = nums[0]
//     let res = nums[0]
//     for(i=1;i<nums.length;i++){
//         if(nums[i]<0)
//             {let temp = currMax
//             currMax = currMin
//             currMin = temp}
//         currMax = Math.max(nums[i],currMax*nums[i])
//         currMin = Math.min(nums[i],currMin*nums[i])
//     res = Math.max(res,currMax)
//     }
//     return res;
// }
// console.log(maxSubProduct(test))

const test = [10,6,90,1,7]
const test1 = [-1,0,1,2,-1,-4]

const algo1 = (nums,target)=>{
    let l = 0, h = nums.length-1;
    while(l<=h){
        let mid = Math.floor((l+h)/2);
        if(nums[mid] === target){
            return mid
        }
        else if(nums[mid] > target){
            h = mid-1;
        }
        else{
            l = mid+1
        }
    }
    return 0
}

const algo2 = (nums) =>{
    for(i=0;i<nums.length-1;i++){
        for(j=0;j<nums.length-1-i;j++){
            if(nums[j+1]<nums[j]){
                let temp = nums[j+1]
                nums[j+1]= nums[j]
                nums[j] = temp
            }
        }
    }
    return nums
}

const algo3 = (nums) =>{
    if(nums.length<=1){
        return nums
    }
    const start = []
    const end = []
    const pivot = nums[0]
    for(i=1;i<nums.length;i++){
        if (nums[i]<pivot){
            start.push(nums[i])
        } else{
        end.push(nums[i])
        }
    }
    return [...algo3(start), pivot, ...algo3(end)]
}

const prob1 = (nums) =>{
    nums.sort((a,b)=>a-b)
    let res = []
    for(i=0;i<nums.length-1;i++){
        const pivot = nums[i]
        if(pivot>0) break;
        if(i>0 && pivot === nums[i-1]) continue;

        let l = i+1, h = nums.length-1;

        while(l < h){
            const check = pivot + nums[l] + nums[h]
            if(check > 0 ){
                h-=1;
            }
            else if(check < 0){
                l+=1;
            }
            else{
                res.push([pivot,nums[l],nums[h]])
                l+=1;
                h-=1;
                while(l < h && nums[l] < nums[l-1]){
                    l+=1;
                }
            }
        }

    }
    return res
}

console.log(prob1(test1))
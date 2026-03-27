import {expect, test, Locator} from '@playwright/test';

test.describe('Group1', async()=>
{

    test("Test 1", async()=>{

    console.log("THis is Test1.............");
       })

test("Test 2", async()=>{

    console.log("THis is test2.........");

     })

})


test.describe('Group2', async()=>
{
    test("Test 3", async()=>{

    console.log("This is test3........");

})

test("Test 4", async()=>{

    console.log("This is test4......");

})
})


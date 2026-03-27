import{test, expect, Locator} from '@playwright/test';

test.beforeAll('BeforeAll', async()=>
{
    console.log("This is before ");
});

test.afterAll('AfterAll', async()=>
{
    console.log("This is After");
})
test.beforeEach('Beforeeach', async()=>
{
    console.log("This is Before Each.......");
})

test.afterEach('AfterEach', async()=>
{
    console.log("This is After Each........");
})

test("Test 1", async()=>{

    console.log("THis is Test1.............");
       });

test("Test 2", async()=>{

    console.log("THis is test2.........");

     });

test("Test 3", async()=>{

    console.log("This is test3........");

});

test("Test 4", async()=>{

    console.log("This is test4......");

});
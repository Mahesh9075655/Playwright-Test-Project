import {test, expect, Locator} from '@playwright/test';
//test.describe.configure({mode:'parallel'})
test.describe('group1', ()=>
{
    test('test1', async({page})=>
    {
        console.log("This is test1........");
    })

    test('test2', async({page})=>
    {
        console.log("This is test2.......")
    })

    test('test3', async({page})=>
    {
        console.log("This is test3.......")
    })

    test('test4', async({page})=>
    {
        console.log("This is test4.......")
    })

    test('test5', async({page})=>
    {
        console.log("This is test5.......")
    })
})

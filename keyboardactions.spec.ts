/*
Keyboard Method:
insertText
down
press
type
up

await page.keyboard()

*/


import{test, expect, Locator} from '@playwright/test';

test("Keyboard Actions", async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/");

    const input1=page.locator("#input1");
    //1. Focus on input element 1
    await input1.focus(); //
   // await input1.click();     same thing for focus
    
    //2. Provide the text in the input
    await page.keyboard.insertText("Welcome");
    //3. Command + A - Select the text
     await page.keyboard.down('Meta');
     await page.keyboard.press('A');
     await page.keyboard.up('Meta');
    //4. Command + C - Copy the text
    await page.keyboard.down('Meta');
     await page.keyboard.press('C');
     await page.keyboard.up('Meta');

    //5. Press Tab - 2 times
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    //6. Command +V // Paste the text in input B
    await page.keyboard.down('Meta');
     await page.keyboard.press('V');
     await page.keyboard.up('Meta');

    //7. Press tab -2 times
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    // Command + v -paste the text in input C
    await page.keyboard.down('Meta');
     await page.keyboard.press('V');
     await page.keyboard.up('Meta');

     await page.waitForTimeout(4000);

})


test.only("Keyboard Actions 2nd Approach", async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/");

    const input1=page.locator("#input1");
    //1. Focus on input element 1
    await input1.focus(); //
   // await input1.click();     same thing for focus
    
    //2. Provide the text in the input
    await page.keyboard.insertText("Welcome");

    //3. Command + A - Select the text
     await page.keyboard.press('Meta+A')
    //4. Command + C - Copy the text
    await page.keyboard.press('Meta+C');

    //5. Press Tab - 2 times
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    //6. Command +V // Paste the text in input B
    await page.keyboard.press('Meta+V');

    //7. Press tab -2 times
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    // Command + v -paste the text in input C
    await page.keyboard.press('Meta+V');

     await page.waitForTimeout(4000);

})
import{test, expect} from '@playwright/test';

import { LoginPage } from '../Pages/LoginPage';
import { Homepage } from '../Pages/HomePage';
import { CartPage } from '../Pages/CartPage';

test("User Can Login, add a Paroduct to the cart", async({page})=>
{
    await page.goto("https://www.demoblaze.com/index.html");
    const loginpage=new LoginPage(page);

    await loginpage.performLogin("pavano1", "test@123");

    await page.waitForTimeout(2000);

    //HomePage
   
    const homePage=new Homepage(page);

    await homePage.addProductToCart("Iphone 6 32gb");
    await homePage.gotoCart();

    /*
    //CartPage

   const cartpage= new CartPage(page);
   const isProductInCart=await cartpage.checkProductInCart("Iphone 6 32gb");

   expect(isProductInCart).toBeTruthy();
   */

   

    
})
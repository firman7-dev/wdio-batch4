describe('Saucedemo login test', () => {
    it('Successful login', async () => {
        await browser.url('https://www.saucedemo.com/')

        // element definition
        const usernameTextbox = await browser.$("#user-name")
        const passwordTextbox = await browser.$("#password")
        const loginButton = await browser.$('//input[@value="Login"]')

        const cartIcon = await browser.$("#shopping_cart_container")

        const cartadd = await browser.$("#add-to-cart-sauce-labs-backpack")
        const shoppingCart = await browser.$("#shopping_cart_container")

// login page
        await usernameTextbox.waitForDisplayed({ timeout: 3000 })
        await usernameTextbox.setValue("standard_user")
        await passwordTextbox.setValue("secret_sauce")
        console.log(await loginButton.getValue())
        await loginButton.click()


// Add Cart
       
        await cartadd.click()        
        await shoppingCart.click()
        

// Dashbord
        await expect(cartIcon).toBeDisplayed()
        await browser.pause(5000)

    });
});
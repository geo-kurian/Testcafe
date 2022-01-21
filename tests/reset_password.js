import LoginPage from '../Pages/LoginPage';
import HomePage from '../Pages/HomePage';

fixture `Launchpad`
    .page `https://accounts.*****.com/login`;

test
    .meta('Sanity','Y')
    .meta('Regression','Y')
    ('Login to Launchpad', async t =>{
    //Login to Launcpad account
    await LoginPage.loginToLaunchpad('qamail@***.com','Password800!');
    //Verify successful login
    await HomePage.verifyHomePageLoaded();
});

test
    .meta('Sanity','N')
    .meta('Regression','Y')
    ('Click on Reset password', async t =>{
    //Click on Reset password link
    await LoginPage.clickOnResetPassword();
    //Verify Reset Password Page loaded
    await LoginPage.verifyResetPasswordPageLoaded();
});
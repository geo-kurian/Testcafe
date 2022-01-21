import { Selector, t} from 'testcafe';

class LoginPage {
    constructor () {
        this.userName = Selector('#user_email');
        this.password = Selector('#user_password');
        this.resetPassword = Selector('ul > li:nth-child(1) > a');
    }

    async loginToLaunchpad(_userid, _password){
        await t
            .typeText(this.userName, _userid)
            .typeText(this.password, _password)
            .pressKey('enter');
    }

    async clickOnResetPassword(){
        await t
            .click(this.resetPassword);
    }

    async verifyResetPasswordPageLoaded(){
        const header = Selector('body > div.main-container > div > div > div > h3');
        await t.expect(header.innerText).eql('Reset your password');
    }
}

export default new LoginPage();
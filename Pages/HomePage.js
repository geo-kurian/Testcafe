import { Selector, t} from 'testcafe';
import XPathSelector from '../Util/xpath-selector';

class HomePage{
    constructor () {
    }

    async verifyHomePageLoaded(){
        const header = Selector('.dashboard-header-headings__product-type');
        await t.expect(header.innerText).eql('HIGHBOND');
    }

    async clickOnTile(_tile){
        const tileBox  = XPathSelector("//*[@id='grc_apps']/descendant::span[text()="+_tile+"]");
        await t.click(tileBox);
    }
}
export default new HomePage();
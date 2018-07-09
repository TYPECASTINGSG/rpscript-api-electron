import {expect} from 'chai';
import m from 'mocha';

import RPSModule from '../src/index';
import { RpsContext } from 'rpscript-interface';

m.describe('electron', () => {

  m.it('should convert to html', async function () {
    let ctx = new RpsContext
    let md = new RPSModule(ctx);

    let output = await md.launch(ctx,{},'./index.html');

  }).timeout(0);

})

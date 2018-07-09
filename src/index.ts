/**
 * @module electron
 */

import {BrowserWindow,app} from 'electron';
import {RpsContext,RpsModule,rpsAction} from 'rpscript-interface';
import {spawn, ChildProcess} from 'child_process';

let MOD_ID = "electron"

export interface ModuleContext {
  instance?:ChildProcess;
}

@RpsModule(MOD_ID)
export default class RPSModule {

  constructor(ctx:RpsContext){
  }

  @rpsAction({verbName:'launch-electron'})
  async launch (ctx:RpsContext,opts:Object, htmlFile:string) : Promise<void>{
    let cp = spawn(`${process.cwd()}/node_modules/electron/dist/electron`,[htmlFile]);
    ctx.addModuleContext(MOD_ID,{instance:cp});
  }

}

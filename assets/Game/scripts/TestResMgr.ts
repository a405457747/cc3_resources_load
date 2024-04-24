import { _decorator, Component, Node } from 'cc';
import { ResMgr } from '../../ResMgr/ResMgr';
const { ccclass, property } = _decorator;

@ccclass('TestResMgr')
export class TestResMgr extends Component {



    start() {
        //ResMgr.Inst.test();

        let k=ResMgr.Inst.loadTextSync("t");
        console.log(k);
    }

    update(deltaTime: number) {
        
    }
}



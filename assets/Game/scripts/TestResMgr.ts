import { _decorator, Component, Node } from 'cc';
import { ResMgr } from '../../ResMgr/ResMgr';
const { ccclass, property } = _decorator;

@ccclass('TestResMgr')
export class TestResMgr extends Component {



    start() {
        ResMgr.Inst.test();
    }

    update(deltaTime: number) {
        
    }
}



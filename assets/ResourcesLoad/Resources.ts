import { resources } from 'cc';
import { _decorator, Component, Node ,TextAsset} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Resources')
export class Resources extends Component {


    static textDict={"a":"b",b_t:"aa"};

    onLoad(){
      Resources.LoadText("text/t");
      Resources.LoadText("text/t");
    }

    start() {
        console.log(Resources["text/t"],"content");
    }

    update(deltaTime: number) {
        console.log(Resources.b_t);
    }

    static LoadText(filePath:string):void{

        resources.load(filePath,TextAsset,(err,asset)=>{
            if(err) return;
            Resources.textDict[filePath]=asset.text;
        })
    }
}



import { resources } from 'cc';
import { _decorator, Component, Node ,TextAsset} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Resources')
export class Resources extends Component {


    static textDict={"a":"b"};

    onLoad(){
      Resources.LoadText("text/t");
      Resources.LoadText("text/t");
    }

    start() {
        console.log(Resources["text/t"],"content");
    }

    update(deltaTime: number) {
    }

    static LoadText(filePath:string):void{

        if(filePath in Resources.textDict){
            console.log("返回，数据已经有了");
            return;
        }

        resources.load(filePath,TextAsset,(err,asset)=>{
            if(err) return;
            Resources.textDict[filePath]=asset.text;
            console.log(Resources.textDict);
        })
    }
}



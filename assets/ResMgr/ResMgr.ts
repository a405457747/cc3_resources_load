import { _decorator, Component, Node ,find,TextAsset,Prefab,JsonAsset,AudioClip,resources,ImageAsset,SpriteFrame} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ResMgr')
export class ResMgr extends Component {

    static inst:ResMgr|null=null;

    static get Inst(){
        if(ResMgr.inst===null){
            let n = new Node("ResMgr");
            ResMgr.inst= n.addComponent(ResMgr);
            find("Canvas")?.addChild(n);
        }

        return ResMgr.inst;
    }

    test(){
        console.log("test");

        this.loadText("text/t",(text:any)=>{
            console.log(text);
        });
    }

    loadText(filePath:string,func:Function){
        resources.load(filePath, TextAsset, function (err, asset) {
            if(err) return;
            func(asset.text);
        });
    }

    loadJson(filePath:string,func:Function){
        resources.load(filePath, JsonAsset, function (err, asset) {
            if(err) return;
            func( asset.json);
        });
    }

    loadSprite(filePath:string,func:Function){
        resources.load(filePath, ImageAsset, function (err, asset:ImageAsset) {
            if(err) {
                console.log("load sp error");
                return;
            }
            func( SpriteFrame.createWithImage(asset));
        });
    }

    loadAudioClip(filePath:string,func:Function){
        resources.load(filePath, AudioClip, function (err, asset) {
            if(err) return;
            func( asset);
        });
    }

    loadPrefab(filePath:string,func:Function){
        resources.load(filePath, Prefab, function (err, asset) {
            if(err) return;
            func( asset);
        });
    }
}



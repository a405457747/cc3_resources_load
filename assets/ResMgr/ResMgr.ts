import { _decorator, Component, Node ,find,TextAsset,Prefab,JsonAsset,AudioClip,resources,ImageAsset,SpriteFrame} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ResMgr')
export class ResMgr extends Component {

   private static inst:ResMgr|null=null;

    @property([TextAsset])
    texts:TextAsset[]=[];

    @property([JsonAsset])
    jsons: JsonAsset[] = [];


    @property([SpriteFrame])
    spriteFrames: SpriteFrame[] = [];
    static get Inst(){
        /*
        if(ResMgr.inst===null){
            let n = new Node("ResMgr");
            ResMgr.inst= n.addComponent(ResMgr);
            find("Canvas")?.addChild(n);
        }
        */

        return ResMgr.inst;
    }

    protected onLoad(): void {
        ResMgr.inst=this;
    }

    test(){
        console.log("test");

        this.loadText("text/t",(text:any)=>{
            console.log(text);
        });
    }

    loadSpriteSync(name:string){
        for(let item of this.spriteFrames){
            if(item.name===name){
                return item;
            }
        }
        return null;
    }

    loadTextSync(name:string){
        for(let item of this.texts){
            if(item.name===name){
                return item.text;
            }
        }
        return null;
    }

    loadJsonSync(name:string){
        for(let item of this.jsons){
            if(item.name===name){
                return item.json;
            }
        }
        return null;
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



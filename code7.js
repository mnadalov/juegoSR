gdjs.LeaderboardCode = {};
gdjs.LeaderboardCode.localVariables = [];
gdjs.LeaderboardCode.GDYellowButtonObjects1= [];
gdjs.LeaderboardCode.GDYellowButtonObjects2= [];
gdjs.LeaderboardCode.GDSandObjects1= [];
gdjs.LeaderboardCode.GDSandObjects2= [];
gdjs.LeaderboardCode.GDGreyFeltObjects1= [];
gdjs.LeaderboardCode.GDGreyFeltObjects2= [];
gdjs.LeaderboardCode.GDInputNameObjects1= [];
gdjs.LeaderboardCode.GDInputNameObjects2= [];
gdjs.LeaderboardCode.GDInputScoreObjects1= [];
gdjs.LeaderboardCode.GDInputScoreObjects2= [];
gdjs.LeaderboardCode.GDRankinkg_9595PuntosObjects1= [];
gdjs.LeaderboardCode.GDRankinkg_9595PuntosObjects2= [];
gdjs.LeaderboardCode.GDScoreNumberObjects1= [];
gdjs.LeaderboardCode.GDScoreNumberObjects2= [];
gdjs.LeaderboardCode.GDNewSprite2Objects1= [];
gdjs.LeaderboardCode.GDNewSprite2Objects2= [];
gdjs.LeaderboardCode.GDNewSprite3Objects1= [];
gdjs.LeaderboardCode.GDNewSprite3Objects2= [];
gdjs.LeaderboardCode.GDTimeboardObjects1= [];
gdjs.LeaderboardCode.GDTimeboardObjects2= [];
gdjs.LeaderboardCode.GDdosptosObjects1= [];
gdjs.LeaderboardCode.GDdosptosObjects2= [];
gdjs.LeaderboardCode.GDRedButtonObjects1= [];
gdjs.LeaderboardCode.GDRedButtonObjects2= [];
gdjs.LeaderboardCode.GDWhiteSleekButtonObjects1= [];
gdjs.LeaderboardCode.GDWhiteSleekButtonObjects2= [];
gdjs.LeaderboardCode.GDScoreNumberE4Objects1= [];
gdjs.LeaderboardCode.GDScoreNumberE4Objects2= [];
gdjs.LeaderboardCode.GDScoreNumberE5Objects1= [];
gdjs.LeaderboardCode.GDScoreNumberE5Objects2= [];
gdjs.LeaderboardCode.GDRankinkg_9595M_9595JrObjects1= [];
gdjs.LeaderboardCode.GDRankinkg_9595M_9595JrObjects2= [];
gdjs.LeaderboardCode.GDRankinkg_9595F_9595JrObjects1= [];
gdjs.LeaderboardCode.GDRankinkg_9595F_9595JrObjects2= [];
gdjs.LeaderboardCode.GDRankinkg_9595SrObjects1= [];
gdjs.LeaderboardCode.GDRankinkg_9595SrObjects2= [];
gdjs.LeaderboardCode.GDScoreNumberEObjects1= [];
gdjs.LeaderboardCode.GDScoreNumberEObjects2= [];
gdjs.LeaderboardCode.GDScoreNumberBObjects1= [];
gdjs.LeaderboardCode.GDScoreNumberBObjects2= [];
gdjs.LeaderboardCode.GDScoreNumberB2Objects1= [];
gdjs.LeaderboardCode.GDScoreNumberB2Objects2= [];
gdjs.LeaderboardCode.GDScoreNumberB3Objects1= [];
gdjs.LeaderboardCode.GDScoreNumberB3Objects2= [];
gdjs.LeaderboardCode.GDScoreNumberCObjects1= [];
gdjs.LeaderboardCode.GDScoreNumberCObjects2= [];
gdjs.LeaderboardCode.GDScoreNumberC2Objects1= [];
gdjs.LeaderboardCode.GDScoreNumberC2Objects2= [];
gdjs.LeaderboardCode.GDScoreNumberC3Objects1= [];
gdjs.LeaderboardCode.GDScoreNumberC3Objects2= [];
gdjs.LeaderboardCode.GDScoreNumberE2Objects1= [];
gdjs.LeaderboardCode.GDScoreNumberE2Objects2= [];
gdjs.LeaderboardCode.GDScoreNumberE3Objects1= [];
gdjs.LeaderboardCode.GDScoreNumberE3Objects2= [];
gdjs.LeaderboardCode.GDScoreNumberDObjects1= [];
gdjs.LeaderboardCode.GDScoreNumberDObjects2= [];
gdjs.LeaderboardCode.GDScoreNumberD2Objects1= [];
gdjs.LeaderboardCode.GDScoreNumberD2Objects2= [];
gdjs.LeaderboardCode.GDScoreNumberD3Objects1= [];
gdjs.LeaderboardCode.GDScoreNumberD3Objects2= [];
gdjs.LeaderboardCode.GDScoreNumberAObjects1= [];
gdjs.LeaderboardCode.GDScoreNumberAObjects2= [];
gdjs.LeaderboardCode.GDScoreNumberA3Objects1= [];
gdjs.LeaderboardCode.GDScoreNumberA3Objects2= [];
gdjs.LeaderboardCode.GDScoreNumberA2Objects1= [];
gdjs.LeaderboardCode.GDScoreNumberA2Objects2= [];
gdjs.LeaderboardCode.GDScoreNameObjects1= [];
gdjs.LeaderboardCode.GDScoreNameObjects2= [];
gdjs.LeaderboardCode.GDScoreScreenObjects1= [];
gdjs.LeaderboardCode.GDScoreScreenObjects2= [];
gdjs.LeaderboardCode.GDScoreLightObjects1= [];
gdjs.LeaderboardCode.GDScoreLightObjects2= [];
gdjs.LeaderboardCode.GDScoreNumberB4Objects1= [];
gdjs.LeaderboardCode.GDScoreNumberB4Objects2= [];


gdjs.LeaderboardCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ScoreName"), gdjs.LeaderboardCode.GDScoreNameObjects1);
gdjs.copyArray(runtimeScene.getObjects("ScoreNumberE"), gdjs.LeaderboardCode.GDScoreNumberEObjects1);
gdjs.copyArray(runtimeScene.getObjects("ScoreNumberE2"), gdjs.LeaderboardCode.GDScoreNumberE2Objects1);
gdjs.copyArray(runtimeScene.getObjects("ScoreNumberE3"), gdjs.LeaderboardCode.GDScoreNumberE3Objects1);
gdjs.copyArray(runtimeScene.getObjects("ScoreNumberE4"), gdjs.LeaderboardCode.GDScoreNumberE4Objects1);
gdjs.copyArray(runtimeScene.getObjects("ScoreNumberE5"), gdjs.LeaderboardCode.GDScoreNumberE5Objects1);
gdjs.copyArray(runtimeScene.getObjects("ScoreScreen"), gdjs.LeaderboardCode.GDScoreScreenObjects1);
{for(var i = 0, len = gdjs.LeaderboardCode.GDScoreNameObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDScoreNameObjects1[i].getBehavior("Animation").setAnimationName("black");
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDScoreScreenObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDScoreScreenObjects1[i].getBehavior("Animation").setAnimationName("plantilla celeste");
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDScoreNumberEObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDScoreNumberEObjects1[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber() - gdjs.evtTools.common.trunc(runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber() / 10) * 10);
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDScoreNumberE2Objects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDScoreNumberE2Objects1[i].getBehavior("Animation").setAnimationIndex(gdjs.evtTools.common.trunc(runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber() / 10) - gdjs.evtTools.common.trunc(runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber() / 100) * 10);
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDScoreNumberE3Objects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDScoreNumberE3Objects1[i].getBehavior("Animation").setAnimationIndex(gdjs.evtTools.common.trunc(runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber() / 100) - gdjs.evtTools.common.trunc(runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber() / 1000) * 10);
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDScoreNumberE4Objects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDScoreNumberE4Objects1[i].getBehavior("Animation").setAnimationIndex(gdjs.evtTools.common.trunc(runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber() / 1000) - gdjs.evtTools.common.trunc(runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber() / 10000) * 10);
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDScoreNumberE5Objects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDScoreNumberE5Objects1[i].getBehavior("Animation").setAnimationIndex(gdjs.evtTools.common.trunc(runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber() / 10000) - gdjs.evtTools.common.trunc(runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber() / 100000) * 10);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ScoreNumberB"), gdjs.LeaderboardCode.GDScoreNumberBObjects1);
gdjs.copyArray(runtimeScene.getObjects("ScoreNumberB2"), gdjs.LeaderboardCode.GDScoreNumberB2Objects1);
gdjs.copyArray(runtimeScene.getObjects("ScoreNumberB3"), gdjs.LeaderboardCode.GDScoreNumberB3Objects1);
gdjs.copyArray(runtimeScene.getObjects("ScoreNumberB4"), gdjs.LeaderboardCode.GDScoreNumberB4Objects1);
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(gdjs.evtTools.common.trunc(runtimeScene.getGame().getVariables().getFromIndex(18).getAsNumber() / 600) - gdjs.evtTools.common.trunc(runtimeScene.getGame().getVariables().getFromIndex(18).getAsNumber() / 6000) * 10);
}{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(gdjs.evtTools.common.trunc(runtimeScene.getGame().getVariables().getFromIndex(18).getAsNumber() / 60) - gdjs.evtTools.common.trunc(runtimeScene.getGame().getVariables().getFromIndex(18).getAsNumber() / 600) * 10);
}{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(gdjs.evtTools.common.trunc((runtimeScene.getGame().getVariables().getFromIndex(18).getAsNumber() - gdjs.evtTools.common.trunc(runtimeScene.getGame().getVariables().getFromIndex(18).getAsNumber() / 60) * 60) / 10));
}{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber((runtimeScene.getGame().getVariables().getFromIndex(18).getAsNumber() - gdjs.evtTools.common.trunc(runtimeScene.getGame().getVariables().getFromIndex(18).getAsNumber() / 60) * 60) - gdjs.evtTools.common.trunc((runtimeScene.getGame().getVariables().getFromIndex(18).getAsNumber() - gdjs.evtTools.common.trunc(runtimeScene.getGame().getVariables().getFromIndex(18).getAsNumber() / 60) * 60) / 10) * 10);
}{for(var i = 0, len = gdjs.LeaderboardCode.GDScoreNumberBObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDScoreNumberBObjects1[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber());
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDScoreNumberB2Objects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDScoreNumberB2Objects1[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber());
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDScoreNumberB3Objects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDScoreNumberB3Objects1[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber());
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDScoreNumberB4Objects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDScoreNumberB4Objects1[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Rankinkg_Puntos"), gdjs.LeaderboardCode.GDRankinkg_9595PuntosObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LeaderboardCode.GDRankinkg_9595PuntosObjects1.length;i<l;++i) {
    if ( gdjs.LeaderboardCode.GDRankinkg_9595PuntosObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LeaderboardCode.GDRankinkg_9595PuntosObjects1[k] = gdjs.LeaderboardCode.GDRankinkg_9595PuntosObjects1[i];
        ++k;
    }
}
gdjs.LeaderboardCode.GDRankinkg_9595PuntosObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "ddea2b09-82cf-49f7-a48e-51421f345fc8", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Rankinkg_M_Jr"), gdjs.LeaderboardCode.GDRankinkg_9595M_9595JrObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LeaderboardCode.GDRankinkg_9595M_9595JrObjects1.length;i<l;++i) {
    if ( gdjs.LeaderboardCode.GDRankinkg_9595M_9595JrObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LeaderboardCode.GDRankinkg_9595M_9595JrObjects1[k] = gdjs.LeaderboardCode.GDRankinkg_9595M_9595JrObjects1[i];
        ++k;
    }
}
gdjs.LeaderboardCode.GDRankinkg_9595M_9595JrObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "ed3964af-b3bb-453c-bdc0-fec57bfc661f", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Rankinkg_F_Jr"), gdjs.LeaderboardCode.GDRankinkg_9595F_9595JrObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LeaderboardCode.GDRankinkg_9595F_9595JrObjects1.length;i<l;++i) {
    if ( gdjs.LeaderboardCode.GDRankinkg_9595F_9595JrObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LeaderboardCode.GDRankinkg_9595F_9595JrObjects1[k] = gdjs.LeaderboardCode.GDRankinkg_9595F_9595JrObjects1[i];
        ++k;
    }
}
gdjs.LeaderboardCode.GDRankinkg_9595F_9595JrObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "1812c2bd-9be5-434e-a258-d96ca2eafcc2", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Rankinkg_Sr"), gdjs.LeaderboardCode.GDRankinkg_9595SrObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LeaderboardCode.GDRankinkg_9595SrObjects1.length;i<l;++i) {
    if ( gdjs.LeaderboardCode.GDRankinkg_9595SrObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LeaderboardCode.GDRankinkg_9595SrObjects1[k] = gdjs.LeaderboardCode.GDRankinkg_9595SrObjects1[i];
        ++k;
    }
}
gdjs.LeaderboardCode.GDRankinkg_9595SrObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "7491f82f-2a94-44ba-8273-8bc983277387", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedButton"), gdjs.LeaderboardCode.GDRedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LeaderboardCode.GDRedButtonObjects1.length;i<l;++i) {
    if ( gdjs.LeaderboardCode.GDRedButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LeaderboardCode.GDRedButtonObjects1[k] = gdjs.LeaderboardCode.GDRedButtonObjects1[i];
        ++k;
    }
}
gdjs.LeaderboardCode.GDRedButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "f99c83de-f188-4279-beca-f51bc33329bd", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("YellowButton"), gdjs.LeaderboardCode.GDYellowButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LeaderboardCode.GDYellowButtonObjects1.length;i<l;++i) {
    if ( gdjs.LeaderboardCode.GDYellowButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LeaderboardCode.GDYellowButtonObjects1[k] = gdjs.LeaderboardCode.GDYellowButtonObjects1[i];
        ++k;
    }
}
gdjs.LeaderboardCode.GDYellowButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "829395eb-fe62-475a-8bda-002064e8a68f", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteSleekButton"), gdjs.LeaderboardCode.GDWhiteSleekButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LeaderboardCode.GDWhiteSleekButtonObjects1.length;i<l;++i) {
    if ( gdjs.LeaderboardCode.GDWhiteSleekButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LeaderboardCode.GDWhiteSleekButtonObjects1[k] = gdjs.LeaderboardCode.GDWhiteSleekButtonObjects1[i];
        ++k;
    }
}
gdjs.LeaderboardCode.GDWhiteSleekButtonObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(10).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setBoolean(false);
}{runtimeScene.getGame().getVariables().getFromIndex(6).setBoolean(false);
}{runtimeScene.getGame().getVariables().getFromIndex(8).setBoolean(false);
}{runtimeScene.getGame().getVariables().getFromIndex(20).setBoolean(false);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setBoolean(false);
}{runtimeScene.getGame().getVariables().getFromIndex(7).setBoolean(false);
}{runtimeScene.getGame().getVariables().getFromIndex(16).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(19).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(17).setString("0");
}{runtimeScene.getGame().getVariables().getFromIndex(4).setBoolean(false);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setBoolean(false);
}{runtimeScene.getGame().getVariables().getFromIndex(13).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(12).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(14).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(11).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(18).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setBoolean(false);
}{runtimeScene.getGame().getVariables().getFromIndex(5).setBoolean(false);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start Game", false);
}}

}


};

gdjs.LeaderboardCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LeaderboardCode.GDYellowButtonObjects1.length = 0;
gdjs.LeaderboardCode.GDYellowButtonObjects2.length = 0;
gdjs.LeaderboardCode.GDSandObjects1.length = 0;
gdjs.LeaderboardCode.GDSandObjects2.length = 0;
gdjs.LeaderboardCode.GDGreyFeltObjects1.length = 0;
gdjs.LeaderboardCode.GDGreyFeltObjects2.length = 0;
gdjs.LeaderboardCode.GDInputNameObjects1.length = 0;
gdjs.LeaderboardCode.GDInputNameObjects2.length = 0;
gdjs.LeaderboardCode.GDInputScoreObjects1.length = 0;
gdjs.LeaderboardCode.GDInputScoreObjects2.length = 0;
gdjs.LeaderboardCode.GDRankinkg_9595PuntosObjects1.length = 0;
gdjs.LeaderboardCode.GDRankinkg_9595PuntosObjects2.length = 0;
gdjs.LeaderboardCode.GDScoreNumberObjects1.length = 0;
gdjs.LeaderboardCode.GDScoreNumberObjects2.length = 0;
gdjs.LeaderboardCode.GDNewSprite2Objects1.length = 0;
gdjs.LeaderboardCode.GDNewSprite2Objects2.length = 0;
gdjs.LeaderboardCode.GDNewSprite3Objects1.length = 0;
gdjs.LeaderboardCode.GDNewSprite3Objects2.length = 0;
gdjs.LeaderboardCode.GDTimeboardObjects1.length = 0;
gdjs.LeaderboardCode.GDTimeboardObjects2.length = 0;
gdjs.LeaderboardCode.GDdosptosObjects1.length = 0;
gdjs.LeaderboardCode.GDdosptosObjects2.length = 0;
gdjs.LeaderboardCode.GDRedButtonObjects1.length = 0;
gdjs.LeaderboardCode.GDRedButtonObjects2.length = 0;
gdjs.LeaderboardCode.GDWhiteSleekButtonObjects1.length = 0;
gdjs.LeaderboardCode.GDWhiteSleekButtonObjects2.length = 0;
gdjs.LeaderboardCode.GDScoreNumberE4Objects1.length = 0;
gdjs.LeaderboardCode.GDScoreNumberE4Objects2.length = 0;
gdjs.LeaderboardCode.GDScoreNumberE5Objects1.length = 0;
gdjs.LeaderboardCode.GDScoreNumberE5Objects2.length = 0;
gdjs.LeaderboardCode.GDRankinkg_9595M_9595JrObjects1.length = 0;
gdjs.LeaderboardCode.GDRankinkg_9595M_9595JrObjects2.length = 0;
gdjs.LeaderboardCode.GDRankinkg_9595F_9595JrObjects1.length = 0;
gdjs.LeaderboardCode.GDRankinkg_9595F_9595JrObjects2.length = 0;
gdjs.LeaderboardCode.GDRankinkg_9595SrObjects1.length = 0;
gdjs.LeaderboardCode.GDRankinkg_9595SrObjects2.length = 0;
gdjs.LeaderboardCode.GDScoreNumberEObjects1.length = 0;
gdjs.LeaderboardCode.GDScoreNumberEObjects2.length = 0;
gdjs.LeaderboardCode.GDScoreNumberBObjects1.length = 0;
gdjs.LeaderboardCode.GDScoreNumberBObjects2.length = 0;
gdjs.LeaderboardCode.GDScoreNumberB2Objects1.length = 0;
gdjs.LeaderboardCode.GDScoreNumberB2Objects2.length = 0;
gdjs.LeaderboardCode.GDScoreNumberB3Objects1.length = 0;
gdjs.LeaderboardCode.GDScoreNumberB3Objects2.length = 0;
gdjs.LeaderboardCode.GDScoreNumberCObjects1.length = 0;
gdjs.LeaderboardCode.GDScoreNumberCObjects2.length = 0;
gdjs.LeaderboardCode.GDScoreNumberC2Objects1.length = 0;
gdjs.LeaderboardCode.GDScoreNumberC2Objects2.length = 0;
gdjs.LeaderboardCode.GDScoreNumberC3Objects1.length = 0;
gdjs.LeaderboardCode.GDScoreNumberC3Objects2.length = 0;
gdjs.LeaderboardCode.GDScoreNumberE2Objects1.length = 0;
gdjs.LeaderboardCode.GDScoreNumberE2Objects2.length = 0;
gdjs.LeaderboardCode.GDScoreNumberE3Objects1.length = 0;
gdjs.LeaderboardCode.GDScoreNumberE3Objects2.length = 0;
gdjs.LeaderboardCode.GDScoreNumberDObjects1.length = 0;
gdjs.LeaderboardCode.GDScoreNumberDObjects2.length = 0;
gdjs.LeaderboardCode.GDScoreNumberD2Objects1.length = 0;
gdjs.LeaderboardCode.GDScoreNumberD2Objects2.length = 0;
gdjs.LeaderboardCode.GDScoreNumberD3Objects1.length = 0;
gdjs.LeaderboardCode.GDScoreNumberD3Objects2.length = 0;
gdjs.LeaderboardCode.GDScoreNumberAObjects1.length = 0;
gdjs.LeaderboardCode.GDScoreNumberAObjects2.length = 0;
gdjs.LeaderboardCode.GDScoreNumberA3Objects1.length = 0;
gdjs.LeaderboardCode.GDScoreNumberA3Objects2.length = 0;
gdjs.LeaderboardCode.GDScoreNumberA2Objects1.length = 0;
gdjs.LeaderboardCode.GDScoreNumberA2Objects2.length = 0;
gdjs.LeaderboardCode.GDScoreNameObjects1.length = 0;
gdjs.LeaderboardCode.GDScoreNameObjects2.length = 0;
gdjs.LeaderboardCode.GDScoreScreenObjects1.length = 0;
gdjs.LeaderboardCode.GDScoreScreenObjects2.length = 0;
gdjs.LeaderboardCode.GDScoreLightObjects1.length = 0;
gdjs.LeaderboardCode.GDScoreLightObjects2.length = 0;
gdjs.LeaderboardCode.GDScoreNumberB4Objects1.length = 0;
gdjs.LeaderboardCode.GDScoreNumberB4Objects2.length = 0;

gdjs.LeaderboardCode.eventsList0(runtimeScene);
gdjs.LeaderboardCode.GDYellowButtonObjects1.length = 0;
gdjs.LeaderboardCode.GDYellowButtonObjects2.length = 0;
gdjs.LeaderboardCode.GDSandObjects1.length = 0;
gdjs.LeaderboardCode.GDSandObjects2.length = 0;
gdjs.LeaderboardCode.GDGreyFeltObjects1.length = 0;
gdjs.LeaderboardCode.GDGreyFeltObjects2.length = 0;
gdjs.LeaderboardCode.GDInputNameObjects1.length = 0;
gdjs.LeaderboardCode.GDInputNameObjects2.length = 0;
gdjs.LeaderboardCode.GDInputScoreObjects1.length = 0;
gdjs.LeaderboardCode.GDInputScoreObjects2.length = 0;
gdjs.LeaderboardCode.GDRankinkg_9595PuntosObjects1.length = 0;
gdjs.LeaderboardCode.GDRankinkg_9595PuntosObjects2.length = 0;
gdjs.LeaderboardCode.GDScoreNumberObjects1.length = 0;
gdjs.LeaderboardCode.GDScoreNumberObjects2.length = 0;
gdjs.LeaderboardCode.GDNewSprite2Objects1.length = 0;
gdjs.LeaderboardCode.GDNewSprite2Objects2.length = 0;
gdjs.LeaderboardCode.GDNewSprite3Objects1.length = 0;
gdjs.LeaderboardCode.GDNewSprite3Objects2.length = 0;
gdjs.LeaderboardCode.GDTimeboardObjects1.length = 0;
gdjs.LeaderboardCode.GDTimeboardObjects2.length = 0;
gdjs.LeaderboardCode.GDdosptosObjects1.length = 0;
gdjs.LeaderboardCode.GDdosptosObjects2.length = 0;
gdjs.LeaderboardCode.GDRedButtonObjects1.length = 0;
gdjs.LeaderboardCode.GDRedButtonObjects2.length = 0;
gdjs.LeaderboardCode.GDWhiteSleekButtonObjects1.length = 0;
gdjs.LeaderboardCode.GDWhiteSleekButtonObjects2.length = 0;
gdjs.LeaderboardCode.GDScoreNumberE4Objects1.length = 0;
gdjs.LeaderboardCode.GDScoreNumberE4Objects2.length = 0;
gdjs.LeaderboardCode.GDScoreNumberE5Objects1.length = 0;
gdjs.LeaderboardCode.GDScoreNumberE5Objects2.length = 0;
gdjs.LeaderboardCode.GDRankinkg_9595M_9595JrObjects1.length = 0;
gdjs.LeaderboardCode.GDRankinkg_9595M_9595JrObjects2.length = 0;
gdjs.LeaderboardCode.GDRankinkg_9595F_9595JrObjects1.length = 0;
gdjs.LeaderboardCode.GDRankinkg_9595F_9595JrObjects2.length = 0;
gdjs.LeaderboardCode.GDRankinkg_9595SrObjects1.length = 0;
gdjs.LeaderboardCode.GDRankinkg_9595SrObjects2.length = 0;
gdjs.LeaderboardCode.GDScoreNumberEObjects1.length = 0;
gdjs.LeaderboardCode.GDScoreNumberEObjects2.length = 0;
gdjs.LeaderboardCode.GDScoreNumberBObjects1.length = 0;
gdjs.LeaderboardCode.GDScoreNumberBObjects2.length = 0;
gdjs.LeaderboardCode.GDScoreNumberB2Objects1.length = 0;
gdjs.LeaderboardCode.GDScoreNumberB2Objects2.length = 0;
gdjs.LeaderboardCode.GDScoreNumberB3Objects1.length = 0;
gdjs.LeaderboardCode.GDScoreNumberB3Objects2.length = 0;
gdjs.LeaderboardCode.GDScoreNumberCObjects1.length = 0;
gdjs.LeaderboardCode.GDScoreNumberCObjects2.length = 0;
gdjs.LeaderboardCode.GDScoreNumberC2Objects1.length = 0;
gdjs.LeaderboardCode.GDScoreNumberC2Objects2.length = 0;
gdjs.LeaderboardCode.GDScoreNumberC3Objects1.length = 0;
gdjs.LeaderboardCode.GDScoreNumberC3Objects2.length = 0;
gdjs.LeaderboardCode.GDScoreNumberE2Objects1.length = 0;
gdjs.LeaderboardCode.GDScoreNumberE2Objects2.length = 0;
gdjs.LeaderboardCode.GDScoreNumberE3Objects1.length = 0;
gdjs.LeaderboardCode.GDScoreNumberE3Objects2.length = 0;
gdjs.LeaderboardCode.GDScoreNumberDObjects1.length = 0;
gdjs.LeaderboardCode.GDScoreNumberDObjects2.length = 0;
gdjs.LeaderboardCode.GDScoreNumberD2Objects1.length = 0;
gdjs.LeaderboardCode.GDScoreNumberD2Objects2.length = 0;
gdjs.LeaderboardCode.GDScoreNumberD3Objects1.length = 0;
gdjs.LeaderboardCode.GDScoreNumberD3Objects2.length = 0;
gdjs.LeaderboardCode.GDScoreNumberAObjects1.length = 0;
gdjs.LeaderboardCode.GDScoreNumberAObjects2.length = 0;
gdjs.LeaderboardCode.GDScoreNumberA3Objects1.length = 0;
gdjs.LeaderboardCode.GDScoreNumberA3Objects2.length = 0;
gdjs.LeaderboardCode.GDScoreNumberA2Objects1.length = 0;
gdjs.LeaderboardCode.GDScoreNumberA2Objects2.length = 0;
gdjs.LeaderboardCode.GDScoreNameObjects1.length = 0;
gdjs.LeaderboardCode.GDScoreNameObjects2.length = 0;
gdjs.LeaderboardCode.GDScoreScreenObjects1.length = 0;
gdjs.LeaderboardCode.GDScoreScreenObjects2.length = 0;
gdjs.LeaderboardCode.GDScoreLightObjects1.length = 0;
gdjs.LeaderboardCode.GDScoreLightObjects2.length = 0;
gdjs.LeaderboardCode.GDScoreNumberB4Objects1.length = 0;
gdjs.LeaderboardCode.GDScoreNumberB4Objects2.length = 0;


return;

}

gdjs['LeaderboardCode'] = gdjs.LeaderboardCode;

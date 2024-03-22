// Created by iWeb 3.0.4 local-build-20110726

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-5,5,10,215),url:'Workshop_Photos_files/stroke.png'},{rect:new IWRect(-5,-5,10,10),url:'Workshop_Photos_files/stroke_1.png'},{rect:new IWRect(5,-5,290,10),url:'Workshop_Photos_files/stroke_2.png'},{rect:new IWRect(295,-5,10,10),url:'Workshop_Photos_files/stroke_3.png'},{rect:new IWRect(295,5,10,215),url:'Workshop_Photos_files/stroke_4.png'},{rect:new IWRect(295,220,10,10),url:'Workshop_Photos_files/stroke_5.png'},{rect:new IWRect(5,220,290,10),url:'Workshop_Photos_files/stroke_6.png'},{rect:new IWRect(-5,220,10,10),url:'Workshop_Photos_files/stroke_7.png'}],new IWSize(300,225))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Workshop_Photos_files/Workshop_PhotosMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');Widget.onload();applyEffects()}
function onPageUnload()
{Widget.onunload();}

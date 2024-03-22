// Created by iWeb 3.0.4 local-build-20121105

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,134),url:'Workshop_Program_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'Workshop_Program_files/stroke_1.png'},{rect:new IWRect(1,-1,703,2),url:'Workshop_Program_files/stroke_2.png'},{rect:new IWRect(704,-1,2,2),url:'Workshop_Program_files/stroke_3.png'},{rect:new IWRect(704,1,2,134),url:'Workshop_Program_files/stroke_4.png'},{rect:new IWRect(704,135,2,2),url:'Workshop_Program_files/stroke_5.png'},{rect:new IWRect(1,135,703,2),url:'Workshop_Program_files/stroke_6.png'},{rect:new IWRect(-1,135,2,2),url:'Workshop_Program_files/stroke_7.png'}],new IWSize(705,136))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Workshop_Program_files/Workshop_ProgramMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}

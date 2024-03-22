// Created by iWeb 3.0.4 local-build-20121030

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,134),url:'Paper_Submission_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'Paper_Submission_files/stroke_1.png'},{rect:new IWRect(1,-1,703,2),url:'Paper_Submission_files/stroke_2.png'},{rect:new IWRect(704,-1,2,2),url:'Paper_Submission_files/stroke_3.png'},{rect:new IWRect(704,1,2,134),url:'Paper_Submission_files/stroke_4.png'},{rect:new IWRect(704,135,2,2),url:'Paper_Submission_files/stroke_5.png'},{rect:new IWRect(1,135,703,2),url:'Paper_Submission_files/stroke_6.png'},{rect:new IWRect(-1,135,2,2),url:'Paper_Submission_files/stroke_7.png'}],new IWSize(705,136))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Paper_Submission_files/Paper_SubmissionMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}

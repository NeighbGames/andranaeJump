"use strict";window.g_aAe=class{constructor(c,a){this.g_alR=c,this.g_aAf=a,this.g_aAg=!1,this.g_akW=()=>this.g_JS()}g_aAh(){}g_aAi(e,a,b,c){this.g_alR.g_aAj(this.g_aAf,e,a,b,c)}g_aAk(e,a,b,c){return this.g_alR.g_aAl(this.g_aAf,e,a,b,c)}g_aAm(d,a,b){this.g_alR.g_aAn()?this.g_aAi(d,a,b):this.g_alR.g_aAo()._OnMessageFromDOM({type:"event",component:this.g_aAf,handler:d,dispatchOpts:b||null,data:a,responseId:null})}g_aAp(c,a){this.g_alR.g_aAq(this.g_aAf,c,a)}g_aAr(d){for(const[a,b]of d)this.g_aAp(a,b)}g_aAs(){return this.g_alR}g_aAt(){return this.g_aAf}g_$t(){this.g_aAg||(this.g_alR.g_aAu(this.g_akW),this.g_aAg=!0)}g_$g(){this.g_aAg&&(this.g_alR.g_aAv(this.g_akW),this.g_aAg=!1)}g_JS(){}},"use strict",window.g_aAw=class extends g_aAe{constructor(c,a){super(c,a),this.g_aAx=new Map,this.g_aAy=!0,this.g_aAp("create",b=>this.g_aAz(b)),this.g_aAp("destroy",b=>this.g_aAA(b)),this.g_aAp("set-visible",b=>this.g_aAB(b)),this.g_aAp("update-position",b=>this.g_aAC(b)),this.g_aAp("update-state",b=>this.g_awq(b)),this.g_aAp("focus",b=>this.g_aAD(b)),this.g_aAp("set-css-style",b=>this.g_aAE(b))}g_aAF(b){this.g_aAy=!!b}g_aAG(c,e){this.g_aAp(c,b=>{const a=b.elementId,c=this.g_aAx.get(a);return e(c,b)})}g_aAz(d){const a=d.elementId,b=this.g_$T(a,d);this.g_aAx.set(a,b),d.isVisible||(b.style.display="none"),this.g_aAy&&document.body.appendChild(b)}g_$T(){throw new Error("required override")}g_aAH(){}g_aAA(d){const a=d.elementId,b=this.g_aAx.get(a);this.g_aAH(b),this.g_aAy&&b.parentElement.removeChild(b),this.g_aAx.delete(a)}g_aAI(d,a,b){b||(b={}),b.elementId=a,this.g_aAi(d,b)}g_aAJ(d,a,b){b||(b={}),b.elementId=a,this.g_aAm(d,b)}g_aAB(c){if(this.g_aAy){const a=this.g_aAx.get(c.elementId);a.style.display=c.isVisible?"":"none"}}g_aAC(d){if(this.g_aAy){const a=this.g_aAx.get(d.elementId);a.style.left=d.left+"px",a.style.top=d.top+"px",a.style.width=d.width+"px",a.style.height=d.height+"px";const b=d.fontSize;null!==b&&(a.style.fontSize=b+"em")}}g_awq(c){const a=this.g_aAx.get(c.elementId);this.g_aAK(a,c)}g_aAK(){throw new Error("required override")}g_aAD(c){const a=this.g_aAx.get(c.elementId);c.focus?a.focus():a.blur()}g_aAE(c){const a=this.g_aAx.get(c.elementId);a.style[c.prop]=c.val}g_aAL(b){return this.g_aAx.get(b)}},"use strict";{function n(e){return new Promise((a,b)=>{const c=document.createElement("script");c.onload=a,c.onerror=b,c.async=!1,c.src=e,document.head.appendChild(c)})}async function o(c){const a=await p(c),b=new TextDecoder("utf-8");return b.decode(a)}function p(e){return new Promise((f,b)=>{const a=new FileReader;a.onload=b=>f(b.target.result),a.onerror=c=>b(c),a.readAsArrayBuffer(e)})}const a=/(iphone|ipod|ipad)/i.test(navigator.userAgent);let b=new Audio;const c={"audio/webm; codecs=opus":!!b.canPlayType("audio/webm; codecs=opus"),"audio/ogg; codecs=opus":!!b.canPlayType("audio/ogg; codecs=opus"),"audio/webm; codecs=vorbis":!!b.canPlayType("audio/webm; codecs=vorbis"),"audio/ogg; codecs=vorbis":!!b.canPlayType("audio/ogg; codecs=vorbis"),"audio/mp4":!!b.canPlayType("audio/mp4"),"audio/mpeg":!!b.canPlayType("audio/mpeg")};b=null;const d=[];let e=0;window.RealFile=window.File;const f=[],i=new Map,g=new Map;let h=0;const j=[];self.g_aAM=function(b){if("function"!=typeof b)throw new Error("runOnStartup called without a function");j.push(b)},window.g_aAN=class b{constructor(b){this.g_aAO=b.g_aAP,this.g_aAQ=null,this.g_ajX="",this.g_aAR=b.g_aAS,this.g_aAT={},this.g_aAU=null,this.g_aAV=null,this.g_aAW=[],this.g_aAX=null,this.g_ahY=null,this.g_alL=null,this.g_aiF=-1,this.g_aAY=()=>this.g_aAZ(),this.g_aA_=[],this.g_aka=b.g_aA$,"cordova"===this.g_aka&&this.g_aAO&&(console.warn("[C3 runtime] Worker mode is enabled and supported, but is disabled in Cordova due to crbug.com/939775. Reverting to DOM mode."),this.g_aAO=!1),this.g_aBa=!1,this.g_aBb=null,("html5"===this.g_aka||"playable-ad"===this.g_aka)&&"file"===location.protocol.substr(0,4)&&alert("Exported games won't work until you upload them. (When running on the file: protocol, browsers block many features from working for security reasons.)"),this.g_aAq("runtime","cordova-fetch-local-file",b=>this.g_aBc(b)),this.g_aAq("runtime","create-job-worker",b=>this.g_aBd(b)),"cordova"===this.g_aka?document.addEventListener("deviceready",()=>this.g__j(b)):this.g__j(b)}g_em(){this.g_aBe(),this.g_aAQ&&(this.g_aAQ.onmessage=null,this.g_aAQ=null),this.g_aAU&&(this.g_aAU.terminate(),this.g_aAU=null),this.g_aAV&&(this.g_aAV.g_em(),this.g_aAV=null),this.g_ahY&&(this.g_ahY.parentElement.removeChild(this.g_ahY),this.g_ahY=null)}g_aBf(){return this.g_ahY}g_fg(){return this.g_ajX}g_aAn(){return this.g_aAO}g_ann(){return this.g_aka}g_amg(){return"cordova"===this.g_aka&&a}g_aBg(){return"cordova"===this.g_aka&&!1===a}async g__j(d){if("playable-ad"===this.g_aka){this.g_aBb=self.c3_base64files,await this.g_aBh();for(let a=0,b=d.g_aBi.length;a<b;++a){const b=d.g_aBi[a].toLowerCase();this.g_aBb.hasOwnProperty(b)&&(d.g_aBi[a]=URL.createObjectURL(this.g_aBb[b]))}}if(d.g_aBj)this.g_ajX=d.g_aBj;else{const c=location.origin;this.g_ajX=("null"===c?"file:///":c)+location.pathname;const a=this.g_ajX.lastIndexOf("/");-1!==a&&(this.g_ajX=this.g_ajX.substr(0,a+1))}if(d.g_aBk)for(const[a,b]of Object.entries(d.g_aBk))this.g_aAT[a]=URL.createObjectURL(b);const a=new MessageChannel;this.g_aAQ=a.port1,this.g_aAQ.onmessage=b=>this._OnMessageFromRuntime(b.data),window.c3_addPortMessageHandler&&window.c3_addPortMessageHandler(b=>this.g_aBl(b)),this.g_alL=new self.g_aBm(this),await this.g_alL.g_ae_(),this.g_aBn(),"object"==typeof window.StatusBar&&window.StatusBar.hide(),"object"==typeof window.AndroidFullScreen&&window.AndroidFullScreen.immersiveMode(),await this.g_aBo(),this.g_aAO?await this.g_aBp(d,a.port2):await this.g_aBq(d,a.port2)}g_aBr(b){return this.g_aAT.hasOwnProperty(b)?this.g_aAT[b]:b.endsWith("/workermain.js")&&this.g_aAT.hasOwnProperty("workermain.js")?this.g_aAT["workermain.js"]:"playable-ad"===this.g_aka&&this.g_aBb.hasOwnProperty(b.toLowerCase())?URL.createObjectURL(this.g_aBb[b.toLowerCase()]):b}async g_aBs(f,a,g){if(f.startsWith("blob:"))return new Worker(f,g);if(this.g_amg()){const a=await this.g_Aj(this.g_aAR+f),b=new Blob([a],{type:"application/javascript"});return new Worker(URL.createObjectURL(b),g)}const c=new URL(f,a),b=location.origin!==c.origin;if(b){const d=await fetch(c);if(!d.ok)throw new Error("failed to fetch worker script");const a=await d.blob();return new Worker(URL.createObjectURL(a),g)}return new Worker(c,g)}g_aBn(){if(this.g_amg()){const f=document.documentElement.style,a=document.body.style,b=window.innerWidth<window.innerHeight,c=b?window.screen.width:window.screen.height,d=b?window.screen.height:window.screen.width;a.height=f.height=d+"px",a.width=f.width=c+"px"}}g_aBt(d){return{baseUrl:this.g_ajX,windowInnerWidth:window.innerWidth,windowInnerHeight:window.innerHeight,devicePixelRatio:window.devicePixelRatio,isFullscreen:b.g_ajh(),projectData:d.g_aBu,previewImageBlobs:window.cr_previewImageBlobs||this.g_aBb,previewProjectFileBlobs:window.cr_previewProjectFileBlobs,exportType:d.g_aA$,isDebug:-1<self.location.search.indexOf("debug"),ife:!!self.g_aBv,jobScheduler:this.g_alL.g_aBw(),supportedAudioFormats:c,opusWasmScriptUrl:window.cr_opusWasmScriptUrl||this.g_aAR+"opus.wasm.js",opusWasmBinaryUrl:window.cr_opusWasmBinaryUrl||this.g_aAR+"opus.wasm.wasm",isWKWebView:this.g_amg(),isFBInstantAvailable:"undefined"!=typeof self.FBInstant}}async g_aBp(e,a){const b=this.g_aBr(e.g_aBx);this.g_aAU=await this.g_aBs(b,this.g_ajX,{name:"Runtime"}),this.g_ahY=document.createElement("canvas"),this.g_ahY.style.display="none";const c=this.g_ahY.transferControlToOffscreen();document.body.appendChild(this.g_ahY),window.c3canvas=this.g_ahY,this.g_aAU.postMessage(Object.assign(this.g_aBt(e),{type:"init-runtime",isInWorker:!0,messagePort:a,canvas:c,workerDependencyScripts:e.g_aBy||[],engineScripts:e.g_aBi,projectScripts:window.g_aBz,projectScriptsStatus:self.C3_ProjectScriptsStatus}),[a,c,...this.g_alL.g_aBA()]),this.g_aAW=f.map(b=>new b(this)),this.g_aBB(),self.c3_callFunction=(c,a)=>this.g_aAX.g_QP(c,a),"preview"===this.g_aka&&(self.goToLastErrorScript=()=>this.g_aAj("runtime","go-to-last-error-script"))}async g_aBq(a,b){this.g_ahY=document.createElement("canvas"),this.g_ahY.style.display="none",document.body.appendChild(this.g_ahY),window.c3canvas=this.g_ahY,this.g_aAW=f.map(b=>new b(this)),this.g_aBB();const c=a.g_aBi.map(b=>new URL(b,this.g_ajX).toString());if(await Promise.all(c.map(a=>n(a))),a.g_aBC&&0<a.g_aBC.length){const b=self.C3_ProjectScriptsStatus;try{if(await Promise.all(a.g_aBC.map(a=>n(a[1]))),Object.values(b).some(b=>!b))return void self.setTimeout(()=>this.g_aBD(b),100)}catch(c){return console.error("[Preview] Error loading project scripts: ",c),void self.setTimeout(()=>this.g_aBD(b),100)}}if("preview"===this.g_aka&&"object"!=typeof self.g_aQ.g_aAd)return console.error("[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."),void alert("Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.");const d=Object.assign(this.g_aBt(a),{isInWorker:!1,messagePort:b,canvas:this.g_ahY,runOnStartupFunctions:j});this.g_aAV=self.C3_CreateRuntime(d),await self.C3_InitRuntime(this.g_aAV,d)}g_aBD(d){const a=Object.entries(d).filter(b=>!b[1]).map(b=>b[0]),b=`Failed to load project script '${a[0]}'. Check all your JavaScript code has valid syntax.`;console.error("[Preview] "+b),alert(b)}async g_aBd(){const b=await this.g_alL.g_aBE();return{outputPort:b,transferables:[b]}}g_aAo(){if(this.g_aAO)throw new Error("not available in worker mode");return this.g_aAV}g_aAj(f,a,b,c,d){this.g_aAQ.postMessage({type:"event",component:f,handler:a,dispatchOpts:c||null,data:b,responseId:null},this.g_aBa?void 0:d)}g_aAl(i,a,b,c,d){const e=h++,f=new Promise((c,a)=>{g.set(e,{resolve:c,reject:a})});return this.g_aAQ.postMessage({type:"event",component:i,handler:a,dispatchOpts:c||null,data:b,responseId:e},this.g_aBa?void 0:d),f}["_OnMessageFromRuntime"](c){const a=c.type;if("event"===a)this.g_aBF(c);else if("result"===a)this.g_aBG(c);else if("runtime-ready"===a)this.g_aBH();else if("alert"===a)alert(c.message);else throw new Error(`unknown message '${a}'`)}g_aBF(j){const k=j.component,b=j.handler,a=j.data,c=j.responseId,d=i.get(k);if(!d)return void console.warn(`[DOM] No event handlers for component '${k}'`);const e=d.get(b);if(!e)return void console.warn(`[DOM] No handler '${b}' for component '${k}'`);let f=null;try{f=e(a)}catch(d){return console.error(`Exception in '${k}' handler '${b}':`,d),void(null!==c&&this.g_aBI(c,!1,d.toString()))}null!==c&&(f&&f.then?f.then(b=>this.g_aBI(c,!0,b)).catch(d=>{console.error(`Rejection from '${k}' handler '${b}':`,d),this.g_aBI(c,!1,d.toString())}):this.g_aBI(c,!0,f))}g_aBI(e,a,b){let c;b&&b.transferables&&(c=b.transferables),this.g_aAQ.postMessage({type:"result",responseId:e,isOk:a,result:b},c)}g_aBG(f){const a=f.responseId,b=f.isOk,c=f.result,d=g.get(a);b?d.resolve(c):d.reject(c),g.delete(a)}g_aAq(e,a,b){let c=i.get(e);if(c||(c=new Map,i.set(e,c)),c.has(a))throw new Error(`[DOM] Component '${e}' already has handler '${a}'`);c.set(a,b)}static g_aBJ(b){if(f.includes(b))throw new Error("DOM handler already added");f.push(b)}g_aBB(){for(const b of this.g_aAW)if("runtime"===b.g_aAt())return void(this.g_aAX=b);throw new Error("cannot find runtime DOM handler")}g_aBl(b){this.g_aAj("debugger","message",b)}g_aBH(){for(const b of this.g_aAW)b.g_aAh()}static g_ajh(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement)}async g_aBK(){return await this.g_aAl("runtime","get-remote-preview-status-info")}g_aAu(b){this.g_aA_.push(b),this.g_aBL()}g_aAv(c){const a=this.g_aA_.indexOf(c);if(-1===a)throw new Error("invalid callback");this.g_aA_.splice(a,1),this.g_aA_.length||this.g_aBe()}g_aBL(){-1===this.g_aiF&&this.g_aA_.length&&(this.g_aiF=requestAnimationFrame(this.g_aAY))}g_aBe(){-1!==this.g_aiF&&(cancelAnimationFrame(this.g_aiF),this.g_aiF=-1)}g_aAZ(){this.g_aiF=-1;for(const b of this.g_aA_)b();this.g_aBL()}g_aBM(b){this.g_aAX.g_aBM(b)}g_aBN(b){this.g_aAX.g_aBN(b)}g_aBO(){this.g_aAX.g_aBO()}g_axc(b){this.g_aAX.g_axc(b)}g_AG(b){return!!c[b]}async g_abh(c){const a=await this.g_aAl("runtime","opus-decode",{arrayBuffer:c},null,[c]);return new Float32Array(a)}g_fS(b){return /^(?:[a-z]+:)?\/\//.test(b)||"data:"===b.substr(0,5)||"blob:"===b.substr(0,5)}g_fT(b){return!this.g_fS(b)}async g_aBc(c){const a=c.filename;switch(c.as){case"text":return await this.g_Ak(a);case"buffer":return await this.g_Aj(a);default:throw new Error("unsupported type");}}g_aBP(c){const d=window.cordova.file.applicationDirectory+"www/"+c.toLowerCase();return new Promise((e,a)=>{window.resolveLocalFileSystemURL(d,c=>{c.file(e,a)},a)})}async g_Ak(b){const a=await this.g_aBP(b);return await o(a)}g_aBQ(){if(d.length&&!(8<=e)){e++;const b=d.shift();this.g_aBR(b.filename,b.g_aBS,b.g_aBT)}}g_Aj(f){return new Promise((g,b)=>{d.push({filename:f,g_aBS:b=>{e--,this.g_aBQ(),g(b)},g_aBT:c=>{e--,this.g_aBQ(),b(c)}}),this.g_aBQ()})}async g_aBR(c,a,b){try{const b=await this.g_aBP(c),d=await p(b);a(d)}catch(c){b(c)}}async g_aBh(){const d=[];for(const[a,b]of Object.entries(this.g_aBb))d.push(this.g_aBU(a,b));await Promise.all(d)}async g_aBU(e,a){if("object"==typeof a)this.g_aBb[e]=new Blob([a.str],{type:a.type});else{const b=await fetch(a),c=await b.blob();this.g_aBb[e]=c}}g_aBo(){let e=null;const f=new Promise(a=>e=a),b=new ArrayBuffer(1),c=new MessageChannel;return c.port2.onmessage=a=>{a.data&&a.data.arrayBuffer||(this.g_aBa=!0,console.warn("MessageChannel transfers determined to be broken. Disabling transferables.")),e()},c.port1.postMessage({arrayBuffer:b},[b]),f}}}{function k(b){return b.sourceCapabilities&&b.sourceCapabilities.firesTouchEvents||b.originalEvent&&b.originalEvent.sourceCapabilities&&b.originalEvent.sourceCapabilities.firesTouchEvents}function a(e){return new Promise((a,b)=>{const c=new Image;c.onload=()=>a(c),c.onerror=c=>b(c),c.src=e})}async function l(b){const d=URL.createObjectURL(b);try{return await a(d)}finally{URL.revokeObjectURL(d)}}function m(b){do{if(b.parentNode&&b.hasAttribute("contenteditable"))return!0;b=b.parentNode}while(b);return!1}function c(b){(b.metaKey||b.ctrlKey)&&b.preventDefault()}function b(){try{return window.parent&&window.parent.document.hasFocus()}catch(b){return!1}}const e={dispatchRuntimeEvent:!0,dispatchUserScriptEvent:!0},d={dispatchUserScriptEvent:!0};self.C3_RasterSvgImage=async function(f,a,b){const c=document.createElement("canvas");c.width=a,c.height=b;const d=c.getContext("2d");return d.drawImage(f,0,0,a,b),c};let f=!1;document.addEventListener("pause",()=>f=!0),document.addEventListener("resume",()=>f=!1);const g=class extends g_aAe{constructor(d){super(d,"runtime"),this.g_aBV=!0,this.g_aBW=-1,this.g_aBX="any",this.g_aBY=!1,this.g_aBZ=!1,this.g_aB_=null,d.g_aAq("canvas","update-size",b=>this.g_aB$(b)),d.g_aAq("runtime","invoke-download",b=>this.g_aCa(b)),d.g_aAq("runtime","raster-svg-image",b=>this.g_aCb(b)),d.g_aAq("runtime","set-target-orientation",b=>this.g_aCc(b)),d.g_aAq("runtime","register-sw",()=>this.g_aCd()),d.g_aAq("runtime","post-to-debugger",b=>this.g_aCe(b)),d.g_aAq("runtime","go-to-script",b=>this.g_aCe(b)),d.g_aAq("runtime","before-start-ticking",()=>this.g_aCf()),d.g_aAq("runtime","debug-highlight",b=>this.g_aCg(b)),d.g_aAq("runtime","enable-device-orientation",()=>this.g_aCh()),d.g_aAq("runtime","enable-device-motion",()=>this.g_aCi());const f=new Set(["input","textarea","datalist"]);window.addEventListener("contextmenu",b=>{const a=b.target,c=a.tagName.toLowerCase();f.has(c)||m(a)||b.preventDefault()}),window.addEventListener("selectstart",b=>b.preventDefault()),window.addEventListener("gesturehold",b=>b.preventDefault()),window.addEventListener("touchstart",b=>b.preventDefault(),{passive:!1}),this.g_aCj=0,window.addEventListener("mousedown",b=>{1===b.button&&b.preventDefault()}),window.addEventListener("mousewheel",c,{passive:!1}),window.addEventListener("wheel",c,{passive:!1}),window.addEventListener("resize",()=>this.g_aiW()),this.g_aCk=new Set,this.g_aCl=new WeakSet,this.g_awi=!1}g_aCf(){return document.addEventListener("visibilitychange",()=>this.g_alN(document.hidden)),document.addEventListener("pause",()=>this.g_alN(!0)),document.addEventListener("resume",()=>this.g_alN(!1)),{isSuspended:!!(document.hidden||f)}}g_aAh(){window.addEventListener("focus",()=>this.g_aCm("window-focus")),window.addEventListener("blur",()=>{this.g_aCm("window-blur",{parentHasFocus:b()}),this.g_aCj=0}),window.addEventListener("fullscreenchange",()=>this.g_aiX()),window.addEventListener("webkitfullscreenchange",()=>this.g_aiX()),window.addEventListener("mozfullscreenchange",()=>this.g_aiX()),window.addEventListener("fullscreenerror",b=>this.g_aiY(b)),window.addEventListener("webkitfullscreenerror",b=>this.g_aiY(b)),window.addEventListener("mozfullscreenerror",b=>this.g_aiY(b)),window.addEventListener("keydown",b=>this.g_aCn("keydown",b)),window.addEventListener("keyup",b=>this.g_aCn("keyup",b)),window.addEventListener("dblclick",b=>this.g_aCo("dblclick",b,e)),window.addEventListener("wheel",b=>this.g_aCp("wheel",b)),"undefined"==typeof PointerEvent?(window.addEventListener("mousedown",b=>this.g_aCq("pointerdown",b)),window.addEventListener("mousemove",b=>this.g_aCq("pointermove",b)),window.addEventListener("mouseup",b=>this.g_aCq("pointerup",b)),window.addEventListener("touchstart",b=>this.g_aCr("pointerdown",b)),window.addEventListener("touchmove",b=>this.g_aCr("pointermove",b)),window.addEventListener("touchend",b=>this.g_aCr("pointerup",b)),window.addEventListener("touchcancel",b=>this.g_aCr("pointercancel",b))):(window.addEventListener("pointerdown",b=>this.g_aCs("pointerdown",b)),window.addEventListener("pointermove",b=>this.g_aCs("pointermove",b)),window.addEventListener("pointerup",b=>this.g_aCs("pointerup",b)),window.addEventListener("pointercancel",b=>this.g_aCs("pointercancel",b))),window.addEventListener("mousedown",b=>this.g_aCo("mousedown",b,d)),window.addEventListener("mousemove",b=>this.g_aCo("mousemove",b,d)),window.addEventListener("mouseup",b=>this.g_aCo("mouseup",b,d));const c=()=>this.g_aBO();window.addEventListener("pointerup",c,!0),window.addEventListener("touchend",c,!0),window.addEventListener("click",c,!0),window.addEventListener("keydown",c,!0),window.addEventListener("gamepadconnected",c,!0)}g_aCh(){this.g_aBY||(this.g_aBY=!0,window.addEventListener("deviceorientation",b=>this.g_atL(b)))}g_aCi(){this.g_aBZ||(this.g_aBZ=!0,window.addEventListener("devicemotion",b=>this.g_atM(b)))}g_aCm(c,a){this.g_aAi(c,a||null,{dispatchRuntimeEvent:!0})}g_aiW(){const c=window.innerWidth,a=window.innerHeight;this.g_aCm("window-resize",{innerWidth:c,innerHeight:a,devicePixelRatio:window.devicePixelRatio}),this.g_alR.g_amg()&&(-1!==this.g_aBW&&clearTimeout(this.g_aBW),this.g_aCt(c,a,0))}g_aCu(d,a,b){-1!==this.g_aBW&&clearTimeout(this.g_aBW),this.g_aBW=setTimeout(()=>this.g_aCt(d,a,b),48)}g_aCt(f,a,b){const c=window.innerWidth,d=window.innerHeight;this.g_aBW=-1,c!=f||d!=a?this.g_aCm("window-resize",{innerWidth:c,innerHeight:d,devicePixelRatio:window.devicePixelRatio}):10>b&&this.g_aCu(c,d,b+1)}g_aCc(b){this.g_aBX=b.targetOrientation}g_aCv(){const c=this.g_aBX;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(c).catch(b=>console.warn("[Construct 3] Failed to lock orientation: ",b));else try{let a=!1;screen.lockOrientation?a=screen.lockOrientation(c):screen.webkitLockOrientation?a=screen.webkitLockOrientation(c):screen.mozLockOrientation?a=screen.mozLockOrientation(c):screen.msLockOrientation&&(a=screen.msLockOrientation(c)),a||console.warn("[Construct 3] Failed to lock orientation")}catch(b){console.warn("[Construct 3] Failed to lock orientation: ",b)}}g_aiX(){const b=g_aAN.g_ajh();b&&"any"!==this.g_aBX&&this.g_aCv(),this.g_aAi("fullscreenchange",{isFullscreen:b,innerWidth:window.innerWidth,innerHeight:window.innerHeight})}g_aiY(b){console.warn("[Construct 3] Fullscreen request failed: ",b),this.g_aAi("fullscreenerror",{isFullscreen:g_aAN.g_ajh(),innerWidth:window.innerWidth,innerHeight:window.innerHeight})}g_alN(b){b?this.g_alR.g_aBe():this.g_alR.g_aBL(),this.g_aAi("visibilitychange",{hidden:b})}g_aCn(c,a){this.g_aAm(c,{code:a.code,key:a.key,which:a.which,repeat:a.repeat,altKey:a.altKey,ctrlKey:a.ctrlKey,metaKey:a.metaKey,shiftKey:a.shiftKey,timeStamp:a.timeStamp},e)}g_aCp(c,a){this.g_aAi(c,{clientX:a.clientX,clientY:a.clientY,deltaX:a.deltaX,deltaY:a.deltaY,deltaZ:a.deltaZ,deltaMode:a.deltaMode,timeStamp:a.timeStamp},e)}g_aCo(a,b,c){k(b)||("mousedown"===a&&window!==window.top&&window.focus(),this.g_aAm(a,{button:b.button,buttons:b.buttons,clientX:b.clientX,clientY:b.clientY,timeStamp:b.timeStamp},c))}g_aCq(a,f){if(!k(f)){"pointerdown"===a&&window!==window.top&&window.focus();const b=this.g_aCj;"pointerdown"===a&&0!==b?a="pointermove":"pointerup"==a&&0!==f.buttons&&(a="pointermove"),this.g_aAm(a,{pointerId:1,pointerType:"mouse",button:f.button,buttons:f.buttons,lastButtons:b,clientX:f.clientX,clientY:f.clientY,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,timeStamp:f.timeStamp},e),this.g_aCj=f.buttons}}g_aCs(d,a){"pointerdown"===d&&window!==window.top&&window.focus();let b=0;"mouse"===a.pointerType&&(b=this.g_aCj),this.g_aAm(d,{pointerId:a.pointerId,pointerType:a.pointerType,button:a.button,buttons:a.buttons,lastButtons:b,clientX:a.clientX,clientY:a.clientY,width:a.width||0,height:a.height||0,pressure:a.pressure||0,tangentialPressure:a.tangentialPressure||0,tiltX:a.tiltX||0,tiltY:a.tiltY||0,twist:a.twist||0,timeStamp:a.timeStamp},e),"mouse"===a.pointerType&&(this.g_aCj=a.buttons)}g_aCr(f,a){"pointerdown"===f&&window!==window.top&&window.focus();for(let b=0,c=a.changedTouches.length;b<c;++b){const c=a.changedTouches[b];this.g_aAm(f,{pointerId:c.identifier,pointerType:"touch",button:0,buttons:0,lastButtons:0,clientX:c.clientX,clientY:c.clientY,width:2*(c.radiusX||c.webkitRadiusX||0),height:2*(c.radiusY||c.webkitRadiusY||0),pressure:c.force||c.webkitForce||0,tangentialPressure:0,tiltX:0,tiltY:0,twist:c.rotationAngle||0,timeStamp:a.timeStamp},e)}}g_atL(b){this.g_aCm("deviceorientation",{alpha:b.alpha||0,beta:b.beta||0,gamma:b.gamma||0,timeStamp:b.timeStamp})}g_atM(j){let a=0,k=0,l=0,m=0,n=0,o=0;const p=j.accelerationIncludingGravity;p&&(a=p.x||0,k=p.y||0,l=p.z||0);const h=j.acceleration;h&&(m=h.x||0,n=h.y||0,o=h.z||0),this.g_aCm("devicemotion",{acceleration:{x:m,y:n,z:o},accelerationWithG:{x:a,y:k,z:l},timeStamp:j.timeStamp})}g_aB$(d){const a=this.g_aAs(),b=a.g_aBf();b.style.width=d.styleWidth+"px",b.style.height=d.styleHeight+"px",b.style.marginLeft=d.marginLeft+"px",b.style.marginTop=d.marginTop+"px",a.g_aBn(),this.g_aBV&&(b.style.display="",this.g_aBV=!1)}g_aCa(f){const b=f.url,c=f.filename,d=document.createElement("a"),e=document.body;d.textContent=c,d.href=b,d.download=c,e.appendChild(d),d.click(),e.removeChild(d)}async g_aCb(c){const a=c.blob,b=c.width,d=c.height,e=await l(a),f=await self.C3_RasterSvgImage(e,b,d);return await createImageBitmap(f)}g_aBO(){const c=[...this.g_aCk];if(this.g_aCk.clear(),!this.g_awi)for(const d of c){const b=d.play();b&&b.catch(()=>{this.g_aCl.has(d)||this.g_aCk.add(d)})}}g_aBM(c){if("function"!=typeof c.play)throw new Error("missing play function");this.g_aCl.delete(c);let a;try{a=c.play()}catch(a){return void this.g_aCk.add(c)}a&&a.catch(()=>{this.g_aCl.has(c)||this.g_aCk.add(c)})}g_aBN(b){this.g_aCk.delete(b),this.g_aCl.add(b)}g_axc(b){this.g_awi=!!b}g_aCg(d){const a=d.show;if(!a)return void(this.g_aB_&&(this.g_aB_.style.display="none"));this.g_aB_||(this.g_aB_=document.createElement("div"),this.g_aB_.id="inspectOutline",document.body.appendChild(this.g_aB_));const b=this.g_aB_;b.style.display="",b.style.left=d.left-1+"px",b.style.top=d.top-1+"px",b.style.width=d.width+2+"px",b.style.height=d.height+2+"px",b.textContent=d.name}g_aCd(){window.C3_RegisterSW&&window.C3_RegisterSW()}g_aCe(b){window.c3_postToMessagePort&&(b.from="runtime",window.c3_postToMessagePort(b))}g_QP(c,a){return this.g_aAk("js-invoke-function",{name:c,params:a})}};g_aAN.g_aBJ(g)}{const c=document.currentScript.src;self.g_aBm=class{constructor(a){this.g_aCw=a,this.g_ajX=c?c.substr(0,c.lastIndexOf("/")+1):a.g_fg(),this.g_anV=Math.min(navigator.hardwareConcurrency||2,16),this.g_aCx=null,this.g_aCy=[],this.g_anT=null,this.g_aCz=null}async g_ae_(){if(this.g_aCA)throw new Error("already initialised");this.g_aCA=!0;const c=this.g_aCw.g_aBr("dispatchworker.js");this.g_aCx=await this.g_aCw.g_aBs(c,this.g_ajX,{name:"DispatchWorker"});const a=new MessageChannel;this.g_anT=a.port1,this.g_aCx.postMessage({type:"_init","in-port":a.port2},[a.port2]),this.g_aCz=await this.g_aBE()}async g_aBE(){const f=this.g_aCy.length,a=this.g_aCw.g_aBr("jobworker.js"),b=await this.g_aCw.g_aBs(a,this.g_ajX,{name:"JobWorker"+f}),c=new MessageChannel,d=new MessageChannel;return this.g_aCx.postMessage({type:"_addJobWorker",port:c.port1},[c.port1]),b.postMessage({type:"init",number:f,"dispatch-port":c.port2,"output-port":d.port2},[c.port2,d.port2]),this.g_aCy.push(b),d.port1}g_aBw(){return{inputPort:this.g_anT,outputPort:this.g_aCz,maxNumWorkers:this.g_anV}}g_aBA(){return[this.g_anT,this.g_aCz]}}}if("use strict",window.C3_IsSupported){"undefined"!=typeof OffscreenCanvas;window.c3_runtimeInterface=new g_aAN({g_aAP:!1,g_aBx:"workermain.js",g_aBi:["scripts/c3runtime.js"],g_aAS:"scripts/",g_aBy:[],g_aA$:"html5"})}{function g(b){b.stopPropagation()}const a=class extends g_aAw{constructor(b){super(b,"button")}g_$T(a,b){const c=document.createElement("input"),d=b.isCheckbox;let e=c;if(d){c.type="checkbox";const b=document.createElement("label");b.appendChild(c),b.appendChild(document.createTextNode("")),b.style.fontFamily="sans-serif",b.style.userSelect="none",b.style.webkitUserSelect="none",b.style.display="inline-block",b.style.color="black",e=b}else c.type="button";return e.style.position="absolute",e.addEventListener("touchstart",g),e.addEventListener("touchmove",g),e.addEventListener("touchend",g),e.addEventListener("mousedown",g),e.addEventListener("mouseup",g),e.addEventListener("keydown",g),e.addEventListener("keyup",g),c.addEventListener("click",()=>this.g_aAJ("click",a,{isChecked:c.checked})),c.id=b.id,this.g_aAK(e,b),e}g_aGl(b){return"input"===b.tagName.toLowerCase()?b:b.firstChild}g_aAK(d,a){const b=this.g_aGl(d);b.checked=a.isChecked,b.disabled=!a.isEnabled,d.title=a.title,d===b?b.value=a.text:d.lastChild.textContent=a.text}};g_aAN.g_aBJ(a)}
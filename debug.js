// ===================================================
// IMPORTANT: only for development
// Total.js - framework for Node.js
// https://www.totaljs.com
// ===================================================

var fs = require("fs");
var options = {};

/*options.ip = '0.0.0.0';
options.port = parseInt(process.argv[2]);*/
// options.config = { name: 'Total.js' };
// options.https = { key: fs.readFileSync('keys/agent2-key.pem'), cert: fs.readFileSync('keys/agent2-cert.pem')};
// options.sleep = 3000;
// options.debugger = 40894;

	
// require('total.js').http('debug');
function debug(){require("total.js");var port=parseInt(process.argv[process.argv.length-1]);return isNaN(port)||(options||(options={}),options.port=port),port>0&&!options.port&&(options.port=port||8e3),options.https?F.https("debug",options):(F.http("debug",options),void(first?F.emit("debug-start"):F.emit("debug-restart")))}function app(){function onFilter(path,isDirectory){return!isDirectory&&REG_THEMES.test(path)?REG_THEMES_INDEX.test(path):!!isDirectory||REG_EXTENSION.test(path)}function onIncrease(clear){clear&&(clearTimeout(pidIncrease),speed=TIME),pidIncrease=setTimeout(function(){speed+=TIME,speed>4e3&&(speed=4e3),onIncrease()},12e4)}function onComplete(f){fs.readdir(directory,function(err,arr){for(var length=arr.length,i=0;i<length;i++){var name=arr[i];"debug.js"!==name&&REG_FILES.test(name)&&f.push(name)}length=f.length;for(var i=0;i<length;i++){var name=f[i];void 0===files[name]&&(files[name]=isLoaded?0:null)}refresh()})}function refresh(){for(var filenames=Object.keys(files),length=filenames.length,i=0;i<length;i++){var filename=filenames[i];!function(filename){async.await(function(next){fs.stat(filename,function(err,stat){var stamp="--- # --- [ "+(new Date).format("yyyy-MM-dd HH:mm:ss")+" ] ";if(err)delete files[filename],changes.push(stamp.replace("#","REM")+prefix+filename.replace(directory,"")),force=!0;else{var ticks=stat.mtime.getTime();null!=files[filename]&&files[filename]!==ticks&&(changes.push(stamp.replace("#",0===files[filename]?"ADD":"UPD")+prefix+filename.replace(directory,"")),force=!0),files[filename]=ticks}next()})})}(filename)}async.complete(function(){if(isLoaded=!0,setTimeout(refresh_directory,speed),onIncrease(),1===status&&force){onIncrease(!0),restart();for(var length=changes.length,i=0;i<length;i++)console.log(changes[i]);changes=[],force=!1}})}function refresh_directory(){utils.ls(directories,onComplete,onFilter)}function restart(){if(null!==app){try{isSkip=!0,process.kill(app.pid)}catch(err){}app=null}var arr=process.argv,port=arr.pop();if(process.execArgv.indexOf("--debug")!==-1){var key="--debug="+(options.debugger||40894);process.execArgv.indexOf(key)===-1&&process.execArgv.push(key)}first?first=!1:arr.push("restart"),arr.push("debugging"),arr.push(port),app=fork(path.join(directory,"debug.js"),arr),app.on("message",function(msg){"eaddrinuse"===msg&&process.exit(1)}),app.on("exit",function(){return isSkip===!1?(app=null,void process.exit()):(isSkip=!1,void(255===status&&(app=null)))}),0===status&&app.send("debugging"),status=1}function end(){if(!arguments.callee.isEnd){if(arguments.callee.isEnd=!0,fs.unlink(pid,noop),null===app)return void process.exit(0);isSkip=!0,process.kill(app.pid),app=null,process.exit(0)}}function noop(){}const fork=require("child_process").fork,utils=require("total.js/utils"),directories=[directory+"/controllers",directory+"/definitions",directory+"/isomorphic",directory+"/modules",directory+"/resources",directory+"/models",directory+"/source",directory+"/workers",directory+"/packages",directory+"/themes"],async=new utils.Async,prefix="---------------------------------> ";var pidIncrease,files={},force=!1,changes=[],app=null,status=0,pid="",pidInterval=null,isLoaded=!1,isSkip=!1,speed=TIME;process.on("SIGTERM",end),process.on("SIGINT",end),process.on("exit",end),process.pid>0&&(console.log(prefix+"PID: "+process.pid+" (v"+VERSION+")"),pid=path.join(directory,"debug.pid"),fs.writeFileSync(pid,process.pid),pidInterval=setInterval(function(){fs.exists(pid,function(e){e||(fs.unlink(pid,noop),null!==app&&(isSkip=!0,process.kill(app.pid)),process.exit(0))})},2e3)),restart(),refresh_directory()}function run(){if(isDebugging)return void debug();var filename=path.join(directory,"debug.pid");return fs.existsSync(filename)?(fs.unlinkSync(filename),void setTimeout(function(){app()},3e3)):void app()}const isDebugging=process.argv.indexOf("debugging")!==-1,directory=process.cwd(),path=require("path"),VERSION="6.0",TIME=2e3,REG_FILES=/config\-debug|config\-release|config|versions|sitemap|dependencies|\.js|\.resource/i,REG_THEMES=/\/themes\//i,REG_THEMES_INDEX=/themes(\/|\\)?[a-z0-9_.-]+(\/|\\)?index\.js/i,REG_EXTENSION=/\.(js|resource|package)/i;var first=process.argv.indexOf("restart")===-1;process.on("uncaughtException",function(e){e.toString().indexOf("ESRCH")==-1&&console.log(e)}),run();
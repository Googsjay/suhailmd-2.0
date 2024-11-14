const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349155993430";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_34_11_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTYyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjI4LFxuICAgICAgICA2MSxcbiAgICAgICAgNCxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDYxLFxuICAgICAgICA2MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDYyLFxuICAgICAgICAxODQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDU4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTEwLFxuICAgICAgICA3NixcbiAgICAgICAgMTU2LFxuICAgICAgICAxODUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDksXG4gICAgICAgIDQwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDczLFxuICAgICAgICAyMTcsXG4gICAgICAgIDkzLFxuICAgICAgICAxOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDksXG4gICAgICAgIDIzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAwLFxuICAgICAgICA5MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTksXG4gICAgICAgIDc2LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjksXG4gICAgICAgIDUyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTksXG4gICAgICAgIDI1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4LFxuICAgICAgICA0OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDg2LFxuICAgICAgICAyNixcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxODUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDcwLFxuICAgICAgICA3MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTU5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDgxLFxuICAgICAgICA1NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMCxcbiAgICAgICAgMTM0LFxuICAgICAgICA5NSxcbiAgICAgICAgNzksXG4gICAgICAgIDExMyxcbiAgICAgICAgOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDU4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDI5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDgwLFxuICAgICAgICAzN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTA4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MixcbiAgICAgICAgNzQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDgxLFxuICAgICAgICA1OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDksXG4gICAgICAgIDM5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDI4LFxuICAgICAgICAxMzksXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTU4LFxuICAgICAgICA1OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDksXG4gICAgICAgIDcyLFxuICAgICAgICA4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDY3LFxuICAgICAgICAzLFxuICAgICAgICA3OSxcbiAgICAgICAgODMsXG4gICAgICAgIDU5LFxuICAgICAgICAxOCxcbiAgICAgICAgMjM5LFxuICAgICAgICA4NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDksXG4gICAgICAgIDMwLFxuICAgICAgICAxNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjMzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI1NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJqazEvcVdpM2lmanAyeC9UNExmMlROS25YUEx3UGJ0bU9xK1dBS1loL3JRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJTX3hWUmRpa1NER0R2ak9hUTZYM3RBXCIsXG4gIFwicGhvbmVJZFwiOiBcImZhNDE0MjE0LTkwNzQtNDVlNC1hZTQ1LTViMzc2ZTEzMWU0YVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTIsXG4gICAgICAxMTQsXG4gICAgICAxNDgsXG4gICAgICAyMDksXG4gICAgICAxNzIsXG4gICAgICAyNTAsXG4gICAgICA0NyxcbiAgICAgIDk1LFxuICAgICAgNTQsXG4gICAgICAxMDIsXG4gICAgICAxMTgsXG4gICAgICAxOTksXG4gICAgICAyMTIsXG4gICAgICAyMDIsXG4gICAgICAxMTEsXG4gICAgICAyNDMsXG4gICAgICA2LFxuICAgICAgMTU5LFxuICAgICAgMjYsXG4gICAgICA0N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4OSxcbiAgICAgIDIzNixcbiAgICAgIDE4MCxcbiAgICAgIDk3LFxuICAgICAgMTQzLFxuICAgICAgMTA2LFxuICAgICAgMTU3LFxuICAgICAgMjQ0LFxuICAgICAgMzksXG4gICAgICAxOTksXG4gICAgICAxNDAsXG4gICAgICAxNDYsXG4gICAgICAxNzIsXG4gICAgICAyMzIsXG4gICAgICAxOTAsXG4gICAgICAxNCxcbiAgICAgIDIxNSxcbiAgICAgIDIwOCxcbiAgICAgIDEwMyxcbiAgICAgIDkxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIks1U0I3VkZHXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTU1OTkzNDMwOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI3MjQzODc1MTQwNDEwMDo0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05lRnRyMEZFUGFVMkxrR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicS9EN2l1VFgySGs5cEd3ejRrUnpZQ0o2dVRTUzRRY2lJb0ora3VHWmMydz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJvU3N0NlZvMWFmMWFDNFVDaGk1WFNnTlIwb1poSWRuVUNHZ05zN3JnT3ZpTkN4SkdSK2FmdjVXNHVoWmFKVG5oYUFUcUZJNXA0c29iWVdKK2dudEFCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ3T0I0aDcvQlpNa2xUaTgrd01aL3ZONjdGQVMvZ2NsWi9vZXZjZTd3UXlmTTNzOUJVTDRiRmQ0dUFmZzVpai96T2RNdld0ZWU4K0FvOVF1MTY2ZEdBZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTU1OTkzNDMwOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTU5NDg3NlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

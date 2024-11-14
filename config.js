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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_23_13_11_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTc3LFxuICAgICAgICA3OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAzMixcbiAgICAgICAgMTcxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTMxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDk2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTksXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTMzLFxuICAgICAgICA1NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDMzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAzNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDQ4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDk4LFxuICAgICAgICAyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDY2LFxuICAgICAgICAzMixcbiAgICAgICAgMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyLFxuICAgICAgICA3NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTYyLFxuICAgICAgICA3OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDksXG4gICAgICAgIDM2LFxuICAgICAgICAzNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDI2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1NixcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTE4LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTIsXG4gICAgICAgIDE4MixcbiAgICAgICAgOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjA2LFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA4MCxcbiAgICAgICAgMjM0LFxuICAgICAgICA4MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDc0LFxuICAgICAgICA5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODQsXG4gICAgICAgIDQzLFxuICAgICAgICAyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDU2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNjksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTI4LFxuICAgICAgICA5MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDksXG4gICAgICAgIDEzMixcbiAgICAgICAgMjE4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDU1LFxuICAgICAgICA4MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDksXG4gICAgICAgIDEwLFxuICAgICAgICA0NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjAyLFxuICAgICAgICA4MixcbiAgICAgICAgNDYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjI5LFxuICAgICAgICAxODgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTk3LFxuICAgICAgICA1MixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDksXG4gICAgICAgIDI0NixcbiAgICAgICAgMjUwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDI3LFxuICAgICAgICAxLFxuICAgICAgICA3LFxuICAgICAgICA1NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwNixcbiAgICAgICAgNTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDYyLFxuICAgICAgICA1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTksXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTg3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm44LzhMcEJoS3pQMFFLV0FqMjFMNlZlbnZ0WnIwaTM2UGc4MTBBNUt5aHM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIno1M3FYM0kxUm1xTWxOc0I2SnFNR1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjA4M2NkNWMtOTBjYi00NmM3LTlkYjQtOTJhMjZjOGU3N2VkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5OSxcbiAgICAgIDIyMCxcbiAgICAgIDE2MyxcbiAgICAgIDE2MixcbiAgICAgIDY0LFxuICAgICAgMjI1LFxuICAgICAgMTc1LFxuICAgICAgMjQwLFxuICAgICAgMjE2LFxuICAgICAgMjE1LFxuICAgICAgNzIsXG4gICAgICAzMixcbiAgICAgIDYwLFxuICAgICAgMTg4LFxuICAgICAgMjYsXG4gICAgICAyMyxcbiAgICAgIDI1NSxcbiAgICAgIDEyLFxuICAgICAgMjUwLFxuICAgICAgMTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA5LFxuICAgICAgMzUsXG4gICAgICAyMTYsXG4gICAgICA5MCxcbiAgICAgIDg4LFxuICAgICAgMTM0LFxuICAgICAgMTkyLFxuICAgICAgMjMsXG4gICAgICAxMTQsXG4gICAgICAxMjEsXG4gICAgICAxMDAsXG4gICAgICAxNDMsXG4gICAgICA0MCxcbiAgICAgIDEyMSxcbiAgICAgIDE3LFxuICAgICAgMTQ5LFxuICAgICAgMTIsXG4gICAgICAxNjAsXG4gICAgICAxMTYsXG4gICAgICAxNTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSEg4OEVXUzRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxNTU5OTM0MzA6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjcyNDM4NzUxNDA0MTAwOjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTmlGdHIwRkVQYUgycmtHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJxL0Q3aXVUWDJIazlwR3d6NGtSellDSjZ1VFNTNFFjaUlvSitrdUdaYzJ3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImEyRGJXUjlDa3VaTGJabVBkWFVzbUlrM1FPZzRhMmt1YjFJQjhkd3ZCMktJa2hGYjdpd3Z5bGoxKzcvWjNYenFudzlWKzVkWEVYUEcvalpETFBCNURnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjlDaTBBakVla2NQR0x5RkZGWlFPK0ZvWUpydU55cVF6TTNFSmh1eS95L2hUL21YZndjZEhORWRrWDlzWFZoTmFyQmJTaE9TRlB0Q2VPNjZLZWYxekRnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxNTU5OTM0MzA6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEwOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxNjI1OTc4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTEptXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMSm0uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJUd0E0SDdkeFBGTndGZHZFd21zZ3lmdHRsN3h2YUxJNmdIS3Rucko1VzYwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0NzA5ODkwMTUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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

const Aoijs = require('aoi.js');
const bot = new Aoijs.Bot({
	token: "NzYxOTI2MjA1MzA0OTk1ODgx.X3htEw.39vpSomryunueKFyVriEJZyyPbQ",
	prefix: ['$getServerVar[prefix]'],
  autoUpdate: false
});

bot.onMessage();
bot.loadCommands('commands');
bot.loadCommands('music');

bot.variables({
prefix: ",",
y: "<:a_prem_check:878910824201224212>",
n: "<:a_prem_cross:878911018410065921>",
a: "<:a_arrow:855301271636672522>",
rch: "",
rmsg: "Congrats {user.tag}🎉, you leveled up to level {level}",
lvl: "1",
exp: "0",
rexp: "40",
rsystem: "0"
})

bot.status({
  text: "under development!",
  type: "WATCHING",
  time: 12,
  status: "dnd",
})



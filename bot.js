const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar= require('./ayarlar.json')
const seriler= require('./seriler.json')


token= ayarlar.token;


alma=seriler.alma;
assa=seriler.assa;
baki=seriler.baki;
clas=seriler.clas;
col=seriler.col;
demon=seriler.demon;
don=seriler.don;
eden=seriler.eden;
ex=seriler.ex;
gai=seriler.gai;
Handy=seriler.Handy;
gal=seriler.gal;
hiru=seriler.hiru;
hyulla=seriler.hyulla;
ib=seriler.ib;
icm=seriler.icm;
queen=seriler.queen;
kurom=seriler.kurom;
konoy=seriler.konoy;
oni=seriler.oni;
limbless=seriler.limbless;
mogal=seriler.mogal;
murenase=seriler.murenase;
nejimaki=seriler.nejimaki;
nidome=seriler.nidome;
orega=seriler.orega;
saikyo=seriler.saikyo;
tensei=seriler.tensei;
slimem=seriler.slimem;
yanslime=seriler.yanslime;
tengod=seriler.tengod;
fiance=seriler.fiance;
reason=seriler.reason;
putin=seriler.putin;
yankee=seriler.yankee;
yuusha=seriler.yuusha;
wolf=seriler.wolf;
slimen=seriler.slimen;
gb=seriler.gb;
grimgar=seriler.grimgar;
ngnl=seriler.ngnl;
supergene=seriler.supergene;
sono=seriler.sono;
age=seriler.age;
sevens=seriler.sevens;
kuron=seriler.kuron;
extra=seriler.extra;
mob=seriler.mob;
shinigami=seriler.shinigami;
ae=seriler.ae;
ef=seriler.ef;
wh= seriler.wh;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('ArazNovel Serilerinin Yolunu', { type: 'WATCHING' });
});

client.on('message', msg => {

	//Manga başı
	//Almadianos
	if (msg.content.includes('Almadianos'))
	 {
    msg.channel.send(alma);
	 }
	//Almadianos
  
  //Arrogant CEO
  	 if (msg.content.includes('Arrogant CEO: Wife Hunter'))
  	 {
      msg.channel.send(wh);
  	 }
  	//Arrogant CEO
    
    //Arrogant CEO
    	 if (msg.content.includes('Baki the'))
    	 {
        msg.channel.send(baki);
    	 }
    	//Arrogant CEO
  




});

client.login(process.env.token);

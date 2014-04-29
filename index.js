var twitter = require('ntwitter');

var twit = new twitter({
  consumer_key: 'ZfTzQbUBsuoBcFAQX2vk7YNPB',
  consumer_secret: 'iceexRDB7v5TdP6XDwzPxSCqLEFHhuvcgyQONooXmyMcW3qgjU',
  access_token_key: '468222556-KFODXrGrAbWes14ZgelcPCIGAvm55rTQJ94SYfnE',
  access_token_secret: '5pZFTcGYOY1cxEo0eh5rCMeTjk29JC7iH6ihewarQ6aj4'
});

var Debug = {
    log: function (msg) {
        console.log(new Date().toJSON() +": "+ msg);
    }
};

var params = "timstadium,timcup,fiorentinanapoli,acf_fiorentina,forzaviola,fiorentina,acffiorentina,forzafiorentina,forzanapoli,forzanapolisempre,sscnapoli,sinprisaperosinpausa,montella,neto,neto_murara,lupatelli,rosati,pasqual,manuelpasqual,diakitè,savic,tomovic,gonzalorodriguez,gonzalo_02,compper,roncaglia,bakic,mbakic8,borjavalero,bvalero20,wolski,rafalwolski92,vargas,joaquin,aquilani,anderson,ilicic,matifernandez,pizzarro,ambrosini,cuadrado,rebic,matri,ale_matri,giusepperossi,giusepperossi22,mariogomez,matos,benitez,rafabenitezweb,reina,preina25,rafael,rafaelcabral90,albiol,r_albiol,colombo,britos,henrique,henriqueabuss,fernandez,pajarofernandez,reveillere,reveillere_off,uvini,ghoulam,ghoulamfaouzi,dzemaili,hamsik,inler,gokhaninler,behrami,valonbera,christianmaggio,mesto,radosevic,zuniga,camilozuniga18,callejon,j21calleti,insigne,mertens,dries_mertens14,higuain,g_higuain,pandev,zapata,jorginho,coppaitalia";
var array = params.split(",");

var count = 0;

twit.stream('statuses/filter', {track:array}, function(stream) {
  stream.on('data', function (data) {
  	count++;
    Debug.log('.'+' '+count);
  });
});
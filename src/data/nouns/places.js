'use strict';
const fns = require('../fns');

//uncompressed country names
let countries = [
  'usa',
  'u.s.a.',
  'ussr',
  'brazil',
  'bangladesh',
  'mexico',
  'vietnam',
  'egypt',
  'germany',
  'turkey',
  'france',
  'united kingdom',
  'italy',
  'kenya',
  'iraq',
  'morocco',
  'peru',
  'yemen',
  'mozambique',
  'sri lanka',
  'burkina faso',
  'niger',
  'netherlands',
  'chile',
  'malawi',
  'ecuador',
  'côte d\'ivoire',
  'mali',
  'zimbabwe',
  // 'chad',
  'belgium',
  'cuba',
  'greece',
  'haiti',
  'burundi',
  'hungary',
  'sweden',
  'honduras',
  'israel',
  'laos',
  'el salvador',
  'libya',
  'nicaragua',
  'denmark',
  'congo-brazzaville',
  'kuwait',
  'moldova',
  'panama',
  'jamaica',
  'lesotho',
  'guinea-bissau',
  'timor-leste',
  'djibouti',
  'fiji',
  'comoros',
  'solomon islands',
  'luxembourg',
  'suriname',
  'cape verde',
  'malta',
  'bahamas'
];
let compressed_countries = {
  istan: 'pak,uzbek,afghan,tajik,turkmen',
  ublic: 'czech rep,dominican rep,central african rep',
  uinea: 'g,papua new g,equatorial g',
  land: 'thai,po,switzer,fin,republic of ire,new zea,swazi,ice',
  ania: 'tanz,rom,maurit,lithu,alb',
  rica: 'ame,united states of ame,south af,costa ',
  mbia: 'colo,za,ga',
  eria: 'nig,alg,lib',
  nia: 'arme,macedo,slove,esto',
  sia: 'indone,rus,malay,tuni',
  ina: 'ch,argent,bosnia and herzegov',
  tan: 'kazakhs,kyrgyzs,bhu',
  ana: 'gh,botsw,guy',
  bia: 'saudi ara,ser,nami',
  lia: 'austra,soma,mongo',
  rea: 'south ko,north ko,erit',
  dan: 'su,south su,jor',
  ria: 'sy,aust,bulga',
  ia: 'ind,ethiop,cambod,boliv,slovak,georg,croat,latv',
  an: 'jap,ir,taiw,azerbaij,om',
  da: 'ugan,cana,rwan',
  us: 'belar,mauriti,cypr',
  al: 'nep,seneg,portug',
  in: 'spa,ben,bahra',
  go: 'dr con,to,trinidad-toba',
  la: 'venezue,ango,guatema',
  es: 'united stat,philippin,united arab emirat',
  on: 'camero,leban,gab',
  ar: 'myanm,madagasc,qat',
  ay: 'paragu,norw,urugu',
  ne: 'ukrai,sierra leo,palesti'
};
countries = fns.uncompress_suffixes(countries, compressed_countries);

/////uncomressed cities
let cities = [
  'guangzhou',
  'ahmedabad',
  'phoenix',
  'jakarta',
  'curitiba',
  'moscow',
  'tokyo',
  'nagoya',
  'kobe',
  'mexico',
  'cebu',
  'ho chi minh',
  'hanoi',
  'giza',
  'frankfurt',
  'stuttgart',
  'i̇zmir',
  'paris',
  'toulouse',
  'rome',
  'palermo',
  'genoa',
  'cape town',
  'port elizabeth',
  'bogotá',
  'medellín',
  'seville',
  'zaragoza',
  'kiev',
  'odessa',
  'rosario',
  'la plata',
  'warsaw',
  'kraków',
  'łódź',
  'wrocław',
  'poznań',
  'calgary',
  'ottawa',
  'montreal',
  'winnipeg',
  'sydney',
  'perth',
  'homs',
  'iași',
  'cluj-napoca',
  'almaty',
  'the hague',
  'utrecht',
  'phnom penh',
  'antwerp',
  'ghent',
  'brussels',
  'tunis',
  'athens',
  'thessaloniki',
  'prague',
  'brno',
  'miskolc',
  'stockholm',
  'västerås',
  'tegucigalpa',
  'graz',
  'innsbruck',
  'abu dhabi',
  'haifa',
  'ashdod',
  'dushanbe',
  'niš',
  'aqaba',
  'aalborg',
  'helsinki',
  'espoo',
  'vantaa',
  'turku',
  'košice',
  'ashgabat',
  'oslo',
  'trondheim',
  'auckland',
  'tbilisi',
  'zagreb',
  'montevideo',
  'klaipėda',
  'doha',
  'skopje',
  'riga',
  'luxembourg',
  'reykjavik',
  'kingston',
];

let suffix_compressed_cities = {
  burg: 'saint peters,yekaterin,ham,til,gothen,salz',
  ton: 'hous,edmon,welling,hamil',
  ion: 'hauts-bassins reg,nord reg,herakl',
  ana: 'hav,tir,ljublj',
  ara: 'guadalaj,ank,timișo',
  an: 'tehr,mil,durb,bus,tain,abidj,amm,yerev',
  ia: 'philadelph,brasíl,alexandr,pretor,valenc,sof,nicos',
  on: 'ly,lond,yang,inche,daeje,lisb',
  en: 'shenzh,eindhov,pils,copenhag,berg',
  ng: 'beiji,chittago,pyongya,kaohsiu,taichu',
  in: 'tianj,berl,tur,dubl,duned',
  es: 'los angel,nant,napl,buenos air,f',
  la: 'pueb,mani,barranquil,kampa,guatema',
  or: 'salvad,san salvad,ulan bat,marib',
  us: 'damasc,pirae,aarh,vilni',
  as: 'carac,patr,burg,kaun',
  va: 'craio,petah tik,gene,bratisla',
  ai: 'shangh,mumb,chenn,chiang m',
  ne: 'colog,melbour,brisba,lausan',
  er: 'manchest,vancouv,tangi',
  ka: 'dha,osa,banja lu',
  ro: 'rio de janei,sappo,cai',
  am: 'birmingh,amsterd,rotterd',
  ur: 'kuala lump,winterth,kópavog',
  ch: 'muni,züri,christchur',
  na: 'barcelo,vien,var',
  ma: 'yokoha,li',
  ul: 'istanb,seo,kab',
  to: 'toron,qui,por',
  iv: 'khark,lv,tel av',
  sk: 'dnipropetrov,gdań,min'
};

cities = fns.uncompress_suffixes(cities, suffix_compressed_cities);

let prefix_compressed_cities = {
  'new ': 'delhi,york,taipei',
  san: 'a\'a,tiago, josé',
  ta: 'ipei,mpere,llinn,rtu',
  ba: 'ngalore,ngkok,ku,sel',
  li: 'verpool,ège,nz,massol',
  ma: 'rseille,ndalay,drid,lmö',
  be: 'rn,lgrade,irut',
  ka: 'rachi,raj,ndy',
  da: 'egu,kar,ugavpils',
  ch: 'icago,arleroi,ișinău',
  co: 'lombo,nstanța,rk',
  bu: 'rsa,charest,dapest'
};
cities = fns.uncompress_prefixes(cities, prefix_compressed_cities);

//some of the busiest airports in the world from
//https://www.world-airport-codes.com/world-top-30-airports.html
let airports = [
  'atl',
  'pek',
  'lhr',
  'hnd',
  'ord',
  'lax',
  'cdg',
  'dfw',
  'cgk',
  'dxb',
  'fra',
  'hkg',
  'den',
  'bkk',
  'ams',
  'jfk',
  'ist',
  'sfo',
  'clt',
  'las',
  'phx',
  'iax',
  'kul',
  'mia',
  'icn',
  'muc',
  'syd',
  'fco',
  'mco',
  'bcn',
  'yyz',
  'lgw',
  'phl',
];

module.exports = {
  countries: countries,
  cities: cities,
  airports: airports
};

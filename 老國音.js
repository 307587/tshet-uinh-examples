/* 推導老國音

@author 307587

攷：
https://zh.wikiversity.org/zh-hant/%E8%80%81%E5%9C%8B%E9%9F%B3%E8%88%87%E5%BB%A3%E9%9F%BB%E5%B0%8D%E6%AF%94
https://syimyuzya.github.io/qieyun-autoderiver/

音：
https://github.com/baopaau/rime-bepemefeve/blob/main/bepemefeve.dict.yaml
 */

/** @type { 音韻地位['屬於'] } */
const is = (...x) => 音韻地位.屬於(...x);
/** @type { 音韻地位['判斷'] } */
const when = (...x) => 音韻地位.判斷(...x);

if (!音韻地位) return [
  ['標調方式', [1, '調號', '調值']],
  //['常母平聲陰聲韻聲母和船母平聲聲母', [2, 'tʂʰ', 'ʂ']], //待考
];

const 聲母規則 = () => when([
  ['幫母', [['C類', 'f'], ['', 'p']]],
  ['滂母', [['C類', 'f'], ['', 'pʰ']]],
  ['並母', [['C類', 'f'], ['平聲', 'pʰ'], ['', 'p']]],
  ['明母', [['微韻', 'v'], ['C類 非 流通攝', ''], ['', 'm']]],

  ['端母', 't'],
  ['透母', 'tʰ'],
  ['定母', [['平聲', 'tʰ'], ['', 't']]],
  ['泥孃母', 'n'],
  ['來母', 'l'],

  ['精母', 'ts'],
  ['清母', 'tsʰ'],
  ['從母', [['平聲', 'tsʰ'], ['', 'ts']]],
  ['心邪母', 's'],

  ['知莊章母', 'tʂ'],
  ['徹初昌母', 'tʂʰ'],
  ['澄崇母', [['平聲', 'tʂʰ'], ['', 'tʂ']]],
  ['常母', 'ʂ'],
  //['常母', [['平聲 陽聲韻', 'tʂʰ'], ['', 'ʂ']]], //待考
  ['生俟書船母', 'ʂ'],
  ['日母', [['止攝 開口', ''], ['', 'ɻ']]],

  ['見母', 'k'],
  ['溪母', 'kʰ'],
  ['羣母', [['平聲', 'kʰ'], ['', 'k']]],
  ['疑母', 'ŋ'],
  ['影云以母', ''],
  ['曉匣母', 'x'],
], '無聲母規則');

const 舒聲韻母規則 = () => when([
  //果攝
  ['歌韻 一等', [['合口 非 疑母', 'uo'], ['', 'o']]],
  ['歌韻 三等', [['脣音', 'o'], ['合口', 'ye'], ['', 'ie']]],

  //假攝
  ['麻韻 二等', [['合口', 'ua'], ['牙喉音', 'ia'], ['', 'a']]],
  ['麻韻 三四等', 'ie'],

  //遇攝
  ['模韻', 'u'],
  ['魚虞韻', 'y'],

  //蟹攝
  ['泰韻 合口 疑母', 'uai'],
  ['咍灰泰韻', [['開口', 'ai'], ['', 'uəi']]], //泰合韻見組uai、uəi兩者勢均
  ['佳皆夬韻', [['合口', 'uai'], ['牙喉音', 'iai'], ['', 'ai']]], //佳韻牙喉音a、ai兩者勢均
  ['廢韻', [['脣音', 'uəi'], ['開口 舌齒音', 'ai']]], //茝ㄔㄞˇ，昌開三廢上；明廢去無字，當推如合口
  ['祭廢齊韻', [['合口', 'uəi'], ['', 'i']]],

  //止攝
  ['止攝 合口', [['莊組', 'uai'], ['', 'uəi']]],
  ['止攝', [['精組', 'ɿ'], ['日母', 'ɚ'], ['', 'i']]],

  //效攝
  ['宵蕭韻 或 肴韻 牙喉音', 'iau'],
  ['豪肴韻', 'au'],

  //流攝
  ['侯韻', 'əu'],
  ['尤韻', [['脣音', 'əu'], ['', 'iəu']]],
  ['幽韻', [['脣音', 'iau'], ['', 'iəu']]],

  //咸攝
  ['鹽添韻 或 嚴咸銜韻 牙喉音', 'ian'],
  ['覃談咸銜嚴韻', 'an'],
  ['凡韻', 'yan'],

  //深攝
  ['侵韻', 'in'],

  //山攝
  ['寒刪山韻 合口', 'uan'],
  ['刪山韻 牙喉音', 'ian'],
  ['寒刪山韻', 'an'],
  ['仙先韻', [['合口', 'yan'], ['', 'ian']]],
  ['元韻', [['脣音', 'uan'], ['合口', 'yan'], ['', 'ian']]],

  //臻攝
  ['痕韻', 'ən'],
  ['魂韻', 'uən'],
  ['真臻殷韻', [['合口', 'yn'], ['', 'in']]], //臻韻莊組會推如ən，詳後
  ['文韻', 'yn'],

  //梗攝
  ['梗攝 二等', [['合口', 'uŋ'], ['', 'əŋ']]],
  ['梗攝', [['合口', 'yŋ'], ['', 'iŋ']]],

  //曾攝
  ['登韻', [['合口', 'uŋ'], ['', 'əŋ']]],
  ['蒸韻', 'iŋ'],

  //宕攝
  ['唐韻', [['合口', 'uaŋ'], ['', 'aŋ']]],
  ['陽韻', [['合口 或 幫莊組', 'uaŋ'], ['', 'iaŋ']]],

  //江攝
  ['江韻', [['牙喉音', 'iaŋ'], ['知莊組', 'uaŋ'], ['', 'aŋ']]],

  //通攝
  ['通攝', [['三等 牙喉音', 'yŋ'], ['', 'uŋ']]],
], '無韻母規則');

const 入聲韻母規則 = () => when([
  //咸攝
  ['覃談韻', [['牙喉音', 'oʔ'], ['', 'aʔ']]],
  ['咸銜韻', [['牙喉音', 'iaʔ'], ['', 'aʔ']]],
  ['嚴鹽添韻', 'ieʔ'],
  ['凡韻', [['脣音', 'uaʔ'], ['', 'yeʔ']]], //明凡入無字

  //深攝
  ['侵韻', [['莊組', 'əʔ'], ['', 'iʔ']]],

  //山攝
  ['寒韻', [['合口', 'uoʔ'], ['脣牙喉音', 'oʔ'], ['', 'aʔ']]], //來母uoʔ、yeʔ兩者勢均
  ['刪山韻', [['合口', 'uaʔ'], ['牙喉音', 'iaʔ'], ['', 'aʔ']]],
  ['仙先韻', [['合口', 'yeʔ'], ['', 'ieʔ']]],
  ['元韻', [['脣音', 'uaʔ'], ['合口', 'yeʔ'], ['', 'ieʔ']]],

  //臻攝
  ['痕韻', 'əʔ'],
  ['魂韻', [['脣音', 'oʔ'], ['', 'uʔ']]],
  ['真韻 合口', [['知莊組', 'uoʔ'], ['', 'yʔ']]], //知莊組uʔ、uoʔ兩者勢均，徹莊母多uʔ
  ['真臻殷韻', 'iʔ'], //臻韻莊組əʔ、ʅʔ勢均
  ['文韻', 'yʔ'], //見羣疑母多yeʔ

  //梗攝
  ['梗攝 二等', [['合口', 'uoʔ'], ['', 'əʔ']]],
  ['梗攝', [['合口', 'yʔ'], ['', 'iʔ']]],

  //曾攝
  ['登韻', [['合口', 'uoʔ'], ['', 'əʔ']]],
  ['蒸韻', [['合口', 'yʔ'], ['莊組', 'əʔ'], ['', 'iʔ']]],

  //宕攝
  ['唐韻', [['合口', 'uoʔ'], ['', 'oʔ']]],
  ['陽韻', [['合口', 'yoʔ'], ['幫知莊章組', 'uoʔ'], ['', 'ioʔ']]], //明陽入無字；知莊章組開口oʔ、uoʔ兩者勢均

  //江攝
  ['江韻', [['牙喉音', 'ioʔ'], ['知莊組', 'uoʔ'], ['', 'oʔ']]],

  //通攝
  ['通攝', [['三等 牙喉音', 'yʔ'], ['', 'uʔ']]],
], '無韻母規則');

const 聲調規則 = () => when([
  ['平聲', [['清音', '1'], ['濁音', '2']]],
  ['上聲', [['全濁', '4'], ['', '3']]],
  ['去聲', '4'],
  ['入聲', '5'],
], '無聲調規則');

let 聲母 = 聲母規則();
let 韻母 = is`舒聲` ? 舒聲韻母規則() : 入聲韻母規則();
let 聲調 = 聲調規則();

//顎化
if (['i', 'y'].includes(韻母[0])) 聲母 = {
  n: 'ȵ', k: 'tɕ', kʰ: 'tɕʰ', ŋ: 'ȵ', x: 'ɕ',
}[聲母] || 聲母;

//捲舌音
if (['tʂ', 'tʂʰ', 'ʂ', 'ɻ'].includes(聲母)) {
  if (['i', 'iʔ'].includes(韻母)) 韻母 = 'ʅ' + 韻母.slice(1);
  if (['in', 'iŋ'].includes(韻母)) 韻母 = 'ə' + 韻母.slice(1);
  if (韻母[0] === 'i' && 韻母[1]) 韻母 = 韻母.slice(1);
  if (韻母 === 'yeʔ') 韻母 = 'uoʔ';
  if (韻母[0] === 'y') 韻母 = 'u' + 韻母.slice(1); //un→uən，詳後
}

//脣音
if (is`脣音` && 韻母[0] === 'y') 韻母 = 'u' + 韻母.slice(1); //un→uən，詳後
if (韻母 === 'un') 韻母 = 'uən'; //一次過un→uən
if (['p', 'pʰ', 'm', 'f'].includes(聲母) && 韻母[0] === 'u' && 韻母[1] && !['n', 'ŋ', 'ʔ'].includes(韻母[1])) 韻母 = 韻母.slice(1);
if (['f', 'v'].includes(聲母) && 韻母[0] === 'i') 韻母 = 韻母.slice(1) || 'əi';

//疑母
if (聲母 === 'ŋ' && 韻母[0] === 'u') 聲母 = '';

if (!聲母) {
  if (韻母[0] === 'i') 聲母 = 'j';
  if (韻母[0] === 'u') 聲母 = 'w';
  if (韻母[0] === 'y') 聲母 = 'ɥ';
  if (聲母 && 韻母[1] && !['n', 'ŋ', 'ʔ'].includes(韻母[1])) 韻母 = 韻母.slice(1);
}

if (選項.標調方式 === '調號') return 聲母 + 韻母 + 聲調;
if (選項.標調方式 === '調值') {
  if (聲調 === '1') 聲調 = '⁵⁵';
  if (聲調 === '2') 聲調 = '³⁵';
  if (聲調 === '3') 聲調 = '²¹⁴';
  if (聲調 === '4') 聲調 = '⁵¹';
  if (聲調 === '5') 聲調 = '⁵';
}
return 聲母 + 韻母 + 聲調;

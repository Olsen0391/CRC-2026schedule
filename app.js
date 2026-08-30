const sessions=[
{id:'d1-opening',day:'2026-09-12',time:'9:00〜9:15',title:'開会式',room:'第1会場 / Annex Hall'},
{id:'d1-keynote',day:'2026-09-12',time:'9:15〜9:45',title:'会議代表講演',room:'第1会場 / Annex Hall'},
{id:'d1-poster-paste',day:'2026-09-12',time:'8:30〜10:00',title:'ポスター貼付',room:'ポスター会場 / Room C-1・C-2'},
{id:'d1-poster-view',day:'2026-09-12',time:'午前',title:'ポスター閲覧',room:'ポスター会場 / Room C-1・C-2'},
{id:'d1-sym1',day:'2026-09-12',time:'10:00〜11:30',title:'シンポジウム１：考えるGCP 〜CRC業務はどう変わるのか？〜',room:'第1会場 / Annex Hall'},
{id:'d1-talk1',day:'2026-09-12',time:'9:30〜11:30',title:'座談会１：国内で臨床試験や治験のない希少疾患の患者や家族の取り組み〜明日への希望を信じて〜',room:'第7会場 / Room I'},
{id:'d1-public1',day:'2026-09-12',time:'9:30〜11:30',title:'公募セッション１／ワークショップ：レゴ®シリアスプレイ®メソッドと教材を活用した対話でつなぐ「世界一治験がやりやすい環境作り」',room:'第8会場 / Room J'},
{id:'d1-sym2',day:'2026-09-12',time:'10:00〜11:30',title:'シンポジウム２：CRCの専門性と多様性からキャリアを考える',room:'第3会場 / Room D'},
{id:'d1-sym3',day:'2026-09-12',time:'10:00〜11:30',title:'シンポジウム３：臨床試験をめぐる倫理的・法的・社会的課題（ELSI）について考える',room:'第4会場 / Room E'},
{id:'d1-sym4',day:'2026-09-12',time:'10:00〜11:30',title:'シンポジウム４：日本臨床試験学会の挑戦！',room:'第5会場 / Room B-1'},
{id:'d1-sym5',day:'2026-09-12',time:'10:00〜11:30',title:'シンポジウム５：Single IRB時代に向けたIRBの本質と役割の再整理',room:'第6会場 / Room B-2'},
{id:'d1-sym6',day:'2026-09-12',time:'10:00〜11:30',title:'シンポジウム６：グローバルスタンダードを見据えた治験必須記録／管理の標準化',room:'第7会場 / Room I'},
{id:'d1-seminar1',day:'2026-09-12',time:'11:45〜12:45',title:'共催セミナー１',room:'第1会場 / Annex Hall'},
{id:'d1-seminar2',day:'2026-09-12',time:'11:45〜12:45',title:'共催セミナー２',room:'第2会場 / Room A'},
{id:'d1-seminar3',day:'2026-09-12',time:'11:45〜12:45',title:'共催セミナー３',room:'第3会場 / Room D'},
{id:'d1-seminar4',day:'2026-09-12',time:'11:45〜12:45',title:'共催セミナー４',room:'第4会場 / Room E'},
{id:'d1-seminar5',day:'2026-09-12',time:'11:45〜12:45',title:'共催セミナー５',room:'第5会場 / Room B-1'},
{id:'d1-seminar6',day:'2026-09-12',time:'11:45〜12:45',title:'共催セミナー６',room:'第6会場 / Room B-2'},
{id:'d1-sym7',day:'2026-09-12',time:'13:00〜14:30',title:'シンポジウム７：医学研究をわかりやすく発信するには？〜多様なステークホルダーと共に創るコミュニケーション〜',room:'第2会場 / Room A'},
{id:'d1-talk2',day:'2026-09-12',time:'13:00〜14:30',title:'座談会２：Single IRBに何を期待するのか',room:'第5会場 / Room B-1'},
{id:'d1-sym8',day:'2026-09-12',time:'13:00〜14:30',title:'シンポジウム８：データ連携とICH GCP E6(R3)をCRC視点で読み解く〜未来につながるデータマネジメント〜',room:'第3会場 / Room D'},
{id:'d1-sym9',day:'2026-09-12',time:'13:00〜14:30',title:'シンポジウム９：臨床試験専門職による業務研究と論文化を考える',room:'第6会場 / Room B-2'},
{id:'d1-talk3',day:'2026-09-12',time:'13:00〜15:00',title:'座談会３：これからのキャリアを自分らしく〜ベテランCRCのための座談会〜',room:'第7会場 / Room I'},
{id:'d1-ws1',day:'2026-09-12',time:'13:00〜15:00',title:'ワークショップ１：参加体験型ワークショップ〜研究不正を体験し、構造から考える〜',room:'第8会場 / Room J'},
{id:'d1-public2',day:'2026-09-12',time:'13:00〜14:30',title:'公募セッション２／シンポジウム：CTQ要因で私たちの働き方はどう変わる？〜「すべてに完璧を求める」から卒業するCRCの新しい一歩〜',room:'第4会場 / Room E'},
{id:'d1-special',day:'2026-09-12',time:'13:00〜17:00',title:'特別企画：臨床試験・治験患者の語り',room:'第9会場 / Room K'},
{id:'d1-special1',day:'2026-09-12',time:'13:00〜14:00',title:'特別講演１：医学研究をわかりやすく発信するには？〜多様なステークホルダーと共に創るコミュニケーション〜',room:'第1会場 / Annex Hall'},
{id:'d1-seminar7',day:'2026-09-12',time:'14:45〜15:45',title:'共催セミナー７',room:'第1会場 / Annex Hall'},
{id:'d1-seminar8',day:'2026-09-12',time:'14:45〜15:45',title:'共催セミナー８',room:'第2会場 / Room A'},
{id:'d1-seminar9',day:'2026-09-12',time:'14:45〜15:45',title:'共催セミナー９',room:'第3会場 / Room D'},
{id:'d1-seminar10',day:'2026-09-12',time:'14:45〜15:45',title:'共催セミナー１０',room:'第5会場 / Room B-1'},
{id:'d1-seminar11',day:'2026-09-12',time:'14:45〜15:45',title:'共催セミナー１１',room:'第6会場 / Room B-2'},
{id:'d1-sym10',day:'2026-09-12',time:'14:45〜15:45',title:'シンポジウム１０：検査キットの無駄は誰がどう減らすのか？〜現場の無駄をなくすを協働で考える〜',room:'第4会場 / Room E'},
{id:'d1-poster',day:'2026-09-12',time:'16:15〜17:00',title:'ポスターセッション',room:'ポスター会場 / Room C-1・C-2'},
{id:'d2-special2',day:'2026-09-13',time:'9:00〜10:00',title:'特別講演２：臨床試験が患者に歩み寄るということ〜DCTとPPIが交わる地点から〜',room:'第1会場 / Annex Hall'},
{id:'d2-sym11',day:'2026-09-13',time:'9:00〜10:30',title:'シンポジウム１１：DCTの活用促進に向けた障壁は何か？',room:'第2会場 / Room A'},
{id:'d2-award',day:'2026-09-13',time:'9:00〜11:00',title:'優秀演題セッション',room:'第3会場 / Room D'},
{id:'d2-sym12',day:'2026-09-13',time:'9:00〜10:30',title:'シンポジウム１２：リクルートメントプランは誰が作る？',room:'第4会場 / Room E'},
{id:'d2-sym13',day:'2026-09-13',time:'9:00〜10:30',title:'シンポジウム１３：SMO協働体制の現状・課題・これから〜未来を共に“奏でる”ための共創のかたち〜',room:'第5会場 / Room B-1'},
{id:'d2-talk4',day:'2026-09-13',time:'9:00〜10:30',title:'座談会４：CRC国家資格化を想像から議論へ〜現在地からつなぐ一歩〜',room:'第6会場 / Room B-2'},
{id:'d2-ws2',day:'2026-09-13',time:'9:00〜11:00',title:'ワークショップ２：臨床試験が患者に歩み寄るということ〜DCTとPPIが交わる地点から〜',room:'第7会場 / Room I'},
{id:'d2-ws3',day:'2026-09-13',time:'9:00〜11:00',title:'ワークショップ３：GCP Renovation〜治験現場で実感する変化と課題について語ろう〜',room:'第8会場 / Room J'},
{id:'d2-ws4',day:'2026-09-13',time:'9:00〜11:00',title:'ワークショップ４：若手CRC・CRA向け実務体験と交流セッション〜SAEが発生した！その時に必要な対応は？〜',room:'第9会場 / Room K'},
{id:'d2-poster-view-am',day:'2026-09-13',time:'午前',title:'ポスター閲覧',room:'ポスター会場 / Room C-1・C-2'},
{id:'d2-poster-session',day:'2026-09-13',time:'10:45〜11:30',title:'ポスターセッション',room:'ポスター会場 / Room C-1・C-2'},
{id:'d2-seminar12',day:'2026-09-13',time:'11:45〜12:45',title:'共催セミナー１２',room:'第1会場 / Annex Hall'},
{id:'d2-seminar13',day:'2026-09-13',time:'11:45〜12:45',title:'共催セミナー１３',room:'第2会場 / Room A'},
{id:'d2-seminar14',day:'2026-09-13',time:'11:45〜12:45',title:'共催セミナー１４',room:'第3会場 / Room D'},
{id:'d2-seminar15',day:'2026-09-13',time:'11:45〜12:45',title:'共催セミナー１５',room:'第4会場 / Room E'},
{id:'d2-seminar16',day:'2026-09-13',time:'11:45〜12:45',title:'共催セミナー１６',room:'第5会場 / Room B-1'},
{id:'d2-seminar17',day:'2026-09-13',time:'11:45〜12:45',title:'共催セミナー１７',room:'第6会場 / Room B-2'},
{id:'d2-sym14',day:'2026-09-13',time:'13:00〜14:30',title:'シンポジウム１４：生成AIを用いた治験DX〜医療機関における生成AIの活用事例と実現へのロードマップ〜',room:'第1会場 / Annex Hall'},
{id:'d2-sym15',day:'2026-09-13',time:'13:00〜14:30',title:'シンポジウム１５：治験エコシステムは日本の医療の未来に何をもたらしたか〜ALL Japanを目指して〜',room:'第2会場 / Room A'},
{id:'d2-sym16',day:'2026-09-13',time:'13:00〜14:30',title:'シンポジウム１６：ICF共通テンプレート 3年の“今”から、10年後の“未来”を考える',room:'第3会場 / Room D'},
{id:'d2-open',day:'2026-09-13',time:'13:00〜14:30',title:'公募セッション３：これからの創薬から育薬へのプロセスとあり方を考える〜真に必要な新薬市販後安全対策とCRCの関わり方とは〜',room:'第4会場 / Room E'},
{id:'d2-sym17',day:'2026-09-13',time:'13:00〜14:30',title:'シンポジウム１７：FMVに基づく治験費用算定の導入に向けて〜現場から見た必要性と課題共有〜',room:'第5会場 / Room B-1'},
{id:'d2-talk5',day:'2026-09-13',time:'13:00〜14:30',title:'座談会５：CRCの現在地を、皆で考察する〜全国CRC業務実態調査データを出発点とした公開座談会〜',room:'第6会場 / Room B-2'},
{id:'d2-ws5',day:'2026-09-13',time:'13:00〜15:00',title:'ワークショップ５：コミュニケーションの基礎体力をつけよう！〜こころを解きほぐすために〜',room:'第7会場 / Room I'},
{id:'d2-ws6',day:'2026-09-13',time:'13:00〜15:00',title:'ワークショップ６：問いの力を磨く体験型ワークショップ〜CRC・CRAなど現場の経験を題材として〜',room:'第8会場 / Room J'},
{id:'d2-poster-view-pm',day:'2026-09-13',time:'午後',title:'ポスター閲覧',room:'ポスター会場 / Room C-1・C-2'},
{id:'d2-poster-remove',day:'2026-09-13',time:'午後',title:'ポスター撤去',room:'ポスター会場 / Room C-1・C-2'},
{id:'d2-close',day:'2026-09-13',time:'15:15〜',title:'表彰式・閉会式',room:'第1会場 / Annex Hall'}
];
let state;try{state=JSON.parse(localStorage.getItem('crc2026')||'null')||{selected:[],notes:{},customTimes:{}}}catch(e){state={selected:[],notes:{},customTimes:{}}}state.selected=Array.isArray(state.selected)?state.selected:[];state.notes=state.notes&&typeof state.notes==='object'?state.notes:{};state.customTimes=state.customTimes&&typeof state.customTimes==='object'?state.customTimes:{};let day='2026-09-12', view='program', currentId=null;
const $=s=>document.querySelector(s); const save=()=>localStorage.setItem('crc2026',JSON.stringify(state));
const startMinutes=s=>{const c=state.customTimes[s.id],m=(c?.start||s.time).match(/(\d+):(\d+)/);return m?Number(m[1])*60+Number(m[2]):s.time==='午前'?540:780};
const ordered=a=>a.slice().sort((x,y)=>x.day.localeCompare(y.day)||startMinutes(x)-startMinutes(y));
function timeRange(s){const custom=state.customTimes[s.id];if(custom&&custom.start&&custom.end)return [Number(custom.start.slice(0,2))*60+Number(custom.start.slice(3)),Number(custom.end.slice(0,2))*60+Number(custom.end.slice(3))];const nums=[...s.time.matchAll(/(\d+):(\d+)/g)].map(m=>Number(m[1])*60+Number(m[2]));if(nums.length>=2)return [nums[0],nums[1]];return null}
function layoutRange(s){const r=timeRange(s);return r?[r[0],Math.max(r[1],r[0]+20)]:null}
function displayTime(s){const custom=state.customTimes[s.id];return custom&&custom.start&&custom.end?`${custom.start}〜${custom.end}`:s.time}
function officialInputs(s){const nums=[...s.time.matchAll(/(\d+):(\d+)/g)].map(m=>`${m[1].padStart(2,'0')}:${m[2]}`);return nums.length>=2?{start:nums[0],end:nums[1]}:{start:'',end:''}}
function esc(s){return s.replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]))}
function category(s){if(s.title.includes('ポスター')&&s.title.includes('セッション'))return 'poster-session';if(s.title.includes('ポスター'))return 'poster';if(s.title.includes('共催セミナー'))return 'seminar';if(s.title.includes('公募'))return 'public';if(s.title.includes('ワークショップ'))return 'workshop';if(s.title.includes('特別'))return 'special';if(s.title.includes('シンポジウム'))return 'symposium';return 'talk'}
function card(s){const on=state.selected.includes(s.id),note=state.notes[s.id];return `<article class="session cat-${category(s)} ${on?'selected':''}" data-id="${s.id}"><div class="check">${on?'✓':''}</div><div class="session-main"><div class="time">${s.time}</div><h3>${esc(s.title)}</h3><div class="room">${esc(s.room)}</div>${note?`<div class="note-preview">メモ：${esc(note)}</div>`:''}</div></article>`}
function renderTimeline(){const mine=ordered(sessions.filter(s=>state.selected.includes(s.id)));if(!mine.length){$('#mineTimeline').innerHTML='<div class="timeline-empty"><strong>まだ予定がありません</strong>プログラムから参加したいセッションを選んでください。</div>';return}$('#mineTimeline').innerHTML=['2026-09-12','2026-09-13'].map(d=>{const items=ordered(mine.filter(s=>s.day===d)),timed=items.filter(s=>timeRange(s));if(!items.length)return '';const groups=[];timed.forEach(s=>{const r=layoutRange(s);let group=groups.find(g=>g.some(x=>{const q=layoutRange(x);return r[0]<q[1]&&q[0]<r[1]}));if(!group){group=[];groups.push(group)}group.push(s)});const blocks=items.map(s=>{const r=timeRange(s);if(!r)return `<div class="timeline-block timeline-unknown cat-${category(s)}" data-id="${s.id}"><div class="block-time">${displayTime(s)}</div><strong>${esc(s.title)}</strong><small>${esc(s.room)}</small></div>`;const group=groups.find(g=>g.includes(s))||[s],col=group.indexOf(s),total=group.length,top=(r[0]-480)*120/60,height=Math.max(22,(r[1]-r[0])*120/60-4),left=(col/total)*100+1,width=(100/total)-2;return `<div class="timeline-block cat-${category(s)}" data-id="${s.id}" style="top:${top}px;height:${height}px;left:${left}%;width:${width}%"><div class="block-time">${displayTime(s)}</div><strong>${esc(s.title)}</strong><small>${esc(s.room)}</small></div>`}).join('');const labels=Array.from({length:11},(_,i)=>`<span class="hour-label" style="top:${i*120}px">${8+i}:00</span>`).join('');return `<section class="timeline-day"><div class="timeline-day-title">${d==='2026-09-12'?'9月12日（土）':'9月13日（日）'}</div><div class="timeline"><span class="timeline-start">8:00</span>${labels}${blocks}</div></section>`}).join('');document.querySelectorAll('.timeline-block').forEach(e=>e.onclick=()=>openModal(e.dataset.id))}
function render(){const list=ordered(sessions.filter(s=>s.day===day));$('#dayTitle').textContent=day==='2026-09-12'?'9月12日（土）':'9月13日（日）';$('#sessionList').innerHTML=list.map(card).join('');renderTimeline();$('#selectedCount').textContent=`${state.selected.length}件`}
function toggle(id){if(state.selected.includes(id))state.selected=state.selected.filter(x=>x!==id);else state.selected.push(id);save();render()}
function openModal(id){currentId=id;const s=sessions.find(x=>x.id===id),custom=state.customTimes[id]||officialInputs(s);$('#modalTime').textContent=displayTime(s);$('#modalTitle').textContent=s.title;$('#modalRoom').textContent=s.room;$('#noteInput').value=state.notes[id]||'';$('#customStart').value=custom.start;$('#customEnd').value=custom.end;$('#modal').hidden=false;setTimeout(()=>$('#noteInput').focus(),50)}
function reportBody(){const mine=ordered(sessions.filter(s=>state.selected.includes(s.id)));const lines=['CRC 2026 in 京都 参加報告メモ','','参加予定・メモ'];mine.forEach((s,i)=>{lines.push('',`${i+1}. ${s.title}`,`日時：2026年${s.day==='2026-09-12'?'9月12日（土）':'9月13日（日）'} ${displayTime(s)}`,`会場：${s.room}`,`メモ：${state.notes[s.id]||'（未記入）'}`)});lines.push('','※プログラムは2026年7月23日時点のPDFをもとにしています。');return lines.join('\n')}
document.querySelectorAll('.day').forEach(b=>b.onclick=()=>{day=b.dataset.day;document.querySelectorAll('.day').forEach(x=>x.classList.toggle('active',x===b));render()});document.querySelectorAll('.tab').forEach(b=>b.onclick=()=>{view=b.dataset.view;document.querySelectorAll('.tab').forEach(x=>x.classList.toggle('active',x===b));$('#programView').hidden=view!=='program';$('#mineView').hidden=view!=='mine';$('#daySwitcher').hidden=view==='mine';render()});document.addEventListener('click',e=>{const s=e.target.closest('.session');if(s){if(view==='mine')openModal(s.dataset.id);else toggle(s.dataset.id)}});
$('#closeModal').onclick=()=>$('#modal').hidden=true;$('#modal').onclick=e=>{if(e.target.id==='modal')$('#modal').hidden=true};$('#saveNote').onclick=()=>{const v=$('#noteInput').value.trim(),start=$('#customStart').value,end=$('#customEnd').value;if((start&&!end)||(!start&&end)){alert('開始時刻と終了時刻の両方を入力してください。');return}if(start&&end&&start>=end){alert('終了時刻は開始時刻より後にしてください。');return}if(v)state.notes[currentId]=v;else delete state.notes[currentId];if(start&&end)state.customTimes[currentId]={start,end};else delete state.customTimes[currentId];save();$('#modal').hidden=true;render()};$('#clearButton').onclick=()=>{state.selected=[];save();render()};
$('#reportButton').onclick=()=>{if(!state.selected.length){alert('先にプログラムから予定を選択してください。');return}$('#reportText').value=reportBody();$('#reportModal').hidden=false};$('#closeReport').onclick=()=>$('#reportModal').hidden=true;$('#reportModal').onclick=e=>{if(e.target.id==='reportModal')$('#reportModal').hidden=true};$('#copyReport').onclick=async()=>{try{await navigator.clipboard.writeText($('#reportText').value)}catch(e){$('#reportText').select();document.execCommand('copy')}$('#copyReport').textContent='コピーしました ✓';setTimeout(()=>$('#copyReport').textContent='文面をコピー',1600)};$('#mailReport').onclick=()=>{const subject=encodeURIComponent('CRC 2026 参加報告メモ');const body=encodeURIComponent($('#reportText').value);location.href=`mailto:?subject=${subject}&body=${body}`};
$('#aboutButton').onclick=()=>$('#aboutModal').hidden=false;$('#closeAbout').onclick=()=>$('#aboutModal').hidden=true;$('#aboutModal').onclick=e=>{if(e.target.id==='aboutModal')$('#aboutModal').hidden=true};
let deferred;window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferred=e;$('#installButton').hidden=false});$('#installButton').onclick=async()=>{if(deferred){deferred.prompt();deferred=null;$('#installButton').hidden=true}};if('serviceWorker'in navigator)navigator.serviceWorker.register('sw.js');render();

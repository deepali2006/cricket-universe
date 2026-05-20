const TEAMS = {
  IND: {
    name:"INDIA", flag:"🇮🇳", short:"IND",
    batters:[
      {name:"Rohit Sharma",     style:"aggressive"},
      {name:"Virat Kohli",      style:"balanced"},
      {name:"Shubman Gill",     style:"balanced"},
      {name:"Suryakumar Yadav", style:"aggressive"},
      {name:"Hardik Pandya",    style:"aggressive"},
      {name:"Rishabh Pant",     style:"aggressive"},
      {name:"Ravindra Jadeja",  style:"defensive"},
      {name:"Axar Patel",       style:"defensive"},
      {name:"Jasprit Bumrah",   style:"tail"},
      {name:"Mohammed Shami",   style:"tail"},
      {name:"Arshdeep Singh",   style:"tail"},
    ],
    bowlers:[
      {name:"Jasprit Bumrah",  type:"pace", maxOvers:4},
      {name:"Mohammed Shami",  type:"pace", maxOvers:4},
      {name:"Arshdeep Singh",  type:"pace", maxOvers:4},
      {name:"Hardik Pandya",   type:"pace", maxOvers:4},
      {name:"Ravindra Jadeja", type:"spin", maxOvers:4},
      {name:"Axar Patel",      type:"spin", maxOvers:4},
    ]
  },
  AUS:{
    name:"AUSTRALIA", flag:"🇦🇺", short:"AUS",
    batters:[
      {name:"David Warner",   style:"aggressive"},
      {name:"Travis Head",    style:"aggressive"},
      {name:"Steve Smith",    style:"balanced"},
      {name:"Glenn Maxwell",  style:"aggressive"},
      {name:"Cameron Green",  style:"balanced"},
      {name:"Matthew Wade",   style:"balanced"},
      {name:"Pat Cummins",    style:"defensive"},
      {name:"Mitchell Starc", style:"tail"},
      {name:"Josh Hazlewood", style:"tail"},
      {name:"Adam Zampa",     style:"tail"},
      {name:"Sean Abbott",    style:"tail"},
    ],
    bowlers:[
      {name:"Pat Cummins",    type:"pace", maxOvers:4},
      {name:"Mitchell Starc", type:"pace", maxOvers:4},
      {name:"Josh Hazlewood", type:"pace", maxOvers:4},
      {name:"Cameron Green",  type:"pace", maxOvers:4},
      {name:"Adam Zampa",     type:"spin", maxOvers:4},
      {name:"Glenn Maxwell",  type:"spin", maxOvers:4},
    ]
  }
};
 
// ─── COMMENTARY ───────────────────────────────────────────────────────────────
const COMMENTARY = {
  dot:[
    (b,bow)=>`Dot ball. ${bow} keeps it tight. ${b} defends watchfully. 🛑`,
    (b,bow)=>`Good line and length from ${bow}. Nothing for the batter. 🛑`,
    (b,bow)=>`${bow} bowls a perfect delivery. ${b} blocks it back. 🛑`,
    (b,bow)=>`Tight bowling from ${bow}. Dot ball! 🛑`,
    (b,bow)=>`${b} gets beaten on the outside edge. Brilliant from ${bow}. 🛑`,
  ],
  1:[
    (b)=>`Quick single taken by ${b}. Good running! ⚡`,
    (b)=>`${b} tucks it to fine leg, easy single. ⚡`,
    (b)=>`Pushed into the covers for a quick one. ⚡`,
    (b)=>`${b} steers it towards mid-on. One run. ⚡`,
  ],
  2:[
    (b)=>`${b} drives it to the gap — they run two! 💫`,
    (b)=>`Good running! Two runs for ${b}. 💫`,
    (b)=>`Pushed down the ground. They come back for two. 💫`,
  ],
  3:[
    (b)=>`Three runs! ${b} hits through the gap beautifully. 🌟`,
    (b)=>`Cracking shot — three runs! Great running too. 🌟`,
  ],
  4:[
    (b)=>`FOUR! 🔥🏏 ${b} drives it beautifully through the covers!`,
    (b)=>`BOUNDARY! 🔥 ${b} pulls it over mid-wicket. Beautiful shot!`,
    (b)=>`FOUR! 🔥 Cracking cut shot by ${b} through point!`,
    (b)=>`${b} flicks it off the pads — FOUR! Lovely shot. 🔥🏏`,
    (b)=>`FOUR! ${b} lofts over extra cover — gorgeous timing! 🔥`,
    (b)=>`Late cut for FOUR! ${b} is showing great skill. 🔥`,
  ],
  6:[
    (b)=>`SIX!!! 🚀💥 ${b} launches it into the crowd! Massive hit!`,
    (b)=>`SIX!!! 🚀 ${b} goes downtown! Way over long-on!`,
    (b)=>`MAXIMUM! 🚀💥 ${b} hits it high and hard over mid-wicket!`,
    (b)=>`SIX!!! 💥 ${b} ramps it over fine leg! What a shot!`,
    (b)=>`HUGE SIX! 🚀 ${b} clears long-on with tremendous power! The crowd goes wild!`,
    (b)=>`${b} goes BOOM! 🚀💥 That's over the sightscreen! Incredible stroke!`,
  ],
  wide:[
    (bow)=>`Wide! ↔️ ${bow} strays down leg. The umpire signals.`,
    (bow)=>`↔️ Wide ball! ${bow} bowls outside off stump.`,
    (bow)=>`That's too wide! ↔️ Free runs for the batting side.`,
  ],
  noball:[
    (bow)=>`⚠️ NO BALL! ${bow} oversteps! FREE HIT coming up! 🎯`,
    (bow)=>`⚠️ No ball called! ${bow} was over the crease. FREE HIT! 🎯`,
  ],
  wicket:{
    bowled:   (b,bow)=>`WICKET! 🥎💥 ${b} is BOWLED! ${bow} hits the timber! What a delivery!`,
    caught:   (b,bow)=>`OUT! 🧤 ${b} is CAUGHT! ${bow} gets the breakthrough!`,
    lbw:      (b,bow)=>`OUT! LBW! 🥎 ${b} is trapped in front! ${bow} is pumped!`,
    runout:   (b)    =>`RUN OUT! ⚡🥎 ${b} is SHORT OF THE CREASE! Brilliant fielding!`,
    stumped:  (b,bow)=>`STUMPED! 🧤 ${b} is STUMPED off ${bow}! What reflexes!`,
    caught_b: (b,bow)=>`WICKET! ${b} is CAUGHT AND BOWLED by ${bow}! 🥎`,
  },
  fifty:  (b)=>`👏 FIFTY for ${b}! What a superb knock! The crowd is on its feet!`,
  century:(b)=>`👑 CENTURY!!! ${b} raises the bat! Magnificent innings!`,
  powerplay_end:()=>`Powerplay ends! Let's see the middle overs unfold. 📊`,
  death_overs:  ()=>`💀 Death overs begin! Expect fireworks from both sides!`,
  maiden: (bow)=>`🔒 MAIDEN OVER from ${bow}! Absolutely brilliant bowling!`,
};
 
// ─── PROBABILITY TABLES ───────────────────────────────────────────────────────
// indices: [dot, 1, 2, 3, 4, 6, W, wide, nb]
const PROB = {
  aggressive:{
    powerplay:[20,22,12,3,16,10,7,5,5],
    middle:   [22,24,12,3,14, 9,7,5,4],
    death:    [15,18,10,3,18,15,9,5,7],
  },
  balanced:{
    powerplay:[25,26,13,3,12, 7,6,4,4],
    middle:   [28,28,14,3,11, 6,6,3,1],
    death:    [20,22,12,3,15,12,8,4,4],
  },
  defensive:{
    powerplay:[32,28,14,3, 9, 4,4,3,3],
    middle:   [35,30,14,3, 8, 3,4,2,1],
    death:    [28,25,14,3,12, 8,5,3,2],
  },
  tail:{
    powerplay:[38,25,12,2, 7, 2,10,2,2],
    middle:   [40,26,11,2, 6, 2,10,2,1],
    death:    [35,22,11,2, 8, 4,12,3,3],
  },
};
 
// ─── GAME STATE ───────────────────────────────────────────────────────────────
let state = {};
let autoTimer = null;
 
/* State schema:
   state.teamA / state.teamB  — the two team keys (IND / AUS)
   state.inn1BatTeam          — team key who bats in inn1 (SET AT TOSS)
   state.inn1BowlTeam         — team key who bowls in inn1
   state.inn2BatTeam          — team key who bats in inn2 (=inn1BowlTeam)
   state.inn2BowlTeam         — team key who bowls in inn2
   state.currentInnings       — "inn1" | "inn2"
   state.target               — runs needed by chasing team (set after inn1)
   state.winner               — team key | "TIE" | null
   state.matchOver            — boolean
   state.freeHit              — boolean (next ball is free hit)
   state.inn1 / state.inn2    — innings data objects
*/
 
function freshInnings(){
  return {
    runs:0, wickets:0, balls:0,
    overRuns:[], extras:{wide:0,nb:0},
    batting:[], bowling:[],
    currentBowlerIdx:-1,
    overBalls:[],
    partnerships:[],
    currentPartnership:{runs:0,balls:0,b1:null,b2:null},
    strikerIdx:0, nonStrikerIdx:1, nextBatterIdx:2,
  };
}
 
function makeBatters(teamKey){
  return TEAMS[teamKey].batters.map((b,i)=>({
    name:b.name, style:b.style, idx:i,
    runs:0,balls:0,fours:0,sixes:0,
    out:false, outDesc:"",
    fiftyShown:false, centuryShown:false,
  }));
}
function makeBowlers(teamKey){
  return TEAMS[teamKey].bowlers.map(b=>({
    name:b.name, type:b.type, maxOvers:b.maxOvers,
    overs:0, balls:0, runs:0, wickets:0, maidens:0,
  }));
}
 
function initState(){
  const teams = Math.random()<.5 ? ["IND","AUS"] : ["AUS","IND"];
  state = {
    teamA: teams[0],
    teamB: teams[1],
    /* these are set properly after toss */
    inn1BatTeam:  null,
    inn1BowlTeam: null,
    inn2BatTeam:  null,
    inn2BowlTeam: null,
    currentInnings:"inn1",
    target:null,
    winner:null,
    matchOver:false,
    freeHit:false,
    inn1: freshInnings(),
    inn2: freshInnings(),
  };
}
 
function applyTossResult(battingTeamKey){
  /* Called after coin toss resolves who bats first */
  const bowlingTeamKey = battingTeamKey === state.teamA ? state.teamB : state.teamA;
 
  state.inn1BatTeam  = battingTeamKey;
  state.inn1BowlTeam = bowlingTeamKey;
  state.inn2BatTeam  = bowlingTeamKey;   // ← inn2 batters = inn1 bowlers
  state.inn2BowlTeam = battingTeamKey;   // ← inn2 bowlers = inn1 batters
 
  // Populate innings batting / bowling arrays
  state.inn1.batting = makeBatters(battingTeamKey);
  state.inn1.bowling = makeBowlers(bowlingTeamKey);
  state.inn2.batting = makeBatters(bowlingTeamKey);
  state.inn2.bowling = makeBowlers(battingTeamKey);
 
  setupOpeners("inn1");
}
 
function setupOpeners(inn){
  const s = state[inn];
  s.strikerIdx    = 0;
  s.nonStrikerIdx = 1;
  s.nextBatterIdx = 2;
  s.currentPartnership = {
    runs:0, balls:0,
    b1:s.batting[0].name, b2:s.batting[1].name,
  };
}
 
function getPhase(balls){
  if(balls<36) return "powerplay";
  if(balls<96) return "middle";
  return "death";
}
 
// ─── BALL SIMULATION ─────────────────────────────────────────────────────────
function simulateBall(){
  if(state.matchOver) return;
 
  const inn    = state.currentInnings;
  const s      = state[inn];
  const batter = s.batting[s.strikerIdx];
  const bowler = s.bowling[s.currentBowlerIdx];
  const phase  = getPhase(s.balls);
  let prob     = [...PROB[batter.style][phase]];
 
  const wasFreehit = state.freeHit;
  state.freeHit = false;
 
  if(wasFreehit){ prob[6]=0; prob[1]+=4; prob[3]+=2; } // no wicket on free hit
 
  const outcomes = ["dot","1","2","3","4","6","W","wide","nb"];
  const result   = outcomes[weightedRandom(prob)];
 
  let runsScored=0, legalBall=true, isWicket=false, commText="";
 
  /* ── WIDE ── */
  if(result==="wide"){
    runsScored=1; legalBall=false; s.extras.wide++;
    commText=pick(COMMENTARY.wide)(bowler.name);
    s.overBalls.push({disp:"Wd",type:"wide"});
 
  /* ── NO BALL ── */
  }else if(result==="nb"){
    runsScored=1; legalBall=false; s.extras.nb++;
    state.freeHit=true;
    commText=pick(COMMENTARY.noball)(bowler.name);
    s.overBalls.push({disp:"NB",type:"nb"});
 
  /* ── WICKET ── */
  }else if(result==="W"){
    isWicket=true; legalBall=true;
    const dTypes = wasFreehit ? ["runout"] :
      ["bowled","caught","lbw","caught_b", bowler.type==="spin"?"stumped":"bowled"];
    const dType  = dTypes[Math.floor(Math.random()*dTypes.length)];
    commText = dType==="runout"
      ? COMMENTARY.wicket.runout(batter.name)
      : COMMENTARY.wicket[dType](batter.name, bowler.name);
    batter.balls++;
    batter.out=true;
    batter.outDesc=dType.replace("_"," ").toUpperCase();
    s.wickets++;
    if(dType!=="runout") bowler.wickets++;
    bowler.balls++;
    s.overBalls.push({disp:"W",type:"wkt"});
    endPartnership(inn, s.wickets);
    if(s.nextBatterIdx<=10){
      s.strikerIdx     = s.nextBatterIdx++;
      s.currentPartnership={
        runs:0,balls:0,
        b1:s.batting[s.strikerIdx].name,
        b2:s.batting[s.nonStrikerIdx].name,
      };
    }
    s.balls++;
    showFlash("🥎💥","WICKET!","flash-wicket-text");
    shakeScreen();
 
  /* ── RUNS ── */
  }else{
    const runMap={dot:0,"1":1,"2":2,"3":3,"4":4,"6":6};
    runsScored=runMap[result];
    batter.runs  +=runsScored;
    batter.balls++;
    if(runsScored===4) batter.fours++;
    if(runsScored===6) batter.sixes++;
    const ballType=result==="dot"?"dot":result==="4"?"four":result==="6"?"six":result;
    s.overBalls.push({disp:runsScored===0?"•":runsScored, type:ballType});
    bowler.balls++;
    s.balls++;
    commText=pick(COMMENTARY[result]||COMMENTARY["1"])(batter.name, bowler.name);
    if(runsScored===4){ showFlash("🔥🏏","FOUR!","flash-four-text"); boundaryFlash(false); }
    if(runsScored===6){ showFlash("🚀💥","SIX!!!","flash-six-text"); boundaryFlash(true); spawnConfetti(); }
    if(runsScored%2===1) swapStrike(inn);
    s.currentPartnership.runs+=runsScored;
    s.currentPartnership.balls++;
    // Milestones
    if(batter.runs>=100 && !batter.centuryShown){
      batter.centuryShown=true;
      addCommentary(inn,COMMENTARY.century(batter.name),"info","info");
    }else if(batter.runs>=50 && !batter.fiftyShown){
      batter.fiftyShown=true;
      addCommentary(inn,COMMENTARY.fifty(batter.name),"info","info");
    }
  }
 
  // Update total & bowler economy
  s.runs+=runsScored;
  if(bowler) bowler.runs+=runsScored+(legalBall?0:1);
 
  if(commText) addCommentary(inn,commText,result,isWicket?"wicket":result);
 
  // Over completion (only on legal balls that complete 6)
  if(legalBall && s.balls>0 && s.balls%6===0) completeOver(inn);
 
  // Phase announcements
  if(s.balls===36) addCommentary(inn,COMMENTARY.powerplay_end(),"info","info");
  if(s.balls===96) addCommentary(inn,COMMENTARY.death_overs(),"info","info");
 
  checkInningsEnd(inn);
  renderAll();
}
 
function completeOver(inn){
  const s=state[inn];
  const runsThisOver=s.overBalls.reduce((sum,b)=>{
    const v=parseInt(b.disp); return sum+(isNaN(v)?0:v);
  },0);
  s.overRuns.push(runsThisOver);
  const bowler=s.bowling[s.currentBowlerIdx];
  if(bowler && runsThisOver===0){
    bowler.maidens++;
    addCommentary(inn,COMMENTARY.maiden(bowler.name),"info","info");
  }
  if(bowler){ bowler.overs++; bowler.balls=0; }
  s.overBalls=[];
  swapStrike(inn);
  pickNextBowler(inn);
}
 
function pickNextBowler(inn){
  const s=state[inn];
  const bowlers=s.bowling;
  let eligible=bowlers.filter((_,i)=>i!==s.currentBowlerIdx && bowlers[i].overs<bowlers[i].maxOvers);
  if(eligible.length===0) eligible=bowlers.filter(b=>b.overs<b.maxOvers);
  if(eligible.length===0) return;
  const next=eligible[Math.floor(Math.random()*eligible.length)];
  s.currentBowlerIdx=bowlers.indexOf(next);
}
 
function swapStrike(inn){
  const s=state[inn];
  [s.strikerIdx,s.nonStrikerIdx]=[s.nonStrikerIdx,s.strikerIdx];
}
 
function endPartnership(inn,wicketNo){
  const s=state[inn]; const p=s.currentPartnership;
  s.partnerships.push({wicket:wicketNo,runs:p.runs,balls:p.balls,b1:p.b1,b2:p.b2});
}
 
// ─── INNINGS / MATCH END ─────────────────────────────────────────────────────
function checkInningsEnd(inn){
  const s=state[inn];
 
  // Did chasing team reach/pass target mid-innings?
  if(inn==="inn2" && state.target!==null && s.runs>=state.target){
    // ✅ CHASING TEAM WINS — use inn2BatTeam (set at toss)
    state.winner    = state.inn2BatTeam;
    state.matchOver = true;
    endPartnership("inn2", s.wickets+1);
    stopAuto();
    setTimeout(showWinnerModal, 1000);
    return;
  }
 
  const inningsOver = s.wickets>=10 || s.balls>=120;
  if(!inningsOver) return;
 
  if(inn==="inn1"){
    endPartnership("inn1", s.wickets+1);
    state.target         = s.runs+1;
    state.currentInnings = "inn2";
    setupOpeners("inn2");
    pickNextBowler("inn2");
    const ov=Math.floor(s.balls/6);
    showInningsTransition(s.runs, s.wickets, ov);
    addCommentary("inn2",
      `🏏 2nd INNINGS! ${TEAMS[state.inn2BatTeam].name} need ${state.target} to win in 20 overs.`,
      "info","info");
  }else{
    // Inn2 over without reaching target
    endPartnership("inn2", s.wickets+1);
    const deficit=state.target-s.runs;
    state.winner    = deficit>0 ? state.inn1BatTeam : "TIE";
    state.matchOver = true;
    stopAuto();
    setTimeout(showWinnerModal,1000);
  }
}
 
// ─── RENDER ───────────────────────────────────────────────────────────────────
function renderAll(){
  renderHeader();
  renderBalls();
  renderBatting();
  renderBowling();
  renderWinProb();
  renderWorm();
  renderPartnerships();
  renderRRRMeter();
}
 
function oStr(b){ return `${Math.floor(b/6)}.${b%6}`; }
 
function renderHeader(){
  const inn=state.currentInnings;
  const s1=state.inn1, s2=state.inn2;
 
  // Always show teamA left, teamB right
  $("team-a-flag").textContent = TEAMS[state.teamA].flag;
  $("team-a-name").textContent = TEAMS[state.teamA].short;
  $("team-b-flag").textContent = TEAMS[state.teamB].flag;
  $("team-b-name").textContent = TEAMS[state.teamB].short;
 
  // Inn1 scores (always shown on left = teamA side)
  const inn1IsTeamA = (state.inn1BatTeam===state.teamA);
 
  if(inn==="inn1"){
    if(inn1IsTeamA){
      $("score-a-runs").textContent=s1.runs;
      $("score-a-wkts").textContent=s1.wickets;
      $("team-a-overs").textContent=`(${oStr(s1.balls)})`;
      $("score-b-runs").textContent="—";
      $("score-b-sep").style.display="none";
      $("score-b-wkts").textContent="";
      $("team-b-overs").textContent="";
    }else{
      $("score-b-runs").textContent=s1.runs;
      $("score-b-sep").style.display="";
      $("score-b-wkts").textContent=s1.wickets;
      $("team-b-overs").textContent=`(${oStr(s1.balls)})`;
      $("score-a-runs").textContent="—";
      $("score-a-wkts").textContent="";
      $("team-a-overs").textContent="";
    }
    $("target-row").style.display="none";
    $("rrr-row").style.display="none";
    $("innings-val").textContent="1st";
  }else{
    // Both innings played
    const aIsInn1 = inn1IsTeamA;
    // teamA row
    const aRuns=aIsInn1?s1.runs:s2.runs;
    const aWkts=aIsInn1?s1.wickets:s2.wickets;
    const aOv  =aIsInn1?s1.balls:s2.balls;
    $("score-a-runs").textContent=aRuns;
    $("score-a-wkts").textContent=aWkts;
    $("team-a-overs").textContent=`(${oStr(aOv)})`;
    // teamB row
    const bRuns=aIsInn1?s2.runs:s1.runs;
    const bWkts=aIsInn1?s2.wickets:s1.wickets;
    const bOv  =aIsInn1?s2.balls:s1.balls;
    $("score-b-sep").style.display="";
    $("score-b-runs").textContent=bRuns;
    $("score-b-wkts").textContent=bWkts;
    $("team-b-overs").textContent=`(${oStr(bOv)})`;
    $("target-row").style.display="";
    $("target-val").textContent=state.target;
    $("rrr-row").style.display="";
    const runsLeft=state.target-s2.runs;
    const ballsLeft=120-s2.balls;
    const rrr=ballsLeft>0?(runsLeft/ballsLeft*6).toFixed(2):"—";
    $("rrr-val").textContent=rrr;
    $("rrr-big").textContent=rrr;
    $("rrr-meter-card").style.display="";
    $("innings-val").textContent="2nd";
  }
 
  const crr=state[inn].balls>0?(state[inn].runs/state[inn].balls*6).toFixed(2):"0.00";
  $("crr-val").textContent=crr;
 
  const battingTeamName = state[inn+"BatTeam"] ? TEAMS[state[inn+"BatTeam"]].name : "";
  const bowlingTeamName = state[inn+"BowlTeam"] ? TEAMS[state[inn+"BowlTeam"]].name : "";
  $("match-status-text").textContent=state.matchOver?"MATCH OVER":`${battingTeamName} BATTING`;
  $("batting-team-name").textContent=battingTeamName;
  $("bowling-team-name").textContent=bowlingTeamName;
}
 
function renderBalls(){
  const s=state[state.currentInnings];
  const row=$("balls-row");
  row.innerHTML="";
  s.overBalls.forEach(b=>{
    const chip=document.createElement("div");
    chip.className=`ball-chip ball-${b.type}`;
    chip.textContent=b.disp;
    row.appendChild(chip);
  });
  const tot=s.overBalls.reduce((sum,b)=>{const v=parseInt(b.disp);return sum+(isNaN(v)?0:v);},0);
  $("over-runs-span").textContent=tot;
}
 
function renderBatting(){
  const inn=state.currentInnings;
  const s=state[inn];
  const tbody=$("batting-tbody");
  tbody.innerHTML="";
  [s.strikerIdx,s.nonStrikerIdx].forEach(idx=>{
    if(idx===undefined||idx===null) return;
    const b=s.batting[idx]; if(!b) return;
    const sr=b.balls>0?((b.runs/b.balls)*100).toFixed(1):"0.0";
    const tr=document.createElement("tr");
    tr.className=idx===s.strikerIdx?"striker-row":"";
    tr.innerHTML=`<td style="color:${idx===s.strikerIdx?"#fff":"var(--text-dim)"}">${b.name}</td>
      <td>${b.runs}</td><td>${b.balls}</td><td>${b.fours}</td><td>${b.sixes}</td><td>${sr}</td>`;
    tbody.appendChild(tr);
  });
  const p=s.currentPartnership;
  $("partnership-val").textContent=`${p.runs} (${p.balls})`;
}
 
function renderBowling(){
  const inn=state.currentInnings;
  const s=state[inn];
  const tbody=$("bowling-tbody");
  tbody.innerHTML="";
  const active=s.bowling.filter((b,i)=>b.overs>0||i===s.currentBowlerIdx);
  if(active.length===0){
    tbody.innerHTML=`<tr><td colspan="6" class="empty-row">Innings not started</td></tr>`;
    return;
  }
  active.forEach(b=>{
    const tb=b.overs*6+b.balls;
    const eco=tb>0?((b.runs/tb)*6).toFixed(2):"0.00";
    const isCurrent=s.bowling[s.currentBowlerIdx]===b;
    const tr=document.createElement("tr");
    tr.innerHTML=`<td style="color:${isCurrent?"#fff":"var(--text-dim)"}">${b.name}${isCurrent?" *":""}</td>
      <td>${b.overs}.${b.balls}</td><td>${b.runs}</td><td>${b.wickets}</td><td>${eco}</td><td>${b.maidens}</td>`;
    tbody.appendChild(tr);
  });
}
 
function renderWinProb(){
  const inn=state.currentInnings;
  const s=state[inn];
  let probA=50;
  if(inn==="inn1"){
    const crr=s.balls>0?(s.runs/s.balls*6):8;
    probA=Math.min(80,Math.max(30,50+(crr-8)*3));
  }else{
    const runsLeft=state.target-s.runs;
    const ballsLeft=120-s.balls;
    if(runsLeft<=0){ probA=0; }
    else if(ballsLeft<=0){ probA=100; }
    else{
      const rrr=runsLeft/ballsLeft*6;
      const crr=s.balls>0?(s.runs/s.balls*6):8;
      probA=Math.min(90,Math.max(10,50+(rrr-crr)*4));
    }
  }
  // probA = probability for inn1BatTeam
  // Map to teamA/teamB display
  const aIsInn1=(state.inn1BatTeam===state.teamA);
  const pctA=aIsInn1?Math.round(probA):Math.round(100-probA);
  const pctB=100-pctA;
  $("wp-fill-a").style.width=pctA+"%";
  $("wp-fill-b").style.width=pctB+"%";
  $("wp-pct-a").textContent=pctA+"%";
  $("wp-pct-b").textContent=pctB+"%";
  $("wp-team-a-label").textContent=TEAMS[state.teamA].short;
  $("wp-team-b-label").textContent=TEAMS[state.teamB].short;
}
 
function renderWorm(){
  const canvas=$("worm-canvas");
  const ctx=canvas.getContext("2d");
  const W=canvas.width,H=canvas.height;
  ctx.clearRect(0,0,W,H);
 
  const draw=(overRuns,color,dash)=>{
    if(overRuns.length===0) return;
    let cum=0; const pts=overRuns.map(r=>(cum+=r,cum));
    const maxR=Math.max(...pts,10);
    const padX=28,padY=12,plotW=W-padX*2,plotH=H-padY*2-16;
    ctx.save();
    if(dash) ctx.setLineDash([4,4]);
    ctx.strokeStyle=color; ctx.lineWidth=2.5;
    ctx.shadowColor=color; ctx.shadowBlur=6;
    ctx.beginPath();
    ctx.moveTo(padX,padY+plotH);
    pts.forEach((r,i)=>{
      const x=padX+((i+1)/20)*plotW;
      const y=padY+plotH-(r/(maxR*1.1))*plotH;
      ctx.lineTo(x,y);
    });
    ctx.stroke();
    ctx.globalAlpha=0.08; ctx.fillStyle=color;
    ctx.lineTo(padX+(pts.length/20)*plotW,padY+plotH);
    ctx.lineTo(padX,padY+plotH);
    ctx.closePath(); ctx.fill();
    ctx.restore();
  };
 
  // Grid
  ctx.strokeStyle="rgba(255,255,255,0.06)"; ctx.lineWidth=1;
  for(let i=0;i<=5;i++){const y=12+(H-28)*i/5;ctx.beginPath();ctx.moveTo(28,y);ctx.lineTo(W-28,y);ctx.stroke();}
  for(let i=0;i<=20;i+=5){const x=28+(W-56)*i/20;ctx.beginPath();ctx.moveTo(x,12);ctx.lineTo(x,H-16);ctx.stroke();}
  ctx.fillStyle="rgba(100,150,200,0.6)"; ctx.font="10px Rajdhani";
  [0,5,10,15,20].forEach(i=>{const x=28+(W-56)*i/20;ctx.fillText(i,x-4,H-2);});
 
  const inn1Name=state.inn1BatTeam?TEAMS[state.inn1BatTeam].short:"INN1";
  const inn2Name=state.inn2BatTeam?TEAMS[state.inn2BatTeam].short:"INN2";
  draw(state.inn1.overRuns,"#00c8ff",false);
  if(state.inn2.overRuns.length>0) draw(state.inn2.overRuns,"#ff8c00",true);
  ctx.fillStyle="#00c8ff"; ctx.fillRect(W-80,6,14,3);
  ctx.fillStyle="rgba(200,220,255,0.6)"; ctx.font="10px Rajdhani"; ctx.fillText(inn1Name,W-62,10);
  if(state.inn2.overRuns.length>0){
    ctx.fillStyle="#ff8c00"; ctx.fillRect(W-80,16,14,3);
    ctx.fillStyle="rgba(200,220,255,0.6)"; ctx.fillText(inn2Name,W-62,20);
  }
}
 
function renderPartnerships(){
  const list=$("partnership-list");
  list.innerHTML="";
  const all=[...state.inn1.partnerships,...state.inn2.partnerships];
  if(all.length===0){list.innerHTML=`<div class="empty-row">No partnerships yet</div>`;return;}
  const maxR=Math.max(...all.map(p=>p.runs),1);
  all.forEach(p=>{
    const pct=(p.runs/maxR*100).toFixed(1);
    const div=document.createElement("div");
    div.className="partnership-entry";
    div.innerHTML=`<span class="pship-wicket">${p.wicket}W</span>
      <div class="pship-bar-wrap"><div class="pship-bar" style="width:${pct}%">${p.runs}(${p.balls})</div></div>
      <span class="pship-players">${p.b1} & ${p.b2}</span>`;
    list.appendChild(div);
  });
}
 
function renderRRRMeter(){
  if(state.currentInnings!=="inn2") return;
  const s=state.inn2;
  const runsLeft=state.target-s.runs;
  const ballsLeft=120-s.balls;
  if(ballsLeft<=0) return;
  const rrr=runsLeft/ballsLeft*6;
  const pct=Math.min(1,rrr/18);
  const arc=$("rrr-arc");
  arc.style.strokeDashoffset=283-pct*283;
}
 
// ─── COMMENTARY ───────────────────────────────────────────────────────────────
function addCommentary(inn,text,result,type){
  const feed=$("commentary-feed");
  const s=state[inn];
  const ballNum=`${Math.floor(s.balls/6)}.${s.balls%6}`;
  const typeClass=type==="wicket"?"comm-wicket":result==="4"?"comm-four":result==="6"?"comm-six":"comm-dot";
  const icon=result==="6"?"🚀":result==="4"?"🔥":type==="wicket"?"🥎":result==="wide"?"↔️":result==="nb"?"⚠️":"🏏";
  const div=document.createElement("div");
  div.className=`commentary-item ${typeClass}`;
  div.innerHTML=`<span class="ball-label">${ballNum}</span><span class="ball-icon">${icon}</span><span class="comm-text">${text}</span>`;
  feed.insertBefore(div,feed.firstChild);
  const ph=feed.querySelector(".placeholder-comm");
  if(ph) ph.remove();
}
 
// ─── WINNER MODAL ─────────────────────────────────────────────────────────────
function showWinnerModal(){
  const s1=state.inn1, s2=state.inn2;
  const inn1Bat=state.inn1BatTeam;
  const inn2Bat=state.inn2BatTeam;
 
  /* ── compute result text ── */
  let flagGiant, teamGiant, headline, margin;
 
  if(state.winner==="TIE"){
    flagGiant  = "🤝";
    teamGiant  = "IT'S A TIE!";
    headline   = "INCREDIBLE MATCH!";
    margin     = `Both teams ended level in an unforgettable contest!`;
  }else{
    const winKey  = state.winner;           // guaranteed to be inn1BatTeam or inn2BatTeam
    const winTeam = TEAMS[winKey];
 
    flagGiant = winTeam.flag;               // ← THE FLAG THAT GOES IN THE MODAL
    teamGiant = winTeam.name;               // ← THE TEAM NAME IN GIANT TEXT
    headline  = `${winTeam.flag}  ${winTeam.name}  WIN! 🏆`;
 
    if(winKey===inn2Bat){
      // Chasing team won
      const ballsLeft   = 120-s2.balls;
      const wicketsLeft = 10-s2.wickets;
      margin=`${winTeam.name} chased down ${state.target-1} and won by `+
             `${wicketsLeft} wicket${wicketsLeft!==1?"s":""} `+
             `with ${ballsLeft} ball${ballsLeft!==1?"s":""} to spare! 🎉`;
    }else{
      // Defending team won
      const runMargin=(state.target-1)-s2.runs;
      margin=`${winTeam.name} defended ${s1.runs} and won by `+
             `${runMargin} run${runMargin!==1?"s":""}! 🛡️`;
    }
  }
 
  /* ── scorelines ── */
  const sl1=`${TEAMS[inn1Bat].flag} ${TEAMS[inn1Bat].name}:  ${s1.runs}/${s1.wickets}  (${oStr(s1.balls)} ov)`;
  const sl2=inn2Bat
    ? `${TEAMS[inn2Bat].flag} ${TEAMS[inn2Bat].name}:  ${s2.runs}/${s2.wickets}  (${oStr(s2.balls)} ov)`
    : "";
 
  /* ── Man of the Match ── */
  const allBatters=[
    ...state.inn1.batting.filter(b=>b.balls>0),
    ...state.inn2.batting.filter(b=>b.balls>0),
  ];
  const best=allBatters.length>0
    ? allBatters.reduce((a,b)=>(a.runs*2+a.sixes*6+a.fours*3)>=(b.runs*2+b.sixes*6+b.fours*3)?a:b)
    : null;
 
  /* ── inject into DOM ── */
  $("winner-flag-giant").textContent = flagGiant;
  $("winner-team-giant").textContent = teamGiant;
  $("winner-headline").textContent   = headline;
  $("winner-margin").textContent     = margin;
  $("scoreline-inn1").textContent    = sl1;
  $("scoreline-inn2").textContent    = sl2;
 
  if(best){
    $("motm-player").textContent = best.name;
    $("motm-stats").textContent  =
      `${best.runs} runs · ${best.balls} balls · `+
      `SR ${best.balls>0?((best.runs/best.balls)*100).toFixed(1):0} · `+
      `${best.fours}×4 · ${best.sixes}×6`;
  }
 
  // Colour-code the card border per winner
  const card=$("winner-card-inner");
  if(state.winner==="TIE"){
    card.style.borderColor="rgba(255,215,0,.5)";
  }else if(state.winner===inn2Bat){
    card.style.borderColor="rgba(0,220,100,.55)";  // chaser wins — green
  }else{
    card.style.borderColor="rgba(0,160,255,.55)";  // defender wins — blue
  }
 
  $("winner-modal").classList.remove("hidden");
  spawnConfetti(); spawnConfetti();
}
 
// ─── EFFECTS ──────────────────────────────────────────────────────────────────
function showFlash(emoji,text,cls){
  const el=$("event-flash");
  $("flash-emoji").textContent=emoji;
  $("flash-text").textContent=text;
  $("flash-text").className=`flash-text ${cls}`;
  el.classList.remove("hidden");
  clearTimeout(el._t);
  el._t=setTimeout(()=>el.classList.add("hidden"),1100);
}
function shakeScreen(){ document.body.classList.add("shake"); setTimeout(()=>document.body.classList.remove("shake"),500); }
function boundaryFlash(six){
  const el=document.querySelector(".scoreboard-hero");
  el.classList.add(six?"six-flash":"boundary-flash");
  setTimeout(()=>el.classList.remove("six-flash","boundary-flash"),900);
}
function spawnConfetti(){
  const c=$("confetti-container");
  const cols=["#ff6b00","#ffd700","#00c8ff","#00ff88","#ff1744","#aa00ff","#fff"];
  for(let i=0;i<55;i++){
    setTimeout(()=>{
      const p=document.createElement("div");
      p.className="confetti-piece";
      p.style.cssText=`left:${Math.random()*100}vw;background:${cols[Math.floor(Math.random()*cols.length)]};`+
        `width:${8+Math.random()*10}px;height:${8+Math.random()*10}px;`+
        `animation-duration:${1.5+Math.random()*2}s;animation-delay:${Math.random()*.5}s;`;
      c.appendChild(p);
      setTimeout(()=>p.remove(),3600);
    },i*28);
  }
}
function showInningsTransition(runs,wkts,overs){
  const div=document.createElement("div");
  div.className="innings-transition";
  div.innerHTML=`<div style="text-align:center">
    <div style="font-size:1rem;margin-bottom:12px;">1st INNINGS COMPLETE</div>
    <div style="font-size:2.2rem;font-weight:900;color:#fff;">${runs}/${wkts}  (${overs} ov)</div>
    <div style="margin-top:12px;font-size:.9rem;color:var(--text-dim);">TARGET: ${runs+1}</div>
  </div>`;
  document.body.appendChild(div);
  setTimeout(()=>div.remove(),3200);
}
 
// ─── TOSS ─────────────────────────────────────────────────────────────────────
function doToss(){
  const btn=$("toss-btn"); const res=$("toss-result");
  btn.disabled=true;
  $("toss-coin").classList.add("spinning");
  setTimeout(()=>{
    $("toss-coin").classList.remove("spinning");
    // Who won toss
    const tosserKey = Math.random()<.5 ? state.teamA : state.teamB;
    const choice    = Math.random()<.5 ? "bat" : "bowl";
    const tw=TEAMS[tosserKey];
 
    // Batting team = toss winner if chose bat, else the other
    const battingKey = (choice==="bat") ? tosserKey
      : (tosserKey===state.teamA ? state.teamB : state.teamA);
 
    res.classList.remove("hidden");
    res.innerHTML=`${tw.flag} <strong>${tw.name}</strong> won the toss and elected to <strong>${choice} first</strong>.<br><br>
      🏏 ${TEAMS[state.teamA].flag} ${TEAMS[state.teamA].name} vs ${TEAMS[state.teamB].flag} ${TEAMS[state.teamB].name}`;
    $("toss-info-text").textContent=`${tw.name} won toss · elected to ${choice}`;
 
    // Apply toss — this sets inn1BatTeam, inn2BatTeam etc.
    applyTossResult(battingKey);
 
    btn.textContent="START MATCH";
    btn.disabled=false;
    btn.onclick=startMatch;
  },1400);
}
 
function startMatch(){
  $("toss-modal").classList.add("hidden");
  $("main-app").classList.remove("hidden");
  pickNextBowler("inn1");
  renderAll();
}
 
// ─── CONTROLS ─────────────────────────────────────────────────────────────────
$("btn-start").addEventListener("click",()=>{
  if(state.matchOver) return;
  $("btn-start").disabled=true;
  $("btn-next").disabled=false;
  $("btn-auto").disabled=false;
  $("btn-pause").disabled=false;
  simulateBall();
});
$("btn-next").addEventListener("click",()=>{ if(!state.matchOver) simulateBall(); });
$("btn-auto").addEventListener("click",()=>{
  if(autoTimer) return;
  $("btn-auto").disabled=true; $("btn-pause").disabled=false;
  autoTimer=setInterval(()=>{ if(state.matchOver){stopAuto();return;} simulateBall(); },800);
});
$("btn-pause").addEventListener("click",stopAuto);
$("btn-reset").addEventListener("click",()=>{
  stopAuto(); initState();
  $("toss-modal").classList.remove("hidden");
  $("main-app").classList.add("hidden");
  $("toss-result").classList.add("hidden");
  $("toss-btn").disabled=false;
  $("toss-btn").textContent="TOSS THE COIN";
  $("toss-btn").onclick=doToss;
  $("winner-modal").classList.add("hidden");
  $("commentary-feed").innerHTML=`<div class="commentary-item placeholder-comm"><span class="ball-icon">🏏</span>Welcome to T20 Live! Press START MATCH to begin.</div>`;
  $("btn-start").disabled=false;
  $("btn-next").disabled=true;
  $("btn-auto").disabled=true;
  $("btn-pause").disabled=true;
  $("balls-row").innerHTML="";
  $("batting-tbody").innerHTML=`<tr><td colspan="6" class="empty-row">Match not started</td></tr>`;
  $("bowling-tbody").innerHTML=`<tr><td colspan="6" class="empty-row">Match not started</td></tr>`;
  $("partnership-list").innerHTML=`<div class="empty-row">No partnerships yet</div>`;
  const wc=$("winner-card-inner"); if(wc) wc.style.borderColor="";
});
 
function stopAuto(){
  if(autoTimer){clearInterval(autoTimer);autoTimer=null;}
  $("btn-auto").disabled=false;
  $("btn-pause").disabled=true;
}
 
// ─── UTILITIES ────────────────────────────────────────────────────────────────
function $(id){ return document.getElementById(id); }
function weightedRandom(w){
  const tot=w.reduce((a,b)=>a+b,0); let r=Math.random()*tot,cum=0;
  for(let i=0;i<w.length;i++){cum+=w[i];if(r<=cum)return i;}
  return w.length-1;
}
function pick(arr){
  if(typeof arr==="function") return arr;
  return arr[Math.floor(Math.random()*arr.length)];
}
 
// ─── BOOT ─────────────────────────────────────────────────────────────────────
initState();
$("toss-btn").onclick=doToss;
 
/* ═══════════════════════════════════════════════════
   TAB SYSTEM
═══════════════════════════════════════════════════ */
 
// ── Tab switching ──────────────────────────────────
document.querySelectorAll(".tab-btn").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const target=btn.dataset.tab;
    // Deactivate all
    document.querySelectorAll(".tab-btn").forEach(b=>b.classList.remove("active"));
    document.querySelectorAll(".tab-panel").forEach(p=>p.classList.remove("active"));
    // Activate clicked
    btn.classList.add("active");
    document.getElementById("tab-"+target).classList.add("active");
    // Remove notification dot if any
    const dot=btn.querySelector(".tab-dot");
    if(dot) dot.remove();
    // Refresh data for that tab
    if(target==="scorecard")  renderScorecardTab();
    if(target==="stats")      renderStatsTab();
    if(target==="squad")      renderSquadTab();
    if(target==="commentary") scrollCommentaryTop();
  });
});
 
// ── Notify commentary tab when new ball ───────────
function notifyCommentaryTab(){
  const activeTab=document.querySelector(".tab-btn.active");
  if(activeTab && activeTab.dataset.tab==="commentary") return; // already viewing
  const commBtn=document.querySelector('[data-tab="commentary"]');
  if(commBtn && !commBtn.querySelector(".tab-dot")){
    const dot=document.createElement("span");
    dot.className="tab-dot";
    commBtn.appendChild(dot);
  }
}
 
function scrollCommentaryTop(){
  const feed=$("commentary-feed");
  if(feed) feed.scrollTop=0;
}
 
// ─── Hook renderAll to also refresh active tab ────
const _origRenderAll=renderAll;
window.renderAll=function(){
  _origRenderAll();
  notifyCommentaryTab();
  const active=document.querySelector(".tab-btn.active");
  if(!active) return;
  const t=active.dataset.tab;
  if(t==="scorecard") renderScorecardTab();
  if(t==="stats")     renderStatsTab();
};
 
/* ── SCORECARD TAB ───────────────────────────────── */
let scCurrentInning=1;
 
function showInnScorecard(num){
  scCurrentInning=num;
  $("sc-inn1").style.display = num===1?"block":"none";
  $("sc-inn2").style.display = num===2?"block":"none";
  $("inn-btn-1").classList.toggle("active", num===1);
  $("inn-btn-2").classList.toggle("active", num===2);
}
 
function renderScorecardTab(){
  renderOneScorecardInnings("inn1",1);
  renderOneScorecardInnings("inn2",2);
  // Team labels
  if(state.inn1BatTeam){
    $("sc-inn1-bat-team").textContent  = TEAMS[state.inn1BatTeam].name;
    $("sc-inn1-bowl-team").textContent = TEAMS[state.inn1BowlTeam].name;
  }
  if(state.inn2BatTeam){
    $("sc-inn2-bat-team").textContent  = TEAMS[state.inn2BatTeam].name;
    $("sc-inn2-bowl-team").textContent = TEAMS[state.inn2BowlTeam].name;
  }
}
 
function renderOneScorecardInnings(inn, num){
  const s=state[inn];
  const batTbody=$(`sc-${inn}-bat-tbody`);
  const bowlTbody=$(`sc-${inn}-bowl-tbody`);
 
  // Batting rows
  const played=s.batting.filter(b=>b.balls>0||b.out);
  if(played.length===0){
    batTbody.innerHTML=`<tr><td colspan="7" class="empty-row">Innings not started</td></tr>`;
  } else {
    batTbody.innerHTML="";
    played.forEach(b=>{
      const sr=b.balls>0?((b.runs/b.balls)*100).toFixed(1):"—";
      const status=b.out ? b.outDesc : (s.batting[s.strikerIdx]===b||s.batting[s.nonStrikerIdx]===b ? "batting*" : "dnb");
      const statusCol=b.out?"var(--neon-red)":status==="batting*"?"var(--neon-green)":"var(--text-dim)";
      const tr=document.createElement("tr");
      tr.innerHTML=`
        <td style="color:${b.out?"var(--text-dim)":"#fff"};font-weight:${b.out?"400":"600"}">${b.name}</td>
        <td style="color:${statusCol};font-size:.75rem">${status}</td>
        <td style="color:${b.out?"var(--text-dim)":"#fff"}">${b.runs}</td>
        <td>${b.balls}</td>
        <td style="color:var(--four-color)">${b.fours}</td>
        <td style="color:var(--six-color)">${b.sixes}</td>
        <td>${sr}</td>`;
      batTbody.appendChild(tr);
    });
  }
 
  // Extras & total
  const ext=s.extras||{wide:0,nb:0};
  $(`sc-${inn}-extras`).textContent=`Extras: ${ext.wide+ext.nb}  (Wd: ${ext.wide}, NB: ${ext.nb})`;
  $(`sc-${inn}-total`).textContent =`Total: ${s.runs}/${s.wickets}  (${Math.floor(s.balls/6)}.${s.balls%6} ov)`;
 
  // Bowling rows
  const activeBowlers=s.bowling.filter(b=>b.overs>0||b.balls>0);
  if(activeBowlers.length===0){
    bowlTbody.innerHTML=`<tr><td colspan="8" class="empty-row">No overs bowled</td></tr>`;
  } else {
    bowlTbody.innerHTML="";
    activeBowlers.forEach(b=>{
      const tb=b.overs*6+b.balls;
      const eco=tb>0?((b.runs/tb)*6).toFixed(2):"—";
      // estimate wides/nb per bowler (not tracked individually — show dash)
      const tr=document.createElement("tr");
      tr.innerHTML=`
        <td style="color:#fff;font-weight:600">${b.name}</td>
        <td>${b.overs}.${b.balls}</td>
        <td>${b.maidens}</td>
        <td>${b.runs}</td>
        <td style="color:var(--neon-red);font-weight:700">${b.wickets}</td>
        <td style="color:var(--neon-gold)">${eco}</td>
        <td style="color:var(--text-dim)">—</td>
        <td style="color:var(--text-dim)">—</td>`;
      bowlTbody.appendChild(tr);
    });
  }
}
 
/* ── COMMENTARY FILTER ───────────────────────────── */
let currentCommFilter="all";
 
function filterComm(btn, filter){
  currentCommFilter=filter;
  document.querySelectorAll(".comm-filter").forEach(b=>b.classList.remove("active"));
  btn.classList.add("active");
  applyCommFilter();
}
 
function applyCommFilter(){
  const items=document.querySelectorAll(".commentary-item");
  items.forEach(item=>{
    if(currentCommFilter==="all"){
      item.classList.remove("comm-hidden");
    } else {
      const matches=item.classList.contains(`comm-${currentCommFilter}`);
      item.classList.toggle("comm-hidden",!matches);
    }
  });
}
 
// Hook addCommentary to also apply filter
const _origAddComm=window.addCommentary||addCommentary;
 
/* ── STATS TAB ───────────────────────────────────── */
function renderStatsTab(){
  const allBatters=[
    ...state.inn1.batting.filter(b=>b.balls>0),
    ...state.inn2.batting.filter(b=>b.balls>0),
  ];
  const allBowlers=[
    ...state.inn1.bowling.filter(b=>b.overs>0||b.balls>0),
    ...state.inn2.bowling.filter(b=>b.overs>0||b.balls>0),
  ];
 
  // Top scorer
  if(allBatters.length>0){
    const top=allBatters.reduce((a,b)=>a.runs>=b.runs?a:b);
    const el=$("stat-top-scorer");
    el.querySelector(".perf-name").textContent=top.name;
    el.querySelector(".perf-val").textContent=top.runs;
    el.querySelector(".perf-sub").textContent=`${top.balls} balls · SR ${top.balls>0?((top.runs/top.balls)*100).toFixed(1):0}`;
  }
 
  // Top wicket taker
  if(allBowlers.length>0){
    const top=allBowlers.reduce((a,b)=>a.wickets>=b.wickets?a:b);
    const tb=top.overs*6+top.balls;
    const eco=tb>0?((top.runs/tb)*6).toFixed(2):"—";
    const el=$("stat-top-bowler");
    el.querySelector(".perf-name").textContent=top.name;
    el.querySelector(".perf-val").textContent=top.wickets+"W";
    el.querySelector(".perf-sub").textContent=`${top.overs}.${top.balls} ov · ECO ${eco}`;
  }
 
  // Most sixes
  if(allBatters.length>0){
    const top=allBatters.reduce((a,b)=>a.sixes>=b.sixes?a:b);
    const el=$("stat-most-sixes");
    el.querySelector(".perf-name").textContent=top.name;
    el.querySelector(".perf-val").textContent=top.sixes+"🚀";
    el.querySelector(".perf-sub").textContent=`Also hit ${top.fours} fours`;
  }
 
  // Best economy (min 2 overs)
  const qualBowlers=allBowlers.filter(b=>b.overs>=2);
  if(qualBowlers.length>0){
    const top=qualBowlers.reduce((a,b)=>{
      const ecoA=(a.overs*6+a.balls)>0?(a.runs/(a.overs*6+a.balls)*6):99;
      const ecoB=(b.overs*6+b.balls)>0?(b.runs/(b.overs*6+b.balls)*6):99;
      return ecoA<=ecoB?a:b;
    });
    const tb=top.overs*6+top.balls;
    const eco=tb>0?((top.runs/tb)*6).toFixed(2):"—";
    const el=$("stat-best-eco");
    el.querySelector(".perf-name").textContent=top.name;
    el.querySelector(".perf-val").textContent=eco;
    el.querySelector(".perf-sub").textContent=`${top.overs}.${top.balls} ov · ${top.wickets}W`;
  }
 
  // Over-by-over table
  $("ov-team-a-hd").textContent=state.inn1BatTeam?TEAMS[state.inn1BatTeam].short:"INN 1";
  $("ov-team-b-hd").textContent=state.inn2BatTeam?TEAMS[state.inn2BatTeam].short:"INN 2";
  const tbody=$("over-breakdown-tbody");
  tbody.innerHTML="";
  const maxOvers=Math.max(state.inn1.overRuns.length, state.inn2.overRuns.length, 1);
  for(let i=0;i<maxOvers;i++){
    const a=state.inn1.overRuns[i];
    const b=state.inn2.overRuns[i];
    const tr=document.createElement("tr");
    tr.innerHTML=`
      <td class="ov-num" style="text-align:center;color:var(--text-dim)">${i+1}</td>
      <td class="ov-a"   style="text-align:center">${a!==undefined?a:"—"}</td>
      <td class="ov-b"   style="text-align:center">${b!==undefined?b:"—"}</td>`;
    tbody.appendChild(tr);
  }
  if(maxOvers<=1 && state.inn1.overRuns.length===0){
    tbody.innerHTML=`<tr><td colspan="3" class="empty-row">Match not started</td></tr>`;
  }
 
  // Summary bars
  renderSummaryBars(allBatters, allBowlers);
}
 
function renderSummaryBars(batters, bowlers){
  const el=$("summary-bars");
  if(batters.length===0){ el.innerHTML=`<div class="empty-row">Match not started</div>`; return; }
 
  const totalRuns=(state.inn1.runs||0)+(state.inn2.runs||0);
  const totalBalls=(state.inn1.balls||0)+(state.inn2.balls||0);
  const totalFours=batters.reduce((s,b)=>s+b.fours,0);
  const totalSixes=batters.reduce((s,b)=>s+b.sixes,0);
  const totalWickets=(state.inn1.wickets||0)+(state.inn2.wickets||0);
 
  const bars=[
    {label:"TOTAL RUNS",  val:totalRuns,   max:400, cls:"sbar-blue",   unit:""},
    {label:"TOTAL BALLS", val:totalBalls,  max:240, cls:"sbar-green",  unit:""},
    {label:"FOURS HIT",   val:totalFours,  max:50,  cls:"sbar-gold",   unit:"🔥"},
    {label:"SIXES HIT",   val:totalSixes,  max:30,  cls:"sbar-orange", unit:"🚀"},
    {label:"WICKETS",     val:totalWickets,max:20,  cls:"sbar-red",    unit:"🥎"},
  ];
 
  el.innerHTML="";
  bars.forEach(b=>{
    const pct=Math.min(100,(b.val/b.max)*100).toFixed(1);
    const row=document.createElement("div");
    row.className="summary-row";
    row.innerHTML=`
      <span class="summary-label">${b.label}</span>
      <div class="summary-bar-wrap">
        <div class="summary-bar ${b.cls}" style="width:${pct}%">${b.val>5?b.val:""}</div>
      </div>
      <span class="summary-val">${b.val}${b.unit}</span>`;
    el.appendChild(row);
  });
}
 
/* ── SQUAD TAB ───────────────────────────────────── */
function renderSquadTab(){
  if(!state.teamA) return;
 
  $("squad-a-flag").textContent=TEAMS[state.teamA].flag;
  $("squad-a-name").textContent=TEAMS[state.teamA].name+" SQUAD";
  $("squad-b-flag").textContent=TEAMS[state.teamB].flag;
  $("squad-b-name").textContent=TEAMS[state.teamB].name+" SQUAD";
 
  renderOneSquad(state.teamA,"squad-a-grid","inn1");
  renderOneSquad(state.teamB,"squad-b-grid","inn2");
}
 
function renderOneSquad(teamKey, gridId, battingInn){
  const grid=$(gridId); grid.innerHTML="";
  const team=TEAMS[teamKey];
  const batters=team.batters;
  const bowlerNames=team.bowlers.map(b=>b.name);
 
  batters.forEach((p,idx)=>{
    // Determine role
    const isBowler=bowlerNames.includes(p.name);
    const isWK=(p.name.includes("Pant")||p.name.includes("Wade"));
    let role="BAT", roleClass="squad-role-bat", emoji="🏏";
    if(isWK)               { role="WK-BAT"; roleClass="squad-role-wk";   emoji="🧤"; }
    else if(p.style==="tail"){ role="BOWL";  roleClass="squad-role-bowl"; emoji="🎯"; }
    else if(isBowler)       { role="ALL";    roleClass="squad-role-all";  emoji="⭐"; }
 
    // Live stats from innings data
    let liveStats="";
    const batInn=state[battingInn];
    const batObj=batInn.batting.find(b=>b.name===p.name);
    if(batObj && batObj.balls>0){
      liveStats=`${batObj.runs}(${batObj.balls}) · ${batObj.fours}×4 ${batObj.sixes}×6`;
    }
 
    // Captain / Vice Captain (first two batters)
    const isCap=idx===0, isVC=idx===1;
    const capBadge=isCap?`<div class="squad-cap-badge">CAPTAIN</div>`:isVC?`<div class="squad-cap-badge">VICE-C</div>`:"";
 
    const card=document.createElement("div");
    card.className="squad-player-card";
    card.innerHTML=`
      <div class="squad-avatar ${roleClass}">${emoji}</div>
      <div class="squad-pname">${p.name}</div>
      <div class="squad-style style-${p.style}">${p.style.toUpperCase()}</div>
      ${capBadge}
      <div class="squad-stats-live">${liveStats}</div>`;
    grid.appendChild(card);
  });
}
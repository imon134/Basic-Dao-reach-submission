// Automatically generated with Reach 0.1.11 (27cb9643)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (27cb9643)';
export const _backendVersion = 19;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      7: [ctc0, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1, ctc1],
      8: [ctc0, ctc1, ctc0, ctc1, ctc1, ctc1],
      9: [ctc0, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Admin(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Admin expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Tuple([ctc0]);
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc4 = stdlib.T_Bool;
  
  
  const v399 = stdlib.protect(ctc0, await interact.MaxFunds(), {
    at: './index.rsh:21:46:application',
    fs: ['at ./index.rsh:20:13:application call to [unknown function] (defined at: ./index.rsh:20:17:function exp)'],
    msg: 'MaxFunds',
    who: 'Admin'
    });
  const v400 = stdlib.protect(ctc0, await interact.deadline_proposers(), {
    at: './index.rsh:22:55:application',
    fs: ['at ./index.rsh:20:13:application call to [unknown function] (defined at: ./index.rsh:20:17:function exp)'],
    msg: 'deadline_proposers',
    who: 'Admin'
    });
  const v401 = stdlib.protect(ctc0, await interact.deadline_voters(), {
    at: './index.rsh:23:52:application',
    fs: ['at ./index.rsh:20:13:application call to [unknown function] (defined at: ./index.rsh:20:17:function exp)'],
    msg: 'deadline_voters',
    who: 'Admin'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v399, v400, v401],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:25:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:25:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v403, v404, v405], secs: v407, time: v406, didSend: v31, from: v402 } = txn1;
      
      ;
      const v408 = stdlib.checkedBigNumberify('./index.rsh:27:31:decimal', stdlib.UInt_max, '0');
      const v409 = stdlib.checkedBigNumberify('./index.rsh:27:21:decimal', stdlib.UInt_max, '0');
      const v410 = v402;
      const v411 = v406;
      const v414 = stdlib.checkedBigNumberify('./index.rsh:18:3:after expr stmt', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v417 = stdlib.lt(v408, stdlib.checkedBigNumberify('./index.rsh:29:18:decimal', stdlib.UInt_max, '1'));
        
        return v417;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v445 = stdlib.checkedBigNumberify('./index.rsh:43:21:decimal', stdlib.UInt_max, '0');
        const v447 = stdlib.checkedBigNumberify('./index.rsh:43:31:decimal', stdlib.UInt_max, '0');
        const v448 = v411;
        const v451 = v414;
        
        if (await (async () => {
          const v454 = stdlib.lt(v447, stdlib.checkedBigNumberify('./index.rsh:45:18:decimal', stdlib.UInt_max, '1'));
          
          return v454;})()) {
          sim_r.isHalt = false;
          }
        else {
          const v482 = stdlib.checkedBigNumberify('./index.rsh:58:30:decimal', stdlib.UInt_max, '0');
          const v484 = stdlib.checkedBigNumberify('./index.rsh:58:21:decimal', stdlib.UInt_max, '0');
          const v485 = stdlib.checkedBigNumberify('./index.rsh:58:24:decimal', stdlib.UInt_max, '0');
          const v486 = v448;
          const v489 = v451;
          
          if (await (async () => {
            const v492 = stdlib.lt(v482, stdlib.checkedBigNumberify('./index.rsh:60:18:decimal', stdlib.UInt_max, '5'));
            
            return v492;})()) {
            sim_r.isHalt = false;
            }
          else {
            const v547 = stdlib.gt(v484, v485);
            if (v547) {
              sim_r.txns.push({
                kind: 'from',
                to: v410,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }
            else {
              const v555 = stdlib.gt(v485, v484);
              if (v555) {
                sim_r.txns.push({
                  kind: 'from',
                  to: v410,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }
              else {
                sim_r.txns.push({
                  kind: 'from',
                  to: v402,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}}}}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v403, v404, v405], secs: v407, time: v406, didSend: v31, from: v402 } = txn1;
  ;
  let v408 = stdlib.checkedBigNumberify('./index.rsh:27:31:decimal', stdlib.UInt_max, '0');
  let v409 = stdlib.checkedBigNumberify('./index.rsh:27:21:decimal', stdlib.UInt_max, '0');
  let v410 = v402;
  let v411 = v406;
  let v414 = stdlib.checkedBigNumberify('./index.rsh:18:3:after expr stmt', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v417 = stdlib.lt(v408, stdlib.checkedBigNumberify('./index.rsh:29:18:decimal', stdlib.UInt_max, '1'));
    
    return v417;})()) {
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc1],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v429], secs: v431, time: v430, didSend: v105, from: v428 } = txn2;
    undefined /* setApiDetails */;
    const v433 = v429[stdlib.checkedBigNumberify('./index.rsh:30:11:spread', stdlib.UInt_max, '0')];
    ;
    const v435 = null;
    await txn2.getOutput('Proposer1_idea', 'v435', ctc2, v435);
    const v442 = stdlib.safeAdd(v409, v433);
    const v443 = stdlib.safeAdd(v408, stdlib.checkedBigNumberify('./index.rsh:40:42:decimal', stdlib.UInt_max, '1'));
    const cv408 = v443;
    const cv409 = v442;
    const cv410 = v428;
    const cv411 = v430;
    const cv414 = v414;
    
    v408 = cv408;
    v409 = cv409;
    v410 = cv410;
    v411 = cv411;
    v414 = cv414;
    
    continue;
    
    }
  let v445 = stdlib.checkedBigNumberify('./index.rsh:43:21:decimal', stdlib.UInt_max, '0');
  let v447 = stdlib.checkedBigNumberify('./index.rsh:43:31:decimal', stdlib.UInt_max, '0');
  let v448 = v411;
  let v451 = v414;
  
  while (await (async () => {
    const v454 = stdlib.lt(v447, stdlib.checkedBigNumberify('./index.rsh:45:18:decimal', stdlib.UInt_max, '1'));
    
    return v454;})()) {
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc1],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v466], secs: v468, time: v467, didSend: v192, from: v465 } = txn2;
    undefined /* setApiDetails */;
    const v470 = v466[stdlib.checkedBigNumberify('./index.rsh:46:11:spread', stdlib.UInt_max, '0')];
    ;
    const v472 = null;
    await txn2.getOutput('Proposer2_idea', 'v472', ctc2, v472);
    const v479 = stdlib.safeAdd(v445, v470);
    const v480 = stdlib.safeAdd(v447, stdlib.checkedBigNumberify('./index.rsh:55:42:decimal', stdlib.UInt_max, '1'));
    const cv445 = v479;
    const cv447 = v480;
    const cv448 = v467;
    const cv451 = v451;
    
    v445 = cv445;
    v447 = cv447;
    v448 = cv448;
    v451 = cv451;
    
    continue;
    
    }
  let v482 = stdlib.checkedBigNumberify('./index.rsh:58:30:decimal', stdlib.UInt_max, '0');
  let v484 = stdlib.checkedBigNumberify('./index.rsh:58:21:decimal', stdlib.UInt_max, '0');
  let v485 = stdlib.checkedBigNumberify('./index.rsh:58:24:decimal', stdlib.UInt_max, '0');
  let v486 = v448;
  let v489 = v451;
  
  while (await (async () => {
    const v492 = stdlib.lt(v482, stdlib.checkedBigNumberify('./index.rsh:60:18:decimal', stdlib.UInt_max, '5'));
    
    return v492;})()) {
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc3],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v509], secs: v511, time: v510, didSend: v320, from: v508 } = txn2;
    undefined /* setApiDetails */;
    const v513 = v509[stdlib.checkedBigNumberify('./index.rsh:61:11:spread', stdlib.UInt_max, '0')];
    const v514 = v509[stdlib.checkedBigNumberify('./index.rsh:61:11:spread', stdlib.UInt_max, '1')];
    const v516 = stdlib.safeAdd(v489, v513);
    ;
    const v519 = true;
    await txn2.getOutput('Voters_action', 'v519', ctc4, v519);
    const v527 = stdlib.eq(v514, v409);
    const v528 = stdlib.eq(v514, v445);
    const v529 = v528 ? false : true;
    const v530 = v527 ? v529 : false;
    const v533 = v527 ? false : true;
    const v534 = v528 ? v533 : false;
    const v535 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
    const v536 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
    const v537 = v534 ? v535 : v536;
    const v538 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
    const v539 = v530 ? v538 : v537;
    const v540 = v539[stdlib.checkedBigNumberify('./index.rsh:69:17:array', stdlib.UInt_max, '0')];
    const v541 = v539[stdlib.checkedBigNumberify('./index.rsh:69:17:array', stdlib.UInt_max, '1')];
    const v542 = stdlib.safeAdd(v484, v540);
    const v543 = stdlib.safeAdd(v485, v541);
    const v545 = stdlib.safeAdd(v482, stdlib.checkedBigNumberify('./index.rsh:73:87:decimal', stdlib.UInt_max, '1'));
    const cv482 = v545;
    const cv484 = v542;
    const cv485 = v543;
    const cv486 = v510;
    const cv489 = v516;
    
    v482 = cv482;
    v484 = cv484;
    v485 = cv485;
    v486 = cv486;
    v489 = cv489;
    
    continue;
    
    }
  const v547 = stdlib.gt(v484, v485);
  if (v547) {
    ;
    return;
    }
  else {
    const v555 = stdlib.gt(v485, v484);
    if (v555) {
      ;
      return;
      }
    else {
      ;
      return;
      }}
  
  };
export async function _Proposer1_idea9(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Proposer1_idea9 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Proposer1_idea9 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([ctc1]);
  const ctc3 = stdlib.T_Null;
  
  
  const [v402, v408, v409, v414] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'), [ctc0, ctc1, ctc1, ctc1]);
  const v420 = stdlib.protect(ctc2, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:32:16:application call to [unknown function] (defined at: ./index.rsh:32:16:function exp)', 'at ./index.rsh:32:16:application call to [unknown function] (defined at: ./index.rsh:32:16:function exp)'],
    msg: 'in',
    who: 'Proposer1_idea'
    });
  const v421 = v420[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v424 = stdlib.gt(v421, stdlib.checkedBigNumberify('./index.rsh:33:24:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v424, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:33:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:32:16:application call to [unknown function] (defined at: ./index.rsh:32:16:function exp)', 'at ./index.rsh:32:16:application call to [unknown function] (defined at: ./index.rsh:32:16:function exp)', 'at ./index.rsh:32:16:application call to [unknown function] (defined at: ./index.rsh:32:16:function exp)'],
    msg: null,
    who: 'Proposer1_idea'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v402, v408, v409, v414, v420],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:35:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v429], secs: v431, time: v430, didSend: v105, from: v428 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Proposer1_idea"
        });
      const v433 = v429[stdlib.checkedBigNumberify('./index.rsh:30:11:spread', stdlib.UInt_max, '0')];
      ;
      const v435 = null;
      const v436 = await txn1.getOutput('Proposer1_idea', 'v435', ctc3, v435);
      
      const v442 = stdlib.safeAdd(v409, v433);
      const v443 = stdlib.safeAdd(v408, stdlib.checkedBigNumberify('./index.rsh:40:42:decimal', stdlib.UInt_max, '1'));
      const v684 = v443;
      const v685 = v442;
      const v686 = v428;
      const v688 = v414;
      const v689 = stdlib.lt(v443, stdlib.checkedBigNumberify('./index.rsh:29:18:decimal', stdlib.UInt_max, '1'));
      if (v689) {
        sim_r.isHalt = false;
        }
      else {
        const v739 = stdlib.checkedBigNumberify('./index.rsh:43:21:decimal', stdlib.UInt_max, '0');
        const v740 = stdlib.checkedBigNumberify('./index.rsh:43:31:decimal', stdlib.UInt_max, '0');
        const v742 = v414;
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc1, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v429], secs: v431, time: v430, didSend: v105, from: v428 } = txn1;
  undefined /* setApiDetails */;
  const v433 = v429[stdlib.checkedBigNumberify('./index.rsh:30:11:spread', stdlib.UInt_max, '0')];
  ;
  const v435 = null;
  const v436 = await txn1.getOutput('Proposer1_idea', 'v435', ctc3, v435);
  if (v105) {
    stdlib.protect(ctc3, await interact.out(v429, v436), {
      at: './index.rsh:31:9:application',
      fs: ['at ./index.rsh:31:9:application call to [unknown function] (defined at: ./index.rsh:31:9:function exp)', 'at ./index.rsh:37:12:application call to "k" (defined at: ./index.rsh:36:19:function exp)', 'at ./index.rsh:36:19:application call to [unknown function] (defined at: ./index.rsh:36:19:function exp)'],
      msg: 'out',
      who: 'Proposer1_idea'
      });
    }
  else {
    }
  
  const v442 = stdlib.safeAdd(v409, v433);
  const v443 = stdlib.safeAdd(v408, stdlib.checkedBigNumberify('./index.rsh:40:42:decimal', stdlib.UInt_max, '1'));
  const v684 = v443;
  const v685 = v442;
  const v686 = v428;
  const v688 = v414;
  const v689 = stdlib.lt(v443, stdlib.checkedBigNumberify('./index.rsh:29:18:decimal', stdlib.UInt_max, '1'));
  if (v689) {
    return;
    }
  else {
    const v739 = stdlib.checkedBigNumberify('./index.rsh:43:21:decimal', stdlib.UInt_max, '0');
    const v740 = stdlib.checkedBigNumberify('./index.rsh:43:31:decimal', stdlib.UInt_max, '0');
    const v742 = v414;
    return;
    }
  
  
  };
export async function _Proposer2_idea8(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Proposer2_idea8 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Proposer2_idea8 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([ctc1]);
  const ctc3 = stdlib.T_Null;
  
  
  const [v402, v409, v410, v445, v447, v451] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'), [ctc0, ctc1, ctc0, ctc1, ctc1, ctc1]);
  const v457 = stdlib.protect(ctc2, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:48:16:application call to [unknown function] (defined at: ./index.rsh:48:16:function exp)', 'at ./index.rsh:48:16:application call to [unknown function] (defined at: ./index.rsh:48:16:function exp)'],
    msg: 'in',
    who: 'Proposer2_idea'
    });
  const v458 = v457[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v461 = stdlib.gt(v458, stdlib.checkedBigNumberify('./index.rsh:49:24:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v461, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:49:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:48:16:application call to [unknown function] (defined at: ./index.rsh:48:16:function exp)', 'at ./index.rsh:48:16:application call to [unknown function] (defined at: ./index.rsh:48:16:function exp)', 'at ./index.rsh:48:16:application call to [unknown function] (defined at: ./index.rsh:48:16:function exp)'],
    msg: null,
    who: 'Proposer2_idea'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v402, v409, v410, v445, v447, v451, v457],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:51:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v466], secs: v468, time: v467, didSend: v192, from: v465 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Proposer2_idea"
        });
      const v470 = v466[stdlib.checkedBigNumberify('./index.rsh:46:11:spread', stdlib.UInt_max, '0')];
      ;
      const v472 = null;
      const v473 = await txn1.getOutput('Proposer2_idea', 'v472', ctc3, v472);
      
      const v479 = stdlib.safeAdd(v445, v470);
      const v480 = stdlib.safeAdd(v447, stdlib.checkedBigNumberify('./index.rsh:55:42:decimal', stdlib.UInt_max, '1'));
      const v786 = v479;
      const v787 = v480;
      const v789 = v451;
      const v790 = stdlib.lt(v480, stdlib.checkedBigNumberify('./index.rsh:45:18:decimal', stdlib.UInt_max, '1'));
      if (v790) {
        sim_r.isHalt = false;
        }
      else {
        const v825 = stdlib.checkedBigNumberify('./index.rsh:58:30:decimal', stdlib.UInt_max, '0');
        const v826 = stdlib.checkedBigNumberify('./index.rsh:58:21:decimal', stdlib.UInt_max, '0');
        const v827 = stdlib.checkedBigNumberify('./index.rsh:58:24:decimal', stdlib.UInt_max, '0');
        const v829 = v451;
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc0, ctc1, ctc1, ctc1, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v466], secs: v468, time: v467, didSend: v192, from: v465 } = txn1;
  undefined /* setApiDetails */;
  const v470 = v466[stdlib.checkedBigNumberify('./index.rsh:46:11:spread', stdlib.UInt_max, '0')];
  ;
  const v472 = null;
  const v473 = await txn1.getOutput('Proposer2_idea', 'v472', ctc3, v472);
  if (v192) {
    stdlib.protect(ctc3, await interact.out(v466, v473), {
      at: './index.rsh:47:9:application',
      fs: ['at ./index.rsh:47:9:application call to [unknown function] (defined at: ./index.rsh:47:9:function exp)', 'at ./index.rsh:53:12:application call to "k" (defined at: ./index.rsh:52:19:function exp)', 'at ./index.rsh:52:19:application call to [unknown function] (defined at: ./index.rsh:52:19:function exp)'],
      msg: 'out',
      who: 'Proposer2_idea'
      });
    }
  else {
    }
  
  const v479 = stdlib.safeAdd(v445, v470);
  const v480 = stdlib.safeAdd(v447, stdlib.checkedBigNumberify('./index.rsh:55:42:decimal', stdlib.UInt_max, '1'));
  const v786 = v479;
  const v787 = v480;
  const v789 = v451;
  const v790 = stdlib.lt(v480, stdlib.checkedBigNumberify('./index.rsh:45:18:decimal', stdlib.UInt_max, '1'));
  if (v790) {
    return;
    }
  else {
    const v825 = stdlib.checkedBigNumberify('./index.rsh:58:30:decimal', stdlib.UInt_max, '0');
    const v826 = stdlib.checkedBigNumberify('./index.rsh:58:21:decimal', stdlib.UInt_max, '0');
    const v827 = stdlib.checkedBigNumberify('./index.rsh:58:24:decimal', stdlib.UInt_max, '0');
    const v829 = v451;
    return;
    }
  
  
  };
export async function _Voters_action7(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Voters_action7 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Voters_action7 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Null;
  
  
  const [v402, v409, v410, v445, v482, v484, v485, v489] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc0, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1, ctc1]);
  const v495 = stdlib.protect(ctc2, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:62:16:application call to [unknown function] (defined at: ./index.rsh:62:16:function exp)', 'at ./index.rsh:62:16:application call to [unknown function] (defined at: ./index.rsh:62:16:function exp)'],
    msg: 'in',
    who: 'Voters_action'
    });
  const v496 = v495[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v497 = v495[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v501 = stdlib.gt(v496, stdlib.checkedBigNumberify('./index.rsh:63:21:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v501, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:63:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:62:16:application call to [unknown function] (defined at: ./index.rsh:62:16:function exp)', 'at ./index.rsh:62:16:application call to [unknown function] (defined at: ./index.rsh:62:16:function exp)', 'at ./index.rsh:62:16:application call to [unknown function] (defined at: ./index.rsh:62:16:function exp)'],
    msg: null,
    who: 'Voters_action'
    });
  const v503 = stdlib.gt(v497, stdlib.checkedBigNumberify('./index.rsh:64:21:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v503, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:64:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:62:16:application call to [unknown function] (defined at: ./index.rsh:62:16:function exp)', 'at ./index.rsh:62:16:application call to [unknown function] (defined at: ./index.rsh:62:16:function exp)', 'at ./index.rsh:62:16:application call to [unknown function] (defined at: ./index.rsh:62:16:function exp)'],
    msg: null,
    who: 'Voters_action'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v402, v409, v410, v445, v482, v484, v485, v489, v495],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2],
    pay: [v496, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v509], secs: v511, time: v510, didSend: v320, from: v508 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Voters_action"
        });
      const v513 = v509[stdlib.checkedBigNumberify('./index.rsh:61:11:spread', stdlib.UInt_max, '0')];
      const v514 = v509[stdlib.checkedBigNumberify('./index.rsh:61:11:spread', stdlib.UInt_max, '1')];
      const v516 = stdlib.safeAdd(v489, v513);
      sim_r.txns.push({
        amt: v513,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v519 = true;
      const v520 = await txn1.getOutput('Voters_action', 'v519', ctc3, v519);
      
      const v527 = stdlib.eq(v514, v409);
      const v528 = stdlib.eq(v514, v445);
      const v529 = v528 ? false : true;
      const v530 = v527 ? v529 : false;
      const v533 = v527 ? false : true;
      const v534 = v528 ? v533 : false;
      const v535 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
      const v536 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v537 = v534 ? v535 : v536;
      const v538 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v539 = v530 ? v538 : v537;
      const v540 = v539[stdlib.checkedBigNumberify('./index.rsh:69:17:array', stdlib.UInt_max, '0')];
      const v541 = v539[stdlib.checkedBigNumberify('./index.rsh:69:17:array', stdlib.UInt_max, '1')];
      const v542 = stdlib.safeAdd(v484, v540);
      const v543 = stdlib.safeAdd(v485, v541);
      const v545 = stdlib.safeAdd(v482, stdlib.checkedBigNumberify('./index.rsh:73:87:decimal', stdlib.UInt_max, '1'));
      const v833 = v545;
      const v834 = v542;
      const v835 = v543;
      const v837 = v516;
      const v838 = stdlib.lt(v545, stdlib.checkedBigNumberify('./index.rsh:60:18:decimal', stdlib.UInt_max, '5'));
      if (v838) {
        sim_r.isHalt = false;
        }
      else {
        const v839 = stdlib.gt(v542, v543);
        if (v839) {
          sim_r.txns.push({
            kind: 'from',
            to: v410,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }
        else {
          const v840 = stdlib.gt(v543, v542);
          if (v840) {
            sim_r.txns.push({
              kind: 'from',
              to: v410,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v402,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}}
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v509], secs: v511, time: v510, didSend: v320, from: v508 } = txn1;
  undefined /* setApiDetails */;
  const v513 = v509[stdlib.checkedBigNumberify('./index.rsh:61:11:spread', stdlib.UInt_max, '0')];
  const v514 = v509[stdlib.checkedBigNumberify('./index.rsh:61:11:spread', stdlib.UInt_max, '1')];
  const v516 = stdlib.safeAdd(v489, v513);
  ;
  const v519 = true;
  const v520 = await txn1.getOutput('Voters_action', 'v519', ctc3, v519);
  if (v320) {
    stdlib.protect(ctc4, await interact.out(v509, v520), {
      at: './index.rsh:61:12:application',
      fs: ['at ./index.rsh:61:12:application call to [unknown function] (defined at: ./index.rsh:61:12:function exp)', 'at ./index.rsh:68:12:application call to "k" (defined at: ./index.rsh:67:19:function exp)', 'at ./index.rsh:67:19:application call to [unknown function] (defined at: ./index.rsh:67:19:function exp)'],
      msg: 'out',
      who: 'Voters_action'
      });
    }
  else {
    }
  
  const v527 = stdlib.eq(v514, v409);
  const v528 = stdlib.eq(v514, v445);
  const v529 = v528 ? false : true;
  const v530 = v527 ? v529 : false;
  const v533 = v527 ? false : true;
  const v534 = v528 ? v533 : false;
  const v535 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
  const v536 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v537 = v534 ? v535 : v536;
  const v538 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v539 = v530 ? v538 : v537;
  const v540 = v539[stdlib.checkedBigNumberify('./index.rsh:69:17:array', stdlib.UInt_max, '0')];
  const v541 = v539[stdlib.checkedBigNumberify('./index.rsh:69:17:array', stdlib.UInt_max, '1')];
  const v542 = stdlib.safeAdd(v484, v540);
  const v543 = stdlib.safeAdd(v485, v541);
  const v545 = stdlib.safeAdd(v482, stdlib.checkedBigNumberify('./index.rsh:73:87:decimal', stdlib.UInt_max, '1'));
  const v833 = v545;
  const v834 = v542;
  const v835 = v543;
  const v837 = v516;
  const v838 = stdlib.lt(v545, stdlib.checkedBigNumberify('./index.rsh:60:18:decimal', stdlib.UInt_max, '5'));
  if (v838) {
    return;
    }
  else {
    const v839 = stdlib.gt(v542, v543);
    if (v839) {
      ;
      return;
      }
    else {
      const v840 = stdlib.gt(v543, v542);
      if (v840) {
        ;
        return;
        }
      else {
        ;
        return;
        }}}
  
  
  };
export async function Proposer1_idea(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Proposer1_idea expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Proposer1_idea expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 9) {return _Proposer1_idea9(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Proposer2_idea(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Proposer2_idea expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Proposer2_idea expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 8) {return _Proposer2_idea8(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Voters_action(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Voters_action expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Voters_action expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 7) {return _Voters_action7(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Proposer1_idea(uint64)byte[0]`, `Proposer2_idea(uint64)byte[0]`, `Voters_action(uint64,uint64)byte`],
    pure: [],
    sigs: [`Proposer1_idea(uint64)byte[0]`, `Proposer2_idea(uint64)byte[0]`, `Voters_action(uint64,uint64)byte`]
    },
  appApproval: `BiAOAAEIBSD2goihB+D9v5IOBglIUFgHECYCAQAAIjUAMRhBA6opZEkiWzUBJFs1AjYaABdJQQA5IjUEIzUGSSEFDEAAG0khBgxAAAohBhJENhoBQgCNIQUSRDYaAUIAL4GVkJFIEkQ2GgE2GgJQQgDUNhoCFzUENhoDNhoBF0klDEAAuUkhBwxAAFchBxJEIQg0ARJENARJIhJMNAISEUQoZDUDSTUFNf+ABHR4qCQ0/1CwgAgAAAAAAAABs7ApNQc0A1cAIDQDIQRbIwg0A4EoWzT/FwgxADIGNAOBMFtCAXtIJDQBEkQ0BEkiEkw0AhIRRChkNQNJNQU1/4AEQbs9fTT/ULCACAAAAAAAAAHYsCk1BzQDVwAgNAMhBFs0A1coIDQDIQlbNP8XCDQDIQpbIwgyBjQDIQtbQgFjSYEEDEAAzkghDDQBEkQ0BEkiEkw0AhIRRChkSTUDSSEEWzX/IQlbNf5JNQU1/YAEgKq48DT9ULA0/SJbNfw0/SRbNfs0/IgCZ4AJAAAAAAAAAgcBsIABATUHNPs0/xI1+jT7NP4SNfkhDa+AEAAAAAAAAAAAAAAAAAAAAAE0+TT6FBBNgBAAAAAAAAAAAQAAAAAAAAAANPo0+RQQTTX4NANXACA0/zQDVyggNP40AyEKWyMINAMhC1s0+CJbCDQDgWBbNPgkWwgyBjQDgWhbNPwIQgDcIhJEgaCNBogB0SI0ARJENARJIhJMNAISEURJNQVJSSJbNf8kWzX+IQ1bNf2ABPdxE000/xZQNP4WUDT9FlCwMQAiIjEAMgYiQgAANf81/jX9Nfw1+zX6NPsjDEEAITT6NPsWUDT8FlA0/xZQKEsBVwA4Z0ghCDUBMgY1AkIBCjT6NPw0/SIiNP40/0IAADX/Nf41/TX8Nfs1+jX5NP0jDEEAJzT5NPoWUDT7UDT8FlA0/RZQNP8WUChLAVcAYGdIJDUBMgY1AkIAvzT5NPo0+zT8IiIiNP40/0IAADX/Nf41/TX8Nfs1+jX5Nfg19zT7JQxBADA09zT4FlA0+VA0+hZQNPsWUDT8FlA0/RZQNP8WUChLAVcAcGdIIQw1ATIGNQJCAGQ0/DT9DUEAE7EisgE0/7III7IQNPmyB7NCAC40/TT8DUEAE7EisgE0/7III7IQNPmyB7NCABOxIrIBNP+yCCOyEDT3sgezQgAAMRklEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEgQIxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 112,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v403",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v404",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v405",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v403",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v404",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v405",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "elem1",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T14",
                "name": "v509",
                "type": "tuple"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T17",
                "name": "v466",
                "type": "tuple"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T17",
                "name": "v429",
                "type": "tuple"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T21",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v435",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v472",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v519",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "Proposer1_idea",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "Proposer2_idea",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_a1",
        "type": "uint256"
      }
    ],
    "name": "Voters_action",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "elem1",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T14",
                "name": "v509",
                "type": "tuple"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T17",
                "name": "v466",
                "type": "tuple"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T17",
                "name": "v429",
                "type": "tuple"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T21",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620020c4380380620020c483398101604081905262000026916200085d565b600080554360035560408051338152825160208083019190915280840151805183850152908101516060830152820151608082015290517fe875e0d974175d3036d72bf8b57156a0f70f8e5f5279acd8e22aae589e0748e69181900360a00190a1620000953415600762000121565b620000da604080516060808201835260008284018181528352835160a08101855281815260208181018390529481018290529182018190526080820152909182015290565b8051339081905260208083018051600090819052815190920182905280516040019290925281514360609091015290516080015262000119816200014b565b505062000931565b81620001475760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6020810151516001111562000233576200018f604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b8151516001600160a01b031681526020808301805151828401528051820151604080850191909152905160800151606084015260096000554360015551620002089183910181516001600160a01b0316815260208083015190820152604080830151908201526060918201519181019190915260800190565b604051602081830303815290604052600290805190602001906200022e9291906200068e565b505050565b6200023d6200071d565b81515181516001600160a01b039182169052602080840180518201518451830152805160409081015185519416938101939093528184018051600090819052815190930192909252805160609081015183519094019390935251608001519051909101526200014781620002af565b50565b60018160200151602001511015620003ad576200030d6040518060c0016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b8151516001600160a01b039081168083528351602090810151818501908152855160409081015185168187019081528388018051516060808a0191825282518701516080808c01918252935182015160a0808d019182526008600055436001558751998a019a909a52965195880195909552925190971691850191909152945194830194909452925191810191909152905160c082015260e00162000208565b620003b762000772565b81515181516001600160a01b03918216905282516020908101518351820152835160409081015184519316928101929092528084018051518451606090810191909152828501805160009081905281519094018490528051850193909352815190930151825184015251909101518151608001525151620001479082906005111562000573576200049860405180610100016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b8151516001600160a01b039081168252825160209081015181840152835160409081015190921682840152835160609081015190840152808401805151608080860191909152815183015160a0860152815184015160c08601529051015160e08401526007600055436001559051620002089183910160006101008201905060018060a01b038084511683526020840151602084015280604085015116604084015250606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b60208082015160408101519101511115620005e757805160409081015160208301516080015191516001600160a01b039091169180156108fc02916000818181858888f19350505050158015620005ce573d6000803e3d6000fd5b5060008080556001819055620002ac90600290620007d5565b80602001516020015181602001516040015111156200064657805160409081015160208301516080015191516001600160a01b039091169180156108fc02916000818181858888f19350505050158015620005ce573d6000803e3d6000fd5b8051516020820151608001516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015620005ce573d6000803e3d6000fd5b905290565b8280546200069c90620008f4565b90600052602060002090601f016020900481019282620006c057600085556200070b565b82601f10620006db57805160ff19168380011785556200070b565b828001600101855582156200070b579182015b828111156200070b578251825591602001919060010190620006ee565b50620007199291506200080f565b5090565b6040805160a08101825260009181018281526060820183905260808201929092529081908152602001620006896040518060800160405280600081526020016000815260200160008152602001600081525090565b6040805160c0810182526000918101828152606082018390526080820183905260a08201929092529081908152602001620006896040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b508054620007e390620008f4565b6000825580601f10620007f4575050565b601f016020900490600052602060002090810190620002ac91905b5b8082111562000719576000815560010162000810565b604051606081016001600160401b03811182821017156200085757634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200087157600080fd5b604080519081016001600160401b0381118282101715620008a257634e487b7160e01b600052604160045260246000fd5b604052835181526060601f1983011215620008bc57600080fd5b620008c662000826565b9150602084015182526040840151602083015260608401516040830152816020820152809250505092915050565b600181811c908216806200090957607f821691505b602082108114156200092b57634e487b7160e01b600052602260045260246000fd5b50919050565b61178380620009416000396000f3fe6080604052600436106100845760003560e01c80634731791e116100565780634731791e146100fa57806378be6f6c1461010d5780638323075714610120578063ab53f2c614610135578063ac3ab7031461015857005b80630693c6621461008d5780631ba68067146100a05780631e93b0f1146100c85780633d0655f0146100e757005b3661008b57005b005b61008b61009b3660046112bc565b61016b565b6100b36100ae3660046112df565b6101a4565b60405190151581526020015b60405180910390f35b3480156100d457600080fd5b506003545b6040519081526020016100bf565b61008b6100f53660046112f8565b6101ec565b6100b36101083660046112df565b610221565b6100b361011b36600461130a565b61026c565b34801561012c57600080fd5b506001546100d9565b34801561014157600080fd5b5061014a6102c2565b6040516100bf92919061132c565b61008b6101663660046112bc565b61035f565b60408051606081018252600080825260208201819052918101919091526101a061019a3684900384018461144b565b82610394565b5050565b60006101ae61101b565b6020810151518390526101da604080516060810182526000808252602082018190529181019190915290565b6101e48282610574565b519392505050565b60408051606081018252600080825260208201819052918101919091526101a061021b36849003840184611467565b82610777565b600061022b61101b565b602081015151839052610257604080516060810182526000808252602082018190529181019190915290565b6102618282610394565b602001519392505050565b600061027661104d565b60208082018051518690525151018390526102aa604080516060810182526000808252602082018190529181019190915290565b6102b48282610777565b604001519150505b92915050565b6000606060005460028080546102d7906114f4565b80601f0160208091040260200160405190810160405280929190818152602001828054610303906114f4565b80156103505780601f1061032557610100808354040283529160200191610350565b820191906000526020600020905b81548152906001019060200180831161033357829003601f168201915b50505050509050915091509091565b60408051606081018252600080825260208201819052918101919091526101a061038e3684900384018461144b565b82610574565b6103a4600860005414600c610a80565b81516103bf9015806103b857508251600154145b600d610a80565b6000808055600280546103d1906114f4565b80601f01602080910402602001604051908101604052809291908181526020018280546103fd906114f4565b801561044a5780601f1061041f5761010080835404028352916020019161044a565b820191906000526020600020905b81548152906001019060200180831161042d57829003601f168201915b50505050508060200190518101906104629190611545565b90507fc55e6813659179108696e4402c6ac0aad47a66a412d076c5417e97b9b278904d33846040516104959291906115d9565b60405180910390a16104a93415600b610a80565b604051600081527f43e631e7a3ead382c178e3ecb6980259e4e9a5d6dbd00df020f6b8fd0ea6610b9060200160405180910390a1600060208301526104ec61107f565b815181516001600160a01b039182169052602080840151835182015260408085015184519316920191909152606083015190850151515161052d9190610aa6565b6020820151526080820151610543906001610aa6565b602080830180519091019190915280514360409091015260a083015190516060015261056e81610af3565b50505050565b610584600960005414600f610a80565b815161059f90158061059857508251600154145b6010610a80565b6000808055600280546105b1906114f4565b80601f01602080910402602001604051908101604052809291908181526020018280546105dd906114f4565b801561062a5780601f106105ff5761010080835404028352916020019161062a565b820191906000526020600020905b81548152906001019060200180831161060d57829003601f168201915b50505050508060200190518101906106429190611602565b90507f028f10069e3d138251f5b63d2e84687a8240062d4382aa3353ec2f32004dc55133846040516106759291906115d9565b60405180910390a16106893415600e610a80565b604051600081527fc960b3bddca189f577857826af3902312e12dae28e72e5307d371b578d2d1b7c9060200160405180910390a160008252610705604080516060808201835260008284018181528352835160a08101855281815260208181018390529481018290529182018190526080820152909182015290565b815181516001600160a01b0390911690526020820151610726906001610aa6565b6020808301519190915260408301519085015151516107459190610aa6565b602080830180519091019190915280513360409091015280514360609182015283015190516080015261056e81610c9b565b6107876007600054146009610a80565b81516107a290158061079b57508251600154145b600a610a80565b6000808055600280546107b4906114f4565b80601f01602080910402602001604051908101604052809291908181526020018280546107e0906114f4565b801561082d5780601f106108025761010080835404028352916020019161082d565b820191906000526020600020905b81548152906001019060200180831161081057829003601f168201915b5050505050806020019051810190610845919061167b565b905061084f6110d3565b60408051338152855160208083019190915280870151518051838501520151606082015290517fbe0bd92eb159819dccaaa1e6856aa76f27ada69b01718087d20b434404768fe19181900360800190a1602084015151516108b39034146008610a80565b604051600181527f0ba88e252b06177d8dff70d62d68ef5ec8092d2d860a61b9387a17b42dea6c9b9060200160405180910390a1600160408085018290526020808501518782018051518301519091148552606080870151915151830151909114858301529184018051600090819052905182018490529184018051839052518101829052608084018051939093529151909101528051610955576000610968565b8060200151610965576001610968565b60005b6109a457806020015161097c57600061098c565b805161098957600161098c565b60005b61099a5780606001516109aa565b80604001516109aa565b80608001515b60a08201526109b7611173565b825181516001600160a01b0391821690526020808501518351909101526040808501518351921691015260608084015182519091015260808301516109fd906001610aa6565b60208201515260a0808401519083015151610a189190610aa6565b81602001516020018181525050610a3b8360c001518360a0015160200151610aa6565b602080830180516040019290925290514360609091015260e0840151908601515151610a679190610aa6565b602082015160800152610a7981610dca565b5050505050565b816101a05760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b600082610ab38382611727565b91508110156102bc5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401610a9d565b60018160200151602001511015610c1357610b4f6040518060c0016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b8151516001600160a01b039081168083528351602090810151818501908152855160409081015185168187019081528388018051516060808a0191825282518701516080808c01918252935182015160a0808d019182526008600055436001558751998a019a909a52965195880195909552925190971691850191909152945194830194909452925191810191909152905160c082015260e0015b60405160208183030381529060405260029080519060200190610c0e9291906111d5565b505050565b610c1b611173565b81515181516001600160a01b03918216905282516020908101518351820152835160409081015184519316928101929092528084018051518451606090810191909152828501805160009081905281519094018490528051850193909352815190930151825184015251909101519051608001526101a081610dca565b50565b60208101515160011115610d5557610cdd604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b8151516001600160a01b031681526020808301805151828401528051820151604080850191909152905160800151606084015260096000554360015551610bea9183910181516001600160a01b0316815260208083015190820152604080830151908201526060918201519181019190915260800190565b610d5d61107f565b81515181516001600160a01b039182169052602080840180518201518451830152805160409081015185519416938101939093528184018051600090819052815190930192909252805160609081015183519094019390935251608001519051909101526101a081610af3565b60208101515160051115610f0c57610e3260405180610100016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b8151516001600160a01b039081168252825160209081015181840152835160409081015190921682840152835160609081015190840152808401805151608080860191909152815183015160a0860152815184015160c08601529051015160e08401526007600055436001559051610bea9183910160006101008201905060018060a01b038084511683526020840151602084015280604085015116604084015250606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b60208082015160408101519101511115610f7c57805160409081015160208301516080015191516001600160a01b039091169180156108fc02916000818181858888f19350505050158015610f65573d6000803e3d6000fd5b5060008080556001819055610c9890600290611259565b8060200151602001518160200151604001511115610fd957805160409081015160208301516080015191516001600160a01b039091169180156108fc02916000818181858888f19350505050158015610f65573d6000803e3d6000fd5b8051516020820151608001516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610f65573d6000803e3d6000fd5b60405180604001604052806000815260200161104860408051808201909152600060208201908152815290565b905290565b604051806040016040528060008152602001611048604080516060810182526000602082018181529282015290815290565b6040805160a081018252600091810182815260608201839052608082019290925290819081526020016110486040518060800160405280600081526020016000815260200160008152602001600081525090565b6040518060c0016040528060001515815260200160001515815260200161110d604051806040016040528060008152602001600081525090565b815260200161112f604051806040016040528060008152602001600081525090565b8152602001611151604051806040016040528060008152602001600081525090565b8152602001611048604051806040016040528060008152602001600081525090565b6040805160c0810182526000918101828152606082018390526080820183905260a082019290925290819081526020016110486040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b8280546111e1906114f4565b90600052602060002090601f0160209004810192826112035760008555611249565b82601f1061121c57805160ff1916838001178555611249565b82800160010185558215611249579182015b8281111561124957825182559160200191906001019061122e565b5061125592915061128f565b5090565b508054611265906114f4565b6000825580601f10611275575050565b601f016020900490600052602060002090810190610c9891905b5b808211156112555760008155600101611290565b6000604082840312156112b657600080fd5b50919050565b6000604082840312156112ce57600080fd5b6112d883836112a4565b9392505050565b6000602082840312156112f157600080fd5b5035919050565b6000606082840312156112b657600080fd5b6000806040838503121561131d57600080fd5b50508035926020909101359150565b82815260006020604081840152835180604085015260005b8181101561136057858101830151858201606001528201611344565b81811115611372576000606083870101525b50601f01601f191692909201606001949350505050565b6040516020810167ffffffffffffffff811182821017156113ba57634e487b7160e01b600052604160045260246000fd5b60405290565b6040805190810167ffffffffffffffff811182821017156113ba57634e487b7160e01b600052604160045260246000fd5b6000818303604081121561140457600080fd5b61140c6113c0565b8335815291506020601f198201121561142457600080fd5b5061142d611389565b611435611389565b6020938401358152815291810191909152919050565b60006040828403121561145d57600080fd5b6112d883836113f1565b6000818303606081121561147a57600080fd5b6114826113c0565b833581526040601f198301121561149857600080fd5b60405191506020820182811067ffffffffffffffff821117156114cb57634e487b7160e01b600052604160045260246000fd5b6040526114d66113c0565b60208581013582526040909501358186015282529283015250919050565b600181811c9082168061150857607f821691505b602082108114156112b657634e487b7160e01b600052602260045260246000fd5b80516001600160a01b038116811461154057600080fd5b919050565b600060c0828403121561155757600080fd5b60405160c0810181811067ffffffffffffffff8211171561158857634e487b7160e01b600052604160045260246000fd5b60405261159483611529565b8152602083015160208201526115ac60408401611529565b6040820152606083015160608201526080830151608082015260a083015160a08201528091505092915050565b6001600160a01b0383168152606081016112d86020830184805182526020908101515151910152565b60006080828403121561161457600080fd5b6040516080810181811067ffffffffffffffff8211171561164557634e487b7160e01b600052604160045260246000fd5b60405261165183611529565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b600061010080838503121561168f57600080fd5b6040519081019067ffffffffffffffff821181831017156116c057634e487b7160e01b600052604160045260246000fd5b816040526116cd84611529565b8152602084015160208201526116e560408501611529565b6040820152606084015160608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b6000821982111561174857634e487b7160e01b600052601160045260246000fd5b50019056fea26469706673582212200e3206197ea9326f43a09e58de5f05aef8d614f3f2cfc4ae7592dbff26bf4cd664736f6c634300080c0033`,
  BytecodeLen: 8388,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  4: {
    at: './index.rsh:88:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:88:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:88:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:58:19:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:43:19:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:27:19:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Admin": Admin,
  "Proposer1_idea": Proposer1_idea,
  "Proposer2_idea": Proposer2_idea,
  "Voters_action": Voters_action
  };
export const _APIs = {
  Proposer1: {
    idea: Proposer1_idea
    },
  Proposer2: {
    idea: Proposer2_idea
    },
  Voters: {
    action: Voters_action
    }
  };

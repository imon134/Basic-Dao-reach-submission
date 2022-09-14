<p align="center">
  <a href="" rel="noopener">
 <img src="https://docs.reach.sh/assets/logo.png" alt="Project logo"></a>
</p>
<h3 align="center">Basic Dao</h3>

<div align="center">


</div>

---

<p align="center"> Workshop : Basic Dao
    <br> 
</p>

The workshop for the basic dao project for the decentralized umoja 3, the main aim of this workshop is to go through the smart contract written in the new blockchain development language Reach.
The workshop assumes you have looked at the rock,paper,scissors tutorial or the wisdom for sale.

# Basic Dao
We created a mini basic dao smart contract that handles the basic functionalites of a basic dao. A basic dao is a decentralized anonymous organization, where every memeber of the organization are equal and have equal voting power to vote on decisions in the dao.This is the logic we implement in this smart contract

When writing a reach program you have to be certain on the logic you want to implement, We have written that above.
The next step is to determine the functionalites the participants of this contracts each posses 
In our case 
* Ability to propose an idea to be voted on
* Ability to vote
In our reach program we made use of 1 participant and 3 Apis
* The participant serves as an admin, to govern all the activites in the smart contract
* 2 Apis serves as an endpoint where to members of the organization can connect and propose an idea to be voted on
* The last Api enables voters to vote on the ideas proposed by the proposers

Now lets go in the technicality of the program we have explained above
To start writing a reach program you have to ensure you have reach installed, then go to your command line or terminal and type ```./reach init```, this should generate a boilerplate for writing reach applications
```js
1 'reach 0.1'
2 export const main = Reach.App(() => {
3  const Admin = Participant('Admin', {
4    MaxFunds: Fun([], UInt),
5    deadline_proposers: Fun([], UInt),
6    deadline_voters: Fun([], UInt),
7  })
8  const Voters = API('Voters', {
9    action: Fun([UInt, UInt], Bool)
10  })
11  const Proposer1 = API('Proposer1', {
12    idea: Fun([UInt], Null)
13
14  })
15  const Proposer2 = API('Proposer2', {
16    idea: Fun([UInt], Null)
17  })
18  init()
19 })
```
The code snippet above shows us how functions are assinged to the participants in the smart contract. it also shows how the reach application is initalized using the function init()
* Line 1 delares the version of reach
* Line 3 - 17 we create participants and their functions 
#Admin
* The admin determines the maximum funds that can be paid to the contract
* Determines the deadline of the voting process 
#Proposers
* The ability to make idea proposals
#Voters
* The ability to cast votes 

```js
20 Admin.only(() => {
21    const fund = declassify(interact.MaxFunds())
22    const dlp = declassify(interact.deadline_proposers())
23    const dlv = declassify(interact.deadline_voters())
24  })
25 Admin.publish(fund, dlp, dlv)
```
In the code snippet above we access the functions only available to the admin, declassify them and publish them.

```js
26 const [idea1, p1_address, a] =
27    parallelReduce([0, Admin, 0])
28      .invariant(balance() == 0)
29      .while(a < 1)
30      .api(
31        Proposer1.idea,
32        (idea) => {
33          check(idea > 0)
34        },
35        (_) => 0,
36        (idea, k) => {
37          k(null);
38          const who = this
39
40          return [idea1 + idea, who, a + 1];
41        })
```
In the code snippet above we writing an api call for the Proposer1, The Api gives who ever connects to the smart contract through it the ability to propose the first idea to be voted on.

```js
42 const [idea2, p2_address, u] =
43    parallelReduce([0, Admin, 0])
44      .invariant(balance() == 0)
45      .while(u < 1)
46      .api(
47        Proposer2.idea,
48        (idea) => {
49          check(idea > 0)
50        },
51        (_) => 0,
52        (idea, k) => {
53          k(null);
54          const who = this
55          return [idea2 + idea, who, u + 1];
56        })
```
In the code snippet above we writing an api call for the Proposer2, The Api gives who ever connects to the smart contract through it the ability to propose the second idea to be voted on.

```js
57 const [vote1_count, vote2_count, pay_update, i] =
58    parallelReduce([0, 0, 0, 0])
59      .invariant(balance() == pay_update)
60      .while(i < 5)
61      .api(Voters.action,
62        (p, v) => {
63          check(p > 0)
64          check(v > 0)
65        },
66        (p, _) => p,
67        (p, v, k) => {
68          k(true);
69          const [id1_vote, id2_vote] =
70            v == idea1 && v != idea2 ? [1, 0] :
71              v == idea2 && v != idea1 ? [0, 1] :
72                [0, 0]
73          return [vote1_count + id1_vote, vote2_count + id2_vote, pay_update + p, i + 1];
74        })
```
The code snippet above contains the api call for voters to cast their votes.

```js
75  if (vote1_count > vote2_count) {
76   transfer(balance()).to(p1_address)
77  } else {
78    if (vote2_count > vote1_count) {
79      transfer(balance()).to(p1_address)
80    } else {
81      transfer(balance()).to(Admin)
82    }
83  }
84  commit()
```
In the code snippet above we use an if-else statements to determine the winner of the mini voting session

The smart contract was broken into bits to aid in the explanation of the code, below is the full code
```js
1 'reach 0.1'
2 export const main = Reach.App(() => {
3  const Admin = Participant('Admin', {
4    MaxFunds: Fun([], UInt),
5    deadline_proposers: Fun([], UInt),
6    deadline_voters: Fun([], UInt),
7  })
8  const Voters = API('Voters', {
9    action: Fun([UInt, UInt], Bool)
10  })
11  const Proposer1 = API('Proposer1', {
12    idea: Fun([UInt], Null)
13
14  })
15  const Proposer2 = API('Proposer2', {
16    idea: Fun([UInt], Null)
17  })
18  init()
19
20 Admin.only(() => {
21    const fund = declassify(interact.MaxFunds())
22    const dlp = declassify(interact.deadline_proposers())
23    const dlv = declassify(interact.deadline_voters())
24  })
25 Admin.publish(fund, dlp, dlv)
26 const [idea1, p1_address, a] =
27    parallelReduce([0, Admin, 0])
28      .invariant(balance() == 0)
29      .while(a < 1)
30      .api(
31        Proposer1.idea,
32        (idea) => {
33          check(idea > 0)
34        },
35        (_) => 0,
36        (idea, k) => {
37          k(null);
38          const who = this
39
40          return [idea1 + idea, who, a + 1];
41        })
42 const [idea2, p2_address, u] =
43    parallelReduce([0, Admin, 0])
44      .invariant(balance() == 0)
45      .while(u < 1)
46      .api(
47        Proposer2.idea,
48        (idea) => {
49          check(idea > 0)
50        },
51        (_) => 0,
52        (idea, k) => {
53          k(null);
54          const who = this
55          return [idea2 + idea, who, u + 1];
56        })
57 const [vote1_count, vote2_count, pay_update, i] =
58    parallelReduce([0, 0, 0, 0])
59      .invariant(balance() == pay_update)
60      .while(i < 5)
61      .api(Voters.action,
62        (p, v) => {
63          check(p > 0)
64          check(v > 0)
65        },
66        (p, _) => p,
67        (p, v, k) => {
68          k(true);
69          const [id1_vote, id2_vote] =
70            v == idea1 && v != idea2 ? [1, 0] :
71              v == idea2 && v != idea1 ? [0, 1] :
72                [0, 0]
73          return [vote1_count + id1_vote, vote2_count + id2_vote, pay_update + p, i + 1];
74        })
75  if (vote1_count > vote2_count) {
76   transfer(balance()).to(p1_address)
77  } else {
78    if (vote2_count > vote1_count) {
79      transfer(balance()).to(p1_address)
80    } else {
81      transfer(balance()).to(Admin)
82    }
83  }
84  commit()
85 })
```
Remember the `./reach init` generates to boilerplate files the index.rsh file here we wrote the reach smart contract. The second file is the index.mjs boilerplate code which is used to test the smart contract.
Below is the full index.mjs code to test the reach program above

```js
1  import { loadStdlib } from '@reach-sh/stdlib';
2  import * as backend from './build/index.main.mjs';
3  import { ask } from '@reach-sh/stdlib/ask.mjs';
4 
5  const stdlib = loadStdlib();
6  const startingBalance = stdlib.parseCurrency(100);
7
8  const accAdmin = await stdlib.newTestAccount(startingBalance);
9  const accProposer1 = await stdlib.newTestAccount(startingBalance);
10 const accProposer2 = await stdlib.newTestAccount(startingBalance);
11 const user1 = await stdlib.newTestAccount(startingBalance)
12 const user2 = await stdlib.newTestAccount(startingBalance)
13 const user3 = await stdlib.newTestAccount(startingBalance)
14 const user4 = await stdlib.newTestAccount(startingBalance)
15 const user5 = await stdlib.newTestAccount(startingBalance)
16 const user6 = await stdlib.newTestAccount(startingBalance)
17
18 const ctcWho = (acc) =>
20    acc.contract(backend, ctcAdmin.getInfo());
21 const ctcAdmin = accAdmin.contract(backend);
22
23 const getbal = async (acc, name) => {
24    const bal = await stdlib.balanceOf(acc);
25    console.log(`${name} has ${stdlib.formatCurrency(bal)} ${stdlib.standardUnit} tokens`)
26 }
27
28 const Propser1 = async (who, num) => {
29    try {
30        const acc = who.getAddress()
31        const ctc = ctcWho(who);
32        const idea_num = parseInt(num)
33        await ctc.apis.Proposer1.idea(idea_num);
34    } catch (error) {
35        console.log(error);
36    }
37 }
38 const Propser2 = async (who, num) => {
39    try {
40        const acc = who.getAddress()
41        const ctc = ctcWho(who);
42        const idea_num = parseInt(num)
43        await ctc.apis.Proposer2.idea(idea_num);
44    } catch (error) {
45        console.log(error);
46    }
47 }
48 const accounts = async (who, p, v) => {
49    try {
50        const acc = who.getAddress()
51        const ctc = ctcWho(who);
52        //const vote = parseInt(v)
53        const pay = stdlib.parseCurrency(p);
54        await ctc.apis.Voters.action(pay, parseInt(v));
55    } catch (error) {
56        console.log(error);
57    }
58 }
59
60 const admin = await getbal(accAdmin, 'james')
61 const pro1 = await getbal(accProposer1, 'jacob')
62 const pro2 = await getbal(accProposer2, 'sanda')
63 const user1s = await getbal(user1, 'harry')
64 const user2s = await getbal(user2, 'hilary')
65 const user3s = await getbal(user3, 'jerry')
66 const user4s = await getbal(user4, 'ben')
67 const user5s = await getbal(user5, 'dave')
68 await Promise.all([
69    ctcAdmin.p.Admin({
70        MaxFunds: async () => {
71            const funds = await ask('what is the amount of algo each voter is allowed to use and vote')
72            return stdlib.parseCurrency(funds);
73        },
74        deadline_proposers: async () => {
75            const deadline_proposers = await ask('what is the deadline for idea proposers')
76            return parseInt(deadline_proposers)
77        },
78        deadline_voters: async () => {
79            const deadline_voters = await ask('what is the deadline for voting')
80            return parseInt(deadline_voters)
81        },
82
83    }),
84    await Propser1(accProposer1, 1),
85    await Propser2(accProposer2, 2),
86    await accounts(user1, 20, 1),
87    await accounts(user2, 20, 1),
88    await accounts(user3, 20, 1),
89    await accounts(user4, 20, 2),
90    await accounts(user5, 20, 1),
91 ]);
92
93
94 const admins = await getbal(accAdmin, 'james')
95 const pro1s = await getbal(accProposer1, 'jacob')
96 const pro2s = await getbal(accProposer2, 'sanda')
97 const user1ss = await getbal(user1, 'harry')
98 const user2ss = await getbal(user2, 'hilary')
99 const user3ss = await getbal(user3, 'jerry')
100 const user4ss = await getbal(user4, 'ben')
101 const user5ss = await getbal(user5, 'dave')
102 process.exit()
```

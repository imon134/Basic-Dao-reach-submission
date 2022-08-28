import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
import { ask } from '@reach-sh/stdlib/ask.mjs';

const stdlib = loadStdlib();
const startingBalance = stdlib.parseCurrency(100);

const accAdmin = await stdlib.newTestAccount(startingBalance);
const accProposer1 = await stdlib.newTestAccount(startingBalance);
const accProposer2 = await stdlib.newTestAccount(startingBalance);
const user1 = await stdlib.newTestAccount(startingBalance)
const user2 = await stdlib.newTestAccount(startingBalance)
const user3 = await stdlib.newTestAccount(startingBalance)
const user4 = await stdlib.newTestAccount(startingBalance)
const user5 = await stdlib.newTestAccount(startingBalance)
const user6 = await stdlib.newTestAccount(startingBalance)

const ctcWho = (acc) =>
    acc.contract(backend, ctcAdmin.getInfo());
const ctcAdmin = accAdmin.contract(backend);

const getbal = async (acc, name) => {
    const bal = await stdlib.balanceOf(acc);
    console.log(`${name} has ${stdlib.formatCurrency(bal)} ${stdlib.standardUnit} tokens`)
}

const Propser1 = async (who, num) => {
    try {
        const acc = who.getAddress()
        const ctc = ctcWho(who);
        const idea_num = parseInt(num)
        await ctc.apis.Proposer1.idea(idea_num);
    } catch (error) {
        console.log(error);
    }
}
const Propser2 = async (who, num) => {
    try {
        const acc = who.getAddress()
        const ctc = ctcWho(who);
        const idea_num = parseInt(num)
        await ctc.apis.Proposer2.idea(idea_num);
    } catch (error) {
        console.log(error);
    }
}
const accounts = async ( p, v) => {
    try {
        const ctc = ctcWho(who);
        //const vote = parseInt(v)
        const pay = stdlib.parseCurrency(p);
        await ctc.apis.Voters.action(pay, parseInt(v));
    } catch (error) {
        console.log(error);
    }
}

const admin = await getbal(accAdmin, 'james')
const pro1 = await getbal(accProposer1, 'jacob')
const pro2 = await getbal(accProposer2, 'sanda')
const user1s = await getbal(user1, 'harry')
const user2s = await getbal(user2, 'hilary')
const user3s = await getbal(user3, 'jerry')
const user4s = await getbal(user4, 'ben')
const user5s = await getbal(user5, 'dave')


await Promise.all([
    ctcAdmin.p.Admin({
        MaxFunds: async () => {
            const funds = await ask('what is the amount of algo each voter is allowed to use and vote')
            return stdlib.parseCurrency(funds);
        },
        deadline_proposers: async () => {
            const deadline_proposers = await ask('what is the deadline for idea proposers')
            return parseInt(deadline_proposers)
        },
        deadline_voters: async () => {
            const deadline_voters = await ask('what is the deadline for voting')
            return parseInt(deadline_voters)
        },

    }),
    await Propser1(accProposer1, 1),
    await Propser2(accProposer2, 2),
    await accounts(user1, 20, 1),
    await accounts(user2, 20, 1),
    await accounts(user3, 20, 1),
    await accounts(user4, 20, 2),
    await accounts(user5, 20, 1),
]);


const admins = await getbal(accAdmin, 'james')
const pro1s = await getbal(accProposer1, 'jacob')
const pro2s = await getbal(accProposer2, 'sanda')
const user1ss = await getbal(user1, 'harry')
const user2ss = await getbal(user2, 'hilary')
const user3ss = await getbal(user3, 'jerry')
const user4ss = await getbal(user4, 'ben')
const user5ss = await getbal(user5, 'dave')
process.exit()

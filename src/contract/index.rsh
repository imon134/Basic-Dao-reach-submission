'reach 0.1'
export const main = Reach.App(() => {
  const Admin = Participant('Admin', {
    MaxFunds: Fun([], UInt),
    deadline_proposers: Fun([], UInt),
    deadline_voters: Fun([], UInt),
  })
  const Voters = API('Voters', {
    action: Fun([UInt, UInt], Bool)
  })
  const Proposer1 = API('Proposer1', {
    idea: Fun([UInt], Null)

  })
  const Proposer2 = API('Proposer2', {
    idea: Fun([UInt], Null)
  })
  init()

  Admin.only(() => {
    const fund = declassify(interact.MaxFunds())
    const dlp = declassify(interact.deadline_proposers())
    const dlv = declassify(interact.deadline_voters())
  })
  Admin.publish(fund, dlp, dlv)
  const [idea1, p1_address, a] =
    parallelReduce([0, Admin, 0])
      .invariant(balance() == 0)
      .while(a < 1)
      .api(
        Proposer1.idea,
        (idea) => {
          check(idea > 0)
        },
        (_) => 0,
        (idea, k) => {
          k(null);
          const who = this

          return [idea1 + idea, who, a + 1];
        })
  const [idea2, p2_address, u] =
    parallelReduce([0, Admin, 0])
      .invariant(balance() == 0)
      .while(u < 1)
      .api(
        Proposer2.idea,
        (idea) => {
          check(idea > 0)
        },
        (_) => 0,
        (idea, k) => {
          k(null);
          const who = this
          return [idea2 + idea, who, u + 1];
        })
  const [vote1_count, vote2_count, pay_update, i] =
    parallelReduce([0, 0, 0, 0])
      .invariant(balance() == pay_update)
      .while(i < 5)
      .api(Voters.action,
        (p, v) => {
          check(p > 0)
          check(v > 0)
        },
        (p, _) => p,
        (p, v, k) => {
          k(true);
          const [id1_vote, id2_vote] =
            v == idea1 && v != idea2 ? [1, 0] :
              v == idea2 && v != idea1 ? [0, 1] :
                [0, 0]
          return [vote1_count + id1_vote, vote2_count + id2_vote, pay_update + p, i + 1];
        })


  if (vote1_count > vote2_count) {
    transfer(balance()).to(p1_address)
  } else {
    if (vote2_count > vote1_count) {
      transfer(balance()).to(p1_address)
    } else {
      transfer(balance()).to(Admin)
    }
  }
  //transfer(balance()).to(Admin)

  commit()
})

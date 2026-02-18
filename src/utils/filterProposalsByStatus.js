export default function filterProposalsByStatus(
  userProposals,
  userProposalsStatus,
) {
  const all = [...userProposals];
  const acceptedProposals = [...userProposals].filter((p) => p.status === 2);
  const pendingProposals = [...userProposals].filter((p) => p.status === 1);
  const rejectedProposals = [...userProposals].filter((p) => p.status === 0);

  if (userProposalsStatus === '2') return acceptedProposals;
  else if (userProposalsStatus === '1') return pendingProposals;
  else if (userProposalsStatus === '0') return rejectedProposals;
  else return all;
}

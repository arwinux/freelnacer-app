export default function proposalCounts(proposals = []) {
  return {
    all: proposals.length,
    2: proposals.filter((p) => p.status === 2).length, // Accepted
    1: proposals.filter((p) => p.status === 1).length, // Pending
    0: proposals.filter((p) => p.status === 0).length, // Rejected
  };
}

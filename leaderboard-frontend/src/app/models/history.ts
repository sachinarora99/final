export interface ClaimHistory {
  _id: string;
  userId: {
    _id: string;
    name: string;
  };
  pointsClaimed: number;
  claimedAt: string;
}

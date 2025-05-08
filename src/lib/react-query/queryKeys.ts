export const queryKeys = {
  dashboard: {
    getFixtures: ["getFixtures"] as const,
    getStandings: ["getStandings"] as const,
    getLiveMatches: ["getLiveMatches"] as const,
    getFixtureDetailsRuns: (id: number) =>
      ["getFixtureDetails", "runs", id] as const,
    getFixtureDetailsBalls: (id: number) =>
      ["getFixtureDetails", "balls", id] as const,
  },
};

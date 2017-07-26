const PangramHeuristicGraphSearch = require('../../lib/pangram-heuristic-search');
const { expect } = require('chai');

describe("PangramHeuristicGraphSearch", () => {
  it("returns perfect pangrams in small search spaces...", () => {
    let alphabet = 'abdgir'; // bad, rig is a perfect pangram
    let words = ['a', 'i', 'big', 'bad', 'ad', 'rig'];
    let graph = new PangramHeuristicGraphSearch(alphabet, words);
    graph.search(); // default depth should go to max depth...
    let pangrams = graph.getKnownPangrams();

    expect(pangrams.size).to.equal(1);
    for(let onlyPangram of pangrams) {
      expect(onlyPangram.split(';')).to.have.all.members(['abd', 'gir']);
    }
  });
});

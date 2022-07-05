const { Activity, conn } = require('../../src/db.js');
const { expect } = require('chai');

//Test for the Activity model 
describe('Activity model', () => {
  beforeEach(() => Activity.sync({ force: true }));

  it('creates a new Activity model instance', () => {
    const activity = Activity.build({
      name: 'TEST',
      difficulty: 'TEST',
      duration: 'TEST',
      season: 'TEST',
    });
    expect(activity.name).to.equal('TEST');
    expect(activity.difficulty).to.equal('TEST');
    expect(activity.duration).to.equal('TEST');
    expect(activity.season).to.equal('TEST');
  });
});

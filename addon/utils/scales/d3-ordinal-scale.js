import Ember from 'ember';

const { on, observer } = Ember;

export default Ember.Object.extend({
  init() {
    this.set('scale', d3.scale.ordinal());
  },

  domainChanged: on('init', observer('domain', function() {
    let domain = this.get('domain');

    if(domain) {
      this.get('scale').domain(domain);
    }
  })),

  rangeChanged: on('init', observer('range', function() {
    let range = this.get('range');

    if(range) {
      this.get('scale').range(range);
    }
  })),

  rangePointsChanged: on('init', observer('rangePoints', 'padding', function() {
    let rangePoints = this.get('rangePoints');

    if(rangePoints) {
      if(padding) {
        this.get('scale').rangePoints(rangePoints, padding);
      } else {
        this.get('scale').rangePoints(rangePoints);
      }
    }
  })),

  rangeRoundPointsChanged: on('init', observer('rangeRoundPoints', 'padding', function() {
    let rangeRoundPoints = this.get('rangeRoundPoints');
    let padding = this.get('padding');

    if(rangeRoundPoints) {
      if(padding) {
        this.get('scale').rangeRoundPoints(rangeRoundPoints, padding);
      } else {
        this.get('scale').rangeRoundPoints(rangePoints);
      }
    }
  })),

  rangeBandsChanged: on('init', observer('rangeBands', 'padding', 'outerPadding', function() {
    let rangeBands = this.get('rangeBands');
    let padding = this.get('padding');
    let outerPadding = this.get('outerPadding');

    if(rangeBands) {
      if(padding) {
        if(outerPadding) {
          this.get('scale').rangeBands(rangeBands, padding, outerPadding);
        } else {
          this.get('scale').rangeBands(rangeBands, padding);
        }
      } else {
        this.get('scale').rangeBands(rangeBands);
      }
    }
  })),

  rangeRoundBandsChanged: on('init', observer('rangeRoundBands', 'padding', 'outerPadding', function() {
    let rangeRoundBands = this.get('rangeRoundBands');
    let padding = this.get('padding');
    let outerPadding = this.get('outerPadding');

    if(rangeRoundBands) {
      if(padding) {
        if(outerPadding) {
          this.get('scale').rangeRoundBands(rangeRoundBands, padding, outerPadding);
        } else {
          this.get('scale').rangeRoundBands(rangeRoundBands, padding);
        }
      } else {
        this.get('scale').rangeRoundBands(rangeRoundBands);
      }
    }
  }))
});
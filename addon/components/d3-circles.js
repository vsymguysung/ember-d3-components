import Ember from 'ember';
import D3Group from './d3-group';

const { observer } = Ember;

export default D3Group.extend({
  radius: 4.5,

  propertyChanged: observer('d3Selection', 'xScale', 'yScale', 'data', function() {
    Ember.run.once(this, 'plot');
  }),

  plot() {
    let d3Selection = this.get('d3Selection');
    let data = this.get('data');
    let xScale = this.get('xScale.scale');
    let yScale = this.get('yScale.scale');

    if(!d3Selection || !data || !xScale || !yScale) {
      return;
    }

    let d3Data = d3Selection.selectAll(`circle`).data(data);

    d3Data.enter().append("circle").attr("class", `circle`).attr("r", this.get('radius'));
    d3Data.attr("cx", (dataPoint) => {return xScale(dataPoint.x);}).attr("cy", (dataPoint) => {return yScale(dataPoint.y);})
    d3Data.exit().remove();
  }
});
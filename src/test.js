var svg = d3.select('#nav').append('svg').attr('position', 'fixed')
.attr('top', 0)
.attr('bottom', 0)
.attr('width', '100%')
.attr('height', '100%');

var bg = svg.append('rect')
.attr('width', '100%')
.attr('height', '100%')
.attr('fill', 'blue');



var dragstarted = function(d) {
  d3.select(this).raise().classed('active', true);
};

var dragged = function(d) {
  d3.select(this).attr('cx', d3.event.x).attr('cy', d3.event.y);
};

var dragended = function(d) {
  d3.select(this).classed('active', false);
};


var mid = svg.append('circle')
.attr('cx', '50%')
.attr('cy', '50%')
.attr('r', '2%')
.attr('fill', 'pink')
.call(d3.drag()
.on('start', dragstarted)
.on('drag', dragged)
.on('end', dragended));
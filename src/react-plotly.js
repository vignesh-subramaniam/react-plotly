import plotComponentFactory from './factory';
import Plotly from 'plotly.js/lib/core';

Plotly.register([
    require('plotly.js/lib/pie'), 
    require('plotly.js/lib/choropleth'),
    require('plotly.js/lib/bar'),
    require('plotly.js/lib/funnel'),
    require('plotly.js/lib/funnelarea'),
    require('plotly.js/lib/scatter'),
    require('plotly.js/lib/heatmap')
]);

const PlotComponent = plotComponentFactory(Plotly);
export default PlotComponent;

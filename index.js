#!/usr/bin/env node
'use strict';

var blessed = require('blessed');
var fs = require('fs');

var screen = blessed.screen({
  tput: true,
  smartCSR: true,
  warnings: true
});

var video = blessed.video({
  parent: screen,
  left: 'center',
  top: 'center',
  width: '100%',
  height: '100%',
  file: __dirname + '/flag.mp4'
});

video.focus();

screen.render();

screen.key(['q', 'C-q', 'C-c'], function() {
  screen.destroy();
  console.log('Libertad o Muerte');
});

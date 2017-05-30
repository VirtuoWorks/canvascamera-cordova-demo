/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {

        document.getElementById('play').addEventListener('click', () => {
            this.onPlay();
        }, false);
        document.getElementById('stop').addEventListener('click', () => {
            this.onStop();
        }, false);
        document.getElementById('switch').addEventListener('click', () => {
            this.onSwitch();
        }, false);
        document.getElementById('torch').addEventListener('click', () => {
            this.onTorch();
        }, false);

        if (window.plugin.CanvasCamera) {
          window.plugin.CanvasCamera.initialize({
                fullsize: window.document.getElementById('fullsize'),
                thumbnail: window.document.getElementById('thumbnail')
          });
        };
    },
    onPlay: function(){
        console.log('play');
        if (window.plugin.CanvasCamera) {
           var options = {
              canvas: {
                width: 640,
                height: 480
              },
              capture: {
                width: 640,
                height: 480
              },
              fps: 30,
              flashMode: this.flash,
              hasThumbnail: true,
              thumbnailRatio: 1/6,
              cameraFacing: this.position
          };
          window.plugin.CanvasCamera.start(options, function(error){
            console.log('[CanvasCamera start]', 'error', error);
          }, function(data){
            // console.log('[CanvasCamera start]', 'data', data);
          });
        }
    },
    flash: false,
    onTorch: function(){
        console.log('torch');
        if (window.plugin.CanvasCamera) {
            this.flash = (this.flash) ? false : true;
            window.plugin.CanvasCamera.flashMode(this.flash, function(error){
              console.log('[CanvasCamera flashMode]', 'error', error);
            }, function(data){
              console.log('[CanvasCamera flashMode]', 'data', data);
            });
        }
    },
    position: 'back',
    onSwitch: function(){
        console.log('switch');
        if (window.plugin.CanvasCamera) {
            this.position = (this.position == 'front') ? 'back' : 'front';
            window.plugin.CanvasCamera.cameraPosition(this.position, function(error){
                console.log('[CanvasCamera cameraPosition]', error);
            }, function(data){
                console.log('[CanvasCamera cameraPosition]', 'data', data);
            });
        }
    },
    onStop: function(){
        console.log('stop');
        if (window.plugin.CanvasCamera) {
            window.plugin.CanvasCamera.stop(function(error){
                console.log('[CanvasCamera stop]', 'error', error);
            }, function(data){
                console.log('[CanvasCamera stop]', 'data', data);
            });
        }
    }
};

app.initialize();

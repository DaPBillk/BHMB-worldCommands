(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@bhmb/bot')) :
    typeof define === 'function' && define.amd ? define(['@bhmb/bot'], factory) :
    (factory(global['@bhmb/bot']));
}(this, (function (bot) { 'use strict';
    const MessageBot = bot.MessageBot;
    MessageBot.registerExtension("DaPersonMGN/worldCommands", function(ex, world){

      ex.world.addCommand("world", function(player, args){
        var write = ex.bot.getExports("console").log; //Since these should kick the player off. I never really have to send it in game.
        switch (args.toUpperCase().split(" ")[0]) {
          case "START":
            write("Starting World...");
            world.start().then(function(){
              write("World Started.");
            });
          break;
          case "STOP":
            write("Stopping World...");
            world.stop().then(function(){
              write("World Stopped.");
            });
          break;
          case "RESTART":
            write("Restarting World...");
            world.restart().then(function(){
              write("Restarted World.");
            });
          break;
        }
      });

    });
})))

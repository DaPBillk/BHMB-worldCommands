(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@bhmb/bot')) :
    typeof define === 'function' && define.amd ? define(['@bhmb/bot'], factory) :
    (factory(global['@bhmb/bot']));
}(this, (function (bot) { 'use strict';
    const MessageBot = bot.MessageBot;
    MessageBot.registerExtension("DaPersonMGN/worldCommands", function(ex, world){
      window.ex = ex;
      ex.remove = function() {
        ex.world.removeCommand("world");
      };

      ex.uninstall = ex.remove;

      ex.world.addCommand("world", function(player, args){
        if (!player.isOwner || player.name !== "SERVER") {return}
        var write = ex.bot.getExports("console").log || ex.bot.send; //Since these should kick the player off. I never really have to send it in game.
        switch (args.toUpperCase().split(" ")[0]) {
          case "START":
            world.getOverview(true).then(function({status}){
              if (status === "startup" || status === "online") {
                write("World is already online or being started.");
              } else {
                world.start().then(function(){
                  write("World is being started...");
                });
              }
            });
          break;
          case "STOP":
            world.getOverview(true).then(function({status}){
              if (status === "stopping" || status === "offline") {
                write("World is already offline or being stopped.");
              } else {
                world.stop().then(function(){
                  write("World is being stopped...");
                });
              }
            });
          break;
          case "RESTART":
            world.getOverview(true).then(function({status}){
              if (status !== "online") {
                write("World cannot be restarted until the world is online.");
              } else {
                world.restart().then(function(){
                  write("World is being restarted...");
                });
              }
            });
          break;
        }
      });

    });
})))

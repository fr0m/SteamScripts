// ==UserScript==
// @name         makePack
// @namespace    https://github.com/fr0m/SteamScripts
// @version      0.2
// @description  auto make steam card pack
// @author       fr0m
// @updateURL    https://github.com/fr0m/SteamScripts/raw/main/makePack.meta.js
// @downloadURL  https://github.com/fr0m/SteamScripts/raw/main/makePack.user.js
// @match        steamcommunity.com/tradingcards/boostercreator*
// @icon         https://steamcommunity.com/favicon.ico
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';
  
    window.onload = () => {
      document.querySelector('.booster_option.minioption').click();
      document.querySelector('#booster_game_selector_booster').querySelector('.booster_option').querySelector('.btn_makepack').click();
      document.querySelector('.newmodal').querySelector('.btn_green_steamui').click();
      
      setTimeout(() => {
        window.location.reload();
      }, 60 * 1000);
    };
})();

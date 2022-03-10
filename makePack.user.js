// ==UserScript==
// @name         makePack
// @namespace    https://github.com/fr0m/SteamScripts
// @version      0.6
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
    
    const lastPackMadeAtKey = 'fr0m_lastPackMadeAt';
    const maxInterval = 24 * 60 * 60 * 1000 + 1000;
    const regularInterval = 60 * 1000;
    
    const lastPackMadeAt = localStorage.getItem(lastPackMadeAtKey);

    let interval = lastPackMadeAt ? (maxInterval - (Date.now() - lastPackMadeAt)) : regularInterval;
    
    if (interval < 0) {
        interval = regularInterval;
    }
  
    window.onload = () => {
        try {
            document.querySelector('.booster_option.minioption').click();
            document.querySelector('#booster_game_selector_booster').querySelector('.booster_option').querySelector('.btn_makepack').click();
            
            const modal = document.querySelector('.newmodal');
            if (modal) {
                modal.querySelector('.btn_green_steamui').click();
                localStorage.setItem(lastPackMadeAtKey, Date.now());
                console.log('%c PACK MADE ', 'background: #fd5353; color: #fff; font-size: 16px;');
            }
            
        } catch {}
    };
    
    setTimeout(() => {
        console.log('reloading');
        window.location.reload();
    }, interval);
})();

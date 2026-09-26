(function(){
  var p = new URLSearchParams(location.search);
  var house = p.get('house')||localStorage.getItem('anom_selectedHouse')||'1';
  var mount = p.get('mount')||localStorage.getItem('anom_selectedMount')||'aurora';
  var HOUSES = {1:'Pixel & Dot',2:'Clifford & Tater',3:'Mood Buddies',4:'Patrol Guardians'};
  try{
    if(p.get('house')){
      localStorage.setItem('anom_selectedHouse', house);
      localStorage.setItem('anom_selectedHouseName', HOUSES[house]||house);
      localStorage.setItem('anom_selectedMount', mount);
      var c=parseInt(localStorage.getItem('anom_coins')||'340'); if(c<390) localStorage.setItem('anom_coins', String(c+50));
    }
  }catch(e){}
  function apply(){
    if(!document.getElementById('ao-bridge') && p.get('house')){
      var d=document.createElement('div'); d.id='ao-bridge';
      d.style.marginTop='96px'; d.style.position='relative'; d.style.zIndex='5';
      d.innerHTML='<div style="max-width:960px;margin:0 auto 20px;background:#080A12;border:1px solid #d8ae55;border-radius:16px;padding:20px;display:flex;gap:16px;align-items:center;color:#e8e6d9;font-family:Inter,sans-serif"><div style="width:56px;height:56px;border-radius:50%;border:2px solid #d8ae55;display:grid;place-items:center">◍</div><div style="flex:1"><div style="font-size:11px;letter-spacing:.2em;color:#d8ae55">AO UNIVERSE → STORE CITY</div><div style="font-size:20px;font-weight:800;color:#fff">Welcome from '+(HOUSES[house]||house)+'</div><div style="font-size:13px;opacity:.75">House '+house+' • Mount '+mount+' • +50 AC bonus</div></div><div style="background:rgba(216,174,85,.12);border:1px solid #d8ae55;border-radius:999px;padding:8px 14px;color:#d8ae55;font-weight:700">HOUSE '+house+'</div></div>';
      (document.querySelector('main')||document.body).prepend(d);
    }
    // SANCTUARY/GAMES button -> /games/?house=X&mount=Y
    var links=document.querySelectorAll('a[href*="/games"], a[href*="sanctuary"], a[href*="anomoriginals"]');
    links.forEach(function(a){
      if(a.textContent.trim().toUpperCase()==='SANCTUARY' || a.textContent.trim().toUpperCase()==='GAMES' || a.href.includes('/games')){
        a.textContent='GAMES';
        a.href='/games/?house='+house+'&mount='+mount;
      }
    });
  }
  document.readyState==='loading'?document.addEventListener('DOMContentLoaded',apply):apply();
})();

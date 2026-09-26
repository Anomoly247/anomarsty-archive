(function(){
  var p = new URLSearchParams(location.search);
  var house = p.get('house'); var mount = p.get('mount');
  if(!house) return;
  var HOUSES = {1:'Pixel & Dot',2:'Clifford & Tater',3:'Mood Buddies',4:'Patrol Guardians'};
  var MOUNTS = {aurora:'Aurora Glider',grove:'Grove Walker',echo:'Echo Runner',bulwark:'Bulwark'};
  try{
    localStorage.setItem('anom_selectedHouse', house);
    localStorage.setItem('anom_selectedHouseName', HOUSES[house]);
    if(mount) localStorage.setItem('anom_selectedMount', mount);
    localStorage.setItem('anom_coins', String(parseInt(localStorage.getItem('anom_coins')||'340')+50));
  }catch(e){}
  function banner(){
    if(document.getElementById('ao-bridge')) return;
    var d=document.createElement('div'); d.id='ao-bridge';
    d.innerHTML='<div style="max-width:960px;margin:20px auto;background:#080A12;border:1px solid #d8ae55;border-radius:16px;padding:20px;display:flex;gap:16px;align-items:center;color:#e8e6d9;font-family:Inter,sans-serif"><div style="width:56px;height:56px;border-radius:50%;border:2px solid #d8ae55;display:grid;place-items:center">◍</div><div style="flex:1"><div style="font-size:11px;letter-spacing:.2em;color:#d8ae55">AO UNIVERSE → STORE CITY</div><div style="font-size:20px;font-weight:800;color:#fff">Welcome from '+(HOUSES[house]||house)+'</div><div style="font-size:13px;opacity:.75">House '+house+' • Mount '+(MOUNTS[mount]||'choose')+' • +50 AC bonus</div></div><div style="background:rgba(216,174,85,.12);border:1px solid #d8ae55;border-radius:999px;padding:8px 14px;color:#d8ae55;font-weight:700">HOUSE '+house+'</div></div>';
    (document.querySelector('main')||document.body).prepend(d);
  }
  document.readyState==='loading'?document.addEventListener('DOMContentLoaded',banner):banner();
})();

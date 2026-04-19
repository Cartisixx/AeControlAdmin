/* ================================================================
   CATALOG COPY (mirrors client-side for admin)
================================================================ */
const CATALOG_STEPS=[
  {id:'audio',label:'Audio',icon:'🔊',sections:[
    {id:'pa',lbl:'Sistema PA',items:[
      {id:'lac-k2',name:"L'Acoustics K2",desc:'Top line array premium',price:18500,min:4,stock:16},
      {id:'lac-kara',name:"L'Acoustics Kara II",desc:'Array compacto versátil',price:7800,min:4,stock:20},
      {id:'ada-s10',name:'Adamson S10',desc:'Top compacto alta potencia',price:9800,min:4,stock:24},
      {id:'mey-leo',name:'Meyer Sound Leopard',desc:'Line array premium',price:14200,min:4,stock:20},
      {id:'rcf-ttl',name:'RCF TT25-A',desc:'Top compacto — eventos medios',price:4200,min:4,stock:16},
    ]},
    {id:'subs',lbl:'Subwoofers',items:[
      {id:'lac-sb28',name:"L'Acoustics SB28",desc:'18" cardioid sub',price:9200,min:2,stock:12},
      {id:'ada-e219',name:'Adamson E219',desc:'Dual 19" sub',price:11500,min:2,stock:10},
      {id:'mey-1100',name:'Meyer Sound 1100',desc:'Sub alta potencia',price:8800,min:2,stock:12},
      {id:'rcf-718',name:'RCF SUB 9006-AS',desc:'18" activo',price:3800,min:2,stock:8},
    ]},
    {id:'consolas',lbl:'Consolas de mezcla',items:[
      {id:'digi-sd7',name:'DiGiCo SD7',desc:'Flagship 96ch',price:28000,min:1,stock:3},
      {id:'yam-cl5',name:'Yamaha CL5',desc:'96 canales',price:18500,min:1,stock:4},
      {id:'behr-x32',name:'Behringer X32',desc:'40 canales producción media',price:2800,min:1,stock:6},
    ]},
    {id:'micro',lbl:'Microfonía',items:[
      {id:'shure-sm7',name:'Shure SM7B',desc:'Dinámico vocal premium',price:850,min:1,stock:12},
      {id:'shure-b58',name:'Shure Beta 58A',desc:'Vocal dinámico',price:580,min:1,stock:16},
      {id:'senn-ew',name:'Sennheiser EW D1 Wireless',desc:'Wireless handheld',price:2800,min:1,stock:8},
    ]},
  ]},
  {id:'iluminacion',label:'Iluminación',icon:'💡',sections:[
    {id:'mh-spot',lbl:'Moving Heads Spot',items:[
      {id:'robe-bmfl',name:'Robe BMFL Spot',desc:'1700W shows premium',price:12500,min:4,stock:18},
      {id:'clay-sh',name:'Clay Paky Sharpy',desc:'Haz marcado',price:3800,min:4,stock:30},
      {id:'chau-mk3',name:'Chauvet Maverick MK3',desc:'600W spot',price:4200,min:4,stock:24},
    ]},
    {id:'consola-il',lbl:'Consolas de iluminación',items:[
      {id:'gma3-full',name:'grandMA3 Full Size',desc:'Flagship shows complejos',price:35000,min:1,stock:2},
      {id:'gma3-comp',name:'grandMA3 Compact',desc:'Producción media',price:18000,min:1,stock:3},
      {id:'gma-onpc',name:'grandMA onPC + wing',desc:'Software + fader wing',price:6500,min:1,stock:4},
    ]},
  ]},
  {id:'estructura',label:'Estructura',icon:'🏗️',sections:[
    {id:'esc-sz',lbl:'Escenarios',items:[
      {id:'esc-6x4',name:'Escenario 6×4m',desc:'Stage básico',price:14000,min:1,stock:4},
      {id:'esc-10x6',name:'Escenario 10×6m',desc:'Shows medios',price:28000,min:1,stock:3},
      {id:'esc-16x10',name:'Escenario 16×10m',desc:'Producción completa',price:52000,min:1,stock:2},
    ]},
    {id:'truss-t',lbl:'Truss (por tramo 3m)',items:[
      {id:'trs-30',name:'Truss 30×30',desc:'Rig básico',price:1200,min:2,stock:30},
      {id:'trs-40',name:'Truss 40×40',desc:'Carga media',price:1800,min:2,stock:24},
    ]},
  ]},
  {id:'video',label:'Video',icon:'📺',sections:[
    {id:'led-p',lbl:'Pantallas LED',items:[
      {id:'led-p25',name:'LED indoor P2.5',desc:'Alta resolución',price:4500,min:2,stock:30},
      {id:'led-p39',name:'LED outdoor P3.9',desc:'Festivales',price:5800,min:4,stock:60},
    ]},
    {id:'switch-p',lbl:'Switchers',items:[
      {id:'resolume',name:'Resolume Arena',desc:'VJ software',price:8500,min:1,stock:4},
      {id:'roland-v60',name:'Roland V-600UHD',desc:'Switcher 4K',price:14000,min:1,stock:3},
    ]},
  ]},
  {id:'backline',label:'Backline',icon:'🎸',sections:[
    {id:'drums-b',lbl:'Batería',items:[
      {id:'dw-col',name:'DW Collector Maple',desc:'Kit completo premium',price:9500,min:1,stock:3},
      {id:'pearl-m',name:'Pearl Masters Maple',desc:'Kit completo',price:6800,min:1,stock:3},
    ]},
    {id:'guit-a',lbl:'Amplificadores guitarra',items:[
      {id:'mesa-rec',name:'Mesa Boogie Dual Rectifier',desc:'100W rock/metal',price:5500,min:1,stock:4},
      {id:'mars-jvm',name:'Marshall JVM410H',desc:'100W clásico',price:4200,min:1,stock:4},
    ]},
  ]},
  {id:'fx',label:'FX',icon:'💨',sections:[
    {id:'fog-s',lbl:'Humo y niebla',items:[
      {id:'mart-jem',name:'Martin JEM ZR33',desc:'Máquina de humo DMX',price:3200,min:2,stock:8},
      {id:'low-fog',name:'Humo bajo LF-X',desc:'Niebla baja',price:4500,min:1,stock:4},
    ]},
    {id:'co2-s',lbl:'CO2 y Cryo',items:[
      {id:'cryo-jet',name:'CO2 Cryo Jet',desc:'Columna CO2 3–5m',price:8500,min:2,stock:8},
    ]},
  ]},
  {id:'staff',label:'Staff',icon:'👥',sections:[
    {id:'ing-s',lbl:'Ingenieros de audio',items:[
      {id:'foh-e',name:'Ingeniero FoH',desc:'Mezcla principal',price:6500,min:1,stock:8},
      {id:'mon-e',name:'Ingeniero de monitor',desc:'Mezcla en escenario',price:5800,min:1,stock:8},
    ]},
    {id:'stage-s',lbl:'Stage management',items:[
      {id:'prod-m',name:'Production manager',desc:'Coordinación integral',price:12000,min:1,stock:4},
      {id:'stage-m',name:'Stage manager',desc:'Coordinación escenario',price:6500,min:1,stock:5},
    ]},
    {id:'crew-s',lbl:'Crew de carga',items:[
      {id:'crew-tc',name:'Técnico especializado',desc:'Full day',price:3800,min:2,stock:15},
      {id:'crew-gn',name:'Crew general',desc:'Carga y montaje',price:1800,min:4,stock:20},
    ]},
  ]},
];

/* ================================================================
   STATE & HELPERS
================================================================ */
const $=id=>document.getElementById(id);
const API_ROOT='https://liveco.com.mx/api.php';
const fmt=n=>'$'+Math.round(n).toLocaleString('es-MX');
const fmtN=n=>parseInt(n||0).toLocaleString('es-MX');
const randInt=(a,b)=>Math.floor(Math.random()*(b-a+1))+a;
const randPick=arr=>arr[~~(Math.random()*arr.length)];

let adminUser=null;
let inventoryChanges={}; // {itemId: newStock}
let catalogEdits={};     // {itemId: {price,min,stock}}
let activityLog=[];
let currentPage='dashboard';
let collapsedSections={};

function toast(msg,type='info'){
  const el=document.createElement('div');el.className=`toast ${type}`;
  const ic={ok:'✅',err:'❌',info:'💬',warn:'⚠️'};
  el.innerHTML=`<span>${ic[type]||'💬'}</span><span>${msg}</span>`;
  $('tw').appendChild(el);
  setTimeout(()=>{el.style.transition='opacity .4s';el.style.opacity='0';},3000);
  setTimeout(()=>el.remove(),3500);
}

/* ================================================================
   DATA LAYER — orders/catalog/custom/deleted come from the API
================================================================ */
function getUsers(){return JSON.parse(localStorage.getItem('lc_users')||'[]')}
function getOrders(){return JSON.parse(localStorage.getItem('lc_orders')||'[]')}
function getActivity(){return JSON.parse(localStorage.getItem('lc_activity')||'[]')}

let openOrderRefs = {}; // accordion state

async function fetchRemoteOrders(){
  try {
    const res = await fetch(`${API_ROOT}?resource=orders`, {cache:'no-store'});
    const data = await res.json();
    if(res.ok && data.status === 'success' && Array.isArray(data.orders)){
      const orders = data.orders.map(o => ({
        ref: o.ref,
        user: o.cliente_email,
        userName: o.cliente_nombre,
        userPhone: o.cliente_telefono,
        total: parseFloat(o.total||0),
        city: o.ciudad,
        date: o.fecha_evento,
        att: parseInt(o.asistentes||0),
        artist: o.artista,
        notes: o.notas,
        rentalHrs: parseInt(o.hrs_renta||8),
        assembly: o.montaje,
        items: Array.isArray(o.items)?o.items:[],
        status: o.status||'pending',
        created: o.created ? new Date(o.created).getTime() : Date.now()
      }));
      localStorage.setItem('lc_orders', JSON.stringify(orders));
      return orders;
    }
  } catch(err){ console.error('fetchRemoteOrders error', err); }
  return getOrders();
}

async function fetchRemoteCatalog(){
  try {
    const res = await fetch(`${API_ROOT}?resource=catalog`, {cache:'no-store'});
    const data = await res.json();
    if(data.status==='success' && Array.isArray(data.catalog)){
      const ov = {};
      data.catalog.forEach(c => {
        ov[c.item_id] = {};
        if(c.price !== null) ov[c.item_id].price = parseInt(c.price);
        if(c.min_renta !== null) ov[c.item_id].min = parseInt(c.min_renta);
        if(c.stock_base !== null) ov[c.item_id].stock = parseInt(c.stock_base);
      });
      localStorage.setItem('lc_catalog', JSON.stringify(ov));
      return ov;
    }
  } catch(err){ console.error('fetchRemoteCatalog error', err); }
  return getCatalogOverrides();
}

async function fetchRemoteCustom(){
  try {
    const res = await fetch(`${API_ROOT}?resource=custom`, {cache:'no-store'});
    const data = await res.json();
    if(data.status==='success' && Array.isArray(data.custom)){
      const items = data.custom.map(c => ({
        id: c.id,
        name: c.name,
        desc: c.descripcion || '',
        price: parseInt(c.price||0),
        stock: parseInt(c.stock||0),
        min: parseInt(c.min_renta||1),
        category: c.category || '',
        section: c.section || 'Equipos adicionales',
        custom: true
      }));
      localStorage.setItem('lc_custom_items', JSON.stringify(items));
      return items;
    }
  } catch(err){ console.error('fetchRemoteCustom error', err); }
  return getCustomItems();
}

async function fetchRemoteDeleted(){
  try {
    const res = await fetch(`${API_ROOT}?resource=deleted`, {cache:'no-store'});
    const data = await res.json();
    if(data.status==='success' && Array.isArray(data.deleted)){
      localStorage.setItem('lc_deleted_items', JSON.stringify(data.deleted));
      return data.deleted;
    }
  } catch(err){ console.error('fetchRemoteDeleted error', err); }
  return getDeletedItems();
}

async function fetchRemoteInventory(){
  try {
    const res = await fetch(`${API_ROOT}`, {cache:'no-store'});
    const data = await res.json();
    if(data.status==='success' && Array.isArray(data.inventory)){
      const inv = {};
      data.inventory.forEach(i => { inv[i.id] = parseInt(i.stock); });
      localStorage.setItem('lc_inventory', JSON.stringify(inv));
      return inv;
    }
  } catch(err){ console.error('fetchRemoteInventory error', err); }
  return getInventory();
}

async function fetchAllRemote(){
  await Promise.all([
    fetchRemoteUsers(),
    fetchRemoteOrders(),
    fetchRemoteCatalog(),
    fetchRemoteCustom(),
    fetchRemoteDeleted(),
    fetchRemoteInventory()
  ]);
}

let adminUserRefreshTimer=null;

async function fetchRemoteUsers(){
  try {
    const res = await fetch(`${API_ROOT}?resource=clients`, {cache:'no-store'});
    const data = await res.json();
    if(res.ok && data.status === 'success' && Array.isArray(data.clients)){
      const users = data.clients.map(u=>({
        name:u.nombre||'',
        email:u.correo||'',
        phone:u.telefono||'',
        created:u.created?Number(u.created):Date.now()
      }));
      localStorage.setItem('lc_users',JSON.stringify(users));
      return users;
    }
  } catch(err){
    console.error('fetchRemoteUsers error', err);
  }
  return getUsers();
}

function startAdminUserRefresh(){
  if(adminUserRefreshTimer) clearInterval(adminUserRefreshTimer);
  adminUserRefreshTimer = setInterval(async () => {
    if(!adminUser) return;
    await Promise.all([fetchRemoteUsers(), fetchRemoteOrders()]);
    if(currentPage==='users') renderUsers();
    if(currentPage==='orders') renderOrders();
    if(currentPage==='dashboard') renderDashboard();
    updateBadges();
  }, 10000);
}
function getInventory(){return JSON.parse(localStorage.getItem('lc_inventory')||'{}')}
function getCatalogOverrides(){return JSON.parse(localStorage.getItem('lc_catalog')||'{}')}
function getSettings(){return JSON.parse(localStorage.getItem('lc_settings')||'{}')}

function saveActivity(log){localStorage.setItem('lc_activity',JSON.stringify(log))}
function logActivity(type,msg,meta={}){
  const log=getActivity();
  log.unshift({type,msg,meta,ts:Date.now()});
  if(log.length>200)log.splice(200);
  saveActivity(log);
  renderActivityFeed();
  updateBadges();
}

function getPageVisits(){return JSON.parse(localStorage.getItem('lc_visits')||'[]')}
function logVisit(){
  const v=getPageVisits();
  v.push({ts:Date.now(),page:'builder'});
  if(v.length>1000)v.splice(0,v.length-1000);
  localStorage.setItem('lc_visits',JSON.stringify(v));
}

/* ================================================================
   SEED DEMO DATA
================================================================ */
function seedDemoData(){
  const names=['Ana García','Carlos Ruiz','María López','Pedro Hernández','Sofia Torres','Miguel Ángel Castro','Valeria Mendoza','Diego Ramírez','Claudia Vega','Roberto Flores'];
  const emails=names.map(n=>`${n.toLowerCase().replace(/\s+/g,'.').replace(/[áéíóú]/g,c=>({á:'a',é:'e',í:'i',ó:'o',ú:'u'}[c]||c))}@correo.mx`);
  const phones=['+52 664 123 4567','+52 686 234 5678','+52 646 345 6789','+52 664 456 7890','+52 664 567 8901'];

  // Users
  let users=getUsers();
  names.forEach((name,i)=>{
    if(!users.find(u=>u.email===emails[i])){
      users.push({name,email:emails[i],phone:randPick(phones),pass:'demo1234',created:Date.now()-randInt(0,30)*86400000});
    }
  });
  localStorage.setItem('lc_users',JSON.stringify(users));

  // Orders
  const refs=['LCO-AB12CD34','LCO-EF56GH78','LCO-IJ90KL12','LCO-MN34OP56','LCO-QR78ST90','LCO-UV12WX34','LCO-YZ56AB78','LCO-CD90EF12'];
  const statuses=['pending','confirmed','completed','pending','confirmed'];
  const cities=['Tijuana','Mexicali','Ensenada','Rosarito'];
  const totals=[85000,210000,595000,145000,320000,88000,175000,430000];
  let orders=getOrders();
  refs.forEach((ref,i)=>{
    if(!orders.find(o=>o.ref===ref)){
      const u=randPick(users);
      orders.push({ref,user:u.email,userName:u.name,total:randPick(totals),date:`2025-${String(randInt(4,9)).padStart(2,'0')}-${String(randInt(1,28)).padStart(2,'0')}`,att:randInt(100,2000),city:randPick(cities),status:randPick(statuses),created:Date.now()-randInt(0,20)*86400000});
    }
  });
  localStorage.setItem('lc_orders',JSON.stringify(orders));

  // Activity
  const log=getActivity();
  const actTypes=[
    {type:'order',msg:`<strong>${randPick(names)}</strong> envió cotización <span class="hl">${randPick(refs)}</span>`,meta:{icon:'📋',bg:'#ac-d'}},
    {type:'register',msg:`<strong>${randPick(names)}</strong> se registró como nuevo cliente`,meta:{icon:'👤',bg:'var(--bl-d)'}},
    {type:'login',msg:`<strong>${randPick(names)}</strong> inició sesión`,meta:{icon:'🔑',bg:'var(--gr-d)'}},
    {type:'builder',msg:`<strong>${randPick(names)}</strong> abrió el configurador de evento`,meta:{icon:'🏗️',bg:'var(--pu-d)'}},
  ];
  for(let i=0;i<15;i++){
    const a=randPick(actTypes);
    log.push({...a,ts:Date.now()-randInt(0,7)*86400000-randInt(0,23)*3600000});
  }
  log.sort((a,b)=>b.ts-a.ts);
  saveActivity(log.slice(0,100));

  // Visits
  const v=getPageVisits();
  for(let i=0;i<80;i++){v.push({ts:Date.now()-randInt(0,6)*86400000,page:'builder'});}
  localStorage.setItem('lc_visits',JSON.stringify(v));

  toast('✅ Datos de demo cargados correctamente.','ok');
  setTimeout(()=>refreshAll(),300);
}

/* ================================================================
   AUTH
================================================================ */
async function adminLogin(){
  const em=$('a-em').value.trim(), pw=$('a-pw').value;
  const settings=getSettings();
  const adminEmail=settings.adminEmail||'admin@liveco.mx';
  const adminPass=settings.adminPass||'admin2024';
  if(em===adminEmail&&pw===adminPass){
    adminUser={email:em};
    $('auth').classList.add('hidden');
    $('admin-app').classList.remove('hidden');
    logActivity('admin','Admin inició sesión en el panel',{icon:'🔐',bg:'var(--re-d)'});
    await fetchAllRemote();
    startAdminUserRefresh();
    refreshAll();
    toast('Bienvenido al panel de administración.','ok');
  }else{
    toast('Credenciales incorrectas.','err');
    $('a-pw').style.borderColor='var(--re)';
    setTimeout(()=>$('a-pw').style.borderColor='',1500);
  }
}

function adminLogout(){
  adminUser=null;
  if(adminUserRefreshTimer) clearInterval(adminUserRefreshTimer);
  adminUserRefreshTimer = null;
  $('admin-app').classList.add('hidden');
  $('auth').classList.remove('hidden');
}

/* ================================================================
   NAVIGATION
================================================================ */
const PAGE_TITLES={dashboard:'Dashboard General',analytics:'Analíticas y Reportes',activity:'Actividad en tiempo real',orders:'Cotizaciones y Pedidos',users:'Clientes registrados',inventory:'Control de inventario',catalog:'Editor de catálogo',settings:'Configuración del sistema'};

function navTo(page){
  document.querySelectorAll('.nav-item').forEach(el=>{
    el.classList.toggle('active',el.id===`ni-${page}`);
  });
  ['dashboard','analytics','activity','orders','users','inventory','catalog','settings'].forEach(p=>{
    const el=$(`p-${p}`);if(el){el.classList.add('hidden');el.classList.remove('sup');}
  });
  const el=$(`p-${page}`);
  if(el){el.classList.remove('hidden');void el.offsetWidth;el.classList.add('sup');}
  $('topbar-title').textContent=PAGE_TITLES[page]||page;
  currentPage=page;
  renderPage(page);
  if(page==='users' && adminUser){
    fetchRemoteUsers().then(renderUsers);
  }
  if(page==='orders' && adminUser){
    fetchRemoteOrders().then(()=>{ renderOrders(); updateBadges(); });
  }
  if(page==='inventory' && adminUser){
    Promise.all([fetchRemoteCustom(), fetchRemoteDeleted(), fetchRemoteInventory()]).then(renderInventory);
  }
  if(page==='catalog' && adminUser){
    Promise.all([fetchRemoteCatalog(), fetchRemoteCustom(), fetchRemoteDeleted()]).then(renderCatalog);
  }
}

function renderPage(page){
  if(page==='dashboard')renderDashboard();
  else if(page==='analytics')renderAnalytics();
  else if(page==='activity'){renderActivityFeed();renderFullFeed();}
  else if(page==='orders')renderOrders();
  else if(page==='users')renderUsers();
  else if(page==='inventory')renderInventory();
  else if(page==='catalog')renderCatalog();
}

function refreshAll(){
  renderPage(currentPage);
  renderDashboardKPIs();
  updateBadges();
}

function updateBadges(){
  const orders=getOrders();
  const pending=orders.filter(o=>!o.status||o.status==='pending').length;
  const badgeO=$('badge-orders');
  if(pending>0){badgeO.style.display='';badgeO.textContent=pending;}else{badgeO.style.display='none';}
  const actLen=getActivity().length;
  $('badge-activity').textContent=actLen>99?'99+':actLen;
}

/* ================================================================
   DASHBOARD
================================================================ */
function renderDashboard(){
  renderDashboardKPIs();
  renderTrafficChart();
  renderOrdersDonut();
  renderDashFeed();
  renderTopItems();
  renderRecentOrders();
  renderRecentUsers();
}

function renderDashboardKPIs(){
  const users=getUsers().filter(u=>u.email!=='test@liveco.mx');
  const orders=getOrders();
  const revenue=orders.reduce((a,o)=>a+parseFloat(o.total||0),0);
  const thisWeek=Date.now()-7*86400000;
  const newUsersWeek=users.filter(u=>u.created&&u.created>thisWeek).length;
  const ordersWeek=orders.filter(o=>o.created&&o.created>thisWeek).length;
  const avgOrder=orders.length?revenue/orders.length:0;

  $('kpi-grid').innerHTML=`
    ${kpiCard('ac','👥','Clientes totales',users.length,newUsersWeek>0?`+${newUsersWeek} esta semana`:'Sin nuevos','up')}
    ${kpiCard('gr','📋','Cotizaciones',orders.length,ordersWeek>0?`+${ordersWeek} esta semana`:'Sin nuevas','up')}
    ${kpiCard('bl','💰','Valor total cotizado',fmt(revenue),'Suma acumulada','neutral')}
    ${kpiCard('pu','📊','Ticket promedio',fmt(avgOrder),'Por cotización','neutral')}
  `;
}

function kpiCard(color,icon,label,value,delta,dir){
  return `<div class="kpi-card ${color}">
    <div class="kpi-label"><span class="kpi-icon">${icon}</span>${label}</div>
    <div class="kpi-value">${value}</div>
    <div class="kpi-delta ${dir}">${dir==='up'?'↑':dir==='down'?'↓':'—'} ${delta}</div>
  </div>`;
}

function renderTrafficChart(){
  const visits=getPageVisits();
  const days=['Dom','Lun','Mar','Mié','Jue','Vie','Sáb'];
  const now=new Date();
  const data=Array.from({length:7},(_,i)=>{
    const d=new Date(now);d.setDate(d.getDate()-6+i);
    const dayStart=new Date(d.getFullYear(),d.getMonth(),d.getDate()).getTime();
    const dayEnd=dayStart+86400000;
    const count=visits.filter(v=>v.ts>=dayStart&&v.ts<dayEnd).length;
    return{label:days[d.getDay()],count:count||randInt(2,18)};
  });
  const max=Math.max(...data.map(d=>d.count),1);

  $('traffic-chart').innerHTML=`
    <div class="chart-bars">
      ${data.map((d,i)=>{
        const pct=(d.count/max*100).toFixed(0);
        const isToday=i===6;
        return `<div class="bar-col">
          <div class="bar-track">
            <div class="bar-fill" data-val="${d.count}" style="height:${pct}%;background:${isToday?'var(--ac)':'rgba(91,158,245,.5)'}"></div>
          </div>
          <div class="bar-label">${d.label}</div>
        </div>`;
      }).join('')}
    </div>
    <div class="chart-legend">
      <div class="legend-item"><div class="legend-dot" style="background:rgba(91,158,245,.5)"></div>Visitas al configurador</div>
      <div class="legend-item"><div class="legend-dot" style="background:var(--ac)"></div>Hoy</div>
    </div>`;
}

function renderOrdersDonut(){
  const orders=getOrders();
  const byStatus={pending:0,confirmed:0,completed:0};
  orders.forEach(o=>byStatus[o.status||'pending']=(byStatus[o.status||'pending']||0)+1);
  const total=orders.length||1;
  const colors={pending:'var(--ye)',confirmed:'var(--bl)',completed:'var(--gr)'};
  const labels={pending:'Pendiente',confirmed:'Confirmado',completed:'Completado'};

  // Simple SVG donut
  let offset=0;const r=44,cx=60,cy=60,circumf=2*Math.PI*r;
  const slices=Object.entries(byStatus).map(([k,v])=>{
    const pct=v/total;const dash=pct*circumf;
    const slice=`<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${colors[k]}" stroke-width="12" stroke-dasharray="${dash} ${circumf}" stroke-dashoffset="${-offset*circumf}" opacity=".85"/>`;
    offset+=pct;return{slice,k,v,pct};
  });

  $('orders-donut').innerHTML=`
    <div class="donut-wrap">
      <svg class="donut-svg" width="120" height="120" viewBox="0 0 120 120">
        <circle cx="60" cy="60" r="44" fill="none" stroke="rgba(255,255,255,.06)" stroke-width="12"/>
        ${slices.map(s=>s.slice).join('')}
      </svg>
      <div class="donut-center"><div class="dv" style="color:var(--ac)">${total}</div><div class="dl">Total</div></div>
    </div>
    <div class="donut-legend">
      ${slices.map(s=>`<div class="dl-item"><div class="dl-dot" style="background:${colors[s.k]}"></div><span class="dl-name">${labels[s.k]}</span><span class="dl-val">${s.v}</span></div>`).join('')}
    </div>`;
}

function renderDashFeed(){
  const log=getActivity().slice(0,8);
  $('dash-feed').innerHTML=log.length?log.map(a=>feedItemHTML(a)).join(''):`<div class="tbl-empty"><div class="ei">⚡</div>Sin actividad reciente</div>`;
}

function feedItemHTML(a){
  const icons={order:'📋',register:'👤',login:'🔑',builder:'🏗️',admin:'🔐',default:'💬'};
  const bgs={order:'var(--ac-d)',register:'var(--bl-d)',login:'var(--gr-d)',builder:'var(--pu-d)',admin:'var(--re-d)'};
  const icon=icons[a.type]||icons.default;
  const bg=bgs[a.type]||'var(--bg-c2)';
  const time=timeAgo(a.ts);
  return `<div class="feed-item">
    <div class="feed-av" style="background:${bg}">${icon}</div>
    <div class="feed-body">
      <div class="feed-main">${a.msg}</div>
      <div class="feed-time">${time}</div>
    </div>
  </div>`;
}

function timeAgo(ts){
  const diff=(Date.now()-ts)/1000;
  if(diff<60)return 'Hace un momento';
  if(diff<3600)return `Hace ${~~(diff/60)} min`;
  if(diff<86400)return `Hace ${~~(diff/3600)} hrs`;
  return `Hace ${~~(diff/86400)} días`;
}

function renderTopItems(){
  // Aggregate from orders selections (we store items in activity)
  const items=[
    {name:"L'Acoustics K2",cat:'Audio',count:randInt(8,24)},
    {name:'Robe BMFL Spot',cat:'Iluminación',count:randInt(6,20)},
    {name:'DiGiCo SD7',cat:'Audio',count:randInt(5,18)},
    {name:'grandMA3 Full Size',cat:'Iluminación',count:randInt(4,15)},
    {name:'Escenario 10×6m',cat:'Estructura',count:randInt(7,22)},
    {name:'CO2 Cryo Jet',cat:'FX',count:randInt(5,16)},
  ].sort((a,b)=>b.count-a.count);
  const max=items[0].count;
  $('top-items').innerHTML=items.map(i=>`
    <div class="progress-row">
      <div class="pr-label" style="font-size:11px">${i.name}</div>
      <div class="pr-track"><div class="pr-fill" style="width:${(i.count/max*100).toFixed(0)}%;background:var(--ac)"></div></div>
      <div class="pr-val">${i.count}</div>
    </div>`).join('');
}

function renderRecentOrders(){
  const orders=getOrders().sort((a,b)=>(b.created||0)-(a.created||0)).slice(0,5);
  const tbl=$('recent-orders-tbl');
  if(!orders.length){tbl.innerHTML=`<tr><td colspan="5" class="tbl-empty"><div class="ei">📋</div>Sin pedidos aún</td></tr>`;return;}
  const sMap={pending:'tag-ye',confirmed:'tag-bl',completed:'tag-gr'};
  const sLbl={pending:'Pendiente',confirmed:'Confirmado',completed:'Completado'};
  tbl.innerHTML=`<thead><tr><th>REF</th><th>Cliente</th><th>Total</th><th>Estado</th><th>Fecha</th></tr></thead><tbody>
    ${orders.map(o=>`<tr style="cursor:pointer" onclick="openOrderModal('${o.ref}')">
      <td><span class="mono">${o.ref}</span></td>
      <td class="name-cell">${o.userName||o.user}</td>
      <td style="font-weight:700;color:var(--ac)">${fmt(o.total)}</td>
      <td><span class="tag ${sMap[o.status||'pending']}">${sLbl[o.status||'pending']}</span></td>
      <td class="faint">${o.date||'–'}</td>
    </tr>`).join('')}
  </tbody>`;
}

function renderRecentUsers(){
  const users=getUsers().filter(u=>u.email!=='test@liveco.mx').sort((a,b)=>(b.created||0)-(a.created||0)).slice(0,6);
  const colors=['#f5a800','#5b9ef5','#2dd4a0','#f55c5c','#a78bfa','#f5c842'];
  $('recent-users-list').innerHTML=users.length
    ?users.map((u,i)=>`
      <div class="user-card" onclick="openUserModal('${u.email}')">
        <div class="user-av" style="background:${colors[i%colors.length]}">${u.name.charAt(0)}</div>
        <div class="user-info"><div class="user-name">${u.name}</div><div class="user-email">${u.email}</div></div>
        <div class="user-meta"><strong>${u.phone||'–'}</strong>${u.created?timeAgo(u.created):'–'}</div>
      </div>`).join('')
    :`<div class="tbl-empty"><div class="ei">👤</div>Sin clientes aún</div>`;
}

/* ================================================================
   ANALYTICS
================================================================ */
function renderAnalytics(){
  const orders=getOrders();
  const users=getUsers().filter(u=>u.email!=='test@liveco.mx');
  const revenue=orders.reduce((a,o)=>a+parseFloat(o.total||0),0);
  const conv=users.length>0?(orders.length/users.length*100).toFixed(1):0;

  $('analytics-kpis').innerHTML=`
    ${kpiCard('ac','💰','Ingresos totales cotizados',fmt(revenue),'Suma de todas las cotizaciones','neutral')}
    ${kpiCard('gr','🎯','Tasa de conversión',`${conv}%`,'Usuarios → pedidos','up')}
    ${kpiCard('bl','📅','Pedidos este mes',orders.filter(o=>o.created&&o.created>Date.now()-30*86400000).length,'Últimos 30 días','up')}
    ${kpiCard('ye','⏱️','Valor promedio diario',fmt(revenue/30),'Proyección mensual','neutral')}
  `;

  // Monthly chart
  const months=['Ene','Feb','Mar','Abr','May','Jun'];
  const monthData=months.map(m=>({label:m,count:randInt(3,24)}));
  const mmax=Math.max(...monthData.map(d=>d.count));
  $('monthly-chart').innerHTML=`<div class="chart-bars">
    ${monthData.map(d=>`<div class="bar-col">
      <div class="bar-track"><div class="bar-fill" data-val="${d.count}" style="height:${(d.count/mmax*100).toFixed(0)}%;background:var(--gr)"></div></div>
      <div class="bar-label">${d.label}</div>
    </div>`).join('')}
  </div>`;

  // City distribution
  const cities={Tijuana:randInt(20,40),Mexicali:randInt(10,20),Ensenada:randInt(5,12),Rosarito:randInt(4,10)};
  const cityTotal=Object.values(cities).reduce((a,b)=>a+b,0);
  const cityColors=['var(--ac)','var(--bl)','var(--gr)','var(--pu)'];
  $('city-chart').innerHTML=Object.entries(cities).map(([c,v],i)=>`
    <div class="progress-row">
      <div class="pr-label">${c}</div>
      <div class="pr-track"><div class="pr-fill" style="width:${(v/cityTotal*100).toFixed(0)}%;background:${cityColors[i]}"></div></div>
      <div class="pr-val">${v}</div>
    </div>`).join('');

  // Revenue by category
  const cats=['Audio','Iluminación','Estructura','Video','Backline','FX','Staff'];
  const catVals=cats.map(c=>({c,v:randInt(20000,180000)})).sort((a,b)=>b.v-a.v);
  const catMax=catVals[0].v;
  const catColors=['var(--ac)','var(--bl)','var(--gr)','var(--pu)','var(--ye)','var(--re)','var(--gr)'];
  $('revenue-by-cat').innerHTML=catVals.map((d,i)=>`
    <div class="progress-row">
      <div class="pr-label">${d.c}</div>
      <div class="pr-track"><div class="pr-fill" style="width:${(d.v/catMax*100).toFixed(0)}%;background:${catColors[i]}"></div></div>
      <div class="pr-val" style="font-size:10px">${fmt(d.v)}</div>
    </div>`).join('');

  // Rental hours distribution
  const hrsData=[{l:'4 hrs',v:randInt(2,8)},{l:'6 hrs',v:randInt(4,12)},{l:'8 hrs',v:randInt(10,24)},{l:'12 hrs',v:randInt(6,16)},{l:'24 hrs',v:randInt(2,10)}];
  const hmax=Math.max(...hrsData.map(d=>d.v));
  $('rental-hrs-chart').innerHTML=`<div class="chart-bars" style="height:100px">
    ${hrsData.map(d=>`<div class="bar-col">
      <div class="bar-track"><div class="bar-fill" data-val="${d.v}" style="height:${(d.v/hmax*100).toFixed(0)}%;background:var(--pu)"></div></div>
      <div class="bar-label">${d.l}</div>
    </div>`).join('')}
  </div>`;
}

/* ================================================================
   ACTIVITY FEED
================================================================ */
function renderActivityFeed(){
  const el=$('dash-feed');if(el)renderDashFeed();
  if(currentPage==='activity')renderFullFeed();
}

function renderFullFeed(filter='all'){
  let log=getActivity();
  if(filter!=='all')log=log.filter(a=>a.type===filter);
  $('full-feed').innerHTML=log.length?log.map(a=>feedItemHTML(a)).join(''):`<div class="tbl-empty"><div class="ei">⚡</div>Sin actividad registrada.<br/>Usa el Event Builder como cliente para ver actividad.</div>`;
}

function filterActivity(val){renderFullFeed(val);}

function clearActivity(){
  if(!confirm('¿Limpiar todo el historial de actividad?'))return;
  saveActivity([]);renderFullFeed();updateBadges();toast('Actividad limpiada.','info');
}

/* ================================================================
   ORDERS
================================================================ */
function renderOrders(){
  const search=($('orders-search')||{value:''}).value.toLowerCase();
  const statusFilter=($('orders-status')||{value:'all'}).value;
  const sort=($('orders-sort')||{value:'newest'}).value;

  let orders=getOrders();
  if(search)orders=orders.filter(o=>(o.ref||'').toLowerCase().includes(search)||(o.user||'').toLowerCase().includes(search)||(o.userName||'').toLowerCase().includes(search));
  if(statusFilter!=='all')orders=orders.filter(o=>(o.status||'pending')===statusFilter);
  orders.sort((a,b)=>{
    if(sort==='newest')return(b.created||0)-(a.created||0);
    if(sort==='oldest')return(a.created||0)-(b.created||0);
    if(sort==='highest')return parseFloat(b.total||0)-parseFloat(a.total||0);
    return parseFloat(a.total||0)-parseFloat(b.total||0);
  });

  const wrap=$('orders-tbl');

  if(!orders.length){
    wrap.innerHTML=`<tr><td colspan="7"><div class="tbl-empty" style="padding:32px"><div class="ei">📋</div>Sin pedidos. Cuando un cliente proceda al pago en el cotizador, su orden aparecerá aquí.</div></td></tr>`;
    return;
  }

  wrap.innerHTML=`<tbody><tr><td style="padding:0">${orders.map(o=>{
    const open=openOrderRefs[o.ref];
    const items=Array.isArray(o.items)?o.items:[];
    const itemRows=items.length?items.map(it=>`
      <tr>
        <td class="bold">${(it.name||it.id||'-').replace(/</g,'&lt;')}</td>
        <td class="muted" style="font-size:11px">${(it.section||it.category||'').replace(/</g,'&lt;')}</td>
        <td style="text-align:center">${it.qty||it.q||0}</td>
        <td style="text-align:right">${fmt(it.price||0)}</td>
        <td style="text-align:right;font-weight:700;color:var(--ac)">${fmt((it.qty||it.q||0)*(it.price||0))}</td>
      </tr>`).join(''):`<tr><td colspan="5" class="muted" style="text-align:center;padding:12px">Sin equipos en esta orden.</td></tr>`;

    return `
    <div class="order-acc" style="border:1px solid var(--bd);border-radius:var(--r2);margin:0 12px 10px;background:var(--bg-c)">
      <div class="order-acc-hd" onclick="toggleOrder('${o.ref}')" style="display:grid;grid-template-columns:140px 1fr 110px 110px 130px 60px;gap:10px;align-items:center;padding:12px 16px;cursor:pointer">
        <div><span class="mono" style="font-weight:700">${o.ref}</span></div>
        <div>
          <div class="name-cell" style="font-weight:700">${(o.userName||o.user||'-').replace(/</g,'&lt;')}</div>
          <div class="muted" style="font-size:11px">${(o.user||'').replace(/</g,'&lt;')} ${o.userPhone?'· '+o.userPhone.replace(/</g,'&lt;'):''}</div>
        </div>
        <div style="font-weight:700;color:var(--ac)">${fmt(o.total)}</div>
        <div class="muted">${(o.city||'–').replace(/</g,'&lt;')}</div>
        <div onclick="event.stopPropagation()">
          <select style="background:var(--bg-in);border:1px solid var(--bd);border-radius:6px;padding:4px 6px;color:var(--t1);font-size:11px;cursor:pointer;width:100%" onchange="changeOrderStatus('${o.ref}',this.value)">
            <option value="pending" ${(o.status||'pending')==='pending'?'selected':''}>Pendiente</option>
            <option value="confirmed" ${o.status==='confirmed'?'selected':''}>Confirmado</option>
            <option value="completed" ${o.status==='completed'?'selected':''}>Completado</option>
          </select>
        </div>
        <div style="text-align:right;font-size:18px">${open?'▾':'▸'}</div>
      </div>
      ${open?`
      <div class="order-acc-body" style="padding:14px 16px;border-top:1px solid var(--bd);background:var(--bg-c2)">
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:14px">
          <div class="minfo"><div class="minfo-label">Fecha del evento</div><div class="minfo-val">${o.date||'Por confirmar'}</div></div>
          <div class="minfo"><div class="minfo-label">Asistentes</div><div class="minfo-val">${fmtN(o.att||0)}</div></div>
          <div class="minfo"><div class="minfo-label">Horas de renta</div><div class="minfo-val">${o.rentalHrs||8}h</div></div>
          <div class="minfo"><div class="minfo-label">Montaje</div><div class="minfo-val">${o.assembly||'same'}</div></div>
          <div class="minfo"><div class="minfo-label">Artista / acto</div><div class="minfo-val">${(o.artist||'–').replace(/</g,'&lt;')}</div></div>
          <div class="minfo"><div class="minfo-label">Teléfono cliente</div><div class="minfo-val">${(o.userPhone||'–').replace(/</g,'&lt;')}</div></div>
          <div class="minfo" style="grid-column:span 2"><div class="minfo-label">Notas técnicas</div><div class="minfo-val" style="font-size:11px">${(o.notes||'Sin notas.').replace(/</g,'&lt;')}</div></div>
        </div>
        <h4 style="font-family:var(--fd);font-size:13px;margin:8px 0">Equipos solicitados</h4>
        <div class="tbl-wrap" style="margin-bottom:14px">
          <table class="admin-tbl">
            <thead><tr><th>Equipo</th><th>Sección</th><th style="text-align:center">Cant.</th><th style="text-align:right">Precio</th><th style="text-align:right">Subtotal</th></tr></thead>
            <tbody>${itemRows}</tbody>
          </table>
        </div>
        <div style="display:flex;gap:10px;flex-wrap:wrap">
          <button class="btn btn-pri btn-sm" onclick="downloadRiderForOrder('${o.ref}')">📄 Descargar Rider Técnico (PDF)</button>
          <button class="btn btn-green btn-sm" onclick="changeOrderStatus('${o.ref}','confirmed')">✓ Confirmar</button>
          <button class="btn btn-out btn-sm" onclick="changeOrderStatus('${o.ref}','completed')">✅ Completado</button>
          <button class="btn btn-danger btn-sm" onclick="deleteOrder('${o.ref}')">🗑 Eliminar</button>
        </div>
      </div>`:''}
    </div>`;
  }).join('')}</td></tr></tbody>`;
}

function toggleOrder(ref){
  openOrderRefs[ref]=!openOrderRefs[ref];
  renderOrders();
}

async function changeOrderStatus(ref,status){
  let orders=getOrders();
  const idx=orders.findIndex(o=>o.ref===ref);
  if(idx>-1){orders[idx].status=status;localStorage.setItem('lc_orders',JSON.stringify(orders));}
  try {
    const res = await fetch(API_ROOT, {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({action:'update_order_status', ref, status})
    });
    const data = await res.json().catch(()=>null);
    if(data && data.status==='success') toast(`Pedido ${ref} → ${status}`,'ok');
    else toast(`No se pudo actualizar el estado del pedido en el servidor.`,'err');
  } catch(err){ toast('Fallo de red al actualizar pedido.','err'); }
  renderOrders();
}

async function deleteOrder(ref){
  if(!confirm(`¿Eliminar pedido ${ref}?`))return;
  let orders=getOrders().filter(o=>o.ref!==ref);
  localStorage.setItem('lc_orders',JSON.stringify(orders));
  try {
    await fetch(API_ROOT, {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({action:'delete_order', ref})
    });
  } catch(err){ console.error('deleteOrder', err); }
  renderOrders();updateBadges();toast('Pedido eliminado.','warn');
}

/* ================================================================
   RIDER TÉCNICO — descarga desde panel admin
================================================================ */
function downloadRiderForOrder(ref){
  const order = getOrders().find(o => o.ref === ref);
  if(!order){ toast('Pedido no encontrado.','err'); return; }
  const items = Array.isArray(order.items) ? order.items : [];
  const grouped = {};
  items.forEach(it => {
    const cat = it.category || it.section || 'Equipos';
    if(!grouped[cat]) grouped[cat] = [];
    grouped[cat].push(it);
  });

  const sectionsHtml = Object.entries(grouped).map(([cat, list]) => `
    <div class="pdf-section">
      <div class="pdf-sec-hd">${cat.toUpperCase()}</div>
      <table class="pdf-table">
        <thead><tr><th>Equipo</th><th>Sección</th><th class="tc">Cant.</th><th class="tr">Unitario</th><th class="tr">Subtotal</th></tr></thead>
        <tbody>
          ${list.map(it => `
            <tr>
              <td class="bold">${(it.name||it.id||'-').replace(/</g,'&lt;')}</td>
              <td class="muted">${(it.section||'').replace(/</g,'&lt;')}</td>
              <td class="tc">${it.qty||it.q||0}</td>
              <td class="tr">${fmt(it.price||0)}</td>
              <td class="tr bold">${fmt((it.qty||it.q||0)*(it.price||0))}</td>
            </tr>`).join('')}
        </tbody>
      </table>
    </div>`).join('');

  const now = new Date().toLocaleDateString('es-MX',{day:'2-digit',month:'long',year:'numeric'});
  const html = `<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"/><title>Rider técnico ${ref}</title>
<style>
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:10px;color:#1a1a2e;background:#fff;padding:28px}
@page{size:A4;margin:18mm 16mm}
@media print{.no-print{display:none}}
.hdr{display:flex;align-items:center;justify-content:space-between;padding-bottom:14px;border-bottom:3px solid #f5a800;margin-bottom:18px}
.logo-mark{width:36px;height:36px;background:#f5a800;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:900;color:#000}
.logo-name{font-size:22px;font-weight:900;color:#0a0a1a;letter-spacing:-0.02em}
.logo-name span{color:#f5a800}
.hdr-meta{text-align:right;color:#666;font-size:9px;line-height:1.7}
.hdr-meta strong{color:#1a1a2e;font-size:10px}
.hdr-title{font-size:11px;font-weight:700;color:#f5a800;letter-spacing:.1em;text-transform:uppercase;margin-top:3px}
.info-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:18px;padding:14px;background:#f9f9f9;border-radius:6px;border-left:4px solid #f5a800}
.info-block .label{font-size:8px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#999;margin-bottom:3px}
.info-block .val{font-size:11px;font-weight:600;color:#1a1a2e}
.pdf-section{margin-bottom:16px}
.pdf-sec-hd{background:#1a1a2e;color:#f5a800;padding:6px 10px;font-size:9px;font-weight:700;letter-spacing:.12em;border-radius:4px 4px 0 0}
.pdf-table{width:100%;border-collapse:collapse}
.pdf-table thead tr{background:#f5f5f5}
.pdf-table th{padding:6px 8px;font-size:8px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:#555;border-bottom:2px solid #e0e0e0;text-align:left}
.pdf-table td{padding:6px 8px;font-size:9px;border-bottom:1px solid #f0f0f0;vertical-align:top}
.pdf-table .bold{font-weight:700;color:#1a1a2e}
.pdf-table .muted{color:#888}
.pdf-table .tc{text-align:center}
.pdf-table .tr{text-align:right}
.totals{margin-top:16px;text-align:right}
.totals .total-final{display:inline-block;background:#f5a800;color:#000;padding:8px 14px;border-radius:4px;font-weight:900;font-size:13px}
.notes{margin-top:18px;padding:12px;background:#f9f9f9;border-radius:6px;border:1px solid #e8e8e8;font-size:9px;color:#444;line-height:1.6}
.footer{margin-top:24px;padding-top:10px;border-top:1px solid #e0e0e0;font-size:8px;color:#aaa;line-height:1.7}
</style></head><body>
<div class="hdr">
  <div style="display:flex;align-items:center;gap:10px">
    <div class="logo-mark">L</div>
    <div>
      <div class="logo-name">Live<span>Co</span></div>
      <div style="font-size:8px;color:#999;letter-spacing:.05em">PRODUCCIÓN TÉCNICA DE EVENTOS</div>
    </div>
  </div>
  <div class="hdr-meta">
    <div class="hdr-title">Rider Técnico</div>
    <div><strong>Ref:</strong> ${ref}</div>
    <div><strong>Emitido:</strong> ${now}</div>
    <div><strong>Estado:</strong> ${order.status||'pending'}</div>
  </div>
</div>
<div class="info-grid">
  <div>
    <div class="info-block"><div class="label">Cliente</div><div class="val">${(order.userName||order.user||'-').replace(/</g,'&lt;')}</div></div>
    <div style="margin-top:6px" class="info-block"><div class="label">Correo</div><div class="val">${(order.user||'').replace(/</g,'&lt;')}</div></div>
    <div style="margin-top:6px" class="info-block"><div class="label">Teléfono</div><div class="val">${(order.userPhone||'–').replace(/</g,'&lt;')}</div></div>
  </div>
  <div>
    <div class="info-block"><div class="label">Fecha del evento</div><div class="val">${order.date||'Por confirmar'}</div></div>
    <div style="margin-top:6px" class="info-block"><div class="label">Ciudad</div><div class="val">${(order.city||'–').replace(/</g,'&lt;')}</div></div>
    <div style="margin-top:6px" class="info-block"><div class="label">Asistentes</div><div class="val">${fmtN(order.att||0)} personas</div></div>
    <div style="margin-top:6px" class="info-block"><div class="label">Duración renta</div><div class="val">${order.rentalHrs||8} hrs</div></div>
  </div>
</div>
${sectionsHtml || '<p style="padding:10px;color:#888">Sin equipos en esta orden.</p>'}
<div class="totals"><span class="total-final">TOTAL: ${fmt(order.total||0)}</span></div>
<div class="notes"><strong>Notas técnicas:</strong> ${(order.notes||'Sin observaciones.').replace(/</g,'&lt;')}</div>
<div class="footer">
  <strong>LiveCo — Producción Técnica de Eventos</strong> · Tijuana, BC México · produccion@liveco.mx · +52 1 664 246 7879
</div>
<script>window.onload=()=>window.print();<\/script>
</body></html>`;

  const w = window.open('', '_blank', 'width=900,height=700');
  if(w){ w.document.write(html); w.document.close(); }
  else toast('Permite ventanas emergentes para descargar el rider.','err');
}

function openOrderModal(ref){
  const order=getOrders().find(o=>o.ref===ref);
  if(!order)return;
  const sMap={pending:'tag-ye',confirmed:'tag-bl',completed:'tag-gr'};
  const sLbl={pending:'Pendiente',confirmed:'Confirmado',completed:'Completado'};
  $('om-ref').innerHTML=`📋 ${ref}`;
  $('om-body').innerHTML=`
    <div class="modal-grid">
      <div class="minfo"><div class="minfo-label">Cliente</div><div class="minfo-val">${order.userName||order.user}</div></div>
      <div class="minfo"><div class="minfo-label">Email</div><div class="minfo-val" style="font-size:11px">${order.user}</div></div>
      <div class="minfo"><div class="minfo-label">Total cotizado</div><div class="minfo-val" style="color:var(--ac);font-size:18px">${fmt(order.total)}</div></div>
      <div class="minfo"><div class="minfo-label">Asistentes</div><div class="minfo-val">${fmtN(order.att)} personas</div></div>
      <div class="minfo"><div class="minfo-label">Fecha del evento</div><div class="minfo-val">${order.date||'–'}</div></div>
      <div class="minfo"><div class="minfo-label">Ciudad</div><div class="minfo-val">${order.city||'–'}</div></div>
      <div class="minfo"><div class="minfo-label">Estado</div><div class="minfo-val"><span class="tag ${sMap[order.status||'pending']}">${sLbl[order.status||'pending']}</span></div></div>
      <div class="minfo"><div class="minfo-label">Fecha de emisión</div><div class="minfo-val" style="font-size:11px">${order.created?new Date(order.created).toLocaleDateString('es-MX'):''}</div></div>
    </div>
    <div style="display:flex;gap:10px;flex-wrap:wrap">
      <button class="btn btn-green btn-sm" onclick="changeOrderStatus('${ref}','confirmed');closeOrderModal()">✓ Confirmar pedido</button>
      <button class="btn btn-pri btn-sm" onclick="changeOrderStatus('${ref}','completed');closeOrderModal()">✅ Marcar completado</button>
      <button class="btn btn-danger btn-sm" onclick="deleteOrder('${ref}');closeOrderModal()">🗑 Eliminar</button>
    </div>`;
  $('order-modal').classList.remove('hidden');
}
function closeOrderModal(){$('order-modal').classList.add('hidden');}

function exportOrdersCSV(){
  const orders=getOrders();
  if(!orders.length){toast('Sin pedidos para exportar.','warn');return;}
  const header='REF,Cliente,Email,Total,Ciudad,Asistentes,Fecha evento,Estado,Emitido\n';
  const rows=orders.map(o=>`${o.ref},${o.userName||o.user},${o.user},${o.total},${o.city||''},${o.att||''},${o.date||''},${o.status||'pending'},${o.created?new Date(o.created).toLocaleDateString('es-MX'):''}`).join('\n');
  downloadFile('liveco-pedidos.csv',header+rows,'text/csv');
  toast('CSV exportado.','ok');
}

/* ================================================================
   USERS
================================================================ */
function renderUsers(){
  const search=($('users-search')||{value:''}).value.toLowerCase();
  const sort=($('users-sort')||{value:'newest'}).value;
  const colors=['#f5a800','#5b9ef5','#2dd4a0','#f55c5c','#a78bfa','#f5c842'];

  let users=getUsers().filter(u=>u.email!=='test@liveco.mx');
  if(search)users=users.filter(u=>(u.name||'').toLowerCase().includes(search)||(u.email||'').toLowerCase().includes(search)||(u.phone||'').includes(search));
  users.sort((a,b)=>{
    if(sort==='newest')return(b.created||0)-(a.created||0);
    if(sort==='oldest')return(a.created||0)-(b.created||0);
    return(a.name||'').localeCompare(b.name||'');
  });

  const orders=getOrders();
  $('users-list').innerHTML=users.length?users.map((u,i)=>{
    const userOrders=orders.filter(o=>o.user===u.email);
    const totalSpend=userOrders.reduce((a,o)=>a+parseFloat(o.total||0),0);
    return `<div class="user-card" onclick="openUserModal('${u.email}')">
      <div class="user-av" style="background:${colors[i%colors.length]}">${u.name.charAt(0).toUpperCase()}</div>
      <div class="user-info">
        <div class="user-name">${u.name}</div>
        <div class="user-email">${u.email}</div>
        <div class="user-phone">${u.phone||'–'}</div>
      </div>
      <div class="user-meta">
        <strong>${userOrders.length} cotizaciones</strong>
        <div>${totalSpend>0?fmt(totalSpend):'Sin cotizaciones'}</div>
        <div>${u.created?timeAgo(u.created):'–'}</div>
      </div>
    </div>`;}).join('')
    :`<div class="tbl-empty"><div class="ei">👤</div>Sin clientes. Usa el Event Builder para registrarte.</div>`;
}

function openUserModal(email){
  const users=getUsers();
  const u=users.find(x=>x.email===email);
  if(!u)return;
  const orders=getOrders().filter(o=>o.user===email);
  const totalSpend=orders.reduce((a,o)=>a+parseFloat(o.total||0),0);
  $('um-name').textContent=u.name;
  $('um-body').innerHTML=`
    <div class="modal-grid">
      <div class="minfo"><div class="minfo-label">Nombre</div><div class="minfo-val">${u.name}</div></div>
      <div class="minfo"><div class="minfo-label">Email</div><div class="minfo-val" style="font-size:11px">${u.email}</div></div>
      <div class="minfo"><div class="minfo-label">Teléfono</div><div class="minfo-val">${u.phone||'–'}</div></div>
      <div class="minfo"><div class="minfo-label">Registrado</div><div class="minfo-val" style="font-size:11px">${u.created?new Date(u.created).toLocaleDateString('es-MX'):timeAgo(Date.now())}</div></div>
      <div class="minfo"><div class="minfo-label">Cotizaciones</div><div class="minfo-val" style="color:var(--bl)">${orders.length}</div></div>
      <div class="minfo"><div class="minfo-label">Total cotizado</div><div class="minfo-val" style="color:var(--ac)">${totalSpend>0?fmt(totalSpend):'–'}</div></div>
    </div>
    ${orders.length?`<h4 style="font-family:var(--fd);font-size:13px;margin-bottom:10px">Historial de cotizaciones</h4>
    <div class="tbl-wrap"><table class="admin-tbl">
      <thead><tr><th>REF</th><th>Total</th><th>Ciudad</th><th>Fecha</th></tr></thead>
      <tbody>${orders.map(o=>`<tr><td><span class="mono">${o.ref}</span></td><td style="color:var(--ac);font-weight:700">${fmt(o.total)}</td><td>${o.city||'–'}</td><td>${o.date||'–'}</td></tr>`).join('')}</tbody>
    </table></div>`:
    '<p style="color:var(--t3);font-size:13px">Este cliente aún no tiene cotizaciones.</p>'}
    <div style="display:flex;gap:10px;margin-top:16px">
      <button class="btn btn-danger btn-sm" onclick="deleteUser('${email}')">🗑 Eliminar cliente</button>
    </div>`;
  $('user-modal').classList.remove('hidden');
}
function closeUserModal(){$('user-modal').classList.add('hidden');}

function deleteUser(email){
  if(!confirm('¿Eliminar este cliente?'))return;
  let users=getUsers().filter(u=>u.email!==email);
  localStorage.setItem('lc_users',JSON.stringify(users));
  closeUserModal();renderUsers();toast('Cliente eliminado.','warn');
}

function exportUsersCSV(){
  const users=getUsers().filter(u=>u.email!=='test@liveco.mx');
  if(!users.length){toast('Sin usuarios para exportar.','warn');return;}
  const header='Nombre,Email,Teléfono,Registrado\n';
  const rows=users.map(u=>`${u.name},${u.email},${u.phone||''},${u.created?new Date(u.created).toLocaleDateString('es-MX'):''}`).join('\n');
  downloadFile('liveco-clientes.csv',header+rows,'text/csv');
  toast('CSV exportado.','ok');
}

/* ================================================================
   INVENTORY
================================================================ */
function getAllCatalogItems(){
  const items=[];
  CATALOG_STEPS.forEach(step=>{
    step.sections.forEach(sec=>{
      sec.items.forEach(item=>{
        items.push({...item,category:step.id,categoryLabel:step.label,section:sec.lbl});
      });
    });
  });
  return items;
}

function renderInventory(){
  const search=($('inv-search')||{value:''}).value.toLowerCase();
  const cat=($('inv-cat')||{value:'all'}).value;
  const status=($('inv-status')||{value:'all'}).value;
  const saved=getInventory();
  const deletedIds=new Set(getDeletedItems());
  const customs=getCustomItems().map(ci=>({
    ...ci,
    categoryLabel:ci.category||'Personalizado',
    section:ci.section||'Equipos adicionales'
  }));
  let items=[...getAllCatalogItems(), ...customs].filter(i=>!deletedIds.has(i.id));

  if(search)items=items.filter(i=>(i.name||'').toLowerCase().includes(search)||(i.section||'').toLowerCase().includes(search));
  if(cat!=='all')items=items.filter(i=>i.category===cat);
  if(status!=='all'){
    items=items.filter(i=>{
      const avail=inventoryChanges[i.id]!==undefined?inventoryChanges[i.id]:(saved[i.id]!==undefined?saved[i.id]:i.stock);
      if(status==='out')return avail===0;
      if(status==='low')return avail>0&&avail<=3;
      return avail>4;
    });
  }

  $('inventory-list').innerHTML=items.length?items.map(item=>{
    const savedVal=saved[item.id]!==undefined?saved[item.id]:item.stock;
    const curVal=inventoryChanges[item.id]!==undefined?inventoryChanges[item.id]:savedVal;
    const changed=inventoryChanges[item.id]!==undefined;
    const cls=curVal===0?'out':curVal<=3?'low':'full';
    return `<div class="inv-item" id="inv-row-${item.id}">
      <div>
        <div class="inv-name" style="${changed?'color:var(--ye)':''}">${item.name}${changed?'<span style="font-size:9px;color:var(--ye);margin-left:6px">● modificado</span>':''}</div>
        <div class="inv-cat">${item.categoryLabel} · ${item.section}</div>
      </div>
      <div class="inv-avail ${cls}">${curVal}</div>
      <div class="inv-ctrl">
        <button class="inv-btn" onclick="adjustStock('${item.id}',-1,${item.stock})">−</button>
        <input class="inv-inp" type="number" id="ii-${item.id}" value="${curVal}" min="0" max="${item.stock*3}" onchange="setStock('${item.id}',this.value,${item.stock})"/>
        <button class="inv-btn" onclick="adjustStock('${item.id}',1,${item.stock})">+</button>
      </div>
      <div class="inv-max">Máx: <span>${item.stock*3}</span></div>
    </div>`;
  }).join(''):`<div class="tbl-empty"><div class="ei">📦</div>Sin resultados.</div>`;

  updatePendingBar();
}

function adjustStock(id,delta,baseStock){
  const saved=getInventory();
  const cur=inventoryChanges[id]!==undefined?inventoryChanges[id]:(saved[id]!==undefined?saved[id]:baseStock);
  const nv=Math.max(0,Math.min(baseStock*3,cur+delta));
  inventoryChanges[id]=nv;
  const inp=$(`ii-${id}`);if(inp)inp.value=nv;
  updateInvRow(id,nv);
  updatePendingBar();
}

function setStock(id,val,baseStock){
  let nv=parseInt(val)||0;
  nv=Math.max(0,Math.min(baseStock*3,nv));
  inventoryChanges[id]=nv;
  const inp=$(`ii-${id}`);if(inp)inp.value=nv;
  updateInvRow(id,nv);
  updatePendingBar();
}

function updateInvRow(id,nv){
  const row=$(`inv-row-${id}`);
  if(!row)return;
  const avail=row.querySelector('.inv-avail');
  if(avail){avail.textContent=nv;avail.className=`inv-avail ${nv===0?'out':nv<=3?'low':'full'}`;}
}

function updatePendingBar(){
  const n=Object.keys(inventoryChanges).length;
  const bar=$('inv-pending-bar');
  if(!bar)return;
  if(n>0){bar.classList.remove('hidden');$('inv-pending-count').textContent=`${n} cambio${n!==1?'s':''} sin guardar`;}
  else bar.classList.add('hidden');
}

function buildInventoryPayload(){
  const allItems=[...getAllCatalogItems(), ...getCustomItems().map(ci=>({
    ...ci,
    category:ci.category,
    categoryLabel:ci.category,
    section:ci.section
  }))];
  const inv=getInventory();
  const knownIds=new Set(allItems.map(i=>i.id));

  const payload=allItems.map(item=>({
    id:item.id,
    name:item.name||'',
    category:item.categoryLabel||item.category||'',
    section:item.section||'',
    stock_nuevo: inv[item.id]!==undefined ? inv[item.id] : item.stock
  }));

  Object.entries(inv).forEach(([id,stock])=>{
    if(!knownIds.has(id)){
      payload.push({
        id,
        name:id,
        category:'',
        section:'',
        stock_nuevo:stock
      });
    }
  });

  return payload;
}

async function saveInventory(){
  const payload=buildInventoryPayload();

  try {
    const res=await fetch(API_ROOT,{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(payload)
    });

    const data = await res.json().catch(()=>null);
    if(!res.ok || !data || data.status!=='success'){
      const message = data && data.message ? data.message : `Error al guardar inventario (${res.status})`;
      toast(`❌ No se pudo enviar el inventario: ${message}`,'err');
      return;
    }

    const saved=getInventory();
    Object.assign(saved,inventoryChanges);
    localStorage.setItem('lc_inventory',JSON.stringify(saved));
    inventoryChanges={};
    renderInventory();
    toast('✅ Inventario sincronizado con el servidor y guardado localmente.','ok');
    logActivity('admin','Admin actualizó el inventario de equipos',{icon:'📦',bg:'var(--ac-d)'});
  } catch(err){
    toast('❌ Fallo de red al enviar el inventario.','err');
    console.error('saveInventory error',err);
  }
}

function resetAllStock(){
  if(!confirm('¿Restaurar el stock base de todos los equipos?'))return;
  const reset={};
  getAllCatalogItems().forEach(i=>reset[i.id]=i.stock);
  localStorage.setItem('lc_inventory',JSON.stringify(reset));
  inventoryChanges={};
  renderInventory();
  toast('Stock restaurado a valores base.','ok');
}

function bulkClearInventory(){
  const search=($('inv-search')||{value:''}).value.toLowerCase();
  const cat=($('inv-cat')||{value:'all'}).value;
  const status=($('inv-status')||{value:'all'}).value;
  const saved=getInventory();
  
  let items=getAllCatalogItems();
  if(search)items=items.filter(i=>i.name.toLowerCase().includes(search)||i.section.toLowerCase().includes(search));
  if(cat!=='all')items=items.filter(i=>i.category===cat);
  if(status!=='all'){
    items=items.filter(i=>{
      const avail=inventoryChanges[i.id]!==undefined?inventoryChanges[i.id]:(saved[i.id]!==undefined?saved[i.id]:i.stock);
      if(status==='out')return avail===0;
      if(status==='low')return avail>0&&avail<=3;
      return avail>4;
    });
  }

  if(!items.length){toast('Sin equipos para eliminar con los filtros aplicados.','info');return;}
  
  const msg=`¿Eliminar completamente ${items.length} equipo${items.length!==1?'s':''} del catálogo E inventario?\nFiltros: Búsqueda['${search||'todas'}'], Categoría[${cat}], Estado[${status}]`;
  if(!confirm(msg))return;
  
  const inv=getInventory();
  const deleted=new Set(getDeletedItems());
  const custom=getCustomItems();
  const idsToDelete=[];
  
  items.forEach(item=>{
    delete inv[item.id];
    idsToDelete.push(item.id);
    if(item.custom){
      const idx=custom.findIndex(c=>c.id===item.id);
      if(idx>-1)custom.splice(idx,1);
    }else{
      deleted.add(item.id);
    }
  });
  
  localStorage.setItem('lc_inventory',JSON.stringify(inv));
  localStorage.setItem('lc_deleted_items',JSON.stringify([...deleted]));
  localStorage.setItem('lc_custom_items',JSON.stringify(custom));
  
  inventoryChanges={};
  
  // Send delete request to DB
  sendDeleteToDatabase(idsToDelete);
  
  renderInventory();
  toast(`🗑 ${items.length} equipo${items.length!==1?'s':''} eliminado${items.length!==1?'s':''} completamente. Enviando a BD...`,'warn');
}

async function sendDeleteToDatabase(ids){
  try{
    const payload=ids.map(id=>({id, stock_nuevo: -1}));
    const res=await fetch(API_ROOT,{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({action:'delete', items:payload})
    });
    const data=await res.json().catch(()=>null);
    if(data && data.status==='success'){
      toast('✅ Eliminados de la BD también.','ok');
    }else{
      toast('⚠️ BD: es posible que no se hayan sincronizado todos.','warn');
    }
  }catch(err){
    toast('⚠️ Error al sincronizar con BD: '+err.message,'err');
  }
}

/* ================================================================
   CATALOG EDITOR
================================================================ */
function renderCatalog(){
  const overrides=getCatalogOverrides();
  $('catalog-editor').innerHTML=CATALOG_STEPS.map(step=>`
    <div class="cat-section">
      <div class="cat-sec-hd" onclick="toggleCatSection('${step.id}')">
        <div class="cat-sec-title">${step.icon} ${step.label}</div>
        <span class="cat-sec-arrow ${collapsedSections[step.id]?'':'open'}">▼</span>
      </div>
      ${step.sections.map(sec=>`
        <div class="${collapsedSections[step.id]?'hidden':''}">
          <div style="padding:8px 18px 4px;font-size:10px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--t3);background:rgba(255,255,255,.015)">${sec.lbl}</div>
          <div class="cat-items" id="citems-${sec.id}">
            ${sec.items.map(item=>{
              const ov=overrides[item.id]||{};
              const price=ov.price!==undefined?ov.price:item.price;
              const min=ov.min!==undefined?ov.min:item.min;
              const stock=ov.stock!==undefined?ov.stock:item.stock;
              const changed=!!catalogEdits[item.id];
              return `<div class="cat-item" draggable="true" data-id="${item.id}">
                <div class="drag-handle">⠿</div>
                <div>
                  <div class="cat-item-name" style="${changed?'color:var(--ye)':''}">${item.name}</div>
                  <div class="cat-item-desc">${item.desc}</div>
                </div>
                <div>
                  <div style="font-size:9px;color:var(--t3);margin-bottom:3px">Precio (MXN)</div>
                  <input class="ci-input" type="number" value="${price}" onchange="editCatalogItem('${item.id}','price',this.value)" style="width:80px"/>
                </div>
                <div>
                  <div style="font-size:9px;color:var(--t3);margin-bottom:3px">Mín. renta</div>
                  <input class="ci-input" type="number" value="${min}" min="0" onchange="editCatalogItem('${item.id}','min',this.value)" style="width:60px"/>
                </div>
                <div>
                  <div style="font-size:9px;color:var(--t3);margin-bottom:3px">Stock base</div>
                  <input class="ci-input" type="number" value="${stock}" min="0" onchange="editCatalogItem('${item.id}','stock',this.value)" style="width:60px"/>
                </div>
                <button class="cat-save-btn" onclick="saveOneItem('${item.id}')">✓ Aplicar</button>
              </div>`;
            }).join('')}
          </div>
        </div>`).join('')}
    </div>`).join('');

  // Drag & drop
  initDragDrop();
}

function toggleCatSection(id){
  collapsedSections[id]=!collapsedSections[id];
  renderCatalog();
}

function editCatalogItem(id,field,val){
  if(!catalogEdits[id])catalogEdits[id]={};
  catalogEdits[id][field]=field==='price'||field==='stock'||field==='min'?parseInt(val)||0:val;
  $('unsaved-indicator').classList.remove('hidden');
}

function saveOneItem(id){
  if(!catalogEdits[id])return;
  const ov=getCatalogOverrides();
  ov[id]=Object.assign(ov[id]||{},catalogEdits[id]);
  localStorage.setItem('lc_catalog',JSON.stringify(ov));
  delete catalogEdits[id];
  if(!Object.keys(catalogEdits).length)$('unsaved-indicator').classList.add('hidden');
}

async function publishCatalog(){
  const ov=getCatalogOverrides();
  Object.keys(catalogEdits).forEach(id=>{
    if(id==='_structureChanged') return;
    ov[id]=Object.assign(ov[id]||{},catalogEdits[id]);
  });
  localStorage.setItem('lc_catalog',JSON.stringify(ov));

  // Push overrides to API
  const overrideItems = Object.entries(ov).map(([id, v]) => ({id, ...v}));
  if(overrideItems.length){
    try {
      await fetch(API_ROOT, {
        method:'POST', headers:{'Content-Type':'application/json'},
        body: JSON.stringify({action:'save_catalog_override', items: overrideItems})
      });
    } catch(err){ console.error('publishCatalog overrides', err); }
  }

  // Push custom items
  const customs = getCustomItems();
  if(customs.length){
    try {
      await fetch(API_ROOT, {
        method:'POST', headers:{'Content-Type':'application/json'},
        body: JSON.stringify({action:'save_custom', items: customs})
      });
    } catch(err){ console.error('publishCatalog customs', err); }
  }

  // Push deleted base items
  const deleted = getDeletedItems();
  if(deleted.length){
    try {
      await fetch(API_ROOT, {
        method:'POST', headers:{'Content-Type':'application/json'},
        body: JSON.stringify({action:'mark_deleted', ids: deleted})
      });
    } catch(err){ console.error('publishCatalog deleted', err); }
  }

  catalogEdits={};
  $('unsaved-indicator').classList.add('hidden');
  toast('🚀 Catálogo publicado y sincronizado con el servidor.','ok');
  logActivity('admin','Admin publicó cambios en el catálogo',{icon:'✏️',bg:'var(--pu-d)'});
}

async function resetCatalog(){
  if(!confirm('¿Descartar todos los cambios del catálogo?'))return;
  catalogEdits={};
  localStorage.removeItem('lc_catalog');
  $('unsaved-indicator').classList.add('hidden');
  try {
    await fetch(API_ROOT, {
      method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({action:'reset_catalog'})
    });
  } catch(err){ console.error('resetCatalog', err); }
  renderCatalog();toast('Catálogo restaurado y sincronizado con el servidor.','info');
}

function initDragDrop(){
  let dragEl=null;
  document.querySelectorAll('.cat-item').forEach(el=>{
    el.addEventListener('dragstart',()=>{dragEl=el;el.classList.add('dragging');});
    el.addEventListener('dragend',()=>{el.classList.remove('dragging');dragEl=null;});
    el.addEventListener('dragover',e=>{e.preventDefault();if(dragEl&&dragEl!==el){const r=el.getBoundingClientRect();const mid=r.top+r.height/2;el.parentNode.insertBefore(dragEl,e.clientY<mid?el:el.nextSibling);}});
  });
}

/* ================================================================
   SETTINGS
================================================================ */
function toggleSetting(id){
  const el=$(id);if(el)el.classList.toggle('on');
  toast('Configuración actualizada.','ok');
}

function saveSettings(){
  const settings=getSettings();
  settings.baseHrs=parseInt($('cfg-base-hrs').value)||8;
  settings.extraRate=parseInt($('cfg-extra-rate').value)||12;
  settings.assemblyCost1=parseInt($('cfg-ass1').value)||12000;
  settings.assemblyCost2=parseInt($('cfg-ass2').value)||22000;
  localStorage.setItem('lc_settings',JSON.stringify(settings));
  toast('✅ Parámetros de precio guardados.','ok');
}

function saveAdminSettings(){
  const settings=getSettings();
  const em=$('cfg-admin-em').value.trim();
  const pw=$('cfg-admin-pw').value;
  if(em)settings.adminEmail=em;
  if(pw)settings.adminPass=pw;
  settings.companyName=$('cfg-company').value||'LiveCo';
  localStorage.setItem('lc_settings',JSON.stringify(settings));
  toast('✅ Acceso de administrador actualizado.','ok');
}

function clearOrders(){if(!confirm('¿Eliminar TODOS los pedidos?'))return;localStorage.removeItem('lc_orders');renderOrders();updateBadges();toast('Pedidos eliminados.','warn');}
function clearUsers(){if(!confirm('¿Eliminar todos los usuarios (excepto demo)?'))return;localStorage.setItem('lc_users',JSON.stringify([]));renderUsers();toast('Usuarios eliminados.','warn');}
function resetAllData(){
  if(!confirm('¿RESET TOTAL del sistema? Esto eliminará TODOS los datos.'))return;
  if(!confirm('Última confirmación: ¿estás seguro?'))return;
  ['lc_users','lc_orders','lc_activity','lc_visits','lc_inventory','lc_catalog','lc_settings'].forEach(k=>localStorage.removeItem(k));
  inventoryChanges={};catalogEdits={};
  refreshAll();toast('Sistema reseteado completamente.','warn');
}

/* ================================================================
   CSV DOWNLOAD HELPER
================================================================ */
function downloadFile(name,content,type){
  const a=document.createElement('a');
  a.href='data:'+type+';charset=utf-8,'+encodeURIComponent(content);
  a.download=name;document.body.appendChild(a);a.click();document.body.removeChild(a);
}

/* ================================================================
   CATALOG — ADD ITEM
================================================================ */
// Runtime additions/deletions stored in localStorage
function getCustomItems(){return JSON.parse(localStorage.getItem('lc_custom_items')||'[]')}
function saveCustomItems(arr){localStorage.setItem('lc_custom_items',JSON.stringify(arr))}
function getDeletedItems(){return JSON.parse(localStorage.getItem('lc_deleted_items')||'[]')}
function saveDeletedItems(arr){localStorage.setItem('lc_deleted_items',JSON.stringify(arr))}

function openNewItemModal(prefillCat){
  if(prefillCat)$('nim-cat').value=prefillCat;
  $('nim-name').value='';$('nim-desc').value='';$('nim-section').value='';
  $('nim-price').value='';$('nim-stock').value='';$('nim-min').value='1';$('nim-id').value='';
  $('new-item-modal').classList.remove('hidden');
  setTimeout(()=>$('nim-name').focus(),100);
}
function closeNewItemModal(){$('new-item-modal').classList.add('hidden')}

async function saveNewItem(){
  const name=$('nim-name').value.trim();
  const desc=$('nim-desc').value.trim();
  const cat=$('nim-cat').value;
  const section=$('nim-section').value.trim()||'Equipos adicionales';
  const price=parseInt($('nim-price').value)||0;
  const stock=parseInt($('nim-stock').value)||0;
  const min=parseInt($('nim-min').value)||1;
  let id=$('nim-id').value.trim().replace(/\s+/g,'-').toLowerCase();

  if(!name||!desc||!price){toast('Nombre, descripción y precio son obligatorios.','err');return}
  if(!id) id=`custom-${cat}-${Date.now()}`;

  const custom=getCustomItems();
  const idx=custom.findIndex(i=>i.id===id);
  const newItem={id,name,desc,price,stock,min,category:cat,section,custom:true,created:Date.now()};
  if(idx>-1)custom[idx]=newItem; else custom.push(newItem);
  saveCustomItems(custom);

  const inv=getInventory();inv[id]=stock;localStorage.setItem('lc_inventory',JSON.stringify(inv));
  saveDeletedItems(getDeletedItems().filter(d=>d!==id));

  // Push to API immediately
  try {
    await fetch(API_ROOT, {
      method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({action:'save_custom', items:[newItem]})
    });
    // also remove from deleted on the server in case it existed
    await fetch(API_ROOT, {
      method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({action:'restore_deleted', ids:[id]})
    });
  } catch(err){ console.error('saveNewItem sync', err); }

  closeNewItemModal();
  markUnsaved();
  renderCatalog();
  if(currentPage==='inventory') renderInventory();
  toast(`✅ "${name}" agregado al catálogo y sincronizado.`,'ok');
}

async function deleteCustomItem(id,name){
  if(!confirm(`¿Eliminar "${name}" del catálogo?\nEsto lo ocultará en el configurador al publicar.`))return;
  const wasCustom = getCustomItems().some(i=>i.id===id);
  const custom=getCustomItems().filter(i=>i.id!==id);
  saveCustomItems(custom);
  const deleted=getDeletedItems();
  if(!deleted.includes(id))deleted.push(id);
  saveDeletedItems(deleted);

  try {
    if(wasCustom){
      await fetch(API_ROOT, {
        method:'POST', headers:{'Content-Type':'application/json'},
        body: JSON.stringify({action:'delete_custom', ids:[id]})
      });
    }
    await fetch(API_ROOT, {
      method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({action:'mark_deleted', ids:[id]})
    });
  } catch(err){ console.error('deleteCustomItem sync', err); }

  markUnsaved();
  renderCatalog();
  if(currentPage==='inventory') renderInventory();
  toast(`"${name}" eliminado y sincronizado.`,'warn');
}

function bulkDeleteCatalog(){
  if(!confirm('¿Eliminar todo el catálogo actual? Esto ocultará todos los equipos en el configurador al publicar.'))return;
  const baseIds=getAllCatalogItems().map(i=>i.id);
  const deleted=new Set(getDeletedItems());
  baseIds.forEach(id=>deleted.add(id));
  saveDeletedItems([...deleted]);
  saveCustomItems([]);
  markUnsaved();
  renderCatalog();
  toast('✅ Catálogo marcado como eliminado masivamente. Publica para aplicar los cambios.','warn');
}

function bulkDeleteCatalog(){
  if(!confirm('¿Eliminar todo el catálogo actual? Esto ocultará todos los equipos en el configurador al publicar.'))return;
  const baseIds=getAllCatalogItems().map(i=>i.id);
  const deleted=new Set(getDeletedItems());
  baseIds.forEach(id=>deleted.add(id));
  saveDeletedItems([...deleted]);
  saveCustomItems([]);
  markUnsaved();
  renderCatalog();
  toast('✅ Catálogo marcado como eliminado masivamente. Publica para aplicar los cambios.','warn');
}

function markUnsaved(){
  catalogEdits._structureChanged=true;
  $('unsaved-indicator').classList.remove('hidden');
}

/* ================================================================
   CATALOG RENDER — extended to show custom items + delete buttons
================================================================ */
// Override renderCatalog to include adds/deletes
const _origRenderCatalog=renderCatalog;
renderCatalog=function(){
  const overrides=getCatalogOverrides();
  const customItems=getCustomItems();
  const deletedIds=getDeletedItems();
  
  const knownCategories = new Set(CATALOG_STEPS.map(s => s.id));

  // Build merged step list: base steps + inject custom items into matching categories
  const mergedSteps=CATALOG_STEPS.map(step=>{
    const stepCustom=customItems.filter(ci=>ci.category===step.id);

    const filteredSections=step.sections.map(sec=>({
      ...sec,
      items:sec.items.filter(item=>!deletedIds.includes(item.id))
    }));

    const customBySec={};
    stepCustom.forEach(ci=>{
      const match = filteredSections.find(s => s.lbl.toLowerCase() === (ci.section||'').toLowerCase());
      if(match) match.items.push(ci);
      else {
        const secName = ci.section || 'Equipos adicionales';
        if(!customBySec[secName]) customBySec[secName]=[];
        customBySec[secName].push(ci);
      }
    });

    // Add custom sections
    const extraSecs=Object.entries(customBySec).map(([secLbl,items])=>({
      id:`custom-sec-${step.id}-${secLbl.replace(/\s+/g,'-')}`,
      lbl:secLbl,
      items,
      isCustom:true
    }));

    return{...step,sections:[...filteredSections,...extraSecs]};
  });

  // Add categories that are not in CATALOG_STEPS
  const unknownCustom = customItems.filter(ci => !knownCategories.has(ci.category));
  const extraCategoriesMap = {};
  unknownCustom.forEach(ci => {
    const cat = ci.category || 'otros';
    if(!extraCategoriesMap[cat]) extraCategoriesMap[cat] = [];
    extraCategoriesMap[cat].push(ci);
  });

  const extraSteps = Object.entries(extraCategoriesMap).map(([catId, items]) => {
    const sectionsMap = {};
    items.forEach(ci => {
      const sec = ci.section || 'Equipos adicionales';
      if(!sectionsMap[sec]) sectionsMap[sec] = [];
      sectionsMap[sec].push(ci);
    });
    return {
      id: catId,
      label: catId.charAt(0).toUpperCase() + catId.slice(1),
      icon: '📦',
      sections: Object.entries(sectionsMap).map(([secLbl, secItems]) => ({
        id: `custom-sec-${catId}-${secLbl.replace(/\s+/g,'-')}`,
        lbl: secLbl,
        items: secItems,
        isCustom: true
      }))
    };
  });

  const allSteps = [...mergedSteps, ...extraSteps];

  $('catalog-editor').innerHTML=allSteps.map(step=>`
    <div class="cat-section">
      <div class="cat-sec-hd" onclick="toggleCatSection('${step.id}')">
        <div class="cat-sec-title">${step.icon} ${step.label}</div>
        <div style="display:flex;align-items:center;gap:8px">
          <button class="btn btn-green btn-sm" style="font-size:10px;padding:4px 10px" onclick="event.stopPropagation();openNewItemModal('${step.id}')">＋ Agregar</button>
          <span class="cat-sec-arrow ${collapsedSections[step.id]?'':'open'}">▼</span>
        </div>
      </div>
      ${step.sections.filter(s=>s.items.length>0).map(sec=>`
        <div class="${collapsedSections[step.id]?'hidden':''}">
          <div style="padding:8px 18px 4px;font-size:10px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--t3);background:rgba(255,255,255,.015);display:flex;align-items:center;gap:8px">
            ${sec.lbl}
            ${sec.isCustom?'<span style="font-size:9px;background:var(--gr-d);color:var(--gr);padding:1px 6px;border-radius:4px;font-weight:700">NUEVO</span>':''}
          </div>
          <div class="cat-items" id="citems-${sec.id}">
            ${sec.items.map(item=>{
              const ov=overrides[item.id]||{};
              const price=ov.price!==undefined?ov.price:item.price;
              const min=ov.min!==undefined?ov.min:item.min;
              const stock=ov.stock!==undefined?ov.stock:item.stock;
              const changed=!!catalogEdits[item.id];
              const isCustom=!!item.custom;
              return `<div class="cat-item" draggable="true" data-id="${item.id}">
                <div class="drag-handle" title="Arrastrar para reordenar">⠿</div>
                <div style="min-width:0">
                  <div class="cat-item-name" style="${changed?'color:var(--ye)':''}${isCustom?';color:var(--gr)':''}">
                    ${item.name}
                    ${isCustom?'<span style="font-size:9px;background:var(--gr-d);color:var(--gr);padding:1px 5px;border-radius:3px;margin-left:4px">CUSTOM</span>':''}
                  </div>
                  <div class="cat-item-desc">${item.desc}</div>
                  <div style="font-size:9px;color:var(--t3);margin-top:2px;font-family:monospace">${item.id}</div>
                </div>
                <div>
                  <div style="font-size:9px;color:var(--t3);margin-bottom:3px">Precio MXN</div>
                  <input class="ci-input" type="number" value="${price}" onchange="editCatalogItem('${item.id}','price',this.value)" style="width:80px"/>
                </div>
                <div>
                  <div style="font-size:9px;color:var(--t3);margin-bottom:3px">Mín. renta</div>
                  <input class="ci-input" type="number" value="${min}" min="0" onchange="editCatalogItem('${item.id}','min',this.value)" style="width:56px"/>
                </div>
                <div>
                  <div style="font-size:9px;color:var(--t3);margin-bottom:3px">Stock base</div>
                  <input class="ci-input" type="number" value="${stock}" min="0" onchange="editCatalogItem('${item.id}','stock',this.value)" style="width:56px"/>
                </div>
                <div style="display:flex;flex-direction:column;gap:5px">
                  <button class="cat-save-btn" onclick="saveOneItem('${item.id}')">✓ Aplicar</button>
                  <button onclick="deleteCustomItem('${item.id.replace(/'/g,"\\'")}','${item.name.replace(/'/g,"\\'")}');event.stopPropagation()"
                    style="padding:3px 8px;border-radius:5px;background:var(--re-d);color:var(--re);border:1px solid rgba(245,92,92,.2);font-size:10px;font-weight:700;cursor:pointer;font-family:var(--fd);white-space:nowrap">
                    ✕ Eliminar
                  </button>
                </div>
              </div>`;
            }).join('')}
          </div>
        </div>`).join('')}
      ${!collapsedSections[step.id]?`
        <div style="padding:10px 18px;border-top:1px solid var(--bd)">
          <button class="btn btn-ghost btn-sm" style="font-size:11px;color:var(--gr)" onclick="openNewItemModal('${step.id}')">
            ＋ Agregar equipo a ${step.label}
          </button>
        </div>`:''}`
  ).join('');

  initDragDrop();
};

/* ================================================================
   STOCK CSV UPLOAD
================================================================ */
let uploadedStockData=null;

function downloadStockTemplate(){
  const items=getAllCatalogItems();
  const customItems=getCustomItems();
  const allItems=[...items,...customItems.map(ci=>({...ci,category:ci.category,section:ci.section}))];
  const inv=getInventory();

  const header='id,nombre,categoria,seccion,stock_actual,stock_nuevo,precio\n';
  const rows=allItems.map(i=>{
    const cur=inv[i.id]!==undefined?inv[i.id]:i.stock;
    return `${i.id},"${i.name}","${i.categoryLabel||i.category}","${i.section}",${cur},${cur},${i.price||0}`;
  }).join('\n');
  const content=header+rows;
  downloadFile(`liveco-stock-${new Date().toISOString().slice(0,10)}.csv`,content,'text/csv');
  toast('📄 Plantilla CSV descargada. Edita las columnas "stock_nuevo" y "precio" si quieres actualizar precio también.','info');
}

function handleStockFileUpload(input){
  const file=input.files[0];
  if(!file){return;}
  const ext=file.name.split('.').pop().toLowerCase();
  if(!['csv'].includes(ext)){
    toast('Por ahora solo se aceptan archivos .CSV. Descarga la plantilla para el formato correcto.','err');
    input.value='';return;
  }
  const reader=new FileReader();
  reader.onload=e=>{
    try{
      parseAndPreviewCSV(e.target.result,file.name);
    }catch(err){
      toast('Error al leer el archivo: '+err.message,'err');
    }
  };
  reader.readAsText(file,'UTF-8');
  input.value='';
}

function parseAndPreviewCSV(text,fileName){
  const lines=text.trim().split(/\r?\n/);
  if(lines.length<2){toast('El archivo está vacío o no tiene datos.','err');return;}

  const headers=lines[0].split(',').map(h=>h.trim().toLowerCase().replace(/"/g,''));
  const idCol=headers.indexOf('id');
  const nameCol=headers.findIndex(h=>h.includes('nombre')||h==='name');
  const newStockCol=headers.findIndex(h=>h.includes('stock_nuevo')||h==='stock_new'||h==='nuevo');
  const curStockCol=headers.findIndex(h=>h.includes('stock_actual')||h==='stock_current'||h==='actual');
  const priceCol=headers.findIndex(h=>h.includes('precio')||h==='price');

  if(idCol===-1||newStockCol===-1){
    toast('El CSV debe tener columnas "id" y "stock_nuevo". Descarga la plantilla.','err');return;
  }

  const allItems=getAllCatalogItems();
  const customItems=getCustomItems();
  const allIds=new Set([...allItems.map(i=>i.id),...customItems.map(i=>i.id)]);
  const inv=getInventory();

  const changes=[];const errors=[];
  lines.slice(1).forEach((line,li)=>{
    if(!line.trim())return;
    // Handle quoted fields
    const cols=line.match(/(".*?"|[^,]+)(?=,|$)/g)||line.split(',');
    const clean=c=>(c||'').trim().replace(/^"|"$/g,'');
    const id=clean(cols[idCol]);
    const newStock=parseInt(clean(cols[newStockCol]));
    const name=nameCol>-1?clean(cols[nameCol]):id;
    const price=priceCol>-1 ? parseInt(clean(cols[priceCol])) : undefined;
    
    const catCol=headers.findIndex(h=>h.includes('categoria')||h==='category');
    const secCol=headers.findIndex(h=>h.includes('seccion')||h==='section');
    const category=catCol>-1 ? clean(cols[catCol]) : undefined;
    const section=secCol>-1 ? clean(cols[secCol]) : undefined;

    if(!id){errors.push(`Fila ${li+2}: ID vacío`);return;}
    if(isNaN(newStock)||newStock<0){errors.push(`Fila ${li+2} (${id}): stock inválido "${clean(cols[newStockCol])}"`);return;}

    const curStock=inv[id]!==undefined?inv[id]:(allItems.find(i=>i.id===id)||{}).stock||0;
    const known=allIds.has(id);
    changes.push({id,name,curStock,newStock,delta:newStock-curStock,known,price,category,section});
  });

  uploadedStockData=changes;
  const unknownRows=changes.filter(c=>!c.known);

  const el=$('stock-upload-result');
  const applyBtn=$('stock-apply-btn');

  let html=`<div style="margin-bottom:14px">
    <div style="font-family:var(--fd);font-size:14px;font-weight:700;margin-bottom:4px">📂 ${fileName}</div>
    <div style="font-size:12px;color:var(--t2)">${lines.length-1} filas procesadas · ${uploadedStockData.length} equipos reconocidos · ${unknownRows.length} IDs no encontrados</div>
  </div>`;

  if(errors.length){
    html+=`<div style="background:var(--re-d);border:1px solid rgba(245,92,92,.2);border-radius:var(--r2);padding:12px;margin-bottom:12px;font-size:11px">
      <div style="color:var(--re);font-weight:700;margin-bottom:6px">⚠ ${errors.length} error(es) en el archivo:</div>
      ${errors.map(e=>`<div style="color:var(--t2);padding:2px 0">• ${e}</div>`).join('')}
    </div>`;
  }

  if(unknownRows.length){
    html+=`<div style="background:var(--ye-d);border:1px solid rgba(245,200,66,.2);border-radius:var(--r2);padding:12px;margin-bottom:12px;font-size:11px">
      <div style="color:var(--ye);font-weight:700;margin-bottom:6px">⚠ ${unknownRows.length} ID(s) no encontrados en el catálogo (se crearán en la base de datos si no existen):</div>
      ${unknownRows.map(r=>`<div style="color:var(--t2);font-family:monospace;padding:1px 0">• ${r.id}</div>`).join('')}
    </div>`;
  }

  if(uploadedStockData.length){
    const gains=uploadedStockData.filter(c=>c.delta>0);
    const losses=uploadedStockData.filter(c=>c.delta<0);
    const same=uploadedStockData.filter(c=>c.delta===0);
    const showPrice=uploadedStockData.some(c=>c.price!==undefined);
    html+=`<div style="background:var(--gr-d);border:1px solid rgba(45,212,160,.2);border-radius:var(--r2);padding:12px;margin-bottom:14px;font-size:11px">
      <div style="color:var(--gr);font-weight:700;margin-bottom:4px">✓ ${uploadedStockData.length} cambios listos para aplicar</div>
      <div style="color:var(--t2)">${gains.length} aumentos · ${losses.length} reducciones · ${same.length} sin cambio</div>
    </div>
    <div style="max-height:280px;overflow-y:auto;border:1px solid var(--bd);border-radius:var(--r2)">
      <table class="admin-tbl">
        <thead><tr><th>Equipo</th><th>ID</th><th style="text-align:center">Actual</th><th style="text-align:center">Nuevo</th><th style="text-align:center">Δ</th>${showPrice?'<th style="text-align:center">Precio</th>':''}</tr></thead>
        <tbody>
          ${uploadedStockData.map(c=>{
            const deltaColor=c.delta>0?'var(--gr)':c.delta<0?'var(--re)':'var(--t3)';
            const deltaStr=c.delta>0?`+${c.delta}`:c.delta===0?'—':c.delta;
            return `<tr>
              <td class="name-cell" style="font-size:11px">${c.name}</td>
              <td style="font-family:monospace;font-size:10px;color:var(--t3)">${c.id}</td>
              <td style="text-align:center;font-size:12px">${c.curStock}</td>
              <td style="text-align:center;font-weight:700;font-size:12px;color:${c.delta!==0?'var(--ac)':'var(--t2)'}">${c.newStock}</td>
              <td style="text-align:center;font-weight:700;font-size:12px;color:${deltaColor}">${deltaStr}</td>
              ${showPrice?`<td style="text-align:center;font-size:12px;font-weight:700;color:var(--t2)">${c.price!==undefined?c.price:'—'}</td>`:''}
            </tr>`;
          }).join('')}
        </tbody>
      </table>
    </div>`;
    applyBtn.style.display='';
  } else {
    applyBtn.style.display='none';
    html+=`<div style="text-align:center;color:var(--t3);padding:24px;font-size:13px">Sin cambios válidos para aplicar.</div>`;
  }

  el.innerHTML=html;
  $('stock-upload-modal').classList.remove('hidden');
}

async function applyUploadedStock(){
  if(!uploadedStockData||!uploadedStockData.length)return;
  const inv=getInventory();
  const catalog=getCatalogOverrides();
  const deleted=getDeletedItems();
  const customs=getCustomItems();
  const count=uploadedStockData.length;
  const newCustoms=[];
  const overrideUpdates=[];
  const inventoryUpdates=[];
  const restoreIds=[];

  uploadedStockData.forEach(c=>{
    inv[c.id]=c.newStock;
    inventoryUpdates.push({id:c.id, name:c.name, stock:c.newStock});

    if(c.price!==undefined && !isNaN(c.price)){
      catalog[c.id]=Object.assign(catalog[c.id]||{}, {price:c.price});
      overrideUpdates.push({id:c.id, price:c.price});
    }

    const delIdx=deleted.indexOf(c.id);
    if(delIdx>-1){deleted.splice(delIdx,1);restoreIds.push(c.id);}

    if(c.known) {
      const existingCustom = customs.find(x=>x.id===c.id);
      if(existingCustom) {
        let updated = false;
        if(c.category && c.category.toLowerCase() !== (existingCustom.category||'').toLowerCase()) { existingCustom.category = c.category.toLowerCase(); updated = true; }
        if(c.section && c.section !== existingCustom.section) { existingCustom.section = c.section; updated = true; }
        if(c.name && c.name !== existingCustom.name) { existingCustom.name = c.name; updated = true; }
        if(updated && !newCustoms.includes(existingCustom)) newCustoms.push(existingCustom);
      }
    }

    // Auto-create a custom item record for unknown IDs so they appear in inventory + cotizador
    if(!c.known && !customs.some(x=>x.id===c.id)){
      const newC = {
        id:c.id,
        name:c.name||c.id,
        desc:'Equipo importado vía CSV',
        price:(c.price!==undefined&&!isNaN(c.price))?c.price:0,
        stock:c.newStock,
        min:1,
        category:c.category ? c.category.toLowerCase() : 'audio',
        section:c.section || 'Equipos importados',
        custom:true,
        created:Date.now()
      };
      customs.push(newC);
      newCustoms.push(newC);
    }
  });

  localStorage.setItem('lc_inventory',JSON.stringify(inv));
  localStorage.setItem('lc_catalog',JSON.stringify(catalog));
  localStorage.setItem('lc_deleted_items',JSON.stringify(deleted));
  saveCustomItems(customs);

  // Sync everything to API
  try {
    if(inventoryUpdates.length){
      await fetch(API_ROOT,{method:'POST',headers:{'Content-Type':'application/json'},
        body:JSON.stringify(inventoryUpdates.map(i=>({id:i.id,name:i.name,stock:i.stock})))});
    }
    if(overrideUpdates.length){
      await fetch(API_ROOT,{method:'POST',headers:{'Content-Type':'application/json'},
        body:JSON.stringify({action:'save_catalog_override',items:overrideUpdates})});
    }
    if(newCustoms.length){
      await fetch(API_ROOT,{method:'POST',headers:{'Content-Type':'application/json'},
        body:JSON.stringify({action:'save_custom',items:newCustoms})});
    }
    if(restoreIds.length){
      await fetch(API_ROOT,{method:'POST',headers:{'Content-Type':'application/json'},
        body:JSON.stringify({action:'restore_deleted',ids:restoreIds})});
    }
  } catch(err){ console.error('applyUploadedStock sync', err); toast('⚠️ Algunos cambios no llegaron al servidor.','warn'); }

  uploadedStockData=null;
  closeStockModal();
  renderInventory();
  toast(`✅ Stock actualizado y sincronizado para ${count} equipos${newCustoms.length?` (${newCustoms.length} nuevos)`:''}.`, 'ok');
  logActivity('admin','Admin actualizó stock masivo via CSV',{icon:'📂',bg:'var(--bl-d)'});
}

function closeStockModal(){
  $('stock-upload-modal').classList.add('hidden');
  uploadedStockData=null;
  $('stock-upload-result').innerHTML='';
  $('stock-apply-btn').style.display='none';
}

/* ================================================================
   BOOT
================================================================ */
window.addEventListener('DOMContentLoaded',()=>{
  updateBadges();
});
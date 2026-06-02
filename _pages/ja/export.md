---
page_id: export
layout: page
permalink: /export/
title: エクスポート
description: ResearchmapおよびORCIDへのエクスポート用データダウンロード
nav: false
---

<p style="font-size:0.9em; color:#666; margin-bottom:1.5rem;">
各セクションで期間（年）を入力してCSVをダウンロードし、Researchmapの「インポート」からアップロードしてください。空欄の場合は全件対象です。
</p>

---

## 講演・口頭発表等

<div style="margin-bottom:0.5rem; font-size:0.9em;">
  <label>以降：</label>
  <input id="pres-year" type="number" placeholder="年" min="2000" max="2099" style="width:5em; padding:2px 6px; border:1px solid #ccc; border-radius:3px;">
  年
  <input id="pres-month" type="number" placeholder="月" min="1" max="12" style="width:4em; padding:2px 6px; border:1px solid #ccc; border-radius:3px;">
  月以降
  <button onclick="downloadPresentationsCSV()" class="btn btn-sm z-depth-0" style="font-size:0.9em;">Researchmap CSV ↓</button>
</div>

---

## 受賞

<div style="margin-bottom:0.5rem; font-size:0.9em;">
  <label>以降：</label>
  <input id="award-year" type="number" placeholder="年" min="2000" max="2099" style="width:5em; padding:2px 6px; border:1px solid #ccc; border-radius:3px;">
  年
  <input id="award-month" type="number" placeholder="月" min="1" max="12" style="width:4em; padding:2px 6px; border:1px solid #ccc; border-radius:3px;">
  月以降
  <button onclick="downloadAwardsCSV()" class="btn btn-sm z-depth-0" style="font-size:0.9em;">Researchmap CSV ↓</button>
</div>

---

## アウトリーチ活動

<div style="margin-bottom:0.5rem; font-size:0.9em;">
  <label>以降：</label>
  <input id="outreach-year" type="number" placeholder="年" min="2000" max="2099" style="width:5em; padding:2px 6px; border:1px solid #ccc; border-radius:3px;">
  年
  <input id="outreach-month" type="number" placeholder="月" min="1" max="12" style="width:4em; padding:2px 6px; border:1px solid #ccc; border-radius:3px;">
  月以降
  <button onclick="downloadOutreachCSV()" class="btn btn-sm z-depth-0" style="font-size:0.9em;">Researchmap CSV ↓</button>
</div>

---

## 論文

<div style="margin-bottom:0.5rem; font-size:0.9em;">
  <label>以降：</label>
  <input id="paper-year" type="number" placeholder="年" min="2000" max="2099" style="width:5em; padding:2px 6px; border:1px solid #ccc; border-radius:3px;">
  年
  <input id="paper-month" type="number" placeholder="月" min="1" max="12" style="width:4em; padding:2px 6px; border:1px solid #ccc; border-radius:3px;">
  月以降
  <button onclick="downloadPapersCSV()" class="btn btn-sm z-depth-0" style="font-size:0.9em;">Researchmap CSV ↓</button>
  &nbsp;
  <a href="{{ '/assets/papers.bib' | relative_url }}" download="papers.bib" class="btn btn-sm z-depth-0" style="font-size:0.9em;">BibTeX ↓ (ORCID用)</a>
</div>

---

<script>
var PRES_DATA     = {{ site.data.presentations | jsonify }};
var PRES_OLD      = {{ site.data.presentations_old | jsonify }};
var AWARD_DATA    = {{ site.data.awards | jsonify }};
var OUTREACH_DATA = {{ site.data.outreach_activities | jsonify }};
var OUTREACH_OLD  = {{ site.data.outreach_activities_old | jsonify }};

var MONTHS = {Jan:1,Feb:2,Mar:3,Apr:4,May:5,Jun:6,Jul:7,Aug:8,Sep:9,Oct:10,Nov:11,Dec:12};
function pad(n){ return String(n).padStart(2,'0'); }
function ym(mon,d,y){ return y+'-'+pad(MONTHS[mon])+'-'+pad(parseInt(d)); }

function parseDates(s) {
  s = String(s).replace(/[–—]/g,'-');
  var m;
  m = s.match(/^(\w+) (\d+), (\d{4})$/);
  if(m){ var ds=ym(m[1],m[2],m[3]); return [ds,ds]; }
  m = s.match(/^(\w+) (\d+)-(\d+), (\d{4})$/);
  if(m){ return [ym(m[1],m[2],m[4]), ym(m[1],m[3],m[4])]; }
  m = s.match(/^(\w+) (\d+)-(\w+) (\d+), (\d{4})$/);
  if(m){ return [ym(m[1],m[2],m[5]), ym(m[3],m[4],m[5])]; }
  return [null,null];
}

function parseOutreachDate(s) {
  if(!s) return null;
  s = String(s);
  var jm = s.match(/^(\d{4})年(\d{1,2})月(?:(\d{1,2})日)?/);
  if(jm) return jm[1]+'-'+pad(parseInt(jm[2]))+'-'+pad(parseInt(jm[3]||'1'));
  var d = parseDates(s);
  if(d[0]) return d[0];
  var my = s.match(/^(\w+)\s+(\d{4})$/);
  if(my && MONTHS[my[1]]) return my[2]+'-'+pad(MONTHS[my[1]])+'-01';
  var multi = s.match(/^(\w+)\s+(\d+)\s*[&,].+,\s*(\d{4})$/);
  if(multi && MONTHS[multi[1]]) return ym(multi[1], multi[2], multi[3]);
  return null;
}

function extractNames(html) {
  var names=[], re=/<u>(.*?)<\/u>/g, m;
  while((m=re.exec(html))!==null){
    var n=m[1].replace(/<[^>]+>/g,'').trim();
    if(n) names.push('['+n+']');
  }
  if(!names.length){
    html.replace(/<[^>]+>/g,'').split(/[,\/]/).forEach(function(n){
      n=n.trim(); if(n) names.push('['+n+']');
    });
  }
  return names.join('');
}

function isJa(s){ return /[぀-ゟ゠-ヿ一-鿿]/.test(s); }

function cell(v){
  if(v===null||v===undefined||v==='') return 'null';
  v=String(v);
  if(v.indexOf(',')>=0||v.indexOf('"')>=0||v.indexOf('\n')>=0)
    return '"'+v.replace(/"/g,'""')+'"';
  return v;
}

function triggerDownload(content, filename) {
  var blob=new Blob(['﻿'+content],{type:'text/csv;charset=utf-8'});
  var a=document.createElement('a');
  a.href=URL.createObjectURL(blob);
  a.download=filename;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
}

/* ========== 発表 ========== */
function downloadPresentationsCSV() {
  var all = PRES_DATA.concat(PRES_OLD);
  var yearVal = (document.getElementById('pres-year').value||'').trim();
  var monVal  = (document.getElementById('pres-month').value||'').trim();
  var cutoff  = yearVal ? (yearVal+'-'+pad(parseInt(monVal)||1)+'-01') : null;

  var TR={
    "浮揚電子による量子ビット":"Qubits with Floating Electrons",
    "液体ヘリウム・固体ネオン上の浮揚電子を用いた量子ビット":"Qubits Using Floating Electrons on Liquid Helium and Solid Neon",
    "極低温浮揚電子による量子メモリ創生への礎":"Foundation for Quantum Memory Creation Using Cryogenic Floating Electrons",
    "浮揚電子：真空中に拓く新しい量子ビットの可能性":"Floating Electrons: New Qubit Possibilities in Vacuum",
    "真空中に浮かぶ電子を用いた量子制御の基礎研究":"Fundamental Research on Quantum Control Using Electrons Floating in Vacuum",
    "液体ヘリウムおよび固体ネオン表面に浮かぶ電子":"Electrons Floating on Liquid Helium and Solid Neon Surfaces"
  };

  var headers=['アクション名','アクションタイプ','類似業績マージ優先度','ID','タイトル(日本語)','タイトル(英語)','講演者(日本語)','講演者(英語)','会議名(日本語)','会議名(英語)','発表年月日','開催年月日(From)','開催年月日(To)','招待の有無','記述言語','会議種別','主催者(日本語)','主催者(英語)','開催地(日本語)','開催地(英語)','国・地域','概要(日本語)','概要(英語)','国際・国内会議','国際共著','URL','URL2','主要な業績かどうか','公開の有無'];
  var lines=['presentations', headers.join(',')];

  all.forEach(function(p){
    var dates=parseDates(p.date||'');
    if(!dates[0]) return;
    if(cutoff&&dates[0]<cutoff) return;
    var lang=p.lang||'en', title=p.title||'', conf=p.conference||'';
    var inv=!!p.invited, ptype=p.type||'Oral';
    var venue=p.venue||'', venueEn=p.venue_en||venue;
    var titleJa=lang==='ja'?title:null;
    var titleEn=lang==='en'?title:(p.title_en||TR[title]||title);
    var presJa=lang==='ja'?extractNames(p.presenter_html||''):null;
    var presEn=lang==='en'?extractNames(p.presenter_html||''):(p.presenter_en_html?extractNames(p.presenter_en_html):null);
    var confJa=lang==='ja'?conf:null, confEn=lang==='en'?conf:null;
    var pt=ptype==='Poster'?'poster_presentation':(inv?'invited_oral_presentation':'oral_presentation');
    var lc=lang==='en'?'eng':'jpn', intl=lang==='en';
    var locEn=(venueEn&&!isJa(venueEn))?venueEn:null;
    var locJa=(lang==='ja'&&venue&&isJa(venue))?venue:null;
    lines.push([
      'insert','merge',null,null,titleJa,titleEn,presJa,presEn,
      confJa,confEn,dates[0],dates[0],dates[1],inv,lc,pt,
      null,null,locJa,locEn,null,null,null,intl,null,p.url||null,null,false,'disclosed'
    ].map(cell).join(','));
  });

  triggerDownload(lines.join('\n'), 'presentations_rm.csv');
}

/* ========== 受賞 ========== */
function downloadAwardsCSV() {
  var yearVal = (document.getElementById('award-year').value||'').trim();
  var monVal  = (document.getElementById('award-month').value||'').trim();
  var cutoff  = yearVal ? (yearVal+'-'+pad(parseInt(monVal)||1)+'-01') : null;
  var headers=['アクション名','アクションタイプ','類似業績マージ優先度','ID','賞名(日本語)','賞名(英語)','受賞者・グループ(日本語)','受賞者・グループ(英語)','タイトル(日本語)','タイトル(英語)','授与機関(日本語)','授与機関(英語)','概要(日本語)','概要(英語)','受賞年月','受賞区分','受賞国・地域','URL','主要な業績かどうか','公開の有無'];
  var lines=['awards', headers.join(',')];

  AWARD_DATA.forEach(function(a){
    if(cutoff && a.date && a.date < cutoff) return;
    var ym_str = a.date ? a.date.substring(0,7) : null;
    lines.push([
      'insert','merge',null,null,
      a.title_ja, a.title_en,
      '['+a.recipient_ja+']', '['+a.recipient_en+']',
      a.work_ja, a.work_en,
      a.institution_ja, a.institution_en,
      null, null,
      ym_str, null, null,
      a.url||null, false, 'disclosed'
    ].map(cell).join(','));
  });

  triggerDownload(lines.join('\n'), 'awards_rm.csv');
}

/* ========== アウトリーチ ========== */
function downloadOutreachCSV() {
  var yearVal = (document.getElementById('outreach-year').value||'').trim();
  var monVal  = (document.getElementById('outreach-month').value||'').trim();
  var headers=['アクション名','アクションタイプ','類似業績マージ優先度','ID','タイトル(日本語)','タイトル(英語)','役割','主催者・発行元(日本語)','主催者・発行元(英語)','イベント・番組・新聞雑誌名(日本語)','イベント・番組・新聞雑誌名(英語)','年月日(From)','年月日(To)','場所・掲載箇所(日本語)','場所・掲載箇所(英語)','種別','対象','概要(日本語)','概要(英語)','URL','主要な業績かどうか','公開の有無'];
  var lines=['social_contribution', headers.join(',')];

  var roleMap={'lecture':'[lecturer]','seminar':'[lecturer]','school':'[lecturer]',
               'web article':'[coverage_cooperation]','interview':'[coverage_cooperation,informant]'};
  var typeMap={'lecture':'lecture','seminar':'seminar','school':'seminar',
               'web article':'internet','interview':'internet'};

  OUTREACH_DATA.concat(OUTREACH_OLD).forEach(function(o){
    var dateStr = parseOutreachDate(o.date||'');
    if(!dateStr) return;
    var outreachCutoff = yearVal ? (yearVal+'-'+pad(parseInt(monVal)||1)+'-01') : null;
    if(outreachCutoff && dateStr < outreachCutoff) return;
    var lang = o.lang || (isJa(o.title||'') ? 'ja' : 'en');
    var title = o.title || '';
    var venue = o.venue || '';
    var venueEn = o.venue_en || (lang==='en' ? venue : null);
    var titleJa = (lang==='ja') ? title : null;
    var titleEn = (lang==='en') ? title : null;
    var orgJa = (lang==='ja' && isJa(venue)) ? venue : null;
    var orgEn = (venueEn && !isJa(venueEn)) ? venueEn : null;
    var fmt = o.format || '';
    var role = roleMap[fmt] || '[lecturer]';
    var type = typeMap[fmt] || null;
    lines.push([
      'insert','merge',null,null,
      titleJa, titleEn,
      role,
      orgJa, orgEn,
      null, null,
      dateStr, null,
      null, null,
      type, null,
      null, null,
      o.url||null, false, 'disclosed'
    ].map(cell).join(','));
  });

  triggerDownload(lines.join('\n'), 'outreach_rm.csv');
}

/* ========== 論文 ========== */
function parseBibTeX(text) {
  var entries = [];
  var re = /@(\w+)\{(\w+),([\s\S]*?)(?=\n@|\n*$)/g;
  var m;
  while((m=re.exec(text))!==null){
    var type=m[1].toLowerCase(), key=m[2], body=m[3];
    var fields={}, fr=/(\w+)\s*=\s*\{((?:[^{}]|\{[^{}]*\})*)\}/g, fm;
    while((fm=fr.exec(body))!==null) fields[fm[1].toLowerCase()]=fm[2].trim();
    entries.push({type:type, key:key, fields:fields});
  }
  return entries;
}

function cleanLatex(s) {
  return s.replace(/\{([^}]*)\}/g,'$1').replace(/\\[a-zA-Z]+\s*/g,'').trim();
}

function parseAuthors(authorStr) {
  return authorStr.split(/\s+and\s+/i).map(function(a){
    a=a.replace(/\*/g,'').trim();
    if(a.indexOf(',')>=0){
      var parts=a.split(',');
      return (parts[1]||'').trim()+' '+(parts[0]||'').trim();
    }
    return a;
  });
}

function downloadPapersCSV() {
  var yearVal = (document.getElementById('paper-year').value||'').trim();
  var monVal  = (document.getElementById('paper-month').value||'').trim();
  fetch('{{ "/assets/papers.bib" | relative_url }}')
    .then(function(r){ return r.text(); })
    .then(function(text){
      var entries=parseBibTeX(text);
      var headers=['アクション名','アクションタイプ','類似業績マージ優先度','ID','タイトル(日本語)','タイトル(英語)','著者(日本語)','著者(英語)','担当区分','概要(日本語)','概要(英語)','出版者・発行元(日本語)','出版者・発行元(英語)','出版年月','誌名(日本語)','誌名(英語)','巻','号','開始ページ','終了ページ','記述言語','査読の有無','招待の有無','掲載種別','国際・国内誌','国際共著','DOI','ISSN','eISSN','URL','URL2','主要な業績かどうか','公開の有無'];
      var lines=['published_papers', headers.join(',')];

      entries.forEach(function(e){
        if(e.type!=='article'&&e.type!=='inproceedings') return;
        var f=e.fields;
        var paperCutoff = yearVal ? (yearVal+'-'+pad(parseInt(monVal)||1)) : null;
        var paperYM = (f.year||'')+(f.month&&f.month.length<=2?'-'+pad(parseInt(f.month)):'-01');
        if(paperCutoff && paperYM < paperCutoff) return;
        var title=cleanLatex(f.title||'');
        var authors=parseAuthors(f.author||'');
        var authorStr=authors.map(function(a){return '['+a+']';}).join('');
        var journal=cleanLatex(f.journal||f.booktitle||'');
        var year=f.year||'', month=f.month||'01';
        var ymStr=year+(month.length<=2?'-'+pad(parseInt(month)):'-01');
        var pages=(f.pages||'').split(/--|–/);
        var pageStart=pages[0]?pages[0].trim():null;
        var pageEnd=pages[1]?pages[1].trim():null;
        var doi=f.doi||null, url=f.html||f.url||null;
        var reviewed=(e.type==='article');

        lines.push([
          'insert','merge',null,null,
          null, title,
          null, authorStr,
          null, null, null,
          null, null,
          ymStr, null, journal,
          f.volume||null, f.number||null,
          pageStart, pageEnd,
          'eng', reviewed, false,
          'research_article', true, null,
          doi, null, null,
          url, null, false, 'disclosed'
        ].map(cell).join(','));
      });

      triggerDownload(lines.join('\n'), 'papers_rm.csv');
    });
}
</script>

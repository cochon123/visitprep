const $=i=>document.getElementById(i);
const Q={headache:'Could this be tension, migraine, or something else? What should make me come back?',dizziness:'Should I check my blood pressure or blood sugar?',fever:'At what temperature should I seek care?',cough:'Do I need a chest exam or X-ray?',fatigue:'Should we check bloodwork (iron, thyroid)?','abdominal pain':'Which foods or meds should I avoid for now?',insomnia:'What sleep habits or treatments are safe for me?',anxiety:'What mental health supports are available to me?'};
function run(){const r=analyze($('tx').value);$('out').hidden=false;
$('urg').innerHTML=r.red.length?'<div class="urgent" role="alert"><b>Possible warning signs: '+r.red.join(', ')+'.</b> These can be serious — call 911 or go to the nearest emergency department now.</div>':'';
$('tags').innerHTML=(r.symptoms.map(s=>'<span class="tag">'+s+'</span>').join('')||'No known symptoms detected — try describing in more detail.');
$('sum').textContent=`Main symptoms: ${r.symptoms.join(', ')||'—'}\nDuration: ${r.duration||'not stated'}\nSeverity: ${r.severity}\nPattern: ${r.pattern.join('; ')||'not stated'}\nMedications tried: ${r.meds.join(', ')||'none mentioned'}\n\nIn my words: "${$('tx').value.trim()}"`;
const qs=r.symptoms.map(s=>Q[s]).filter(Boolean);qs.push('What is the most likely cause, and what are the next steps?');if(r.meds.length)qs.push('Is it OK to keep taking '+r.meds.join(', ')+'?');
$('qs').innerHTML=qs.map(q=>'<li>'+q+'</li>').join('')}
$('go').onclick=run;$('ex').onclick=()=>{$('tx').value="I've had a really bad headache for 3 days, worse in the morning, and I feel dizzy and a bit nauseous. No fever. Tylenol helps a little.";run()};
$('cp').onclick=()=>navigator.clipboard&&navigator.clipboard.writeText($('sum').textContent);

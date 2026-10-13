// Lightweight on-device clinical text extraction (rule-based NLP). No data leaves the browser.
const LEX={headache:['headache','migraine','head hurts','head pain'],dizziness:['dizzy','dizziness','lightheaded','vertigo'],nausea:['nausea','nauseous','queasy','throw up','vomit'],fever:['fever','feverish','temperature','chills'],cough:['cough','coughing'],'sore throat':['sore throat','throat hurts'],fatigue:['tired','fatigue','exhausted','no energy'],'chest pain':['chest pain','chest hurts','chest tight','tightness in my chest'],'shortness of breath':["can't breathe",'cant breathe','short of breath','shortness of breath','trouble breathing'],'abdominal pain':['stomach pain','stomach hurts','abdominal pain','belly pain','cramps'],rash:['rash','hives','itchy skin'],'back pain':['back pain','back hurts'],insomnia:["can't sleep",'cant sleep','insomnia','trouble sleeping'],anxiety:['anxious','anxiety','panic','worried'],diarrhea:['diarrhea','loose stool'],'joint pain':['joint pain','knee hurts','joints hurt']};
const RED=[['chest pain','Chest pain'],['shortness of breath','Trouble breathing'],['worst headache','"Worst headache of my life"'],['face drooping','Face drooping'],['slurred','Slurred speech'],['numb on one side','One-sided numbness'],['suicid','Thoughts of self-harm'],['passed out','Fainting'],['fainted','Fainting'],['coughing blood','Coughing blood'],['vomiting blood','Vomiting blood']];
const NEG=/\b(no|not|without|never|don't|dont|denies)\b[^.,;]{0,25}$/;
function analyze(raw){const t=' '+raw.toLowerCase()+' ';const found=[];
for(const [k,ws] of Object.entries(LEX)){for(const w of ws){const i=t.indexOf(w);if(i>=0){if(!NEG.test(t.slice(Math.max(0,i-30),i)))found.push(k);break}}}
const dur=(t.match(/(?:for|since|past|last)\s+(?:about\s+)?(\d+|a|an|one|two|three|four|five|six|seven|few|couple of)\s+(hour|day|week|month|year)s?/)||[])[0]||null;
const sev=/(severe|unbearable|worst|10\/10|really bad|very bad|excruciating)/.test(t)?'severe':/(moderate|bad|pretty bad)/.test(t)?'moderate':/(mild|slight|a little|a bit)/.test(t)?'mild':'not stated';
const pattern=(t.match(/(worse|better) (?:in|at|when|after) [a-z ]{3,25}/g)||[]);
const meds=(t.match(/\b(tylenol|advil|ibuprofen|acetaminophen|aspirin|antibiotics?|inhaler|insulin|benadryl)\b/g)||[]);
const red=[...new Set(RED.filter(([w])=>t.includes(w)).map(r=>r[1]))];
return{symptoms:[...new Set(found)],duration:dur,severity:sev,pattern,meds:[...new Set(meds)],red}}
if(typeof module!=='undefined')module.exports={analyze};

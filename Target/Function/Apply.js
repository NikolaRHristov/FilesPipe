const r=async(e,n)=>{if(e instanceof Function){if(n instanceof Map){const a=new Map;for(const[t,o]of n)a.set(await e(t),await e(o));return a}if(n instanceof Set){const a=new Set;for(const t of n)a.add(await e(t));return a}if(n instanceof Array){const a=new Array;for(const t of n)a.push(await e(t));return a}return await e(n)}};var s=r;export{r as _Function,s as default};

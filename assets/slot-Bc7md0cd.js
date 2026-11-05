const t="data-slot";function e(o){return{[t]:o}}function r(...o){return`& > :is(${o.map(s=>`[${t}="${s}"]`).join(", ")})`}export{r as o,e as s};

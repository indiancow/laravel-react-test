import{j as e}from"./app-33b8671f.js";import{I as j}from"./index-7e5ddcbd.js";import{N as v}from"./Navbar-eaf4d9ed.js";const o=({users:i})=>{const a=l=>{const m=l.target.value;m&&(window.location.href=`/mypage/${m}`)};return e.jsxs("div",{children:[e.jsx("h2",{children:"他メンバーを見る"}),e.jsxs("select",{onChange:a,children:[e.jsx("option",{value:"",children:"ユーザーを選択"}),i.map(l=>e.jsx("option",{value:l.id,children:l.name},l.id))]})]})},p=(i,a,l)=>a<30&&l<30?i[0]:a>=30&&a<70&&l>=30&&l<70?i[1]:a>=70&&l>=70?i[2]:null,f=({user:i,users:a,issues:l,feedbacks:m,userSkills:d,character:h})=>{const c=d.find(s=>s.skill.name==="Giver"),n=d.find(s=>s.skill.name==="探求者"),t=d.find(s=>s.skill.name==="ストイック"),r=p(h,(c==null?void 0:c.level)||0,(n==null?void 0:n.level)||0);return console.log(r.image_path),e.jsxs("div",{className:"mypage-bgc mypage-text",children:[e.jsx(v,{}),e.jsxs("div",{className:"flex",children:[e.jsx("p",{children:d.level}),e.jsxs("div",{className:"mycard-left-section overflow-y-auto",children:[e.jsxs("div",{className:"mypage-username-card",children:[e.jsxs("div",{className:"mypage-username-card-leftarea",children:[e.jsxs("h1",{className:"mypage-username",children:[i.name,"'s マイページ"]}),r?e.jsxs(e.Fragment,{children:[e.jsx("h2",{className:"mypage-character-name",children:r.name}),e.jsx("h3",{className:"mypage-character-subtitle",children:r.subtitle}),e.jsx("div",{className:"mypage-character-description",children:e.jsx("p",{children:r.description})})]}):e.jsx("p",{children:"No character selected"}),e.jsxs("div",{className:"giver-seeker-level",children:[c&&e.jsxs("div",{className:"mypage-giver-level",children:[e.jsxs("div",{className:"flex skill-text",children:[e.jsx("p",{className:"skill-name",children:c.skill.name}),e.jsxs("div",{className:"levels-container",children:[e.jsx("p",{className:"level-text",children:"Lv. "}),e.jsx("p",{className:"skill-level",children:c.level}),e.jsx("p",{className:"skill-max",children:"/100"})]})]}),e.jsx("div",{className:"skill-progress-container",children:e.jsx("div",{className:"skill-progress-bar",style:{width:`${c.level/100*100}%`}})})]}),n&&e.jsxs("div",{className:"mypage-seeker-level",children:[e.jsxs("div",{className:"flex skill-text",children:[e.jsx("p",{className:"skill-name",children:n.skill.name}),e.jsxs("div",{className:"levels-container",children:[e.jsx("p",{className:"level-text",children:"Lv. "}),e.jsx("p",{className:"skill-level",children:n.level}),e.jsx("p",{className:"skill-max",children:"/100"})]})]}),e.jsx("div",{className:"skill-progress-container",children:e.jsx("div",{className:"skill-progress-bar",style:{width:`${n.level/100*100}%`}})})]}),t&&e.jsxs("div",{className:"mypage-stoic-level",children:[e.jsxs("div",{className:"flex skill-text",children:[e.jsx("p",{className:"skill-name",children:t.skill.name}),e.jsxs("div",{className:"levels-container",children:[e.jsx("p",{className:"level-text",children:"Lv. "}),e.jsx("p",{className:"skill-level",children:t.level}),e.jsx("p",{className:"skill-max",children:"/100"})]})]}),e.jsx("div",{className:"skill-progress-container",children:e.jsx("div",{className:"skill-progress-bar",style:{width:`${t.level/100*100}%`}})})]})]})]}),e.jsxs("div",{className:"mypage-username-card-rightarea",children:[e.jsx(o,{users:a}),e.jsx("img",{src:`/storage/${r.image_path}`,alt:r.name,className:"mypage-character"})]})]}),e.jsx("div",{children:e.jsx("div",{className:"card-container",children:d.map((s,x)=>s.skill.name!=="Giver"&&s.skill.name!=="探求者"&&s.skill.name!=="ストイック"&&e.jsx("div",{className:`skill-card ${x%2===0?"left-card":"right-card"}`,children:e.jsxs("div",{className:"flex",children:[e.jsxs("div",{className:"sales-level-text",children:[e.jsx("h3",{className:"skill-card-name",children:s.skill.name}),e.jsx("p",{children:s.skill.description})]}),e.jsxs("div",{className:"levels-container",children:[e.jsx("p",{className:"level-text",children:"Lv. "}),e.jsx("p",{className:"skill-level",children:s.level}),e.jsx("p",{className:"skill-max",children:"/100"})]}),e.jsx("div",{className:"skill-progress-container",children:e.jsx("div",{className:"skill-progress-bar",style:{width:`${s.level/100*100}%`}})})]})},s.id))})})]}),e.jsxs("div",{className:"mycard-right-section overflow-y-auto",children:[e.jsxs("div",{children:[e.jsx("h2",{children:"あなたのこれまでの課題"}),l.map(s=>e.jsxs("div",{className:"issue-card flex",children:[e.jsx("h3",{children:s.tag.name}),e.jsxs("div",{className:"issue-details",children:[e.jsx("p",{children:s.description}),e.jsx("p",{children:new Date(s.created_at).toLocaleDateString()})]})]},s.id))]}),e.jsxs("div",{children:[e.jsx("h2",{children:"あなたがもらったフィードバック"}),m.map(s=>e.jsxs("div",{className:"feedback-card",children:[e.jsx("h3",{children:s.issue.tag.name}),e.jsx("p",{children:s.content}),e.jsx("p",{children:e.jsx(j,{href:`/mypage/${s.user_id}`,children:a.find(x=>x.id===s.user_id).name})}),e.jsx("p",{children:new Date(s.created_at).toLocaleDateString()})]},s.id))]})]})]})]})};export{f as default};

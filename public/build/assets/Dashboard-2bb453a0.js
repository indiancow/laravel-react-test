import{r as l,j as e,a as _}from"./app-056778df.js";import{A as k}from"./ApplicationLogo-7e659c18.js";import"./Dropdown-a79b58ae.js";import{N as C}from"./Navbar-771197c9.js";import{d as w}from"./index-99425bf4.js";import"./transition-ffb5b6ed.js";function U({auth:i,pendingRecords:c,tags:t,dailyMissions:x}){console.log(c);const[d,j]=l.useState(""),[h,m]=l.useState(""),[p,N]=l.useState(null);l.useState(null);const f=async s=>{try{(await fetch(`/api/clear/${s}`,{method:"PUT",headers:{"Content-Type":"application/json"}})).ok&&(console.log(s),alert("合格を送信しました。")),(await fetch("/api/user-skill/level-up",{method:"PUT",headers:{"Content-Type":"application/json"}})).ok?console.error("Failed to clear the record."):console.error("Failed to level up the user skill.")}catch(a){console.error("There was an error clearing the record:",a)}},v=async s=>{try{(await fetch(`/api/fail/${s}`,{method:"PUT",headers:{"Content-Type":"application/json"}})).ok?alert("不合格を送信しました。"):console.error("Failed to set the record to fail.")}catch(a){console.error("There was an error setting the record to fail:",a)}},[o,u]=l.useState(!1),g=()=>{u(!0)},b=()=>{u(!1)};l.useEffect(()=>{o&&t.length>0&&m(t[0].id)},[o,t]);const y=async s=>{s.preventDefault();const a=new FormData;a.append("description",d),a.append("tag_id",h),p&&a.append("video",p),w.Inertia.post("/issues",a,{preserveState:!0,only:["tags"],onProgress:r=>console.log(r.loaded/r.total)})};return e.jsxs("div",{children:[e.jsxs("div",{className:"back-color",children:[e.jsx(C,{}),e.jsx(_,{title:"Dashboard"}),e.jsx("div",{className:"dashboard-subtitle",children:e.jsx("h2",{className:"dashboard-subtitle",children:"チカラを合わせてセカイを救え！"})}),e.jsx(k,{}),e.jsx("div",{className:"toppage-quest-component",children:e.jsx("button",{className:"toppage-quest",onClick:g,children:"クエスト作成"})}),o&&e.jsx("div",{className:"overlay",children:e.jsxs("div",{className:"quest-modal over",children:[e.jsx("h2",{children:"クエスト作成"}),e.jsxs("form",{onSubmit:y,className:"issue-form",children:[e.jsx("div",{className:"flex justify-center",children:e.jsxs("label",{children:["ジャンル",e.jsx("select",{value:h,onChange:s=>m(s.target.value),children:t.map(s=>e.jsx("option",{value:s.id,children:s.name},s.id))})]})}),e.jsx("div",{className:"flex justify-center",children:e.jsxs("label",{children:["動画",e.jsx("input",{type:"file",onChange:s=>N(s.target.files[0])})]})}),e.jsx("div",{className:"flex justify-center",children:e.jsxs("label",{children:["内容",e.jsx("textarea",{value:d,onChange:s=>j(s.target.value)})]})}),e.jsx("div",{className:"flex justify-center",children:e.jsx("button",{className:"issue-button",type:"submit",children:"送信"})})]}),e.jsx("button",{onClick:b,className:"issue-button",children:"閉じる"})]})})]}),i.user.is_manager===1&&c.some(s=>s.user.id!==i.user.id)&&e.jsxs("div",{className:"record-container",children:[e.jsx("h2",{children:"営業ダンジョン 回答内容"}),c.map(s=>{var a;return s.user.id!==i.user.id?e.jsxs("div",{className:"record-card",children:[e.jsxs("div",{className:"record-header",children:[e.jsxs("div",{className:"record-details",children:[e.jsx("p",{className:"record-username",children:s.user.name}),e.jsxs("p",{className:"record-gymleader",children:["営業ダンジョン：",s.gym_leader.name]})]}),e.jsxs("div",{className:"record-actions",children:[e.jsx("button",{className:"btn-clear",onClick:()=>f(s.id),children:"合格"}),e.jsx("button",{className:"btn-fail",onClick:()=>v(s.id),children:"不合格"})]})]}),e.jsx("div",{className:"dashboard-question-area",children:(a=s.gym_leader.questions)==null?void 0:a.map(r=>e.jsxs("div",{className:"dashboard-question-card",children:[e.jsxs("p",{className:"dashboard-question-text",children:["Q. ",r.question_text]}),r.answers.filter(n=>n.user_id===s.user.id).map(n=>e.jsx("div",{className:"answer-card",children:e.jsxs("p",{children:["A. ",n.answer_text]})},n.id))]},r.id))})]},s.id):null})]}),e.jsxs("div",{className:"daily-mission-container",children:[e.jsx("h2",{children:"デイリーミッション"}),e.jsx("div",{className:"daily-mission-list",children:x.map(s=>e.jsxs("div",{className:"daily-mission-card",children:[e.jsx("h3",{className:"daily-mission-mark",children:"デイリーミッション"}),e.jsx("img",{className:"daily_mission_img",src:"http://localhost/storage/dailymission.png",alt:""}),e.jsx("p",{className:"mission-description",children:s.description}),e.jsxs("p",{className:"mission-progress-info",children:["進捗度: 現在",s.current_count,"/目標",s.target_count]}),e.jsx("div",{className:"progress-bar-container",children:e.jsx("div",{className:"progress-bar",style:{width:`${Math.min(s.current_count/s.target_count,1)*100}%`,backgroundColor:s.current_count>=s.target_count?"green":"orange"},children:e.jsx("span",{className:"progress-percentage",children:`${Math.round(Math.min(s.current_count/s.target_count,1)*100)}%`})})}),s.current_count>=s.target_count?e.jsx("p",{className:"mission-completed",children:"ミッション達成！"}):e.jsx("p",{className:"mission-progress",children:"もう少しで達成！"})]},s.id))})]})]})}export{U as default};
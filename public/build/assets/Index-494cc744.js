import{r as o,j as e}from"./app-e8231efd.js";import{N as h}from"./Navbar-24e658ab.js";import{M as m}from"./Modal-68939916.js";import{d as x,I as j}from"./index-47a41a56.js";import"./transition-b766590c.js";const u=({issue:a,onClose:t})=>{const[i,r]=o.useState(""),c=async l=>{console.log("handleSubmit is triggered"),l.preventDefault();try{await x.Inertia.post("/feedbacks",{issue_id:a.id,content:i}),t&&t()}catch(n){console.error("An error occurred while submitting the form:",n)}};return e.jsx("div",{className:"feedback-container",children:e.jsxs("form",{onSubmit:c,className:"feedback-form",children:[e.jsxs("div",{className:"feedback-header",children:[e.jsx("label",{htmlFor:"content",className:"feedback-label",children:"解決策の提案"}),e.jsxs("div",{className:"feedback-info",children:[e.jsxs("p",{className:"feedback-author",children:["依頼者: ",a.author]}),e.jsx("h1",{className:"feedback-tag",children:a.tag}),e.jsx("p",{className:"feedback-description",children:a.description})]})]}),e.jsx("textarea",{id:"content",value:i,onChange:l=>r(l.target.value)}),e.jsx("button",{type:"submit",className:"feedback-button",children:"送信"}),e.jsx("button",{onClick:t,className:"feedback-button close-button",children:"閉じる"})]})})},p=({issues:a})=>e.jsx("div",{className:"pagination-container",children:e.jsx("ul",{className:"pagination",children:a.links.map((t,i)=>e.jsx("li",{className:`page-item ${t.active?"active":""} ${t.url?"":"disabled"}`,children:e.jsx(j,{href:t.url||"#",className:"page-link",dangerouslySetInnerHTML:{__html:t.label}})},i))})}),k=({issues:a})=>{console.log(a.data);const[t,i]=o.useState(!1),[r,c]=o.useState(null),l=s=>{c(s),i(!0)},n=()=>{i(!1)},d="http://localhost/storage/";return e.jsxs("div",{children:[e.jsx(h,{}),e.jsxs("div",{className:"issue-big-area",children:[e.jsxs("div",{className:"video-area",children:[e.jsx("h2",{className:"issue-index-title",children:"新着"}),e.jsx("div",{className:"new-videos",children:a.data.filter(s=>s.videoUrl!==d).map(s=>e.jsxs("div",{className:"issue-index-card",children:[e.jsxs("video",{width:"320",height:"240",controls:!0,children:[e.jsx("source",{src:s.videoUrl,type:"video/mp4"}),"Your browser does not support the video tag."]}),e.jsxs("div",{className:"issue-index-card-text",children:[e.jsx("h3",{className:"index-title",children:s.tag})," ",e.jsx("p",{className:"issue-index-card-username",children:s.author})," ",e.jsx("p",{children:s.description}),e.jsx("button",{onClick:()=>l(s),className:"timeline-button",children:"フィードバック"})]})]},s.id))})]}),e.jsxs("div",{className:"video-area",children:[e.jsx("h2",{className:"issue-index-title",children:"すべての動画"}),e.jsx("div",{className:"new-videos",style:{display:"flex",overflowX:"scroll"},children:a.data.filter(s=>s.videoUrl!==d).map(s=>e.jsxs("div",{className:"issue-index-card",children:[e.jsxs("video",{width:"320",height:"240",controls:!0,children:[e.jsx("source",{src:s.videoUrl,type:"video/mp4"}),"Your browser does not support the video tag."]}),e.jsxs("div",{className:"issue-index-card-text",children:[e.jsx("h3",{className:"index-title",children:s.tag}),e.jsxs("p",{className:"issue-index-card-username",children:[" ",s.author]}),e.jsx("p",{children:s.description}),e.jsx("button",{onClick:()=>l(s),className:"timeline-button",children:"フィードバック"})]})]},s.id))})]}),e.jsxs("div",{className:"timeline-container",children:[e.jsx("h2",{className:"issue-index-title",children:"クエスト"}),a.data.filter(s=>s.videoUrl===d).map(s=>e.jsxs("div",{className:"timeline-card",children:[e.jsx("h3",{className:"timeline-title",children:s.tag}),e.jsxs("p",{className:"timeline-username",children:["@",s.author]}),e.jsx("p",{className:"timeline-description",children:s.description}),e.jsx("button",{className:"timeline-button",onClick:()=>l(s),children:"フィードバック"})]}))]}),e.jsx(p,{issues:a})]}),t&&r&&e.jsx(m,{show:t,onClose:()=>i(!1),children:e.jsx(u,{issue:r,onClose:n})})]})};export{k as default};

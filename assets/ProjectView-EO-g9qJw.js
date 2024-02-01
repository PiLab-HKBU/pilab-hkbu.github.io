import{_ as a,p as h,c as s,b as e,a as m,w as j,t as f,m as r,F as c,d,r as b,o,l as v,g as y,h as g}from"./index-SUANL3gj.js";const T={name:"ProjectView",data(){return{projectsData:h,project:null}},computed:{pid(){return this.$route.query.pid===void 0?1:this.$route.query.pid}},mounted(){this.updateProject(this.pid)},watch:{pid(n,l){n!==l&&this.updateProject(n)}},methods:{updateProject(n){for(const l in this.projectsData.list){const u=this.projectsData.list[l];if(u.id.toString()===n.toString()){this.project=u;break}}}}},p=n=>(y("data-v-1a7c9b00"),n=n(),g(),n),L={key:0,class:"section py-2"},M={class:"container is-max-widescreen"},H={class:"breadcrumb","aria-label":"breadcrumbs"},k={class:"is-active"},w={href:"#","aria-current":"page"},x={class:"section pt-2"},P={key:0,class:"container is-max-widescreen"},S=["innerHTML"],V={class:"columns"},D={class:"column is-8"},F={class:"content"},I=["innerHTML"],N=["innerHTML"],q=["innerHTML"],B=["innerHTML"],C={key:1},R=["innerHTML"],z=p(()=>e("p",{style:{"font-size":"18px","font-weight":"bold"}},"Major Fundings:",-1)),E=["innerHTML"],A=["src"],G=["src"],J=["innerHTML"],K={key:4},O=p(()=>e("div",{class:"subtitle"}," Reference ",-1)),Q={style:{"list-style-type":"none"}},U=["innerHTML"],W={class:"column is-4 is-hidden-mobile"},X=["src"],Y={key:1,class:"container is-max-widescreen"},Z=p(()=>e("div",{class:"content"},[e("div",{class:"title"}," Don't find the details. ")],-1)),$=[Z];function ee(n,l,u,te,t,se){const _=b("router-link");return o(),s(c,null,[t.project?(o(),s("section",L,[e("div",M,[e("nav",H,[e("ul",null,[e("li",null,[m(_,{to:{name:"projects",params:{}}},{default:j(()=>[v(" Projects ")]),_:1})]),e("li",k,[e("a",w,f(t.project.shortTitle),1)])])])])])):r("",!0),e("section",x,[t.project?(o(),s("div",P,[e("div",{class:"title",innerHTML:t.project.title},null,8,S),e("div",V,[e("div",D,[e("div",F,[e("div",{class:"subtitle mb-0",innerHTML:t.project.author},null,8,I),e("div",{class:"subtitle",innerHTML:t.project.collaborator},null,8,N),e("p",{innerHTML:t.project.description},null,8,q),t.project.descriptionRest!==""?(o(),s("p",{key:0,innerHTML:t.project.descriptionRest},null,8,B)):r("",!0),t.project.features.length!==0?(o(),s("ul",C,[(o(!0),s(c,null,d(t.project.features,i=>(o(),s("li",{innerHTML:i},null,8,R))),256))])):r("",!0),t.project.majorFundings.length!==0?(o(),s(c,{key:2},[z,e("ul",null,[(o(!0),s(c,null,d(t.project.majorFundings,i=>(o(),s("li",{innerHTML:i},null,8,E))),256))])],64)):r("",!0),t.project.video?(o(),s("iframe",{key:3,class:"youtube-embed-frame",src:t.project.video,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,8,A)):r("",!0),(o(!0),s(c,null,d(t.project.photos,i=>(o(),s(c,null,[e("img",{class:"description-image",src:i.img},null,8,G),i.caption?(o(),s("figcaption",{key:0,innerHTML:i.caption},null,8,J)):r("",!0)],64))),256)),t.project.reference.length!==0?(o(),s("blockquote",K,[O,e("ol",Q,[(o(!0),s(c,null,d(t.project.reference,i=>(o(),s("li",null,[e("p",{class:"reference_item",innerHTML:i},null,8,U)]))),256))])])):r("",!0)])]),e("div",W,[e("img",{src:t.project.photo,alt:"Project Photo",style:{height:"240px",width:"100%","border-radius":"10px",overflow:"hidden","object-fit":"cover",border:"1px solid #e8e8e8"}},null,8,X)])])])):(o(),s("div",Y,$))])],64)}const ne=a(T,[["render",ee],["__scopeId","data-v-1a7c9b00"]]);export{ne as default};

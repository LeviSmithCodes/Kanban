(function(t){function e(e){for(var a,n,i=e[0],c=e[1],d=e[2],u=0,m=[];u<i.length;u++)n=i[u],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&m.push(o[n][0]),o[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(m.length)m.shift()();return r.push.apply(r,d||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],a=!0,i=1;i<s.length;i++){var c=s[i];0!==o[c]&&(a=!1)}a&&(r.splice(e--,1),t=n(n.s=s[0]))}return t}var a={},o={app:0},r=[];function n(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=a,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var d=0;d<i.length;d++)e(i[d]);var l=c;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var a=s("85ec"),o=s.n(a);o.a},"158c":function(t,e,s){"use strict";var a=s("ce1b"),o=s.n(a);o.a},"201e":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},r=[],n={name:"App"},i=n,c=(s("034f"),s("2877")),d=Object(c["a"])(i,o,r,!1,null,null,null),l=d.exports,u=s("8c4f"),m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"boards"},[s("nav",{staticClass:"navbar navbar-dark bg-dark mb-3"},[s("a",{staticClass:"navbar-brand",staticStyle:{"font-variant":"all-small-caps"},attrs:{href:"https://kanban-jdandlevi.herokuapp.com/"}},[t._v("Home")]),t._v(" "),s("div",{staticClass:"navbar",attrs:{id:"navbarSupportedContent"}},[s("button",{staticClass:"btn btn-warning",on:{click:t.logout}},[t._v("Log Out")])])]),t._v("Welcome to your boards!\n  "),s("br"),t._v(" "),s("br"),t._v(" "),s("form",{on:{submit:function(e){return e.preventDefault(),t.createBoard(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newBoard.title,expression:"newBoard.title"}],attrs:{type:"text",placeholder:"title",required:""},domProps:{value:t.newBoard.title},on:{input:function(e){e.target.composing||t.$set(t.newBoard,"title",e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newBoard.description,expression:"newBoard.description"}],attrs:{type:"text",placeholder:"description"},domProps:{value:t.newBoard.description},on:{input:function(e){e.target.composing||t.$set(t.newBoard,"description",e.target.value)}}}),t._v(" "),s("button",{attrs:{type:"submit"}},[t._v("Create Board")])]),t._v(" "),s("br"),t._v(" "),s("dl",t._l(t.boards,(function(e){return s("div",{key:e._id},[s("dt",[s("router-link",{attrs:{to:{name:"board",params:{boardId:e._id}}},on:{click:t.setActiveBoard}},[t._v(t._s(e.title))]),t._v(" "),s("button",{staticClass:"btn btn-danger",on:{click:function(s){t.deleteBoard(e._id)}}},[s("i",{staticClass:"fas fa-trash-alt trash-right"})])],1)])})))])},p=[],h={name:"boards",mounted(){this.$store.dispatch("getBoards")},data(){return{newBoard:{title:"",description:""}}},computed:{boards(){return this.$store.state.boards}},methods:{createBoard(){this.$store.dispatch("createBoard",this.newBoard),this.newBoard={title:"",description:""}},logout(){this.$store.dispatch("logout")},deleteBoard(t){this.$store.dispatch("deleteBoard",t)},setActiveBoard(){this.$store.state.activeBoard={},this.$store.state.activeBoard=this.board,this.$store.commit("setActiveBoard",this.board)}}},v=h,b=(s("d071"),Object(c["a"])(v,m,p,!1,null,"f1b6bf56",null)),g=b.exports,f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"board"},[s("h2",{staticClass:"title"},[t._v(t._s(t.board.title))]),t._v(" "),s("div",{staticClass:"description"},[t._v(t._s(t.board.description))]),t._v(" "),s("form",{on:{submit:function(e){return e.preventDefault(),t.createList(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newList.title,expression:"newList.title"}],attrs:{type:"text",placeholder:"title",required:""},domProps:{value:t.newList.title},on:{input:function(e){e.target.composing||t.$set(t.newList,"title",e.target.value)}}}),t._v(" "),s("button",{attrs:{type:"submit"}},[t._v("Create List")])]),t._v(" "),s("br"),t._v(" "),s("div",{staticClass:"row",staticStyle:{padding:"0rem 3rem"}},t._l(t.lists,(function(t){return s("div",{key:t._id},[s("List",{attrs:{listData:t}})],1)})))])},w=[],k=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-3",staticStyle:{"margin-bottom":"3rem"}},[s("div",{staticClass:"card shadow",staticStyle:{width:"20rem"}},[s("div",{staticClass:"card-body"},[s("button",{staticClass:"btn btn-danger float-right",attrs:{id:"deleteList"},on:{click:function(e){t.deleteList(t.listData._id)}}},[s("i",{staticClass:"fas fa-trash-alt"})]),t._v(" "),s("h3",{staticClass:"card-title"},[t._v(t._s(t.listData.title))]),t._v(" "),s("div",{staticClass:"card-body"},[s("form",{staticStyle:{display:"inline-flex"},on:{submit:function(e){return e.preventDefault(),t.createTask(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newTask.description,expression:"newTask.description"}],attrs:{type:"text",placeholder:"Add task...",required:""},domProps:{value:t.newTask.description},on:{input:function(e){e.target.composing||t.$set(t.newTask,"description",e.target.value)}}}),t._v(" "),t._m(0)])])]),t._v(" "),t._l(t.tasks,(function(e){return s("ul",{key:e.id,staticClass:"list-group list-group-flush",staticStyle:{"list-style-type":"none"}},[s("hr"),t._v(" "),s("task-component",{attrs:{taskData:e}})],1)}))],2)])},_=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"input-group-append"},[s("button",{staticClass:"btn btn-warning",attrs:{type:"submit"}},[s("i",{staticClass:"fas fa-plus"})])])}],y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("hr"),t._v(" "),s("b",[t._v("Task:")]),t._v("\n  "+t._s(t.taskData.description)+"\n  "),s("button",{staticClass:"btn btn-danger delete-task",staticStyle:{background:"none",border:"none"},on:{click:function(e){t.deleteTask(t.taskData._id)}}},[s("i",{staticClass:"fas fa-minus-circle",staticStyle:{color:"grey",background:"none"}})]),t._v(" "),s("div",[s("select",{staticClass:"form-control",on:{change:function(e){t.changeTaskList(e)}}},[s("option",{attrs:{value:"",selected:"",disabled:""}},[t._v("Move Task")]),t._v(" "),t._l(t.availableLists,(function(e){return e.id!=t.taskData.listId?s("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.title))]):t._e()}))],2)]),t._v(" "),s("div",{staticClass:"card-body"},[s("form",{staticStyle:{display:"inline-flex"},on:{submit:function(e){return e.preventDefault(),t.createComment(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newComment.content,expression:"newComment.content"}],attrs:{type:"text",placeholder:"Add comment...",required:""},domProps:{value:t.newComment.content},on:{input:function(e){e.target.composing||t.$set(t.newComment,"content",e.target.value)}}}),t._v(" "),t._m(0)])]),t._v(" "),t._l(t.comments,(function(t){return s("ul",{key:t.id,staticClass:"list-group list-group-flush"},[s("comment-component",{attrs:{commentData:t}})],1)}))],2)},C=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"input-group-append"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"submit"}},[s("i",{staticClass:"fas fa-plus"})])])}],I=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{"margin-bottom":"1rem"}},[s("i",[t._v("Comment:")]),t._v("\n  "+t._s(t.commentData.content)+"\n  "),t._v(" "),s("button",{staticClass:"btn btn-danger",on:{click:function(e){t.deleteComment(t.commentData._id)}}},[s("i",{staticClass:"fas fa-trash-alt"})])])},$=[],L={name:"Comment",mounted(){},methods:{deleteComment(t){this.$store.dispatch("deleteComment",{commentId:this.commentData.id,taskId:this.commentData.taskId})}},computed:{},props:["commentData"]},B=L,D=Object(c["a"])(B,I,$,!1,null,null,null),T=D.exports,x={name:"Task",mounted(){this.$store.dispatch("getComments",this.taskData.id)},data(){return{newComment:{content:"",taskId:this.taskData.id},selectedList:null}},methods:{deleteTask(t){this.$store.dispatch("deleteTask",{taskId:this.taskData.id,boardId:this.taskData.boardId})},changeTaskList(t){this.selectedList=t.target.options[t.target.options.selectedIndex].value,console.log(this.selectedList);let e=this.selectedList,s={newListId:e,currentTaskId:this.taskData.id,currentListId:this.taskData.listId};this.$store.dispatch("editTask",s),console.log("newId made in changetasklist",e)},createComment(){let t={...this.newComment};this.$store.dispatch("createComment",t),this.newComment={content:"",taskId:this.taskData.id}}},computed:{availableLists(){return this.$store.state.lists},comments(){return this.$store.state.comments[this.taskData.id]}},props:["taskData"],components:{CommentComponent:T}},U=x,S=(s("61b9"),Object(c["a"])(U,y,C,!1,null,"18ae61d7",null)),O=S.exports,j={name:"List",mounted(){this.$store.dispatch("getTasks",this.listData.id)},data(){return{newTask:{description:"",boardId:this.listData.boardId,listId:this.listData.id}}},computed:{tasks(){return this.$store.state.tasks[this.listData.id]}},components:{TaskComponent:O},methods:{deleteList(t){this.$store.dispatch("deleteList",{listId:t,boardId:this.listData.boardId})},createTask(){let t={...this.newTask};this.$store.dispatch("createTask",t),this.newTask={description:"",boardId:this.listData.boardId,listId:this.listData.id}}},props:["listData"]},P=j,N=Object(c["a"])(P,k,_,!1,null,"6cb23441",null),R=N.exports,A={name:"board",mounted(){this.$store.dispatch("getListsByBoardId",this.boardId),this.$store.dispatch("getBoardById",this.boardId)},data(){return{newList:{title:"",boardId:this.boardId}}},computed:{lists(){return this.$store.state.lists},board(){return this.$store.state.boards}},methods:{createList(){let t={...this.newList};this.$store.dispatch("createList",t),this.newList={title:"",boardId:this.boardId}},deleteList(t){this.$store.dispatch("deleteList",{listId:t,boardId:this.boardId})}},components:{List:R},props:["boardId"]},E=A,M=(s("158c"),Object(c["a"])(E,f,w,!1,null,null,null)),F=M.exports,q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login",staticStyle:{"margin-top":"2rem"}},[t.loginForm?s("form",{on:{submit:function(e){return e.preventDefault(),t.loginUser(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.creds.email,expression:"creds.email"}],attrs:{type:"email",placeholder:"email"},domProps:{value:t.creds.email},on:{input:function(e){e.target.composing||t.$set(t.creds,"email",e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.creds.password,expression:"creds.password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:t.creds.password},on:{input:function(e){e.target.composing||t.$set(t.creds,"password",e.target.value)}}}),t._v(" "),s("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[t._v("Login")])]):s("form",{on:{submit:function(e){return e.preventDefault(),t.register(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.name,expression:"newUser.name"}],attrs:{type:"text",placeholder:"name"},domProps:{value:t.newUser.name},on:{input:function(e){e.target.composing||t.$set(t.newUser,"name",e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.email,expression:"newUser.email"}],attrs:{type:"email",placeholder:"email"},domProps:{value:t.newUser.email},on:{input:function(e){e.target.composing||t.$set(t.newUser,"email",e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.password,expression:"newUser.password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:t.newUser.password},on:{input:function(e){e.target.composing||t.$set(t.newUser,"password",e.target.value)}}}),t._v(" "),s("button",{staticClass:"btn btn-warning",attrs:{type:"submit"}},[t._v("Create Account")])]),t._v(" "),s("div",{staticClass:"action",on:{click:function(e){t.loginForm=!t.loginForm}}},[t.loginForm?s("p",[t._v("No account? Click here to Register")]):s("p",[t._v("Already have an account? Click here to Login")])])])},J=[],H={name:"login",data(){return{loginForm:!0,creds:{email:"",password:""},newUser:{email:"",password:"",name:""}}},beforeCreate(){this.$store.state.user._id&&this.$router.push({name:"boards"})},methods:{register(){this.$store.dispatch("register",this.newUser)},loginUser(){this.$store.dispatch("login",this.creds)}}},W=H,z=(s("d6db"),Object(c["a"])(W,q,J,!1,null,null,null)),G=z.exports;a["a"].use(u["a"]);var K=new u["a"]({routes:[{path:"/",name:"boards",component:g},{path:"/boards/:boardId",name:"board",props:!0,component:F},{path:"/login",name:"login",component:G},{path:"*",redirect:"/"}]}),Q=s("2f62"),V=s("bc3a"),X=s.n(V);let Y=location.host.includes("localhost")?"//localhost:3000/":"/",Z=X.a.create({baseURL:Y+"account/",timeout:3e3,withCredentials:!0});class tt{static async Login(t){try{let e=await Z.post("login",t);return e.data}catch(e){throw new Error(`[login failed] : ${e.response?e.response.data.error:"No response from server"}`)}}static async Register(t){try{let e=await Z.post("register",t);return e.data}catch(e){throw new Error(`[registration failed] : ${e.response?e.response.data.error:"No response from server"}`)}}static async Logout(){try{await Z.delete("logout");return!0}catch(t){throw new Error(`[logout failed] : ${t.response?t.response.data.error:"No response from server"}`)}}static async Authenticate(){try{let t=await Z.get("authenticate");return t.data}catch(t){console.warn(`[Authentication failed] : ${t.response?t.response.data.error:"No response from server"}`)}}}let et=window.location.host.includes("localhost:8080")?"//localhost:3000/":"/",st=X.a.create({baseURL:et+"api/",timeout:3e3,withCredentials:!0});var at={actions:{getBoardById({commit:t,dispatch:e},s){st.get("boards/"+s).then(e=>{t("setResource",{resource:"boards",data:e.data})})},getBoards({commit:t,dispatch:e}){st.get("boards").then(e=>{t("setResource",{resource:"boards",data:e.data})})},createBoard({commit:t,dispatch:e},s){st.post("boards",s).then(e=>{t("addResource",{resource:"boards",data:e.data})})},deleteBoard({commit:t,dispatch:e},s){st.delete("boards/"+s).then(t=>{e("getBoards")})}}};let ot=window.location.host.includes("localhost:8080")?"//localhost:3000/":"/",rt=X.a.create({baseURL:ot+"api/",timeout:3e3,withCredentials:!0});var nt={mutations:{setListsAfterDelete(t,e){t.lists=e}},actions:{getLists({commit:t,dispatch:e}){rt.get("lists").then(e=>{t("setResource",{resource:"lists",data:e.data})})},createList({commit:t,dispatch:e},s){rt.post("lists",s).then(e=>{t("addResource",{resource:"lists",data:e.data})})},async deleteList({commit:t,dispatch:e},s){let a=await rt.delete("lists/"+s.listId);console.log(a.data),e("getListsByBoardId",s.boardId)},getListsByBoardId({commit:t,dispatch:e},s){rt.get("boards/"+s+"/lists").then(e=>{t("setResource",{resource:"lists",data:e.data})})}}};s("eebe");a["a"].use(Q["a"]);let it=window.location.host.includes("localhost:8080")?"//localhost:3000/":"/",ct=X.a.create({baseURL:it+"api/",timeout:3e3,withCredentials:!0});var dt=new Q["a"].Store({modules:{boardModule:at,listModule:nt},state:{user:{},boards:[],activeBoard:{},lists:[],tasks:{},comments:{}},mutations:{setResource(t,e){t[e.resource]=e.data},addResource(t,e){t[e.resource].push(e.data)},setUser(t,e){t.user=e},setBoards(t,e){t.boards=e},setTasks(t,e){a["a"].set(t.tasks,e.listId,e.tasks)},setActiveBoard(t,e){t.activeBoard=e},setComments(t,e){a["a"].set(t.comments,e.taskId,e.comments)},resetState(t,e){t.user={},t.boards=[],t.activeBoard={}}},actions:{async register({commit:t,dispatch:e},s){try{let e=await tt.Register(s);t("setUser",e),K.push({name:"boards"})}catch(a){console.warn(a.message)}},async login({commit:t,dispatch:e},s){try{let e=await tt.Login(s);t("setUser",e),K.push({name:"boards"})}catch(a){console.warn(a.message)}},async logout({commit:t,dispatch:e}){try{await tt.Logout();t("resetState"),K.push({name:"login"})}catch(s){console.warn(s.message)}},async createTask({commit:t,dispatch:e},s){try{await ct.post("tasks",s);e("getTasks",s.listId)}catch(a){console.warn(a.message)}},async getTasks({commit:t,dispatch:e},s){try{let e=await ct.get(`lists/${s}/tasks`);t("setTasks",{listId:s,tasks:e.data})}catch(a){console.warn(a.message)}},async deleteTask({commit:t,dispatch:e},s){let a=await ct.delete("tasks/"+s.taskId);console.log(a.data),e("getTasks",s.listId)},async editTask({commit:t,dispatch:e},s){await ct.put("tasks/"+s.currentTaskId,s);console.log("index.js editTask says payload is",s),e("getTasks",s.newListId),e("getTasks",s.currentListId)},async createComment({commit:t,dispatch:e},s){try{await ct.post("comments",s);e("getComments",s.taskId)}catch(a){console.warn(a.message)}},async getComments({commit:t,dispatch:e},s){try{let e=await ct.get(`tasks/${s}/comments`);t("setComments",{taskId:s,comments:e.data})}catch(a){console.warn(a.message)}},async deleteComment({commit:t,dispatch:e},s){let a=await ct.delete("comments/"+s.commentId);console.log(a.data),e("getComments",s.taskId)}}});async function lt(){let t=await tt.Authenticate();t?dt.commit("setUser",t):K.push({name:"login"}),new a["a"]({router:K,store:dt,render:t=>t(l)}).$mount("#app")}lt()},"61b9":function(t,e,s){"use strict";var a=s("201e"),o=s.n(a);o.a},"85ec":function(t,e,s){},ce1b:function(t,e,s){},d071:function(t,e,s){"use strict";var a=s("d8f7"),o=s.n(a);o.a},d6db:function(t,e,s){"use strict";var a=s("e67a"),o=s.n(a);o.a},d8f7:function(t,e,s){},e67a:function(t,e,s){}});
//# sourceMappingURL=app.f3a178ef.js.map
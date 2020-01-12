(function(t){function e(e){for(var a,n,i=e[0],d=e[1],c=e[2],m=0,u=[];m<i.length;m++)n=i[m],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&u.push(o[n][0]),o[n]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(t[a]=d[a]);l&&l(e);while(u.length)u.shift()();return r.push.apply(r,c||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],a=!0,i=1;i<s.length;i++){var d=s[i];0!==o[d]&&(a=!1)}a&&(r.splice(e--,1),t=n(n.s=s[0]))}return t}var a={},o={app:0},r=[];function n(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=a,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var l=d;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var a=s("85ec"),o=s.n(a);o.a},"1e2b":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},r=[],n={name:"App"},i=n,d=(s("034f"),s("2877")),c=Object(d["a"])(i,o,r,!1,null,null,null),l=c.exports,m=s("8c4f"),u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"boards"},[s("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark mb-3"},[s("a",{staticClass:"navbar-brand",staticStyle:{"font-variant":"all-small-caps"},attrs:{href:"http://localhost:8080/#/"}},[t._v("Home")]),t._v(" "),s("div",{staticClass:"navbar",attrs:{id:"navbarSupportedContent"}},[s("button",{staticClass:"btn btn-warning",on:{click:t.logout}},[t._v("Log Out")])])]),t._v("Welcome to your boards!\n  "),s("br"),t._v(" "),s("br"),t._v(" "),s("form",{on:{submit:function(e){return e.preventDefault(),t.createBoard(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newBoard.title,expression:"newBoard.title"}],attrs:{type:"text",placeholder:"title",required:""},domProps:{value:t.newBoard.title},on:{input:function(e){e.target.composing||t.$set(t.newBoard,"title",e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newBoard.description,expression:"newBoard.description"}],attrs:{type:"text",placeholder:"description"},domProps:{value:t.newBoard.description},on:{input:function(e){e.target.composing||t.$set(t.newBoard,"description",e.target.value)}}}),t._v(" "),s("button",{attrs:{type:"submit"}},[t._v("Create Board")])]),t._v(" "),s("br"),t._v(" "),s("dl",t._l(t.boards,(function(e){return s("div",{key:e._id},[s("dt",[s("router-link",{attrs:{to:{name:"board",params:{boardId:e._id}}},on:{click:t.setActiveBoard}},[t._v(t._s(e.title))]),t._v(" "),s("button",{staticClass:"btn btn-danger",on:{click:function(s){t.deleteBoard(e._id)}}},[s("i",{staticClass:"fas fa-trash-alt trash-right"})])],1)])})))])},p=[],h={name:"boards",mounted(){this.$store.dispatch("getBoards")},data(){return{newBoard:{title:"",description:""}}},computed:{boards(){return this.$store.state.boards}},methods:{createBoard(){this.$store.dispatch("createBoard",this.newBoard),this.newBoard={title:"",description:""}},logout(){this.$store.dispatch("logout")},deleteBoard(t){this.$store.dispatch("deleteBoard",t)},setActiveBoard(){this.$store.state.activeBoard={},this.$store.state.activeBoard=this.board,this.$store.commit("setActiveBoard",this.board)}}},v=h,b=(s("5f1b"),Object(d["a"])(v,u,p,!1,null,"704cfce1",null)),g=b.exports,w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"board"},[s("h2",[t._v(t._s(t.board.title))]),t._v(" "),s("div",{staticClass:"description"},[t._v(t._s(t.board.description))]),t._v(" "),s("form",{on:{submit:function(e){return e.preventDefault(),t.createList(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newList.title,expression:"newList.title"}],attrs:{type:"text",placeholder:"title",required:""},domProps:{value:t.newList.title},on:{input:function(e){e.target.composing||t.$set(t.newList,"title",e.target.value)}}}),t._v(" "),s("button",{attrs:{type:"submit"}},[t._v("Create List")])]),t._v(" "),s("br"),t._v(" "),s("div",{staticClass:"row",staticStyle:{padding:"0rem 3rem"}},t._l(t.lists,(function(t){return s("div",{key:t._id},[s("List",{attrs:{listData:t}})],1)})))])},f=[],_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-3"},[s("div",{staticClass:"card",staticStyle:{width:"15rem"}},[s("div",{staticClass:"card-body shadow"},[s("h5",{staticClass:"card-title"},[t._v(t._s(t.listData.title))]),t._v(" "),s("button",{staticClass:"btn btn-danger",on:{click:function(e){t.deleteList(t.listData._id)}}},[s("i",{staticClass:"fas fa-trash-alt"})])]),t._v(" "),t._l(t.tasks,(function(e){return s("ul",{key:e.id,staticClass:"list-group list-group-flush",staticStyle:{"list-style-type":"none"}},[s("b",[t._v("Task:")]),t._v(" "),s("task-component",{attrs:{taskData:e}})],1)})),t._v(" "),s("div",{staticClass:"card-body"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.createTask(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newTask.description,expression:"newTask.description"}],attrs:{type:"text",placeholder:"task",required:""},domProps:{value:t.newTask.description},on:{input:function(e){e.target.composing||t.$set(t.newTask,"description",e.target.value)}}}),t._v(" "),s("button",{attrs:{type:"submit"}},[t._v("Create Task")])])])],2)])},k=[],y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[t._v("\n  "+t._s(t.taskData.description)+"\n  "),t._l(t.comments,(function(t){return s("ul",{key:t.id,staticClass:"list-group list-group-flush"},[s("comment-component",{attrs:{commentData:t}})],1)})),t._v(" "),s("form",{on:{submit:function(e){return e.preventDefault(),t.createComment(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newComment.content,expression:"newComment.content"}],attrs:{type:"text",placeholder:"comment",required:""},domProps:{value:t.newComment.content},on:{input:function(e){e.target.composing||t.$set(t.newComment,"content",e.target.value)}}}),t._v(" "),s("button",{attrs:{type:"submit"}},[t._v("Create Comment")])]),t._v(" "),s("select",{staticClass:"form-control",on:{change:function(e){t.changeTaskList(e)}}},[s("option",{attrs:{value:"",selected:"",disabled:""}},[t._v("Select List")]),t._v(" "),t._l(t.availableLists,(function(e){return s("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.title))])}))],2),t._v(" "),s("button",{staticClass:"btn btn-danger",on:{click:function(e){t.deleteTask(t.taskData._id)}}},[s("i",{staticClass:"fas fa-trash-alt"})])],2)},C=[],$=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("i",[t._v("Comment:")]),t._v("\n  "+t._s(t.commentData.content)+"\n  "),t._v(" "),s("button",{staticClass:"btn btn-danger",on:{click:function(e){t.deleteComment(t.commentData._id)}}},[s("i",{staticClass:"fas fa-trash-alt"})])])},I=[],L={name:"Comment",mounted(){},methods:{deleteComment(t){this.$store.dispatch("deleteComment",{commentId:this.commentData.id,taskId:this.commentData.taskId})}},computed:{},props:["commentData"]},B=L,D=Object(d["a"])(B,$,I,!1,null,null,null),T=D.exports,x={name:"Task",mounted(){this.$store.dispatch("getComments",this.taskData.id)},data(){return{newComment:{content:"",taskId:this.taskData.id},selectedList:null}},methods:{deleteTask(t){this.$store.dispatch("deleteTask",{taskId:this.taskData.id,boardId:this.taskData.boardId})},changeTaskList(t){this.selectedList=t.target.options[t.target.options.selectedIndex].value,console.log(this.selectedList);let e=this.selectedList,s={newListId:e,currentTaskId:this.taskData.id};this.$store.dispatch("editTask",s),console.log("newId made in changetasklist",e)},createComment(){let t={...this.newComment};this.$store.dispatch("createComment",t),this.newComment={content:"",taskId:this.taskData.id}}},computed:{availableLists(){return this.$store.state.lists},comments(){return this.$store.state.comments[this.taskData.id]}},props:["taskData"],components:{CommentComponent:T}},U=x,O=Object(d["a"])(U,y,C,!1,null,null,null),P=O.exports,j={name:"List",mounted(){this.$store.dispatch("getTasks",this.listData.id)},data(){return{newTask:{description:"",boardId:this.listData.boardId,listId:this.listData.id}}},computed:{tasks(){return this.$store.state.tasks[this.listData.id]}},components:{TaskComponent:P},methods:{deleteList(t){this.$store.dispatch("deleteList",{listId:t,boardId:this.listData.boardId})},createTask(){let t={...this.newTask};this.$store.dispatch("createTask",t),this.newTask={description:"",boardId:this.listData.boardId,listId:this.listData.id}}},props:["listData"]},N=j,R=Object(d["a"])(N,_,k,!1,null,"6360fb19",null),S=R.exports,A={name:"board",mounted(){this.$store.dispatch("getListsByBoardId",this.boardId),this.$store.dispatch("getBoardById",this.boardId)},data(){return{newList:{title:"",boardId:this.boardId}}},computed:{lists(){return this.$store.state.lists},board(){return this.$store.state.boards}},methods:{createList(){let t={...this.newList};this.$store.dispatch("createList",t),this.newList={title:"",boardId:this.boardId}},deleteList(t){this.$store.dispatch("deleteList",{listId:t,boardId:this.boardId})}},components:{List:S},props:["boardId"]},E=A,M=Object(d["a"])(E,w,f,!1,null,null,null),F=M.exports,q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login"},[t.loginForm?s("form",{on:{submit:function(e){return e.preventDefault(),t.loginUser(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.creds.email,expression:"creds.email"}],attrs:{type:"email",placeholder:"email"},domProps:{value:t.creds.email},on:{input:function(e){e.target.composing||t.$set(t.creds,"email",e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.creds.password,expression:"creds.password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:t.creds.password},on:{input:function(e){e.target.composing||t.$set(t.creds,"password",e.target.value)}}}),t._v(" "),s("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[t._v("Login")])]):s("form",{on:{submit:function(e){return e.preventDefault(),t.register(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.name,expression:"newUser.name"}],attrs:{type:"text",placeholder:"name"},domProps:{value:t.newUser.name},on:{input:function(e){e.target.composing||t.$set(t.newUser,"name",e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.email,expression:"newUser.email"}],attrs:{type:"email",placeholder:"email"},domProps:{value:t.newUser.email},on:{input:function(e){e.target.composing||t.$set(t.newUser,"email",e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.password,expression:"newUser.password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:t.newUser.password},on:{input:function(e){e.target.composing||t.$set(t.newUser,"password",e.target.value)}}}),t._v(" "),s("button",{staticClass:"btn btn-warning",attrs:{type:"submit"}},[t._v("Create Account")])]),t._v(" "),s("div",{staticClass:"action",on:{click:function(e){t.loginForm=!t.loginForm}}},[t.loginForm?s("p",[t._v("No account? Click here to Register")]):s("p",[t._v("Already have an account? Click here to Login")])])])},J=[],H={name:"login",data(){return{loginForm:!0,creds:{email:"",password:""},newUser:{email:"",password:"",name:""}}},beforeCreate(){this.$store.state.user._id&&this.$router.push({name:"boards"})},methods:{register(){this.$store.dispatch("register",this.newUser)},loginUser(){this.$store.dispatch("login",this.creds)}}},W=H,z=(s("d6db"),Object(d["a"])(W,q,J,!1,null,null,null)),G=z.exports;a["a"].use(m["a"]);var K=new m["a"]({routes:[{path:"/",name:"boards",component:g},{path:"/boards/:boardId",name:"board",props:!0,component:F},{path:"/login",name:"login",component:G},{path:"*",redirect:"/"}]}),Q=s("2f62"),V=s("bc3a"),X=s.n(V);let Y=location.host.includes("localhost")?"//localhost:3000/":"/",Z=X.a.create({baseURL:Y+"account/",timeout:3e3,withCredentials:!0});class tt{static async Login(t){try{let e=await Z.post("login",t);return e.data}catch(e){throw new Error(`[login failed] : ${e.response?e.response.data.error:"No response from server"}`)}}static async Register(t){try{let e=await Z.post("register",t);return e.data}catch(e){throw new Error(`[registration failed] : ${e.response?e.response.data.error:"No response from server"}`)}}static async Logout(){try{await Z.delete("logout");return!0}catch(t){throw new Error(`[logout failed] : ${t.response?t.response.data.error:"No response from server"}`)}}static async Authenticate(){try{let t=await Z.get("authenticate");return t.data}catch(t){console.warn(`[Authentication failed] : ${t.response?t.response.data.error:"No response from server"}`)}}}let et=window.location.host.includes("localhost:8080")?"//localhost:3000/":"/",st=X.a.create({baseURL:et+"api/",timeout:3e3,withCredentials:!0});var at={actions:{getBoardById({commit:t,dispatch:e},s){st.get("boards/"+s).then(e=>{t("setResource",{resource:"boards",data:e.data})})},getBoards({commit:t,dispatch:e}){st.get("boards").then(e=>{t("setResource",{resource:"boards",data:e.data})})},createBoard({commit:t,dispatch:e},s){st.post("boards",s).then(e=>{t("addResource",{resource:"boards",data:e.data})})},deleteBoard({commit:t,dispatch:e},s){st.delete("boards/"+s).then(t=>{e("getBoards")})}}};let ot=window.location.host.includes("localhost:8080")?"//localhost:3000/":"/",rt=X.a.create({baseURL:ot+"api/",timeout:3e3,withCredentials:!0});var nt={mutations:{setListsAfterDelete(t,e){t.lists=e}},actions:{getLists({commit:t,dispatch:e}){rt.get("lists").then(e=>{t("setResource",{resource:"lists",data:e.data})})},createList({commit:t,dispatch:e},s){rt.post("lists",s).then(e=>{t("addResource",{resource:"lists",data:e.data})})},async deleteList({commit:t,dispatch:e},s){let a=await rt.delete("lists/"+s.listId);console.log(a.data),e("getListsByBoardId",s.boardId)},getListsByBoardId({commit:t,dispatch:e},s){rt.get("boards/"+s+"/lists").then(e=>{t("setResource",{resource:"lists",data:e.data})})}}};s("eebe");a["a"].use(Q["a"]);let it=window.location.host.includes("localhost:8080")?"//localhost:3000/":"/",dt=X.a.create({baseURL:it+"api/",timeout:3e3,withCredentials:!0});var ct=new Q["a"].Store({modules:{boardModule:at,listModule:nt},state:{user:{},boards:[],activeBoard:{},lists:[],tasks:{},comments:{}},mutations:{setResource(t,e){t[e.resource]=e.data},addResource(t,e){t[e.resource].push(e.data)},setUser(t,e){t.user=e},setBoards(t,e){t.boards=e},setTasks(t,e){a["a"].set(t.tasks,e.listId,e.tasks)},setActiveBoard(t,e){t.activeBoard=e},setComments(t,e){a["a"].set(t.comments,e.taskId,e.comments)},resetState(t,e){t.user={},t.boards=[],t.activeBoard={}}},actions:{async register({commit:t,dispatch:e},s){try{let e=await tt.Register(s);t("setUser",e),K.push({name:"boards"})}catch(a){console.warn(a.message)}},async login({commit:t,dispatch:e},s){try{let e=await tt.Login(s);t("setUser",e),K.push({name:"boards"})}catch(a){console.warn(a.message)}},async logout({commit:t,dispatch:e}){try{await tt.Logout();t("resetState"),K.push({name:"login"})}catch(s){console.warn(s.message)}},async createTask({commit:t,dispatch:e},s){try{let e=await dt.post("tasks",s);t("setTasks",e.data)}catch(a){console.warn(a.message)}},async getTasks({commit:t,dispatch:e},s){try{let e=await dt.get(`lists/${s}/tasks`);t("setTasks",{listId:s,tasks:e.data})}catch(a){console.warn(a.message)}},async deleteTask({commit:t,dispatch:e},s){let a=await dt.delete("tasks/"+s.taskId);console.log(a.data),e("getTasks",s.listId)},async editTask({commit:t,dispatch:e},s){let a=await dt.put("tasks/"+s.currentTaskId,s);e("getTasks",a.data)},async createComment({commit:t,dispatch:e},s){try{await dt.post("comments",s);e("getComments",s.taskId)}catch(a){console.warn(a.message)}},async getComments({commit:t,dispatch:e},s){try{let e=await dt.get(`tasks/${s}/comments`);t("setComments",{taskId:s,comments:e.data})}catch(a){console.warn(a.message)}},async deleteComment({commit:t,dispatch:e},s){let a=await dt.delete("comments/"+s.commentId);console.log(a.data),e("getComments",s.taskId)}}});async function lt(){let t=await tt.Authenticate();t?ct.commit("setUser",t):K.push({name:"login"}),new a["a"]({router:K,store:ct,render:t=>t(l)}).$mount("#app")}lt()},"5f1b":function(t,e,s){"use strict";var a=s("1e2b"),o=s.n(a);o.a},"85ec":function(t,e,s){},d6db:function(t,e,s){"use strict";var a=s("e67a"),o=s.n(a);o.a},e67a:function(t,e,s){}});
//# sourceMappingURL=app.294c37a5.js.map
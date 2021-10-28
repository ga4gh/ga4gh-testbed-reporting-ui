(this["webpackJsonpga4gh-testbed-reporting-ui"]=this["webpackJsonpga4gh-testbed-reporting-ui"]||[]).push([[0],{100:function(e,t,s){},114:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s.n(a),r=s(38),i=s.n(r),c=(s(100),s(39)),o=s(16),l=s(157),d=s(158),m=s(160),u=s(161),j=s(151),p=Object(j.a)((function(e){return{root:{flexGrow:1,marginBottom:50},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},heading:{marginLeft:20,marginRight:20},link:{color:"inherit",textDecoration:"none"}}})),b=p,h=s(0),g=function(){var e=b();return Object(h.jsx)(d.a,{position:"static",className:e.root,children:Object(h.jsx)(m.a,{children:Object(h.jsx)(u.a,{variant:"h6",className:e.heading,children:Object(h.jsx)(c.b,{to:"/",className:e.link,children:"GA4GH Testbed"})})})})},x=s(163),O=s(162),f=Object(j.a)((function(e){return{root:{marginBottom:"50px"}}})),_=function(e){var t=f();return Object(h.jsx)(O.a,{maxWidth:"lg",className:t.root,children:e.children})},v=function(e){return Object(h.jsxs)(_,{children:[Object(h.jsx)(u.a,{variant:"h5",children:"Future Home of the GA4GH Testbed"}),Object(h.jsx)(x.a,{variant:"contained",color:"primary",component:c.b,to:"/testbeds/testbedId/series/seriesId/reports/reportId",children:"View Sample Report"})]})},y=s(51),T=s(152),S=Object(j.a)((function(e){return{sizeFull:{width:"100%",marginTop:25,marginBottom:25},sizeMedium:{maxWidth:"50%",marginTop:25,marginBottom:25},sizeSmall:{maxWidth:"25%",marginTop:25,marginBottom:25}}})),w=function(e){var t=S(),s="".concat(e.reportLevel," Status: ").concat(e.status),a={full:t.sizeFull,medium:t.sizeMedium,small:t.sizeSmall},n=e.variant||"filled";return Object(h.jsx)(T.a,{className:a[e.size],severity:{PASS:"success",WARN:"warning",FAIL:"error",SKIP:"info"}[e.status],variant:n,children:s})},N={schema_name:"ga4gh-testbed-report",schema_version:"0.1.0",testbed_name:"Unspecified GA4GH Testbed",testbed_version:"v1.0.0",testbed_description:"A generic testbed",platform_name:"GA4GH Starter Kit Reference Deployment",platform_description:"Reference deployment of the GA4GH Starter Kit running on AWS",input_parameters:{token:"[SECURE]",url:"https://some-site.genomics.org"},start_time:"2021-10-22T15:00:00Z",end_time:"2021-10-22T15:30:00Z",status:"FAIL",summary:{unknown:0,passed:3,warned:1,failed:1,skipped:3},phases:[{phase_name:"Sequences",phase_description:"Tests all sequence endpoints",start_time:"2021-10-22T15:00:00Z",end_time:"2021-10-22T15:30:00Z",status:"WARN",summary:{unknown:0,passed:2,warned:1,failed:0,skipped:1},tests:[{test_name:"Get Sequence",test_description:"Get a reference sequence",start_time:"2021-10-22T15:00:00Z",end_time:"2021-10-22T15:30:00Z",status:"PASS",summary:{unknown:0,passed:1,warned:0,failed:0,skipped:1},cases:[{case_name:"Get e. coli",case_description:"Get e. coli reference sequence",log_messages:["log message A","log message B"],start_time:"2021-10-22T15:00:00Z",end_time:"2021-10-22T15:30:00Z",status:"PASS",message:"Retrieved successfully"},{case_name:"Get s. cerevisiae",case_description:"Get s. cerevisiae reference sequence",log_messages:[],start_time:"2021-10-22T15:00:00Z",end_time:"2021-10-22T15:30:00Z",status:"SKIP",message:"Skipping test"}]},{test_name:"List Sequences",test_description:"List reference sequences",start_time:"2021-10-22T15:00:00Z",end_time:"2021-10-22T15:30:00Z",status:"WARN",summary:{unknown:0,passed:1,warned:1,failed:0,skipped:0},cases:[{case_name:"List bacterial sequences",case_description:"List all bacterial reference sequences",log_messages:[],start_time:"2021-10-22T15:00:00Z",end_time:"2021-10-22T15:30:00Z",status:"WARN",message:"Passed with some warnings"},{case_name:"List fungal sequences",case_description:"List all fungal reference sequences",log_messages:[],start_time:"2021-10-22T15:00:00Z",end_time:"2021-10-22T15:30:00Z",status:"PASS",message:"All fungal sequences retrieved"}]}]},{phase_name:"Variants",phase_description:"Tests all variants endpoints",start_time:"2021-10-22T15:00:00Z",end_time:"2021-10-22T15:30:00Z",status:"FAIL",summary:{unknown:0,passed:1,warned:0,failed:1,skipped:2},tests:[{test_name:"Get Variant",test_description:"Get an observed variant",start_time:"2021-10-22T15:00:00Z",end_time:"2021-10-22T15:30:00Z",status:"FAIL",summary:{unknown:0,passed:1,warned:0,failed:1,skipped:0},cases:[{case_name:"Get synonymous mutation",case_description:"Get the specified synonymous mutation",log_messages:[],start_time:"2021-10-22T15:00:00Z",end_time:"2021-10-22T15:30:00Z",status:"PASS",message:"Retrieved successfully"},{case_name:"Get non-synonymous mutation",case_description:"Get the specified non-synonymous mutation",log_messages:[],start_time:"2021-10-22T15:00:00Z",end_time:"2021-10-22T15:30:00Z",status:"FAIL",message:"Failed to retrieve the specified non-synonymous mutation"}]},{test_name:"List Variants",test_description:"Get filtered lists of desired variants",start_time:"2021-10-22T15:00:00Z",end_time:"2021-10-22T15:30:00Z",status:"SKIP",summary:{unknown:0,passed:0,warned:0,failed:0,skipped:2},cases:[{case_name:"List synonymous mutations",case_description:"List all synonymous mutations",log_messages:[],start_time:"2021-10-22T15:00:00Z",end_time:"2021-10-22T15:30:00Z",status:"SKIP",message:"Test skipped"},{case_name:"List non-synonymous mutations",case_description:"List all non-synonymous mutations",log_messages:[],start_time:"2021-10-22T15:00:00Z",end_time:"2021-10-22T15:30:00Z",status:"SKIP",message:"Test skipped"}]}]}]},k=s(150),A=Object(j.a)((function(e){return{div:{marginTop:25,marginBottom:25,width:"100%",height:"1.5em"},cellPass:{backgroundColor:e.palette.success.light,border:"1px solid ".concat(e.palette.success.main),height:"1.5em",display:"inline-block"},cellWarn:{backgroundColor:e.palette.warning.light,border:"1px solid ".concat(e.palette.warning.main),height:"1.5em",display:"inline-block"},cellFail:{backgroundColor:e.palette.error.light,border:"1px solid ".concat(e.palette.error.main),height:"1.5em",display:"inline-block"},cellSkip:{backgroundColor:e.palette.info.light,border:"1px solid ".concat(e.palette.info.main),height:"1.5em",display:"inline-block"}}})),I=A,C=function(e){var t=I(),s={PASS:t.cellPass,WARN:t.cellWarn,FAIL:t.cellFail,SKIP:t.cellSkip};return console.log(e.cases),Object(h.jsx)("div",{className:t.div,children:e.cases.map((function(t,a){var n=100/e.cases.length,r={width:"calc(".concat(n,"% - 3px")};return 0===a&&(r.borderTopLeftRadius="25px",r.borderBottomLeftRadius="25px"),a===e.cases.length-1&&(r.borderTopRightRadius="25px",r.borderBottomRightRadius="25px"),Object(h.jsx)(k.a,{title:"".concat(t.phase_name," -> ").concat(t.test_name," -> ").concat(t.case_name),children:Object(h.jsx)("div",{style:r,className:s[t.status]})})}))})},P=s(15),R=s(164),L=s(159),Z=s(165),F=s(166),B=s(167),G=s(168),W=s(169),z=s(155),V=s(60),D=s.n(V),K=s(61),q=s.n(K),U=s(62),M=s.n(U),H=s(63),E=s.n(H),J=function(e){var t=e.reportLevel||"",s="".concat(t," Status: ").concat(e.status),a={PASS:Object(h.jsx)(D.a,{}),WARN:Object(h.jsx)(q.a,{}),FAIL:Object(h.jsx)(M.a,{}),SKIP:Object(h.jsx)(E.a,{})};return Object(h.jsx)(z.a,{icon:a[e.status],color:{PASS:"success",WARN:"warning",FAIL:"error",SKIP:"info"}[e.status],variant:"contained",label:s})},Y=Object(j.a)((function(e){return{table:{marginBottom:25},passRow:{borderBottom:"2px solid ".concat(e.palette.success.main),backgroundColor:e.palette.success.light+"60"},warnRow:{borderBottom:"2px solid ".concat(e.palette.warning.main),backgroundColor:e.palette.warning.light+"60"},failRow:{borderBottom:"2px solid ".concat(e.palette.error.main),backgroundColor:e.palette.error.light+"60"},skipRow:{borderBottom:"2px solid ".concat(e.palette.info.main),backgroundColor:e.palette.info.light+"60"}}})),Q=Y,X=Object(j.a)((function(e){return{button:{margin:"10px"}}})),$=function(e){var t=X(),s={PASS:Object(h.jsx)(D.a,{}),WARN:Object(h.jsx)(q.a,{}),FAIL:Object(h.jsx)(M.a,{}),SKIP:Object(h.jsx)(E.a,{})},a=void 0===e.useColor||e.useColor,n=void 0===e.useIcon||e.useIcon?s[e.status]:null,r=a?{PASS:"success",WARN:"warning",FAIL:"error",SKIP:"info"}[e.status]:"neutral",i=e.variant||"outlined",c=e.size||"medium";return Object(h.jsx)("span",{className:t.button,children:Object(h.jsx)(x.a,{startIcon:n,color:r,variant:i,size:c,href:"#".concat(e.to),children:e.label})})},ee=function(e){return e.map((function(e){return e.toLowerCase().replaceAll(".","").replaceAll(" ","")})).join("-")},te=function(e){var t=Q(),s={PASS:t.passRow,WARN:t.warnRow,FAIL:t.failRow,SKIP:t.skipRow};return Object(h.jsx)(R.a,{component:L.a,className:t.table,children:Object(h.jsxs)(Z.a,{size:"small",children:[Object(h.jsx)(F.a,{children:Object(h.jsxs)(B.a,{children:[Object(h.jsx)(G.a,{children:"Phase"}),Object(h.jsx)(G.a,{children:"Test"}),Object(h.jsx)(G.a,{children:"Case"}),Object(h.jsx)(G.a,{children:"Status"}),Object(h.jsx)(G.a,{children:"View"})]})}),Object(h.jsx)(W.a,{children:e.phases.map((function(e){var t=Object(h.jsxs)(B.a,{className:s[e.status],children:[Object(h.jsx)(G.a,{children:e.phase_name}),Object(h.jsx)(G.a,{}),Object(h.jsx)(G.a,{}),Object(h.jsx)(G.a,{children:Object(h.jsx)(J,{status:e.status})}),Object(h.jsx)(G.a,{children:Object(h.jsx)($,{useColor:!0,useIcon:!1,variant:"contained",label:"View",status:e.status,to:ee([e.phase_name])})})]}),a=e.tests.map((function(t){var a=Object(h.jsxs)(B.a,{className:s[t.status],children:[Object(h.jsx)(G.a,{children:e.phase_name}),Object(h.jsx)(G.a,{children:t.test_name}),Object(h.jsx)(G.a,{}),Object(h.jsx)(G.a,{children:Object(h.jsx)(J,{status:t.status})}),Object(h.jsx)(G.a,{children:Object(h.jsx)($,{useColor:!0,useIcon:!1,variant:"contained",label:"View",status:t.status,to:ee([e.phase_name,t.test_name])})})]}),n=t.cases.map((function(a){return Object(h.jsxs)(B.a,{className:s[a.status],children:[Object(h.jsx)(G.a,{children:e.phase_name}),Object(h.jsx)(G.a,{children:t.test_name}),Object(h.jsx)(G.a,{children:a.case_name}),Object(h.jsx)(G.a,{children:Object(h.jsx)(J,{status:a.status})}),Object(h.jsx)(G.a,{children:Object(h.jsx)($,{useColor:!0,useIcon:!1,variant:"contained",label:"View",status:a.status,to:ee([e.phase_name,t.test_name,a.case_name])})})]})}));return[a].concat(Object(P.a)(n))}));return[t].concat(Object(P.a)(a))}))})]})})},se=Object(j.a)((function(e){return{table:{marginBottom:25}}})),ae=function(e){var t=se();return Object(h.jsx)(R.a,{component:L.a,className:t.table,children:Object(h.jsxs)(Z.a,{size:"small",children:[Object(h.jsx)(F.a,{children:Object(h.jsx)(B.a,{children:e.header.map((function(e){return Object(h.jsx)(G.a,{children:e})}))})}),Object(h.jsx)(W.a,{children:e.rows.map((function(e){return Object(h.jsxs)(B.a,{children:[Object(h.jsx)(G.a,{children:e.label}),Object(h.jsx)(G.a,{children:e.value})]})}))})]})})},ne=s(156),re=s(154),ie=s(170),ce=Object(j.a)((function(e){return{div:{marginTop:10,marginRight:25,display:"inline-block"},reportBreadcrumbs:{fontSize:"2.0em",color:e.palette.primary.main}}})),oe=ce,le=function(e){var t=oe();return Object(h.jsx)("div",{id:e.id,className:t.div,children:Object(h.jsx)(re.a,{separator:"/",className:t.reportBreadcrumbs,children:e.breadcrumbs.map((function(e){return Object(h.jsx)(ie.a,{color:"inherit",href:"#".concat(e.to),children:e.label})}))})})},de=(Object(j.a)((function(e){return{group:{marginTop:20,textAlign:"center"}}})),["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]),me=["January","February","March","April","May","June","July","August","September","October","November","December"],ue=function(e,t,s){return e.repeat(t-s.length)+s},je=function(e){var t=new Date(e);return"".concat(de[t.getUTCDay()],",")+" ".concat(me[t.getUTCMonth()])+" ".concat(t.getUTCDate(),",")+" ".concat(t.getUTCFullYear())+" @ ".concat(ue("0",2,t.getUTCHours().toString()))+":".concat(ue("0",2,t.getUTCMinutes().toString()))+":".concat(ue("0",2,t.getUTCSeconds().toString()))+" UTC"},pe=Object(j.a)((function(e){return{div:{paddingLeft:100,paddingTop:10,paddingBottom:10}}})),be=function(e){return Object(h.jsx)("div",{children:e.messages.map((function(e){return Object(h.jsx)(u.a,{children:e})}))})},he=function(e){var t=pe(),s=[{label:"Phase: ".concat(e.phaseName),to:ee([e.phaseName])},{label:"Test: ".concat(e.testName),to:ee([e.phaseName,e.testName])},{label:"Case: ".concat(e.testCase.case_name),to:ee([e.phaseName,e.testName,e.testCase.case_name])}];return Object(h.jsxs)("div",{className:t.div,children:[Object(h.jsx)(le,{id:ee([e.phaseName,e.testName,e.testCase.case_name]),breadcrumbs:s}),Object(h.jsx)(J,{reportLevel:"Case",status:e.testCase.status}),Object(h.jsxs)(u.a,{variant:"body1",children:[Object(h.jsx)("strong",{children:"Description: "}),e.testCase.case_description]}),Object(h.jsxs)(u.a,{variant:"body1",children:[Object(h.jsx)("strong",{children:"Message: "}),e.testCase.message]}),e.testCase.log_messages.length>0?Object(h.jsx)(be,{messages:e.testCase.log_messages}):null]})},ge=Object(j.a)((function(e){return{div:{paddingLeft:50,paddingTop:15,paddingBottom:15}}})),xe=function(e){var t=ge(),s=[{label:"Phase: ".concat(e.phaseName),to:ee([e.phaseName])},{label:"Test: ".concat(e.test.test_name),to:ee([e.phaseName,e.test.test_name])}];e.test.test_description,je(e.test.start_time),je(e.test.end_time),e.test.cases.map((function(t){return{status:t.status,label:"View Case: ".concat(t.case_name),to:ee([e.phaseName,e.test.test_name,t.case_name]),size:"small"}}));return Object(h.jsxs)("div",{className:t.div,children:[Object(h.jsx)(le,{id:ee([e.phaseName,e.test.test_name]),breadcrumbs:s}),Object(h.jsx)(J,{reportLevel:"Test",status:e.test.status}),Object(h.jsx)(ne.a,{container:!0,spacing:2,children:Object(h.jsx)(ne.a,{item:!0,xs:12,children:Object(h.jsxs)(u.a,{variant:"body1",children:[Object(h.jsx)("strong",{children:"Description: "}),e.test.test_description]})})}),e.test.cases.map((function(t){return Object(h.jsx)(he,{testCase:t,phaseName:e.phaseName,testName:e.test.test_name})}))]})},Oe=Object(j.a)((function(e){return{div:{paddingTop:25,paddingBottom:25,borderBottom:"1px solid #909090"}}})),fe=function(e){var t=Oe(),s=[{label:"Phase: ".concat(e.phase.phase_name),to:ee([e.phase.phase_name])}];e.phase.tests.map((function(t){return{status:t.status,label:"View Test: ".concat(t.test_name),to:ee([e.phase.phase_name,t.test_name]),size:"large"}}));return Object(h.jsxs)("div",{className:t.div,children:[Object(h.jsx)(le,{id:ee([e.phase.phase_name]),breadcrumbs:s}),Object(h.jsx)(J,{reportLevel:"Phase",status:e.phase.status}),Object(h.jsx)(ne.a,{container:!0,spacing:2,children:Object(h.jsx)(ne.a,{item:!0,xs:12,children:Object(h.jsxs)(u.a,{variant:"body1",children:[Object(h.jsx)("strong",{children:"Description: "}),e.phase.phase_description]})})}),e.phase.tests.map((function(t){return Object(h.jsx)(xe,{test:t,phaseName:e.phase.phase_name})}))]})},_e=function(e){var t=[];return e.phases.forEach((function(e){e.tests.forEach((function(s){s.cases.forEach((function(a){var n=Object(y.a)({},a);n.phase_name=e.phase_name,n.test_name=s.test_name,t.push(n)}))}))})),t},ve=s(149),ye=function(e){return Object(h.jsx)(k.a,{title:e.message,children:Object(h.jsx)(ve.a,{color:"primary",fontSize:"small"})})},Te=function(e){var t=Object(o.f)(),s=(t.testbedId,t.seriesId,t.reportId,N),a={header:["Report Info Key","Value"],rows:[{label:"Testbed Name",value:s.testbed_name},{label:"Testbed Version",value:s.testbed_version},{label:"Testbed Description",value:s.testbed_description},{label:"Platform Name",value:s.platform_name},{label:"Platform Description",value:s.platform_description},{label:"Start Time",value:je(s.start_time)},{label:"End Time",value:je(s.end_time)}]},n={header:["Param Name","Param Value"],rows:Object.keys(s.input_parameters).map((function(e){return{label:e,value:s.input_parameters[e]}}))};return Object(h.jsxs)(_,{children:[Object(h.jsx)(u.a,{variant:"h5",children:"Test Report"}),Object(h.jsxs)(u.a,{variant:"body1",children:[Object(h.jsx)("strong",{children:"Testbed: "}),s.testbed_name]}),Object(h.jsxs)(u.a,{variant:"body1",children:[Object(h.jsx)("strong",{children:"Testbed Version: "}),s.testbed_version]}),Object(h.jsxs)(u.a,{variant:"body1",children:[Object(h.jsx)("strong",{children:"Platform: "}),s.platform_name]}),Object(h.jsx)(w,{reportLevel:"Test",status:s.status,size:"full"}),Object(h.jsx)(u.a,{display:"inline",variant:"h5",children:"Test Trace"}),Object(h.jsx)(ye,{message:"Displays the status of each test case, in the order  they were encountered during test execution. Mouse over a cell to see the test case."}),Object(h.jsx)(C,{cases:_e(s)}),Object(h.jsx)(u.a,{display:"inline",variant:"h5",children:"Test Status"}),Object(h.jsx)(ye,{message:"Shows the status of each phase, test, and test case in table format. Click the 'View' button to see the full report for the corresponding test component."}),Object(h.jsxs)(u.a,{variant:"body1",children:[Object(h.jsx)("strong",{children:"Passed: "}),s.summary.passed,Object(h.jsx)("strong",{children:" Warned: "}),s.summary.warned,Object(h.jsx)("strong",{children:" Failed: "}),s.summary.failed,Object(h.jsx)("strong",{children:" Skipped: "}),s.summary.skipped,Object(h.jsx)("strong",{children:" Unknown: "}),s.summary.unknown]}),Object(h.jsx)(te,{phases:s.phases}),Object(h.jsx)(u.a,{display:"inline",variant:"h6",children:"Report Info"}),Object(h.jsx)(ye,{message:"Summary information for this test report, including the testbed that was run, the platform it was run on, and when the tests were executed."}),Object(h.jsx)(ae,Object(y.a)({},a)),Object(h.jsx)(u.a,{display:"inline",variant:"h6",children:"Input Parameters"}),Object(h.jsx)(ye,{message:"Input parameters provided to the testbed application."}),Object(h.jsx)(ae,Object(y.a)({},n)),Object(h.jsx)(u.a,{display:"inline",variant:"h5",children:"Full Report"}),Object(h.jsx)(ye,{message:"Full breakdown of all report phases, tests, and test cases. Displays full log information for each test case."}),s.phases.map((function(e){return Object(h.jsx)(fe,{phase:e})}))]})},Se=s(85),we=Object(Se.a)({status:{neutral:"#355e3b"},palette:{primary:{main:"#2f75bb"},secondary:{main:"#9f7ab0"},neutral:{main:"#64748B",contrastText:"#fff"}},typography:{fontFamily:'"Helvetica Neue"'}}),Ne=function(){return Object(h.jsx)(l.a,{theme:we,children:Object(h.jsxs)(c.a,{children:[Object(h.jsx)(g,{}),Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{exact:!0,path:"/",component:v}),Object(h.jsx)(o.a,{exact:!0,path:"/testbeds/:testbedId/series/:seriesId/reports/:reportId",component:Te})]})]})})},ke=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,171)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;s(e),a(e),n(e),r(e),i(e)}))};i.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(Ne,{})}),document.getElementById("root")),ke()}},[[114,1,2]]]);
//# sourceMappingURL=main.4323e094.chunk.js.map
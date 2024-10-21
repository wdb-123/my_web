"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5450],{639:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=t(4848),s=t(8453);const r={sidebar_position:2},o="TwinCAT3 (Windows)",a={id:"eRob driver/TwinCAT3",title:"TwinCAT3",description:"You're reading the documentation for a development version.",source:"@site/docs/eRob driver/TwinCAT3.md",sourceDirName:"eRob driver",slug:"/eRob driver/TwinCAT3",permalink:"/my_web/docs/eRob driver/TwinCAT3",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/eRob driver/TwinCAT3.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Hardware",permalink:"/my_web/docs/eRob driver/Hardware"},next:{title:"Python (Windows)",permalink:"/my_web/docs/eRob driver/python-driver"}},l={},c=[{value:"1. Introduction",id:"1-introduction",level:2},{value:"Install TwinCAT3",id:"install-twincat3",level:2},{value:"2. Connecting Computer to eRob",id:"2-connecting-computer-to-erob",level:2},{value:"3. Create TwinCAT Project",id:"3-create-twincat-project",level:2},{value:"3.1 ESI File Placement",id:"31-esi-file-placement",level:3},{value:"3.2 Creating a New Project in TwinCAT",id:"32-creating-a-new-project-in-twincat",level:3},{value:"3.3 Parameter Configuration",id:"33-parameter-configuration",level:3},{value:"3.4 PDO Configuration",id:"34-pdo-configuration",level:3},{value:"3.5 Motion Control",id:"35-motion-control",level:3},{value:"4. PLC Programming",id:"4-plc-programming",level:2}];function h(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"You're reading the documentation for a development version."}),"\n",(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"twincat3-windows",children:"TwinCAT3 (Windows)"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,i.jsxs)(n.p,{children:["TwinCAT 3 (The Windows Control and Automation Technology) is a development platform from Beckhoff that transforms any compatible PC into a real-time control system for managing various types of industrial automation systems, such as ",(0,i.jsx)(n.strong,{children:"PLC"})," (Programmable Logic Controller), motion control, robotics, and more."]}),"\n",(0,i.jsx)(n.h2,{id:"install-twincat3",children:"Install TwinCAT3"}),"\n",(0,i.jsxs)(n.p,{children:["This installation process can refer to the installation guide provideed on ",(0,i.jsx)(n.a,{href:"https://infosys.beckhoff.com/english.php?content=../content/1033/tc3_installation/179473291.html&id=",children:"Beckhoff official website."})]}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsxs)(n.p,{children:["If you need to develop ",(0,i.jsx)(n.strong,{children:"using C++, please note the following"}),":"]}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"The installation order should be: first install Visual Studio 20xx; and then install TwinCAT3."}),"\n",(0,i.jsx)(n.li,{children:"During the installation and usage, make sure to disable all antivirus software and system firewall."}),"\n"]})]}),"\n",(0,i.jsx)(n.h2,{id:"2-connecting-computer-to-erob",children:"2. Connecting Computer to eRob"}),"\n",(0,i.jsxs)("div",{class:"TwinCAT",children:[(0,i.jsx)("p",{children:"eRob Connection:"}),(0,i.jsx)("a",{href:"https://en.zeroerr.cn/products/accessories/developmentkit",target:"_blank",children:(0,i.jsx)("img",{src:"/img/TWINCAT1.png",alt:"TwinCAT1",style:{width:"500px",height:"auto"}})})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["The connection method can refer to the ",(0,i.jsx)(n.a,{href:"https://www.youtube.com/watch?v=ZL6MhPKJY4M",children:"video"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"3-create-twincat-project",children:"3. Create TwinCAT Project"}),"\n",(0,i.jsx)(n.h3,{id:"31-esi-file-placement",children:"3.1 ESI File Placement"}),"\n",(0,i.jsx)(n.p,{children:"The name of the XML (ESI) configuration file for eRob is:"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"ZeroErr Driver3.2.0.xml"})," \u2014\u2014>>>",(0,i.jsx)(n.a,{href:"https://www.zeroerr.cn/d/file/download/EtherCAT%E8%AE%BE%E5%A4%87%E6%8F%8F%E8%BF%B0%E6%96%87%E4%BB%B6.zip",children:"Download link"})]}),"\n",(0,i.jsxs)(n.p,{children:["The XML (ESI) file path for ",(0,i.jsx)(n.strong,{children:"Beckhoff TwinCAT3"})," is as follows:\n",(0,i.jsx)(n.code,{children:"C:\\TwinCAT\\3.1\\Config\\Io\\EtherCAT"})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"32-creating-a-new-project-in-twincat",children:"3.2 Creating a New Project in TwinCAT"}),"\n",(0,i.jsxs)(n.p,{children:["After creating a new TwinCAT project, the first step is to ensure that the IP address connection is correct. The second step is to right-click on ",(0,i.jsx)(n.strong,{children:'"Devices"'}),", select the ",(0,i.jsx)(n.strong,{children:'"Scan"'})," option, and automatically scan for devices."]}),"\n",(0,i.jsxs)(n.p,{children:["If the system cannot recognize the ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"Driver1(ZeroErr Driver)"})}),", you need to install and select a compatible device using the following method:"]}),"\n",(0,i.jsxs)("div",{class:"TwinCAT",children:[(0,i.jsx)("p",{children:(0,i.jsx)(n.strong,{children:"Check equipments compatible:"})}),(0,i.jsx)("a",{href:"https://en.zeroerr.cn/products/accessories/developmentkit",target:"_blank",children:(0,i.jsx)("img",{src:"/img/TWINCAT2.png",alt:"TwinCAT2",style:{width:"500px",height:"auto"}})})]}),"\n",(0,i.jsx)("div",{class:"TwinCAT",children:(0,i.jsx)("a",{href:"https://en.zeroerr.cn/products/accessories/developmentkit",target:"_blank",children:(0,i.jsx)("img",{src:"/img/TWINCAT3.png",alt:"TwinCAT3",style:{width:"900px",height:"400px"}})})}),"\n",(0,i.jsx)("div",{class:"TwinCAT",children:(0,i.jsx)("a",{href:"https://en.zeroerr.cn/products/accessories/developmentkit",target:"_blank",children:(0,i.jsx)("img",{src:"/img/TWINCAT4.png",alt:"TwinCAT4",style:{width:"300px",height:"auto"}})})}),"\n",(0,i.jsxs)(n.p,{children:["After automatically scanning for devices, to ensure that the axis can move properly, you need to configure the axis parameters. The configuration process can be referenced in ",(0,i.jsx)(n.code,{children:"Chapter 6"})," of  ",(0,i.jsx)(n.code,{children:"eRob CANopen and EtherCAT User Manual v1.9"}),".\n",(0,i.jsx)(n.a,{href:"https://www.zeroerr.cn/d/file/download/eRob%20CANopen%20and%20EtherCAT%E7%94%A8%E6%88%B7%E6%89%8B%E5%86%8Cv1.9.pdf",children:"Download link for the manual"})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"33-parameter-configuration",children:"3.3 Parameter Configuration"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:"It is necessary to configure the parameters of each axis to ensure the correct movement."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Unit configuration: In the navigation directory on the left go to the TwinCAT project > NC-Task 1-SAF > Axes > Axis 1 .",(0,i.jsx)(n.br,{}),"\n","a. Click the settings tab on the right.",(0,i.jsx)(n.br,{}),"\n","b. the desired unit of the axis."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)("div",{class:"TwinCAT",children:(0,i.jsx)("a",{href:"https://en.zeroerr.cn/products/accessories/developmentkit",target:"_blank",children:(0,i.jsx)("img",{src:"/img/TWINCAT5.png",alt:"TwinCAT5",style:{width:"500px",height:"auto"}})})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["Enc Parameter configuration\nIn the navigation directory on the left go to the TwinCAT project > NC-Task 1-SAF>Axes > Axis 1 > Enc.",(0,i.jsx)(n.br,{}),"\n","a. Click the Parameter tab on the right.",(0,i.jsx)(n.br,{}),"\n","b. Click the \u201cEncoder Evaluation\u201d arrow to view the options. The Scale Factor Numerator and Denominator values can be changed under the Offline Value.Set both Scaling Factor Numerator and Scaling Factor Denominator to 1, that is, when the master is under NCaxis control, it sends 1 unit, and the slave servo moves 1 encoder pulse position (plus)."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)("div",{class:"TwinCAT",children:(0,i.jsx)("a",{href:"https://en.zeroerr.cn/products/accessories/developmentkit",target:"_blank",children:(0,i.jsx)("img",{src:"/img/TWINCAT6.png",alt:"TwinCAT6",style:{width:"500px",height:"auto"}})})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"The parameters are activated\nClick on the menu bar TwinCAT->Activate Configuration, and a prompt box will pop up, click \u201cOK\u201d. Online Value displays the modified value."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)("div",{class:"TwinCAT",children:(0,i.jsx)("a",{href:"https://en.zeroerr.cn/products/accessories/developmentkit",target:"_blank",children:(0,i.jsx)("img",{src:"/img/TWINCAT7.png",alt:"TwinCAT7",style:{width:"700px",height:"auto"}})})}),"\n",(0,i.jsx)("div",{class:"TwinCAT",children:(0,i.jsx)("a",{href:"https://en.zeroerr.cn/products/accessories/developmentkit",target:"_blank",children:(0,i.jsx)("img",{src:"/img/TWINCAT8.png",alt:"TwinCAT8",style:{width:"700px",height:"auto"}})})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsx)(n.li,{children:"Motion parameter configuration"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["In the navigation directory on the left go to the TwinCAT project > NC-Task 1-SAF>Axes > Axis 1.",(0,i.jsx)(n.br,{}),"\n","a. Click the \u201cParameter\u201d tab on the right.",(0,i.jsx)(n.br,{}),"\n","b. Click the,\u201cMaximum Dynamics\u201d,\u201cDefault Dynamics\u201d and \u201cManual Motion andHoming\u201d arrow to view the options.",(0,i.jsx)(n.br,{}),"\n","c. Modify value in the \u201cOffline value\u201d."]}),"\n",(0,i.jsx)("div",{class:"TwinCAT",children:(0,i.jsx)("a",{href:"https://en.zeroerr.cn/products/accessories/developmentkit",target:"_blank",children:(0,i.jsx)("img",{src:"/img/TWINCAT9.png",alt:"TwinCAT9",style:{width:"700px",height:"auto"}})})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.ol,{start:"5",children:["\n",(0,i.jsxs)(n.li,{children:["Monitoring Parameter configuration\nIn the navigation directory on the left go to the TwinCAT project > NC-Task 1-SAF >Axes > Axis 1.",(0,i.jsx)(n.br,{}),"\n","1\uff09Click the Parameter tab on the right.",(0,i.jsx)(n.br,{}),"\n","2\uff09Click the Monitoring arrow to view the options.",(0,i.jsx)(n.br,{}),"\n","3\uff09In Offline value, modify the Monitoring."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)("div",{class:"TwinCAT",children:(0,i.jsx)("a",{href:"https://en.zeroerr.cn/products/accessories/developmentkit",target:"_blank",children:(0,i.jsx)("img",{src:"/img/TWINCAT10.png",alt:"TwinCAT10",style:{width:"700px",height:"auto"}})})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.ol,{start:"6",children:["\n",(0,i.jsx)(n.li,{children:"The parameters are activated\nClick on the menu bar TwinCAT->Activate Configuration, and a prompt box will pop up, click OK. Online Value displays the modified value."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)("div",{class:"TwinCAT",children:(0,i.jsx)("a",{href:"https://en.zeroerr.cn/products/accessories/developmentkit",target:"_blank",children:(0,i.jsx)("img",{src:"/img/TWINCAT11.png",alt:"TwinCAT11",style:{width:"700px",height:"auto"}})})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"34-pdo-configuration",children:"3.4 PDO Configuration"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:"The specific operation steps of dynamic configuration of PDOby TwinCAT3master based on Beckhoff in this section are as follows."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"The cyclic data is visible in the PDO-assignment window for the Inputs and Outputs of the Sync Managers. The default PDO settings use the dynamic PDOs:\u201c0x1600- RxPDOmapping parameter, 0x1A00-TxPDO mapping parameter.\u201d"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)("div",{class:"TwinCAT",children:(0,i.jsx)("a",{href:"https://en.zeroerr.cn/products/accessories/developmentkit",target:"_blank",children:(0,i.jsx)("img",{src:"/img/TWINCAT12.png",alt:"TwinCAT12",style:{width:"700px",height:"auto"}})})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"TxPDO configuration: The TxPDO maps can be changed by selecting the desired TxPDO(0x1A00) and right\nclicking in the PDO content window. Existing entries can be changed or deleted, and\nnew entries can be inserted between existing or appended to the end."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)("div",{class:"TwinCAT",children:(0,i.jsx)("a",{href:"https://en.zeroerr.cn/products/accessories/developmentkit",target:"_blank",children:(0,i.jsx)("img",{src:"/img/TWINCAT13.png",alt:"TwinCAT13",style:{width:"700px",height:"auto"}})})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"3.A list of mappable objects is shown. The list only shows objects that can be mapped in the direction of\nthe map being changed. For example, attempting to insert an object on the input PDO 0x1A00 only\nshows objects that can be mapped in the direction from the slave drive to the master controller."}),"\n"]}),"\n",(0,i.jsx)("div",{class:"TwinCAT",children:(0,i.jsx)("a",{href:"https://en.zeroerr.cn/products/accessories/developmentkit",target:"_blank",children:(0,i.jsx)("img",{src:"/img/TWINCAT14.png",alt:"TwinCAT14",style:{width:"350px",height:"auto"}})})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsx)(n.li,{children:"The inserted object appears in the PDO Content (0x1A00)."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)("div",{class:"TwinCAT",children:(0,i.jsx)("a",{href:"https://en.zeroerr.cn/products/accessories/developmentkit",target:"_blank",children:(0,i.jsx)("img",{src:"/img/TWINCAT15.png",alt:"TwinCAT15",style:{width:"600px",height:"auto"}})})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.ol,{start:"5",children:["\n",(0,i.jsx)(n.li,{children:"The RxPDO maps can be changed by selecting the desired RxPDO(0x1600) and right clicking in the PDO content window. Existing entries can be changed or deleted, and new entries can be inserted between existing or appended to the end."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)("div",{class:"TwinCAT",children:(0,i.jsx)("a",{href:"https://en.zeroerr.cn/products/accessories/developmentkit",target:"_blank",children:(0,i.jsx)("img",{src:"/img/TWINCAT16.png",alt:"TwinCAT16",style:{width:"600px",height:"auto"}})})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.ol,{start:"6",children:["\n",(0,i.jsx)(n.li,{children:"A list of mappable objects is shown. The list only shows objects that can be mapped in the direction of the map being changed. For example, attempting to insert an object on the output PDO 0x1600 only shows objects that can be mapped in the direction from the controller to the drive."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)("div",{class:"TwinCAT",children:(0,i.jsx)("a",{href:"https://en.zeroerr.cn/products/accessories/developmentkit",target:"_blank",children:(0,i.jsx)("img",{src:"/img/TWINCAT17.png",alt:"TwinCAT17",style:{width:"350px",height:"auto"}})})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.ol,{start:"7",children:["\n",(0,i.jsx)(n.li,{children:"The inserted object appears in the RxPDO Content (0x1600)."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"As the PDO map is changed, the startup script is automatically updated by TwinCATtosend to the slave drive during the PREOP to OP transition.The automatic link of the\nDSP402 standard entries is only executed for axes which use standard object. With other modes of operation it is necessary to link the PDO\u2019s manually."}),"\n",(0,i.jsx)("div",{class:"TwinCAT",children:(0,i.jsx)("a",{href:"https://en.zeroerr.cn/products/accessories/developmentkit",target:"_blank",children:(0,i.jsx)("img",{src:"/img/TWINCAT18.png",alt:"TwinCAT18",style:{width:"700px",height:"auto"}})})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"35-motion-control",children:"3.5 Motion Control"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"The operation mode of EtherCAT interface has to be selected between \u201cSM-synchron\u201d or \u201cDC-synchron\u201d. In this example \u201cDC-synchron\u201d is selected."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)("div",{class:"TwinCAT",children:(0,i.jsx)("a",{href:"https://en.zeroerr.cn/products/accessories/developmentkit",target:"_blank",children:(0,i.jsx)("img",{src:"/img/TWINCAT19.png",alt:"TwinCAT19",style:{width:"700px",height:"auto"}})})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["Activate the configuration by clicking ",(0,i.jsx)(n.code,{children:"Activate configuration"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.code,{children:"YES"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsxs)(n.li,{children:["Double click on the ",(0,i.jsx)(n.code,{children:"Driver1(ZeroErr Driver)"})," . Navigate to \u201cNC-Online\u201d and click on \u201cSet\u201d in the Enabling menu. -> Click on ",(0,i.jsx)(n.code,{children:"All"})," to set the enables"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)("div",{class:"TwinCAT",children:(0,i.jsx)("a",{href:"https://en.zeroerr.cn/products/accessories/developmentkit",target:"_blank",children:(0,i.jsx)("img",{src:"/img/TWINCAT20.png",alt:"TwinCAT20",style:{width:"700px",height:"auto"}})})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.ol,{start:"5",children:["\n",(0,i.jsx)(n.li,{children:"Now input a target position and a target velocity and move the axis with the \u201cF5\u201dbutton tothe target position.click \u201cF1, F2, F3, F4\u201d to manually control the motor to run forward or\nreverse at a fast or slow velocity. Click \u201cF8\u201d"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)("div",{class:"TwinCAT",children:(0,i.jsx)("a",{href:"https://en.zeroerr.cn/products/accessories/developmentkit",target:"_blank",children:(0,i.jsx)("img",{src:"/img/TWINCAT21.png",alt:"TwinCAT21",style:{width:"700px",height:"auto"}})})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"4-plc-programming",children:"4. PLC Programming"}),"\n",(0,i.jsxs)(n.p,{children:["To control eRob using PLC programming, it is necessary to understand the relationship between the NC axis, PLC axis, and physical axis in TwinCAT. Additionally, the mapping relationship between the object dictionary and the NC axis can be configured according to the documentation provided on the ",(0,i.jsx)(n.a,{href:"https://infosys.beckhoff.com/english.php?content=../content/1033/tf50x0_tc3_nc_ptp/10650582539.html&id=9197998846476281621",children:"Beckhoff official website"}),".\nHere, a deep understanding of TwinCAT usage is required. If needed, additional configuration instructions will be provided later to ensure that eRob can be driven by connecting the NC axis via the PLC axis using the built-in functions in TwinCAT. A pre-configured program is provided ",(0,i.jsx)(n.a,{href:"https://git.zeroerr.cn/Don/TC3_demo",children:"here"})," as a reference."]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(6540);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{256:function(e,t,r){"use strict";r.r(t);var a=r(1),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"installation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),r("p",[e._v("This is for setting up a "),r("strong",[e._v("full node")]),e._v(", a resource-intensive process that requires a persistent server. If you're just trying to "),r("em",[e._v("use")]),e._v(" Terra blockchain without downloading the entire blockchain, you're probably looking for "),r("a",{attrs:{href:"../station"}},[e._v("Terra Station")]),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"hardware-requirements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hardware-requirements"}},[e._v("#")]),e._v(" Hardware Requirements")]),e._v(" "),r("p",[e._v("We recommend the following for running Terra Core:")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("2 or more")]),e._v(" CPU cores")]),e._v(" "),r("li",[e._v("At least "),r("strong",[e._v("300GB")]),e._v(" of disk storage")]),e._v(" "),r("li",[e._v("At least "),r("strong",[e._v("2.5 - 5mbps")]),e._v(" network bandwidth")])]),e._v(" "),r("h2",{attrs:{id:"building-terra-core"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#building-terra-core"}},[e._v("#")]),e._v(" Building Terra Core")]),e._v(" "),r("h3",{attrs:{id:"step-1-install-golang"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#step-1-install-golang"}},[e._v("#")]),e._v(" Step 1. Install Golang")]),e._v(" "),r("p",[r("strong",[e._v("Go v1.13.1 or higher is required for Terra Core.")])]),e._v(" "),r("p",[e._v("If you haven't already, install Golang by following the "),r("a",{attrs:{href:"https://golang.org/doc/install",target:"_blank",rel:"noopener noreferrer"}},[e._v("official docs"),r("OutboundLink")],1),e._v(". Make sure that your "),r("code",[e._v("GOPATH")]),e._v(" and "),r("code",[e._v("GOBIN")]),e._v(" environment variables are properly set up.")]),e._v(" "),r("h3",{attrs:{id:"step-2-get-terra-core-source-code"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#step-2-get-terra-core-source-code"}},[e._v("#")]),e._v(" Step 2: Get Terra Core source code")]),e._v(" "),r("p",[e._v("Use "),r("code",[e._v("git")]),e._v(" to retrieve Terra Core from the "),r("a",{attrs:{href:"https://github.com/terra-project/core/",target:"_blank",rel:"noopener noreferrer"}},[e._v("official repo"),r("OutboundLink")],1),e._v(", and checkout the "),r("code",[e._v("master")]),e._v(" branch, which contains the latest stable release. That should install the "),r("code",[e._v("terrad")]),e._v(" and "),r("code",[e._v("terracli")]),e._v(" binaries.")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("$ "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/terra-project/core/\n$ "),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" core\n$ "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout master\n")])])]),r("h3",{attrs:{id:"step-3-build-from-source"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#step-3-build-from-source"}},[e._v("#")]),e._v(" Step 3: Build from source")]),e._v(" "),r("p",[e._v("You can now build Terra Core. Running the following command will install executables "),r("code",[e._v("terrad")]),e._v(" (Terra node daemon) and "),r("code",[e._v("terracli")]),e._v(" (CLI for interacting with the node) to your "),r("code",[e._v("GOPATH")]),e._v(".")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("$ "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\n")])])]),r("h3",{attrs:{id:"step-4-verify-your-installation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#step-4-verify-your-installation"}},[e._v("#")]),e._v(" Step 4: Verify your installation")]),e._v(" "),r("p",[e._v("Verify that everything is OK. If you get something like the following, you've successfully installed Terra Core on your system.")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("$ terrad version --long\n$ terracli version --long\nname: terra\nserver_name: terrad\nclient_name: terracli\nversion: "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.3")]),e._v(".0-24-g3684f77\ncommit: 3684f77faadf6cf200d18e15763316d5d9c5a496\nbuild_tags: netgo,ledger\ngo: go version go1.13.4 darwin/amd64\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);
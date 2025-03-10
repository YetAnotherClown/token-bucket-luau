"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[395],{9466:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"type":"mdx","permalink":"/token-bucket-luau/","source":"@site/pages/index.md","title":"Token Bucket","description":"A TokenBucket implementation for Luau.","frontMatter":{},"unlisted":false}');var l=t(4848),r=t(8453);const c={},a="Token Bucket",s={},d=[{value:"Use",id:"use",level:2},{value:"Installation",id:"installation",level:2},{value:"Pesde",id:"pesde",level:3},{value:"Wally",id:"wally",level:3}];function i(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"token-bucket",children:"Token Bucket"})}),"\n",(0,l.jsx)(n.p,{children:"A TokenBucket implementation for Luau."}),"\n",(0,l.jsx)(n.h2,{id:"use",children:"Use"}),"\n",(0,l.jsxs)(n.p,{children:["TokenBucket is very simple to use, either see the ",(0,l.jsx)(n.a,{href:"https://yetanotherclown.github.io/token-bucket-luau/api",children:"API"})," or follow this example below."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:'local TokenBucket = require("@packages/TokenBucket")\r\n\r\nlocal bucket = TokenBucket.new(10, 1)\r\n\r\n-- `TokenBucket:add()` should be called on a fixed interval\r\nlocal update = coroutine.create(function()\r\n    while wait(1) do\r\n        bucket:add()\r\n    end\r\nend)\r\n\r\ncoroutine.resume(update)\r\n\r\n-- `TokenBucket:remove()` is called to remove a token from the bucket\r\nlocal tokenWasRemoved = bucket:remove()\r\n\r\nif tokenWasRemoved == true then\r\n    -- This is when you drop the packet\r\nelseif tokenWasRemoved == false then\r\n    -- This is when you can forward the packet\r\nend\n'})}),"\n",(0,l.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,l.jsx)(n.p,{children:"TokenBucket can be installed using Pesde and Wally, or you can simply copy and paste the source directly."}),"\n",(0,l.jsx)(n.h3,{id:"pesde",children:"Pesde"}),"\n",(0,l.jsx)(n.p,{children:"Install from the command line with,"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"> pesde add yetanotherclown/token_bucket --target luau --alias TokenBucket\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Or from your ",(0,l.jsx)(n.code,{children:"pesde.toml"}),","]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-toml",children:'[dependencies]\r\nTokenBucket = { name = "yetanotherclown/token_bucket", version = "^0.1.0", target = "luau" }\n'})}),"\n",(0,l.jsx)(n.h3,{id:"wally",children:"Wally"}),"\n",(0,l.jsxs)(n.p,{children:["Install from your ",(0,l.jsx)(n.code,{children:"wally.toml"}),","]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-toml",children:'[dependencies]\r\nTokenBucket = "yetanotherclown/token-bucket@0.1.0"\n'})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(i,{...e})}):i(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>a});var o=t(6540);const l={},r=o.createContext(l);function c(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);
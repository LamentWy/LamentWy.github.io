import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as c,o,c as d,a as e,b as t,d as a,e as s}from"./app-BwsoMA_K.js";const n="/whale2.png",p={},r=s(`<h1 id="本站调试记录" tabindex="-1"><a class="header-anchor" href="#本站调试记录"><span>本站调试记录</span></a></h1><p>包括 vuepress 以及主题 vuepress-theme-hope 学习和调试的记录。</p><p>内容是倒序的，建议使用方式：<code>ctrl+f</code>找关键字，或者右上角搜索本站。</p><h2 id="todo-list" tabindex="-1"><a class="header-anchor" href="#todo-list"><span>TODO List</span></a></h2><ul class="task-list-container"><li class="task-list-item"><p><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> logo &amp; favicon：一个 svg，一个 ico。</label></p><p>等小马哥有空的。</p></li><li class="task-list-item"><p><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> svg 格式背景图，一张图需要两种风格对应白/黑模式，a1-light/a1-dark，*10。</label></p><p>等小马哥有空的。</p></li><li class="task-list-item"><p><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> 首页设计</label></p><p>这个就任重道远了。</p></li><li class="task-list-item"><p><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-3"> 添加 analytics</label></p><p>谷歌顺利添加了，但是百度检测不到，我自己打开开发者工具也没找到 <code>hm.js</code>，不过就先这样吧， 反正浏览量最高的两篇分别是<code>雷蛇键盘无响应</code>和<code>lastPass密码错误</code>，目前还被我下了。</p><p>话说我真的觉得雷蛇那个看起来吊炸天的内置在设备里主动帮你安装驱动功能最大的作用是检测你这把键盘用多久了， 到期就给你自动失灵。 lastPass 早几年前就修正了我说的问题，下了就下了吧。</p></li><li class="task-list-item"><p><input type="checkbox" class="task-list-item-checkbox" id="task-item-4" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-4"> 启用 <code>tasklist</code> 来记录调试工作</label></p></li><li class="task-list-item"><p><input type="checkbox" class="task-list-item-checkbox" id="task-item-5" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-5"> 调整首页按钮跳转和文档结构</label></p></li><li class="task-list-item"><p><input type="checkbox" class="task-list-item-checkbox" id="task-item-6" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-6"> 关闭右侧目录的打印按钮</label></p></li><li class="task-list-item"><p><input type="checkbox" class="task-list-item-checkbox" id="task-item-7" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-7"> 研究路径导航 (breadcrumb)，看能不能去掉无用的目录路径，只显示文档关系路径</label></p><p>合理利用 <code>README.md</code> 即可达成目标，breadcrumb 反而不用去管他，反正默认启用。</p></li><li class="task-list-item"><p><input type="checkbox" class="task-list-item-checkbox" id="task-item-8" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-8"> 目录自动生成，没有<code>README.md</code>时自动目录可用，但是 <code>&lt;AutoCatalog/&gt;</code> 似乎不好使。</label></p><p>插件更新了，标签改为: <code>&lt;Catalog&gt;</code>，用法跟之前一样，直接在目录页面的 <code>md</code> 文件正文写 <code>&lt;Catalog/&gt;</code>即可。</p></li><li class="task-list-item"><p><input type="checkbox" class="task-list-item-checkbox" id="task-item-9" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-9"> 插件使用错误</label></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>You are not allowed to use plugin &quot;vuepress-plugin-search-pro&quot; yourself in vuepress config file. Set &quot;plugin.searchPro&quot; in theme options to customize it.  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>不要在 <code>config.ts</code> 中引入,把 <code>import { searchProPlugin } from &quot;vuepress-plugin-search-pro&quot;;</code> 移动到 <code>theme.ts</code> 中。</p><p>找到 <code>plugins:</code>，然后添加<code>searchPro: true,</code> 即可启用。</p></li><li class="task-list-item"><p><input type="checkbox" class="task-list-item-checkbox" id="task-item-10" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-10"> 自动侧边栏显示文件路径而非 title</label></p><p><code>README.md</code> 文件名必须大写，不然 hope 主题提供的一些插件功能不太正常。</p></li><li class="task-list-item"><p><input type="checkbox" class="task-list-item-checkbox" id="task-item-11" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-11"> 部署中的警告</label></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Node.js 16 actions are deprecated. Please update the following actions to use Node.js 20: pnpm/action-setup@v2, actions/setup-node@v3. For more information see: https://github.blog/changelog/2023-09-22-github-actions-transitioning-from-node-16-to-node-20/.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>看见这个就去升级一下对应 action 的版本，不知道具体版本可以直接 github 搜索。</p><p>比如 <code>pnpm/action-setup@v2</code> 就直接搜 <code>pnpm/action-setup</code>，其他细节参考警告中给的链接。</p></li><li class="task-list-item"><p><input type="checkbox" class="task-list-item-checkbox" id="task-item-12" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-12"> build 失败</label></p><p><code>pnpm docs:dev</code> 没有问题，执行 build 就报 <code>SyntaxError: The requested module &#39;vue-router&#39; does not provide an export named &#39;createMemoryHistory&#39;</code>的错误。</p><p>错误的表面意思倒是挺明确的，<code>vue-router</code> 没有提供 <code>createMemoryHistory</code> 参数，然而 由于完全不懂 node 跟没看懂没差别，一堆折腾之后，最后通过手动添加依赖解决了。</p><p><code>pnpm add -D vue-router</code>。</p><p>真的不明白 node 这依赖关系设计，前端开发是怎么忍下来的。</p></li></ul><h2 id="debug-log" tabindex="-1"><a class="header-anchor" href="#debug-log"><span>debug log</span></a></h2><ul><li><p>关缓存！！！</p><p>前后重新发布了 n 次也没找到线上显示错误的原因，就差直接页面里面手动记录版本号了，突然记起怕不是 CL 的缓存没关...</p><p>现在不用手动清缓存了，可以直接开启开发者模式禁用缓存，不用怕忘了关，这个功能是“暂时”绕过缓存，3个还是四个小时后会自动恢复到正常模式，需要的时候记得去开就好。</p></li><li><p>github action</p><p>权限错误检查两个位置，一个是仓库本身关于 action 的权限，另一个检查你生成的 PAT 权限是不是不够。</p></li></ul><h2 id="部署" tabindex="-1"><a class="header-anchor" href="#部署"><span>部署</span></a></h2>`,8),m={href:"https://vuepress.vuejs.org/zh/guide/deploy.html#github-pages",target:"_blank",rel:"noopener noreferrer"},u=s(`<p>源码库 + 部署库的方式自动部署的几个需要注意的地方。</p><p>PAT 权限要够，PAT 要添加到源码库的 Secrets 中。</p><h2 id="vuepress-简介" tabindex="-1"><a class="header-anchor" href="#vuepress-简介"><span>vuepress 简介</span></a></h2><ul><li><p>目录有约定，但并不强制</p></li><li><p>0开发经验上手略有门槛</p><p>有开发经验的体验尚可，有前端经验很好，有 nodejs/vue 经验的话你可以干很多事情。</p></li><li><p>导航的 link 与 <code>readme.md</code> 文件绑定<br><code>/readme.md</code> 等同于 <code>/</code>，导航 <code>link: &#39;/xDir/</code> 意味着 <code>/xDir/</code> 目录下必须有 <code>readme.md</code>文件，否则你点击导航会 404.</p></li><li><p>依赖问题导致无法 build | build 失败</p><p>根据我解决问题过程中搜索到的内容来看，依赖问题已经多次导致用户的 vuepress 项目无法正常 build。<br> 对于对 node 依赖管理完全不了解的用户其实这是很难自行解决。</p><p>先添加这个：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>yarn add cross-env --dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后编辑 <code>package.json</code> 中的脚本部分:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code> #package.json:
 &quot;scripts&quot;: {
 &quot;dev&quot;: &quot;cross-env NODE_OPTIONS=--openssl-legacy-provider vuepress dev src&quot;,
 &quot;build&quot;: &quot;cross-env NODE_OPTIONS=--openssl-legacy-provider vuepress build src&quot;
 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者直接换 pnpm，反正不懂 node，用 yarn 还是用 pnpm 都没啥区别，但是 VuePress 和 VuePress-theme-hope 都是用 pnpm 进行管理的。</p></li></ul><h2 id="插件" tabindex="-1"><a class="header-anchor" href="#插件"><span>插件</span></a></h2>`,5),b={href:"https://z3by.github.io/vuepress-tools/plugins/vuepress-plugin-autonav/",target:"_blank",rel:"noopener noreferrer"},k=s('<p>使用方式通用流程：1. 安装插件 2.在<code>.vuepress/config.js</code>中添加插件并配置。</p><p><code>@vuepress/</code>开头的都是官方维护的插件，同时使用前注意插件支持哪个 VuePress 的版本（0.x 1.x 2）。</p><ul><li><p><code>@vuepress/plugin-back-to-top</code>回到最上。</p><p>官方没写说明也没写配置，扫了一眼代码，似乎是300行以上触发。</p><p>拖了个以前写的 rocketMQ 分析源码的笔记测试了一下，右下角会自动出现一个向上的箭头。</p></li><li><p><code>@vuepress/plugin-medium-zoom</code>图片缩放</p><p>点点看</p><figure><img src="'+n+'" alt="whale balloon" tabindex="0" loading="lazy"><figcaption>whale balloon</figcaption></figure></li></ul><h2 id="主题" tabindex="-1"><a class="header-anchor" href="#主题"><span>主题</span></a></h2>',4),h={href:"https://theme-hope.vuejs.press/zh/get-started/",target:"_blank",rel:"noopener noreferrer"},g=s(`<h3 id="命令" tabindex="-1"><a class="header-anchor" href="#命令"><span>命令</span></a></h3><ul><li>创建</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>pnpm create vuepress-theme-hope my-docs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>使用</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>// 启动开发服务器
pnpm docs:dev
// 构建项目并输出
pnpm docs:build
// 清除缓存并启动开发服务器
pnpm docs:clean-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="样式相关" tabindex="-1"><a class="header-anchor" href="#样式相关"><span>样式相关</span></a></h3><p>基本围绕着 <code>src/.vuepress/styles</code> 目录下的三个文件进行自定义。</p>`,7),v=s(`<p>主题颜色覆盖<br><code>src/.vuepress/styles/palette.scss</code>文件中进行修改。</p><p>其中 <code>$theme-color: #82a6b1;</code> 主题颜色影响各种高亮位置。<br> 明暗切换如下:</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$bg-color</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
<span class="token property">light</span><span class="token punctuation">:</span> #ffeaec<span class="token punctuation">,</span>
<span class="token property">dark</span><span class="token punctuation">:</span> #343f3e<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),x={href:"https://theme-hope.vuejs.press/zh/config/style.html#%E9%A2%9C%E8%89%B2%E8%AE%BE%E7%BD%AE",target:"_blank",rel:"noopener noreferrer"},f=e("li",null,[e("p",null,"隐藏打印按钮"),e("p",null,[e("code",null,"src/.vuepress/theme.ts"),t("中添加 "),e("code",null,"print:false,")])],-1),y=s('<h3 id="功能" tabindex="-1"><a class="header-anchor" href="#功能"><span>功能</span></a></h3><ul><li><p>自动创建<code>readme.md</code></p><p>目录下没有<code>readme.md</code>时，会自动生成一个目录页面，该页面标题就是目录本身，外带自动驼峰。</p><p>比如 <code>mq/rocketmq/</code>下没有手动创建<code>readme.md</code>时，它自动生成一个标题为 <code>Rocketmq</code>的目录页面。 如果是 <code>rocket-mq/</code>，则生成 <code>RocketMq</code> 作为标题。</p></li></ul>',2);function _(E,P){const l=c("ExternalLinkIcon");return o(),d("div",null,[r,e("p",null,[t("官方文档里就有，还挺全的，白写了，看"),e("a",m,[t("这里"),a(l)]),t("。")]),u,e("p",null,[t("找插件/主题推荐使用"),e("a",b,[t("vuepress-tools"),a(l)]),t(";")]),k,e("p",null,[e("a",h,[t("Hope"),a(l)]),t(" 主题自带创建项目的脚手架，创建出的项目还自带文档，你可以在另外一个端口额外启动一个当说明书看。")]),g,e("ul",null,[e("li",null,[v,e("p",null,[t("其他更多可以参考该主题的说明文档-"),e("a",x,[t("样式配置"),a(l)]),t("部分，从颜色调整到布局设置啥的很全。")])]),f]),y])}const T=i(p,[["render",_],["__file","debug-log.html.vue"]]),z=JSON.parse(`{"path":"/blog/debug-log.html","title":"本站调试记录","lang":"zh-CN","frontmatter":{"description":"本站调试记录 包括 vuepress 以及主题 vuepress-theme-hope 学习和调试的记录。 内容是倒序的，建议使用方式：ctrl+f找关键字，或者右上角搜索本站。 TODO List logo & favicon：一个 svg，一个 ico。 等小马哥有空的。 svg 格式背景图，一张图需要两种风格对应白/黑模式，a1-light/a1...","head":[["meta",{"property":"og:url","content":"https://lament-z.com/blog/debug-log.html"}],["meta",{"property":"og:site_name","content":"鲸鱼气球"}],["meta",{"property":"og:title","content":"本站调试记录"}],["meta",{"property":"og:description","content":"本站调试记录 包括 vuepress 以及主题 vuepress-theme-hope 学习和调试的记录。 内容是倒序的，建议使用方式：ctrl+f找关键字，或者右上角搜索本站。 TODO List logo & favicon：一个 svg，一个 ico。 等小马哥有空的。 svg 格式背景图，一张图需要两种风格对应白/黑模式，a1-light/a1..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://lament-z.com/whale2.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-14T09:45:06.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"本站调试记录"}],["meta",{"property":"article:author","content":"lament-z"}],["meta",{"property":"article:modified_time","content":"2024-02-14T09:45:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"本站调试记录\\",\\"image\\":[\\"https://lament-z.com/whale2.png\\"],\\"dateModified\\":\\"2024-02-14T09:45:06.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"lament-z\\",\\"url\\":\\"https://lament-z.com\\"}]}"]]},"headers":[{"level":2,"title":"TODO List","slug":"todo-list","link":"#todo-list","children":[]},{"level":2,"title":"debug log","slug":"debug-log","link":"#debug-log","children":[]},{"level":2,"title":"部署","slug":"部署","link":"#部署","children":[]},{"level":2,"title":"vuepress 简介","slug":"vuepress-简介","link":"#vuepress-简介","children":[]},{"level":2,"title":"插件","slug":"插件","link":"#插件","children":[]},{"level":2,"title":"主题","slug":"主题","link":"#主题","children":[{"level":3,"title":"命令","slug":"命令","link":"#命令","children":[]},{"level":3,"title":"样式相关","slug":"样式相关","link":"#样式相关","children":[]},{"level":3,"title":"功能","slug":"功能","link":"#功能","children":[]}]}],"git":{"createdTime":1707897724000,"updatedTime":1707903906000,"contributors":[{"name":"Lament","email":"lament.wy@gmail.com","commits":2}]},"readingTime":{"minutes":5.66,"words":1697},"filePathRelative":"blog/debug-log.md","localizedDate":"2024年2月14日","autoDesc":true,"excerpt":"\\n<p>包括 vuepress 以及主题 vuepress-theme-hope 学习和调试的记录。</p>\\n<p>内容是倒序的，建议使用方式：<code>ctrl+f</code>找关键字，或者右上角搜索本站。</p>\\n<h2>TODO List</h2>\\n<ul class=\\"task-list-container\\">\\n<li class=\\"task-list-item\\">\\n<p><input type=\\"checkbox\\" class=\\"task-list-item-checkbox\\" id=\\"task-item-0\\" disabled=\\"disabled\\"><label class=\\"task-list-item-label\\" for=\\"task-item-0\\"> logo &amp; favicon：一个 svg，一个 ico。</label></p>\\n<p>等小马哥有空的。</p>\\n</li>\\n<li class=\\"task-list-item\\">\\n<p><input type=\\"checkbox\\" class=\\"task-list-item-checkbox\\" id=\\"task-item-1\\" disabled=\\"disabled\\"><label class=\\"task-list-item-label\\" for=\\"task-item-1\\"> svg 格式背景图，一张图需要两种风格对应白/黑模式，a1-light/a1-dark，*10。</label></p>\\n<p>等小马哥有空的。</p>\\n</li>\\n<li class=\\"task-list-item\\">\\n<p><input type=\\"checkbox\\" class=\\"task-list-item-checkbox\\" id=\\"task-item-2\\" disabled=\\"disabled\\"><label class=\\"task-list-item-label\\" for=\\"task-item-2\\"> 首页设计</label></p>\\n<p>这个就任重道远了。</p>\\n</li>\\n<li class=\\"task-list-item\\">\\n<p><input type=\\"checkbox\\" class=\\"task-list-item-checkbox\\" id=\\"task-item-3\\" checked=\\"checked\\" disabled=\\"disabled\\"><label class=\\"task-list-item-label\\" for=\\"task-item-3\\"> 添加 analytics</label></p>\\n<p>谷歌顺利添加了，但是百度检测不到，我自己打开开发者工具也没找到 <code>hm.js</code>，不过就先这样吧，\\n反正浏览量最高的两篇分别是<code>雷蛇键盘无响应</code>和<code>lastPass密码错误</code>，目前还被我下了。</p>\\n<p>话说我真的觉得雷蛇那个看起来吊炸天的内置在设备里主动帮你安装驱动功能最大的作用是检测你这把键盘用多久了，\\n到期就给你自动失灵。 lastPass 早几年前就修正了我说的问题，下了就下了吧。</p>\\n</li>\\n<li class=\\"task-list-item\\">\\n<p><input type=\\"checkbox\\" class=\\"task-list-item-checkbox\\" id=\\"task-item-4\\" checked=\\"checked\\" disabled=\\"disabled\\"><label class=\\"task-list-item-label\\" for=\\"task-item-4\\"> 启用 <code>tasklist</code> 来记录调试工作</label></p>\\n</li>\\n<li class=\\"task-list-item\\">\\n<p><input type=\\"checkbox\\" class=\\"task-list-item-checkbox\\" id=\\"task-item-5\\" checked=\\"checked\\" disabled=\\"disabled\\"><label class=\\"task-list-item-label\\" for=\\"task-item-5\\"> 调整首页按钮跳转和文档结构</label></p>\\n</li>\\n<li class=\\"task-list-item\\">\\n<p><input type=\\"checkbox\\" class=\\"task-list-item-checkbox\\" id=\\"task-item-6\\" checked=\\"checked\\" disabled=\\"disabled\\"><label class=\\"task-list-item-label\\" for=\\"task-item-6\\"> 关闭右侧目录的打印按钮</label></p>\\n</li>\\n<li class=\\"task-list-item\\">\\n<p><input type=\\"checkbox\\" class=\\"task-list-item-checkbox\\" id=\\"task-item-7\\" checked=\\"checked\\" disabled=\\"disabled\\"><label class=\\"task-list-item-label\\" for=\\"task-item-7\\"> 研究路径导航 (breadcrumb)，看能不能去掉无用的目录路径，只显示文档关系路径</label></p>\\n<p>合理利用 <code>README.md</code> 即可达成目标，breadcrumb 反而不用去管他，反正默认启用。</p>\\n</li>\\n<li class=\\"task-list-item\\">\\n<p><input type=\\"checkbox\\" class=\\"task-list-item-checkbox\\" id=\\"task-item-8\\" checked=\\"checked\\" disabled=\\"disabled\\"><label class=\\"task-list-item-label\\" for=\\"task-item-8\\"> 目录自动生成，没有<code>README.md</code>时自动目录可用，但是 <code>&lt;AutoCatalog/&gt;</code> 似乎不好使。</label></p>\\n<p>插件更新了，标签改为: <code>&lt;Catalog&gt;</code>，用法跟之前一样，直接在目录页面的 <code>md</code> 文件正文写 <code>&lt;Catalog/&gt;</code>即可。</p>\\n</li>\\n<li class=\\"task-list-item\\">\\n<p><input type=\\"checkbox\\" class=\\"task-list-item-checkbox\\" id=\\"task-item-9\\" checked=\\"checked\\" disabled=\\"disabled\\"><label class=\\"task-list-item-label\\" for=\\"task-item-9\\"> 插件使用错误</label></p>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>You are not allowed to use plugin \\"vuepress-plugin-search-pro\\" yourself in vuepress config file. Set \\"plugin.searchPro\\" in theme options to customize it.  \\n</code></pre></div><p>不要在 <code>config.ts</code> 中引入,把 <code>import { searchProPlugin } from \\"vuepress-plugin-search-pro\\";</code> 移动到 <code>theme.ts</code> 中。</p>\\n<p>找到 <code>plugins:</code>，然后添加<code>searchPro: true,</code> 即可启用。</p>\\n</li>\\n<li class=\\"task-list-item\\">\\n<p><input type=\\"checkbox\\" class=\\"task-list-item-checkbox\\" id=\\"task-item-10\\" checked=\\"checked\\" disabled=\\"disabled\\"><label class=\\"task-list-item-label\\" for=\\"task-item-10\\"> 自动侧边栏显示文件路径而非 title</label></p>\\n<p><code>README.md</code> 文件名必须大写，不然 hope 主题提供的一些插件功能不太正常。</p>\\n</li>\\n<li class=\\"task-list-item\\">\\n<p><input type=\\"checkbox\\" class=\\"task-list-item-checkbox\\" id=\\"task-item-11\\" checked=\\"checked\\" disabled=\\"disabled\\"><label class=\\"task-list-item-label\\" for=\\"task-item-11\\"> 部署中的警告</label></p>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>Node.js 16 actions are deprecated. Please update the following actions to use Node.js 20: pnpm/action-setup@v2, actions/setup-node@v3. For more information see: https://github.blog/changelog/2023-09-22-github-actions-transitioning-from-node-16-to-node-20/.\\n</code></pre></div><p>看见这个就去升级一下对应 action 的版本，不知道具体版本可以直接 github 搜索。</p>\\n<p>比如 <code>pnpm/action-setup@v2</code> 就直接搜 <code>pnpm/action-setup</code>，其他细节参考警告中给的链接。</p>\\n</li>\\n<li class=\\"task-list-item\\">\\n<p><input type=\\"checkbox\\" class=\\"task-list-item-checkbox\\" id=\\"task-item-12\\" checked=\\"checked\\" disabled=\\"disabled\\"><label class=\\"task-list-item-label\\" for=\\"task-item-12\\"> build 失败</label></p>\\n<p><code>pnpm docs:dev</code> 没有问题，执行 build 就报 <code>SyntaxError: The requested module 'vue-router' does not provide an export named 'createMemoryHistory'</code>的错误。</p>\\n<p>错误的表面意思倒是挺明确的，<code>vue-router</code> 没有提供 <code>createMemoryHistory</code> 参数，然而\\n由于完全不懂 node 跟没看懂没差别，一堆折腾之后，最后通过手动添加依赖解决了。</p>\\n<p><code>pnpm add -D vue-router</code>。</p>\\n<p>真的不明白 node 这依赖关系设计，前端开发是怎么忍下来的。</p>\\n</li>\\n</ul>"}`);export{T as comp,z as data};

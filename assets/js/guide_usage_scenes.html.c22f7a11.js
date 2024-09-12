"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[9367],{62917:(e,s,n)=>{n.r(s),n.d(s,{comp:()=>o,data:()=>c});var a=n(3477);const t={},o=(0,n(54205).A)(t,[["render",function(e,s){return(0,a.uX)(),(0,a.CE)("div",null,s[0]||(s[0]=[(0,a.Fv)('<h1 id="scenes" tabindex="-1"><a class="header-anchor" href="#scenes"><span>Scenes</span></a></h1><p>Scenes allow to quickly set certain states for a device or group. Most of the time this is used for bulbs or a group of bulbs as it allows to set a certain color and brightness with a single command. All of the actions below can also be done via the frontend.</p><h2 id="creating-a-scene" tabindex="-1"><a class="header-anchor" href="#creating-a-scene"><span>Creating a scene</span></a></h2><p>Scenes can be created in two ways, by storing the current state (<code>scene_store</code>) or by adding a scene (<code>scene_add</code>). Note that <code>scene_store</code> and <code>scene_add</code> will override each other if the same <code>SCENE_ID</code> is used.</p><h3 id="scene-store" tabindex="-1"><a class="header-anchor" href="#scene-store"><span><code>scene_store</code></span></a></h3><p>This is the easiest way to create a scene. First set the device or group in the desired state. Next store the current state as a scene by sending a command to <code>zigbee2mqtt/[GROUP_OR_DEVICE_FRIENDLY_NAME]/set</code> with payload <code>{&quot;scene_store&quot;: SCENE_ID}</code> where <code>SCENE_ID</code> is a number (e.g. <code>1</code>). To also provide a name for the scene (shown in e.g. the frontend) send e.g. <code>{&quot;scene_store&quot;: {&quot;ID&quot;: 1, &quot;name&quot;: &quot;My scene&quot;}}</code>. To only store the state of a single light in a scene for a group send e.g. <code>{&quot;scene_store&quot;: {&quot;ID&quot;: 1, &quot;group_id&quot;: 2}}</code> to the topic of the light, <code>zigbee2mqtt/[DEVICE_FRIENDLY_NAME]/set</code>. This allows to change the state of a single light without affecting the other lights in the scene created for a group.</p><h3 id="scene-add" tabindex="-1"><a class="header-anchor" href="#scene-add"><span><code>scene_add</code></span></a></h3><p><code>scene_add</code> provides two benefits over <code>scene_store</code>: you can control which attributes will be stored in the scene (e.g. only brightness) and it&#39;s possible to set a transition time. You can execute a <code>scene_add</code> by sending to <code>zigbee2mqtt/[GROUP_OR_DEVICE_FRIENDLY_NAME]/set</code> with payload:</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">    <span class="token string-property property">&quot;scene_add&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>\n<span class="line">        <span class="token string-property property">&quot;ID&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token comment">// the SCENE_ID</span></span>\n<span class="line">        <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Chill scene&quot;</span><span class="token punctuation">,</span> <span class="token comment">// optional: scene name, shown in e.g. the frontend</span></span>\n<span class="line">        <span class="token string-property property">&quot;transition&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token comment">// optional: transition time of the scene in seconds (default = 0 seconds)</span></span>\n<span class="line">        <span class="token comment">// Properties below are all optional, note that it&#39;s not possible to use both &#39;color_temp&#39; and &#39;color&#39;</span></span>\n<span class="line">        <span class="token comment">// Attributes not specified will stay as-is when the scene is recalled.</span></span>\n<span class="line">        <span class="token string-property property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ON&quot;</span><span class="token punctuation">,</span> <span class="token comment">// state, should be &#39;ON&#39; or &#39;OFF&#39;</span></span>\n<span class="line">        <span class="token string-property property">&quot;brightness&quot;</span><span class="token operator">:</span> <span class="token number">254</span><span class="token punctuation">,</span> <span class="token comment">// brightness (0 - 254)</span></span>\n<span class="line">        <span class="token string-property property">&quot;color_temp&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// color temperature (0 - 500) OR</span></span>\n<span class="line">        <span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token string-property property">&quot;hue&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;saturation&quot;</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// color in hue/saturation (if both hue, saturation, x, and y are specifies x/y is used) OR</span></span>\n<span class="line">        <span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token string-property property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">0.123</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">0.123</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// color in x/y OR</span></span>\n<span class="line">        <span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#0000FF&quot;</span> <span class="token comment">// color in hex notation (saved as x/y)</span></span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In case a <code>scene_store</code> is called with the same <code>SCENE_ID</code> all values except the <code>transition</code> are overridden. In this way it&#39;s possible to have a transition for a scene created through <code>scene_store</code>. Equaling <code>scene_store</code> a <code>group_id</code> can be provided when calling <code>scene_add</code> for a single light. In that scenario the state will be applied when the scene is recalled on the group. This is powerful in providing support for transitions while also allowing each light to have a different state in the scene and thus also allowing different transition times per light when the scene is recalled on the group.</p><h2 id="recall-scene" tabindex="-1"><a class="header-anchor" href="#recall-scene"><span>Recall scene</span></a></h2><p>To recall the scene send a command to <code>zigbee2mqtt/[GROUP_OR_DEVICE_FRIENDLY_NAME]/set</code> with payload <code>{&quot;scene_recall&quot;: SCENE_ID}</code> where <code>SCENE_ID</code> is a number (e.g. <code>1</code>).</p><h2 id="remove-scene" tabindex="-1"><a class="header-anchor" href="#remove-scene"><span>Remove scene</span></a></h2><p>To remove a scene send a command to <code>zigbee2mqtt/[GROUP_OR_DEVICE_FRIENDLY_NAME]/set</code> with payload <code>{&quot;scene_remove&quot;: SCENE_ID}</code> where <code>SCENE_ID</code> is a number (e.g. <code>1</code>).</p><p>Alternatively if you want to remove all scenes send a command to <code>zigbee2mqtt/[GROUP_OR_DEVICE_FRIENDLY_NAME]/set</code> with payload <code>{&quot;scene_remove_all&quot;: &quot;&quot;}</code></p><h2 id="using-transitions-in-scenes" tabindex="-1"><a class="header-anchor" href="#using-transitions-in-scenes"><span>Using transitions in scenes</span></a></h2><p>Scene transition times can only be set with the <code>scene_add</code> command. To make use of the <code>scene_store</code> command and use transitions, first create a new scene using the <code>scene_add</code> command:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">{</span>\n<span class="line">    &quot;scene_add&quot;: {</span>\n<span class="line">        &quot;ID&quot;: 0,</span>\n<span class="line">        &quot;name&quot;: &quot;Scene Name&quot;,</span>\n<span class="line">        &quot;transition&quot;: 5</span>\n<span class="line">    }</span>\n<span class="line">}</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>That will create an empty scene. You can then set the values of your devices and call the <code>scene_store</code> command, using the same <code>ID</code> provided in the <code>scene_add</code> command:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">{</span>\n<span class="line">    &quot;scene_store&quot;: {</span>\n<span class="line">        &quot;ID&quot;: 0,</span>\n<span class="line">        &quot;name&quot;: &quot;Scene Name&quot;</span>\n<span class="line">    }</span>\n<span class="line">}</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The <code>scene_store</code> command overrites all values <em>except</em> the <code>transition</code> value.</p><h2 id="rename-scene" tabindex="-1"><a class="header-anchor" href="#rename-scene"><span>Rename scene</span></a></h2><p>In order to change (or set) the name for an existing scene, a command can be sent to <code>zigbee2mqtt/[GROUP_OR_DEVICE_FRIENDLY_NAME]/set</code> with payload <code>{&quot;scene_rename&quot;: {&quot;ID&quot;: SCENE_ID, &quot;name&quot;: SCENE_NAME}}</code> where <code>SCENE_ID</code> is a number and <code>SCENE_NAME</code> is a string representing the new name. For example: <code>{&quot;scene_rename&quot;: {&quot;ID&quot;: 1, &quot;name&quot;: &quot;My new scene name&quot;}}</code>.</p>',23)]))}]]),c=JSON.parse('{"path":"/guide/usage/scenes.html","title":"Scenes","lang":"en-US","frontmatter":{"pageClass":"content-page","sidebarDepth":1},"headers":[{"level":2,"title":"Creating a scene","slug":"creating-a-scene","link":"#creating-a-scene","children":[{"level":3,"title":"scene_store","slug":"scene-store","link":"#scene-store","children":[]},{"level":3,"title":"scene_add","slug":"scene-add","link":"#scene-add","children":[]}]},{"level":2,"title":"Recall scene","slug":"recall-scene","link":"#recall-scene","children":[]},{"level":2,"title":"Remove scene","slug":"remove-scene","link":"#remove-scene","children":[]},{"level":2,"title":"Using transitions in scenes","slug":"using-transitions-in-scenes","link":"#using-transitions-in-scenes","children":[]},{"level":2,"title":"Rename scene","slug":"rename-scene","link":"#rename-scene","children":[]}],"git":{"updatedTime":1726167159000},"filePathRelative":"guide/usage/scenes.md"}')}}]);
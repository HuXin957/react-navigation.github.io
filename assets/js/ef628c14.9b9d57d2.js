(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[1142],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58215:function(e,t,n){"use strict";var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},41395:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var a=n(67294),o=n(80944),i=n(86010),r="tabItem_1uMI",s="tabItemActive_2DSg";var c=37,l=39;var p=function(e){var t=e.lazy,n=e.block,p=e.defaultValue,u=e.values,m=e.groupId,d=e.className,h=(0,o.Z)(),g=h.tabGroupChoices,v=h.setTabGroupChoices,k=(0,a.useState)(p),f=k[0],N=k[1],b=a.Children.toArray(e.children),y=[];if(null!=m){var w=g[m];null!=w&&w!==f&&u.some((function(e){return e.value===w}))&&N(w)}var C=function(e){var t=e.currentTarget,n=y.indexOf(t),a=u[n].value;N(a),null!=m&&(v(m,a),setTimeout((function(){var e,n,a,o,i,r,c,l;(e=t.getBoundingClientRect(),n=e.top,a=e.left,o=e.bottom,i=e.right,r=window,c=r.innerHeight,l=r.innerWidth,n>=0&&i<=l&&o<=c&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},S=function(e){var t,n;switch(e.keyCode){case l:var a=y.indexOf(e.target)+1;n=y[a]||y[0];break;case c:var o=y.indexOf(e.target)-1;n=y[o]||y[y.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},d)},u.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,className:(0,i.Z)("tabs__item",r,{"tabs__item--active":f===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:S,onFocus:C,onClick:C},n)}))),t?(0,a.cloneElement)(b.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},79443:function(e,t,n){"use strict";var a=(0,n(67294).createContext)(void 0);t.Z=a},80944:function(e,t,n){"use strict";var a=n(67294),o=n(79443);t.Z=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},85642:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var a=n(74034),o=n(79973),i=(n(67294),n(3905)),r=n(41395),s=n(58215),c={id:"hello-react-navigation",title:"Hello React Navigation",sidebar_label:"Hello React Navigation"},l={unversionedId:"hello-react-navigation",id:"version-6.x/hello-react-navigation",isDocsHomePage:!1,title:"Hello React Navigation",description:"In a web browser, you can link to different pages using an anchor (``) tag. When the user clicks on a link, the URL is pushed to the browser history stack. When the user presses the back button, the browser pops the item from the top of the history stack, so the active page is now the previously visited page. React Native doesn't have a built-in idea of a global history stack like a web browser does -- this is where React Navigation enters the story.",source:"@site/versioned_docs/version-6.x/hello-react-navigation.md",sourceDirName:".",slug:"/hello-react-navigation",permalink:"/docs/6.x/hello-react-navigation",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/hello-react-navigation.md",version:"6.x",sidebar_label:"Hello React Navigation",frontMatter:{id:"hello-react-navigation",title:"Hello React Navigation",sidebar_label:"Hello React Navigation"},sidebar:"version-6.x/docs",previous:{title:"Getting started",permalink:"/docs/6.x/getting-started"},next:{title:"Moving between screens",permalink:"/docs/6.x/navigating"}},p=[{value:"Installing the native stack navigator library",id:"installing-the-native-stack-navigator-library",children:[{value:"Creating a native stack navigator",id:"creating-a-native-stack-navigator",children:[]},{value:"Configuring the navigator",id:"configuring-the-navigator",children:[]},{value:"Specifying options",id:"specifying-options",children:[]},{value:"Passing additional props",id:"passing-additional-props",children:[]}]},{value:"What&#39;s next?",id:"whats-next",children:[]},{value:"Summary",id:"summary",children:[]}],u={toc:p};function m(e){var t=e.components,c=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},u,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In a web browser, you can link to different pages using an anchor (",(0,i.kt)("inlineCode",{parentName:"p"},"<a>"),") tag. When the user clicks on a link, the URL is pushed to the browser history stack. When the user presses the back button, the browser pops the item from the top of the history stack, so the active page is now the previously visited page. React Native doesn't have a built-in idea of a global history stack like a web browser does -- this is where React Navigation enters the story."),(0,i.kt)("p",null,"React Navigation's native stack navigator provides a way for your app to transition between screens and manage navigation history. If your app uses only one stack navigator then it is conceptually similar to how a web browser handles navigation state - your app pushes and pops items from the navigation stack as users interact with it, and this results in the user seeing different screens. A key difference between how this works in a web browser and in React Navigation is that React Navigation's native stack navigator provides the gestures and animations that you would expect on Android and iOS when navigating between routes in the stack."),(0,i.kt)("p",null,"Let's start by demonstrating the most common navigator, ",(0,i.kt)("inlineCode",{parentName:"p"},"createNativeStackNavigator"),"."),(0,i.kt)("h2",{id:"installing-the-native-stack-navigator-library"},"Installing the native stack navigator library"),(0,i.kt)("p",null,"The libraries we've installed so far are the building blocks and shared foundations for navigators, and each navigator in React Navigation lives in its own library. To use the native stack navigator, we need to install ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/react-navigation/react-navigation/tree/main/packages/native-stack"},(0,i.kt)("inlineCode",{parentName:"a"},"@react-navigation/native-stack"))," :"),(0,i.kt)(r.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @react-navigation/native-stack@next\n"))),(0,i.kt)(s.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @react-navigation/native-stack@next\n")))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\ud83d\udca1 ",(0,i.kt)("inlineCode",{parentName:"p"},"@react-navigation/native-stack")," depends on ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native-screens")," and the other libraries that we installed in ",(0,i.kt)("a",{parentName:"p",href:"/docs/6.x/getting-started"},"Getting started"),". If you haven't installed those yet, head over to that page and follow the installation instructions.")),(0,i.kt)("h3",{id:"creating-a-native-stack-navigator"},"Creating a native stack navigator"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"createNativeStackNavigator")," is a function that returns an object containing 2 properties: ",(0,i.kt)("inlineCode",{parentName:"p"},"Screen")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Navigator"),". Both of them are React components used for configuring the navigator. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Navigator")," should contain ",(0,i.kt)("inlineCode",{parentName:"p"},"Screen")," elements as its children to define the configuration for routes."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"NavigationContainer")," is a component which manages our navigation tree and contains the ",(0,i.kt)("a",{parentName:"p",href:"/docs/6.x/navigation-state"},"navigation state"),". This component must wrap all navigators structure. Usually, we'd render this component at the root of our app, which is usually the component exported from ",(0,i.kt)("inlineCode",{parentName:"p"},"App.js"),"."),(0,i.kt)("samp",{id:"hello-react-navigation"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// In App.js in a new project\n\nimport * as React from 'react';\nimport { View, Text } from 'react-native';\nimport { NavigationContainer } from '@react-navigation/native';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\n\nfunction HomeScreen() {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Home Screen</Text>\n    </View>\n  );\n}\n\nconst Stack = createNativeStackNavigator();\n\nfunction App() {\n  return (\n    <NavigationContainer>\n      <Stack.Navigator>\n        <Stack.Screen name=\"Home\" component={HomeScreen} />\n      </Stack.Navigator>\n    </NavigationContainer>\n  );\n}\n\nexport default App;\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Basic app using stack navigator",src:n(76559).Z})),(0,i.kt)("p",null,"If you run this code, you will see a screen with an empty navigation bar and a grey content area containing your ",(0,i.kt)("inlineCode",{parentName:"p"},"HomeScreen")," component (shown above). The styles you see for the navigation bar and the content area are the default configuration for a stack navigator, we'll learn how to configure those later."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The casing of the route name doesn't matter -- you can use lowercase ",(0,i.kt)("inlineCode",{parentName:"p"},"home")," or capitalized ",(0,i.kt)("inlineCode",{parentName:"p"},"Home"),", it's up to you. We prefer capitalizing our route names.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The only required configuration for a screen is the ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"component")," props. You can read more about the other options available in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/6.x/native-stack-navigator"},"native stack navigator reference"),".")),(0,i.kt)("h3",{id:"configuring-the-navigator"},"Configuring the navigator"),(0,i.kt)("p",null,"All of the route configuration is specified as props to our navigator. We haven't passed any props to our navigator, so it just uses the default configuration."),(0,i.kt)("p",null,"Let's add a second screen to our native stack navigator and configure the ",(0,i.kt)("inlineCode",{parentName:"p"},"Home")," screen to render first:"),(0,i.kt)("samp",{id:"hello-react-navigation-full"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'function DetailsScreen() {\n  return (\n    <View style={{ flex: 1, alignItems: \'center\', justifyContent: \'center\' }}>\n      <Text>Details Screen</Text>\n    </View>\n  );\n}\n\nconst Stack = createNativeStackNavigator();\n\nfunction App() {\n  return (\n    <NavigationContainer>\n      <Stack.Navigator initialRouteName="Home">\n        <Stack.Screen name="Home" component={HomeScreen} />\n        <Stack.Screen name="Details" component={DetailsScreen} />\n      </Stack.Navigator>\n    </NavigationContainer>\n  );\n}\n')),(0,i.kt)("p",null,"Now our stack has two ",(0,i.kt)("em",{parentName:"p"},"routes"),", a ",(0,i.kt)("inlineCode",{parentName:"p"},"Home")," route and a ",(0,i.kt)("inlineCode",{parentName:"p"},"Details")," route. A route can be specified by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Screen")," component. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Screen")," component accepts a ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," prop which corresponds to the name of the route we will use to navigate, and a ",(0,i.kt)("inlineCode",{parentName:"p"},"component")," prop which corresponds to the component it'll render."),(0,i.kt)("p",null,"Here, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Home")," route corresponds to the ",(0,i.kt)("inlineCode",{parentName:"p"},"HomeScreen")," component, and the ",(0,i.kt)("inlineCode",{parentName:"p"},"Details")," route corresponds to the ",(0,i.kt)("inlineCode",{parentName:"p"},"DetailsScreen")," component. The initial route for the stack is the ",(0,i.kt)("inlineCode",{parentName:"p"},"Home")," route. Try changing it to ",(0,i.kt)("inlineCode",{parentName:"p"},"Details")," and reload the app (React Native's Fast Refresh won't update changes from ",(0,i.kt)("inlineCode",{parentName:"p"},"initialRouteName"),", as you might expect), notice that you will now see the ",(0,i.kt)("inlineCode",{parentName:"p"},"Details")," screen. Then change it back to ",(0,i.kt)("inlineCode",{parentName:"p"},"Home")," and reload once more."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: The ",(0,i.kt)("inlineCode",{parentName:"p"},"component")," prop accepts component, not a render function. Don't pass an inline function (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"component={() => <HomeScreen />}"),"), or your component will unmount and remount losing all state when the parent component re-renders. See ",(0,i.kt)("a",{parentName:"p",href:"#passing-additional-props"},"Passing additional props")," for alternatives.")),(0,i.kt)("h3",{id:"specifying-options"},"Specifying options"),(0,i.kt)("p",null,"Each screen in the navigator can specify some options for the navigator, such as the title to render in the header. These options can be passed in the ",(0,i.kt)("inlineCode",{parentName:"p"},"options")," prop for each screen component:"),(0,i.kt)("samp",{id:"hello-react-navigation-with-options"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"<Stack.Screen\n  name=\"Home\"\n  component={HomeScreen}\n  options={{ title: 'Overview' }}\n/>\n")),(0,i.kt)("p",null,"Sometimes we will want to specify the same options for all of the screens in the navigator. For that, we can pass a ",(0,i.kt)("inlineCode",{parentName:"p"},"screenOptions")," prop to the navigator."),(0,i.kt)("h3",{id:"passing-additional-props"},"Passing additional props"),(0,i.kt)("p",null,"Sometimes we might want to pass additional props to a screen. We can do that with 2 approaches:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Use ",(0,i.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/context.html"},"React context")," and wrap the navigator with a context provider to pass data to the screens (recommended).")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Use a render callback for the screen instead of specifying a ",(0,i.kt)("inlineCode",{parentName:"p"},"component")," prop:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},'<Stack.Screen name="Home">\n  {props => <HomeScreen {...props} extraData={someData} />}\n</Stack.Screen>\n')))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: By default, React Navigation applies optimizations to screen components to prevent unnecessary renders. Using a render callback removes those optimizations. So if you use a render callback, you'll need to ensure that you use ",(0,i.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/react-api.html#reactmemo"},(0,i.kt)("inlineCode",{parentName:"a"},"React.memo"))," or ",(0,i.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/react-api.html#reactpurecomponent"},(0,i.kt)("inlineCode",{parentName:"a"},"React.PureComponent"))," for your screen components to avoid performance issues.")),(0,i.kt)("h2",{id:"whats-next"},"What's next?"),(0,i.kt)("p",null,'The natural question at this point is: "how do I go from the ',(0,i.kt)("inlineCode",{parentName:"p"},"Home")," route to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Details"),' route?". That is covered in the ',(0,i.kt)("a",{parentName:"p",href:"/docs/6.x/navigating"},"next section"),"."),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"React Native doesn't have a built-in API for navigation like a web browser does. React Navigation provides this for you, along with the iOS and Android gestures and animations to transition between screens."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Stack.Navigator")," is a component that takes route configuration as its children with additional props for configuration and renders our content."),(0,i.kt)("li",{parentName:"ul"},"Each ",(0,i.kt)("inlineCode",{parentName:"li"},"Stack.Screen")," component takes a ",(0,i.kt)("inlineCode",{parentName:"li"},"name")," prop which refers to the name of the route and ",(0,i.kt)("inlineCode",{parentName:"li"},"component")," prop which specifies the component to render for the route. These are the 2 required props."),(0,i.kt)("li",{parentName:"ul"},"To specify what the initial route in a stack is, provide an ",(0,i.kt)("inlineCode",{parentName:"li"},"initialRouteName")," as the prop for the navigator."),(0,i.kt)("li",{parentName:"ul"},"To specify screen-specific options, we can pass an ",(0,i.kt)("inlineCode",{parentName:"li"},"options")," prop to ",(0,i.kt)("inlineCode",{parentName:"li"},"Stack.Screen"),", and for common options, we can pass ",(0,i.kt)("inlineCode",{parentName:"li"},"screenOptions")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"Stack.Navigator"))))}m.isMDXComponent=!0},86010:function(e,t,n){"use strict";function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})},76559:function(e,t,n){"use strict";t.Z=n.p+"assets/images/basic_stack_nav-7388d409c412d0c728a0903301338433.png"}}]);
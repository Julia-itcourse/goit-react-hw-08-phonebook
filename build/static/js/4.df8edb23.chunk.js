(this["webpackJsonpgoit-react-hw-07-phonebook-1"]=this["webpackJsonpgoit-react-hw-07-phonebook-1"]||[]).push([[4],{100:function(t,e,n){"use strict";var r="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),s=new Uint8Array(16);function i(){if(!r)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(s)}var a=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var o=function(t){return"string"===typeof t&&a.test(t)},u=[],l=0;l<256;++l)u.push((l+256).toString(16).substr(1));var c=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(u[t[e+0]]+u[t[e+1]]+u[t[e+2]]+u[t[e+3]]+"-"+u[t[e+4]]+u[t[e+5]]+"-"+u[t[e+6]]+u[t[e+7]]+"-"+u[t[e+8]]+u[t[e+9]]+"-"+u[t[e+10]]+u[t[e+11]]+u[t[e+12]]+u[t[e+13]]+u[t[e+14]]+u[t[e+15]]).toLowerCase();if(!o(n))throw TypeError("Stringified UUID is invalid");return n};e.a=function(t,e,n){var r=(t=t||{}).random||(t.rng||i)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){n=n||0;for(var s=0;s<16;++s)e[n+s]=r[s];return e}return c(r)}},101:function(t,e,n){"use strict";var r=n(10),s=n(3);var i=n(12),a=(n(19),n(0)),o=n.n(a),u=n(86);function l(t,e){var n=Object.create(null);return t&&a.Children.map(t,(function(t){return t})).forEach((function(t){n[t.key]=function(t){return e&&Object(a.isValidElement)(t)?e(t):t}(t)})),n}function c(t,e,n){return null!=n[e]?n[e]:t.props[e]}function p(t,e,n){var r=l(t.children),s=function(t,e){function n(n){return n in e?e[n]:t[n]}t=t||{},e=e||{};var r,s=Object.create(null),i=[];for(var a in t)a in e?i.length&&(s[a]=i,i=[]):i.push(a);var o={};for(var u in e){if(s[u])for(r=0;r<s[u].length;r++){var l=s[u][r];o[s[u][r]]=n(l)}o[u]=n(u)}for(r=0;r<i.length;r++)o[i[r]]=n(i[r]);return o}(e,r);return Object.keys(s).forEach((function(i){var o=s[i];if(Object(a.isValidElement)(o)){var u=i in e,l=i in r,p=e[i],d=Object(a.isValidElement)(p)&&!p.props.in;!l||u&&!d?l||!u||d?l&&u&&Object(a.isValidElement)(p)&&(s[i]=Object(a.cloneElement)(o,{onExited:n.bind(null,o),in:p.props.in,exit:c(o,"exit",t),enter:c(o,"enter",t)})):s[i]=Object(a.cloneElement)(o,{in:!1}):s[i]=Object(a.cloneElement)(o,{onExited:n.bind(null,o),in:!0,exit:c(o,"exit",t),enter:c(o,"enter",t)})}})),s}var d=Object.values||function(t){return Object.keys(t).map((function(e){return t[e]}))},f=function(t){function e(e,n){var r,s=(r=t.call(this,e,n)||this).handleExited.bind(function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(r));return r.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},r}Object(i.a)(e,t);var n=e.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},e.getDerivedStateFromProps=function(t,e){var n,r,s=e.children,i=e.handleExited;return{children:e.firstRender?(n=t,r=i,l(n.children,(function(t){return Object(a.cloneElement)(t,{onExited:r.bind(null,t),in:!0,appear:c(t,"appear",n),enter:c(t,"enter",n),exit:c(t,"exit",n)})}))):p(t,s,i),firstRender:!1}},n.handleExited=function(t,e){var n=l(this.props.children);t.key in n||(t.props.onExited&&t.props.onExited(e),this.mounted&&this.setState((function(e){var n=Object(s.a)({},e.children);return delete n[t.key],{children:n}})))},n.render=function(){var t=this.props,e=t.component,n=t.childFactory,s=Object(r.a)(t,["component","childFactory"]),i=this.state.contextValue,a=d(this.state.children).map(n);return delete s.appear,delete s.enter,delete s.exit,null===e?o.a.createElement(u.a.Provider,{value:i},a):o.a.createElement(u.a.Provider,{value:i},o.a.createElement(e,s,a))},e}(o.a.Component);f.propTypes={},f.defaultProps={component:"div",childFactory:function(t){return t}};e.a=f},86:function(t,e,n){"use strict";var r=n(0),s=n.n(r);e.a=s.a.createContext(null)},99:function(t,e,n){"use strict";var r=n(3),s=n(10),i=n(12);n(19);function a(t,e){return t.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var o=n(0),u=n.n(o),l=n(23),c=n.n(l),p=!1,d=n(86),f="unmounted",h="exited",E="entering",m="entered",v="exiting",x=function(t){function e(e,n){var r;r=t.call(this,e,n)||this;var s,i=n&&!n.isMounting?e.enter:e.appear;return r.appearStatus=null,e.in?i?(s=h,r.appearStatus=E):s=m:s=e.unmountOnExit||e.mountOnEnter?f:h,r.state={status:s},r.nextCallback=null,r}Object(i.a)(e,t),e.getDerivedStateFromProps=function(t,e){return t.in&&e.status===f?{status:h}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(t){var e=null;if(t!==this.props){var n=this.state.status;this.props.in?n!==E&&n!==m&&(e=E):n!==E&&n!==m||(e=v)}this.updateStatus(!1,e)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var t,e,n,r=this.props.timeout;return t=e=n=r,null!=r&&"number"!==typeof r&&(t=r.exit,e=r.enter,n=void 0!==r.appear?r.appear:e),{exit:t,enter:e,appear:n}},n.updateStatus=function(t,e){void 0===t&&(t=!1),null!==e?(this.cancelNextCallback(),e===E?this.performEnter(t):this.performExit()):this.props.unmountOnExit&&this.state.status===h&&this.setState({status:f})},n.performEnter=function(t){var e=this,n=this.props.enter,r=this.context?this.context.isMounting:t,s=this.props.nodeRef?[r]:[c.a.findDOMNode(this),r],i=s[0],a=s[1],o=this.getTimeouts(),u=r?o.appear:o.enter;!t&&!n||p?this.safeSetState({status:m},(function(){e.props.onEntered(i)})):(this.props.onEnter(i,a),this.safeSetState({status:E},(function(){e.props.onEntering(i,a),e.onTransitionEnd(u,(function(){e.safeSetState({status:m},(function(){e.props.onEntered(i,a)}))}))})))},n.performExit=function(){var t=this,e=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:c.a.findDOMNode(this);e&&!p?(this.props.onExit(r),this.safeSetState({status:v},(function(){t.props.onExiting(r),t.onTransitionEnd(n.exit,(function(){t.safeSetState({status:h},(function(){t.props.onExited(r)}))}))}))):this.safeSetState({status:h},(function(){t.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},n.setNextCallback=function(t){var e=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,e.nextCallback=null,t(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(t,e){this.setNextCallback(e);var n=this.props.nodeRef?this.props.nodeRef.current:c.a.findDOMNode(this),r=null==t&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var s=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=s[0],a=s[1];this.props.addEndListener(i,a)}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},n.render=function(){var t=this.state.status;if(t===f)return null;var e=this.props,n=e.children,r=(e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef,Object(s.a)(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return u.a.createElement(d.a.Provider,{value:null},"function"===typeof n?n(t,r):u.a.cloneElement(u.a.Children.only(n),r))},e}(u.a.Component);function b(){}x.contextType=d.a,x.propTypes={},x.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:b,onEntering:b,onEntered:b,onExit:b,onExiting:b,onExited:b},x.UNMOUNTED=f,x.EXITED=h,x.ENTERING=E,x.ENTERED=m,x.EXITING=v;var g=x,C=function(t,e){return t&&e&&e.split(" ").forEach((function(e){return r=e,void((n=t).classList?n.classList.remove(r):"string"===typeof n.className?n.className=a(n.className,r):n.setAttribute("class",a(n.className&&n.className.baseVal||"",r)));var n,r}))},N=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))||this).appliedClasses={appear:{},enter:{},exit:{}},e.onEnter=function(t,n){var r=e.resolveArguments(t,n),s=r[0],i=r[1];e.removeClasses(s,"exit"),e.addClass(s,i?"appear":"enter","base"),e.props.onEnter&&e.props.onEnter(t,n)},e.onEntering=function(t,n){var r=e.resolveArguments(t,n),s=r[0],i=r[1]?"appear":"enter";e.addClass(s,i,"active"),e.props.onEntering&&e.props.onEntering(t,n)},e.onEntered=function(t,n){var r=e.resolveArguments(t,n),s=r[0],i=r[1]?"appear":"enter";e.removeClasses(s,i),e.addClass(s,i,"done"),e.props.onEntered&&e.props.onEntered(t,n)},e.onExit=function(t){var n=e.resolveArguments(t)[0];e.removeClasses(n,"appear"),e.removeClasses(n,"enter"),e.addClass(n,"exit","base"),e.props.onExit&&e.props.onExit(t)},e.onExiting=function(t){var n=e.resolveArguments(t)[0];e.addClass(n,"exit","active"),e.props.onExiting&&e.props.onExiting(t)},e.onExited=function(t){var n=e.resolveArguments(t)[0];e.removeClasses(n,"exit"),e.addClass(n,"exit","done"),e.props.onExited&&e.props.onExited(t)},e.resolveArguments=function(t,n){return e.props.nodeRef?[e.props.nodeRef.current,t]:[t,n]},e.getClassNames=function(t){var n=e.props.classNames,r="string"===typeof n,s=r?""+(r&&n?n+"-":"")+t:n[t];return{baseClassName:s,activeClassName:r?s+"-active":n[t+"Active"],doneClassName:r?s+"-done":n[t+"Done"]}},e}Object(i.a)(e,t);var n=e.prototype;return n.addClass=function(t,e,n){var r=this.getClassNames(e)[n+"ClassName"],s=this.getClassNames("enter").doneClassName;"appear"===e&&"done"===n&&s&&(r+=" "+s),"active"===n&&t&&t.scrollTop,r&&(this.appliedClasses[e][n]=r,function(t,e){t&&e&&e.split(" ").forEach((function(e){return r=e,void((n=t).classList?n.classList.add(r):function(t,e){return t.classList?!!e&&t.classList.contains(e):-1!==(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+e+" ")}(n,r)||("string"===typeof n.className?n.className=n.className+" "+r:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+r)));var n,r}))}(t,r))},n.removeClasses=function(t,e){var n=this.appliedClasses[e],r=n.base,s=n.active,i=n.done;this.appliedClasses[e]={},r&&C(t,r),s&&C(t,s),i&&C(t,i)},n.render=function(){var t=this.props,e=(t.classNames,Object(s.a)(t,["classNames"]));return u.a.createElement(g,Object(r.a)({},e,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},e}(u.a.Component);N.defaultProps={classNames:""},N.propTypes={};e.a=N}}]);
//# sourceMappingURL=4.df8edb23.chunk.js.map
/* Vanilla Modal - https://github.com/benceg/vanilla-modal */
!function(e,t){if("function"==typeof define&&define.amd)define(["exports"],t);else if("undefined"!=typeof exports)t(exports);else{var n={};t(n),e.VanillaModal=n}}(this,function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},i={modal:".modal",modalInner:".modal-inner",modalContent:".modal-content",open:"[data-modal-open]",close:"[data-modal-close]",page:"body",class:"modal-visible",loadClass:"vanilla-modal",clickOutside:!0,closeKeys:[27],transitions:!0,transitionEnd:null,onBeforeOpen:null,onBeforeClose:null,onOpen:null,onClose:null};function s(e){console.error("VanillaModal: "+e)}function o(e,t){var n=(t||document).querySelector(e);return n||s(e+" not found in document."),n}function l(e,t){e instanceof HTMLElement||s("Not a valid HTML element."),e.setAttribute("class",e.className.split(" ").filter(function(e){return e!==t}).concat(t).join(" "))}function a(e){return n({},i,e,{transitionEnd:(o=document.createElement("div"),(t=[{key:"transition",value:"transitionend"},{key:"OTransition",value:"otransitionend"},{key:"MozTransition",value:"transitionend"},{key:"WebkitTransition",value:"webkitTransitionEnd"}],s=function(e){var t=e.key;return void 0!==o.style[t]},function(e){var n=t.filter(s);return n[0]?n[0][e]:void 0})("value"))});var t,s,o}function r(e,t){for(var n=(e.target.document||e.target.ownerDocument).querySelectorAll(t),i=0;i<n.length;i+=1)for(var s=e.target;s&&s!==document.body;){if(s===n[i])return s;s=s.parentNode}return null}var d=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.isOpen=!1,this.current=null,this.isListening=!1,this.settings=a(t),this.dom=this.getDomNodes(),this.open=this.open.bind(this),this.close=this.close.bind(this),this.closeKeyHandler=this.closeKeyHandler.bind(this),this.outsideClickHandler=this.outsideClickHandler.bind(this),this.delegateOpen=this.delegateOpen.bind(this),this.delegateClose=this.delegateClose.bind(this),this.listen=this.listen.bind(this),this.destroy=this.destroy.bind(this),this.addLoadedCssClass(),this.listen()}return t(e,[{key:"getDomNodes",value:function(){var e=this.settings,t=e.modal,n=e.page,i=e.modalInner,s=e.modalContent;return{modal:o(t),page:o(n),modalInner:o(i,o(t)),modalContent:o(s,o(t))}}},{key:"addLoadedCssClass",value:function(){l(this.dom.page,this.settings.loadClass)}},{key:"setOpenId",value:function(e){this.dom.page.setAttribute("data-current-modal",e||"anonymous")}},{key:"removeOpenId",value:function(){this.dom.page.removeAttribute("data-current-modal")}},{key:"open",value:function(e,t){var n,i=this.dom.page,o=this.settings,a=o.onBeforeOpen,r=o.onOpen;this.releaseNode(this.current),this.current=(n=e)&&"string"==typeof n.hash?document.querySelector(n.hash):"string"==typeof n?document.querySelector(n):(s("No selector supplied to open()"),null),this.current instanceof HTMLElement!=!1?("function"==typeof a&&a.call(this,t),this.captureNode(this.current),l(i,this.settings.class),this.setOpenId(this.current.id),this.isOpen=!0,"function"==typeof r&&r.call(this,t)):s("VanillaModal target must exist on page.")}},{key:"detectTransition",value:function(){var e=this.dom.modal,t=window.getComputedStyle(e,null);return Boolean(["transitionDuration","oTransitionDuration","MozTransitionDuration","webkitTransitionDuration"].filter(function(e){return"string"==typeof t[e]&&parseFloat(t[e])>0}).length)}},{key:"close",value:function(e){var t,n,i=this.settings,o=i.transitions,l=i.transitionEnd,a=i.onBeforeClose,r=this.detectTransition();this.isOpen&&(this.isOpen=!1,"function"==typeof a&&a.call(this,e),t=this.dom.page,n=this.settings.class,t instanceof HTMLElement||s("Not a valid HTML element."),t.setAttribute("class",t.className.split(" ").filter(function(e){return e!==n}).join(" ")),o&&l&&r?this.closeModalWithTransition(e):this.closeModal(e))}},{key:"closeModal",value:function(e){var t=this.settings.onClose;this.removeOpenId(this.dom.page),this.releaseNode(this.current),this.isOpen=!1,this.current=null,"function"==typeof t&&t.call(this,e)}},{key:"closeModalWithTransition",value:function(e){var t=this,n=this.dom.modal,i=this.settings.transitionEnd;n.addEventListener(i,function s(){n.removeEventListener(i,s),t.closeModal(e)})}},{key:"captureNode",value:function(e){for(var t=this.dom.modalContent;e.childNodes.length;)t.appendChild(e.childNodes[0])}},{key:"releaseNode",value:function(e){for(var t=this.dom.modalContent;t.childNodes.length;)e.appendChild(t.childNodes[0])}},{key:"closeKeyHandler",value:function(e){var t,n=this.settings.closeKeys;t=n,"[object Array]"===Object.prototype.toString.call(t)&&t.length&&n.indexOf(e.which)>-1&&!0===this.isOpen&&(e.preventDefault(),this.close(e))}},{key:"outsideClickHandler",value:function(e){var t=this.settings.clickOutside,n=this.dom.modalInner;if(t){for(var i=e.target;i&&i!==document.body;){if(i===n)return;i=i.parentNode}this.close(e)}}},{key:"delegateOpen",value:function(e){var t=r(e,this.settings.open);t&&(e.preventDefault(),this.open(t,e))}},{key:"delegateClose",value:function(e){r(e,this.settings.close)&&(e.preventDefault(),this.close(e))}},{key:"listen",value:function(){var e=this.dom.modal;this.isListening?s("Event listeners already applied."):(e.addEventListener("click",this.outsideClickHandler,!1),document.addEventListener("keydown",this.closeKeyHandler,!1),document.addEventListener("click",this.delegateOpen,!1),document.addEventListener("click",this.delegateClose,!1),this.isListening=!0)}},{key:"destroy",value:function(){var e=this.dom.modal;this.isListening?(this.close(),e.removeEventListener("click",this.outsideClickHandler),document.removeEventListener("keydown",this.closeKeyHandler),document.removeEventListener("click",this.delegateOpen),document.removeEventListener("click",this.delegateClose),this.isListening=!1):s("Event listeners already removed.")}}]),e}();e.default=d});
var modal = new VanillaModal.default();

// Ready as soon as DOM has loaded - not whole document
document.addEventListener("DOMContentLoaded", function() {
	
	// Console.log the 'data-list' value:
	var ratingsListDataSet = document.querySelector("[data-list='review']");
		ratingsListDataSet.addEventListener("click", function(e) {
		console.log("The rating is: " + e.target.dataset.rating);
	});

	// Cache selectors
	var reviewUl = document.querySelector('.review-block__list');
	var reviewLi = document.querySelectorAll('.review-block__li');
	var reviewBtn = document.querySelectorAll('.review-block__button');
	
	// Use array.prototype and forEach on the node list: querySelectorAll('.review-block__li');
	Array.prototype.forEach.call(
		reviewLi, function(element) {
		// reviewBtn, function(element) {
			element.onclick = LiAaddActive;
			// element.onclick = BtnAaddActive;
		}
	);

	// Add/Remove .active
	function LiAaddActive(element) {
	// function BtnAaddActive(element) {
		element = this;
		if (element.classList.contains('active')) {
			element.classList.remove('active');
		} else {
			reviewLi.forEach(function(e) {
			// reviewBtn.forEach(function(e) {
				e.classList.remove('active');
			});
			element.classList.add('active');
		}
	}
});

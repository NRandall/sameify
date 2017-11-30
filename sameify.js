//lodash debounce
function debounce(e,t,r){function n(t){var r=b,n=v;return b=v=void 0,O=t,j=e.apply(n,r)}function o(e){return O=e,y=setTimeout(u,t),T?n(e):j}function i(e){var r=e-p,n=e-O,o=t-r;return d?nativeMin(o,m-n):o}function a(e){var r=e-p,n=e-O;return void 0===p||r>=t||0>r||d&&n>=m}function u(){var e=now();return a(e)?f(e):void(y=setTimeout(u,i(e)))}function f(e){return y=void 0,g&&b?n(e):(b=v=void 0,j)}function c(){void 0!==y&&clearTimeout(y),O=0,b=p=v=y=void 0}function l(){return void 0===y?j:f(now())}function s(){var e=now(),r=a(e);if(b=arguments,v=this,p=e,r){if(void 0===y)return o(p);if(d)return y=setTimeout(u,t),n(p)}return void 0===y&&(y=setTimeout(u,t)),j}var b,v,m,j,y,p,O=0,T=!1,d=!1,g=!0;if("function"!=typeof e)throw new TypeError(FUNC_ERROR_TEXT);return t=toNumber(t)||0,isObject(r)&&(T=!!r.leading,d="maxWait"in r,m=d?nativeMax(toNumber(r.maxWait)||0,t):m,g="trailing"in r?!!r.trailing:g),s.cancel=c,s.flush=l,s}function isObject(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function isObjectLike(e){return!!e&&"object"==typeof e}function isSymbol(e){return"symbol"==typeof e||isObjectLike(e)&&objectToString.call(e)==symbolTag}function toNumber(e){if("number"==typeof e)return e;if(isSymbol(e))return NAN;if(isObject(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=isObject(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(reTrim,"");var r=reIsBinary.test(e);return r||reIsOctal.test(e)?freeParseInt(e.slice(2),r?2:8):reIsBadHex.test(e)?NAN:+e}var FUNC_ERROR_TEXT="Expected a function",NAN=NaN,symbolTag="[object Symbol]",reTrim=/^\s+|\s+$/g,reIsBadHex=/^[-+]0x[0-9a-f]+$/i,reIsBinary=/^0b[01]+$/i,reIsOctal=/^0o[0-7]+$/i,freeParseInt=parseInt,freeGlobal="object"==typeof global&&global&&global.Object===Object&&global,freeSelf="object"==typeof self&&self&&self.Object===Object&&self,root=freeGlobal||freeSelf||Function("return this")(),objectProto=Object.prototype,objectToString=objectProto.toString,nativeMax=Math.max,nativeMin=Math.min,now=function(){return root.Date.now()};


(function ($){
  $.fn.sameify = function() {
    var t = this;
    var f = debounce(function() {
      var b = 0;
      t.each(function(i, l) {
        $(this).css('min-height', '');
        if (l.clientHeight > b) b = l.clientHeight;       
      })
      t.each(function(i, l) {
        $(this).css('min-height', b + 'px')
      })
    }, 200);
    f();
    $(window).resize(f);
    return this;
  }
}(jQuery));
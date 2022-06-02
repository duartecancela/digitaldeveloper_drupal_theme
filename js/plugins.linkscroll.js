window.scwLinkScrollPlugin = window.scwLinkScrollPlugin || {};

/*!
 * jQuery Color Animations v@VERSION
 * https://github.com/jquery/jquery-color
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: @DATE
 */
!function(r,n){function t(r,n,t){var e=f[n.type]||{};return null==r?t||!n.def?null:n.def:(r=e.floor?~~r:parseFloat(r),isNaN(r)?n.def:e.mod?(r+e.mod)%e.mod:0>r?0:e.max<r?e.max:r)}function e(n){var t=l(),e=t._rgba=[];return n=n.toLowerCase(),h(u,function(r,o){var a,s=o.re.exec(n),i=s&&o.parse(s),u=o.space||"rgba";return i?(a=t[u](i),t[c[u].cache]=a[c[u].cache],e=t._rgba=a._rgba,!1):void 0}),e.length?("0,0,0,0"===e.join()&&r.extend(e,a.transparent),t):a[n]}function o(r,n,t){return t=(t+1)%1,1>6*t?r+(n-r)*t*6:1>2*t?n:2>3*t?r+(n-r)*(2/3-t)*6:r}var a,s="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",i=/^([\-+])=\s*(\d+\.?\d*)/,u=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(r){return[r[1],r[2],r[3],r[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(r){return[2.55*r[1],2.55*r[2],2.55*r[3],r[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(r){return[parseInt(r[1],16),parseInt(r[2],16),parseInt(r[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(r){return[parseInt(r[1]+r[1],16),parseInt(r[2]+r[2],16),parseInt(r[3]+r[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(r){return[r[1],r[2]/100,r[3]/100,r[4]]}}],l=r.Color=function(n,t,e,o){return new r.Color.fn.parse(n,t,e,o)},c={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},f={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},p=l.support={},d=r("<p>")[0],h=r.each;d.style.cssText="background-color:rgba(1,1,1,.5)",p.rgba=d.style.backgroundColor.indexOf("rgba")>-1,h(c,function(r,n){n.cache="_"+r,n.props.alpha={idx:3,type:"percent",def:1}}),l.fn=r.extend(l.prototype,{parse:function(o,s,i,u){if(o===n)return this._rgba=[null,null,null,null],this;(o.jquery||o.nodeType)&&(o=r(o).css(s),s=n);var f=this,p=r.type(o),d=this._rgba=[];return s!==n&&(o=[o,s,i,u],p="array"),"string"===p?this.parse(e(o)||a._default):"array"===p?(h(c.rgba.props,function(r,n){d[n.idx]=t(o[n.idx],n)}),this):"object"===p?(o instanceof l?h(c,function(r,n){o[n.cache]&&(f[n.cache]=o[n.cache].slice())}):h(c,function(n,e){var a=e.cache;h(e.props,function(r,n){if(!f[a]&&e.to){if("alpha"===r||null==o[r])return;f[a]=e.to(f._rgba)}f[a][n.idx]=t(o[r],n,!0)}),f[a]&&r.inArray(null,f[a].slice(0,3))<0&&(f[a][3]=1,e.from&&(f._rgba=e.from(f[a])))}),this):void 0},is:function(r){var n=l(r),t=!0,e=this;return h(c,function(r,o){var a,s=n[o.cache];return s&&(a=e[o.cache]||o.to&&o.to(e._rgba)||[],h(o.props,function(r,n){return null!=s[n.idx]?t=s[n.idx]===a[n.idx]:void 0})),t}),t},_space:function(){var r=[],n=this;return h(c,function(t,e){n[e.cache]&&r.push(t)}),r.pop()},transition:function(r,n){var e=l(r),o=e._space(),a=c[o],s=0===this.alpha()?l("transparent"):this,i=s[a.cache]||a.to(s._rgba),u=i.slice();return e=e[a.cache],h(a.props,function(r,o){var a=o.idx,s=i[a],l=e[a],c=f[o.type]||{};null!==l&&(null===s?u[a]=l:(c.mod&&(l-s>c.mod/2?s+=c.mod:s-l>c.mod/2&&(s-=c.mod)),u[a]=t((l-s)*n+s,o)))}),this[o](u)},blend:function(n){if(1===this._rgba[3])return this;var t=this._rgba.slice(),e=t.pop(),o=l(n)._rgba;return l(r.map(t,function(r,n){return(1-e)*o[n]+e*r}))},toRgbaString:function(){var n="rgba(",t=r.map(this._rgba,function(r,n){return null==r?n>2?1:0:r});return 1===t[3]&&(t.pop(),n="rgb("),n+t.join()+")"},toHslaString:function(){var n="hsla(",t=r.map(this.hsla(),function(r,n){return null==r&&(r=n>2?1:0),n&&3>n&&(r=Math.round(100*r)+"%"),r});return 1===t[3]&&(t.pop(),n="hsl("),n+t.join()+")"},toHexString:function(n){var t=this._rgba.slice(),e=t.pop();return n&&t.push(~~(255*e)),"#"+r.map(t,function(r){return r=(r||0).toString(16),1===r.length?"0"+r:r}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),l.fn.parse.prototype=l.fn,c.hsla.to=function(r){if(null==r[0]||null==r[1]||null==r[2])return[null,null,null,r[3]];var n,t,e=r[0]/255,o=r[1]/255,a=r[2]/255,s=r[3],i=Math.max(e,o,a),u=Math.min(e,o,a),l=i-u,c=i+u,f=.5*c;return n=u===i?0:e===i?60*(o-a)/l+360:o===i?60*(a-e)/l+120:60*(e-o)/l+240,t=0===l?0:.5>=f?l/c:l/(2-c),[Math.round(n)%360,t,f,null==s?1:s]},c.hsla.from=function(r){if(null==r[0]||null==r[1]||null==r[2])return[null,null,null,r[3]];var n=r[0]/360,t=r[1],e=r[2],a=r[3],s=.5>=e?e*(1+t):e+t-e*t,i=2*e-s;return[Math.round(255*o(i,s,n+1/3)),Math.round(255*o(i,s,n)),Math.round(255*o(i,s,n-1/3)),a]},h(c,function(e,o){var a=o.props,s=o.cache,u=o.to,c=o.from;l.fn[e]=function(e){if(u&&!this[s]&&(this[s]=u(this._rgba)),e===n)return this[s].slice();var o,i=r.type(e),f="array"===i||"object"===i?e:arguments,p=this[s].slice();return h(a,function(r,n){var e=f["object"===i?r:n.idx];null==e&&(e=p[n.idx]),p[n.idx]=t(e,n)}),c?(o=l(c(p)),o[s]=p,o):l(p)},h(a,function(n,t){l.fn[n]||(l.fn[n]=function(o){var a,s=r.type(o),u="alpha"===n?this._hsla?"hsla":"rgba":e,l=this[u](),c=l[t.idx];return"undefined"===s?c:("function"===s&&(o=o.call(this,c),s=r.type(o)),null==o&&t.empty?this:("string"===s&&(a=i.exec(o),a&&(o=c+parseFloat(a[2])*("+"===a[1]?1:-1))),l[t.idx]=o,this[u](l)))})})}),l.hook=function(n){var t=n.split(" ");h(t,function(n,t){r.cssHooks[t]={set:function(n,o){var a,s,i="";if("transparent"!==o&&("string"!==r.type(o)||(a=e(o)))){if(o=l(a||o),!p.rgba&&1!==o._rgba[3]){for(s="backgroundColor"===t?n.parentNode:n;(""===i||"transparent"===i)&&s&&s.style;)try{i=r.css(s,"backgroundColor"),s=s.parentNode}catch(u){}o=o.blend(i&&"transparent"!==i?i:"_default")}o=o.toRgbaString()}try{n.style[t]=o}catch(u){}}},r.fx.step[t]=function(n){n.colorInit||(n.start=l(n.elem,t),n.end=l(n.end),n.colorInit=!0),r.cssHooks[t].set(n.elem,n.start.transition(n.end,n.pos))}})},l.hook(s),r.cssHooks.borderColor={expand:function(r){var n={};return h(["Top","Right","Bottom","Left"],function(t,e){n["border"+e+"Color"]=r}),n}},a=r.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery);

let windowElLs		= jQuery(window),
	$bodyLs			= jQuery('body'),
	$pageSectionElLs,
	locationHashLs	= location.hash;

window.SEMICOLON_linkScrollInit = function( $linkScrollEl ){

	$linkScrollEl = $linkScrollEl.filter(':not(.customjs)');

	if( $linkScrollEl.length < 1 ){
		return true;
	}

	if( $('[data-scrollto="'+ locationHashLs +'"]').length > 0 ) {

		windowElLs.on('beforeunload', function() {
			windowElLs.scrollTop(0);
		});

		windowElLs.scrollTop(0);

		let linkElement = $( locationHashLs );

		if( linkElement.length > 0 ) {
			setTimeout( function(){
				let linkElementOff	= linkElement.offset().top,
					linkElSettings = JSON.parse( linkElement.attr('data-scrollto-settings') );

				$('html,body').stop(true, true).animate({
					'scrollTop': linkElementOff - Number( linkElSettings.offset )
				}, linkElSettings.speed, linkElSettings.easing, function(){
					if( linkElSettings.highlight ) {
						if( linkElement.find('.highlight-me').length > 0 ) {
							linkElement.find('.highlight-me').animate({'backgroundColor': linkElSettings.highlight}, 300);
							setTimeout( function(){
								linkElement.find('.highlight-me').animate({'backgroundColor': 'transparent'}, 300);
							}, 500 );
						} else {
							linkElement.animate({'backgroundColor': linkElSettings.highlight}, 300);
							setTimeout( function(){
								linkElement.animate({'backgroundColor': 'transparent'}, 300);
							}, 500 );
						}
					}
				});
			}, 1200);
		}

	}

	$linkScrollEl.each( function(){

		let linkEl			= $(this),
			linkElAnchor	= linkEl.attr('data-scrollto'),
			linkElement		= $( linkElAnchor ),
			linkElSettings	= SEMICOLON_linkScrollSettings( linkElAnchor, $('[data-scrollto="'+ linkElAnchor +'"]') );

		if( linkElement.length > 0 ) {
			setTimeout( function(){
				linkElement.attr( 'data-scrollto-settings', JSON.stringify( linkElSettings ) );
				$pageSectionElLs = $('[data-scrollto-settings]');
			}, 1000);
		}

	});

	$linkScrollEl.off( 'click' ).on( 'click', function(){
		let linkEl			= $(this),
			linkElAnchor	= linkEl.attr('data-scrollto'),
			linkElement		= $( linkElAnchor );

		if( linkEl.parents('.primary-menu').hasClass('on-click') ) { return true; }

		if( linkElement.length > 0 ) {

			let linkElSettings = JSON.parse( linkElement.attr('data-scrollto-settings') );

			$('html,body').stop(true).animate({
				'scrollTop': linkElement.offset().top - Number( linkElSettings.offset )
			}, Number( linkElSettings.speed ), linkElSettings.easing, function(){
				if( linkElSettings.highlight ) {
					if( linkElement.find('.highlight-me').length > 0 ) {
						linkElement.find('.highlight-me').animate({'backgroundColor': linkElSettings.highlight}, 300);
						setTimeout( function(){
							linkElement.find('.highlight-me').animate({'backgroundColor': 'transparent'}, 300);
						}, 500 );
					} else {
						linkElement.animate({'backgroundColor': linkElSettings.highlight}, 300);
						setTimeout( function(){
							linkElement.animate({'backgroundColor': 'transparent'}, 300);
						}, 500 );
					}
				}
			});

			return false;
		}
	});

};

window.SEMICOLON_linkScrollSettings = function( hash, element ) {

	if( typeof hash === 'undefined' && element.length < 1 ) {
		return true;
	}

	let settings	= {},
		offsetTop	= $( hash ).offset().top,
		elSpeed		= element.attr( 'data-speed' ) || 1250,
		elOffset	= element.attr( 'data-offset' ) || SEMICOLON.initialize.topScrollOffset(),
		elEasing	= element.attr( 'data-easing' ) || 'easeOutQuad',
		elHighlight	= element.attr( 'data-highlight' );

	let elOffsetXXL	= element.attr( 'data-offset-xxl' ),
		elOffsetXL	= element.attr( 'data-offset-xl' ),
		elOffsetLG	= element.attr( 'data-offset-lg' ),
		elOffsetMD	= element.attr( 'data-offset-md' ),
		elOffsetSM	= element.attr( 'data-offset-sm' ),
		elOffsetXS	= element.attr( 'data-offset-xs' );

	if( !elOffsetXS ) { elOffsetXS = elOffset; }
	if( !elOffsetSM ) { elOffsetSM = elOffsetXS; }
	if( !elOffsetMD ) { elOffsetMD = elOffsetSM; }
	if( !elOffsetLG ) { elOffsetLG = elOffsetMD; }
	if( !elOffsetXL ) { elOffsetXL = elOffsetLG; }
	if( !elOffsetXXL ) { elOffsetXXL = elOffsetXL; }

	if( $bodyLs.hasClass('device-xxl') ) {
		elOffset = elOffsetXXL;
	} else if( $bodyLs.hasClass('device-xl') ) {
		elOffset = elOffsetXL;
	} else if( $bodyLs.hasClass('device-lg') ) {
		elOffset = elOffsetLG;
	} else if( $bodyLs.hasClass('device-md') ) {
		elOffset = elOffsetMD;
	} else if( $bodyLs.hasClass('device-sm') ) {
		elOffset = elOffsetSM;
	} else if( $bodyLs.hasClass('device-xs') ) {
		elOffset = elOffsetXS;
	}

	settings.offset = Number(elOffset);

	settings.speed = elSpeed;
	settings.easing = elEasing;
	settings.highlight = elHighlight;

	return settings;

};

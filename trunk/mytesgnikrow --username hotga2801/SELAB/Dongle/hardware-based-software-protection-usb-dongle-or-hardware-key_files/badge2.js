(function(){var E="http://buzz.yahoo.com";var m=window.location.href;var e="http://l.yimg.com/ds/orion";var g="1.0.15.37";var w=e+"/"+g;var f="http://votes.buzz.yahoo.com";var i="us";var x="en-US";var F="en";var r=window.yahooBuzzOnLoad||function(){};var k=window.yahooBuzzBadgeType;var h=window.yahooBuzzShowBranding;var c=window.yahooBuzzArticleId;var t=window.yahooBuzzArticleHeadline;var A=window.yahooBuzzArticleSummary;var C=window.yahooBuzzArticleCategory;var q=window.yahooBuzzArticleTargetUrl;var B=window.yahooBuzzArticleType;var z=function(I,P,T,R,L){var M=P[0];var S=P[1];var J=(t&&typeof(t)==="string")?t:"";var O=(A&&typeof(A)==="string")?A:"";var H=(C&&typeof(C)==="string")?C:"";if(H.indexOf("_"+x)===-1&&H!==""){H=H.toLowerCase()+"_"+x;}var K=(q&&typeof(q)==="string")?q:"";var N=(B&&typeof(B)==="string")?B:"text";var Q=(M==="")?"pub":"publisher";n({name:"from",value:Q});n({name:"assettype",value:N});n({name:"publisherurn",value:M});n({name:"guid",value:S});n({name:"loc",value:m});n({name:"votetype",value:1});n({name:"market",value:i});n({name:"language",value:x});if(J!==""){n({name:"headline",value:J});}if(O!==""){n({name:"summary",value:O});}if(H!==""){n({name:"category",value:H});}if(K!==""){n({name:"targetUrl",value:K});}var G=s+"/buzz";if(M===""){G+="?targetUrl="+encodeURIComponent(S);}else{G+="?publisherurn="+encodeURIComponent(M)+"&guid="+encodeURIComponent(S)+"&targetUrl="+encodeURIComponent(K);}y(I,T,R,G,L,M,S,K);r.call(I);};var b=[];var o=function(J,H){var G=document.createElement(J);G.attachEventListener=v;G.removeEventListener=v;G.attachEvent=v;G.detatchEvent=v;for(var K in H){if(K==="style"){for(var I in H[K]){G.style[I]=H[K][I];}}else{G[K]=H[K];}}return G;};var y=function(J,N,ak,ag,T,aa,L,K){var aj;var O=false;var P=J.id+"-votes";var I="Buzz up!";var W="vote now";var H="vote<br>now";var ae="on Yahoo!";var am='<span style="cursor:pointer;cursor:hand;color:#666;line-height:10px;display:block;margin-top:3px;font-size:10px;font-family:Verdana,Tahoma,Arial,Helvetica,sans-serif;padding-right:5px;">'+ae+"</span>";var Q='<span style="cursor:pointer;cursor:hand;background:transparent url('+w+"/img/badge-small-"+F+'.png) top left no-repeat;display:block;height:0;padding-top:22px;width:74px;text-indent:-999em;overflow:hidden;float:left">'+I+"</span>";var V='<span style="cursor:pointer;cursor:hand;background:transparent url('+w+"/img/badge-medium-"+F+'.png) top left no-repeat;display:block;height:0;padding-top:27px;width:91px;text-indent:-999em;overflow:hidden;float:left">'+I+"</span>";var al='<span style="cursor:pointer;cursor:hand;background:transparent url('+w+"/img/badge-large-"+F+'.png) top left no-repeat;display:block;height:0;padding-top:33px;width:109px;text-indent:-999em;overflow:hidden;float:left">'+I+"</span>";var S='<span style="cursor:pointer;cursor:hand;position:relative;padding-left:20px;line-height:16px;"><span style="cursor:pointer;cursor:hand;display:block;position:absolute;top:0;left:0;background:transparent url('+w+'/img/badge-logo.png) top left no-repeat;height:16px;width:16px;"></span></span>';var ad='<span style="cursor:pointer;cursor:hand;position:relative;padding-left:20px;line-height:16px;"><span style="cursor:pointer;cursor:hand;display:block;position:absolute;top:0;left:0;background:transparent url('+w+'/img/badge-logo.png) top left no-repeat;height:16px;width:16px;"></span>'+I+"</span>";var Z='<span style="cursor:pointer;cursor:hand;position:relative;left:-4px;padding-left:24px;font-size:80%;font-family:Verdana,Tahoma,Helvetica,Arial,sans-serif;display:block;line-height:22px;height:22px;color:#00c;background:url('+w+'/img/badge-textbutton.png) left center no-repeat;">'+I+"</span>";var U='<span style="margin-top:-1px;*margin-top:3px;cursor:pointer;cursor:hand;display:block;height:0;padding-top:25px;width:51px;text-indent:-999em;overflow:hidden;background:transparent url('+w+"/img/badge-square-button-"+F+'.gif) top left no-repeat">'+I+"</span>";var ac='<span id="'+P+'" style="text-align:left;cursor:pointer;cursor:hand;color:#666;font-family:Verdana,Tahoma,Arial,Helvetica,sans-serif;';var M="</span>";var G=ac+'padding-left:4px;_padding-left:1px;display:inline; width:82px; font-size:10px; line-height:22px">'+W+M;var R=ac+'padding-left:4px;_padding-left:1px;display:inline; width:88px; font-size:10px; line-height:27px">'+W+M;var X=ac+'padding-left:4px;_padding-left:1px;display:inline; width:91px; font-size:11px; line-height:33px">'+W+M;var ai=ac+"display:block;text-align:center;font-size:11px;line-height:20px;padding-top:5px;background:transparent url("+w+"/img/badge-square-bg-"+F+'.gif) top left no-repeat;width:51px;height:52px">'+H+M;var af='<span style="cursor:pointer;cursor:hand;position:relative;padding-left:20px;line-height:16px;" id="'+P+'"><span style="cursor:pointer;cursor:hand;display:block;position:absolute;top:0;left:0;background:transparent url('+w+'/img/badge-logo.png) top left no-repeat;height:16px;width:16px;"></span>'+I+"</span>";var ab={form:J,href:ag,onclick:j,title:"Vote for your favorite stories on Yahoo! Buzz"};var ah={textDecoration:"none",width:"74px",display:"block"};if(ak){ah.textAlign="right";}switch(N){case"text":aj=ad;break;case"textbutton":aj=Z;ah.target="_new";ah.width="auto";ah.position="relative";ah.left="4px";ah.display="block";ah.width="80px";ah.background="url("+w+"/img/badge-textbutton.png) right center no-repeat";ab.style=ah;break;case"text-votes":O=true;aj=af;break;case"small":aj=Q;if(ak){aj+=am;}ab.style=ah;break;case"small-votes":O=true;aj=Q+G;ah.width="159px";ab.style=ah;break;case"large":aj=al;if(ak){aj+=am;}ah.width="109px";ab.style=ah;break;case"large-votes":O=true;aj=al+X;ab.style=ah;ah.width="203px";break;case"logo":aj=S;break;case"square":O=true;aj=ai+U;ah.width="51px";ab.style=ah;break;case"medium-votes":O=true;aj=V+R;ah.width="182px";ab.style=ah;break;case"medium":default:aj=V;if(ak){aj+=am;}ah.width="91px";ab.style=ah;break;}ab.innerHTML=aj;var Y=o("span",{id:a,className:"yahooBuzzBadge yahooBuzzBadge-"+N});Y.appendChild(o("a",ab));J.id=J.id+"-form";T.parentNode.insertBefore(Y,T);T.parentNode.removeChild(T);if(O){p(N,aa,L,K,P);}l();};var u=function(G,H,J){var I=document.createElement("script");I.type="text/javascript";I.src=f+"/article/V1/votecount?format=badge&badgetype="+encodeURIComponent(G)+"&publisherurn="+encodeURIComponent(H)+"&guid="+encodeURIComponent(J)+"&region="+encodeURIComponent(i)+"&lang="+encodeURIComponent(x)+"&host="+encodeURIComponent(w);I.charset="utf-8";document.getElementsByTagName("head")[0].appendChild(I);};var p=function(O,K,M,I,J){var H=K+"_"+M+"_"+i+"_"+x+"_"+O;if(typeof(window.yahooBuzzBadgeVoteCountValues)==="undefined"){window.yahooBuzzBadgeVoteCountValues={};window.yahooBuzzBadgeVoteCountValues[H]="";}if(typeof(window.yahooBuzzBadgeVoteCountIds)==="undefined"){window.yahooBuzzBadgeVoteCountIds={};window.yahooBuzzBadgeVoteCountIds[H]=[];}if(window.yahooBuzzBadgeVoteCountValues[H]&&window.yahooBuzzBadgeVoteCountValues[H]!==""){if(document.getElementById(J)){document.getElementById(J).innerHTML=window.yahooBuzzBadgeVoteCountValues[H];}}else{window.yahooBuzzBadgeVoteCountValues[H]="";var N=false;if(window.yahooBuzzBadgeVoteCountIds[H]){var G=window.yahooBuzzBadgeVoteCountIds[H];if(G.length===0){N=true;}G.push(J);window.yahooBuzzBadgeVoteCountIds[H]=G;}else{window.yahooBuzzBadgeVoteCountIds[H]=[J];N=true;}if(N){var L=function(){u(O,K,M);};window.setTimeout(L,750);}}};var n=function(H){var G=o("input",H);b.push(G);};var j=function(I){I=I||window.event;var G=I.target||I.srcElement;while(G&&G.tagName!=="A"){G=G.parentNode;}if(!G){return true;}var H=G.form;D(H);if(typeof(I.preventDefault)==="function"){I.preventDefault();}I.returnValue=false;I.cancelBubble=true;I.stopPropagation&&I.stopPropagation();return false;};var v=function(G){return true;};var D=function(K){if(!K){return true;}for(var J=b.length-1;J>-1;J--){K.appendChild(b[J]);}K.onsubmit=v;document.body.appendChild(K);K.submit();var H=K.getElementsByTagName("input");for(var J=0,G=H.length;J<G;J++){try{H[J].parentNode.removeChild(H[J]);}catch(I){continue;}}K.parentNode.removeChild(K);};var a=function(){return"yahooBuzzBadge-"+Math.floor(Math.random()*10000000)+252+new Date().valueOf().toString();}();var d=function(){var H=a;for(var G=0;G<5;G++){H+=String.fromCharCode(Math.floor(Math.random()*26)+97);}document.write('<span id="'+H+'" style="position:absolute;left:-999em;height:0;width:0;"></span>');return document.getElementById(H);}();d.____yb=1;var l;var s;window.setTimeout(function(){l=function(){if(d&&d.parentNode){d.parentNode.removeChild(d);}J=null;};var H=function(){if(!d){return undefined;}var M=d;while(M&&(!M.tagName||M.tagName!=="SCRIPT")){if(M&&M.previousSibling&&M.previousSibling.tagName&&M.previousSibling.childNodes.length){M=M.previousSibling.lastChild;}else{if(M===M.parentNode.firstChild){M=M.parentNode;}else{M=M.previousSibling;}}}if(!M){return undefined;}M.____yb=1;return M;}();s=E;var K=function(){var M="";if(c&&typeof(c)==="string"){M=c;}else{if(H&&H.innerHTML&&H.src){M=H.innerHTML.replace(/[\n\r\s\t]+/g," ").replace(/^\s+/,"").replace(/\s+$/,"");}}M=M.split(":");if(M[0]===""||M[0]==="ARTICLEURL"){return["",window.location.href];}else{if(M[0]==="http"||M[0]==="https"){return["",M.join(":")];}else{return[M.shift(),M.join(":")];}}}();var I=function(){var M;if(k&&typeof(k)==="string"){M=k;}else{if(H){M=H.getAttribute("badgetype");}}return M||"medium";}();var L=function(){var M;if(h&&typeof(h)!=="undefined"){M=h;}else{if(H){M=H.getAttribute("showbranding");}}if(!isNaN(M)){M=(+M);}else{if(M==="false"||M==="no"||M==="off"){M=false;}}return !!M;}();var G=document.getElementById(a)||d;G.____yb=1;var J=function(){if(!G){return undefined;}var M=o("form",{id:a+"-form","accept-charset":"utf-8",className:"yahooBuzzBadge-form",action:s+"/vote/",method:"post",target:"_new",____yb:1,style:{position:"absolute",height:"1px",width:"1px",visibility:"hidden"}});G.id="";return M;}();z(J,K,I,L,G);},0);})();
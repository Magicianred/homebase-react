goog.provide('sablono.core');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
/**
 * The React.js create element function.
 */
sablono.core.create_element = module$node_modules$react$index.createElement;
/**
 * The React.js Fragment.
 */
sablono.core.fragment = module$node_modules$react$index.Fragment;
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__15709__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__15400 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__15401 = cljs.core.seq(vec__15400);
var first__15402 = cljs.core.first(seq__15401);
var seq__15401__$1 = cljs.core.next(seq__15401);
var tag = first__15402;
var body = seq__15401__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__15709 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15710__i = 0, G__15710__a = new Array(arguments.length -  0);
while (G__15710__i < G__15710__a.length) {G__15710__a[G__15710__i] = arguments[G__15710__i + 0]; ++G__15710__i;}
  args = new cljs.core.IndexedSeq(G__15710__a,0,null);
} 
return G__15709__delegate.call(this,args);};
G__15709.cljs$lang$maxFixedArity = 0;
G__15709.cljs$lang$applyTo = (function (arglist__15718){
var args = cljs.core.seq(arglist__15718);
return G__15709__delegate(args);
});
G__15709.cljs$core$IFn$_invoke$arity$variadic = G__15709__delegate;
return G__15709;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4529__auto__ = (function sablono$core$update_arglists_$_iter__15407(s__15408){
return (new cljs.core.LazySeq(null,(function (){
var s__15408__$1 = s__15408;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__15408__$1);
if(temp__5735__auto__){
var s__15408__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15408__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__15408__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__15410 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__15409 = (0);
while(true){
if((i__15409 < size__4528__auto__)){
var args = cljs.core._nth(c__4527__auto__,i__15409);
cljs.core.chunk_append(b__15410,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__15719 = (i__15409 + (1));
i__15409 = G__15719;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15410),sablono$core$update_arglists_$_iter__15407(cljs.core.chunk_rest(s__15408__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15410),null);
}
} else {
var args = cljs.core.first(s__15408__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__15407(cljs.core.rest(s__15408__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15720 = arguments.length;
var i__4737__auto___15721 = (0);
while(true){
if((i__4737__auto___15721 < len__4736__auto___15720)){
args__4742__auto__.push((arguments[i__4737__auto___15721]));

var G__15722 = (i__4737__auto___15721 + (1));
i__4737__auto___15721 = G__15722;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4529__auto__ = (function sablono$core$iter__15423(s__15424){
return (new cljs.core.LazySeq(null,(function (){
var s__15424__$1 = s__15424;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__15424__$1);
if(temp__5735__auto__){
var s__15424__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15424__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__15424__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__15426 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__15425 = (0);
while(true){
if((i__15425 < size__4528__auto__)){
var style = cljs.core._nth(c__4527__auto__,i__15425);
cljs.core.chunk_append(b__15426,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__15723 = (i__15425 + (1));
i__15425 = G__15723;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15426),sablono$core$iter__15423(cljs.core.chunk_rest(s__15424__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15426),null);
}
} else {
var style = cljs.core.first(s__15424__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__15423(cljs.core.rest(s__15424__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(styles);
}));

(sablono.core.include_css.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sablono.core.include_css.cljs$lang$applyTo = (function (seq15418){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15418));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js("http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to15432 = (function sablono$core$link_to15432(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15724 = arguments.length;
var i__4737__auto___15725 = (0);
while(true){
if((i__4737__auto___15725 < len__4736__auto___15724)){
args__4742__auto__.push((arguments[i__4737__auto___15725]));

var G__15726 = (i__4737__auto___15725 + (1));
i__4737__auto___15725 = G__15726;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to15432.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.link_to15432.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to15432.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to15432.cljs$lang$applyTo = (function (seq15433){
var G__15434 = cljs.core.first(seq15433);
var seq15433__$1 = cljs.core.next(seq15433);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15434,seq15433__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to15432);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to15435 = (function sablono$core$mail_to15435(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15727 = arguments.length;
var i__4737__auto___15728 = (0);
while(true){
if((i__4737__auto___15728 < len__4736__auto___15727)){
args__4742__auto__.push((arguments[i__4737__auto___15728]));

var G__15729 = (i__4737__auto___15728 + (1));
i__4737__auto___15728 = G__15729;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to15435.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.mail_to15435.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__15438){
var vec__15439 = p__15438;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15439,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4126__auto__ = content;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to15435.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to15435.cljs$lang$applyTo = (function (seq15436){
var G__15437 = cljs.core.first(seq15436);
var seq15436__$1 = cljs.core.next(seq15436);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15437,seq15436__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to15435);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list15443 = (function sablono$core$unordered_list15443(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4529__auto__ = (function sablono$core$unordered_list15443_$_iter__15446(s__15447){
return (new cljs.core.LazySeq(null,(function (){
var s__15447__$1 = s__15447;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__15447__$1);
if(temp__5735__auto__){
var s__15447__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15447__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__15447__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__15449 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__15448 = (0);
while(true){
if((i__15448 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__15448);
cljs.core.chunk_append(b__15449,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__15736 = (i__15448 + (1));
i__15448 = G__15736;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15449),sablono$core$unordered_list15443_$_iter__15446(cljs.core.chunk_rest(s__15447__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15449),null);
}
} else {
var x = cljs.core.first(s__15447__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list15443_$_iter__15446(cljs.core.rest(s__15447__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list15443);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list15454 = (function sablono$core$ordered_list15454(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4529__auto__ = (function sablono$core$ordered_list15454_$_iter__15457(s__15458){
return (new cljs.core.LazySeq(null,(function (){
var s__15458__$1 = s__15458;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__15458__$1);
if(temp__5735__auto__){
var s__15458__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15458__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__15458__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__15460 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__15459 = (0);
while(true){
if((i__15459 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__15459);
cljs.core.chunk_append(b__15460,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__15737 = (i__15459 + (1));
i__15459 = G__15737;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15460),sablono$core$ordered_list15454_$_iter__15457(cljs.core.chunk_rest(s__15458__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15460),null);
}
} else {
var x = cljs.core.first(s__15458__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list15454_$_iter__15457(cljs.core.rest(s__15458__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list15454);
/**
 * Create an image element.
 */
sablono.core.image15464 = (function sablono$core$image15464(var_args){
var G__15469 = arguments.length;
switch (G__15469) {
case 1:
return sablono.core.image15464.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image15464.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image15464.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image15464.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image15464.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image15464);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__15471_SHARP_,p2__15472_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__15471_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__15472_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__15473_SHARP_,p2__15474_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__15473_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__15474_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__15476 = arguments.length;
switch (G__15476) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3);

/**
 * Creates a color input field.
 */
sablono.core.color_field15477 = (function sablono$core$color_field15477(var_args){
var G__15498 = arguments.length;
switch (G__15498) {
case 1:
return sablono.core.color_field15477.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field15477.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field15477.cljs$core$IFn$_invoke$arity$1 = (function (name__15390__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__15390__auto__);
}));

(sablono.core.color_field15477.cljs$core$IFn$_invoke$arity$2 = (function (name__15390__auto__,value__15391__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__15390__auto__,value__15391__auto__);
}));

(sablono.core.color_field15477.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field15477);

/**
 * Creates a date input field.
 */
sablono.core.date_field15499 = (function sablono$core$date_field15499(var_args){
var G__15501 = arguments.length;
switch (G__15501) {
case 1:
return sablono.core.date_field15499.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field15499.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field15499.cljs$core$IFn$_invoke$arity$1 = (function (name__15390__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__15390__auto__);
}));

(sablono.core.date_field15499.cljs$core$IFn$_invoke$arity$2 = (function (name__15390__auto__,value__15391__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__15390__auto__,value__15391__auto__);
}));

(sablono.core.date_field15499.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field15499);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field15529 = (function sablono$core$datetime_field15529(var_args){
var G__15531 = arguments.length;
switch (G__15531) {
case 1:
return sablono.core.datetime_field15529.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field15529.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field15529.cljs$core$IFn$_invoke$arity$1 = (function (name__15390__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__15390__auto__);
}));

(sablono.core.datetime_field15529.cljs$core$IFn$_invoke$arity$2 = (function (name__15390__auto__,value__15391__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__15390__auto__,value__15391__auto__);
}));

(sablono.core.datetime_field15529.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field15529);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field15532 = (function sablono$core$datetime_local_field15532(var_args){
var G__15534 = arguments.length;
switch (G__15534) {
case 1:
return sablono.core.datetime_local_field15532.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field15532.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field15532.cljs$core$IFn$_invoke$arity$1 = (function (name__15390__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__15390__auto__);
}));

(sablono.core.datetime_local_field15532.cljs$core$IFn$_invoke$arity$2 = (function (name__15390__auto__,value__15391__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__15390__auto__,value__15391__auto__);
}));

(sablono.core.datetime_local_field15532.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field15532);

/**
 * Creates a email input field.
 */
sablono.core.email_field15535 = (function sablono$core$email_field15535(var_args){
var G__15542 = arguments.length;
switch (G__15542) {
case 1:
return sablono.core.email_field15535.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field15535.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field15535.cljs$core$IFn$_invoke$arity$1 = (function (name__15390__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__15390__auto__);
}));

(sablono.core.email_field15535.cljs$core$IFn$_invoke$arity$2 = (function (name__15390__auto__,value__15391__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__15390__auto__,value__15391__auto__);
}));

(sablono.core.email_field15535.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field15535);

/**
 * Creates a file input field.
 */
sablono.core.file_field15543 = (function sablono$core$file_field15543(var_args){
var G__15545 = arguments.length;
switch (G__15545) {
case 1:
return sablono.core.file_field15543.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field15543.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field15543.cljs$core$IFn$_invoke$arity$1 = (function (name__15390__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__15390__auto__);
}));

(sablono.core.file_field15543.cljs$core$IFn$_invoke$arity$2 = (function (name__15390__auto__,value__15391__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__15390__auto__,value__15391__auto__);
}));

(sablono.core.file_field15543.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field15543);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field15553 = (function sablono$core$hidden_field15553(var_args){
var G__15555 = arguments.length;
switch (G__15555) {
case 1:
return sablono.core.hidden_field15553.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field15553.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field15553.cljs$core$IFn$_invoke$arity$1 = (function (name__15390__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__15390__auto__);
}));

(sablono.core.hidden_field15553.cljs$core$IFn$_invoke$arity$2 = (function (name__15390__auto__,value__15391__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__15390__auto__,value__15391__auto__);
}));

(sablono.core.hidden_field15553.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field15553);

/**
 * Creates a month input field.
 */
sablono.core.month_field15556 = (function sablono$core$month_field15556(var_args){
var G__15558 = arguments.length;
switch (G__15558) {
case 1:
return sablono.core.month_field15556.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field15556.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field15556.cljs$core$IFn$_invoke$arity$1 = (function (name__15390__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__15390__auto__);
}));

(sablono.core.month_field15556.cljs$core$IFn$_invoke$arity$2 = (function (name__15390__auto__,value__15391__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__15390__auto__,value__15391__auto__);
}));

(sablono.core.month_field15556.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field15556);

/**
 * Creates a number input field.
 */
sablono.core.number_field15580 = (function sablono$core$number_field15580(var_args){
var G__15582 = arguments.length;
switch (G__15582) {
case 1:
return sablono.core.number_field15580.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field15580.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field15580.cljs$core$IFn$_invoke$arity$1 = (function (name__15390__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__15390__auto__);
}));

(sablono.core.number_field15580.cljs$core$IFn$_invoke$arity$2 = (function (name__15390__auto__,value__15391__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__15390__auto__,value__15391__auto__);
}));

(sablono.core.number_field15580.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field15580);

/**
 * Creates a password input field.
 */
sablono.core.password_field15583 = (function sablono$core$password_field15583(var_args){
var G__15585 = arguments.length;
switch (G__15585) {
case 1:
return sablono.core.password_field15583.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field15583.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field15583.cljs$core$IFn$_invoke$arity$1 = (function (name__15390__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__15390__auto__);
}));

(sablono.core.password_field15583.cljs$core$IFn$_invoke$arity$2 = (function (name__15390__auto__,value__15391__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__15390__auto__,value__15391__auto__);
}));

(sablono.core.password_field15583.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field15583);

/**
 * Creates a range input field.
 */
sablono.core.range_field15586 = (function sablono$core$range_field15586(var_args){
var G__15588 = arguments.length;
switch (G__15588) {
case 1:
return sablono.core.range_field15586.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field15586.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field15586.cljs$core$IFn$_invoke$arity$1 = (function (name__15390__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__15390__auto__);
}));

(sablono.core.range_field15586.cljs$core$IFn$_invoke$arity$2 = (function (name__15390__auto__,value__15391__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__15390__auto__,value__15391__auto__);
}));

(sablono.core.range_field15586.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field15586);

/**
 * Creates a search input field.
 */
sablono.core.search_field15601 = (function sablono$core$search_field15601(var_args){
var G__15603 = arguments.length;
switch (G__15603) {
case 1:
return sablono.core.search_field15601.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field15601.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field15601.cljs$core$IFn$_invoke$arity$1 = (function (name__15390__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__15390__auto__);
}));

(sablono.core.search_field15601.cljs$core$IFn$_invoke$arity$2 = (function (name__15390__auto__,value__15391__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__15390__auto__,value__15391__auto__);
}));

(sablono.core.search_field15601.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field15601);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field15604 = (function sablono$core$tel_field15604(var_args){
var G__15606 = arguments.length;
switch (G__15606) {
case 1:
return sablono.core.tel_field15604.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field15604.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field15604.cljs$core$IFn$_invoke$arity$1 = (function (name__15390__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__15390__auto__);
}));

(sablono.core.tel_field15604.cljs$core$IFn$_invoke$arity$2 = (function (name__15390__auto__,value__15391__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__15390__auto__,value__15391__auto__);
}));

(sablono.core.tel_field15604.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field15604);

/**
 * Creates a text input field.
 */
sablono.core.text_field15607 = (function sablono$core$text_field15607(var_args){
var G__15609 = arguments.length;
switch (G__15609) {
case 1:
return sablono.core.text_field15607.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field15607.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field15607.cljs$core$IFn$_invoke$arity$1 = (function (name__15390__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__15390__auto__);
}));

(sablono.core.text_field15607.cljs$core$IFn$_invoke$arity$2 = (function (name__15390__auto__,value__15391__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__15390__auto__,value__15391__auto__);
}));

(sablono.core.text_field15607.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field15607);

/**
 * Creates a time input field.
 */
sablono.core.time_field15610 = (function sablono$core$time_field15610(var_args){
var G__15612 = arguments.length;
switch (G__15612) {
case 1:
return sablono.core.time_field15610.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field15610.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field15610.cljs$core$IFn$_invoke$arity$1 = (function (name__15390__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__15390__auto__);
}));

(sablono.core.time_field15610.cljs$core$IFn$_invoke$arity$2 = (function (name__15390__auto__,value__15391__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__15390__auto__,value__15391__auto__);
}));

(sablono.core.time_field15610.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field15610);

/**
 * Creates a url input field.
 */
sablono.core.url_field15613 = (function sablono$core$url_field15613(var_args){
var G__15615 = arguments.length;
switch (G__15615) {
case 1:
return sablono.core.url_field15613.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field15613.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field15613.cljs$core$IFn$_invoke$arity$1 = (function (name__15390__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__15390__auto__);
}));

(sablono.core.url_field15613.cljs$core$IFn$_invoke$arity$2 = (function (name__15390__auto__,value__15391__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__15390__auto__,value__15391__auto__);
}));

(sablono.core.url_field15613.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field15613);

/**
 * Creates a week input field.
 */
sablono.core.week_field15661 = (function sablono$core$week_field15661(var_args){
var G__15663 = arguments.length;
switch (G__15663) {
case 1:
return sablono.core.week_field15661.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field15661.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field15661.cljs$core$IFn$_invoke$arity$1 = (function (name__15390__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__15390__auto__);
}));

(sablono.core.week_field15661.cljs$core$IFn$_invoke$arity$2 = (function (name__15390__auto__,value__15391__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__15390__auto__,value__15391__auto__);
}));

(sablono.core.week_field15661.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field15661);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box15664 = (function sablono$core$check_box15664(var_args){
var G__15666 = arguments.length;
switch (G__15666) {
case 1:
return sablono.core.check_box15664.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box15664.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box15664.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box15664.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box15664.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box15664.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box15664.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box15664);
/**
 * Creates a radio button.
 */
sablono.core.radio_button15670 = (function sablono$core$radio_button15670(var_args){
var G__15672 = arguments.length;
switch (G__15672) {
case 1:
return sablono.core.radio_button15670.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button15670.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button15670.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button15670.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button15670.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button15670.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button15670.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button15670);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options15673 = (function sablono$core$select_options15673(coll){
var iter__4529__auto__ = (function sablono$core$select_options15673_$_iter__15674(s__15675){
return (new cljs.core.LazySeq(null,(function (){
var s__15675__$1 = s__15675;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__15675__$1);
if(temp__5735__auto__){
var s__15675__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15675__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__15675__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__15677 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__15676 = (0);
while(true){
if((i__15676 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__15676);
cljs.core.chunk_append(b__15677,((cljs.core.sequential_QMARK_(x))?(function (){var vec__15678 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15678,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15678,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15678,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options15673.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options15673.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options15673.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__15773 = (i__15676 + (1));
i__15676 = G__15773;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15677),sablono$core$select_options15673_$_iter__15674(cljs.core.chunk_rest(s__15675__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15677),null);
}
} else {
var x = cljs.core.first(s__15675__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__15684 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15684,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15684,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15684,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options15673.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options15673.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options15673.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options15673_$_iter__15674(cljs.core.rest(s__15675__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options15673);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down15687 = (function sablono$core$drop_down15687(var_args){
var G__15689 = arguments.length;
switch (G__15689) {
case 2:
return sablono.core.drop_down15687.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down15687.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down15687.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down15687.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down15687.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),sablono.core.select_options(options,selected)], null);
}));

(sablono.core.drop_down15687.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down15687);
/**
 * Creates a text area element.
 */
sablono.core.text_area15690 = (function sablono$core$text_area15690(var_args){
var G__15692 = arguments.length;
switch (G__15692) {
case 1:
return sablono.core.text_area15690.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area15690.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area15690.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area15690.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area15690.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area15690);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label15693 = (function sablono$core$label15693(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label15693);
/**
 * Creates a submit button.
 */
sablono.core.submit_button15694 = (function sablono$core$submit_button15694(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button15694);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button15701 = (function sablono$core$reset_button15701(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button15701);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to15702 = (function sablono$core$form_to15702(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15779 = arguments.length;
var i__4737__auto___15780 = (0);
while(true){
if((i__4737__auto___15780 < len__4736__auto___15779)){
args__4742__auto__.push((arguments[i__4737__auto___15780]));

var G__15781 = (i__4737__auto___15780 + (1));
i__4737__auto___15780 = G__15781;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to15702.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.form_to15702.cljs$core$IFn$_invoke$arity$variadic = (function (p__15705,body){
var vec__15706 = p__15705;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15706,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15706,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
}));

(sablono.core.form_to15702.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to15702.cljs$lang$applyTo = (function (seq15703){
var G__15704 = cljs.core.first(seq15703);
var seq15703__$1 = cljs.core.next(seq15703);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15704,seq15703__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to15702);

//# sourceMappingURL=sablono.core.js.map

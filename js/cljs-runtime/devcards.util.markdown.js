goog.provide('devcards.util.markdown');
var module$node_modules$marked$lib$marked=shadow.js.require("module$node_modules$marked$lib$marked", {});
devcards.util.markdown.leading_space_count = (function devcards$util$markdown$leading_space_count(s){
var temp__5735__auto__ = cljs.core.second(cljs.core.re_matches(/^([\s]*).*/,s));
if(cljs.core.truth_(temp__5735__auto__)){
var ws = temp__5735__auto__;
return ws.length;
} else {
return null;
}
});
devcards.util.markdown.is_bullet_item_QMARK_ = (function devcards$util$markdown$is_bullet_item_QMARK_(s){
return cljs.core.boolean$(cljs.core.re_matches(/^\s*([-*+]|[0-9]+\.)\s.*/,s));
});
/**
 * Find the common left edge of bullet lists in a collection of lines.
 */
devcards.util.markdown.bullets_left_edge = (function devcards$util$markdown$bullets_left_edge(lines){
var or__4126__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(devcards.util.markdown.leading_space_count,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(devcards.util.markdown.is_bullet_item_QMARK_,lines)));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
});
/**
 * Strip the left margin's extra whitespace, but leave bullet list indents in tact.
 */
devcards.util.markdown.strip_left_margin = (function devcards$util$markdown$strip_left_margin(s,margin){
if(devcards.util.markdown.is_bullet_item_QMARK_(s)){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,margin);
} else {
return clojure.string.trim(s);
}
});
devcards.util.markdown.markdown_to_html = (function devcards$util$markdown$markdown_to_html(markdown_txt){
return DevcardsMarked(markdown_txt);
});
devcards.util.markdown.matches_delim_QMARK_ = (function devcards$util$markdown$matches_delim_QMARK_(line){
return cljs.core.re_matches(/^[\s]*```(\w*).*/,line);
});
if((typeof devcards !== 'undefined') && (typeof devcards.util !== 'undefined') && (typeof devcards.util.markdown !== 'undefined') && (typeof devcards.util.markdown.block_parser !== 'undefined')){
} else {
devcards.util.markdown.block_parser = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__17605 = cljs.core.get_global_hierarchy;
return (fexpr__17605.cljs$core$IFn$_invoke$arity$0 ? fexpr__17605.cljs$core$IFn$_invoke$arity$0() : fexpr__17605.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devcards.util.markdown","block-parser"),(function (p__17606,line){
var map__17607 = p__17606;
var map__17607__$1 = (((((!((map__17607 == null))))?(((((map__17607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17607.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17607):map__17607);
var stage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17607__$1,new cljs.core.Keyword(null,"stage","stage",1843544772));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(devcards.util.markdown.matches_delim_QMARK_(line))?new cljs.core.Keyword(null,"delim","delim",1621565472):new cljs.core.Keyword(null,"line","line",212345235)),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(stage)], null);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
devcards.util.markdown.block_parser.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"markdown","markdown",1227225089)], null),(function (p__17609,line){
var map__17610 = p__17609;
var map__17610__$1 = (((((!((map__17610 == null))))?(((((map__17610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17610.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17610):map__17610);
var st = map__17610__$1;
var stage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17610__$1,new cljs.core.Keyword(null,"stage","stage",1843544772));
var left_margin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17610__$1,new cljs.core.Keyword(null,"left-margin","left-margin",1869643147));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(st,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stage","stage",1843544772),new cljs.core.Keyword(null,"content","content",15833224)], null),cljs.core.conj,devcards.util.markdown.strip_left_margin(line,left_margin));
}));
devcards.util.markdown.block_parser.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"code-block","code-block",-2113425141)], null),(function (p__17612,line){
var map__17613 = p__17612;
var map__17613__$1 = (((((!((map__17613 == null))))?(((((map__17613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17613.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17613):map__17613);
var st = map__17613__$1;
var stage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17613__$1,new cljs.core.Keyword(null,"stage","stage",1843544772));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(st,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stage","stage",1843544772),new cljs.core.Keyword(null,"content","content",15833224)], null),cljs.core.conj,cljs.core.subs.cljs$core$IFn$_invoke$arity$2(line,new cljs.core.Keyword(null,"leading-spaces","leading-spaces",1148061085).cljs$core$IFn$_invoke$arity$1(stage)));
}));
devcards.util.markdown.block_parser.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delim","delim",1621565472),new cljs.core.Keyword(null,"markdown","markdown",1227225089)], null),(function (p__17619,line){
var map__17620 = p__17619;
var map__17620__$1 = (((((!((map__17620 == null))))?(((((map__17620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17620.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17620):map__17620);
var st = map__17620__$1;
var stage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17620__$1,new cljs.core.Keyword(null,"stage","stage",1843544772));
var accum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17620__$1,new cljs.core.Keyword(null,"accum","accum",-1892427250));
var lang = cljs.core.second(devcards.util.markdown.matches_delim_QMARK_(line));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(st,new cljs.core.Keyword(null,"accum","accum",-1892427250),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(accum,stage)),new cljs.core.Keyword(null,"stage","stage",1843544772),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"code-block","code-block",-2113425141),new cljs.core.Keyword(null,"lang","lang",-1819677104),((clojure.string.blank_QMARK_(lang))?null:lang),new cljs.core.Keyword(null,"leading-spaces","leading-spaces",1148061085),devcards.util.markdown.leading_space_count(line),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.PersistentVector.EMPTY], null));
}));
devcards.util.markdown.block_parser.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delim","delim",1621565472),new cljs.core.Keyword(null,"code-block","code-block",-2113425141)], null),(function (p__17627,line){
var map__17628 = p__17627;
var map__17628__$1 = (((((!((map__17628 == null))))?(((((map__17628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17628.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17628):map__17628);
var st = map__17628__$1;
var stage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17628__$1,new cljs.core.Keyword(null,"stage","stage",1843544772));
var accum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17628__$1,new cljs.core.Keyword(null,"accum","accum",-1892427250));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(st,new cljs.core.Keyword(null,"accum","accum",-1892427250),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(accum,stage)),new cljs.core.Keyword(null,"stage","stage",1843544772),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"markdown","markdown",1227225089),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.PersistentVector.EMPTY], null));
}));
devcards.util.markdown.parse_out_blocks_STAR_ = (function devcards$util$markdown$parse_out_blocks_STAR_(m){
var lines = clojure.string.split.cljs$core$IFn$_invoke$arity$2(m,"\n");
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(devcards.util.markdown.block_parser,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stage","stage",1843544772),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"markdown","markdown",1227225089),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.PersistentVector.EMPTY], null),new cljs.core.Keyword(null,"accum","accum",-1892427250),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"left-margin","left-margin",1869643147),devcards.util.markdown.bullets_left_edge(lines)], null),lines);
});
devcards.util.markdown.parse_out_blocks = (function devcards$util$markdown$parse_out_blocks(m){
var map__17631 = devcards.util.markdown.parse_out_blocks_STAR_(m);
var map__17631__$1 = (((((!((map__17631 == null))))?(((((map__17631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17631.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17631):map__17631);
var stage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17631__$1,new cljs.core.Keyword(null,"stage","stage",1843544772));
var accum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17631__$1,new cljs.core.Keyword(null,"accum","accum",-1892427250));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(x,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224)], null),(function (p1__17630_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",p1__17630_SHARP_);
}));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__17633){
var map__17634 = p__17633;
var map__17634__$1 = (((((!((map__17634 == null))))?(((((map__17634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17634):map__17634);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17634__$1,new cljs.core.Keyword(null,"content","content",15833224));
return cljs.core.not_empty(content);
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(accum,stage)));
});

//# sourceMappingURL=devcards.util.markdown.js.map

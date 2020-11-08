goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__12165 = arguments.length;
switch (G__12165) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12166 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12166 = (function (f,blockable,meta12167){
this.f = f;
this.blockable = blockable;
this.meta12167 = meta12167;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12166.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12168,meta12167__$1){
var self__ = this;
var _12168__$1 = this;
return (new cljs.core.async.t_cljs$core$async12166(self__.f,self__.blockable,meta12167__$1));
}));

(cljs.core.async.t_cljs$core$async12166.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12168){
var self__ = this;
var _12168__$1 = this;
return self__.meta12167;
}));

(cljs.core.async.t_cljs$core$async12166.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12166.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12166.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async12166.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async12166.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta12167","meta12167",265214454,null)], null);
}));

(cljs.core.async.t_cljs$core$async12166.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12166.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12166");

(cljs.core.async.t_cljs$core$async12166.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12166");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12166.
 */
cljs.core.async.__GT_t_cljs$core$async12166 = (function cljs$core$async$__GT_t_cljs$core$async12166(f__$1,blockable__$1,meta12167){
return (new cljs.core.async.t_cljs$core$async12166(f__$1,blockable__$1,meta12167));
});

}

return (new cljs.core.async.t_cljs$core$async12166(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__12171 = arguments.length;
switch (G__12171) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__12173 = arguments.length;
switch (G__12173) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__12175 = arguments.length;
switch (G__12175) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_14023 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_14023) : fn1.call(null,val_14023));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_14023) : fn1.call(null,val_14023));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__12177 = arguments.length;
switch (G__12177) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___14034 = n;
var x_14035 = (0);
while(true){
if((x_14035 < n__4613__auto___14034)){
(a[x_14035] = x_14035);

var G__14036 = (x_14035 + (1));
x_14035 = G__14036;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12178 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12178 = (function (flag,meta12179){
this.flag = flag;
this.meta12179 = meta12179;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12178.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12180,meta12179__$1){
var self__ = this;
var _12180__$1 = this;
return (new cljs.core.async.t_cljs$core$async12178(self__.flag,meta12179__$1));
}));

(cljs.core.async.t_cljs$core$async12178.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12180){
var self__ = this;
var _12180__$1 = this;
return self__.meta12179;
}));

(cljs.core.async.t_cljs$core$async12178.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12178.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async12178.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12178.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async12178.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta12179","meta12179",-1214674539,null)], null);
}));

(cljs.core.async.t_cljs$core$async12178.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12178.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12178");

(cljs.core.async.t_cljs$core$async12178.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12178");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12178.
 */
cljs.core.async.__GT_t_cljs$core$async12178 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async12178(flag__$1,meta12179){
return (new cljs.core.async.t_cljs$core$async12178(flag__$1,meta12179));
});

}

return (new cljs.core.async.t_cljs$core$async12178(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12181 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12181 = (function (flag,cb,meta12182){
this.flag = flag;
this.cb = cb;
this.meta12182 = meta12182;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12181.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12183,meta12182__$1){
var self__ = this;
var _12183__$1 = this;
return (new cljs.core.async.t_cljs$core$async12181(self__.flag,self__.cb,meta12182__$1));
}));

(cljs.core.async.t_cljs$core$async12181.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12183){
var self__ = this;
var _12183__$1 = this;
return self__.meta12182;
}));

(cljs.core.async.t_cljs$core$async12181.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12181.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async12181.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12181.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async12181.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta12182","meta12182",1765938210,null)], null);
}));

(cljs.core.async.t_cljs$core$async12181.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12181.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12181");

(cljs.core.async.t_cljs$core$async12181.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12181");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12181.
 */
cljs.core.async.__GT_t_cljs$core$async12181 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async12181(flag__$1,cb__$1,meta12182){
return (new cljs.core.async.t_cljs$core$async12181(flag__$1,cb__$1,meta12182));
});

}

return (new cljs.core.async.t_cljs$core$async12181(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12184_SHARP_){
var G__12186 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12184_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__12186) : fret.call(null,G__12186));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12185_SHARP_){
var G__12187 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12185_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__12187) : fret.call(null,G__12187));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__14052 = (i + (1));
i = G__14052;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___14053 = arguments.length;
var i__4737__auto___14054 = (0);
while(true){
if((i__4737__auto___14054 < len__4736__auto___14053)){
args__4742__auto__.push((arguments[i__4737__auto___14054]));

var G__14055 = (i__4737__auto___14054 + (1));
i__4737__auto___14054 = G__14055;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__12190){
var map__12191 = p__12190;
var map__12191__$1 = (((((!((map__12191 == null))))?(((((map__12191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12191):map__12191);
var opts = map__12191__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq12188){
var G__12189 = cljs.core.first(seq12188);
var seq12188__$1 = cljs.core.next(seq12188);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12189,seq12188__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__12194 = arguments.length;
switch (G__12194) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__12107__auto___14057 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12218){
var state_val_12219 = (state_12218[(1)]);
if((state_val_12219 === (7))){
var inst_12214 = (state_12218[(2)]);
var state_12218__$1 = state_12218;
var statearr_12220_14058 = state_12218__$1;
(statearr_12220_14058[(2)] = inst_12214);

(statearr_12220_14058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (1))){
var state_12218__$1 = state_12218;
var statearr_12221_14059 = state_12218__$1;
(statearr_12221_14059[(2)] = null);

(statearr_12221_14059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (4))){
var inst_12197 = (state_12218[(7)]);
var inst_12197__$1 = (state_12218[(2)]);
var inst_12198 = (inst_12197__$1 == null);
var state_12218__$1 = (function (){var statearr_12222 = state_12218;
(statearr_12222[(7)] = inst_12197__$1);

return statearr_12222;
})();
if(cljs.core.truth_(inst_12198)){
var statearr_12223_14060 = state_12218__$1;
(statearr_12223_14060[(1)] = (5));

} else {
var statearr_12224_14061 = state_12218__$1;
(statearr_12224_14061[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (13))){
var state_12218__$1 = state_12218;
var statearr_12225_14063 = state_12218__$1;
(statearr_12225_14063[(2)] = null);

(statearr_12225_14063[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (6))){
var inst_12197 = (state_12218[(7)]);
var state_12218__$1 = state_12218;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12218__$1,(11),to,inst_12197);
} else {
if((state_val_12219 === (3))){
var inst_12216 = (state_12218[(2)]);
var state_12218__$1 = state_12218;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12218__$1,inst_12216);
} else {
if((state_val_12219 === (12))){
var state_12218__$1 = state_12218;
var statearr_12226_14065 = state_12218__$1;
(statearr_12226_14065[(2)] = null);

(statearr_12226_14065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (2))){
var state_12218__$1 = state_12218;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12218__$1,(4),from);
} else {
if((state_val_12219 === (11))){
var inst_12207 = (state_12218[(2)]);
var state_12218__$1 = state_12218;
if(cljs.core.truth_(inst_12207)){
var statearr_12227_14066 = state_12218__$1;
(statearr_12227_14066[(1)] = (12));

} else {
var statearr_12228_14067 = state_12218__$1;
(statearr_12228_14067[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (9))){
var state_12218__$1 = state_12218;
var statearr_12229_14068 = state_12218__$1;
(statearr_12229_14068[(2)] = null);

(statearr_12229_14068[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (5))){
var state_12218__$1 = state_12218;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12230_14069 = state_12218__$1;
(statearr_12230_14069[(1)] = (8));

} else {
var statearr_12231_14070 = state_12218__$1;
(statearr_12231_14070[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (14))){
var inst_12212 = (state_12218[(2)]);
var state_12218__$1 = state_12218;
var statearr_12232_14071 = state_12218__$1;
(statearr_12232_14071[(2)] = inst_12212);

(statearr_12232_14071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (10))){
var inst_12204 = (state_12218[(2)]);
var state_12218__$1 = state_12218;
var statearr_12233_14072 = state_12218__$1;
(statearr_12233_14072[(2)] = inst_12204);

(statearr_12233_14072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12219 === (8))){
var inst_12201 = cljs.core.async.close_BANG_(to);
var state_12218__$1 = state_12218;
var statearr_12234_14073 = state_12218__$1;
(statearr_12234_14073[(2)] = inst_12201);

(statearr_12234_14073[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12072__auto__ = null;
var cljs$core$async$state_machine__12072__auto____0 = (function (){
var statearr_12235 = [null,null,null,null,null,null,null,null];
(statearr_12235[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_12235[(1)] = (1));

return statearr_12235;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_12218){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_12218);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e12236){var ex__12075__auto__ = e12236;
var statearr_12237_14074 = state_12218;
(statearr_12237_14074[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12218[(4)]))){
var statearr_12238_14075 = state_12218;
(statearr_12238_14075[(1)] = cljs.core.first((state_12218[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14076 = state_12218;
state_12218 = G__14076;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_12218){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_12218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_12239 = f__12108__auto__();
(statearr_12239[(6)] = c__12107__auto___14057);

return statearr_12239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__12240){
var vec__12241 = p__12240;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12241,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12241,(1),null);
var job = vec__12241;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__12107__auto___14077 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12248){
var state_val_12249 = (state_12248[(1)]);
if((state_val_12249 === (1))){
var state_12248__$1 = state_12248;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12248__$1,(2),res,v);
} else {
if((state_val_12249 === (2))){
var inst_12245 = (state_12248[(2)]);
var inst_12246 = cljs.core.async.close_BANG_(res);
var state_12248__$1 = (function (){var statearr_12250 = state_12248;
(statearr_12250[(7)] = inst_12245);

return statearr_12250;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12248__$1,inst_12246);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____0 = (function (){
var statearr_12251 = [null,null,null,null,null,null,null,null];
(statearr_12251[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__);

(statearr_12251[(1)] = (1));

return statearr_12251;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____1 = (function (state_12248){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_12248);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e12252){var ex__12075__auto__ = e12252;
var statearr_12253_14078 = state_12248;
(statearr_12253_14078[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12248[(4)]))){
var statearr_12254_14100 = state_12248;
(statearr_12254_14100[(1)] = cljs.core.first((state_12248[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14102 = state_12248;
state_12248 = G__14102;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__ = function(state_12248){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____1.call(this,state_12248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_12255 = f__12108__auto__();
(statearr_12255[(6)] = c__12107__auto___14077);

return statearr_12255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__12256){
var vec__12257 = p__12256;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12257,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12257,(1),null);
var job = vec__12257;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___14106 = n;
var __14107 = (0);
while(true){
if((__14107 < n__4613__auto___14106)){
var G__12260_14108 = type;
var G__12260_14109__$1 = (((G__12260_14108 instanceof cljs.core.Keyword))?G__12260_14108.fqn:null);
switch (G__12260_14109__$1) {
case "compute":
var c__12107__auto___14112 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__14107,c__12107__auto___14112,G__12260_14108,G__12260_14109__$1,n__4613__auto___14106,jobs,results,process,async){
return (function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = ((function (__14107,c__12107__auto___14112,G__12260_14108,G__12260_14109__$1,n__4613__auto___14106,jobs,results,process,async){
return (function (state_12273){
var state_val_12274 = (state_12273[(1)]);
if((state_val_12274 === (1))){
var state_12273__$1 = state_12273;
var statearr_12275_14117 = state_12273__$1;
(statearr_12275_14117[(2)] = null);

(statearr_12275_14117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12274 === (2))){
var state_12273__$1 = state_12273;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12273__$1,(4),jobs);
} else {
if((state_val_12274 === (3))){
var inst_12271 = (state_12273[(2)]);
var state_12273__$1 = state_12273;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12273__$1,inst_12271);
} else {
if((state_val_12274 === (4))){
var inst_12263 = (state_12273[(2)]);
var inst_12264 = process(inst_12263);
var state_12273__$1 = state_12273;
if(cljs.core.truth_(inst_12264)){
var statearr_12276_14125 = state_12273__$1;
(statearr_12276_14125[(1)] = (5));

} else {
var statearr_12277_14126 = state_12273__$1;
(statearr_12277_14126[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12274 === (5))){
var state_12273__$1 = state_12273;
var statearr_12278_14128 = state_12273__$1;
(statearr_12278_14128[(2)] = null);

(statearr_12278_14128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12274 === (6))){
var state_12273__$1 = state_12273;
var statearr_12279_14134 = state_12273__$1;
(statearr_12279_14134[(2)] = null);

(statearr_12279_14134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12274 === (7))){
var inst_12269 = (state_12273[(2)]);
var state_12273__$1 = state_12273;
var statearr_12280_14138 = state_12273__$1;
(statearr_12280_14138[(2)] = inst_12269);

(statearr_12280_14138[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__14107,c__12107__auto___14112,G__12260_14108,G__12260_14109__$1,n__4613__auto___14106,jobs,results,process,async))
;
return ((function (__14107,switch__12071__auto__,c__12107__auto___14112,G__12260_14108,G__12260_14109__$1,n__4613__auto___14106,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____0 = (function (){
var statearr_12281 = [null,null,null,null,null,null,null];
(statearr_12281[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__);

(statearr_12281[(1)] = (1));

return statearr_12281;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____1 = (function (state_12273){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_12273);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e12282){var ex__12075__auto__ = e12282;
var statearr_12283_14149 = state_12273;
(statearr_12283_14149[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12273[(4)]))){
var statearr_12284_14152 = state_12273;
(statearr_12284_14152[(1)] = cljs.core.first((state_12273[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14157 = state_12273;
state_12273 = G__14157;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__ = function(state_12273){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____1.call(this,state_12273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__;
})()
;})(__14107,switch__12071__auto__,c__12107__auto___14112,G__12260_14108,G__12260_14109__$1,n__4613__auto___14106,jobs,results,process,async))
})();
var state__12109__auto__ = (function (){var statearr_12285 = f__12108__auto__();
(statearr_12285[(6)] = c__12107__auto___14112);

return statearr_12285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
});})(__14107,c__12107__auto___14112,G__12260_14108,G__12260_14109__$1,n__4613__auto___14106,jobs,results,process,async))
);


break;
case "async":
var c__12107__auto___14163 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__14107,c__12107__auto___14163,G__12260_14108,G__12260_14109__$1,n__4613__auto___14106,jobs,results,process,async){
return (function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = ((function (__14107,c__12107__auto___14163,G__12260_14108,G__12260_14109__$1,n__4613__auto___14106,jobs,results,process,async){
return (function (state_12298){
var state_val_12299 = (state_12298[(1)]);
if((state_val_12299 === (1))){
var state_12298__$1 = state_12298;
var statearr_12300_14169 = state_12298__$1;
(statearr_12300_14169[(2)] = null);

(statearr_12300_14169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12299 === (2))){
var state_12298__$1 = state_12298;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12298__$1,(4),jobs);
} else {
if((state_val_12299 === (3))){
var inst_12296 = (state_12298[(2)]);
var state_12298__$1 = state_12298;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12298__$1,inst_12296);
} else {
if((state_val_12299 === (4))){
var inst_12288 = (state_12298[(2)]);
var inst_12289 = async(inst_12288);
var state_12298__$1 = state_12298;
if(cljs.core.truth_(inst_12289)){
var statearr_12301_14171 = state_12298__$1;
(statearr_12301_14171[(1)] = (5));

} else {
var statearr_12302_14172 = state_12298__$1;
(statearr_12302_14172[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12299 === (5))){
var state_12298__$1 = state_12298;
var statearr_12303_14173 = state_12298__$1;
(statearr_12303_14173[(2)] = null);

(statearr_12303_14173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12299 === (6))){
var state_12298__$1 = state_12298;
var statearr_12304_14174 = state_12298__$1;
(statearr_12304_14174[(2)] = null);

(statearr_12304_14174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12299 === (7))){
var inst_12294 = (state_12298[(2)]);
var state_12298__$1 = state_12298;
var statearr_12305_14175 = state_12298__$1;
(statearr_12305_14175[(2)] = inst_12294);

(statearr_12305_14175[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__14107,c__12107__auto___14163,G__12260_14108,G__12260_14109__$1,n__4613__auto___14106,jobs,results,process,async))
;
return ((function (__14107,switch__12071__auto__,c__12107__auto___14163,G__12260_14108,G__12260_14109__$1,n__4613__auto___14106,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____0 = (function (){
var statearr_12306 = [null,null,null,null,null,null,null];
(statearr_12306[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__);

(statearr_12306[(1)] = (1));

return statearr_12306;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____1 = (function (state_12298){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_12298);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e12307){var ex__12075__auto__ = e12307;
var statearr_12308_14176 = state_12298;
(statearr_12308_14176[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12298[(4)]))){
var statearr_12309_14177 = state_12298;
(statearr_12309_14177[(1)] = cljs.core.first((state_12298[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14178 = state_12298;
state_12298 = G__14178;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__ = function(state_12298){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____1.call(this,state_12298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__;
})()
;})(__14107,switch__12071__auto__,c__12107__auto___14163,G__12260_14108,G__12260_14109__$1,n__4613__auto___14106,jobs,results,process,async))
})();
var state__12109__auto__ = (function (){var statearr_12310 = f__12108__auto__();
(statearr_12310[(6)] = c__12107__auto___14163);

return statearr_12310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
});})(__14107,c__12107__auto___14163,G__12260_14108,G__12260_14109__$1,n__4613__auto___14106,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12260_14109__$1)].join('')));

}

var G__14179 = (__14107 + (1));
__14107 = G__14179;
continue;
} else {
}
break;
}

var c__12107__auto___14180 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12332){
var state_val_12333 = (state_12332[(1)]);
if((state_val_12333 === (7))){
var inst_12328 = (state_12332[(2)]);
var state_12332__$1 = state_12332;
var statearr_12334_14181 = state_12332__$1;
(statearr_12334_14181[(2)] = inst_12328);

(statearr_12334_14181[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12333 === (1))){
var state_12332__$1 = state_12332;
var statearr_12335_14182 = state_12332__$1;
(statearr_12335_14182[(2)] = null);

(statearr_12335_14182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12333 === (4))){
var inst_12313 = (state_12332[(7)]);
var inst_12313__$1 = (state_12332[(2)]);
var inst_12314 = (inst_12313__$1 == null);
var state_12332__$1 = (function (){var statearr_12336 = state_12332;
(statearr_12336[(7)] = inst_12313__$1);

return statearr_12336;
})();
if(cljs.core.truth_(inst_12314)){
var statearr_12337_14183 = state_12332__$1;
(statearr_12337_14183[(1)] = (5));

} else {
var statearr_12338_14184 = state_12332__$1;
(statearr_12338_14184[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12333 === (6))){
var inst_12318 = (state_12332[(8)]);
var inst_12313 = (state_12332[(7)]);
var inst_12318__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_12319 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12320 = [inst_12313,inst_12318__$1];
var inst_12321 = (new cljs.core.PersistentVector(null,2,(5),inst_12319,inst_12320,null));
var state_12332__$1 = (function (){var statearr_12339 = state_12332;
(statearr_12339[(8)] = inst_12318__$1);

return statearr_12339;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12332__$1,(8),jobs,inst_12321);
} else {
if((state_val_12333 === (3))){
var inst_12330 = (state_12332[(2)]);
var state_12332__$1 = state_12332;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12332__$1,inst_12330);
} else {
if((state_val_12333 === (2))){
var state_12332__$1 = state_12332;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12332__$1,(4),from);
} else {
if((state_val_12333 === (9))){
var inst_12325 = (state_12332[(2)]);
var state_12332__$1 = (function (){var statearr_12340 = state_12332;
(statearr_12340[(9)] = inst_12325);

return statearr_12340;
})();
var statearr_12341_14185 = state_12332__$1;
(statearr_12341_14185[(2)] = null);

(statearr_12341_14185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12333 === (5))){
var inst_12316 = cljs.core.async.close_BANG_(jobs);
var state_12332__$1 = state_12332;
var statearr_12342_14186 = state_12332__$1;
(statearr_12342_14186[(2)] = inst_12316);

(statearr_12342_14186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12333 === (8))){
var inst_12318 = (state_12332[(8)]);
var inst_12323 = (state_12332[(2)]);
var state_12332__$1 = (function (){var statearr_12343 = state_12332;
(statearr_12343[(10)] = inst_12323);

return statearr_12343;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12332__$1,(9),results,inst_12318);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____0 = (function (){
var statearr_12344 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12344[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__);

(statearr_12344[(1)] = (1));

return statearr_12344;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____1 = (function (state_12332){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_12332);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e12345){var ex__12075__auto__ = e12345;
var statearr_12346_14191 = state_12332;
(statearr_12346_14191[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12332[(4)]))){
var statearr_12347_14194 = state_12332;
(statearr_12347_14194[(1)] = cljs.core.first((state_12332[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14198 = state_12332;
state_12332 = G__14198;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__ = function(state_12332){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____1.call(this,state_12332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_12348 = f__12108__auto__();
(statearr_12348[(6)] = c__12107__auto___14180);

return statearr_12348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
}));


var c__12107__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12386){
var state_val_12387 = (state_12386[(1)]);
if((state_val_12387 === (7))){
var inst_12382 = (state_12386[(2)]);
var state_12386__$1 = state_12386;
var statearr_12388_14206 = state_12386__$1;
(statearr_12388_14206[(2)] = inst_12382);

(statearr_12388_14206[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (20))){
var state_12386__$1 = state_12386;
var statearr_12389_14209 = state_12386__$1;
(statearr_12389_14209[(2)] = null);

(statearr_12389_14209[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (1))){
var state_12386__$1 = state_12386;
var statearr_12390_14213 = state_12386__$1;
(statearr_12390_14213[(2)] = null);

(statearr_12390_14213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (4))){
var inst_12351 = (state_12386[(7)]);
var inst_12351__$1 = (state_12386[(2)]);
var inst_12352 = (inst_12351__$1 == null);
var state_12386__$1 = (function (){var statearr_12391 = state_12386;
(statearr_12391[(7)] = inst_12351__$1);

return statearr_12391;
})();
if(cljs.core.truth_(inst_12352)){
var statearr_12392_14228 = state_12386__$1;
(statearr_12392_14228[(1)] = (5));

} else {
var statearr_12393_14230 = state_12386__$1;
(statearr_12393_14230[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (15))){
var inst_12364 = (state_12386[(8)]);
var state_12386__$1 = state_12386;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12386__$1,(18),to,inst_12364);
} else {
if((state_val_12387 === (21))){
var inst_12377 = (state_12386[(2)]);
var state_12386__$1 = state_12386;
var statearr_12394_14235 = state_12386__$1;
(statearr_12394_14235[(2)] = inst_12377);

(statearr_12394_14235[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (13))){
var inst_12379 = (state_12386[(2)]);
var state_12386__$1 = (function (){var statearr_12395 = state_12386;
(statearr_12395[(9)] = inst_12379);

return statearr_12395;
})();
var statearr_12396_14242 = state_12386__$1;
(statearr_12396_14242[(2)] = null);

(statearr_12396_14242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (6))){
var inst_12351 = (state_12386[(7)]);
var state_12386__$1 = state_12386;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12386__$1,(11),inst_12351);
} else {
if((state_val_12387 === (17))){
var inst_12372 = (state_12386[(2)]);
var state_12386__$1 = state_12386;
if(cljs.core.truth_(inst_12372)){
var statearr_12397_14250 = state_12386__$1;
(statearr_12397_14250[(1)] = (19));

} else {
var statearr_12398_14251 = state_12386__$1;
(statearr_12398_14251[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (3))){
var inst_12384 = (state_12386[(2)]);
var state_12386__$1 = state_12386;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12386__$1,inst_12384);
} else {
if((state_val_12387 === (12))){
var inst_12361 = (state_12386[(10)]);
var state_12386__$1 = state_12386;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12386__$1,(14),inst_12361);
} else {
if((state_val_12387 === (2))){
var state_12386__$1 = state_12386;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12386__$1,(4),results);
} else {
if((state_val_12387 === (19))){
var state_12386__$1 = state_12386;
var statearr_12399_14259 = state_12386__$1;
(statearr_12399_14259[(2)] = null);

(statearr_12399_14259[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (11))){
var inst_12361 = (state_12386[(2)]);
var state_12386__$1 = (function (){var statearr_12400 = state_12386;
(statearr_12400[(10)] = inst_12361);

return statearr_12400;
})();
var statearr_12401_14261 = state_12386__$1;
(statearr_12401_14261[(2)] = null);

(statearr_12401_14261[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (9))){
var state_12386__$1 = state_12386;
var statearr_12402_14262 = state_12386__$1;
(statearr_12402_14262[(2)] = null);

(statearr_12402_14262[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (5))){
var state_12386__$1 = state_12386;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12403_14263 = state_12386__$1;
(statearr_12403_14263[(1)] = (8));

} else {
var statearr_12404_14264 = state_12386__$1;
(statearr_12404_14264[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (14))){
var inst_12364 = (state_12386[(8)]);
var inst_12364__$1 = (state_12386[(2)]);
var inst_12365 = (inst_12364__$1 == null);
var inst_12366 = cljs.core.not(inst_12365);
var state_12386__$1 = (function (){var statearr_12405 = state_12386;
(statearr_12405[(8)] = inst_12364__$1);

return statearr_12405;
})();
if(inst_12366){
var statearr_12406_14265 = state_12386__$1;
(statearr_12406_14265[(1)] = (15));

} else {
var statearr_12407_14266 = state_12386__$1;
(statearr_12407_14266[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (16))){
var state_12386__$1 = state_12386;
var statearr_12408_14267 = state_12386__$1;
(statearr_12408_14267[(2)] = false);

(statearr_12408_14267[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (10))){
var inst_12358 = (state_12386[(2)]);
var state_12386__$1 = state_12386;
var statearr_12409_14268 = state_12386__$1;
(statearr_12409_14268[(2)] = inst_12358);

(statearr_12409_14268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (18))){
var inst_12369 = (state_12386[(2)]);
var state_12386__$1 = state_12386;
var statearr_12410_14269 = state_12386__$1;
(statearr_12410_14269[(2)] = inst_12369);

(statearr_12410_14269[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12387 === (8))){
var inst_12355 = cljs.core.async.close_BANG_(to);
var state_12386__$1 = state_12386;
var statearr_12411_14270 = state_12386__$1;
(statearr_12411_14270[(2)] = inst_12355);

(statearr_12411_14270[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____0 = (function (){
var statearr_12412 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12412[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__);

(statearr_12412[(1)] = (1));

return statearr_12412;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____1 = (function (state_12386){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_12386);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e12413){var ex__12075__auto__ = e12413;
var statearr_12414_14271 = state_12386;
(statearr_12414_14271[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12386[(4)]))){
var statearr_12415_14272 = state_12386;
(statearr_12415_14272[(1)] = cljs.core.first((state_12386[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14273 = state_12386;
state_12386 = G__14273;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__ = function(state_12386){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____1.call(this,state_12386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12072__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_12416 = f__12108__auto__();
(statearr_12416[(6)] = c__12107__auto__);

return statearr_12416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
}));

return c__12107__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__12418 = arguments.length;
switch (G__12418) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__12420 = arguments.length;
switch (G__12420) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__12422 = arguments.length;
switch (G__12422) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__12107__auto___14283 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12448){
var state_val_12449 = (state_12448[(1)]);
if((state_val_12449 === (7))){
var inst_12444 = (state_12448[(2)]);
var state_12448__$1 = state_12448;
var statearr_12450_14284 = state_12448__$1;
(statearr_12450_14284[(2)] = inst_12444);

(statearr_12450_14284[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (1))){
var state_12448__$1 = state_12448;
var statearr_12451_14285 = state_12448__$1;
(statearr_12451_14285[(2)] = null);

(statearr_12451_14285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (4))){
var inst_12425 = (state_12448[(7)]);
var inst_12425__$1 = (state_12448[(2)]);
var inst_12426 = (inst_12425__$1 == null);
var state_12448__$1 = (function (){var statearr_12452 = state_12448;
(statearr_12452[(7)] = inst_12425__$1);

return statearr_12452;
})();
if(cljs.core.truth_(inst_12426)){
var statearr_12453_14286 = state_12448__$1;
(statearr_12453_14286[(1)] = (5));

} else {
var statearr_12454_14287 = state_12448__$1;
(statearr_12454_14287[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (13))){
var state_12448__$1 = state_12448;
var statearr_12455_14288 = state_12448__$1;
(statearr_12455_14288[(2)] = null);

(statearr_12455_14288[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (6))){
var inst_12425 = (state_12448[(7)]);
var inst_12431 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_12425) : p.call(null,inst_12425));
var state_12448__$1 = state_12448;
if(cljs.core.truth_(inst_12431)){
var statearr_12456_14289 = state_12448__$1;
(statearr_12456_14289[(1)] = (9));

} else {
var statearr_12457_14290 = state_12448__$1;
(statearr_12457_14290[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (3))){
var inst_12446 = (state_12448[(2)]);
var state_12448__$1 = state_12448;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12448__$1,inst_12446);
} else {
if((state_val_12449 === (12))){
var state_12448__$1 = state_12448;
var statearr_12458_14291 = state_12448__$1;
(statearr_12458_14291[(2)] = null);

(statearr_12458_14291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (2))){
var state_12448__$1 = state_12448;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12448__$1,(4),ch);
} else {
if((state_val_12449 === (11))){
var inst_12425 = (state_12448[(7)]);
var inst_12435 = (state_12448[(2)]);
var state_12448__$1 = state_12448;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12448__$1,(8),inst_12435,inst_12425);
} else {
if((state_val_12449 === (9))){
var state_12448__$1 = state_12448;
var statearr_12459_14292 = state_12448__$1;
(statearr_12459_14292[(2)] = tc);

(statearr_12459_14292[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (5))){
var inst_12428 = cljs.core.async.close_BANG_(tc);
var inst_12429 = cljs.core.async.close_BANG_(fc);
var state_12448__$1 = (function (){var statearr_12460 = state_12448;
(statearr_12460[(8)] = inst_12428);

return statearr_12460;
})();
var statearr_12461_14293 = state_12448__$1;
(statearr_12461_14293[(2)] = inst_12429);

(statearr_12461_14293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (14))){
var inst_12442 = (state_12448[(2)]);
var state_12448__$1 = state_12448;
var statearr_12462_14294 = state_12448__$1;
(statearr_12462_14294[(2)] = inst_12442);

(statearr_12462_14294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (10))){
var state_12448__$1 = state_12448;
var statearr_12463_14295 = state_12448__$1;
(statearr_12463_14295[(2)] = fc);

(statearr_12463_14295[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (8))){
var inst_12437 = (state_12448[(2)]);
var state_12448__$1 = state_12448;
if(cljs.core.truth_(inst_12437)){
var statearr_12464_14296 = state_12448__$1;
(statearr_12464_14296[(1)] = (12));

} else {
var statearr_12465_14297 = state_12448__$1;
(statearr_12465_14297[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12072__auto__ = null;
var cljs$core$async$state_machine__12072__auto____0 = (function (){
var statearr_12466 = [null,null,null,null,null,null,null,null,null];
(statearr_12466[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_12466[(1)] = (1));

return statearr_12466;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_12448){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_12448);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e12467){var ex__12075__auto__ = e12467;
var statearr_12468_14300 = state_12448;
(statearr_12468_14300[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12448[(4)]))){
var statearr_12469_14301 = state_12448;
(statearr_12469_14301[(1)] = cljs.core.first((state_12448[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14302 = state_12448;
state_12448 = G__14302;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_12448){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_12448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_12470 = f__12108__auto__();
(statearr_12470[(6)] = c__12107__auto___14283);

return statearr_12470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__12107__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12492){
var state_val_12493 = (state_12492[(1)]);
if((state_val_12493 === (7))){
var inst_12488 = (state_12492[(2)]);
var state_12492__$1 = state_12492;
var statearr_12494_14305 = state_12492__$1;
(statearr_12494_14305[(2)] = inst_12488);

(statearr_12494_14305[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12493 === (1))){
var inst_12471 = init;
var inst_12472 = inst_12471;
var state_12492__$1 = (function (){var statearr_12495 = state_12492;
(statearr_12495[(7)] = inst_12472);

return statearr_12495;
})();
var statearr_12496_14306 = state_12492__$1;
(statearr_12496_14306[(2)] = null);

(statearr_12496_14306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12493 === (4))){
var inst_12475 = (state_12492[(8)]);
var inst_12475__$1 = (state_12492[(2)]);
var inst_12476 = (inst_12475__$1 == null);
var state_12492__$1 = (function (){var statearr_12497 = state_12492;
(statearr_12497[(8)] = inst_12475__$1);

return statearr_12497;
})();
if(cljs.core.truth_(inst_12476)){
var statearr_12498_14312 = state_12492__$1;
(statearr_12498_14312[(1)] = (5));

} else {
var statearr_12499_14313 = state_12492__$1;
(statearr_12499_14313[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12493 === (6))){
var inst_12475 = (state_12492[(8)]);
var inst_12479 = (state_12492[(9)]);
var inst_12472 = (state_12492[(7)]);
var inst_12479__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_12472,inst_12475) : f.call(null,inst_12472,inst_12475));
var inst_12480 = cljs.core.reduced_QMARK_(inst_12479__$1);
var state_12492__$1 = (function (){var statearr_12500 = state_12492;
(statearr_12500[(9)] = inst_12479__$1);

return statearr_12500;
})();
if(inst_12480){
var statearr_12501_14316 = state_12492__$1;
(statearr_12501_14316[(1)] = (8));

} else {
var statearr_12502_14318 = state_12492__$1;
(statearr_12502_14318[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12493 === (3))){
var inst_12490 = (state_12492[(2)]);
var state_12492__$1 = state_12492;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12492__$1,inst_12490);
} else {
if((state_val_12493 === (2))){
var state_12492__$1 = state_12492;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12492__$1,(4),ch);
} else {
if((state_val_12493 === (9))){
var inst_12479 = (state_12492[(9)]);
var inst_12472 = inst_12479;
var state_12492__$1 = (function (){var statearr_12503 = state_12492;
(statearr_12503[(7)] = inst_12472);

return statearr_12503;
})();
var statearr_12504_14319 = state_12492__$1;
(statearr_12504_14319[(2)] = null);

(statearr_12504_14319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12493 === (5))){
var inst_12472 = (state_12492[(7)]);
var state_12492__$1 = state_12492;
var statearr_12505_14320 = state_12492__$1;
(statearr_12505_14320[(2)] = inst_12472);

(statearr_12505_14320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12493 === (10))){
var inst_12486 = (state_12492[(2)]);
var state_12492__$1 = state_12492;
var statearr_12506_14322 = state_12492__$1;
(statearr_12506_14322[(2)] = inst_12486);

(statearr_12506_14322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12493 === (8))){
var inst_12479 = (state_12492[(9)]);
var inst_12482 = cljs.core.deref(inst_12479);
var state_12492__$1 = state_12492;
var statearr_12507_14325 = state_12492__$1;
(statearr_12507_14325[(2)] = inst_12482);

(statearr_12507_14325[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__12072__auto__ = null;
var cljs$core$async$reduce_$_state_machine__12072__auto____0 = (function (){
var statearr_12508 = [null,null,null,null,null,null,null,null,null,null];
(statearr_12508[(0)] = cljs$core$async$reduce_$_state_machine__12072__auto__);

(statearr_12508[(1)] = (1));

return statearr_12508;
});
var cljs$core$async$reduce_$_state_machine__12072__auto____1 = (function (state_12492){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_12492);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e12509){var ex__12075__auto__ = e12509;
var statearr_12510_14328 = state_12492;
(statearr_12510_14328[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12492[(4)]))){
var statearr_12511_14330 = state_12492;
(statearr_12511_14330[(1)] = cljs.core.first((state_12492[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14333 = state_12492;
state_12492 = G__14333;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__12072__auto__ = function(state_12492){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__12072__auto____1.call(this,state_12492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__12072__auto____0;
cljs$core$async$reduce_$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__12072__auto____1;
return cljs$core$async$reduce_$_state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_12512 = f__12108__auto__();
(statearr_12512[(6)] = c__12107__auto__);

return statearr_12512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
}));

return c__12107__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__12107__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12518){
var state_val_12519 = (state_12518[(1)]);
if((state_val_12519 === (1))){
var inst_12513 = cljs.core.async.reduce(f__$1,init,ch);
var state_12518__$1 = state_12518;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12518__$1,(2),inst_12513);
} else {
if((state_val_12519 === (2))){
var inst_12515 = (state_12518[(2)]);
var inst_12516 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_12515) : f__$1.call(null,inst_12515));
var state_12518__$1 = state_12518;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12518__$1,inst_12516);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__12072__auto__ = null;
var cljs$core$async$transduce_$_state_machine__12072__auto____0 = (function (){
var statearr_12520 = [null,null,null,null,null,null,null];
(statearr_12520[(0)] = cljs$core$async$transduce_$_state_machine__12072__auto__);

(statearr_12520[(1)] = (1));

return statearr_12520;
});
var cljs$core$async$transduce_$_state_machine__12072__auto____1 = (function (state_12518){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_12518);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e12521){var ex__12075__auto__ = e12521;
var statearr_12522_14336 = state_12518;
(statearr_12522_14336[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12518[(4)]))){
var statearr_12523_14337 = state_12518;
(statearr_12523_14337[(1)] = cljs.core.first((state_12518[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14338 = state_12518;
state_12518 = G__14338;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__12072__auto__ = function(state_12518){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__12072__auto____1.call(this,state_12518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__12072__auto____0;
cljs$core$async$transduce_$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__12072__auto____1;
return cljs$core$async$transduce_$_state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_12524 = f__12108__auto__();
(statearr_12524[(6)] = c__12107__auto__);

return statearr_12524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
}));

return c__12107__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__12526 = arguments.length;
switch (G__12526) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__12107__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12551){
var state_val_12552 = (state_12551[(1)]);
if((state_val_12552 === (7))){
var inst_12533 = (state_12551[(2)]);
var state_12551__$1 = state_12551;
var statearr_12553_14340 = state_12551__$1;
(statearr_12553_14340[(2)] = inst_12533);

(statearr_12553_14340[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (1))){
var inst_12527 = cljs.core.seq(coll);
var inst_12528 = inst_12527;
var state_12551__$1 = (function (){var statearr_12554 = state_12551;
(statearr_12554[(7)] = inst_12528);

return statearr_12554;
})();
var statearr_12555_14341 = state_12551__$1;
(statearr_12555_14341[(2)] = null);

(statearr_12555_14341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (4))){
var inst_12528 = (state_12551[(7)]);
var inst_12531 = cljs.core.first(inst_12528);
var state_12551__$1 = state_12551;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12551__$1,(7),ch,inst_12531);
} else {
if((state_val_12552 === (13))){
var inst_12545 = (state_12551[(2)]);
var state_12551__$1 = state_12551;
var statearr_12556_14342 = state_12551__$1;
(statearr_12556_14342[(2)] = inst_12545);

(statearr_12556_14342[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (6))){
var inst_12536 = (state_12551[(2)]);
var state_12551__$1 = state_12551;
if(cljs.core.truth_(inst_12536)){
var statearr_12557_14343 = state_12551__$1;
(statearr_12557_14343[(1)] = (8));

} else {
var statearr_12558_14344 = state_12551__$1;
(statearr_12558_14344[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (3))){
var inst_12549 = (state_12551[(2)]);
var state_12551__$1 = state_12551;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12551__$1,inst_12549);
} else {
if((state_val_12552 === (12))){
var state_12551__$1 = state_12551;
var statearr_12559_14345 = state_12551__$1;
(statearr_12559_14345[(2)] = null);

(statearr_12559_14345[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (2))){
var inst_12528 = (state_12551[(7)]);
var state_12551__$1 = state_12551;
if(cljs.core.truth_(inst_12528)){
var statearr_12560_14346 = state_12551__$1;
(statearr_12560_14346[(1)] = (4));

} else {
var statearr_12561_14347 = state_12551__$1;
(statearr_12561_14347[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (11))){
var inst_12542 = cljs.core.async.close_BANG_(ch);
var state_12551__$1 = state_12551;
var statearr_12562_14348 = state_12551__$1;
(statearr_12562_14348[(2)] = inst_12542);

(statearr_12562_14348[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (9))){
var state_12551__$1 = state_12551;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12563_14349 = state_12551__$1;
(statearr_12563_14349[(1)] = (11));

} else {
var statearr_12564_14350 = state_12551__$1;
(statearr_12564_14350[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (5))){
var inst_12528 = (state_12551[(7)]);
var state_12551__$1 = state_12551;
var statearr_12565_14351 = state_12551__$1;
(statearr_12565_14351[(2)] = inst_12528);

(statearr_12565_14351[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (10))){
var inst_12547 = (state_12551[(2)]);
var state_12551__$1 = state_12551;
var statearr_12566_14352 = state_12551__$1;
(statearr_12566_14352[(2)] = inst_12547);

(statearr_12566_14352[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (8))){
var inst_12528 = (state_12551[(7)]);
var inst_12538 = cljs.core.next(inst_12528);
var inst_12528__$1 = inst_12538;
var state_12551__$1 = (function (){var statearr_12567 = state_12551;
(statearr_12567[(7)] = inst_12528__$1);

return statearr_12567;
})();
var statearr_12568_14353 = state_12551__$1;
(statearr_12568_14353[(2)] = null);

(statearr_12568_14353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12072__auto__ = null;
var cljs$core$async$state_machine__12072__auto____0 = (function (){
var statearr_12569 = [null,null,null,null,null,null,null,null];
(statearr_12569[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_12569[(1)] = (1));

return statearr_12569;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_12551){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_12551);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e12570){var ex__12075__auto__ = e12570;
var statearr_12571_14354 = state_12551;
(statearr_12571_14354[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12551[(4)]))){
var statearr_12572_14355 = state_12551;
(statearr_12572_14355[(1)] = cljs.core.first((state_12551[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14357 = state_12551;
state_12551 = G__14357;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_12551){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_12551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_12573 = f__12108__auto__();
(statearr_12573[(6)] = c__12107__auto__);

return statearr_12573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
}));

return c__12107__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__12575 = arguments.length;
switch (G__12575) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_14361 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_14361(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_14363 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_14363(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_14370 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_14370(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_14375 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_14375(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12576 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12576 = (function (ch,cs,meta12577){
this.ch = ch;
this.cs = cs;
this.meta12577 = meta12577;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12576.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12578,meta12577__$1){
var self__ = this;
var _12578__$1 = this;
return (new cljs.core.async.t_cljs$core$async12576(self__.ch,self__.cs,meta12577__$1));
}));

(cljs.core.async.t_cljs$core$async12576.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12578){
var self__ = this;
var _12578__$1 = this;
return self__.meta12577;
}));

(cljs.core.async.t_cljs$core$async12576.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12576.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async12576.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12576.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async12576.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async12576.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async12576.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta12577","meta12577",-744763079,null)], null);
}));

(cljs.core.async.t_cljs$core$async12576.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12576.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12576");

(cljs.core.async.t_cljs$core$async12576.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12576");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12576.
 */
cljs.core.async.__GT_t_cljs$core$async12576 = (function cljs$core$async$mult_$___GT_t_cljs$core$async12576(ch__$1,cs__$1,meta12577){
return (new cljs.core.async.t_cljs$core$async12576(ch__$1,cs__$1,meta12577));
});

}

return (new cljs.core.async.t_cljs$core$async12576(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__12107__auto___14389 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12711){
var state_val_12712 = (state_12711[(1)]);
if((state_val_12712 === (7))){
var inst_12707 = (state_12711[(2)]);
var state_12711__$1 = state_12711;
var statearr_12713_14390 = state_12711__$1;
(statearr_12713_14390[(2)] = inst_12707);

(statearr_12713_14390[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (20))){
var inst_12612 = (state_12711[(7)]);
var inst_12624 = cljs.core.first(inst_12612);
var inst_12625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12624,(0),null);
var inst_12626 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12624,(1),null);
var state_12711__$1 = (function (){var statearr_12714 = state_12711;
(statearr_12714[(8)] = inst_12625);

return statearr_12714;
})();
if(cljs.core.truth_(inst_12626)){
var statearr_12715_14391 = state_12711__$1;
(statearr_12715_14391[(1)] = (22));

} else {
var statearr_12716_14407 = state_12711__$1;
(statearr_12716_14407[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (27))){
var inst_12654 = (state_12711[(9)]);
var inst_12581 = (state_12711[(10)]);
var inst_12656 = (state_12711[(11)]);
var inst_12661 = (state_12711[(12)]);
var inst_12661__$1 = cljs.core._nth(inst_12654,inst_12656);
var inst_12662 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_12661__$1,inst_12581,done);
var state_12711__$1 = (function (){var statearr_12717 = state_12711;
(statearr_12717[(12)] = inst_12661__$1);

return statearr_12717;
})();
if(cljs.core.truth_(inst_12662)){
var statearr_12718_14408 = state_12711__$1;
(statearr_12718_14408[(1)] = (30));

} else {
var statearr_12719_14409 = state_12711__$1;
(statearr_12719_14409[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (1))){
var state_12711__$1 = state_12711;
var statearr_12720_14410 = state_12711__$1;
(statearr_12720_14410[(2)] = null);

(statearr_12720_14410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (24))){
var inst_12612 = (state_12711[(7)]);
var inst_12631 = (state_12711[(2)]);
var inst_12632 = cljs.core.next(inst_12612);
var inst_12590 = inst_12632;
var inst_12591 = null;
var inst_12592 = (0);
var inst_12593 = (0);
var state_12711__$1 = (function (){var statearr_12721 = state_12711;
(statearr_12721[(13)] = inst_12591);

(statearr_12721[(14)] = inst_12593);

(statearr_12721[(15)] = inst_12590);

(statearr_12721[(16)] = inst_12592);

(statearr_12721[(17)] = inst_12631);

return statearr_12721;
})();
var statearr_12722_14411 = state_12711__$1;
(statearr_12722_14411[(2)] = null);

(statearr_12722_14411[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (39))){
var state_12711__$1 = state_12711;
var statearr_12726_14412 = state_12711__$1;
(statearr_12726_14412[(2)] = null);

(statearr_12726_14412[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (4))){
var inst_12581 = (state_12711[(10)]);
var inst_12581__$1 = (state_12711[(2)]);
var inst_12582 = (inst_12581__$1 == null);
var state_12711__$1 = (function (){var statearr_12727 = state_12711;
(statearr_12727[(10)] = inst_12581__$1);

return statearr_12727;
})();
if(cljs.core.truth_(inst_12582)){
var statearr_12728_14413 = state_12711__$1;
(statearr_12728_14413[(1)] = (5));

} else {
var statearr_12729_14414 = state_12711__$1;
(statearr_12729_14414[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (15))){
var inst_12591 = (state_12711[(13)]);
var inst_12593 = (state_12711[(14)]);
var inst_12590 = (state_12711[(15)]);
var inst_12592 = (state_12711[(16)]);
var inst_12608 = (state_12711[(2)]);
var inst_12609 = (inst_12593 + (1));
var tmp12723 = inst_12591;
var tmp12724 = inst_12590;
var tmp12725 = inst_12592;
var inst_12590__$1 = tmp12724;
var inst_12591__$1 = tmp12723;
var inst_12592__$1 = tmp12725;
var inst_12593__$1 = inst_12609;
var state_12711__$1 = (function (){var statearr_12730 = state_12711;
(statearr_12730[(18)] = inst_12608);

(statearr_12730[(13)] = inst_12591__$1);

(statearr_12730[(14)] = inst_12593__$1);

(statearr_12730[(15)] = inst_12590__$1);

(statearr_12730[(16)] = inst_12592__$1);

return statearr_12730;
})();
var statearr_12731_14415 = state_12711__$1;
(statearr_12731_14415[(2)] = null);

(statearr_12731_14415[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (21))){
var inst_12635 = (state_12711[(2)]);
var state_12711__$1 = state_12711;
var statearr_12735_14416 = state_12711__$1;
(statearr_12735_14416[(2)] = inst_12635);

(statearr_12735_14416[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (31))){
var inst_12661 = (state_12711[(12)]);
var inst_12665 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_12661);
var state_12711__$1 = state_12711;
var statearr_12736_14417 = state_12711__$1;
(statearr_12736_14417[(2)] = inst_12665);

(statearr_12736_14417[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (32))){
var inst_12654 = (state_12711[(9)]);
var inst_12656 = (state_12711[(11)]);
var inst_12655 = (state_12711[(19)]);
var inst_12653 = (state_12711[(20)]);
var inst_12667 = (state_12711[(2)]);
var inst_12668 = (inst_12656 + (1));
var tmp12732 = inst_12654;
var tmp12733 = inst_12655;
var tmp12734 = inst_12653;
var inst_12653__$1 = tmp12734;
var inst_12654__$1 = tmp12732;
var inst_12655__$1 = tmp12733;
var inst_12656__$1 = inst_12668;
var state_12711__$1 = (function (){var statearr_12737 = state_12711;
(statearr_12737[(9)] = inst_12654__$1);

(statearr_12737[(11)] = inst_12656__$1);

(statearr_12737[(21)] = inst_12667);

(statearr_12737[(19)] = inst_12655__$1);

(statearr_12737[(20)] = inst_12653__$1);

return statearr_12737;
})();
var statearr_12738_14418 = state_12711__$1;
(statearr_12738_14418[(2)] = null);

(statearr_12738_14418[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (40))){
var inst_12680 = (state_12711[(22)]);
var inst_12684 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_12680);
var state_12711__$1 = state_12711;
var statearr_12739_14419 = state_12711__$1;
(statearr_12739_14419[(2)] = inst_12684);

(statearr_12739_14419[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (33))){
var inst_12671 = (state_12711[(23)]);
var inst_12673 = cljs.core.chunked_seq_QMARK_(inst_12671);
var state_12711__$1 = state_12711;
if(inst_12673){
var statearr_12740_14420 = state_12711__$1;
(statearr_12740_14420[(1)] = (36));

} else {
var statearr_12741_14421 = state_12711__$1;
(statearr_12741_14421[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (13))){
var inst_12602 = (state_12711[(24)]);
var inst_12605 = cljs.core.async.close_BANG_(inst_12602);
var state_12711__$1 = state_12711;
var statearr_12742_14422 = state_12711__$1;
(statearr_12742_14422[(2)] = inst_12605);

(statearr_12742_14422[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (22))){
var inst_12625 = (state_12711[(8)]);
var inst_12628 = cljs.core.async.close_BANG_(inst_12625);
var state_12711__$1 = state_12711;
var statearr_12743_14423 = state_12711__$1;
(statearr_12743_14423[(2)] = inst_12628);

(statearr_12743_14423[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (36))){
var inst_12671 = (state_12711[(23)]);
var inst_12675 = cljs.core.chunk_first(inst_12671);
var inst_12676 = cljs.core.chunk_rest(inst_12671);
var inst_12677 = cljs.core.count(inst_12675);
var inst_12653 = inst_12676;
var inst_12654 = inst_12675;
var inst_12655 = inst_12677;
var inst_12656 = (0);
var state_12711__$1 = (function (){var statearr_12744 = state_12711;
(statearr_12744[(9)] = inst_12654);

(statearr_12744[(11)] = inst_12656);

(statearr_12744[(19)] = inst_12655);

(statearr_12744[(20)] = inst_12653);

return statearr_12744;
})();
var statearr_12745_14424 = state_12711__$1;
(statearr_12745_14424[(2)] = null);

(statearr_12745_14424[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (41))){
var inst_12671 = (state_12711[(23)]);
var inst_12686 = (state_12711[(2)]);
var inst_12687 = cljs.core.next(inst_12671);
var inst_12653 = inst_12687;
var inst_12654 = null;
var inst_12655 = (0);
var inst_12656 = (0);
var state_12711__$1 = (function (){var statearr_12746 = state_12711;
(statearr_12746[(9)] = inst_12654);

(statearr_12746[(11)] = inst_12656);

(statearr_12746[(19)] = inst_12655);

(statearr_12746[(20)] = inst_12653);

(statearr_12746[(25)] = inst_12686);

return statearr_12746;
})();
var statearr_12747_14452 = state_12711__$1;
(statearr_12747_14452[(2)] = null);

(statearr_12747_14452[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (43))){
var state_12711__$1 = state_12711;
var statearr_12748_14453 = state_12711__$1;
(statearr_12748_14453[(2)] = null);

(statearr_12748_14453[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (29))){
var inst_12695 = (state_12711[(2)]);
var state_12711__$1 = state_12711;
var statearr_12749_14454 = state_12711__$1;
(statearr_12749_14454[(2)] = inst_12695);

(statearr_12749_14454[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (44))){
var inst_12704 = (state_12711[(2)]);
var state_12711__$1 = (function (){var statearr_12750 = state_12711;
(statearr_12750[(26)] = inst_12704);

return statearr_12750;
})();
var statearr_12751_14455 = state_12711__$1;
(statearr_12751_14455[(2)] = null);

(statearr_12751_14455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (6))){
var inst_12645 = (state_12711[(27)]);
var inst_12644 = cljs.core.deref(cs);
var inst_12645__$1 = cljs.core.keys(inst_12644);
var inst_12646 = cljs.core.count(inst_12645__$1);
var inst_12647 = cljs.core.reset_BANG_(dctr,inst_12646);
var inst_12652 = cljs.core.seq(inst_12645__$1);
var inst_12653 = inst_12652;
var inst_12654 = null;
var inst_12655 = (0);
var inst_12656 = (0);
var state_12711__$1 = (function (){var statearr_12752 = state_12711;
(statearr_12752[(9)] = inst_12654);

(statearr_12752[(11)] = inst_12656);

(statearr_12752[(27)] = inst_12645__$1);

(statearr_12752[(19)] = inst_12655);

(statearr_12752[(20)] = inst_12653);

(statearr_12752[(28)] = inst_12647);

return statearr_12752;
})();
var statearr_12753_14456 = state_12711__$1;
(statearr_12753_14456[(2)] = null);

(statearr_12753_14456[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (28))){
var inst_12653 = (state_12711[(20)]);
var inst_12671 = (state_12711[(23)]);
var inst_12671__$1 = cljs.core.seq(inst_12653);
var state_12711__$1 = (function (){var statearr_12754 = state_12711;
(statearr_12754[(23)] = inst_12671__$1);

return statearr_12754;
})();
if(inst_12671__$1){
var statearr_12755_14457 = state_12711__$1;
(statearr_12755_14457[(1)] = (33));

} else {
var statearr_12756_14458 = state_12711__$1;
(statearr_12756_14458[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (25))){
var inst_12656 = (state_12711[(11)]);
var inst_12655 = (state_12711[(19)]);
var inst_12658 = (inst_12656 < inst_12655);
var inst_12659 = inst_12658;
var state_12711__$1 = state_12711;
if(cljs.core.truth_(inst_12659)){
var statearr_12757_14459 = state_12711__$1;
(statearr_12757_14459[(1)] = (27));

} else {
var statearr_12758_14460 = state_12711__$1;
(statearr_12758_14460[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (34))){
var state_12711__$1 = state_12711;
var statearr_12759_14461 = state_12711__$1;
(statearr_12759_14461[(2)] = null);

(statearr_12759_14461[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (17))){
var state_12711__$1 = state_12711;
var statearr_12760_14462 = state_12711__$1;
(statearr_12760_14462[(2)] = null);

(statearr_12760_14462[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (3))){
var inst_12709 = (state_12711[(2)]);
var state_12711__$1 = state_12711;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12711__$1,inst_12709);
} else {
if((state_val_12712 === (12))){
var inst_12640 = (state_12711[(2)]);
var state_12711__$1 = state_12711;
var statearr_12761_14463 = state_12711__$1;
(statearr_12761_14463[(2)] = inst_12640);

(statearr_12761_14463[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (2))){
var state_12711__$1 = state_12711;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12711__$1,(4),ch);
} else {
if((state_val_12712 === (23))){
var state_12711__$1 = state_12711;
var statearr_12762_14464 = state_12711__$1;
(statearr_12762_14464[(2)] = null);

(statearr_12762_14464[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (35))){
var inst_12693 = (state_12711[(2)]);
var state_12711__$1 = state_12711;
var statearr_12763_14465 = state_12711__$1;
(statearr_12763_14465[(2)] = inst_12693);

(statearr_12763_14465[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (19))){
var inst_12612 = (state_12711[(7)]);
var inst_12616 = cljs.core.chunk_first(inst_12612);
var inst_12617 = cljs.core.chunk_rest(inst_12612);
var inst_12618 = cljs.core.count(inst_12616);
var inst_12590 = inst_12617;
var inst_12591 = inst_12616;
var inst_12592 = inst_12618;
var inst_12593 = (0);
var state_12711__$1 = (function (){var statearr_12764 = state_12711;
(statearr_12764[(13)] = inst_12591);

(statearr_12764[(14)] = inst_12593);

(statearr_12764[(15)] = inst_12590);

(statearr_12764[(16)] = inst_12592);

return statearr_12764;
})();
var statearr_12765_14466 = state_12711__$1;
(statearr_12765_14466[(2)] = null);

(statearr_12765_14466[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (11))){
var inst_12590 = (state_12711[(15)]);
var inst_12612 = (state_12711[(7)]);
var inst_12612__$1 = cljs.core.seq(inst_12590);
var state_12711__$1 = (function (){var statearr_12766 = state_12711;
(statearr_12766[(7)] = inst_12612__$1);

return statearr_12766;
})();
if(inst_12612__$1){
var statearr_12767_14467 = state_12711__$1;
(statearr_12767_14467[(1)] = (16));

} else {
var statearr_12768_14468 = state_12711__$1;
(statearr_12768_14468[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (9))){
var inst_12642 = (state_12711[(2)]);
var state_12711__$1 = state_12711;
var statearr_12769_14475 = state_12711__$1;
(statearr_12769_14475[(2)] = inst_12642);

(statearr_12769_14475[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (5))){
var inst_12588 = cljs.core.deref(cs);
var inst_12589 = cljs.core.seq(inst_12588);
var inst_12590 = inst_12589;
var inst_12591 = null;
var inst_12592 = (0);
var inst_12593 = (0);
var state_12711__$1 = (function (){var statearr_12770 = state_12711;
(statearr_12770[(13)] = inst_12591);

(statearr_12770[(14)] = inst_12593);

(statearr_12770[(15)] = inst_12590);

(statearr_12770[(16)] = inst_12592);

return statearr_12770;
})();
var statearr_12771_14476 = state_12711__$1;
(statearr_12771_14476[(2)] = null);

(statearr_12771_14476[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (14))){
var state_12711__$1 = state_12711;
var statearr_12772_14477 = state_12711__$1;
(statearr_12772_14477[(2)] = null);

(statearr_12772_14477[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (45))){
var inst_12701 = (state_12711[(2)]);
var state_12711__$1 = state_12711;
var statearr_12773_14478 = state_12711__$1;
(statearr_12773_14478[(2)] = inst_12701);

(statearr_12773_14478[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (26))){
var inst_12645 = (state_12711[(27)]);
var inst_12697 = (state_12711[(2)]);
var inst_12698 = cljs.core.seq(inst_12645);
var state_12711__$1 = (function (){var statearr_12774 = state_12711;
(statearr_12774[(29)] = inst_12697);

return statearr_12774;
})();
if(inst_12698){
var statearr_12775_14479 = state_12711__$1;
(statearr_12775_14479[(1)] = (42));

} else {
var statearr_12776_14480 = state_12711__$1;
(statearr_12776_14480[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (16))){
var inst_12612 = (state_12711[(7)]);
var inst_12614 = cljs.core.chunked_seq_QMARK_(inst_12612);
var state_12711__$1 = state_12711;
if(inst_12614){
var statearr_12777_14481 = state_12711__$1;
(statearr_12777_14481[(1)] = (19));

} else {
var statearr_12778_14482 = state_12711__$1;
(statearr_12778_14482[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (38))){
var inst_12690 = (state_12711[(2)]);
var state_12711__$1 = state_12711;
var statearr_12779_14483 = state_12711__$1;
(statearr_12779_14483[(2)] = inst_12690);

(statearr_12779_14483[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (30))){
var state_12711__$1 = state_12711;
var statearr_12780_14484 = state_12711__$1;
(statearr_12780_14484[(2)] = null);

(statearr_12780_14484[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (10))){
var inst_12591 = (state_12711[(13)]);
var inst_12593 = (state_12711[(14)]);
var inst_12601 = cljs.core._nth(inst_12591,inst_12593);
var inst_12602 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12601,(0),null);
var inst_12603 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12601,(1),null);
var state_12711__$1 = (function (){var statearr_12781 = state_12711;
(statearr_12781[(24)] = inst_12602);

return statearr_12781;
})();
if(cljs.core.truth_(inst_12603)){
var statearr_12782_14485 = state_12711__$1;
(statearr_12782_14485[(1)] = (13));

} else {
var statearr_12783_14486 = state_12711__$1;
(statearr_12783_14486[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (18))){
var inst_12638 = (state_12711[(2)]);
var state_12711__$1 = state_12711;
var statearr_12784_14487 = state_12711__$1;
(statearr_12784_14487[(2)] = inst_12638);

(statearr_12784_14487[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (42))){
var state_12711__$1 = state_12711;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12711__$1,(45),dchan);
} else {
if((state_val_12712 === (37))){
var inst_12581 = (state_12711[(10)]);
var inst_12680 = (state_12711[(22)]);
var inst_12671 = (state_12711[(23)]);
var inst_12680__$1 = cljs.core.first(inst_12671);
var inst_12681 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_12680__$1,inst_12581,done);
var state_12711__$1 = (function (){var statearr_12785 = state_12711;
(statearr_12785[(22)] = inst_12680__$1);

return statearr_12785;
})();
if(cljs.core.truth_(inst_12681)){
var statearr_12786_14488 = state_12711__$1;
(statearr_12786_14488[(1)] = (39));

} else {
var statearr_12787_14489 = state_12711__$1;
(statearr_12787_14489[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12712 === (8))){
var inst_12593 = (state_12711[(14)]);
var inst_12592 = (state_12711[(16)]);
var inst_12595 = (inst_12593 < inst_12592);
var inst_12596 = inst_12595;
var state_12711__$1 = state_12711;
if(cljs.core.truth_(inst_12596)){
var statearr_12788_14490 = state_12711__$1;
(statearr_12788_14490[(1)] = (10));

} else {
var statearr_12789_14491 = state_12711__$1;
(statearr_12789_14491[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__12072__auto__ = null;
var cljs$core$async$mult_$_state_machine__12072__auto____0 = (function (){
var statearr_12790 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12790[(0)] = cljs$core$async$mult_$_state_machine__12072__auto__);

(statearr_12790[(1)] = (1));

return statearr_12790;
});
var cljs$core$async$mult_$_state_machine__12072__auto____1 = (function (state_12711){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_12711);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e12791){var ex__12075__auto__ = e12791;
var statearr_12792_14492 = state_12711;
(statearr_12792_14492[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12711[(4)]))){
var statearr_12793_14493 = state_12711;
(statearr_12793_14493[(1)] = cljs.core.first((state_12711[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14494 = state_12711;
state_12711 = G__14494;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__12072__auto__ = function(state_12711){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__12072__auto____1.call(this,state_12711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__12072__auto____0;
cljs$core$async$mult_$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__12072__auto____1;
return cljs$core$async$mult_$_state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_12794 = f__12108__auto__();
(statearr_12794[(6)] = c__12107__auto___14389);

return statearr_12794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__12796 = arguments.length;
switch (G__12796) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_14525 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_14525(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_14527 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_14527(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_14528 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_14528(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_14529 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_14529(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_14530 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_14530(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___14531 = arguments.length;
var i__4737__auto___14532 = (0);
while(true){
if((i__4737__auto___14532 < len__4736__auto___14531)){
args__4742__auto__.push((arguments[i__4737__auto___14532]));

var G__14533 = (i__4737__auto___14532 + (1));
i__4737__auto___14532 = G__14533;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__12801){
var map__12802 = p__12801;
var map__12802__$1 = (((((!((map__12802 == null))))?(((((map__12802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12802.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12802):map__12802);
var opts = map__12802__$1;
var statearr_12804_14534 = state;
(statearr_12804_14534[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_12805_14535 = state;
(statearr_12805_14535[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_12806_14536 = state;
(statearr_12806_14536[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq12797){
var G__12798 = cljs.core.first(seq12797);
var seq12797__$1 = cljs.core.next(seq12797);
var G__12799 = cljs.core.first(seq12797__$1);
var seq12797__$2 = cljs.core.next(seq12797__$1);
var G__12800 = cljs.core.first(seq12797__$2);
var seq12797__$3 = cljs.core.next(seq12797__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12798,G__12799,G__12800,seq12797__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12807 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12807 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12808){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta12808 = meta12808;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12807.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12809,meta12808__$1){
var self__ = this;
var _12809__$1 = this;
return (new cljs.core.async.t_cljs$core$async12807(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12808__$1));
}));

(cljs.core.async.t_cljs$core$async12807.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12809){
var self__ = this;
var _12809__$1 = this;
return self__.meta12808;
}));

(cljs.core.async.t_cljs$core$async12807.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12807.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async12807.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12807.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async12807.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async12807.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async12807.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async12807.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async12807.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta12808","meta12808",-628735870,null)], null);
}));

(cljs.core.async.t_cljs$core$async12807.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12807.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12807");

(cljs.core.async.t_cljs$core$async12807.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12807");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12807.
 */
cljs.core.async.__GT_t_cljs$core$async12807 = (function cljs$core$async$mix_$___GT_t_cljs$core$async12807(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12808){
return (new cljs.core.async.t_cljs$core$async12807(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12808));
});

}

return (new cljs.core.async.t_cljs$core$async12807(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12107__auto___14554 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_12911){
var state_val_12912 = (state_12911[(1)]);
if((state_val_12912 === (7))){
var inst_12826 = (state_12911[(2)]);
var state_12911__$1 = state_12911;
var statearr_12913_14555 = state_12911__$1;
(statearr_12913_14555[(2)] = inst_12826);

(statearr_12913_14555[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (20))){
var inst_12838 = (state_12911[(7)]);
var state_12911__$1 = state_12911;
var statearr_12914_14556 = state_12911__$1;
(statearr_12914_14556[(2)] = inst_12838);

(statearr_12914_14556[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (27))){
var state_12911__$1 = state_12911;
var statearr_12915_14557 = state_12911__$1;
(statearr_12915_14557[(2)] = null);

(statearr_12915_14557[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (1))){
var inst_12813 = (state_12911[(8)]);
var inst_12813__$1 = calc_state();
var inst_12815 = (inst_12813__$1 == null);
var inst_12816 = cljs.core.not(inst_12815);
var state_12911__$1 = (function (){var statearr_12916 = state_12911;
(statearr_12916[(8)] = inst_12813__$1);

return statearr_12916;
})();
if(inst_12816){
var statearr_12917_14558 = state_12911__$1;
(statearr_12917_14558[(1)] = (2));

} else {
var statearr_12918_14559 = state_12911__$1;
(statearr_12918_14559[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (24))){
var inst_12862 = (state_12911[(9)]);
var inst_12871 = (state_12911[(10)]);
var inst_12885 = (state_12911[(11)]);
var inst_12885__$1 = (inst_12862.cljs$core$IFn$_invoke$arity$1 ? inst_12862.cljs$core$IFn$_invoke$arity$1(inst_12871) : inst_12862.call(null,inst_12871));
var state_12911__$1 = (function (){var statearr_12919 = state_12911;
(statearr_12919[(11)] = inst_12885__$1);

return statearr_12919;
})();
if(cljs.core.truth_(inst_12885__$1)){
var statearr_12920_14560 = state_12911__$1;
(statearr_12920_14560[(1)] = (29));

} else {
var statearr_12921_14561 = state_12911__$1;
(statearr_12921_14561[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (4))){
var inst_12829 = (state_12911[(2)]);
var state_12911__$1 = state_12911;
if(cljs.core.truth_(inst_12829)){
var statearr_12922_14562 = state_12911__$1;
(statearr_12922_14562[(1)] = (8));

} else {
var statearr_12923_14563 = state_12911__$1;
(statearr_12923_14563[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (15))){
var inst_12856 = (state_12911[(2)]);
var state_12911__$1 = state_12911;
if(cljs.core.truth_(inst_12856)){
var statearr_12924_14564 = state_12911__$1;
(statearr_12924_14564[(1)] = (19));

} else {
var statearr_12925_14565 = state_12911__$1;
(statearr_12925_14565[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (21))){
var inst_12861 = (state_12911[(12)]);
var inst_12861__$1 = (state_12911[(2)]);
var inst_12862 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12861__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12863 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12861__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12864 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12861__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_12911__$1 = (function (){var statearr_12926 = state_12911;
(statearr_12926[(12)] = inst_12861__$1);

(statearr_12926[(9)] = inst_12862);

(statearr_12926[(13)] = inst_12863);

return statearr_12926;
})();
return cljs.core.async.ioc_alts_BANG_(state_12911__$1,(22),inst_12864);
} else {
if((state_val_12912 === (31))){
var inst_12893 = (state_12911[(2)]);
var state_12911__$1 = state_12911;
if(cljs.core.truth_(inst_12893)){
var statearr_12927_14566 = state_12911__$1;
(statearr_12927_14566[(1)] = (32));

} else {
var statearr_12928_14567 = state_12911__$1;
(statearr_12928_14567[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (32))){
var inst_12870 = (state_12911[(14)]);
var state_12911__$1 = state_12911;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12911__$1,(35),out,inst_12870);
} else {
if((state_val_12912 === (33))){
var inst_12861 = (state_12911[(12)]);
var inst_12838 = inst_12861;
var state_12911__$1 = (function (){var statearr_12929 = state_12911;
(statearr_12929[(7)] = inst_12838);

return statearr_12929;
})();
var statearr_12930_14568 = state_12911__$1;
(statearr_12930_14568[(2)] = null);

(statearr_12930_14568[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (13))){
var inst_12838 = (state_12911[(7)]);
var inst_12845 = inst_12838.cljs$lang$protocol_mask$partition0$;
var inst_12846 = (inst_12845 & (64));
var inst_12847 = inst_12838.cljs$core$ISeq$;
var inst_12848 = (cljs.core.PROTOCOL_SENTINEL === inst_12847);
var inst_12849 = ((inst_12846) || (inst_12848));
var state_12911__$1 = state_12911;
if(cljs.core.truth_(inst_12849)){
var statearr_12931_14569 = state_12911__$1;
(statearr_12931_14569[(1)] = (16));

} else {
var statearr_12932_14570 = state_12911__$1;
(statearr_12932_14570[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (22))){
var inst_12870 = (state_12911[(14)]);
var inst_12871 = (state_12911[(10)]);
var inst_12869 = (state_12911[(2)]);
var inst_12870__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12869,(0),null);
var inst_12871__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12869,(1),null);
var inst_12872 = (inst_12870__$1 == null);
var inst_12873 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12871__$1,change);
var inst_12874 = ((inst_12872) || (inst_12873));
var state_12911__$1 = (function (){var statearr_12933 = state_12911;
(statearr_12933[(14)] = inst_12870__$1);

(statearr_12933[(10)] = inst_12871__$1);

return statearr_12933;
})();
if(cljs.core.truth_(inst_12874)){
var statearr_12934_14571 = state_12911__$1;
(statearr_12934_14571[(1)] = (23));

} else {
var statearr_12935_14572 = state_12911__$1;
(statearr_12935_14572[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (36))){
var inst_12861 = (state_12911[(12)]);
var inst_12838 = inst_12861;
var state_12911__$1 = (function (){var statearr_12936 = state_12911;
(statearr_12936[(7)] = inst_12838);

return statearr_12936;
})();
var statearr_12937_14573 = state_12911__$1;
(statearr_12937_14573[(2)] = null);

(statearr_12937_14573[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (29))){
var inst_12885 = (state_12911[(11)]);
var state_12911__$1 = state_12911;
var statearr_12938_14574 = state_12911__$1;
(statearr_12938_14574[(2)] = inst_12885);

(statearr_12938_14574[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (6))){
var state_12911__$1 = state_12911;
var statearr_12939_14575 = state_12911__$1;
(statearr_12939_14575[(2)] = false);

(statearr_12939_14575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (28))){
var inst_12881 = (state_12911[(2)]);
var inst_12882 = calc_state();
var inst_12838 = inst_12882;
var state_12911__$1 = (function (){var statearr_12940 = state_12911;
(statearr_12940[(7)] = inst_12838);

(statearr_12940[(15)] = inst_12881);

return statearr_12940;
})();
var statearr_12941_14576 = state_12911__$1;
(statearr_12941_14576[(2)] = null);

(statearr_12941_14576[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (25))){
var inst_12907 = (state_12911[(2)]);
var state_12911__$1 = state_12911;
var statearr_12942_14577 = state_12911__$1;
(statearr_12942_14577[(2)] = inst_12907);

(statearr_12942_14577[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (34))){
var inst_12905 = (state_12911[(2)]);
var state_12911__$1 = state_12911;
var statearr_12943_14578 = state_12911__$1;
(statearr_12943_14578[(2)] = inst_12905);

(statearr_12943_14578[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (17))){
var state_12911__$1 = state_12911;
var statearr_12944_14579 = state_12911__$1;
(statearr_12944_14579[(2)] = false);

(statearr_12944_14579[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (3))){
var state_12911__$1 = state_12911;
var statearr_12945_14580 = state_12911__$1;
(statearr_12945_14580[(2)] = false);

(statearr_12945_14580[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (12))){
var inst_12909 = (state_12911[(2)]);
var state_12911__$1 = state_12911;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12911__$1,inst_12909);
} else {
if((state_val_12912 === (2))){
var inst_12813 = (state_12911[(8)]);
var inst_12818 = inst_12813.cljs$lang$protocol_mask$partition0$;
var inst_12819 = (inst_12818 & (64));
var inst_12820 = inst_12813.cljs$core$ISeq$;
var inst_12821 = (cljs.core.PROTOCOL_SENTINEL === inst_12820);
var inst_12822 = ((inst_12819) || (inst_12821));
var state_12911__$1 = state_12911;
if(cljs.core.truth_(inst_12822)){
var statearr_12946_14581 = state_12911__$1;
(statearr_12946_14581[(1)] = (5));

} else {
var statearr_12947_14582 = state_12911__$1;
(statearr_12947_14582[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (23))){
var inst_12870 = (state_12911[(14)]);
var inst_12876 = (inst_12870 == null);
var state_12911__$1 = state_12911;
if(cljs.core.truth_(inst_12876)){
var statearr_12948_14583 = state_12911__$1;
(statearr_12948_14583[(1)] = (26));

} else {
var statearr_12949_14584 = state_12911__$1;
(statearr_12949_14584[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (35))){
var inst_12896 = (state_12911[(2)]);
var state_12911__$1 = state_12911;
if(cljs.core.truth_(inst_12896)){
var statearr_12950_14585 = state_12911__$1;
(statearr_12950_14585[(1)] = (36));

} else {
var statearr_12951_14586 = state_12911__$1;
(statearr_12951_14586[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (19))){
var inst_12838 = (state_12911[(7)]);
var inst_12858 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_12838);
var state_12911__$1 = state_12911;
var statearr_12952_14587 = state_12911__$1;
(statearr_12952_14587[(2)] = inst_12858);

(statearr_12952_14587[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (11))){
var inst_12838 = (state_12911[(7)]);
var inst_12842 = (inst_12838 == null);
var inst_12843 = cljs.core.not(inst_12842);
var state_12911__$1 = state_12911;
if(inst_12843){
var statearr_12953_14588 = state_12911__$1;
(statearr_12953_14588[(1)] = (13));

} else {
var statearr_12954_14589 = state_12911__$1;
(statearr_12954_14589[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (9))){
var inst_12813 = (state_12911[(8)]);
var state_12911__$1 = state_12911;
var statearr_12955_14590 = state_12911__$1;
(statearr_12955_14590[(2)] = inst_12813);

(statearr_12955_14590[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (5))){
var state_12911__$1 = state_12911;
var statearr_12956_14591 = state_12911__$1;
(statearr_12956_14591[(2)] = true);

(statearr_12956_14591[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (14))){
var state_12911__$1 = state_12911;
var statearr_12957_14592 = state_12911__$1;
(statearr_12957_14592[(2)] = false);

(statearr_12957_14592[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (26))){
var inst_12871 = (state_12911[(10)]);
var inst_12878 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_12871);
var state_12911__$1 = state_12911;
var statearr_12958_14593 = state_12911__$1;
(statearr_12958_14593[(2)] = inst_12878);

(statearr_12958_14593[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (16))){
var state_12911__$1 = state_12911;
var statearr_12959_14594 = state_12911__$1;
(statearr_12959_14594[(2)] = true);

(statearr_12959_14594[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (38))){
var inst_12901 = (state_12911[(2)]);
var state_12911__$1 = state_12911;
var statearr_12960_14595 = state_12911__$1;
(statearr_12960_14595[(2)] = inst_12901);

(statearr_12960_14595[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (30))){
var inst_12862 = (state_12911[(9)]);
var inst_12871 = (state_12911[(10)]);
var inst_12863 = (state_12911[(13)]);
var inst_12888 = cljs.core.empty_QMARK_(inst_12862);
var inst_12889 = (inst_12863.cljs$core$IFn$_invoke$arity$1 ? inst_12863.cljs$core$IFn$_invoke$arity$1(inst_12871) : inst_12863.call(null,inst_12871));
var inst_12890 = cljs.core.not(inst_12889);
var inst_12891 = ((inst_12888) && (inst_12890));
var state_12911__$1 = state_12911;
var statearr_12961_14596 = state_12911__$1;
(statearr_12961_14596[(2)] = inst_12891);

(statearr_12961_14596[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (10))){
var inst_12813 = (state_12911[(8)]);
var inst_12834 = (state_12911[(2)]);
var inst_12835 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12834,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12836 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12834,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12837 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12834,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_12838 = inst_12813;
var state_12911__$1 = (function (){var statearr_12962 = state_12911;
(statearr_12962[(16)] = inst_12836);

(statearr_12962[(7)] = inst_12838);

(statearr_12962[(17)] = inst_12837);

(statearr_12962[(18)] = inst_12835);

return statearr_12962;
})();
var statearr_12963_14597 = state_12911__$1;
(statearr_12963_14597[(2)] = null);

(statearr_12963_14597[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (18))){
var inst_12853 = (state_12911[(2)]);
var state_12911__$1 = state_12911;
var statearr_12964_14600 = state_12911__$1;
(statearr_12964_14600[(2)] = inst_12853);

(statearr_12964_14600[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (37))){
var state_12911__$1 = state_12911;
var statearr_12965_14601 = state_12911__$1;
(statearr_12965_14601[(2)] = null);

(statearr_12965_14601[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12912 === (8))){
var inst_12813 = (state_12911[(8)]);
var inst_12831 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_12813);
var state_12911__$1 = state_12911;
var statearr_12966_14602 = state_12911__$1;
(statearr_12966_14602[(2)] = inst_12831);

(statearr_12966_14602[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__12072__auto__ = null;
var cljs$core$async$mix_$_state_machine__12072__auto____0 = (function (){
var statearr_12967 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12967[(0)] = cljs$core$async$mix_$_state_machine__12072__auto__);

(statearr_12967[(1)] = (1));

return statearr_12967;
});
var cljs$core$async$mix_$_state_machine__12072__auto____1 = (function (state_12911){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_12911);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e12968){var ex__12075__auto__ = e12968;
var statearr_12969_14606 = state_12911;
(statearr_12969_14606[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_12911[(4)]))){
var statearr_12970_14607 = state_12911;
(statearr_12970_14607[(1)] = cljs.core.first((state_12911[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14608 = state_12911;
state_12911 = G__14608;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__12072__auto__ = function(state_12911){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__12072__auto____1.call(this,state_12911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__12072__auto____0;
cljs$core$async$mix_$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__12072__auto____1;
return cljs$core$async$mix_$_state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_12971 = f__12108__auto__();
(statearr_12971[(6)] = c__12107__auto___14554);

return statearr_12971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_14612 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_14612(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_14615 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_14615(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_14617 = (function() {
var G__14618 = null;
var G__14618__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__14618__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__14618 = function(p,v){
switch(arguments.length){
case 1:
return G__14618__1.call(this,p);
case 2:
return G__14618__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14618.cljs$core$IFn$_invoke$arity$1 = G__14618__1;
G__14618.cljs$core$IFn$_invoke$arity$2 = G__14618__2;
return G__14618;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__12973 = arguments.length;
switch (G__12973) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_14617(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_14617(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__12976 = arguments.length;
switch (G__12976) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__12974_SHARP_){
if(cljs.core.truth_((p1__12974_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__12974_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__12974_SHARP_.call(null,topic)))){
return p1__12974_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__12974_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12977 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12977 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta12978){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta12978 = meta12978;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12977.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12979,meta12978__$1){
var self__ = this;
var _12979__$1 = this;
return (new cljs.core.async.t_cljs$core$async12977(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta12978__$1));
}));

(cljs.core.async.t_cljs$core$async12977.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12979){
var self__ = this;
var _12979__$1 = this;
return self__.meta12978;
}));

(cljs.core.async.t_cljs$core$async12977.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12977.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async12977.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12977.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async12977.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async12977.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async12977.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async12977.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta12978","meta12978",-173704706,null)], null);
}));

(cljs.core.async.t_cljs$core$async12977.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12977.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12977");

(cljs.core.async.t_cljs$core$async12977.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async12977");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12977.
 */
cljs.core.async.__GT_t_cljs$core$async12977 = (function cljs$core$async$__GT_t_cljs$core$async12977(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12978){
return (new cljs.core.async.t_cljs$core$async12977(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12978));
});

}

return (new cljs.core.async.t_cljs$core$async12977(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12107__auto___14624 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13055){
var state_val_13056 = (state_13055[(1)]);
if((state_val_13056 === (7))){
var inst_13048 = (state_13055[(2)]);
var state_13055__$1 = state_13055;
var statearr_13057_14625 = state_13055__$1;
(statearr_13057_14625[(2)] = inst_13048);

(statearr_13057_14625[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13056 === (20))){
var state_13055__$1 = state_13055;
var statearr_13059_14626 = state_13055__$1;
(statearr_13059_14626[(2)] = null);

(statearr_13059_14626[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13056 === (1))){
var state_13055__$1 = state_13055;
var statearr_13063_14627 = state_13055__$1;
(statearr_13063_14627[(2)] = null);

(statearr_13063_14627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13056 === (24))){
var inst_13031 = (state_13055[(7)]);
var inst_13040 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_13031);
var state_13055__$1 = state_13055;
var statearr_13065_14628 = state_13055__$1;
(statearr_13065_14628[(2)] = inst_13040);

(statearr_13065_14628[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13056 === (4))){
var inst_12983 = (state_13055[(8)]);
var inst_12983__$1 = (state_13055[(2)]);
var inst_12984 = (inst_12983__$1 == null);
var state_13055__$1 = (function (){var statearr_13066 = state_13055;
(statearr_13066[(8)] = inst_12983__$1);

return statearr_13066;
})();
if(cljs.core.truth_(inst_12984)){
var statearr_13067_14629 = state_13055__$1;
(statearr_13067_14629[(1)] = (5));

} else {
var statearr_13068_14630 = state_13055__$1;
(statearr_13068_14630[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13056 === (15))){
var inst_13025 = (state_13055[(2)]);
var state_13055__$1 = state_13055;
var statearr_13069_14631 = state_13055__$1;
(statearr_13069_14631[(2)] = inst_13025);

(statearr_13069_14631[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13056 === (21))){
var inst_13045 = (state_13055[(2)]);
var state_13055__$1 = (function (){var statearr_13070 = state_13055;
(statearr_13070[(9)] = inst_13045);

return statearr_13070;
})();
var statearr_13071_14632 = state_13055__$1;
(statearr_13071_14632[(2)] = null);

(statearr_13071_14632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13056 === (13))){
var inst_13007 = (state_13055[(10)]);
var inst_13009 = cljs.core.chunked_seq_QMARK_(inst_13007);
var state_13055__$1 = state_13055;
if(inst_13009){
var statearr_13072_14633 = state_13055__$1;
(statearr_13072_14633[(1)] = (16));

} else {
var statearr_13073_14634 = state_13055__$1;
(statearr_13073_14634[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13056 === (22))){
var inst_13037 = (state_13055[(2)]);
var state_13055__$1 = state_13055;
if(cljs.core.truth_(inst_13037)){
var statearr_13074_14635 = state_13055__$1;
(statearr_13074_14635[(1)] = (23));

} else {
var statearr_13075_14636 = state_13055__$1;
(statearr_13075_14636[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13056 === (6))){
var inst_12983 = (state_13055[(8)]);
var inst_13031 = (state_13055[(7)]);
var inst_13033 = (state_13055[(11)]);
var inst_13031__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_12983) : topic_fn.call(null,inst_12983));
var inst_13032 = cljs.core.deref(mults);
var inst_13033__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13032,inst_13031__$1);
var state_13055__$1 = (function (){var statearr_13077 = state_13055;
(statearr_13077[(7)] = inst_13031__$1);

(statearr_13077[(11)] = inst_13033__$1);

return statearr_13077;
})();
if(cljs.core.truth_(inst_13033__$1)){
var statearr_13078_14637 = state_13055__$1;
(statearr_13078_14637[(1)] = (19));

} else {
var statearr_13079_14638 = state_13055__$1;
(statearr_13079_14638[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13056 === (25))){
var inst_13042 = (state_13055[(2)]);
var state_13055__$1 = state_13055;
var statearr_13080_14639 = state_13055__$1;
(statearr_13080_14639[(2)] = inst_13042);

(statearr_13080_14639[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13056 === (17))){
var inst_13007 = (state_13055[(10)]);
var inst_13016 = cljs.core.first(inst_13007);
var inst_13017 = cljs.core.async.muxch_STAR_(inst_13016);
var inst_13018 = cljs.core.async.close_BANG_(inst_13017);
var inst_13019 = cljs.core.next(inst_13007);
var inst_12993 = inst_13019;
var inst_12994 = null;
var inst_12995 = (0);
var inst_12996 = (0);
var state_13055__$1 = (function (){var statearr_13082 = state_13055;
(statearr_13082[(12)] = inst_12995);

(statearr_13082[(13)] = inst_12994);

(statearr_13082[(14)] = inst_12993);

(statearr_13082[(15)] = inst_12996);

(statearr_13082[(16)] = inst_13018);

return statearr_13082;
})();
var statearr_13083_14640 = state_13055__$1;
(statearr_13083_14640[(2)] = null);

(statearr_13083_14640[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13056 === (3))){
var inst_13050 = (state_13055[(2)]);
var state_13055__$1 = state_13055;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13055__$1,inst_13050);
} else {
if((state_val_13056 === (12))){
var inst_13027 = (state_13055[(2)]);
var state_13055__$1 = state_13055;
var statearr_13087_14641 = state_13055__$1;
(statearr_13087_14641[(2)] = inst_13027);

(statearr_13087_14641[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13056 === (2))){
var state_13055__$1 = state_13055;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13055__$1,(4),ch);
} else {
if((state_val_13056 === (23))){
var state_13055__$1 = state_13055;
var statearr_13088_14642 = state_13055__$1;
(statearr_13088_14642[(2)] = null);

(statearr_13088_14642[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13056 === (19))){
var inst_12983 = (state_13055[(8)]);
var inst_13033 = (state_13055[(11)]);
var inst_13035 = cljs.core.async.muxch_STAR_(inst_13033);
var state_13055__$1 = state_13055;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13055__$1,(22),inst_13035,inst_12983);
} else {
if((state_val_13056 === (11))){
var inst_13007 = (state_13055[(10)]);
var inst_12993 = (state_13055[(14)]);
var inst_13007__$1 = cljs.core.seq(inst_12993);
var state_13055__$1 = (function (){var statearr_13089 = state_13055;
(statearr_13089[(10)] = inst_13007__$1);

return statearr_13089;
})();
if(inst_13007__$1){
var statearr_13090_14643 = state_13055__$1;
(statearr_13090_14643[(1)] = (13));

} else {
var statearr_13091_14644 = state_13055__$1;
(statearr_13091_14644[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13056 === (9))){
var inst_13029 = (state_13055[(2)]);
var state_13055__$1 = state_13055;
var statearr_13092_14645 = state_13055__$1;
(statearr_13092_14645[(2)] = inst_13029);

(statearr_13092_14645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13056 === (5))){
var inst_12990 = cljs.core.deref(mults);
var inst_12991 = cljs.core.vals(inst_12990);
var inst_12992 = cljs.core.seq(inst_12991);
var inst_12993 = inst_12992;
var inst_12994 = null;
var inst_12995 = (0);
var inst_12996 = (0);
var state_13055__$1 = (function (){var statearr_13093 = state_13055;
(statearr_13093[(12)] = inst_12995);

(statearr_13093[(13)] = inst_12994);

(statearr_13093[(14)] = inst_12993);

(statearr_13093[(15)] = inst_12996);

return statearr_13093;
})();
var statearr_13094_14646 = state_13055__$1;
(statearr_13094_14646[(2)] = null);

(statearr_13094_14646[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13056 === (14))){
var state_13055__$1 = state_13055;
var statearr_13098_14647 = state_13055__$1;
(statearr_13098_14647[(2)] = null);

(statearr_13098_14647[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13056 === (16))){
var inst_13007 = (state_13055[(10)]);
var inst_13011 = cljs.core.chunk_first(inst_13007);
var inst_13012 = cljs.core.chunk_rest(inst_13007);
var inst_13013 = cljs.core.count(inst_13011);
var inst_12993 = inst_13012;
var inst_12994 = inst_13011;
var inst_12995 = inst_13013;
var inst_12996 = (0);
var state_13055__$1 = (function (){var statearr_13099 = state_13055;
(statearr_13099[(12)] = inst_12995);

(statearr_13099[(13)] = inst_12994);

(statearr_13099[(14)] = inst_12993);

(statearr_13099[(15)] = inst_12996);

return statearr_13099;
})();
var statearr_13100_14651 = state_13055__$1;
(statearr_13100_14651[(2)] = null);

(statearr_13100_14651[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13056 === (10))){
var inst_12995 = (state_13055[(12)]);
var inst_12994 = (state_13055[(13)]);
var inst_12993 = (state_13055[(14)]);
var inst_12996 = (state_13055[(15)]);
var inst_13001 = cljs.core._nth(inst_12994,inst_12996);
var inst_13002 = cljs.core.async.muxch_STAR_(inst_13001);
var inst_13003 = cljs.core.async.close_BANG_(inst_13002);
var inst_13004 = (inst_12996 + (1));
var tmp13095 = inst_12995;
var tmp13096 = inst_12994;
var tmp13097 = inst_12993;
var inst_12993__$1 = tmp13097;
var inst_12994__$1 = tmp13096;
var inst_12995__$1 = tmp13095;
var inst_12996__$1 = inst_13004;
var state_13055__$1 = (function (){var statearr_13101 = state_13055;
(statearr_13101[(12)] = inst_12995__$1);

(statearr_13101[(17)] = inst_13003);

(statearr_13101[(13)] = inst_12994__$1);

(statearr_13101[(14)] = inst_12993__$1);

(statearr_13101[(15)] = inst_12996__$1);

return statearr_13101;
})();
var statearr_13102_14656 = state_13055__$1;
(statearr_13102_14656[(2)] = null);

(statearr_13102_14656[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13056 === (18))){
var inst_13022 = (state_13055[(2)]);
var state_13055__$1 = state_13055;
var statearr_13103_14658 = state_13055__$1;
(statearr_13103_14658[(2)] = inst_13022);

(statearr_13103_14658[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13056 === (8))){
var inst_12995 = (state_13055[(12)]);
var inst_12996 = (state_13055[(15)]);
var inst_12998 = (inst_12996 < inst_12995);
var inst_12999 = inst_12998;
var state_13055__$1 = state_13055;
if(cljs.core.truth_(inst_12999)){
var statearr_13104_14662 = state_13055__$1;
(statearr_13104_14662[(1)] = (10));

} else {
var statearr_13105_14663 = state_13055__$1;
(statearr_13105_14663[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12072__auto__ = null;
var cljs$core$async$state_machine__12072__auto____0 = (function (){
var statearr_13106 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13106[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_13106[(1)] = (1));

return statearr_13106;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_13055){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_13055);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e13107){var ex__12075__auto__ = e13107;
var statearr_13108_14668 = state_13055;
(statearr_13108_14668[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13055[(4)]))){
var statearr_13109_14669 = state_13055;
(statearr_13109_14669[(1)] = cljs.core.first((state_13055[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14671 = state_13055;
state_13055 = G__14671;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_13055){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_13055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13110 = f__12108__auto__();
(statearr_13110[(6)] = c__12107__auto___14624);

return statearr_13110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__13117 = arguments.length;
switch (G__13117) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__13120 = arguments.length;
switch (G__13120) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__13124 = arguments.length;
switch (G__13124) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__12107__auto___14679 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13185){
var state_val_13186 = (state_13185[(1)]);
if((state_val_13186 === (7))){
var state_13185__$1 = state_13185;
var statearr_13187_14680 = state_13185__$1;
(statearr_13187_14680[(2)] = null);

(statearr_13187_14680[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13186 === (1))){
var state_13185__$1 = state_13185;
var statearr_13188_14681 = state_13185__$1;
(statearr_13188_14681[(2)] = null);

(statearr_13188_14681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13186 === (4))){
var inst_13135 = (state_13185[(7)]);
var inst_13134 = (state_13185[(8)]);
var inst_13137 = (inst_13135 < inst_13134);
var state_13185__$1 = state_13185;
if(cljs.core.truth_(inst_13137)){
var statearr_13189_14682 = state_13185__$1;
(statearr_13189_14682[(1)] = (6));

} else {
var statearr_13190_14683 = state_13185__$1;
(statearr_13190_14683[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13186 === (15))){
var inst_13171 = (state_13185[(9)]);
var inst_13176 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_13171);
var state_13185__$1 = state_13185;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13185__$1,(17),out,inst_13176);
} else {
if((state_val_13186 === (13))){
var inst_13171 = (state_13185[(9)]);
var inst_13171__$1 = (state_13185[(2)]);
var inst_13172 = cljs.core.some(cljs.core.nil_QMARK_,inst_13171__$1);
var state_13185__$1 = (function (){var statearr_13191 = state_13185;
(statearr_13191[(9)] = inst_13171__$1);

return statearr_13191;
})();
if(cljs.core.truth_(inst_13172)){
var statearr_13192_14684 = state_13185__$1;
(statearr_13192_14684[(1)] = (14));

} else {
var statearr_13193_14685 = state_13185__$1;
(statearr_13193_14685[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13186 === (6))){
var state_13185__$1 = state_13185;
var statearr_13194_14686 = state_13185__$1;
(statearr_13194_14686[(2)] = null);

(statearr_13194_14686[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13186 === (17))){
var inst_13178 = (state_13185[(2)]);
var state_13185__$1 = (function (){var statearr_13196 = state_13185;
(statearr_13196[(10)] = inst_13178);

return statearr_13196;
})();
var statearr_13197_14687 = state_13185__$1;
(statearr_13197_14687[(2)] = null);

(statearr_13197_14687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13186 === (3))){
var inst_13183 = (state_13185[(2)]);
var state_13185__$1 = state_13185;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13185__$1,inst_13183);
} else {
if((state_val_13186 === (12))){
var _ = (function (){var statearr_13198 = state_13185;
(statearr_13198[(4)] = cljs.core.rest((state_13185[(4)])));

return statearr_13198;
})();
var state_13185__$1 = state_13185;
var ex13195 = (state_13185__$1[(2)]);
var statearr_13199_14688 = state_13185__$1;
(statearr_13199_14688[(5)] = ex13195);


if((ex13195 instanceof Object)){
var statearr_13200_14689 = state_13185__$1;
(statearr_13200_14689[(1)] = (11));

(statearr_13200_14689[(5)] = null);

} else {
throw ex13195;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13186 === (2))){
var inst_13133 = cljs.core.reset_BANG_(dctr,cnt);
var inst_13134 = cnt;
var inst_13135 = (0);
var state_13185__$1 = (function (){var statearr_13201 = state_13185;
(statearr_13201[(7)] = inst_13135);

(statearr_13201[(11)] = inst_13133);

(statearr_13201[(8)] = inst_13134);

return statearr_13201;
})();
var statearr_13202_14690 = state_13185__$1;
(statearr_13202_14690[(2)] = null);

(statearr_13202_14690[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13186 === (11))){
var inst_13147 = (state_13185[(2)]);
var inst_13148 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_13185__$1 = (function (){var statearr_13203 = state_13185;
(statearr_13203[(12)] = inst_13147);

return statearr_13203;
})();
var statearr_13204_14691 = state_13185__$1;
(statearr_13204_14691[(2)] = inst_13148);

(statearr_13204_14691[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13186 === (9))){
var inst_13135 = (state_13185[(7)]);
var _ = (function (){var statearr_13205 = state_13185;
(statearr_13205[(4)] = cljs.core.cons((12),(state_13185[(4)])));

return statearr_13205;
})();
var inst_13157 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_13135) : chs__$1.call(null,inst_13135));
var inst_13158 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_13135) : done.call(null,inst_13135));
var inst_13159 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_13157,inst_13158);
var ___$1 = (function (){var statearr_13206 = state_13185;
(statearr_13206[(4)] = cljs.core.rest((state_13185[(4)])));

return statearr_13206;
})();
var state_13185__$1 = state_13185;
var statearr_13207_14692 = state_13185__$1;
(statearr_13207_14692[(2)] = inst_13159);

(statearr_13207_14692[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13186 === (5))){
var inst_13169 = (state_13185[(2)]);
var state_13185__$1 = (function (){var statearr_13208 = state_13185;
(statearr_13208[(13)] = inst_13169);

return statearr_13208;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13185__$1,(13),dchan);
} else {
if((state_val_13186 === (14))){
var inst_13174 = cljs.core.async.close_BANG_(out);
var state_13185__$1 = state_13185;
var statearr_13209_14693 = state_13185__$1;
(statearr_13209_14693[(2)] = inst_13174);

(statearr_13209_14693[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13186 === (16))){
var inst_13181 = (state_13185[(2)]);
var state_13185__$1 = state_13185;
var statearr_13210_14694 = state_13185__$1;
(statearr_13210_14694[(2)] = inst_13181);

(statearr_13210_14694[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13186 === (10))){
var inst_13135 = (state_13185[(7)]);
var inst_13162 = (state_13185[(2)]);
var inst_13163 = (inst_13135 + (1));
var inst_13135__$1 = inst_13163;
var state_13185__$1 = (function (){var statearr_13211 = state_13185;
(statearr_13211[(7)] = inst_13135__$1);

(statearr_13211[(14)] = inst_13162);

return statearr_13211;
})();
var statearr_13212_14695 = state_13185__$1;
(statearr_13212_14695[(2)] = null);

(statearr_13212_14695[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13186 === (8))){
var inst_13167 = (state_13185[(2)]);
var state_13185__$1 = state_13185;
var statearr_13213_14696 = state_13185__$1;
(statearr_13213_14696[(2)] = inst_13167);

(statearr_13213_14696[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12072__auto__ = null;
var cljs$core$async$state_machine__12072__auto____0 = (function (){
var statearr_13214 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13214[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_13214[(1)] = (1));

return statearr_13214;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_13185){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_13185);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e13215){var ex__12075__auto__ = e13215;
var statearr_13216_14697 = state_13185;
(statearr_13216_14697[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13185[(4)]))){
var statearr_13217_14698 = state_13185;
(statearr_13217_14698[(1)] = cljs.core.first((state_13185[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14699 = state_13185;
state_13185 = G__14699;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_13185){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_13185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13219 = f__12108__auto__();
(statearr_13219[(6)] = c__12107__auto___14679);

return statearr_13219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__13222 = arguments.length;
switch (G__13222) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12107__auto___14704 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13254){
var state_val_13255 = (state_13254[(1)]);
if((state_val_13255 === (7))){
var inst_13233 = (state_13254[(7)]);
var inst_13234 = (state_13254[(8)]);
var inst_13233__$1 = (state_13254[(2)]);
var inst_13234__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13233__$1,(0),null);
var inst_13235 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13233__$1,(1),null);
var inst_13236 = (inst_13234__$1 == null);
var state_13254__$1 = (function (){var statearr_13256 = state_13254;
(statearr_13256[(7)] = inst_13233__$1);

(statearr_13256[(8)] = inst_13234__$1);

(statearr_13256[(9)] = inst_13235);

return statearr_13256;
})();
if(cljs.core.truth_(inst_13236)){
var statearr_13257_14709 = state_13254__$1;
(statearr_13257_14709[(1)] = (8));

} else {
var statearr_13258_14710 = state_13254__$1;
(statearr_13258_14710[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13255 === (1))){
var inst_13223 = cljs.core.vec(chs);
var inst_13224 = inst_13223;
var state_13254__$1 = (function (){var statearr_13259 = state_13254;
(statearr_13259[(10)] = inst_13224);

return statearr_13259;
})();
var statearr_13260_14713 = state_13254__$1;
(statearr_13260_14713[(2)] = null);

(statearr_13260_14713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13255 === (4))){
var inst_13224 = (state_13254[(10)]);
var state_13254__$1 = state_13254;
return cljs.core.async.ioc_alts_BANG_(state_13254__$1,(7),inst_13224);
} else {
if((state_val_13255 === (6))){
var inst_13250 = (state_13254[(2)]);
var state_13254__$1 = state_13254;
var statearr_13262_14714 = state_13254__$1;
(statearr_13262_14714[(2)] = inst_13250);

(statearr_13262_14714[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13255 === (3))){
var inst_13252 = (state_13254[(2)]);
var state_13254__$1 = state_13254;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13254__$1,inst_13252);
} else {
if((state_val_13255 === (2))){
var inst_13224 = (state_13254[(10)]);
var inst_13226 = cljs.core.count(inst_13224);
var inst_13227 = (inst_13226 > (0));
var state_13254__$1 = state_13254;
if(cljs.core.truth_(inst_13227)){
var statearr_13265_14715 = state_13254__$1;
(statearr_13265_14715[(1)] = (4));

} else {
var statearr_13266_14717 = state_13254__$1;
(statearr_13266_14717[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13255 === (11))){
var inst_13224 = (state_13254[(10)]);
var inst_13243 = (state_13254[(2)]);
var tmp13263 = inst_13224;
var inst_13224__$1 = tmp13263;
var state_13254__$1 = (function (){var statearr_13267 = state_13254;
(statearr_13267[(10)] = inst_13224__$1);

(statearr_13267[(11)] = inst_13243);

return statearr_13267;
})();
var statearr_13268_14721 = state_13254__$1;
(statearr_13268_14721[(2)] = null);

(statearr_13268_14721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13255 === (9))){
var inst_13234 = (state_13254[(8)]);
var state_13254__$1 = state_13254;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13254__$1,(11),out,inst_13234);
} else {
if((state_val_13255 === (5))){
var inst_13248 = cljs.core.async.close_BANG_(out);
var state_13254__$1 = state_13254;
var statearr_13269_14722 = state_13254__$1;
(statearr_13269_14722[(2)] = inst_13248);

(statearr_13269_14722[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13255 === (10))){
var inst_13246 = (state_13254[(2)]);
var state_13254__$1 = state_13254;
var statearr_13270_14723 = state_13254__$1;
(statearr_13270_14723[(2)] = inst_13246);

(statearr_13270_14723[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13255 === (8))){
var inst_13233 = (state_13254[(7)]);
var inst_13234 = (state_13254[(8)]);
var inst_13224 = (state_13254[(10)]);
var inst_13235 = (state_13254[(9)]);
var inst_13238 = (function (){var cs = inst_13224;
var vec__13229 = inst_13233;
var v = inst_13234;
var c = inst_13235;
return (function (p1__13220_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__13220_SHARP_);
});
})();
var inst_13239 = cljs.core.filterv(inst_13238,inst_13224);
var inst_13224__$1 = inst_13239;
var state_13254__$1 = (function (){var statearr_13271 = state_13254;
(statearr_13271[(10)] = inst_13224__$1);

return statearr_13271;
})();
var statearr_13272_14724 = state_13254__$1;
(statearr_13272_14724[(2)] = null);

(statearr_13272_14724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12072__auto__ = null;
var cljs$core$async$state_machine__12072__auto____0 = (function (){
var statearr_13273 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13273[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_13273[(1)] = (1));

return statearr_13273;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_13254){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_13254);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e13274){var ex__12075__auto__ = e13274;
var statearr_13275_14725 = state_13254;
(statearr_13275_14725[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13254[(4)]))){
var statearr_13276_14726 = state_13254;
(statearr_13276_14726[(1)] = cljs.core.first((state_13254[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14727 = state_13254;
state_13254 = G__14727;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_13254){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_13254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13277 = f__12108__auto__();
(statearr_13277[(6)] = c__12107__auto___14704);

return statearr_13277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__13279 = arguments.length;
switch (G__13279) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12107__auto___14729 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13303){
var state_val_13304 = (state_13303[(1)]);
if((state_val_13304 === (7))){
var inst_13285 = (state_13303[(7)]);
var inst_13285__$1 = (state_13303[(2)]);
var inst_13286 = (inst_13285__$1 == null);
var inst_13287 = cljs.core.not(inst_13286);
var state_13303__$1 = (function (){var statearr_13307 = state_13303;
(statearr_13307[(7)] = inst_13285__$1);

return statearr_13307;
})();
if(inst_13287){
var statearr_13308_14730 = state_13303__$1;
(statearr_13308_14730[(1)] = (8));

} else {
var statearr_13309_14731 = state_13303__$1;
(statearr_13309_14731[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13304 === (1))){
var inst_13280 = (0);
var state_13303__$1 = (function (){var statearr_13310 = state_13303;
(statearr_13310[(8)] = inst_13280);

return statearr_13310;
})();
var statearr_13311_14732 = state_13303__$1;
(statearr_13311_14732[(2)] = null);

(statearr_13311_14732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13304 === (4))){
var state_13303__$1 = state_13303;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13303__$1,(7),ch);
} else {
if((state_val_13304 === (6))){
var inst_13298 = (state_13303[(2)]);
var state_13303__$1 = state_13303;
var statearr_13315_14733 = state_13303__$1;
(statearr_13315_14733[(2)] = inst_13298);

(statearr_13315_14733[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13304 === (3))){
var inst_13300 = (state_13303[(2)]);
var inst_13301 = cljs.core.async.close_BANG_(out);
var state_13303__$1 = (function (){var statearr_13316 = state_13303;
(statearr_13316[(9)] = inst_13300);

return statearr_13316;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_13303__$1,inst_13301);
} else {
if((state_val_13304 === (2))){
var inst_13280 = (state_13303[(8)]);
var inst_13282 = (inst_13280 < n);
var state_13303__$1 = state_13303;
if(cljs.core.truth_(inst_13282)){
var statearr_13317_14734 = state_13303__$1;
(statearr_13317_14734[(1)] = (4));

} else {
var statearr_13318_14735 = state_13303__$1;
(statearr_13318_14735[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13304 === (11))){
var inst_13280 = (state_13303[(8)]);
var inst_13290 = (state_13303[(2)]);
var inst_13291 = (inst_13280 + (1));
var inst_13280__$1 = inst_13291;
var state_13303__$1 = (function (){var statearr_13319 = state_13303;
(statearr_13319[(10)] = inst_13290);

(statearr_13319[(8)] = inst_13280__$1);

return statearr_13319;
})();
var statearr_13320_14736 = state_13303__$1;
(statearr_13320_14736[(2)] = null);

(statearr_13320_14736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13304 === (9))){
var state_13303__$1 = state_13303;
var statearr_13321_14737 = state_13303__$1;
(statearr_13321_14737[(2)] = null);

(statearr_13321_14737[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13304 === (5))){
var state_13303__$1 = state_13303;
var statearr_13322_14738 = state_13303__$1;
(statearr_13322_14738[(2)] = null);

(statearr_13322_14738[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13304 === (10))){
var inst_13295 = (state_13303[(2)]);
var state_13303__$1 = state_13303;
var statearr_13323_14739 = state_13303__$1;
(statearr_13323_14739[(2)] = inst_13295);

(statearr_13323_14739[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13304 === (8))){
var inst_13285 = (state_13303[(7)]);
var state_13303__$1 = state_13303;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13303__$1,(11),out,inst_13285);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12072__auto__ = null;
var cljs$core$async$state_machine__12072__auto____0 = (function (){
var statearr_13325 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13325[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_13325[(1)] = (1));

return statearr_13325;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_13303){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_13303);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e13326){var ex__12075__auto__ = e13326;
var statearr_13327_14740 = state_13303;
(statearr_13327_14740[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13303[(4)]))){
var statearr_13328_14741 = state_13303;
(statearr_13328_14741[(1)] = cljs.core.first((state_13303[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14742 = state_13303;
state_13303 = G__14742;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_13303){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_13303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13329 = f__12108__auto__();
(statearr_13329[(6)] = c__12107__auto___14729);

return statearr_13329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13334 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13334 = (function (f,ch,meta13335){
this.f = f;
this.ch = ch;
this.meta13335 = meta13335;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13334.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13336,meta13335__$1){
var self__ = this;
var _13336__$1 = this;
return (new cljs.core.async.t_cljs$core$async13334(self__.f,self__.ch,meta13335__$1));
}));

(cljs.core.async.t_cljs$core$async13334.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13336){
var self__ = this;
var _13336__$1 = this;
return self__.meta13335;
}));

(cljs.core.async.t_cljs$core$async13334.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13334.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async13334.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async13334.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13334.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13337 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13337 = (function (f,ch,meta13335,_,fn1,meta13338){
this.f = f;
this.ch = ch;
this.meta13335 = meta13335;
this._ = _;
this.fn1 = fn1;
this.meta13338 = meta13338;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13337.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13339,meta13338__$1){
var self__ = this;
var _13339__$1 = this;
return (new cljs.core.async.t_cljs$core$async13337(self__.f,self__.ch,self__.meta13335,self__._,self__.fn1,meta13338__$1));
}));

(cljs.core.async.t_cljs$core$async13337.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13339){
var self__ = this;
var _13339__$1 = this;
return self__.meta13338;
}));

(cljs.core.async.t_cljs$core$async13337.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13337.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async13337.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13337.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__13330_SHARP_){
var G__13340 = (((p1__13330_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__13330_SHARP_) : self__.f.call(null,p1__13330_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__13340) : f1.call(null,G__13340));
});
}));

(cljs.core.async.t_cljs$core$async13337.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13335","meta13335",1571897129,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async13334","cljs.core.async/t_cljs$core$async13334",1001283408,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta13338","meta13338",1152922182,null)], null);
}));

(cljs.core.async.t_cljs$core$async13337.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13337.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13337");

(cljs.core.async.t_cljs$core$async13337.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async13337");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13337.
 */
cljs.core.async.__GT_t_cljs$core$async13337 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13337(f__$1,ch__$1,meta13335__$1,___$2,fn1__$1,meta13338){
return (new cljs.core.async.t_cljs$core$async13337(f__$1,ch__$1,meta13335__$1,___$2,fn1__$1,meta13338));
});

}

return (new cljs.core.async.t_cljs$core$async13337(self__.f,self__.ch,self__.meta13335,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__13341 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__13341) : self__.f.call(null,G__13341));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async13334.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13334.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async13334.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13335","meta13335",1571897129,null)], null);
}));

(cljs.core.async.t_cljs$core$async13334.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13334.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13334");

(cljs.core.async.t_cljs$core$async13334.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async13334");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13334.
 */
cljs.core.async.__GT_t_cljs$core$async13334 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13334(f__$1,ch__$1,meta13335){
return (new cljs.core.async.t_cljs$core$async13334(f__$1,ch__$1,meta13335));
});

}

return (new cljs.core.async.t_cljs$core$async13334(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13342 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13342 = (function (f,ch,meta13343){
this.f = f;
this.ch = ch;
this.meta13343 = meta13343;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13342.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13344,meta13343__$1){
var self__ = this;
var _13344__$1 = this;
return (new cljs.core.async.t_cljs$core$async13342(self__.f,self__.ch,meta13343__$1));
}));

(cljs.core.async.t_cljs$core$async13342.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13344){
var self__ = this;
var _13344__$1 = this;
return self__.meta13343;
}));

(cljs.core.async.t_cljs$core$async13342.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13342.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async13342.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13342.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async13342.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13342.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async13342.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13343","meta13343",1597984752,null)], null);
}));

(cljs.core.async.t_cljs$core$async13342.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13342.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13342");

(cljs.core.async.t_cljs$core$async13342.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async13342");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13342.
 */
cljs.core.async.__GT_t_cljs$core$async13342 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async13342(f__$1,ch__$1,meta13343){
return (new cljs.core.async.t_cljs$core$async13342(f__$1,ch__$1,meta13343));
});

}

return (new cljs.core.async.t_cljs$core$async13342(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13345 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13345 = (function (p,ch,meta13346){
this.p = p;
this.ch = ch;
this.meta13346 = meta13346;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13345.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13347,meta13346__$1){
var self__ = this;
var _13347__$1 = this;
return (new cljs.core.async.t_cljs$core$async13345(self__.p,self__.ch,meta13346__$1));
}));

(cljs.core.async.t_cljs$core$async13345.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13347){
var self__ = this;
var _13347__$1 = this;
return self__.meta13346;
}));

(cljs.core.async.t_cljs$core$async13345.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13345.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async13345.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async13345.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13345.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async13345.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13345.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async13345.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13346","meta13346",158002797,null)], null);
}));

(cljs.core.async.t_cljs$core$async13345.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13345.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13345");

(cljs.core.async.t_cljs$core$async13345.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async13345");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13345.
 */
cljs.core.async.__GT_t_cljs$core$async13345 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async13345(p__$1,ch__$1,meta13346){
return (new cljs.core.async.t_cljs$core$async13345(p__$1,ch__$1,meta13346));
});

}

return (new cljs.core.async.t_cljs$core$async13345(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__13349 = arguments.length;
switch (G__13349) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12107__auto___14744 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13370){
var state_val_13371 = (state_13370[(1)]);
if((state_val_13371 === (7))){
var inst_13366 = (state_13370[(2)]);
var state_13370__$1 = state_13370;
var statearr_13372_14745 = state_13370__$1;
(statearr_13372_14745[(2)] = inst_13366);

(statearr_13372_14745[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13371 === (1))){
var state_13370__$1 = state_13370;
var statearr_13373_14746 = state_13370__$1;
(statearr_13373_14746[(2)] = null);

(statearr_13373_14746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13371 === (4))){
var inst_13352 = (state_13370[(7)]);
var inst_13352__$1 = (state_13370[(2)]);
var inst_13353 = (inst_13352__$1 == null);
var state_13370__$1 = (function (){var statearr_13374 = state_13370;
(statearr_13374[(7)] = inst_13352__$1);

return statearr_13374;
})();
if(cljs.core.truth_(inst_13353)){
var statearr_13375_14747 = state_13370__$1;
(statearr_13375_14747[(1)] = (5));

} else {
var statearr_13376_14748 = state_13370__$1;
(statearr_13376_14748[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13371 === (6))){
var inst_13352 = (state_13370[(7)]);
var inst_13357 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_13352) : p.call(null,inst_13352));
var state_13370__$1 = state_13370;
if(cljs.core.truth_(inst_13357)){
var statearr_13377_14749 = state_13370__$1;
(statearr_13377_14749[(1)] = (8));

} else {
var statearr_13379_14750 = state_13370__$1;
(statearr_13379_14750[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13371 === (3))){
var inst_13368 = (state_13370[(2)]);
var state_13370__$1 = state_13370;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13370__$1,inst_13368);
} else {
if((state_val_13371 === (2))){
var state_13370__$1 = state_13370;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13370__$1,(4),ch);
} else {
if((state_val_13371 === (11))){
var inst_13360 = (state_13370[(2)]);
var state_13370__$1 = state_13370;
var statearr_13380_14751 = state_13370__$1;
(statearr_13380_14751[(2)] = inst_13360);

(statearr_13380_14751[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13371 === (9))){
var state_13370__$1 = state_13370;
var statearr_13381_14752 = state_13370__$1;
(statearr_13381_14752[(2)] = null);

(statearr_13381_14752[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13371 === (5))){
var inst_13355 = cljs.core.async.close_BANG_(out);
var state_13370__$1 = state_13370;
var statearr_13382_14753 = state_13370__$1;
(statearr_13382_14753[(2)] = inst_13355);

(statearr_13382_14753[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13371 === (10))){
var inst_13363 = (state_13370[(2)]);
var state_13370__$1 = (function (){var statearr_13383 = state_13370;
(statearr_13383[(8)] = inst_13363);

return statearr_13383;
})();
var statearr_13384_14754 = state_13370__$1;
(statearr_13384_14754[(2)] = null);

(statearr_13384_14754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13371 === (8))){
var inst_13352 = (state_13370[(7)]);
var state_13370__$1 = state_13370;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13370__$1,(11),out,inst_13352);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12072__auto__ = null;
var cljs$core$async$state_machine__12072__auto____0 = (function (){
var statearr_13385 = [null,null,null,null,null,null,null,null,null];
(statearr_13385[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_13385[(1)] = (1));

return statearr_13385;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_13370){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_13370);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e13386){var ex__12075__auto__ = e13386;
var statearr_13387_14755 = state_13370;
(statearr_13387_14755[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13370[(4)]))){
var statearr_13388_14756 = state_13370;
(statearr_13388_14756[(1)] = cljs.core.first((state_13370[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14757 = state_13370;
state_13370 = G__14757;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_13370){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_13370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13390 = f__12108__auto__();
(statearr_13390[(6)] = c__12107__auto___14744);

return statearr_13390;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__13392 = arguments.length;
switch (G__13392) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__12107__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13460){
var state_val_13461 = (state_13460[(1)]);
if((state_val_13461 === (7))){
var inst_13456 = (state_13460[(2)]);
var state_13460__$1 = state_13460;
var statearr_13462_14762 = state_13460__$1;
(statearr_13462_14762[(2)] = inst_13456);

(statearr_13462_14762[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13461 === (20))){
var inst_13426 = (state_13460[(7)]);
var inst_13437 = (state_13460[(2)]);
var inst_13438 = cljs.core.next(inst_13426);
var inst_13412 = inst_13438;
var inst_13413 = null;
var inst_13414 = (0);
var inst_13415 = (0);
var state_13460__$1 = (function (){var statearr_13463 = state_13460;
(statearr_13463[(8)] = inst_13415);

(statearr_13463[(9)] = inst_13437);

(statearr_13463[(10)] = inst_13413);

(statearr_13463[(11)] = inst_13414);

(statearr_13463[(12)] = inst_13412);

return statearr_13463;
})();
var statearr_13464_14766 = state_13460__$1;
(statearr_13464_14766[(2)] = null);

(statearr_13464_14766[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13461 === (1))){
var state_13460__$1 = state_13460;
var statearr_13465_14767 = state_13460__$1;
(statearr_13465_14767[(2)] = null);

(statearr_13465_14767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13461 === (4))){
var inst_13401 = (state_13460[(13)]);
var inst_13401__$1 = (state_13460[(2)]);
var inst_13402 = (inst_13401__$1 == null);
var state_13460__$1 = (function (){var statearr_13466 = state_13460;
(statearr_13466[(13)] = inst_13401__$1);

return statearr_13466;
})();
if(cljs.core.truth_(inst_13402)){
var statearr_13467_14771 = state_13460__$1;
(statearr_13467_14771[(1)] = (5));

} else {
var statearr_13468_14772 = state_13460__$1;
(statearr_13468_14772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13461 === (15))){
var state_13460__$1 = state_13460;
var statearr_13472_14773 = state_13460__$1;
(statearr_13472_14773[(2)] = null);

(statearr_13472_14773[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13461 === (21))){
var state_13460__$1 = state_13460;
var statearr_13473_14775 = state_13460__$1;
(statearr_13473_14775[(2)] = null);

(statearr_13473_14775[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13461 === (13))){
var inst_13415 = (state_13460[(8)]);
var inst_13413 = (state_13460[(10)]);
var inst_13414 = (state_13460[(11)]);
var inst_13412 = (state_13460[(12)]);
var inst_13422 = (state_13460[(2)]);
var inst_13423 = (inst_13415 + (1));
var tmp13469 = inst_13413;
var tmp13470 = inst_13414;
var tmp13471 = inst_13412;
var inst_13412__$1 = tmp13471;
var inst_13413__$1 = tmp13469;
var inst_13414__$1 = tmp13470;
var inst_13415__$1 = inst_13423;
var state_13460__$1 = (function (){var statearr_13474 = state_13460;
(statearr_13474[(8)] = inst_13415__$1);

(statearr_13474[(10)] = inst_13413__$1);

(statearr_13474[(11)] = inst_13414__$1);

(statearr_13474[(12)] = inst_13412__$1);

(statearr_13474[(14)] = inst_13422);

return statearr_13474;
})();
var statearr_13475_14776 = state_13460__$1;
(statearr_13475_14776[(2)] = null);

(statearr_13475_14776[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13461 === (22))){
var state_13460__$1 = state_13460;
var statearr_13476_14778 = state_13460__$1;
(statearr_13476_14778[(2)] = null);

(statearr_13476_14778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13461 === (6))){
var inst_13401 = (state_13460[(13)]);
var inst_13410 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_13401) : f.call(null,inst_13401));
var inst_13411 = cljs.core.seq(inst_13410);
var inst_13412 = inst_13411;
var inst_13413 = null;
var inst_13414 = (0);
var inst_13415 = (0);
var state_13460__$1 = (function (){var statearr_13477 = state_13460;
(statearr_13477[(8)] = inst_13415);

(statearr_13477[(10)] = inst_13413);

(statearr_13477[(11)] = inst_13414);

(statearr_13477[(12)] = inst_13412);

return statearr_13477;
})();
var statearr_13478_14779 = state_13460__$1;
(statearr_13478_14779[(2)] = null);

(statearr_13478_14779[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13461 === (17))){
var inst_13426 = (state_13460[(7)]);
var inst_13430 = cljs.core.chunk_first(inst_13426);
var inst_13431 = cljs.core.chunk_rest(inst_13426);
var inst_13432 = cljs.core.count(inst_13430);
var inst_13412 = inst_13431;
var inst_13413 = inst_13430;
var inst_13414 = inst_13432;
var inst_13415 = (0);
var state_13460__$1 = (function (){var statearr_13489 = state_13460;
(statearr_13489[(8)] = inst_13415);

(statearr_13489[(10)] = inst_13413);

(statearr_13489[(11)] = inst_13414);

(statearr_13489[(12)] = inst_13412);

return statearr_13489;
})();
var statearr_13491_14780 = state_13460__$1;
(statearr_13491_14780[(2)] = null);

(statearr_13491_14780[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13461 === (3))){
var inst_13458 = (state_13460[(2)]);
var state_13460__$1 = state_13460;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13460__$1,inst_13458);
} else {
if((state_val_13461 === (12))){
var inst_13446 = (state_13460[(2)]);
var state_13460__$1 = state_13460;
var statearr_13493_14781 = state_13460__$1;
(statearr_13493_14781[(2)] = inst_13446);

(statearr_13493_14781[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13461 === (2))){
var state_13460__$1 = state_13460;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13460__$1,(4),in$);
} else {
if((state_val_13461 === (23))){
var inst_13454 = (state_13460[(2)]);
var state_13460__$1 = state_13460;
var statearr_13494_14782 = state_13460__$1;
(statearr_13494_14782[(2)] = inst_13454);

(statearr_13494_14782[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13461 === (19))){
var inst_13441 = (state_13460[(2)]);
var state_13460__$1 = state_13460;
var statearr_13495_14783 = state_13460__$1;
(statearr_13495_14783[(2)] = inst_13441);

(statearr_13495_14783[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13461 === (11))){
var inst_13412 = (state_13460[(12)]);
var inst_13426 = (state_13460[(7)]);
var inst_13426__$1 = cljs.core.seq(inst_13412);
var state_13460__$1 = (function (){var statearr_13496 = state_13460;
(statearr_13496[(7)] = inst_13426__$1);

return statearr_13496;
})();
if(inst_13426__$1){
var statearr_13497_14784 = state_13460__$1;
(statearr_13497_14784[(1)] = (14));

} else {
var statearr_13498_14785 = state_13460__$1;
(statearr_13498_14785[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13461 === (9))){
var inst_13448 = (state_13460[(2)]);
var inst_13449 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_13460__$1 = (function (){var statearr_13501 = state_13460;
(statearr_13501[(15)] = inst_13448);

return statearr_13501;
})();
if(cljs.core.truth_(inst_13449)){
var statearr_13503_14786 = state_13460__$1;
(statearr_13503_14786[(1)] = (21));

} else {
var statearr_13504_14787 = state_13460__$1;
(statearr_13504_14787[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13461 === (5))){
var inst_13404 = cljs.core.async.close_BANG_(out);
var state_13460__$1 = state_13460;
var statearr_13507_14788 = state_13460__$1;
(statearr_13507_14788[(2)] = inst_13404);

(statearr_13507_14788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13461 === (14))){
var inst_13426 = (state_13460[(7)]);
var inst_13428 = cljs.core.chunked_seq_QMARK_(inst_13426);
var state_13460__$1 = state_13460;
if(inst_13428){
var statearr_13509_14789 = state_13460__$1;
(statearr_13509_14789[(1)] = (17));

} else {
var statearr_13510_14790 = state_13460__$1;
(statearr_13510_14790[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13461 === (16))){
var inst_13444 = (state_13460[(2)]);
var state_13460__$1 = state_13460;
var statearr_13511_14791 = state_13460__$1;
(statearr_13511_14791[(2)] = inst_13444);

(statearr_13511_14791[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13461 === (10))){
var inst_13415 = (state_13460[(8)]);
var inst_13413 = (state_13460[(10)]);
var inst_13420 = cljs.core._nth(inst_13413,inst_13415);
var state_13460__$1 = state_13460;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13460__$1,(13),out,inst_13420);
} else {
if((state_val_13461 === (18))){
var inst_13426 = (state_13460[(7)]);
var inst_13435 = cljs.core.first(inst_13426);
var state_13460__$1 = state_13460;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13460__$1,(20),out,inst_13435);
} else {
if((state_val_13461 === (8))){
var inst_13415 = (state_13460[(8)]);
var inst_13414 = (state_13460[(11)]);
var inst_13417 = (inst_13415 < inst_13414);
var inst_13418 = inst_13417;
var state_13460__$1 = state_13460;
if(cljs.core.truth_(inst_13418)){
var statearr_13514_14792 = state_13460__$1;
(statearr_13514_14792[(1)] = (10));

} else {
var statearr_13515_14793 = state_13460__$1;
(statearr_13515_14793[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__12072__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__12072__auto____0 = (function (){
var statearr_13520 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13520[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__12072__auto__);

(statearr_13520[(1)] = (1));

return statearr_13520;
});
var cljs$core$async$mapcat_STAR__$_state_machine__12072__auto____1 = (function (state_13460){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_13460);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e13522){var ex__12075__auto__ = e13522;
var statearr_13524_14794 = state_13460;
(statearr_13524_14794[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13460[(4)]))){
var statearr_13527_14795 = state_13460;
(statearr_13527_14795[(1)] = cljs.core.first((state_13460[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14796 = state_13460;
state_13460 = G__14796;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__12072__auto__ = function(state_13460){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__12072__auto____1.call(this,state_13460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__12072__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__12072__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13534 = f__12108__auto__();
(statearr_13534[(6)] = c__12107__auto__);

return statearr_13534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
}));

return c__12107__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__13545 = arguments.length;
switch (G__13545) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__13547 = arguments.length;
switch (G__13547) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__13578 = arguments.length;
switch (G__13578) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12107__auto___14812 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13602){
var state_val_13603 = (state_13602[(1)]);
if((state_val_13603 === (7))){
var inst_13597 = (state_13602[(2)]);
var state_13602__$1 = state_13602;
var statearr_13604_14813 = state_13602__$1;
(statearr_13604_14813[(2)] = inst_13597);

(statearr_13604_14813[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13603 === (1))){
var inst_13579 = null;
var state_13602__$1 = (function (){var statearr_13605 = state_13602;
(statearr_13605[(7)] = inst_13579);

return statearr_13605;
})();
var statearr_13606_14814 = state_13602__$1;
(statearr_13606_14814[(2)] = null);

(statearr_13606_14814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13603 === (4))){
var inst_13582 = (state_13602[(8)]);
var inst_13582__$1 = (state_13602[(2)]);
var inst_13583 = (inst_13582__$1 == null);
var inst_13584 = cljs.core.not(inst_13583);
var state_13602__$1 = (function (){var statearr_13609 = state_13602;
(statearr_13609[(8)] = inst_13582__$1);

return statearr_13609;
})();
if(inst_13584){
var statearr_13610_14815 = state_13602__$1;
(statearr_13610_14815[(1)] = (5));

} else {
var statearr_13611_14816 = state_13602__$1;
(statearr_13611_14816[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13603 === (6))){
var state_13602__$1 = state_13602;
var statearr_13612_14817 = state_13602__$1;
(statearr_13612_14817[(2)] = null);

(statearr_13612_14817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13603 === (3))){
var inst_13599 = (state_13602[(2)]);
var inst_13600 = cljs.core.async.close_BANG_(out);
var state_13602__$1 = (function (){var statearr_13613 = state_13602;
(statearr_13613[(9)] = inst_13599);

return statearr_13613;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_13602__$1,inst_13600);
} else {
if((state_val_13603 === (2))){
var state_13602__$1 = state_13602;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13602__$1,(4),ch);
} else {
if((state_val_13603 === (11))){
var inst_13582 = (state_13602[(8)]);
var inst_13591 = (state_13602[(2)]);
var inst_13579 = inst_13582;
var state_13602__$1 = (function (){var statearr_13614 = state_13602;
(statearr_13614[(7)] = inst_13579);

(statearr_13614[(10)] = inst_13591);

return statearr_13614;
})();
var statearr_13615_14818 = state_13602__$1;
(statearr_13615_14818[(2)] = null);

(statearr_13615_14818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13603 === (9))){
var inst_13582 = (state_13602[(8)]);
var state_13602__$1 = state_13602;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13602__$1,(11),out,inst_13582);
} else {
if((state_val_13603 === (5))){
var inst_13582 = (state_13602[(8)]);
var inst_13579 = (state_13602[(7)]);
var inst_13586 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_13582,inst_13579);
var state_13602__$1 = state_13602;
if(inst_13586){
var statearr_13617_14819 = state_13602__$1;
(statearr_13617_14819[(1)] = (8));

} else {
var statearr_13618_14820 = state_13602__$1;
(statearr_13618_14820[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13603 === (10))){
var inst_13594 = (state_13602[(2)]);
var state_13602__$1 = state_13602;
var statearr_13619_14821 = state_13602__$1;
(statearr_13619_14821[(2)] = inst_13594);

(statearr_13619_14821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13603 === (8))){
var inst_13579 = (state_13602[(7)]);
var tmp13616 = inst_13579;
var inst_13579__$1 = tmp13616;
var state_13602__$1 = (function (){var statearr_13620 = state_13602;
(statearr_13620[(7)] = inst_13579__$1);

return statearr_13620;
})();
var statearr_13621_14826 = state_13602__$1;
(statearr_13621_14826[(2)] = null);

(statearr_13621_14826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12072__auto__ = null;
var cljs$core$async$state_machine__12072__auto____0 = (function (){
var statearr_13622 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13622[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_13622[(1)] = (1));

return statearr_13622;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_13602){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_13602);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e13623){var ex__12075__auto__ = e13623;
var statearr_13624_14827 = state_13602;
(statearr_13624_14827[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13602[(4)]))){
var statearr_13625_14828 = state_13602;
(statearr_13625_14828[(1)] = cljs.core.first((state_13602[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14829 = state_13602;
state_13602 = G__14829;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_13602){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_13602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13626 = f__12108__auto__();
(statearr_13626[(6)] = c__12107__auto___14812);

return statearr_13626;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__13681 = arguments.length;
switch (G__13681) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12107__auto___14831 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13719){
var state_val_13720 = (state_13719[(1)]);
if((state_val_13720 === (7))){
var inst_13715 = (state_13719[(2)]);
var state_13719__$1 = state_13719;
var statearr_13721_14832 = state_13719__$1;
(statearr_13721_14832[(2)] = inst_13715);

(statearr_13721_14832[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13720 === (1))){
var inst_13682 = (new Array(n));
var inst_13683 = inst_13682;
var inst_13684 = (0);
var state_13719__$1 = (function (){var statearr_13722 = state_13719;
(statearr_13722[(7)] = inst_13684);

(statearr_13722[(8)] = inst_13683);

return statearr_13722;
})();
var statearr_13723_14833 = state_13719__$1;
(statearr_13723_14833[(2)] = null);

(statearr_13723_14833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13720 === (4))){
var inst_13687 = (state_13719[(9)]);
var inst_13687__$1 = (state_13719[(2)]);
var inst_13688 = (inst_13687__$1 == null);
var inst_13689 = cljs.core.not(inst_13688);
var state_13719__$1 = (function (){var statearr_13724 = state_13719;
(statearr_13724[(9)] = inst_13687__$1);

return statearr_13724;
})();
if(inst_13689){
var statearr_13725_14834 = state_13719__$1;
(statearr_13725_14834[(1)] = (5));

} else {
var statearr_13726_14835 = state_13719__$1;
(statearr_13726_14835[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13720 === (15))){
var inst_13709 = (state_13719[(2)]);
var state_13719__$1 = state_13719;
var statearr_13766_14836 = state_13719__$1;
(statearr_13766_14836[(2)] = inst_13709);

(statearr_13766_14836[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13720 === (13))){
var state_13719__$1 = state_13719;
var statearr_13767_14837 = state_13719__$1;
(statearr_13767_14837[(2)] = null);

(statearr_13767_14837[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13720 === (6))){
var inst_13684 = (state_13719[(7)]);
var inst_13705 = (inst_13684 > (0));
var state_13719__$1 = state_13719;
if(cljs.core.truth_(inst_13705)){
var statearr_13768_14838 = state_13719__$1;
(statearr_13768_14838[(1)] = (12));

} else {
var statearr_13769_14839 = state_13719__$1;
(statearr_13769_14839[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13720 === (3))){
var inst_13717 = (state_13719[(2)]);
var state_13719__$1 = state_13719;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13719__$1,inst_13717);
} else {
if((state_val_13720 === (12))){
var inst_13683 = (state_13719[(8)]);
var inst_13707 = cljs.core.vec(inst_13683);
var state_13719__$1 = state_13719;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13719__$1,(15),out,inst_13707);
} else {
if((state_val_13720 === (2))){
var state_13719__$1 = state_13719;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13719__$1,(4),ch);
} else {
if((state_val_13720 === (11))){
var inst_13699 = (state_13719[(2)]);
var inst_13700 = (new Array(n));
var inst_13683 = inst_13700;
var inst_13684 = (0);
var state_13719__$1 = (function (){var statearr_13839 = state_13719;
(statearr_13839[(7)] = inst_13684);

(statearr_13839[(10)] = inst_13699);

(statearr_13839[(8)] = inst_13683);

return statearr_13839;
})();
var statearr_13840_14840 = state_13719__$1;
(statearr_13840_14840[(2)] = null);

(statearr_13840_14840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13720 === (9))){
var inst_13683 = (state_13719[(8)]);
var inst_13697 = cljs.core.vec(inst_13683);
var state_13719__$1 = state_13719;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13719__$1,(11),out,inst_13697);
} else {
if((state_val_13720 === (5))){
var inst_13684 = (state_13719[(7)]);
var inst_13687 = (state_13719[(9)]);
var inst_13683 = (state_13719[(8)]);
var inst_13692 = (state_13719[(11)]);
var inst_13691 = (inst_13683[inst_13684] = inst_13687);
var inst_13692__$1 = (inst_13684 + (1));
var inst_13693 = (inst_13692__$1 < n);
var state_13719__$1 = (function (){var statearr_13841 = state_13719;
(statearr_13841[(12)] = inst_13691);

(statearr_13841[(11)] = inst_13692__$1);

return statearr_13841;
})();
if(cljs.core.truth_(inst_13693)){
var statearr_13842_14841 = state_13719__$1;
(statearr_13842_14841[(1)] = (8));

} else {
var statearr_13843_14842 = state_13719__$1;
(statearr_13843_14842[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13720 === (14))){
var inst_13712 = (state_13719[(2)]);
var inst_13713 = cljs.core.async.close_BANG_(out);
var state_13719__$1 = (function (){var statearr_13845 = state_13719;
(statearr_13845[(13)] = inst_13712);

return statearr_13845;
})();
var statearr_13846_14846 = state_13719__$1;
(statearr_13846_14846[(2)] = inst_13713);

(statearr_13846_14846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13720 === (10))){
var inst_13703 = (state_13719[(2)]);
var state_13719__$1 = state_13719;
var statearr_13847_14847 = state_13719__$1;
(statearr_13847_14847[(2)] = inst_13703);

(statearr_13847_14847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13720 === (8))){
var inst_13683 = (state_13719[(8)]);
var inst_13692 = (state_13719[(11)]);
var tmp13844 = inst_13683;
var inst_13683__$1 = tmp13844;
var inst_13684 = inst_13692;
var state_13719__$1 = (function (){var statearr_13848 = state_13719;
(statearr_13848[(7)] = inst_13684);

(statearr_13848[(8)] = inst_13683__$1);

return statearr_13848;
})();
var statearr_13849_14848 = state_13719__$1;
(statearr_13849_14848[(2)] = null);

(statearr_13849_14848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12072__auto__ = null;
var cljs$core$async$state_machine__12072__auto____0 = (function (){
var statearr_13850 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13850[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_13850[(1)] = (1));

return statearr_13850;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_13719){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_13719);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e13851){var ex__12075__auto__ = e13851;
var statearr_13852_14851 = state_13719;
(statearr_13852_14851[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13719[(4)]))){
var statearr_13853_14852 = state_13719;
(statearr_13853_14852[(1)] = cljs.core.first((state_13719[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14855 = state_13719;
state_13719 = G__14855;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_13719){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_13719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13854 = f__12108__auto__();
(statearr_13854[(6)] = c__12107__auto___14831);

return statearr_13854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__13856 = arguments.length;
switch (G__13856) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12107__auto___14859 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_13898){
var state_val_13899 = (state_13898[(1)]);
if((state_val_13899 === (7))){
var inst_13894 = (state_13898[(2)]);
var state_13898__$1 = state_13898;
var statearr_13907_14861 = state_13898__$1;
(statearr_13907_14861[(2)] = inst_13894);

(statearr_13907_14861[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13899 === (1))){
var inst_13857 = [];
var inst_13858 = inst_13857;
var inst_13859 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_13898__$1 = (function (){var statearr_13912 = state_13898;
(statearr_13912[(7)] = inst_13859);

(statearr_13912[(8)] = inst_13858);

return statearr_13912;
})();
var statearr_13915_14862 = state_13898__$1;
(statearr_13915_14862[(2)] = null);

(statearr_13915_14862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13899 === (4))){
var inst_13862 = (state_13898[(9)]);
var inst_13862__$1 = (state_13898[(2)]);
var inst_13863 = (inst_13862__$1 == null);
var inst_13864 = cljs.core.not(inst_13863);
var state_13898__$1 = (function (){var statearr_13920 = state_13898;
(statearr_13920[(9)] = inst_13862__$1);

return statearr_13920;
})();
if(inst_13864){
var statearr_13922_14863 = state_13898__$1;
(statearr_13922_14863[(1)] = (5));

} else {
var statearr_13924_14864 = state_13898__$1;
(statearr_13924_14864[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13899 === (15))){
var inst_13888 = (state_13898[(2)]);
var state_13898__$1 = state_13898;
var statearr_13930_14865 = state_13898__$1;
(statearr_13930_14865[(2)] = inst_13888);

(statearr_13930_14865[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13899 === (13))){
var state_13898__$1 = state_13898;
var statearr_13935_14866 = state_13898__$1;
(statearr_13935_14866[(2)] = null);

(statearr_13935_14866[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13899 === (6))){
var inst_13858 = (state_13898[(8)]);
var inst_13883 = inst_13858.length;
var inst_13884 = (inst_13883 > (0));
var state_13898__$1 = state_13898;
if(cljs.core.truth_(inst_13884)){
var statearr_13941_14867 = state_13898__$1;
(statearr_13941_14867[(1)] = (12));

} else {
var statearr_13942_14868 = state_13898__$1;
(statearr_13942_14868[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13899 === (3))){
var inst_13896 = (state_13898[(2)]);
var state_13898__$1 = state_13898;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13898__$1,inst_13896);
} else {
if((state_val_13899 === (12))){
var inst_13858 = (state_13898[(8)]);
var inst_13886 = cljs.core.vec(inst_13858);
var state_13898__$1 = state_13898;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13898__$1,(15),out,inst_13886);
} else {
if((state_val_13899 === (2))){
var state_13898__$1 = state_13898;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13898__$1,(4),ch);
} else {
if((state_val_13899 === (11))){
var inst_13866 = (state_13898[(10)]);
var inst_13862 = (state_13898[(9)]);
var inst_13876 = (state_13898[(2)]);
var inst_13877 = [];
var inst_13878 = inst_13877.push(inst_13862);
var inst_13858 = inst_13877;
var inst_13859 = inst_13866;
var state_13898__$1 = (function (){var statearr_13962 = state_13898;
(statearr_13962[(7)] = inst_13859);

(statearr_13962[(11)] = inst_13878);

(statearr_13962[(12)] = inst_13876);

(statearr_13962[(8)] = inst_13858);

return statearr_13962;
})();
var statearr_13964_14871 = state_13898__$1;
(statearr_13964_14871[(2)] = null);

(statearr_13964_14871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13899 === (9))){
var inst_13858 = (state_13898[(8)]);
var inst_13874 = cljs.core.vec(inst_13858);
var state_13898__$1 = state_13898;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13898__$1,(11),out,inst_13874);
} else {
if((state_val_13899 === (5))){
var inst_13866 = (state_13898[(10)]);
var inst_13862 = (state_13898[(9)]);
var inst_13859 = (state_13898[(7)]);
var inst_13866__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_13862) : f.call(null,inst_13862));
var inst_13867 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_13866__$1,inst_13859);
var inst_13868 = cljs.core.keyword_identical_QMARK_(inst_13859,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_13869 = ((inst_13867) || (inst_13868));
var state_13898__$1 = (function (){var statearr_13971 = state_13898;
(statearr_13971[(10)] = inst_13866__$1);

return statearr_13971;
})();
if(cljs.core.truth_(inst_13869)){
var statearr_13974_14875 = state_13898__$1;
(statearr_13974_14875[(1)] = (8));

} else {
var statearr_13975_14876 = state_13898__$1;
(statearr_13975_14876[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13899 === (14))){
var inst_13891 = (state_13898[(2)]);
var inst_13892 = cljs.core.async.close_BANG_(out);
var state_13898__$1 = (function (){var statearr_13977 = state_13898;
(statearr_13977[(13)] = inst_13891);

return statearr_13977;
})();
var statearr_13978_14879 = state_13898__$1;
(statearr_13978_14879[(2)] = inst_13892);

(statearr_13978_14879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13899 === (10))){
var inst_13881 = (state_13898[(2)]);
var state_13898__$1 = state_13898;
var statearr_13979_14882 = state_13898__$1;
(statearr_13979_14882[(2)] = inst_13881);

(statearr_13979_14882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13899 === (8))){
var inst_13866 = (state_13898[(10)]);
var inst_13862 = (state_13898[(9)]);
var inst_13858 = (state_13898[(8)]);
var inst_13871 = inst_13858.push(inst_13862);
var tmp13976 = inst_13858;
var inst_13858__$1 = tmp13976;
var inst_13859 = inst_13866;
var state_13898__$1 = (function (){var statearr_13980 = state_13898;
(statearr_13980[(7)] = inst_13859);

(statearr_13980[(14)] = inst_13871);

(statearr_13980[(8)] = inst_13858__$1);

return statearr_13980;
})();
var statearr_13981_14886 = state_13898__$1;
(statearr_13981_14886[(2)] = null);

(statearr_13981_14886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12072__auto__ = null;
var cljs$core$async$state_machine__12072__auto____0 = (function (){
var statearr_13984 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13984[(0)] = cljs$core$async$state_machine__12072__auto__);

(statearr_13984[(1)] = (1));

return statearr_13984;
});
var cljs$core$async$state_machine__12072__auto____1 = (function (state_13898){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_13898);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e13990){var ex__12075__auto__ = e13990;
var statearr_13991_14898 = state_13898;
(statearr_13991_14898[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_13898[(4)]))){
var statearr_13992_14899 = state_13898;
(statearr_13992_14899[(1)] = cljs.core.first((state_13898[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14900 = state_13898;
state_13898 = G__14900;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
cljs$core$async$state_machine__12072__auto__ = function(state_13898){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12072__auto____1.call(this,state_13898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12072__auto____0;
cljs$core$async$state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12072__auto____1;
return cljs$core$async$state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_13997 = f__12108__auto__();
(statearr_13997[(6)] = c__12107__auto___14859);

return statearr_13997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map

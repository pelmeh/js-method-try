# js-method-try
JS method "try" like in Ruby on Rails (RoR)

### Problem: 
Long and ugly condition 
```js
if (current_user.logOut && current_user.logOut()) {
  ...
}
```

### Resolve: 
Add to `Object.prototype` method `try` (via this small plugin)
```js
if (current_user.try.logOut()) {
  ...
}
```
It's checking `current_user` method `admin`. If method exsit then return self else return `undefined`.

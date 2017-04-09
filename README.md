# js-method-try
JS method "try" like in Ruby on Rails (RoR)

### Problem: 
Long and ugly condition 
```js
if (current_user && current_user.admin) {
  ...
}
```

### Resolve: 
Add to `Object.prototype` method `try` (via this small plugin)
```js
if (current_user.try.admin) {
  ...
}
```
It's checking `current_user` and method `admin`. If method exsit then return self else return `undefined`

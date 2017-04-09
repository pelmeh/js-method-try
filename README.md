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


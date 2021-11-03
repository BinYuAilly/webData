### vue路由跳转的几种方式

```
this.$router.push('地址')

this.$router.replace('地址')
```

**replace和push的区别，push有记录一个history，replace没有；**



**和name配对的是params，和path配对的是query**

```
this.$router.push({ path: '/usersManage', query: { userId: 111 }});
console.log(this.$route.query.userId) // 111

this.$router.push({ name: 'usersManage', params: { userId: 111 }});
console.log(this.$route.params.userId) // 111
```


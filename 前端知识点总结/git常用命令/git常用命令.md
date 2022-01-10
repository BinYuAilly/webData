# 撤销提交

git log -n 3 --stat      查看最近三次的提交

git reset --soft 某次commit哈希值的任意前缀



# 1.查看git配置信息
$ git config --list


# 2.查看git用户名、密码、邮箱的配置
$ git config user.name
$ git config user.password
$ git config user.email


# 3.设置git用户名、密码、邮箱的配置
$ git config user.name "freedom"
$ git config user.password "123456"
$ git config user.email "1548429568@qq.com"

# 3.设置git用户名、密码、邮箱的配置（全局配置）
$ git config --global user.name 用户命
$ git config --global user.name freedom
$ git config --global user.password 密码
$ git config --global user.password abc0506abc
$ git config --global user.password 邮箱
$ git config --global user.email "1548429568@qq.com"


# 4.修改git用户名、密码、邮箱的配置（跟设置语法一样，没有用户名就添加，有了用户名就修改）
$ git config user.name "freedom"
# 4.修改git用户名、密码、邮箱的配置（全局配置）
$ git config --global user.name "freedom"

# 5.删除git用户名、密码、邮箱的配置

# 6.查看项目远程地址

git remote -v


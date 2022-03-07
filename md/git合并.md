## git合并
### git marge 合并
> 分支合并，将A分支合并到B分支

``` git
// 切换到A分支
git checkout A

// 获取A分支最新代码
git pull

// 切换到B分支
git checkout B

// 获取B分支最新代码
git pull

// 合并分支
git marge A
```

### 合并指定的文件
> 有时候想要合并A分支指定的文件或者文件夹到B分支上去，例如合并A分支的README.md文件到B分支上面。

``` git 
// 切换到A分支
git checkout A

// 获取A分支最新代码
git pull

// 切换到B分支
git checkout B

// 获取B分支最新代码
git pull

// 合并指定文件或者文件夹到分支
git checkout B README.md 

```

<span style='color:#0099e1'>如果这里想要合并文件夹的话，比如src/views文件夹，可以将READMD.md换成文件夹src/views/**</span>

### 撤销commit、add
> 如果合并错误，那么就先撤销commit，然后撤销add
``` git
// 撤销commit 
git reset --soft HEAD^

// 撤销add
git reset HEAD

// 撤销指定的文件
git reset HEAD src/views/README.md
```
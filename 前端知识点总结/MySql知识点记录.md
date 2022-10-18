数据库 ：sqlserver

# node  MySql知识点记录



## 数据查询 和 数据插入 同时进行  

```js
  var sql = "";
  sql = `REPLACE INTO type_in_word(grade, word, word_translate)
  SELECT ?,?,? FROM DUAL WHERE NOT EXISTS (SELECT * FROM type_in_word WHERE word = ?)`
  pool.query(sql,[grade, word, word_translate, word],(err,result)=>{
    if(err) throw err;
    res.send({rows: result});
  })

type_in_word----表名    grade, word, word_translate----表中字段
```






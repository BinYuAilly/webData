
```html
    <!-- 导入 -->
	<script src="../js/datagrid-export.js"></script>
    
    <div class="btn-bg-color" onclick="listen.down()">导出</div>

    <script>
    var listen ={
        down(){
            // #dg --- table id 
            $('#dg').datagrid('toExcel','dg.xls');//导出xls
        },
    }
    </script>
```
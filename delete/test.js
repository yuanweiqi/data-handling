    var edge = require('edge');  
    var sqlPath = "Data Source=192.168.15.71;Initial Catalog=Finance;Persist Security Info=True;User ID=sa;Password=sa123.abc;Connect Timeout=180;Pooling=False";  
    var getInsuranceChannelType = edge.func('sql', {  
        source: function () {/* 
         select top 2 * from [InsuranceChannelType] 
         */},  
        connectionString: sqlPath  
    });  
    getInsuranceChannelType(null, function (error, result) {  
        if (error) throw error;  
        console.log(result);  
        //console.log(result[0].ProductName);  
        //console.log(result[1].ReorderLevel);  
    });  
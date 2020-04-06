
const api = "https://reqres.in/api/users?delay=3";
const api2 = "https://reqres.in/api/users?12";
function get() {
    axios
        .get(api)
        .then(response => {
            if (response){
                console.log(123)
                // promise异步编程
                // 先获取api的数据打印出来，再获取api2的数据打印出来
                console.log(response.data.data);
                axios.get(api2).then(response => {
                    if (response){
                        console.log(response.data.data)
                    }
                })

            }
        })
        .catch(function (error) { // 请求失败处理
            console.log(error);
        });
}
get();

async function get2() {
    // async await 异步编程
    // 先获取api的数据打印出来，再获取api2的数据打印出来
    const result = await axios.get(api);
    if (result){
        console.log(result.data.data)
    }
    const result2 = await axios.get(api2);
    if (result2){
        console.log(result2.data.data)
    }

}

get2();
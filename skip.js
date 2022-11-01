// 设置倍速,设置为全局变量,方便后续的修改,这里是直接设置成3倍速
let rate = 1.0;

// 设置每0.5秒检测一次
setInterval(() => {
    // 判断是否加载充电鸣谢
    if (document.getElementsByClassName('bilibili-player-electric-panel-jump')[0]) {
        // 找到跳过按钮并触发其点击事件
        document.getElementsByClassName('bilibili-player-electric-panel-jump-content')[0].click();
    }
    // 判断如果设置的rate倍速与实际的播放倍速不相等
    if (document.querySelector('video').playbackRate != rate) {

        // 修改倍速为3倍速
        document.querySelector('video').playbackRate = rate;
        // 将倍速按钮的文字也改成对应的文字(3x)
        document.getElementsByClassName("bilibili-player-video-btn-speed-name")[0].innerText = rate + "x";
    }

}, 500)




let body = document.getElementsByTagName("body")[0] // 获取body元素
let box = document.createElement("div") // 创建弹窗div


// 设置弹窗div样式样式
box.style.width = "200px"
box.style.height = "100px"
box.style.backgroundColor = "rgb(23,200,200,0.9)"
box.style.border = "2px solid lightgreen "
box.style.borderRadius = "15px"
box.style.position = "fixed"
box.style.left = "0px"
box.style.top = "0px"
box.style.zIndex = "100000";
box.setAttribute("id", "e2fc714c4727ee9395f324cd2e7f331f")

// 将上面的box加入到body页面
body.appendChild(box)

// 修改倍速的回调函数
const changeSpeed = () => {
    let speedBox = document.getElementById("fe01ce2a7fbac8fafaed7c982a04e229");
    rate = speedBox.value;
    console.log(rate);
}
// 隐藏面板的回调函数
const hiddenBox = () => {
    let box = document.getElementById("e2fc714c4727ee9395f324cd2e7f331f");
    box.style.visibility = "hidden"
    alert("若要重新显示，请在控制台(console),输入:showBox()")
}
// 显示的回调函数
const showBox = () => {
    let box = document.getElementById("e2fc714c4727ee9395f324cd2e7f331f");
    box.style.visibility = "visible"
}
// 面板内容
box.innerHTML = `
    <div style="text-align:center">欢迎使用张太难哔哩盒子!</div>
    <span>当前倍速:</span>
    <input 
        id="fe01ce2a7fbac8fafaed7c982a04e229"
        type="number"
        value="1.0" 
        max="16.0" 
        step="0.1" 
        style="width:60px;height:30px"
        onchange="changeSpeed()"
    >
    <div>
        <div style="text-align:center;color:#e77000;font-size:10px">刷新页面后脚本自动失效</div>
        <div style="width:60px;margin:0 auto;">
            <button onclick="hiddenBox()">隐藏</button>
        </div>
    </div>
`
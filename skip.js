// ���ñ���,����Ϊȫ�ֱ���,����������޸�,������ֱ�����ó�3����
let rate = 1.0;

// ����ÿ0.5����һ��
setInterval(() => {
    // �ж��Ƿ���س����л
    if (document.getElementsByClassName('bilibili-player-electric-panel-jump')[0]) {
        // �ҵ�������ť�����������¼�
        document.getElementsByClassName('bilibili-player-electric-panel-jump-content')[0].click();
    }
    // �ж�������õ�rate������ʵ�ʵĲ��ű��ٲ����
    if (document.querySelector('video').playbackRate != rate) {

        // �޸ı���Ϊ3����
        document.querySelector('video').playbackRate = rate;
        // �����ٰ�ť������Ҳ�ĳɶ�Ӧ������(3x)
        document.getElementsByClassName("bilibili-player-video-btn-speed-name")[0].innerText = rate + "x";
    }

}, 500)




let body = document.getElementsByTagName("body")[0] // ��ȡbodyԪ��
let box = document.createElement("div") // ��������div


// ���õ���div��ʽ��ʽ
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

// �������box���뵽bodyҳ��
body.appendChild(box)

// �޸ı��ٵĻص�����
const changeSpeed = () => {
    let speedBox = document.getElementById("fe01ce2a7fbac8fafaed7c982a04e229");
    rate = speedBox.value;
    console.log(rate);
}
// �������Ļص�����
const hiddenBox = () => {
    let box = document.getElementById("e2fc714c4727ee9395f324cd2e7f331f");
    box.style.visibility = "hidden"
    alert("��Ҫ������ʾ�����ڿ���̨(console),����:showBox()")
}
// ��ʾ�Ļص�����
const showBox = () => {
    let box = document.getElementById("e2fc714c4727ee9395f324cd2e7f331f");
    box.style.visibility = "visible"
}
// �������
box.innerHTML = `
    <div style="text-align:center">��ӭʹ����̫����������!</div>
    <span>��ǰ����:</span>
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
        <div style="text-align:center;color:#e77000;font-size:10px">ˢ��ҳ���ű��Զ�ʧЧ</div>
        <div style="width:60px;margin:0 auto;">
            <button onclick="hiddenBox()">����</button>
        </div>
    </div>
`
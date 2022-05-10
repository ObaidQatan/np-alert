export default function notify(msg, msgColor, nodeBackground, buttonText, buttonColor){
    const notifNode = document.createElement('div');
    notifNode.setAttribute('id','notif-node');
    const notifMsg = document.createElement('div');
    notifMsg.innerText = msg?msg:'Warning!';
    notifMsg.style.textAlign = 'left';
    
    notifNode.appendChild(notifMsg);
    notifNode.style.width = '-webkit-fill-available';
    notifNode.style.marginInline = '50px';
    notifNode.style.maxHeight = '120px';
    notifNode.style.padding = '20px 10px';
    notifNode.style.paddingBottom = '45px';
    notifNode.style.background = nodeBackground?nodeBackground:'white';
    notifNode.style.color = msgColor?msgColor:'black';
    notifNode.style.borderRadius = '0 0 10px 10px';
    notifNode.style.position = 'fixed';
    notifNode.style.overflowY = 'overlay';
    notifNode.style.top = '-50%';
    notifNode.style.zIndex = '200';
    notifNode.style.boxShadow = 'rgb(0 0 0 / 30%) 0px 5px 5px';
    notifNode.style.fontFamily = 'Cairo , sans-serif';

    const closeBtn = document.createElement('label');
    closeBtn.innerText = buttonText?buttonText:'OK';
    closeBtn.style.padding = '5px 20px';
    closeBtn.style.position = 'absolute';
    closeBtn.style.bottom = '5px';
    closeBtn.style.right = '5px';
    closeBtn.style.background = buttonColor?buttonColor:'brown';
    closeBtn.style.textAlign = 'center';
    closeBtn.style.color = 'white';
    closeBtn.style.borderRadius = '5px';
    closeBtn.style.fontFamily = 'Cairo , san-serif';
    notifNode.appendChild(closeBtn);
    document.body.appendChild(notifNode);
    setTimeout(() => {
        notifNode.style.top = '0';
    }, 1);

    closeBtn.onclick = ()=>{
        notifNode.style.top = '-50%';
        setTimeout(() => {
            document.body.removeChild(notifNode);
        }, 300);
    }
}
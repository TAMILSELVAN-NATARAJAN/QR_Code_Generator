const container =document.querySelector(".container"),
qrInput=container.querySelector(".form input"),
qrImg=container.querySelector(".qr-code img "),
generateBtn=container.querySelector(".form button");
invaildText=document.getElementById("error")

const downloadbtn =document.getElementById("download");

generateBtn.addEventListener("click",()=>{
    let qrValue=qrInput.value;

    if(!validURL(qrValue)) {
        invaildText.style.opacity="1";
        return;
    }
    generateBtn.innerText="Generating QR Code ...."
    let image=`https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`
     qrImg.src=image;
    
     qrImg.addEventListener("load",()=>{
        console.log();
        invaildText.style.opacity="0";
        container.classList.add("active")
        generateBtn.innerText="Generate QR Code"
     })
    
})


downloadbtn.addEventListener("click", async()=>{
   downloadbtn.innerText="Downloading...."
    const response=await fetch(qrImg.src)
    const blob =await response.blob();
    const domwloadlink =document.createElement("a");
    domwloadlink.href=URL.createObjectURL(blob)
    domwloadlink.download="QRCode.jpg"
    domwloadlink.click();
    x
})

function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
  }


 
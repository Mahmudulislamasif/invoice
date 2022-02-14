document.getElementById('buyer-info-button').addEventListener('click',function()
{
    const bayerInfo=document.getElementById('bayer-text');
    const bayerTextInfo=bayerInfo.value;
    const bayerInfoAdd=document.getElementById('bayer-info-collect');
    bayerInfoAdd.innerText=bayerTextInfo;
})
document.getElementById('submit-info-button').addEventListener('click',function()
{
    const getItemInfo=document.getElementById('get-item-info');
    const getItemInfoValue=getItemInfo.value;
    console.log(getItemInfoValue)
    const getPriceInfo=document.getElementById('get-price-info');
    const getPriceInfoValue=getPriceInfo.value;
    console.log(getPriceInfoValue)
    const getQuantityInfo=document.getElementById('get-quantity-info');
    const getQuantityInfoValue=getQuantityInfo.value;
    console.log(getQuantityInfoValue)
    const mainContainer = document.getElementById("table-container");
    const tableContainer = document.createElement("tr");
    tableContainer.innerHTML = `
      <td>${getItemInfoValue}</td>
      <td>${getPriceInfoValue}</td>
      <td>${getQuantityInfoValue}</td>
      <td>${getQuantityInfoValue*getPriceInfoValue}</td>`;
    mainContainer.appendChild(tableContainer);
    document.getElementById("get-item-info").value = "";
    document.getElementById("get-price-info").value = "";
    document.getElementById("get-quantity-info").value = "";

  
})
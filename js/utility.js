function handelDonation(areaId){
    const mainBalance=parseFloat(document.getElementById(areaId).innerText.replace('BDT','').trim());
    return mainBalance;
}

function inputFieldValue(id){
    const inputValue=parseFloat(document.getElementById(id).value);
    return inputValue;
}


// history
function addToHistory(amount, causeTitle, location, targetElementId){
    const date=new Date();
    const formattedDate=date.toLocaleString('en-GB',{
        weekday:'short',
        month:'short',
        day:'2-digit',
        year:'numeric',
        hour:'2-digit',
        minute:'2-digit',
        hour12:true,
        timeZone:'Asia/Dhaka'
    });
    const historyElement=document.getElementById(targetElementId);
    historyElement.innerHTML+=`
    <h3 class="text-xl font-bold text-gray-800 mb-2">
      ${amount} Taka is Donated for ${causeTitle} at ${location}, Bangladesh
    </h3>
    <p class="text-gray-500">Date : ${formattedDate}</p>`;

}
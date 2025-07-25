document.getElementById('btn-history').addEventListener('click',function(event){
    document.getElementById('history-section').classList.remove('hidden');
    document.getElementById('donation').classList.add('hidden');
    // const historyBtn=document.getElementById('btn-history');
    event.currentTarget.classList.add('bg-lime-400', 'text-black', 'font-semibold', 'px-8', 'py-3', 'rounded-lg', 'transition-colors');
    document.getElementById('btn-donation').classList.remove('bg-lime-400', 'text-black', 'font-semibold', 'px-8', 'py-3', 'rounded-lg', 'transition-colors');
    document.getElementById('btn-donation').classList.add('border', 'border-gray-300', 'text-gray-600', 'font-semibold', 'px-8','py-3', 'rounded-lg', 'transition-colors');
})

document.getElementById('btn-donation').addEventListener('click',function(event){
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById('donation').classList.remove('hidden');
    document.getElementById('btn-history').classList.remove('bg-lime-400', 'text-black', 'font-semibold', 'px-8', 'py-3', 'rounded-lg', 'transition-colors');
    document.getElementById('btn-history').classList.add('border', 'border-gray-300', 'text-gray-600', 'font-semibold', 'px-8','py-3', 'rounded-lg', 'transition-colors');
    event.currentTarget.classList.add('bg-lime-400', 'text-black', 'font-semibold', 'px-8', 'py-3', 'rounded-lg', 'transition-colors');


})
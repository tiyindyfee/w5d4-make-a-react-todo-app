document.querySelector('#homeBtn').addEventListener('click', function() {
    document.querySelectorAll('div').forEach(function(div){
        div.classList.add('hidden')
    })
    document.querySelector('#homeScreen').classList.remove('hidden')
})

document.querySelector('#aboutBtn').addEventListener('click', function() {
    document.querySelectorAll('div').forEach(function(div){
        div.classList.add('hidden')
    })
    document.querySelector('#aboutScreen').classList.remove('hidden')
})

document.querySelector('#contactBtn').addEventListener('click', function() {
    document.querySelectorAll('div').forEach(function(div){
        div.classList.add('hidden')
    })
    document.querySelector('#contactScreen').classList.remove('hidden')
})

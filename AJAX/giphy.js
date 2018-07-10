$(document).ready(function(){
    let topics = ['alligator', 'crocodile', 'dinosaur', 'cow', 'elephant', 'shark', 'kangaroo', 'wallaby', 'python', 'cobra', 'sloth']

    function renderButtons() {
        let animalButtons = $('#animalButtons')

        animalButtons.empty()

        topics.forEach(function(topic){
            let button = $('<button>')
            button.addClass('btn')
            button.attr('data-name', topic)
            animalButtons.append(button.text(topic))
        })
    }
    
    $('#addAnimal').on('click', function(event){
        event.preventDefault()

        let animal = $('#animalInput').val().trim()
        
        topics.push(animal)

        renderButtons()
    })

    
    renderButtons()

})
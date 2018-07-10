$(document).ready(function(){
    let topics = ['alligator', 'crocodile', 'dinosaur', 'cow', 'elephant', 'shark', 'kangaroo', 'wallaby', 'python', 'cobra', 'sloth']

    function alertAnimalName(event) {
        console.log(event.target)
        let animalName = $(this).attr('data-name')
        $('#animals').text(animalName)
    }

    function renderButtons() {
        let animalButtons = $('#animalButtons')

        animalButtons.empty()

        topics.forEach(function(topic){
            let button = $('<button>')
            button.addClass('btn')
            button.addClass('movie-btn')
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

    $(document).on('click','.movie-btn', alertAnimalName)
    
    renderButtons()

})
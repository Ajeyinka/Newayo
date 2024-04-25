const toggleButton = document.getElementsByClassName('toggle-button')[0]
        const navLinks = document.getElementsByClassName('navbar-links')[0]
        const barOne = document.getElementsByClassName('bar one')[0]
        const barTwo = document.getElementsByClassName('bar two')[0]
        const barThree = document.getElementsByClassName('bar three')[0]
        
toggleButton.addEventListener('click',() =>{
            navLinks.classList.toggle('active')
            barOne.classList.toggle('active')
            barTwo.classList.toggle('active')
            barThree.classList.toggle('active')
        });
      navLinks.addEventListener('click', () =>{
          navLinks.classList.toggle('active')
          barOne.classList.toggle('active')
          barTwo.classList.toggle('active')
          barThree.classList.toggle('active')
      })


        const scriptURL = 'https://script.google.com/macros/s/AKfycbxwvqWtV7xYp7t5Z8SxJ9oEfe8YRIRd8nbqMgzFj6MiRbNjzW0le4-Hem4D0gwfHCMYRQ/exec'

        const form = document.forms['contact-form']
        
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => alert("Thank you! your form is submitted successfully." ))
          .then(() => { window.location.reload(); })
          .catch(error => console.error('Error!', error.message))
        })
const clickCountDisplay = document.getElementById('click-count');
        const header = document.getElementById('header');
        const button = document.getElementById('click-button');
       
//1.Add a comment here explaining the let clickCount variable  
        let clickCount = localStorage.getItem('clickCount') ? parseInt(localStorage.getItem('clickCount')) : 0;
        //its for variable declaration, its more predictable and easier to manage 

        // Update display on load
        clickCountDisplay.textContent = clickCount;
        updateUI();

//2.Explain what this event listener function does (and what function it calls).
//its a function that increases the amount of clicks as you click it and then displays the amount of clicks and its calling the updateUI function
        
        // Add event listener to button
        button.addEventListener('click', () => {
            clickCount++;
            localStorage.setItem('clickCount', clickCount);
            clickCountDisplay.textContent = clickCount;
            updateUI();
        });

//3.Explain what function updateUI does and is holding the colors and texts
//updateUI updates the page itself its replace text content changing up colors each time its called on its a interface changer
        function updateUI() {
            const colors = ['#FF5733', '#33FF57', '#3357FF', '#F5A623', '#E91E63'];
            const texts = [
                'Keep going!',
                'Great job!',
                'You are amazing!',
                'Fantastic!',
                'Click click hooray!'
            ];

            const randomIndex = Math.floor(Math.random() * colors.length);
            document.body.style.backgroundColor = colors[randomIndex];
            header.textContent = texts[randomIndex];
        }

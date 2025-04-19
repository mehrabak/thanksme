
        const messages = [
            "Your smile lights up the world! Happy Birthday!",
            "May your day blossom with joy and love!",
            "Celebrating the wonderful person you are!",
            "Another year of amazing adventures begins!",
            "You make the world a better place every day!"
        ];

        let currentMessage = 0;

        function startExperience() {
            const name = document.getElementById('userName').value;
            if (name.trim()) {
                document.querySelector('.login-container').remove();
                document.querySelector('.heart-container').style.display = 'flex';
                document.getElementById('nameDisplay').textContent = name;
                document.querySelector('.message-text').textContent = messages[0];
                document.querySelector('.message-box').classList.add('show');
                startTulips();
            }
        }

        function changeMessage() {
            currentMessage++;
            if(currentMessage >= messages.length) {
                endExperience();
                return;
            }
            
            const messageElement = document.querySelector('.message-text');
            messageElement.style.opacity = 0;
            setTimeout(() => {
                messageElement.textContent = messages[currentMessage];
                messageElement.style.opacity = 1;
            }, 300);
        }

        function endExperience() {
            document.querySelector('.heart-container').style.display = 'none';
            document.querySelector('.final-page').classList.add('show');
            createTulipStorm();
        }

        function startTulips() {
            setInterval(() => {
                createTulip();
            }, 1500);
        }

        function createTulip() {
            const tulip = document.createElement('div');
            tulip.className = 'tulip';
            tulip.innerHTML = '🌷';
            tulip.style.left = Math.random() * 100 + 'vw';
            tulip.style.fontSize = Math.random() * 30 + 20 + 'px';
            tulip.style.animationDuration = Math.random() * 3 + 5 + 's';
            document.body.appendChild(tulip);
            setTimeout(() => tulip.remove(), 8000);
        }

        function createTulipStorm() {
            for(let i = 0; i < 30; i++) {
                setTimeout(() => createTulip(), i * 100);
            }
        }
    
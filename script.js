        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        function openServiceModal(service) {
            document.getElementById(service + 'Modal').style.display = 'block';
            document.body.style.overflow = 'hidden';
        }

        function closeModal(modalId) {
            document.getElementById(modalId).style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        window.onclick = function(event) {
            if (event.target.classList.contains('modal')) {
                event.target.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        }

        document.getElementById('ticketDemoForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('🎫 Demo ticket booked successfully!\nYour QR code will be sent to your email.');
            this.reset();
        });

        document.getElementById('routeDemoForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('🧭 Best route found!\nFastest route: 25 mins | ₹15 | 2 buses');
            this.reset();
        });

        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('loginUsername').value.trim();
            const password = document.getElementById('loginPassword').value;
            let isValid = true;

            document.querySelectorAll('#loginForm .error').forEach(el => el.style.display = 'none');

            if (!username) {
                document.getElementById('loginUsernameError').style.display = 'block';
                isValid = false;
            }
            if (password.length < 6) {
                document.getElementById('loginPasswordError').style.display = 'block';
                isValid = false;
            }

            if (isValid) {
                alert('Login successful! Welcome to Mehsana Urban Transport.');
                this.reset();
            }
        });

        document.getElementById('registerForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('regName').value.trim();
            const email = document.getElementById('regEmail').value.trim();
            const password = document.getElementById('regPassword').value;
            const confirmPassword = document.getElementById('regConfirmPassword').value;
            let isValid = true;

            document.querySelectorAll('#registerForm .error').forEach(el => el.style.display = 'none');

            if (!name) {
                document.getElementById('regNameError').style.display = 'block';
                isValid = false;
            }
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                document.getElementById('regEmailError').style.display = 'block';
                isValid = false;
            }
            if (password.length < 6) {
                document.getElementById('regPasswordError').style.display = 'block';
                isValid = false;
            }
            if (password !== confirmPassword) {
                document.getElementById('regConfirmPasswordError').style.display = 'block';
                isValid = false;
            }

            if (isValid) {
                alert('Registration successful! Welcome to Mehsana Urban Transport.');
                this.reset();
            }
        });

        document.getElementById('feedbackForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('feedbackName').value.trim();
            const email = document.getElementById('feedbackEmail').value.trim();
            const message = document.getElementById('feedbackMessage').value.trim();
            let isValid = true;

            document.querySelectorAll('#feedbackForm .error').forEach(el => el.style.display = 'none');

            if (!name) {
                document.getElementById('feedbackNameError').style.display = 'block';
                isValid = false;
            }
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                document.getElementById('feedbackEmailError').style.display = 'block';
                isValid = false;
            }
            if (!message) {
                document.getElementById('feedbackMessageError').style.display = 'block';
                isValid = false;
            }

            if (isValid) {
                alert('Thank you for your feedback! We will get back to you soon.');
                this.reset();
            }
        })
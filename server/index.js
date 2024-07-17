document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');

    // Create and display the form
    const form = document.createElement('form');
    form.innerHTML = `
        

<div class="container">
<div class="brand-logo"></div>
<div class="brand-title">Apply NOW</div>
<div class="inputs">
<div>
<label for="fullName">Full Name:</label>
<input type="text" id="fullName" name="fullName" required>
</div>
<div>
<label for="email">Email:</label>
<input type="email" id="email" name="email" required>
</div>
<div>
<label for="phone">Phone:</label>
<input type="tel" id="phone" name="phone" required>
</div>
<div>
<label for="image">Upload Screenshot:</label>
<input type="file" id="image" name="image" accept="image/*" required>
</div>
<button type="submit">Submit Application</button>
</div>

</div>
    `;

    app.appendChild(form);

    // Handle form submission
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(form);

        try {
            const response = await fetch('/submit-application', {
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.text();
            alert('Application submitted successfully! Check your email for confirmation.');
            form.reset();
        } catch (error) {
            console.error('Error:', error);
            alert('There was an error submitting your application. Please try again.');
        }
    });
});
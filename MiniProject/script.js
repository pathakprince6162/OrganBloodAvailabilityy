// script.js - small demo functionality for the static project

// set year in footers
document.addEventListener('DOMContentLoaded', function () {
    var y = new Date().getFullYear();
    var el1 = document.getElementById('year');
    var el2 = document.getElementById('year2');
    var el3 = document.getElementById('year3');
    var el4 = document.getElementById('year4');
    if (el1) el1.textContent = y;
    if (el2) el2.textContent = y;
    if (el3) el3.textContent = y;
    if (el4) el4.textContent = y;

    // Basic demo: blood search form (static mock results)
    var bsForm = document.getElementById('blood-search-form');
    if (bsForm) {
        bsForm.addEventListener('submit', function (e) {
            e.preventDefault();
            var bg = document.getElementById('blood-group').value;
            var city = document.getElementById('city').value.trim();
            var results = document.getElementById('blood-search-results');
            if (!bg || !city) {
                results.innerHTML = '<p style="color:#b30000;">Please select blood group and enter city.</p>';
                return;
            }
            // Mock result - in real app fetch from server
            results.innerHTML = '<p><strong>Demo results for ' + bg + ' in ' + city + ':</strong></p>' +
                '<ul><li>Donor: Ramesh Kumar — Phone: 98765XXXXX</li>' +
                '<li>Blood Bank: City Blood Bank — Phone: 98989XXXXX</li></ul>';
        });
    }

    // Donation form demo
    var donationForm = document.getElementById('donation-form');
    if (donationForm) {
        donationForm.addEventListener('submit', function (e) {
            e.preventDefault();
            var name = document.getElementById('donor-name').value.trim();
            var email = document.getElementById('donor-email').value.trim();
            var phone = document.getElementById('donor-phone').value.trim();
            var dtype = document.getElementById('donor-type').value;
            var bloodGroup = document.getElementById('blood-group-d').value;
            var resp = document.getElementById('donation-response');

            if (!name || !email || !phone || !dtype) {
                resp.innerHTML = '<p style="color:#b30000;">Please fill all required fields.</p>';
                return;
            }

            // Simple client-side validation passed - show demo message
            var msg = '<p>Thank you, <strong>' + name + '</strong>! You have registered to <strong>' + (dtype === 'blood' ? 'donate blood' : 'be an organ donor') + '</strong>.</p>';
            if (dtype === 'blood' && bloodGroup) {
                msg += '<p>Blood Group: ' + bloodGroup + '</p>';
            }
            msg += '<p>Note: This is a demo registration. In a real application your information would be saved securely and verified.</p>';
            resp.innerHTML = msg;

            // clear form (demo)
            donationForm.reset();
        });
    }
});

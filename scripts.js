document.getElementById('generate-btn').addEventListener('click', function() {
    const text = document.getElementById('text-input').value;
    const qrCodeImage = document.getElementById('qr-code');
    const options = {
        width: 200,
        margin: 2,
        color: {
            dark: '#000000',  // QR code color
            light: '#ffffff'  // Background color
        }
    };
    QRCode.toDataURL(text, options, function (err, url) {
        if (err) console.error(err);
        qrCodeImage.src = url;
    });
});

// Disable right-click everywhere
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// Add click event to save the QR code image
document.getElementById('qr-code').addEventListener('click', function() {
    const text = document.getElementById('text-input').value;
    const qrCodeImage = document.getElementById('qr-code');
    const link = document.createElement('a');
    link.href = qrCodeImage.src;
    link.download = 'kuma-qr-code.png';
    link.click();
});
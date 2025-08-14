window.onload = function() {
    setInterval(function() {
        if (!navigator.onLine) {
            location.reload(); // ইন্টারনেট না থাকলে প্রতি ৩ সেকেন্ডে রিফ্রেশ হবে
        }
    }, 3000);
};

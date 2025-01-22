window.onload = function() {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['دی', 'بهمن', 'اسفند', 'فروردین', 'اردیبهشت', 'خرداد'],
            datasets: [{
                label: 'گزارش ماهانه',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // افزودن قابلیت فیلتر زمانی
    document.getElementById('dateFilter').addEventListener('change', function() {
        var filterValue = this.value;
        // به‌روزرسانی داده‌های نمودار بر اساس فیلتر انتخابی
        if (filterValue === 'daily') {
            myChart.data.labels = ['شنبه', 'یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه'];
            myChart.data.datasets[0].data = [3, 2, 1, 4, 5, 2, 3];
        } else if (filterValue === 'weekly') {
            myChart.data.labels = ['هفته 1', 'هفته 2', 'هفته 3', 'هفته 4'];
            myChart.data.datasets[0].data = [15, 20, 25, 30];
        } else if (filterValue === 'monthly') {
            myChart.data.labels = ['دی', 'بهمن', 'اسفند', 'فروردین', 'اردیبهشت', 'خرداد'];
            myChart.data.datasets[0].data = [12, 19, 3, 5, 2, 3];
        }
        myChart.update();
    });

    // افزودن قابلیت صادرات به PDF و Excel
    document.getElementById('exportPDF').addEventListener('click', function() {
        // کد صادرات به PDF
    });

    document.getElementById('exportExcel').addEventListener('click', function() {
        // کد صادرات به Excel
    });
};

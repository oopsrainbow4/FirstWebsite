let currentLanguage = 'en';

document.querySelector('button').addEventListener('click', () => {
    if (currentLanguage === 'en') {
        document.getElementById('heading').textContent = 'Đây là cuộc sống hàng ngày của tôi trong kỳ nghỉ hè';
        document.getElementById('title').textContent = 'Chào, đây là trang web đầu tiên của tôi từ VScode';
        document.getElementById('time').textContent = 'Thời gian';
        document.getElementById('whatIdo').textContent = 'Tôi làm gì';
        document.getElementById('row1').textContent = 'Thức dậy';
        document.getElementById('row2').textContent = 'Bữa sáng';
        document.getElementById('row3').textContent = 'Tự học';
        document.getElementById('row4').textContent = 'Nói chuyện với bạn';
        document.getElementById('row5').textContent = 'Bữa trưa';
        document.getElementById('row6').textContent = 'Ngủ trưa';
        document.getElementById('row7').textContent = 'Làm một số việc ngẫu nhiên';
        document.getElementById('row8').textContent = 'Bữa tối';
        document.getElementById('row9').textContent = 'Ngủ';

        currentLanguage = 'vn';
    }
    else if (currentLanguage === 'fi') {
        document.getElementById('heading').textContent = 'This is My Daily Life during Summer holiday';
        document.getElementById('title').textContent = 'Hi, this is my first website from VScode';
        document.getElementById('time').textContent = 'Time';
        document.getElementById('whatIdo').textContent = 'What I do';
        document.getElementById('row1').textContent = 'I wake up';
        document.getElementById('row2').textContent = 'Breakfast';
        document.getElementById('row3').textContent = 'Studying';
        document.getElementById('row4').textContent = 'Talking to my friend';
        document.getElementById('row5').textContent = 'Lunch';
        document.getElementById('row6').textContent = 'Take a nap';
        document.getElementById('row7').textContent = 'Do a random things';
        document.getElementById('row8').textContent = 'Dinner';
        document.getElementById('row9').textContent = 'Sleep';

        currentLanguage = 'en';
    }
    else if (currentLanguage === 'vn') {
        document.getElementById('heading').textContent = 'Tämä on Arkielämäni Kesälomalla';
        document.getElementById('title').textContent = 'Hei, tämä on minun ensimmäinen verkkosivuni VScodessa.';
        document.getElementById('time').textContent = 'Aika';
        document.getElementById('whatIdo').textContent = 'Mitä teen';
        document.getElementById('row1').textContent = 'Herääminen';
        document.getElementById('row2').textContent = 'Aamiainen';
        document.getElementById('row3').textContent = 'Opiskelu';
        document.getElementById('row4').textContent = 'Puhuminen ystävän kanssa';
        document.getElementById('row5').textContent = 'Lounas';
        document.getElementById('row6').textContent = 'Torkut';
        document.getElementById('row7').textContent = 'Satunnaisten ​​asioiden tekeminen';
        document.getElementById('row8').textContent = 'Illallinen';
        document.getElementById('row9').textContent = 'Nukkuminen';

        currentLanguage = 'fi';
    }
});
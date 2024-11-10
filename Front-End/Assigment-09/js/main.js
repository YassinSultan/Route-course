//Use an array to hold the value of the quotes
const arrayOfayat = [
    {
        'source': 'القرآن الكريم - سورة البقرة، الآية 286',
        'aya': 'لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا.'
    },
    {
        'source': 'القرآن الكريم - سورة آل عمران، الآية 139',
        'aya': 'وَلَا تَهِنُوا وَلَا تَحْزَنُوا وَأَنتُمُ الْأَعْلَوْنَ إِن كُنتُم مُّؤْمِنِينَ.'
    },
    {
        'source': 'القرآن الكريم - سورة الشرح، الآية 6',
        'aya': 'إِنَّ مَعَ الْعُسْرِ يُسْرًا.'
    },
    {
        'source': 'القرآن الكريم - سورة التوبة، الآية 51',
        'aya': 'قُل لَّن يُصِيبَنَا إِلَّا مَا كَتَبَ اللَّهُ لَنَا.'
    },
    {
        'source': 'القرآن الكريم - سورة يوسف، الآية 87',
        'aya': 'إِنَّهُ لَا يَيْأَسُ مِن رَّوْحِ اللَّهِ إِلَّا الْقَوْمُ الْكَافِرُونَ.'
    },
    {
        'source': 'القرآن الكريم - سورة العنكبوت، الآية 69',
        'aya': 'وَالَّذِينَ جَاهَدُوا فِينَا لَنَهْدِيَنَّهُمْ سُبُلَنَا.'
    },
];

var result = -1;
function generateAya() {
    let random;
    do {
        random = Math.floor(Math.random() * arrayOfayat.length);
    } while (random === result);

    result = random;

    document.querySelector('#aya').textContent = `\"${arrayOfayat[random].aya}\"`;
    document.querySelector('#source').textContent = `--${arrayOfayat[random].source}`;
}


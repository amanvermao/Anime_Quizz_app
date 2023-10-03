

const qustions = [
    {
        'que': 'Who is the main character of the anime named Naruto',
        'img': 'https://images4.fanpop.com/image/photos/19100000/Sasuke-Uchiha-naruto-shippuuden-sasuke-lovers-19110133-1280-720.jpg',
        'img1': 'https://staticg.sportskeeda.com/editor/2022/08/53e15-16596004347246.png?w=840',
        'img2': 'https://i1.sndcdn.com/artworks-oIM7azTwJ5XazPzP-tDGOdw-t500x500.jpg',
        'img3': 'https://www.looper.com/img/gallery/the-untold-truth-of-narutos-gaara/l-intro-1650993663.jpg',
        'a': 'Sasuke Uchiha',
        'b': 'Naruto',
        'c': 'Kakashi Hatake',
        'd': 'Gaara',
        'correct': 'b'
    },
    {
        'que': 'Who kills Gojo sataru',
        'img': 'https://m.media-amazon.com/images/M/MV5BNjQ1OGNlNWMtMDJiNC00NmJhLWJjYTItMDQwODA1YzBmYjgzXkEyXkFqcGdeQXVyMTYzNzk2MDE2._V1_.jpg',
        'img1': 'https://staticg.sportskeeda.com/editor/2023/02/7d17a-16754537065524.png',
        'img2': 'https://i.pinimg.com/originals/6e/60/28/6e6028b504fd5f5e50661411618e4f55.jpg',
        'img3': 'https://qph.cf2.quoracdn.net/main-qimg-1acd324f0758fd639f381426df97df47-lq',
        'a': 'sukuna',
        'b': 'Megumi Fushiguro',
        'c': 'Panda',
        'd': 'Nobara Kugisaki',
        'correct': 'a'
    },
    {
        'que': 'who is the right hand of straw hat pirates',
        'img': 'https://cdn.myanimelist.net/s/common/uploaded_files/1476881633-e71f544272d9907d6041c44dec7f97fd.png',
        'img1': 'https://staticg.sportskeeda.com/editor/2023/05/50b87-16836967920057-1920.jpg?w=840',
        'img2': 'https://staticg.sportskeeda.com/editor/2022/10/453c3-16653221728303.png?w=840',
        'img3': 'https://lh4.googleusercontent.com/hSsG0SX2hk47MlH3JvzZ8uZra1LY3mCs-93lDPnsCCnFhhLQurUYTbqFBnm6gbjpW5kbwNi3g5NHPnufF6D3S0IMtZqYorKdFcdhPq8E4XMZ8Ogx8ccexw4sOqK7XQUiDkC1CCjtruV5clRMUi0ojGM',
        'a': 'Sanji',
        'b': 'Franky',
        'c': 'Roronoa Zoro',
        'd': 'Usopp',
        'correct': 'c'
    },
    {
        'que': "what is the name of Luffy's  latest form",
        'img': 'https://staticg.sportskeeda.com/editor/2022/09/2d7d0-16629611792986.png?w=840',
        'img1': 'https://staticg.sportskeeda.com/editor/2022/09/62910-16629616174769.png?w=840',
        'img2': 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/12/Luffy-Gear-Third-Featured.jpg',
        'img3': 'https://www.comingsoon.net/wp-content/uploads/sites/3/2023/08/one-piece-gear-5.png',
        'a': 'Gear Second',
        'b': ' Fourth Gear',
        'c': 'gear 3',
        'd': 'gear 5',
        'correct': 'd'
    },
    {
        'que': 'cutest anime character',
        'img': ' https://www.looper.com/img/gallery/komi-cant-communicate-release-date-cast-and-plot-what-we-know-so-far/l-intro-1620915743.jpg',
        'img1': 'https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2020/10/nezuko-kamado-in-desmon-slayer-opening-intro-anime.jpg',
        'img2': 'https://c4.wallpaperflare.com/wallpaper/560/855/635/spy-x-family-anya-forger-hd-wallpaper-preview.jpg',
        'img3': 'https://pm1.aminoapps.com/7455/f11a5fa352ab0dd8a170afc066dc46d46ff71d64r1-1920-1080v2_00.jpg',
        'a': 'Shoko Komi',
        'b': 'Nezuko Kamado',
        'c': 'Anya Forger ',
        'd': 'Ayame Himuro ',
        'correct': 'a'
    },
    {
        'que': 'Who is the main protagonist in Demon Slayer: Kimetsu no Yaiba ?',
        'img': 'https://www.fortressofsolitude.co.za/wp-content/uploads/2022/11/Notable-Characters-in-Demon-Slayer_-Kimetsu-no-Yaiba.jpeg',
        'img1': 'https://w.forfun.com/fetch/44/44e77e1a73aea5068a76fc123a44d71b.jpeg',
        'img2': 'https://preview.redd.it/whats-your-favourite-thing-about-giyu-tomioka-v0-m5burkjiysab1.jpg?width=640&crop=smart&auto=webp&s=1f4548f67e9e890dc79025c4d38ee74a40e40402',
        'img3': 'https://fictionhorizon.com/wp-content/uploads/2022/03/Kyojuro_declares_that_he_will_kill_a_demon-1.png',
        'a': 'Tanjiro Kamado',
        'b': 'Zenitsu Agatsuma',
        'c': 'Giyu Tomioka',
        'd': 'Kyōjurō Rengoku',
        'correct': 'a'
    },
    {
        'que': 'who is the strongest',
        'img': 'https://www.hindustantimes.com/ht-img/img/2023/09/29/1600x900/Evil-Saitama_1695998069122_1695998079247.png',
        'img1': 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2018%2F02%2Fdragon-ball-super-goku-ultra-instinct-mastered-00.jpg?w=960&cbr=1&q=90&fit=max',
        'img2': 'https://staticg.sportskeeda.com/editor/2022/08/53e15-16596004347246.png?w=840',
        'img3': 'https://www.comingsoon.net/wp-content/uploads/sites/3/2023/08/one-piece-gear-5.png',

        'a': 'Saitama',
        'b': 'Goku',
        'c': 'Naruto Uzumaki',
        'd': 'Monkey D. Luffy',
        'correct': 'b'
    },
    {
        'que': "Do you know the character who is Asta's rival",
        'img': 'https://staticg.sportskeeda.com/editor/2023/05/b423b-16845147981062-1920.jpg?w=840',
        'img1': 'https://mangathrill.com/wp-content/uploads/2019/08/verrr.jpg',
        'img2': 'https://i.pinimg.com/736x/29/24/b0/2924b08738bd3c51a32f9c6129e6e149.jpg',
        'img3': 'https://i.pinimg.com/750x/83/23/77/8323772f68b71675a9a7d01848655e77.jpg',

        'a': 'Noelle Silva',
        'b': 'Fuegoleon Vermillion',
        'c': 'Gauche Adlai',
        'd': 'Yuno',
        'correct': 'd'
    },
    {
        'que': "Ichigo Kurosaki, all of the battles you've fought were all part of my plan. who said this dialogue?",
        'img': 'https://www.animerankers.com/wp-content/uploads/2021/12/l70e5jbufn151.jpg',
        'img1': 'https://miro.medium.com/v2/resize:fit:1080/1*gvNJefrW_2FTvRyjfyHHKQ.jpeg',
        'img2': 'https://staticg.sportskeeda.com/editor/2022/06/59003-16563099684940-1920.jpg',
        'img3': 'https://thicc-af.mywaifulist.moe/waifus/yuuichi-katagiri-friend-game/EnLubdvtI4xgDLtWLZgXlVjetKI4KtGK7mwaXjwC.jpg?class=thumbnail',

        'a': 'Kiyotaka Ayanokoji',
        'b': 'Light Yagami',
        'c': 'Aizen',
        'd': 'Yuuichi Katagiri',
        'correct': 'c'
    },
    {
        'que': "which anime is created by Eiichiro Oda",
        'img': 'https://cdn.technadu.com/wp-content/uploads/2022/02/Ichigo-x-Bleach-696x392.jpg',
        'img1': ' https://staticg.sportskeeda.com/editor/2022/08/53e15-16596004347246.png?w=840',
        'img2': 'https://www.comingsoon.net/wp-content/uploads/sites/3/2023/08/one-piece-gear-5.png',
        'img3': 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2018%2F02%2Fdragon-ball-super-goku-ultra-instinct-mastered-00.jpg?w=960&cbr=1&q=90&fit=max',

        'a': 'Bleach',
        'b': 'Naruto',
        'c': 'One piece',
        'd': 'Dragon Ball Z',
        'correct': 'c'
    }


]

let index = 0;
let total = qustions.length
let right = 0,
    wrong = 0;


const queBox = document.getElementById('qusBox')
const inputOptions = document.querySelectorAll('.options')
const optionImg = document.querySelectorAll('.img')

const loadQustion = () => {
    if (index === total) {
        return endQuiz();

    }
    reset();
    const data = qustions[index]
    console.log(data);
    queBox.innerText = `${index + 1}. ${data.que}`
    //    document.getElementById('img1').src =`${data.img}`




    inputOptions[0].nextElementSibling.src = `${data.img}`
    inputOptions[1].nextElementSibling.src = `${data.img1}`
    inputOptions[2].nextElementSibling.src = `${data.img2}`
    inputOptions[3].nextElementSibling.src = `${data.img3}`


    optionImg[0].nextElementSibling.innerText = data.a
    optionImg[1].nextElementSibling.innerText = data.b
    optionImg[2].nextElementSibling.innerText = data.c
    optionImg[3].nextElementSibling.innerText = data.d

}

const submitQuiz = () => {
    const data = qustions[index]
    const ans = getAnswer();
    if (ans == data.correct) {
        right++

    } else {
        wrong++

    }
    index++
    loadQustion()

    return;


}

const getAnswer = () => {
    let answer;

    inputOptions.forEach((input) => {

        if (input.checked) {
            answer = input.value
        }

    })
    return answer

}

const reset = () => {
    inputOptions.forEach((input) => {
        if (input.checked) {

            input.checked = false;
        }


    })


}

const endQuiz = () => {


    document.getElementById("box").innerHTML = `
        
       
   <div class="finish">
   <div class="f-box">
       <h1 class="f-heading">congratulations you successfully finish the Quiz</h1>
   <img src="zoro-img-removebg-preview.png" alt="" class="zoro-img">
</div>
 <h1 class="t-heading"> Total Score  ${right}/ ${total}</h1> 
</div>

        `

}








loadQustion();



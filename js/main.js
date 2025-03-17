//! Random Quotes Generator 

//1- Array to carry objects that contain keys [{ quote: , auther: }]
var quotes = [
    { 
        quote:`Do not wait for the perfect moment, take the moment and make it perfect.`,
        auther:`— Unknown`
    },
    { 
        quote:`Great things happen to those who don't stop believing, trying, learning, and being grateful.`,
        auther:`― Roy T. Bennett, The Light in the Heart`
    },
    { 
        quote:`You never change your life until you step out of your comfort zone; change begins at the end of your comfort zone.`,
        auther:`― Roy T. Bennett`
    },
    { 
        quote:`All you need in this life is ignorance and confidence; then success is sure`,
        auther:`― Mark Twain`
    },
    { 
        quote:`Let the improvement of yourself keep you so busy that you have no time to criticize others.`,
        auther:`― Roy T. Bennett, The Light in the Heart`
    },
    { 
        quote:`Have no fear of perfection - you'll never reach it.`,
        auther:`― Salvador Dali`
    },
    { 
        quote:`The meeting of two personalities is like the contact of two chemical substances: if there is any reaction, both are transformed.`,
        auther:`― Carl Gustav Jung`
    },
    { 
        quote:`Instead of worrying about what you cannot control, shift your energy to what you can create`,
        auther:`― Roy T. Bennett, The Light in the Heart`
    },
    { 
        quote:`The future depends on what you do today`,
        auther:`— Mahatma Gandhi`
    },
    { 
        quote:`If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you`,
        auther:`— Steve Jobs`
    },
]

var lastIndex = -1 ;

//2- generate a function to select the quote randomly when user click on the button
function generateQuote(){
    var randomIndex = lastIndex ;
    
    for(var i = 0 ; i < quotes.length ;i++){ // 1st --> select indexes randomly by using Math.floor() ضروري استخدمها مع math.random() لاختيار الرقم عشوائي 
        var randomIndex = Math.floor(Math.random()* quotes.length);         // Math.random()* quotes.length بضربها في عدد المصفوفة لانه مش عدد ثابت 
        if(randomIndex !== lastIndex){
            break;
        }
    }
    lastIndex = randomIndex; // update the value of lastIndex عشان اضمن ميتكررش اي مرة تانية
    var randomQuotes = quotes[randomIndex];     // 2nd --> variable calls quote which has the randomIndex

    document.getElementById('quote').innerHTML = ` ❝ ${randomQuotes.quote}❞`; 
    document.getElementById('auther').innerHTML = `${randomQuotes.auther}`;
}
//invoke the function 
generateQuote()






//------------------------------------------------------------------------------------------
//! change the backgraound-color of breakline
const button = document.querySelector('button');
const breakLine = document.querySelector('.break-line');

button.addEventListener('focus', () => {
    breakLine.classList.add('active');
});

button.addEventListener('blur', () => {
    breakLine.classList.remove('active');
});
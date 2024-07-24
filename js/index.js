let main_nav=document.querySelector(".main-nav")
let nav_toggler=document.querySelector(".nav-toggler")
let togle_nav=document.querySelector(".togle-nav")
let nav_close=document.querySelector(".nav-close")
nav_toggler.addEventListener("click",function(){
    main_nav.classList.add("d-none")
    togle_nav.classList.replace("d-none","d-flex")
})
nav_close.addEventListener("click",function(){
    main_nav.classList.remove("d-none")
    togle_nav.classList.replace("d-flex","d-none")
})
let final_res
async function getApi(Url){
    let res=await fetch(Url)
    final_res=await res.json()
    let cartona=""
    let rate
    let title
    for(i=1;i<final_res.results.length;i++){
        if (final_res.results[i].title==undefined){
            title=final_res.results[i].name
        }
        else{
            title=final_res.results[i].title
        }
        rate=final_res.results[i].vote_average
        cartona+=
        `
        <div class="col-xl-4 col-sm-12 col-md-6">
            <div class="inner p-2">
                <div class="imgs-container">
                    <div class="position-relative">
                        <img src="https://image.tmdb.org/t/p/w500${final_res.results[i].poster_path}" class="img-fluid" alt="">
                            <div class="overlay text-white position-absolute">
                                <div class="desc">
                                    <h2>${title}</h2>
                                    <p>${final_res.results[i].overview}</p>
                                    <p>Release date: ${final_res.results[i].release_date}</p>
                                    <div class="rate rounded-circle">${Number(rate.toFixed(1))}</div>
                                </div>
                            </div>   
                    </div>
                </div>
            </div>
        </div>

        `
    }
    document.querySelector(".row").innerHTML=cartona
}
let search_input=document.querySelector(".search")
function search(input){
    if (!final_res) return;
    let cartona=""
    let rate
    let title
    for(i=1;i<final_res.results.length;i++){
        if (final_res.results[i].title==undefined){
            title=final_res.results[i].name
        }
        else{
            title=final_res.results[i].title
        }
        rate=final_res.results[i].vote_average
        if(title.toLowerCase().includes(input.toLowerCase())){
            cartona+=
            `
            <div class="col-xl-4 col-sm-12 col-md-6">
                <div class="inner p-2">
                    <div class="imgs-container">
                        <div class="position-relative">
                            <img src="https://image.tmdb.org/t/p/w500${final_res.results[i].poster_path}" class="img-fluid" alt="">
                                <div class="overlay text-white position-absolute">
                                    <div class="desc">
                                        <h2>${title}</h2>
                                        <p>${final_res.results[i].overview}</p>
                                        <p>Release date: ${final_res.results[i].release_date}</p>
                                        <div class="rate rounded-circle">${Number(rate.toFixed(1))}</div>
                                    </div>
                                </div>   
                        </div>
                    </div>
                </div>
            </div>
    
            `
        }
    }
    document.querySelector(".row").innerHTML=cartona
}
getApi("https://api.themoviedb.org/3/movie/now_playing?api_key=f40ada7770988d311920882e8a8a64ba")
let nowPlaying_item=document.querySelector(".nowPlaying-item")
nowPlaying_item.addEventListener("click",function(){
    getApi("https://api.themoviedb.org/3/movie/now_playing?api_key=f40ada7770988d311920882e8a8a64ba")
})
let popular_nav_item=document.querySelector(".popular-item")
popular_nav_item.addEventListener("click",function(){
    getApi("https://api.themoviedb.org/3/movie/popular?api_key=f40ada7770988d311920882e8a8a64ba")
})
let topRated_nav_item=document.querySelector(".topRated-item")
topRated_nav_item.addEventListener("click",function(){
    getApi("https://api.themoviedb.org/3/movie/top_rated?api_key=f40ada7770988d311920882e8a8a64ba")
})
let trending_nav_item=document.querySelector(".trending-item")
trending_nav_item.addEventListener("click",function(){
    getApi("https://api.themoviedb.org/3/trending/all/day?api_key=f40ada7770988d311920882e8a8a64ba")
})

let Upcomming_nav_item=document.querySelector(".upcomming-item")
Upcomming_nav_item.addEventListener("click",function(){
    getApi("https://api.themoviedb.org/3/movie/upcoming?api_key=f40ada7770988d311920882e8a8a64ba")
})
search_input.addEventListener("input",function(e){
    search(e.target.value)
})
let Username=document.querySelector(".name")
let email=document.querySelector(".email")
let phone=document.querySelector(".phone")
let age=document.querySelector(".age")
let password=document.querySelector(".password")
let re_password=document.querySelector(".re-password")
function name_validation(){
    let name_regex=/^[A-Za-z]+$/
    if(name_regex.test(Username.value)){
        Username.style.borderBottom="1px solid white"
        document.querySelector(".name-warning").classList.add("d-none")
    }
    else{
        Username.style.borderBottom="1px solid red"
        document.querySelector(".name-warning").classList.remove("d-none")
    }
}
Username.addEventListener("input",function(){
    name_validation()
})
let email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function email_validation(){
    if(email_regex.test(email.value)){
        email.style.borderBottom="1px solid white"
        document.querySelector(".email-warning").classList.add("d-none")
    }
    else{
        email.style.borderBottom="1px solid red"
        document.querySelector(".email-warning").classList.remove("d-none")
    }
}
email.addEventListener("input",function(){
    email_validation()
})

let phone_regex =/^\+?\d{1,3}?\s?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;;
function phone_validation(){
    if(phone_regex.test(phone.value)){
        phone.style.borderBottom="1px solid white"
        document.querySelector(".phone-warning").classList.add("d-none")
    }
    else{
        phone.style.borderBottom="1px solid red"
        document.querySelector(".phone-warning").classList.remove("d-none")
    }
}
phone.addEventListener("input",function(){
    phone_validation()
})
let age_regex = /^\d+(\.\d+)?$/;
function age_validation(){
    if(age_regex.test(age.value)&&age.value>16){
        age.style.borderBottom="1px solid white"
        document.querySelector(".age-warning").classList.add("d-none")
    }
    else{
        age.style.borderBottom="1px solid red"
        document.querySelector(".age-warning").classList.remove("d-none")
    }
}
age.addEventListener("input",function(){
    age_validation()
})
let password_regex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;
function password_validation(){
    if(password_regex.test(password.value)){
        password.style.borderBottom="1px solid white"
        document.querySelector(".password-warning").classList.add("d-none")
    }
    else{
        password.style.borderBottom="1px solid red"
        document.querySelector(".password-warning").classList.remove("d-none")
    }
}
password.addEventListener("input",function(){
    password_validation()
})
function repassword_validation(){
    if(password.value===re_password.value){
        re_password.style.borderBottom="1px solid white"
        document.querySelector(".re-password-warning").classList.add("d-none")
    }
    else{
        re_password.style.borderBottom="1px solid red"
        document.querySelector(".re-password-warning").classList.remove("d-none")
    }
}
re_password.addEventListener("input",function(){
    repassword_validation()
})
let submit_btn=document.querySelector(".btn")
let my_form=document.querySelector("#contact-us")
my_form.addEventListener("submit",function(e){
    e.preventDefault()
    Username.value=""
    email.value=""
    age.value=""
    phone.value=""
    password.value=""
    re_password.value=""
})
document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopButton = document.getElementById('scrollToTop');

    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopButton.classList.add('show');
        } else {
            scrollToTopButton.classList.remove('show');
        }
    });
    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        scrollToTopButton.classList.remove('show');
    });
});

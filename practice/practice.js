document.addEventListener("DOMContentLoaded", ()-> {
    const signup = document.getElementById("signup");
    const login = document.getElementById("login");
    switchToSignUp=()->{
    login.style.transform="rotate(-5deg)";
    login.style.animationName="topRightSignUp";
    login.style.animationDuration="1s";
    setTimeout(()->{
    login.style.zIndex= "1";
    signup.style.zIndex= "1";
    login.style.animationName="topRightLogin";
    login.style.animationDuration="1s";},900);
};
 switchToLogin=()->{
    login.style.transform="rotate(-5deg)";
    signup.style.animationName="topRightSignUp";
    signup.style.animationDuration="1s";
    setTimeout(()->{
    signup.style.zIndex= "1";
    login.style.zIndex= "1";
    signup.style.animationName="topRightLogin";
    signup.style.animationDuration="1s";},900);
};
});
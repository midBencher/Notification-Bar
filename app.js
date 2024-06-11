let number = 3;
const notificationCount = document.querySelector('.notificationCount')
const markUnread = document.querySelector(".markUnread")
const unreadNotification1 = document.querySelector('.unreadNotification1')
const unreadNotification2 = document.querySelector('.unreadNotification2')
const unreadNotification3 = document.querySelector('.unreadNotification3')
unreadNotification1.addEventListener('click' , ()=>{
    unreadNotification1.style.backgroundColor = "white";
    number-- ;
   if(number>=0){
    notificationCount.innerHTML = number;
   }
   
   
   
},{once:true})
unreadNotification2.addEventListener('click',()=>{
    unreadNotification2.style.backgroundColor = "white";
    number--;
    if(number>=0){
        notificationCount.innerHTML = number;
       }
},{once:true})
unreadNotification3.addEventListener('click',()=>{
    unreadNotification3.style.backgroundColor = "white";
    number--;
    if(number>=0){
        notificationCount.innerHTML = number;
       }
},{once:true})

markUnread.addEventListener('click',()=>{
   if(number>0){
    unreadNotification1.style.backgroundColor = "white";
    unreadNotification2.style.backgroundColor = "white";
    unreadNotification3.style.backgroundColor = "white";
    number = 0;
    notificationCount.innerHTML = number;
    
   }
   
})
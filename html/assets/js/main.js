/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/
function toggleSidebar(){
    this.classList.toggle('toggle');
    this.parentElement.classList.toggle("open");
    document.querySelector('body').classList.toggle('overflow-hidden');
}
document.querySelector('.bar-icon').addEventListener('click', toggleSidebar );

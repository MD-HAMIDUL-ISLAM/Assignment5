   document.addEventListener('DOMContentLoaded', function(){
    const btnBlog = document.getElementById('btn-blog');
    if(btnBlog) {
        btnBlog.addEventListener('click', function(event){
            event.preventDefault();
            window.location.href = './blog.html'
            });
        }
        
        const btnHome = document.getElementById('btn-home');
    if(btnHome) {
        btnHome.addEventListener('click', function(event){
            event.preventDefault();
            window.location.href = './index.html'
            });
        }
   })

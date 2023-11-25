
var ctrl_play_pause = true;
var audio = new Audio('DM_20231104204653_001.m4a');

$("#play").click(function(){
    console.log('被点击了');

    console.log(ctrl_play_pause);
    if(ctrl_play_pause == true){
        $(this).html('<span class="icon">&#xe68e;</span>');
        audio.play();
        ctrl_play_pause = false;
    }else{
        $(this).html('<span class="icon">&#xe630;</span>');
        audio.pause();
        ctrl_play_pause = true;
    }
    
})

$("#next").click(function(){
    audio.pause();
    audio = new Audio('DM_20231125154305_001.mp3');
    audio.play();
    console.log('next');
})

document.querySelector('#tfimg').addEventListener('mouseover', function(){
    console.log('更换图片');
    this.src = "R-C.gif";
})

document.querySelector('#tfimg').addEventListener('mouseleave', function(){
    console.log('更换图片');
    this.src = "IMG_20231125_155422.jpg";
})
